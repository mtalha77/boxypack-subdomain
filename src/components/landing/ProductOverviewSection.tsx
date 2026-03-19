"use client";

import React, { useCallback } from "react";
import Image from "next/image";
import { getCloudinaryUrl } from "@/data/cloudinary";
import type { LandingPageData } from "@/data/landingPageDataTypes";
import AnimateInView from "@/components/landing/AnimateInView";

const QUOTE_FORM_ID = "quote-form";

interface ProductOverviewSectionProps {
  pageData: LandingPageData;
}

export default function ProductOverviewSection({ pageData }: ProductOverviewSectionProps) {
  const scrollToQuote = useCallback(() => {
    const el = document.getElementById(QUOTE_FORM_ID);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const c = pageData;
  const overview = c.overview;
  const overviewHeading = overview.heading ?? "Product Overview";
  const overviewTitle = overview.title ?? `${c.name} at a Glance`;
  const paragraphs = overview.paragraphs.slice(0, 3).filter((p) => p?.trim());
  const overviewImages =
    overview.images && overview.images.length >= 3
      ? overview.images.slice(0, 3)
      : [c.heroImage, c.heroImage, c.heroImage];

  if (paragraphs.length === 0) return null;

  return (
    <>
      <section className="pt-8 sm:pt-10 md:pt-24 bg-gradient-to-b from-[#f9f2eb] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateInView variant="fade-up">
          {/* Header Section - same as main site */}
          <div className="text-center space-y-4 sm:space-y-6 mb-10 sm:mb-14 md:mb-20">
            <span className="inline-flex items-center text-xs tracking-[0.32em] uppercase font-semibold text-[#0c6b76] bg-[#0c6b76]/10 px-5 py-2 rounded-full">
              {overviewHeading}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-[3rem] font-bold leading-tight text-[#0c6b76] tracking-tight max-w-4xl mx-auto">
              {overviewTitle}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0c6b76] to-[#0ca6c2] mx-auto rounded-full" />
          </div>

          {/* Alternating Paragraph/Image Rows - same as main site ProductOverview */}
          <div className="space-y-6 sm:space-y-8 md:space-y-8">
            {paragraphs.map((paragraph, index) => {
              const isEven = index % 2 === 0;
              const imageId = overviewImages[index];
              const hasImage = typeof imageId === "string" && imageId.trim().length > 0;
              const forceSecondRowLayout = index === 1;
              const leftShowsImage = forceSecondRowLayout ? true : !isEven && hasImage;
              const rightShowsImage = forceSecondRowLayout ? false : isEven && hasImage;
              const finalImageSrc = hasImage ? getCloudinaryUrl(imageId) : null;

              return (
                <div
                  key={`overview-row-${index}`}
                  className={`grid items-center gap-6 md:gap-8 ${
                    leftShowsImage || rightShowsImage ? "lg:grid-cols-2" : "lg:grid-cols-1 max-w-4xl mx-auto"
                  }`}
                >
                  {hasImage && finalImageSrc && (
                    <div
                      className={
                        forceSecondRowLayout
                          ? "order-1 lg:order-1"
                          : isEven
                            ? "order-1 lg:order-2"
                            : "order-1 lg:order-1"
                      }
                    >
                      <div className="relative w-full max-w-[200px] sm:max-w-xs md:max-w-md mx-auto aspect-square">
                        <Image
                          src={finalImageSrc}
                          alt={`${c.name} overview ${index + 1}`}
                          fill
                          sizes="(min-width:1280px) 400px, (min-width:1024px) 360px, (min-width:768px) 320px, 280px"
                          quality={70}
                          className="object-contain"
                          priority={index === 0}
                        />
                      </div>
                    </div>
                  )}
                  <div
                    className={
                      forceSecondRowLayout
                        ? "order-2 lg:order-2"
                        : isEven
                          ? "order-2 lg:order-1"
                          : "order-2 lg:order-2"
                    }
                  >
                    <div className="relative space-y-4 md:space-y-6 p-0">
                      <div className="flex items-center gap-3 md:gap-4">
                        <span className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#0c6b76] to-[#0ca6c2] text-white font-bold text-base md:text-lg shadow-lg">
                          {index + 1}
                        </span>
                        <div className="h-px flex-1 bg-gradient-to-r from-[#0c6b76]/30 via-[#0ca6c2]/30 to-transparent" />
                      </div>
                      <p className="text-base md:text-[1.125rem] lg:text-[1.1875rem] leading-[1.7] md:leading-[1.9] text-[#2f2f2f] text-pretty whitespace-normal break-words">
                        {paragraph.trim()}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          </AnimateInView>
        </div>
      </section>

      <AnimateInView variant="fade-up">
      <div className="bg-gradient-to-b from-white to-[#f9f2eb] py-5 sm:py-6 flex flex-col items-center justify-center gap-3">
        <p className="text-gray-700 text-center text-sm sm:text-base md:text-lg max-w-xl px-4">
          Ready to see your price? Get a custom quote in minutes, no obligation.
        </p>
        <button
          type="button"
          onClick={scrollToQuote}
          className="btn-highlight group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0c6b76] to-[#0ca6c2] hover:from-[#0ca6c2] hover:to-[#0c6b76] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-lg"
        >
          Get My Quote
          <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      </AnimateInView>
    </>
  );
}
