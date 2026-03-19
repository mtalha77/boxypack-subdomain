"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { getLogoUrl } from "@/data/headerData";
import { companyContactData } from "@/data/companyContactData";

const FORM_SECTION_ID = "quote-form";

export default function LandingHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToQuote = useCallback(() => {
    setMenuOpen(false);
    const el = document.getElementById(FORM_SECTION_ID);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image
              src={getLogoUrl()}
              alt="Boxypack"
              width={160}
              height={40}
              className="h-7 w-auto sm:h-8 md:h-10 md:w-auto"
              priority
            />
          </Link>

          {/* Desktop: both buttons visible */}
          <div className="hidden md:flex items-stretch gap-2 sm:gap-3">
            <span className="header-call-btn-wrapper flex items-stretch">
              <span className="quote-btn-ping quote-btn-ping-compact" aria-hidden="true" />
              <button
                type="button"
                onClick={scrollToQuote}
                className="group quote-btn-gradient relative z-10 flex items-center justify-center gap-1.5 h-10 rounded-full font-semibold text-sm shadow-md px-4 sm:px-5 text-white"
              >
                Get Custom Quote
                <svg className="w-4 h-4 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </span>
            <span className="header-call-btn-wrapper flex items-stretch">
              <span className="header-call-btn-ping header-call-btn-ping-compact" aria-hidden="true" />
              <a
                href={companyContactData.phoneHref}
                className="group header-call-btn-gradient relative z-10 flex items-center justify-center gap-1.5 h-10 min-w-0 rounded-full transition-all duration-300 font-semibold shadow-md px-4 sm:px-5 text-sm leading-none"
                aria-label={`Call ${companyContactData.phone}`}
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="relative inline-block min-w-[7rem] text-center">
                  <span className="block transition-opacity duration-300 group-hover:opacity-0">{companyContactData.phone}</span>
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">Call Now</span>
                </span>
              </a>
            </span>
          </div>

          {/* Mobile: hamburger toggle */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0c6b76]"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-200 ease-out ${
            menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-2 pt-2 pb-3 border-t border-gray-100 mt-2" aria-label="Mobile menu">
            <span className="header-call-btn-wrapper w-full inline-flex">
              <span className="quote-btn-ping quote-btn-ping-compact" aria-hidden="true" />
              <button
                type="button"
                onClick={scrollToQuote}
                className="group quote-btn-gradient relative z-10 w-full flex items-center justify-center gap-2 h-11 rounded-full font-semibold text-sm shadow-md px-4 text-white"
              >
                Get Custom Quote
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </span>
            <a
              href={companyContactData.phoneHref}
              onClick={() => setMenuOpen(false)}
              className="header-call-btn-wrapper w-full inline-flex"
              aria-label={`Call ${companyContactData.phone}`}
            >
              <span className="header-call-btn-ping header-call-btn-ping-compact" aria-hidden="true" />
              <span className="header-call-btn-gradient relative z-10 w-full flex items-center justify-center gap-2 h-11 rounded-full font-semibold text-sm shadow-md px-4">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {companyContactData.phone}
              </span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
