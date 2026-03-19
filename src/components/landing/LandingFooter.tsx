"use client";

import React, { useState } from "react";
import Image from "next/image";
import { getLogoUrl } from "@/data/headerData";
import { companyContactData } from "@/data/companyContactData";

export default function LandingFooter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription API call
  };

  return (
    <footer className="bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[500px] pointer-events-none overflow-hidden opacity-30" style={{ zIndex: 1 }}>
        <Image
          src="https://res.cloudinary.com/du5lyrqvz/image/upload/f_auto,q_auto/cs_slider_shape_yszisl"
          alt=""
          width={600}
          height={500}
          className="w-full h-full object-contain transform scale-150"
        />
      </div>
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12 items-start">
          <div>
            <Image
              src={getLogoUrl()}
              alt="Boxypack"
              width={200}
              height={100}
              className="mb-4 sm:mb-6 max-h-8 w-auto sm:max-h-10 lg:max-h-none transition-transform duration-300 hover:scale-105"
              priority
            />
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-md">
              Custom packaging that protects your product and sells your brand. Get a quote, approve your design, and ship with confidence—thousands of brands already do.
            </p>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Sign up for exclusive offers</h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-8">Get the latest updates, special offers, and packaging tips delivered to your inbox.</p>
            <form onSubmit={handleSubscribe}>
              <div className="relative group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 pr-[7rem] sm:pr-[11.5rem] border-2 border-gray-300 rounded-full focus:border-[#0c6b76] focus:ring-4 focus:ring-[#0c6b76]/20 outline-none bg-white text-gray-800 placeholder-gray-400 text-sm sm:text-base transition-all duration-300 shadow-sm hover:shadow-md"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1.5 sm:right-2 top-1/2 -translate-y-1/2 flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-[#0c6b76] to-[#0ca6c2] hover:from-[#0ca6c2] hover:to-[#0c6b76] text-white px-3 py-2 sm:px-5 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 whitespace-nowrap"
                >
                  <span>SUBSCRIBE</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </form>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Follow us on social media</h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-8">Connect with us for the latest updates and inspiration.</p>
            <div className="flex items-center flex-wrap gap-4 sm:gap-6">
              <a href="https://www.facebook.com/boxypack1/" target="_blank" rel="noopener noreferrer" className="group relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#1877f2] md:bg-gray-100 md:hover:bg-[#1877f2] text-white md:text-gray-600 md:hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg" aria-label="Facebook">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.youtube.com/@boxypack_1" target="_blank" rel="noopener noreferrer" className="group relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#ff0000] md:bg-gray-100 md:hover:bg-[#ff0000] text-white md:text-gray-600 md:hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg" aria-label="YouTube">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://www.pinterest.com/boxypack1/" target="_blank" rel="noopener noreferrer" className="group relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#e60023] md:bg-gray-100 md:hover:bg-[#e60023] text-white md:text-gray-600 md:hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg" aria-label="Pinterest">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.031 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/></svg>
              </a>
              <a href="https://x.com/boxypack" target="_blank" rel="noopener noreferrer" className="group relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-black md:bg-gray-100 md:hover:bg-black text-white md:text-gray-600 md:hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg" aria-label="X (Twitter)">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://www.tiktok.com/@boxy.pack" target="_blank" rel="noopener noreferrer" className="group relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-black md:bg-gray-100 md:hover:bg-black text-white md:text-gray-600 md:hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg" aria-label="TikTok">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 mt-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
              <a href={companyContactData.phoneHref} className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#0c6b76] transition-colors" aria-label={`Call ${companyContactData.phone}`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                {companyContactData.phone}
              </a>
              <a href={`mailto:${companyContactData.salesEmail}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#0c6b76] transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                {companyContactData.salesEmail}
              </a>
              <div className="flex flex-col gap-2">
                <a href={companyContactData.addressUSMapUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-sm text-gray-600 hover:text-[#0c6b76] transition-colors">
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <span className="text-left">{companyContactData.addressUS}</span>
                </a>
                <a href={companyContactData.addressCAMapUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-sm text-gray-600 hover:text-[#0c6b76] transition-colors">
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <span className="text-left">{companyContactData.addressCA}</span>
                </a>
              </div>
            </div>
            <div className="text-sm text-gray-600 md:text-right">
              © {new Date().getFullYear()} <span className="font-semibold text-gray-900">BoxyPack</span>. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
