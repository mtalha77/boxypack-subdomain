"use client";

import React, { useState, useCallback, useEffect, useMemo } from "react";
import type { LandingPageData } from "@/data/landingPageDataTypes";
import AnimateInView from "@/components/landing/AnimateInView";

const MOBILE_BREAKPOINT = 1024;

interface FAQSectionProps {
  pageData: LandingPageData;
  introText?: string;
}

export default function FAQSection({ pageData, introText }: FAQSectionProps) {
  const faqData = pageData.faq;
  const [activeFAQs, setActiveFAQs] = useState<number[]>([0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    checkMobile();
    let timeoutId: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkMobile, 150);
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    const half = Math.ceil(faqData.length / 2);
    setActiveFAQs(isMobile ? [0] : [0, half]);
  }, [isMobile, faqData.length]);

  const toggleFAQ = useCallback((index: number) => {
    setActiveFAQs((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  }, []);

  const half = Math.ceil(faqData.length / 2);
  const leftColumnFAQs = useMemo(() => faqData.slice(0, half), [faqData]);
  const rightColumnFAQs = useMemo(() => faqData.slice(half, faqData.length), [faqData]);

  return (
    <section className="relative bg-white py-10 sm:py-14 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimateInView variant="fade-up">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-[3rem] font-bold leading-tight text-[#0c6b76] tracking-tight max-w-4xl mx-auto">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-4xl mx-auto">
            {introText ?? `Find quick answers about ${pageData.name.toLowerCase()}, custom branding, bulk orders, and pricing. We're here to help.`}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <div className="space-y-5">
            {leftColumnFAQs.map((faq, index) => (
              <div
                key={index}
                className={`group transition-all duration-300 ${
                  activeFAQs.includes(index) ? "pb-4" : ""
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left flex items-start justify-between gap-4 py-3 group-hover:bg-gray-50 rounded-lg px-2 -mx-2 transition-all duration-200"
                >
                  <h3
                    className={`text-base font-medium flex-1 leading-snug transition-colors duration-200 ${
                      activeFAQs.includes(index) ? "text-[#0c6b76]" : "text-gray-800 group-hover:text-[#0c6b76]"
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <div
                    className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeFAQs.includes(index)
                        ? "bg-[#0c6b76] text-white"
                        : "bg-gray-200 text-gray-500 group-hover:bg-[#0c6b76] group-hover:text-white"
                    }`}
                  >
                    {activeFAQs.includes(index) ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </div>
                </button>
                <div
                  className={`px-2 transition-all duration-400 ease-in-out ${
                    activeFAQs.includes(index)
                      ? "max-h-96 opacity-100 mt-2"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-5">
            {rightColumnFAQs.map((faq, index) => {
              const faqIndex = index + half;
              return (
              <div
                key={faqIndex}
                className={`group transition-all duration-300 ${
                  activeFAQs.includes(faqIndex) ? "pb-4" : ""
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faqIndex)}
                  className="w-full text-left flex items-start justify-between gap-4 py-3 group-hover:bg-gray-50 rounded-lg px-2 -mx-2 transition-all duration-200"
                >
                  <h3
                    className={`text-base font-medium flex-1 leading-snug transition-colors duration-200 ${
                      activeFAQs.includes(faqIndex) ? "text-[#0c6b76]" : "text-gray-800 group-hover:text-[#0c6b76]"
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <div
                    className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeFAQs.includes(faqIndex)
                        ? "bg-[#0c6b76] text-white"
                        : "bg-gray-200 text-gray-500 group-hover:bg-[#0c6b76] group-hover:text-white"
                    }`}
                  >
                    {activeFAQs.includes(faqIndex) ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </div>
                </button>
                <div
                  className={`px-2 transition-all duration-400 ease-in-out ${
                    activeFAQs.includes(faqIndex)
                      ? "max-h-96 opacity-100 mt-2"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            );})}
          </div>
        </div>
        </AnimateInView>
      </div>
    </section>
  );
}
