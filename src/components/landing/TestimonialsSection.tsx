"use client";

import React, { useState, useEffect, useCallback } from "react";
import type { TestimonialCard } from "@/data/landingContent";

interface TestimonialsSectionProps {
  testimonials: TestimonialCard[];
  title?: string;
  subtitle?: string;
}

const AUTO_ADVANCE_MS = 5000;
const MOBILE_BREAKPOINT = 768;

export default function TestimonialsSection({
  testimonials,
  title = "Brands That Switched to BoxyPack, And Stayed",
  subtitle = "See why businesses choose us for packaging that protects, impresses, and drives repeat orders.",
}: TestimonialsSectionProps) {
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const cardsPerRow = 3;
  const total = testimonials.length;

  useEffect(() => {
    const check = () => setIsMobile(typeof window !== "undefined" && window.innerWidth < MOBILE_BREAKPOINT);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const maxStart = isMobile ? Math.max(0, total - 1) : Math.max(0, total - cardsPerRow);
  const next = useCallback(() => {
    setStartIndex((prev) => (prev >= maxStart ? 0 : prev + 1));
  }, [maxStart]);

  const prev = useCallback(() => {
    setStartIndex((prev) => (prev <= 0 ? maxStart : prev - 1));
  }, [maxStart]);

  useEffect(() => {
    if (!isMobile && startIndex > maxStart) setStartIndex(maxStart);
  }, [isMobile, maxStart, startIndex]);

  useEffect(() => {
    if (isPaused || total <= 1) return;
    const t = setInterval(next, AUTO_ADVANCE_MS);
    return () => clearInterval(t);
  }, [isPaused, next, total]);

  const visible = testimonials.slice(startIndex, startIndex + cardsPerRow);
  const displayCardsDesktop =
    visible.length >= cardsPerRow
      ? visible
      : [...visible, ...testimonials.slice(0, cardsPerRow - visible.length)];

  const displayCards =
    isMobile && total > 0 ? [testimonials[startIndex % total]] : displayCardsDesktop;
  const showArrows = isMobile ? total > 1 : total > cardsPerRow;
  const dotCount = isMobile ? total : Math.max(1, maxStart + 1);

  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));

  const trustRatings = [
    { site: "Google", stars: 5 },
    { site: "Trustpilot", stars: 5 },
    { site: "Yelp", stars: 5 },
    { site: "BBB", stars: 5 },
  ];

  const TrustPlatformLogos: Record<string, React.ReactNode> = {
    Google: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" viewBox="0 0 24 24" aria-hidden>
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
      </svg>
    ),
    Trustpilot: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" viewBox="0 0 24 24" aria-hidden>
        <path fill="#00B67A" d="M12 0L14.59 8.41L24 10L16.59 14.59L18 24L12 19.59L6 24L7.41 14.59L0 10L9.41 8.41L12 0Z" />
      </svg>
    ),
    Yelp: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" viewBox="0 0 24 24" aria-hidden>
        <path fill="#D32323" d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 0 0-.393-1.619L4.577 4.196a1.03 1.03 0 0 0-1.354.525c-.01.027-.018.055-.024.083L2.35 8.956a1.07 1.07 0 0 0 1.456 1.24l4.995-1.433c.96-.276 1.74.8 1.176 1.63L6.072 15.355a1.07 1.07 0 0 0 .393 1.619l12.9 4.308a1.03 1.03 0 0 0 1.354-.525c.007-.027.015-.055.02-.083l.85-4.652a1.07 1.07 0 0 0-1.456-1.24z" />
      </svg>
    ),
    BBB: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" viewBox="0 0 24 24" aria-hidden>
        <path fill="#036CB6" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5v-5.5H8.5v-2H11V8.5h2v2h2.5v2H13v5.5h-2zm5.5-5.5h-2v2h2v-2zm-7 0h-2v2h2v-2z" />
      </svg>
    ),
  };

  return (
    <section className="py-8 sm:py-12 md:py-24 bg-gradient-to-b from-[#f9f2eb] to-[#f9f2eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-6 sm:mb-8 md:mb-16 space-y-3 sm:space-y-4">
          <span className="inline-flex items-center text-xs tracking-[0.32em] uppercase font-semibold text-[#0c6b76] bg-[#0c6b76]/10 px-4 md:px-5 py-1.5 md:py-2 rounded-full">
            Client Reviews
          </span>
          <h2 className="text-xl sm:text-3xl md:text-5xl font-bold leading-tight text-[#0c6b76] tracking-tight max-w-4xl mx-auto">
            {title}
          </h2>
          <p className="text-xs sm:text-base text-gray-700 max-w-4xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {displayCards.map((t) => (
              <div
                key={t.id}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 flex flex-col h-full relative"
              >
                <div className="absolute top-4 right-4 text-[#0ca6c2]/20 pointer-events-none">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <div className="flex gap-1 mb-4">{renderStars(t.rating)}</div>
                <blockquote className="text-gray-700 text-sm md:text-base leading-relaxed flex-1 mb-4 sm:mb-6">
                  &quot;{t.content}&quot;
                </blockquote>
                <div>
                  <h4 className="font-semibold text-gray-900">{t.name}</h4>
                  <p className="text-sm text-gray-600">{t.role}</p>
                  <p className="text-sm text-[#0ca6c2] font-medium">{t.company}</p>
                </div>
              </div>
            ))}
          </div>

          {showArrows && (
            <div className="flex justify-center mt-6 sm:mt-8 gap-4">
              <button
                type="button"
                onClick={prev}
                className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full border-2 border-[#0c6b76] flex items-center justify-center text-[#0c6b76] hover:bg-[#0c6b76] hover:text-white transition-all"
                aria-label="Previous testimonials"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={next}
                className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full border-2 border-[#0c6b76] flex items-center justify-center text-[#0c6b76] hover:bg-[#0c6b76] hover:text-white transition-all"
                aria-label="Next testimonials"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}

          {showArrows && dotCount > 0 && (
            <div className="flex justify-center mt-4 gap-2">
              {Array.from({ length: dotCount }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setStartIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === startIndex ? "bg-[#0c6b76] scale-125" : "bg-gray-300 hover:bg-[#0ca6c2]"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-6 mt-8 sm:mt-12 md:mt-16 pt-6 sm:pt-8">
          <p className="text-xs sm:text-sm font-medium text-gray-600 w-full sm:w-auto text-center">Trusted by brands. Rated 5 stars on:</p>
          {trustRatings.map(({ site, stars }) => (
            <div
              key={site}
              className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-2 sm:px-4 sm:py-2.5 shadow-sm border border-gray-100"
            >
              {TrustPlatformLogos[site]}
              <span className="flex gap-0.5">
                {Array.from({ length: stars }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </span>
              <span className="text-sm font-semibold text-gray-800">{site}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
