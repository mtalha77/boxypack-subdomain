"use client";

import React from "react";
import Image from "next/image";
import { companyContactData } from "@/data/companyContactData";
import { getCloudinaryUrl } from "@/data/cloudinary";
import type { LandingPageData } from "@/data/landingPageDataTypes";

const FORM_SECTION_ID = "quote-form";

interface JewelryHeroProps {
  pageData: LandingPageData;
}

export default function JewelryHero({ pageData }: JewelryHeroProps) {
  const scrollToQuote = () => {
    const el = document.getElementById(FORM_SECTION_ID);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const c = pageData;
  const raw = c.heroImages && c.heroImages.length > 0 ? c.heroImages : [c.heroImage];
  const heroImages = raw.length >= 4 ? raw.slice(0, 4) : [...raw, ...Array(4 - raw.length).fill(raw[0])];

  return (
    <section
      className="relative flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-10 px-4 sm:px-6 lg:px-12 pt-6 pb-6 sm:pt-8 sm:pb-8 lg:pt-10 lg:pb-10 min-h-[min(80vh,800px)]"
      style={{
        background: "linear-gradient(45deg, rgba(1, 63, 74, 1) 0%, rgba(128, 223, 242, 1) 100%, rgba(128, 223, 242, 1) 30%, rgba(128, 223, 242, 1) 10%)",
      }}
    >
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 sm:gap-8 lg:gap-16">
        <div className="flex-1 text-center lg:text-left text-white order-2 lg:order-1 px-1 sm:px-0">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 sm:mb-4">
            {c.name}
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-white/90 mb-3 sm:mb-4 max-w-xl mx-auto lg:mx-0">
            {c.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <span className="header-call-btn-wrapper inline-block">
              <span className="quote-btn-ping" aria-hidden="true" />
              <button
                type="button"
                onClick={scrollToQuote}
                className="group quote-btn-gradient relative z-10 inline-flex items-center justify-center gap-2 px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold text-base lg:text-lg shadow-lg text-white"
              >
                GET A QUOTE
                <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </span>
            <span className="header-call-btn-wrapper inline-block">
              <span className="header-call-btn-ping" aria-hidden="true" />
              <a
                href={companyContactData.phoneHref}
                className="group header-call-btn-gradient relative z-10 inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 lg:px-8 lg:py-4 rounded-full transition-all duration-300 font-semibold shadow-lg text-sm sm:text-base lg:text-lg"
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
        <div className="flex-1 flex items-center justify-center order-1 lg:order-2 w-full shrink-0 mb-4 sm:mb-0">
          <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 w-full max-w-2xl aspect-square max-h-[240px] sm:max-h-[320px] md:max-h-[380px]">
            {heroImages.map((imgId, i) => (
              <div
                key={`${imgId}-${i}`}
                className="relative w-full aspect-square overflow-hidden"
              >
                <Image
                  src={getCloudinaryUrl(imgId)}
                  alt={`${c.name} ${i + 1}`}
                  fill
                  className="object-contain drop-shadow-lg"
                  priority={i < 2}
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 45vw, 280px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
