import React from "react";
import JewelryHero from "@/components/landing/JewelryHero";
import QuoteForm from "@/components/landing/QuoteForm";
import ProductOverviewSection from "@/components/landing/ProductOverviewSection";
import SubcategoriesSection from "@/components/landing/SubcategoriesSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";
import { sharedTestimonials } from "@/data/landingContent";
import { giftBoxWithLidPageData } from "@/data/giftBoxWithLidPageData";

export const metadata = {
  title: giftBoxWithLidPageData.meta.title,
  description: giftBoxWithLidPageData.meta.description,
};

export default function GiftBoxWithLidPage() {
  return (
    <div className="relative">
      <JewelryHero pageData={giftBoxWithLidPageData} />
      <QuoteForm formImages={giftBoxWithLidPageData.quoteFormImages} imageAltPrefix={giftBoxWithLidPageData.name} productName={giftBoxWithLidPageData.name} />
      <ProductOverviewSection pageData={giftBoxWithLidPageData} />
      <TestimonialsSection testimonials={sharedTestimonials} />
      <SubcategoriesSection pageData={giftBoxWithLidPageData} />
      <FAQSection pageData={giftBoxWithLidPageData} />
      <CTASection pageData={giftBoxWithLidPageData} />
    </div>
  );
}
