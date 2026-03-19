import React from "react";
import JewelryHero from "@/components/landing/JewelryHero";
import QuoteForm from "@/components/landing/QuoteForm";
import ProductOverviewSection from "@/components/landing/ProductOverviewSection";
import SubcategoriesSection from "@/components/landing/SubcategoriesSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";
import { sharedTestimonials } from "@/data/landingContent";
import { candleBoxesPageData } from "@/data/candleBoxesPageData";

export const metadata = {
  title: candleBoxesPageData.meta.title,
  description: candleBoxesPageData.meta.description,
};

export default function CandleBoxesPage() {
  return (
    <div className="relative">
      <JewelryHero pageData={candleBoxesPageData} />
      <QuoteForm formImages={candleBoxesPageData.quoteFormImages} imageAltPrefix={candleBoxesPageData.name} productName={candleBoxesPageData.name} />
      <ProductOverviewSection pageData={candleBoxesPageData} />
      <TestimonialsSection testimonials={sharedTestimonials} />
      <SubcategoriesSection pageData={candleBoxesPageData} />
      <FAQSection pageData={candleBoxesPageData} />
      <CTASection pageData={candleBoxesPageData} />
    </div>
  );
}
