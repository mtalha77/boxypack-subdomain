"use client";

import React, { useEffect, useState } from "react";

const PLATFORMS = [
  { name: "Google", ariaLabel: "Rated 5 stars on Google" },
  { name: "Trustpilot", ariaLabel: "Rated 5 stars on Trustpilot" },
  { name: "Facebook", ariaLabel: "Rated 5 stars on Facebook" },
  { name: "Sitejabber", ariaLabel: "Rated 5 stars on Sitejabber" },
] as const;

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

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
      aria-label="Trusted by brands — 5 star ratings"
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
            {PLATFORMS.map((platform, i) => (
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
