"use client";

import React from "react";
import { companyContactData } from "@/data/companyContactData";
import type { LandingPageData } from "@/data/landingPageDataTypes";
import AnimateInView from "@/components/landing/AnimateInView";

const FORM_SECTION_ID = "quote-form";

interface CTASectionProps {
  pageData: LandingPageData;
}

export default function CTASection({ pageData }: CTASectionProps) {
  const scrollToQuote = () => {
    const el = document.getElementById(FORM_SECTION_ID);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const cta = pageData.cta;

  return (
    <section className="py-6 sm:py-8 md:py-12 bg-gradient-to-r from-[#0c6b76] to-[#0ca6c2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateInView variant="fade-up">
          <div className="max-w-4xl mx-auto text-center space-y-5 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-[3rem] font-bold leading-tight text-white tracking-tight max-w-4xl mx-auto">
              {cta.title}
            </h2>
            <p className="text-sm sm:text-lg md:text-xl leading-7 sm:leading-8 text-white/90 max-w-2xl mx-auto">
              {cta.description}
            </p>
            <div className="flex flex-row gap-3 sm:gap-4 justify-center items-center pt-4 flex-wrap">
              <button
                onClick={scrollToQuote}
                className="btn-highlight-outline group bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0c6b76] px-4 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-lg shadow-lg cursor-pointer flex items-center justify-center"
              >
              Get a Quote
              <svg className="inline-block ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <span className="header-call-btn-wrapper inline-block">
              <span className="header-call-btn-ping" aria-hidden="true" />
              <a
                href={companyContactData.phoneHref}
                className="btn-highlight group header-call-btn-gradient relative z-10 flex items-center justify-center gap-1.5 sm:gap-2 px-5 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4 rounded-full font-semibold text-sm sm:text-base shadow-lg"
                aria-label={`Call ${companyContactData.phone}`}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="relative inline-block min-w-[7rem] sm:min-w-[8rem]">
                  <span className="transition-opacity duration-300 group-hover:opacity-0">{companyContactData.phone}</span>
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">Call Now</span>
                </span>
              </a>
            </span>
          </div>
        </div>
        </AnimateInView>
      </div>
    </section>
  );
}
