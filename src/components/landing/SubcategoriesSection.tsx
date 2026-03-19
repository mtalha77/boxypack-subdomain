"use client";

import React from "react";
import type { LandingPageData } from "@/data/landingPageDataTypes";
import AnimateInView from "@/components/landing/AnimateInView";

interface SubcategoriesSectionProps {
  pageData: LandingPageData;
  ourRangeTitle?: string;
  ourRangeDescription?: string;
}

export default function SubcategoriesSection({
  pageData,
  ourRangeTitle,
  ourRangeDescription,
}: SubcategoriesSectionProps) {
  const subcategories = pageData.subcategories;
  const title = ourRangeTitle ?? `${pageData.name} We Offer`;
  const description =
    ourRangeDescription ??
    `We offer ${pageData.name.toLowerCase()} wholesale in various designs. Each can be personalized with your logo, finish, and color palette.`;

  return (
    <section className="py-10 sm:py-14 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateInView variant="fade-up">
        <div className="text-center mb-6 sm:mb-10 space-y-3 sm:space-y-4">
          <span className="inline-flex items-center text-xs tracking-[0.32em] uppercase font-semibold text-[#0c6b76] bg-[#0c6b76]/10 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full">
            Our Range
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-[3rem] font-bold leading-tight text-[#0c6b76] tracking-tight max-w-4xl mx-auto">
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {subcategories.map((sub) => (
            <span
              key={sub.slug}
              role="presentation"
              className="flex items-center justify-center rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 sm:px-4 sm:py-3 text-center text-xs sm:text-sm font-medium text-gray-700 hover:border-[#0c6b76] hover:bg-[#0c6b76]/5 hover:text-[#0c6b76] transition-colors cursor-default"
            >
              {sub.name}
            </span>
          ))}
        </div>
        </AnimateInView>
      </div>
    </section>
  );
}
