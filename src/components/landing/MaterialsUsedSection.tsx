"use client";

import React from "react";
import type { LandingPageData } from "@/data/landingPageDataTypes";
import AnimateInView from "@/components/landing/AnimateInView";

interface MaterialsUsedSectionProps {
  pageData: LandingPageData;
}

export default function MaterialsUsedSection({ pageData }: MaterialsUsedSectionProps) {
  const content = pageData.materialsUsed;
  if (!content) return null;

  return (
    <section className="pt-8 sm:pt-12 pb-6 sm:pb-8 bg-gradient-to-b from-[#f9f2eb] to-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          width="979"
          height="1077"
          viewBox="0 0 850 1150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-full lg:w-[60%] h-full"
          style={{ top: "0%", right: "0%", left: "auto", opacity: 1 }}
        >
          <defs>
            <linearGradient id="paint0_linear_materials" x1="156.142" y1="99.9245" x2="642.819" y2="767.453" gradientUnits="userSpaceOnUse">
              <stop stopColor="#97602f" stopOpacity="0.3" />
              <stop offset="1" stopColor="#0C6B76" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path
            d="M-141.394 185.383C-101.919 95.3973 -11.695 -30.8149 133.505 -56.0915C215.251 -70.3219 280.504 -3.97335 258.806 76.1148C252.141 100.718 242.23 125.928 228.258 149.032C182.639 224.466 47.2368 365.609 -14.0301 499.779C-72.1095 626.968 73.2183 712.424 151.853 596.808C154.747 592.554 157.638 588.25 160.531 583.91C235.571 456.162 457.798 282.932 682.112 299.704C731.086 303.365 778.592 322.377 813.383 357.039C845.669 389.205 875.084 433.617 881.243 486.939C888.907 553.295 842.081 611.896 781.69 640.442C735.752 662.157 671.785 684.446 587.652 701.048C470.645 724.136 331.641 751.784 305.091 868.055C303.095 876.798 301.573 885.736 300.55 894.838C283.129 1049.88 467.554 1110.7 584.665 1007.6C696.605 909.063 845.277 939.395 903.831 971.505"
            stroke="url(#paint0_linear_materials)"
            strokeOpacity="0.25"
            strokeWidth="110"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 md:px-8 lg:px-8">
        <AnimateInView variant="fade-up">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-[3rem] font-bold leading-tight text-[#0c6b76] tracking-tight max-w-4xl mx-auto">
            {content.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0c6b76] to-[#0ca6c2] mx-auto rounded-full mt-3 sm:mt-4" />
        </div>
        <div className="max-w-4xl space-y-4 sm:space-y-6 mb-6 sm:mb-8">

          <div className="space-y-4 sm:space-y-5">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#0c6b76]/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#0c6b76]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8 text-[#2f2f2f] pt-1 sm:pt-2">
                {content.paragraph1}
              </p>
            </div>
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#0c6b76]/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#0c6b76]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8 text-[#2f2f2f] pt-1 sm:pt-2">
                {content.paragraph2}
              </p>
            </div>
          </div>

          {content.features && content.features.length > 0 && (
            <ul className="space-y-2 sm:space-y-3 mt-6 sm:mt-8">
              {content.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 sm:gap-3 text-[#2f2f2f] text-sm sm:text-base md:text-lg">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0c6b76]/20 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-[#0c6b76]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          )}
        </div>
        </AnimateInView>
      </div>
    </section>
  );
}
