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
  const heroImages = c.heroImages && c.heroImages.length >= 3 ? c.heroImages.slice(0, 3) : [c.heroImage, c.heroImage, c.heroImage];

  return (
    <section
      className="relative min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-4 sm:gap-6 lg:gap-10 px-4 sm:px-6 lg:px-12 py-5 sm:py-6 lg:py-8"
      style={{
        background: "linear-gradient(45deg, rgba(1, 63, 74, 1) 0%, rgba(128, 223, 242, 1) 100%, rgba(128, 223, 242, 1) 30%, rgba(128, 223, 242, 1) 10%)",
      }}
    >
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-16">
        <div className="flex-1 text-center lg:text-left text-white order-2 lg:order-1 px-1 sm:px-0">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 sm:mb-4">
            {c.name}
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-white/90 mb-3 sm:mb-4 max-w-xl mx-auto lg:mx-0">
            {c.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={scrollToQuote}
              className="btn-highlight group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#97602f] to-[#B27535] hover:from-[#B27535] hover:to-[#97602f] text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold text-base lg:text-lg shadow-lg"
            >
              GET A QUOTE
              <svg className="w-5 h-5 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
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
        <div className="flex-1 flex justify-center order-1 lg:order-2 w-full min-h-[240px] sm:min-h-[400px] md:min-h-[480px]">
          <div className="relative w-full max-w-2xl h-[240px] sm:h-[400px] md:h-[480px]">
            {heroImages.map((imgId, i) => {
              const positions: Array<{ top?: string; bottom?: string; left?: string; right?: string; rotate: number; scale: number }> = [
                { top: "5%", left: "0%", rotate: -8, scale: 0.9 },
                { top: "25%", right: "0%", rotate: 6, scale: 1.05 },
                { bottom: "0%", left: "15%", rotate: -4, scale: 0.85 },
              ];
              const pos = positions[i] ?? positions[0];
              return (
                <div
                  key={imgId}
                  className="absolute aspect-square w-[50%] sm:w-[180px] md:w-[220px] lg:w-[260px] max-w-[260px]"
                  style={{
                    ...(pos.top !== undefined && { top: pos.top }),
                    ...(pos.bottom !== undefined && { bottom: pos.bottom }),
                    ...(pos.left !== undefined && { left: pos.left }),
                    ...(pos.right !== undefined && { right: pos.right }),
                    zIndex: i + 1,
                    transform: `rotate(${pos.rotate}deg) scale(${pos.scale})`,
                  }}
                >
                  <Image
                    src={getCloudinaryUrl(imgId)}
                    alt={`${c.name} ${i + 1}`}
                    fill
                    className="object-contain drop-shadow-lg"
                    priority={i < 2}
                    sizes="(max-width: 640px) 180px, (max-width: 768px) 220px, 260px"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
