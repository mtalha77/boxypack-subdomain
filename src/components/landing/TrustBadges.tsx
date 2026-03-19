"use client";

import React, { useEffect, useState } from "react";

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

function TrustpilotLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path fill="#00B67A" d="M12 0L14.59 8.41L24 10L16.59 14.59L18 24L12 19.59L6 24L7.41 14.59L0 10L9.41 8.41L12 0Z" />
    </svg>
  );
}

function YelpLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path fill="#D32323" d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 0 0-.393-1.619L4.577 4.196a1.03 1.03 0 0 0-1.354.525c-.01.027-.018.055-.024.083L2.35 8.956a1.07 1.07 0 0 0 1.456 1.24l4.995-1.433c.96-.276 1.74.8 1.176 1.63L6.072 15.355a1.07 1.07 0 0 0 .393 1.619l12.9 4.308a1.03 1.03 0 0 0 1.354-.525c.007-.027.015-.055.02-.083l.85-4.652a1.07 1.07 0 0 0-1.456-1.24z" />
    </svg>
  );
}

function BBBLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path fill="#036CB6" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5v-5.5H8.5v-2H11V8.5h2v2h2.5v2H13v5.5h-2zm5.5-5.5h-2v2h2v-2zm-7 0h-2v2h2v-2z" />
    </svg>
  );
}

const PLATFORMS = [
  { name: "Google", ariaLabel: "Rated 5 stars on Google", Logo: GoogleLogo },
  { name: "Trustpilot", ariaLabel: "Rated 5 stars on Trustpilot", Logo: TrustpilotLogo },
  { name: "Yelp", ariaLabel: "Rated 5 stars on Yelp", Logo: YelpLogo },
  { name: "BBB", ariaLabel: "Rated 5 stars on BBB", Logo: BBBLogo },
] as const;

export default function TrustBadges() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #fdf8f4 0%, #faf5f0 50%, #f7efe8 100%)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.8), 0 1px 2px rgba(12,107,118,0.06)",
      }}
      aria-label="Trusted by brands, 5 star ratings"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 80% 100% at 15% 50%, rgba(12,107,118,0.08) 0%, transparent 55%),
              radial-gradient(ellipse 80% 100% at 85% 50%, rgba(151,96,47,0.06) 0%, transparent 55%)
            `,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8 lg:gap-10">
          <p
            className="text-sm sm:text-base font-semibold text-gray-800 whitespace-nowrap tracking-tight"
            style={{ textShadow: "0 1px 0 rgba(255,255,255,0.9)" }}
          >
            Trusted by brands. Rated 5 stars on:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {PLATFORMS.map((platform, i) => {
              const Logo = platform.Logo;
              return (
              <div
                key={platform.name}
                className={`group flex items-center gap-2.5 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full border bg-white/95 backdrop-blur-sm transition-all duration-300 ease-out ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
                style={{
                  borderColor: "rgba(0,0,0,0.06)",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05), 0 1px 0 rgba(255,255,255,0.8) inset",
                  transitionDelay: mounted ? `${i * 60}ms` : "0ms",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(12,107,118,0.12), 0 1px 0 rgba(255,255,255,0.9) inset";
                  e.currentTarget.style.borderColor = "rgba(12,107,118,0.2)";
                  e.currentTarget.style.transform = "scale(1.03)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.05), 0 1px 0 rgba(255,255,255,0.8) inset";
                  e.currentTarget.style.borderColor = "rgba(0,0,0,0.06)";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <Logo className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
                <div className="flex items-center gap-0.5 shrink-0" aria-hidden>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <StarIcon
                      key={n}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 drop-shadow-sm"
                    />
                  ))}
                </div>
                <span className="font-bold text-gray-900 text-sm sm:text-base tabular-nums">
                  {platform.name}
                </span>
              </div>
            );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
