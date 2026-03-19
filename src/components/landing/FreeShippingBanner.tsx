"use client";

import React from "react";

const TICKER_TEXTS = [
  "We will create your custom box design completely free.",
  "Get free Doorstep delivery all over USA.",
];

function TruckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  );
}

const FreeShippingBanner: React.FC = React.memo(() => {
  return (
    <section
      className="relative z-[70] w-full overflow-hidden bg-gradient-to-r from-[#0c6b76] to-[#0a5a63] py-2.5 shadow-md md:py-3"
      role="banner"
      aria-label="Promotions: free custom box design, free delivery across USA"
    >
      <div className="flex w-full overflow-hidden">
        <div className="ticker-track ticker-banner-text flex shrink-0 items-center gap-2 text-sm font-bold uppercase text-white md:text-base">
          {[1, 2].map((half) => (
            <React.Fragment key={half}>
              {Array.from({ length: 8 }, (_, i) => (
                <React.Fragment key={`${half}-${i}`}>
                  <span className="flex shrink-0 items-center gap-2 whitespace-nowrap">
                    <TruckIcon className="h-4 w-4 shrink-0 md:h-5 md:w-5 text-white" />
                    {TICKER_TEXTS[i % TICKER_TEXTS.length]}
                  </span>
                  <span className="ticker-gap shrink-0" aria-hidden />
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
});

FreeShippingBanner.displayName = "FreeShippingBanner";

export default FreeShippingBanner;
