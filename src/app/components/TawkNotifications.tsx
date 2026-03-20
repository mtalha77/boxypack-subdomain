'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

interface NotificationPopup {
  id: number;
  message: string;
  delay: number; // ms after widget load
}

const POPUPS: NotificationPopup[] = [
  { id: 1, message: 'Hi there! How can we help you today?', delay: 17000 },
  { id: 2, message: 'If you need help finding the right packaging, just let us know!', delay: 37000 },
];

declare global {
  interface Window {
    Tawk_API?: {
      onLoad?: () => void;
      onChatMaximized?: () => void;
      onChatStarted?: () => void;
      onChatMessageVisitor?: () => void;
      isChatMaximized?: () => boolean;
      maximize?: () => void;
    };
  }
}

export default function TawkNotifications() {
  const [visiblePopups, setVisiblePopups] = useState<number[]>([]);
  const [dismissed, setDismissed] = useState(false);
  const timeoutRefs = useRef<ReturnType<typeof setTimeout>[]>([]);
  const tawkReadyRef = useRef(false);

  // Cancel all pending timers and hide popups
  const cancelAll = useCallback(() => {
    setDismissed(true);
    setVisiblePopups([]);
    timeoutRefs.current.forEach((t) => clearTimeout(t));
    timeoutRefs.current = [];
  }, []);

  // Dismiss a single popup
  const dismissPopup = useCallback((id: number) => {
    setVisiblePopups((prev) => prev.filter((p) => p !== id));
  }, []);

  // Click on popup -> open Tawk widget and cancel remaining
  const handlePopupClick = useCallback(() => {
    if (window.Tawk_API?.maximize) {
      window.Tawk_API.maximize();
    }
    cancelAll();
  }, [cancelAll]);

  useEffect(() => {
    if (dismissed) return;

    // Wait for Tawk to load, then schedule popups
    function scheduleTriggers() {
      POPUPS.forEach((popup) => {
        const t = setTimeout(() => {
          // Don't show if already dismissed or chat is open
          if (window.Tawk_API?.isChatMaximized?.()) return;
          setVisiblePopups((prev) => {
            if (prev.includes(popup.id)) return prev;
            return [...prev, popup.id];
          });

          // Auto-hide after 8 seconds
          const hideTimer = setTimeout(() => {
            setVisiblePopups((prev) => prev.filter((p) => p !== popup.id));
          }, 8000);
          timeoutRefs.current.push(hideTimer);
        }, popup.delay);
        timeoutRefs.current.push(t);
      });
    }

    // Poll for Tawk_API.onLoad readiness
    function hookTawk() {
      if (tawkReadyRef.current) return;

      const existingOnLoad = window.Tawk_API?.onLoad;
      if (window.Tawk_API) {
        window.Tawk_API.onLoad = function () {
          if (existingOnLoad) existingOnLoad();
          tawkReadyRef.current = true;
          scheduleTriggers();
        };

        // Cancel popups when visitor opens widget
        const existingOnMax = window.Tawk_API.onChatMaximized;
        window.Tawk_API.onChatMaximized = function () {
          if (existingOnMax) existingOnMax();
          cancelAll();
        };

        const existingOnStart = window.Tawk_API.onChatStarted;
        window.Tawk_API.onChatStarted = function () {
          if (existingOnStart) existingOnStart();
          cancelAll();
        };

        const existingOnMsg = window.Tawk_API.onChatMessageVisitor;
        window.Tawk_API.onChatMessageVisitor = function () {
          if (existingOnMsg) existingOnMsg();
          cancelAll();
        };
      }
    }

    // Try to hook immediately, retry if Tawk_API not yet available
    const pollInterval = setInterval(() => {
      if (window.Tawk_API && !tawkReadyRef.current) {
        hookTawk();
        clearInterval(pollInterval);
      }
    }, 300);

    // Also try immediately
    hookTawk();

    return () => {
      clearInterval(pollInterval);
      timeoutRefs.current.forEach((t) => clearTimeout(t));
      timeoutRefs.current = [];
    };
  }, [dismissed, cancelAll]);

  if (dismissed || visiblePopups.length === 0) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '80px',
        right: '20px',
        zIndex: 2147483646,
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        maxWidth: '320px',
        pointerEvents: 'auto',
      }}
    >
      {POPUPS.filter((p) => visiblePopups.includes(p.id)).map((popup) => (
        <div
          key={popup.id}
          onClick={handlePopupClick}
          style={{
            background: '#fff',
            borderRadius: '12px',
            padding: '14px 18px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.15), 0 1px 4px rgba(0,0,0,0.08)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '12px',
            animation: 'tawkPopupSlideIn 0.4s ease-out',
            border: '1px solid #e5e7eb',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 28px rgba(0,0,0,0.18), 0 2px 6px rgba(0,0,0,0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.15), 0 1px 4px rgba(0,0,0,0.08)';
          }}
        >
          {/* Agent avatar */}
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #0c6b76, #0ca6c2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              color: '#fff',
              fontSize: '14px',
              fontWeight: 700,
            }}
          >
            BP
          </div>
          {/* Message content */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                fontSize: '12px',
                fontWeight: 600,
                color: '#374151',
                marginBottom: '3px',
              }}
            >
              BoxyPack Support
            </div>
            <div
              style={{
                fontSize: '13px',
                color: '#4b5563',
                lineHeight: '1.4',
              }}
            >
              {popup.message}
            </div>
          </div>
          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              dismissPopup(popup.id);
            }}
            style={{
              background: 'none',
              border: 'none',
              color: '#9ca3af',
              cursor: 'pointer',
              fontSize: '16px',
              lineHeight: 1,
              padding: '0 2px',
              flexShrink: 0,
              marginTop: '-2px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#374151';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#9ca3af';
            }}
            aria-label="Close notification"
          >
            ✕
          </button>
        </div>
      ))}

      <style>{`
        @keyframes tawkPopupSlideIn {
          from {
            opacity: 0;
            transform: translateY(16px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
