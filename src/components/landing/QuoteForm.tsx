"use client";

import React, { useState, useRef, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import { getCloudinaryUrl } from "@/data/cloudinary";

const FORM_SECTION_ID = "quote-form";

const DEFAULT_FORM_IMAGES = [
  "Ring-Box-5_sgqtcn",
  "Ring-Box-4_ecu6ob",
  "Ring-Box-2_olhgty",
  "Ring-Box-3_qgpnzt",
  "Ring-Box-1_tiz90t",
];

const DELAYS = [0, 0.22, 0.45, 0.32, 0.55];
const ROTATIONS = [-8, 12, 6, -10, 8];
const ROTATIONS_HOVER = [-5, 15, 9, -7, 11];

function formatPhoneNumber(value: string): string {
  let cleaned = value.replace(/[^\d+]/g, "");
  if (cleaned.startsWith("+")) {
    cleaned = "+" + cleaned.slice(1).replace(/[^0-9]/g, "");
  } else {
    cleaned = cleaned.replace(/[^0-9]/g, "");
  }
  return cleaned;
}

function validatePhoneNumber(phone: string): boolean {
  if (!phone || phone.trim() === "") return false;
  const digitsOnly = phone.replace(/[^\d]/g, "");
  return digitsOnly.length >= 10 && digitsOnly.length <= 15;
}

interface QuoteFormProps {
  formImages?: string[];
  imageAltPrefix?: string;
  /** Product/category name shown in the read-only Product field (e.g. "Jewelry Boxes") */
  productName?: string;
}

export default function QuoteForm({
  formImages,
  imageAltPrefix = "Product",
  productName = "Custom Product",
}: QuoteFormProps) {
  const images = useMemo(() => {
    const list = formImages?.length ? formImages : DEFAULT_FORM_IMAGES;
    const need = 5;
    if (list.length >= need) return list.slice(0, need);
    const out = [...list];
    while (out.length < need) out.push(list[out.length % list.length]);
    return out;
  }, [formImages]);

  const [quoteFormData, setQuoteFormData] = useState({
    name: "",
    phone: "",
    email: "",
    dimensions: "",
    details: "",
  });
  const [phoneError, setPhoneError] = useState("");
  const [quoteError, setQuoteError] = useState("");
  const [isSubmittingQuote, setIsSubmittingQuote] = useState(false);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  const formRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = formRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handlePhoneChange = useCallback((value: string) => {
    const formatted = formatPhoneNumber(value);
    setQuoteFormData((prev) => ({ ...prev, phone: formatted }));
    setPhoneError("");
  }, []);

  const handleQuoteSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmittingQuote(true);
      setQuoteError("");

      if (!quoteFormData.name.trim()) {
        setQuoteError("Please enter your name");
        setIsSubmittingQuote(false);
        return;
      }
      if (!quoteFormData.email.trim()) {
        setQuoteError("Please enter your email");
        setIsSubmittingQuote(false);
        return;
      }
      if (!quoteFormData.phone.trim()) {
        setQuoteError("Please enter your phone number");
        setPhoneError("Phone number is required");
        setIsSubmittingQuote(false);
        return;
      }
      if (!validatePhoneNumber(quoteFormData.phone)) {
        setQuoteError("Please enter a valid phone number (10-15 digits)");
        setPhoneError("Phone number must be 10-15 digits");
        setIsSubmittingQuote(false);
        return;
      }

      const standardizedPhone = formatPhoneNumber(quoteFormData.phone.trim());
      const dimensions = quoteFormData.dimensions.trim() || "Not specified";
      const timeValue = new Date().toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
      const orderDetails = `Product: ${productName}\nDimensions: ${dimensions}\n\nAdditional Details:\n${quoteFormData.details.trim() || "No additional details provided"}`;

      try {
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

        if (serviceId && templateId && publicKey) {
          const emailjs = (await import("@emailjs/browser")).default;
          await emailjs.send(
            serviceId,
            templateId,
            {
              full_name: quoteFormData.name.trim(),
              email: quoteFormData.email.trim(),
              phone: standardizedPhone,
              order_details: orderDetails,
              time: timeValue,
            },
            publicKey
          );
        }

        try {
          await fetch("/api/leads", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: quoteFormData.name.trim(),
              email: quoteFormData.email.trim(),
              phone: standardizedPhone,
              productName,
              categorySlug: "",
              productSlug: "",
              dimensions: quoteFormData.dimensions.trim() || "",
              requiredUnits: null,
              details: quoteFormData.details.trim() || "",
              source: "subdomain-landing",
              submittedAt: new Date().toISOString(),
            }),
          });
        } catch (dbErr) {
          console.error("Failed to save lead:", dbErr);
        }

        setQuoteSubmitted(true);
        setQuoteFormData({
          name: "",
          phone: "",
          email: "",
          dimensions: "",
          details: "",
        });
        setTimeout(() => setQuoteSubmitted(false), 5000);
      } catch (err) {
        const msg =
          err && typeof err === "object" && "text" in err
            ? (err as { text: string }).text
            : err instanceof Error
              ? err.message
              : "Failed to send quote request. Please try again or contact us directly.";
        setQuoteError(msg);
      } finally {
        setIsSubmittingQuote(false);
      }
    },
    [quoteFormData, productName]
  );

  return (
    <section
      id={FORM_SECTION_ID}
      ref={formRef}
      className="custom-dimensions-form bg-[#FAFAFA] relative lg:min-h-screen scroll-mt-20"
    >
      <div className="absolute inset-0 pointer-events-none overflow-visible lg:h-screen">
        <svg
          width="979"
          height="1077"
          viewBox="0 0 979 1077"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-full lg:w-[60%] h-full"
          style={{ top: "0%", left: "0%", opacity: 1 }}
        >
          <defs>
            <linearGradient id="landing_form_gradient" x1="156.142" y1="99.9245" x2="642.819" y2="767.453" gradientUnits="userSpaceOnUse">
              <stop stopColor="#97602f" stopOpacity="0.5" />
              <stop offset="1" stopColor="#0C6B76" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          <path
            d="M-141.394 185.383C-101.919 95.3973 -11.695 -30.8149 133.505 -56.0915C215.251 -70.3219 280.504 -3.97335 258.806 76.1148C252.141 100.718 242.23 125.928 228.258 149.032C182.639 224.466 47.2368 365.609 -14.0301 499.779C-72.1095 626.968 73.2183 712.424 151.853 596.808C154.747 592.554 157.638 588.25 160.531 583.91C235.571 456.162 457.798 282.932 682.112 299.704C731.086 303.365 778.592 322.377 813.383 357.039C845.669 389.205 875.084 433.617 881.243 486.939C888.907 553.295 842.081 611.896 781.69 640.442C735.752 662.157 671.785 684.446 587.652 701.048C470.645 724.136 331.641 751.784 305.091 868.055C303.095 876.798 301.573 885.736 300.55 894.838C283.129 1049.88 467.554 1110.7 584.665 1007.6C696.605 909.063 845.277 939.395 903.831 971.505"
            stroke="url(#landing_form_gradient)"
            strokeOpacity="0.3"
            strokeWidth="110"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="mx-auto relative z-10 py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          <div className="hidden lg:flex relative h-full items-center justify-center lg:sticky lg:top-8">
            <div className="flex flex-row overflow-visible w-full items-center justify-center" style={{ paddingTop: 0, paddingBottom: 0, gap: 0, flexWrap: "wrap", position: "relative" }}>
              {images.map((img, index) => (
                <div
                  key={`${img}-${index}`}
                  className="flex-shrink-0 w-64 h-64 md:w-72 md:h-72 rounded-lg overflow-hidden cursor-pointer"
                  style={{
                    zIndex: index + 1,
                    position: "relative",
                    transform: inView ? `translate(0, 0) scale(1) rotate(${ROTATIONS[index]}deg)` : `translate(${index % 2 === 0 ? -100 : 100}px, -432px) scale(0.75) rotate(${index % 2 === 0 ? -15 : 15}deg)`,
                    opacity: inView ? 1 : 0,
                    transition: "transform 1s cubic-bezier(0.34, 1.2, 0.64, 1), opacity 0.75s ease-out",
                    transitionDelay: inView ? `${DELAYS[index]}s` : "0s",
                  }}
                  onMouseEnter={(e) => {
                    if (inView) e.currentTarget.style.transform = `translate(0, 0) scale(1) rotate(${ROTATIONS_HOVER[index]}deg)`;
                  }}
                  onMouseLeave={(e) => {
                    if (inView) e.currentTarget.style.transform = `translate(0, 0) scale(1) rotate(${ROTATIONS[index]}deg)`;
                  }}
                >
                  <Image src={getCloudinaryUrl(img)} alt={`${imageAltPrefix} ${index + 1}`} width={288} height={288} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-20 flex items-start w-full">
            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 space-y-4">
              <div className="text-left">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" id="quote-form-heading">
                    <span className="text-[#0C6B76]">Request a </span>
                    <span className="text-[#97602f]">Custom Quote</span>
                  </h2>
                  <span className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 flex items-center justify-center rounded-lg bg-[#0c6b76]/10 text-[#0c6b76]" aria-hidden>
                    <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Fill out the form below with your requirements and we&apos;ll get back to you with a custom quote.
                </p>
              </div>

              {quoteSubmitted ? (
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-sm text-green-800">✓ Quote request submitted successfully! We will get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleQuoteSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-black">Product</label>
                    <div className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-[#F1F1F1] text-sm text-gray-900">
                      <span>{productName}</span>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-black">Name *</label>
                    <input
                      type="text"
                      value={quoteFormData.name}
                      onChange={(e) => setQuoteFormData((prev) => ({ ...prev, name: e.target.value }))}
                      required
                      className="w-full px-3 py-2 rounded-lg bg-[#F1F1F1] focus:outline-none focus:ring-2 focus:ring-[#0c6b76] text-sm text-gray-900 placeholder:text-gray-500"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-black">Phone *</label>
                    <input
                      type="tel"
                      value={quoteFormData.phone}
                      onChange={(e) => handlePhoneChange(e.target.value)}
                      onBlur={() => {
                        if (quoteFormData.phone && !validatePhoneNumber(quoteFormData.phone)) {
                          setPhoneError("Phone number must be 10-15 digits");
                        } else {
                          setPhoneError("");
                        }
                      }}
                      required
                      inputMode="tel"
                      className={`w-full px-3 py-2 rounded-lg bg-[#F1F1F1] focus:outline-none focus:ring-2 focus:ring-[#0c6b76] text-sm text-gray-900 placeholder:text-gray-500 ${phoneError ? "bg-red-50 border border-red-300" : ""}`}
                      placeholder="+1234567890 or 1234567890"
                    />
                    {phoneError && <p className="text-xs text-red-600 mt-1">{phoneError}</p>}
                    {!phoneError && quoteFormData.phone && (
                      <p className="text-xs text-gray-500 mt-1">Format: International (+country code) or local (10-15 digits)</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-black">Email *</label>
                    <input
                      type="email"
                      value={quoteFormData.email}
                      onChange={(e) => setQuoteFormData((prev) => ({ ...prev, email: e.target.value }))}
                      required
                      className="w-full px-3 py-2 rounded-lg bg-[#F1F1F1] focus:outline-none focus:ring-2 focus:ring-[#0c6b76] text-sm text-gray-900 placeholder:text-gray-500"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-black">Dimensions (L x W x H)</label>
                    <input
                      type="text"
                      value={quoteFormData.dimensions}
                      onChange={(e) => setQuoteFormData((prev) => ({ ...prev, dimensions: e.target.value }))}
                      className="w-full px-3 py-2 rounded-lg bg-[#F1F1F1] focus:outline-none focus:ring-2 focus:ring-[#0c6b76] text-sm text-gray-900 placeholder:text-gray-500"
                      placeholder="Length x Width x Height (e.g., 9.5 x 7.75 x 4)"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-black">Details</label>
                    <textarea
                      value={quoteFormData.details}
                      onChange={(e) => setQuoteFormData((prev) => ({ ...prev, details: e.target.value }))}
                      rows={4}
                      className="w-full px-3 py-2 rounded-lg bg-[#F1F1F1] focus:outline-none focus:ring-2 focus:ring-[#0c6b76] text-sm text-gray-900 placeholder:text-gray-500 resize-none"
                      placeholder="Enter any additional details or requirements..."
                    />
                  </div>

                  {quoteError && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-sm text-red-800">{quoteError}</p>
                    </div>
                  )}

                  <span className="header-call-btn-wrapper block w-full">
                    <span className="quote-btn-ping quote-btn-ping-compact" aria-hidden="true" />
                    <button
                      type="submit"
                      disabled={isSubmittingQuote || quoteSubmitted}
                      className="quote-btn-gradient relative z-10 w-full text-white font-semibold py-2.5 px-4 rounded-lg shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm disabled:transform-none disabled:shadow-md"
                    >
                      {isSubmittingQuote ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                          Get Custom Quote
                        </>
                      )}
                    </button>
                  </span>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
