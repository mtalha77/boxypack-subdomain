"use client";

import React from "react";
import { jewelryBoxesPageData } from "@/data/jewelryBoxesPageData";

export default function CustomizationSection() {
  const customization = jewelryBoxesPageData.customization;
  const details = customization.details;

  return (
    <section className="py-24 bg-[#f0f7fb]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-6 mb-10">
          <span className="inline-flex items-center text-xs tracking-[0.32em] uppercase font-semibold text-[#0c6b76] bg-[#0c6b76]/10 px-5 py-2 rounded-full">
            Customization
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[3rem] font-bold leading-tight text-[#0c6b76] tracking-tight">
            Customize Your Jewelry Boxes
          </h2>
          <p className="text-lg md:text-xl leading-8 text-[#2f2f2f] max-w-3xl">
            Design and order custom jewelry boxes to match your exact needs. Choose your materials, structures, and finishes that bring your brand vision to life.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="divide-y divide-gray-100">
            {details.map((row, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 px-6 py-4 hover:bg-gray-50/50 transition-colors"
              >
                <dt className="flex-shrink-0 font-semibold text-gray-900 min-w-[180px]">
                  {row.label}
                </dt>
                <dd className="text-gray-600">{row.value}</dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
