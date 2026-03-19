"use client";

import React from "react";
import { companyContactData } from "@/data/companyContactData";

export default function ContactTopBar() {
  return (
    <div
      className="flex flex-wrap items-center justify-center gap-6 px-4 py-2.5 md:px-6 lg:px-8 bg-[#f5f5f5] border-t border-[#0a5a63] text-gray-700"
      style={{ borderTopWidth: 2 }}
    >
      <a
        href={companyContactData.addressUSMapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-xs md:text-sm hover:text-[#0c6b76] transition-colors"
        aria-label="View US address on Google Maps"
      >
        <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span className="truncate">{companyContactData.addressUS}</span>
      </a>
      <a
        href={companyContactData.phoneHref}
        className="flex items-center gap-2 text-xs md:text-sm hover:text-[#0c6b76] transition-colors"
        aria-label={`Call ${companyContactData.phone}`}
      >
        <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <span>{companyContactData.phone}</span>
      </a>
      <a
        href={`mailto:${companyContactData.salesEmail}`}
        className="flex items-center gap-2 text-xs md:text-sm hover:text-[#0c6b76] transition-colors"
        aria-label={`Email ${companyContactData.salesEmail}`}
      >
        <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span>{companyContactData.salesEmail}</span>
      </a>
    </div>
  );
}
