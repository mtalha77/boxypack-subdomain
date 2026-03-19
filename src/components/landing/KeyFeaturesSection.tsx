"use client";

import React from "react";
import { jewelryBoxesPageData } from "@/data/jewelryBoxesPageData";

export default function KeyFeaturesSection() {
  const features = jewelryBoxesPageData.keyFeatures;

  return (
    <section className="py-24 bg-gradient-to-b from-[#f9f2eb] to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-10">
        <div className="space-y-4">
          <span className="inline-flex items-center text-xs tracking-[0.32em] uppercase font-semibold text-[#0c6b76] bg-[#0c6b76]/10 px-5 py-2 rounded-full">
            Key Features
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[3rem] font-bold leading-tight text-[#0c6b76] tracking-tight">
            What makes this build remarkable
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex h-full items-start gap-5 bg-white border border-slate-200 rounded-3xl shadow-sm px-6 py-2"
            >
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#97602f]/10 text-sm font-semibold leading-none text-[#97602f]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="flex-1 text-lg leading-7 text-[#0c2a30] pt-1">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
