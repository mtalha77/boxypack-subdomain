import React from "react";
import JewelryHero from "@/components/landing/JewelryHero";
import QuoteForm from "@/components/landing/QuoteForm";
import ProductOverviewSection from "@/components/landing/ProductOverviewSection";
import SubcategoriesSection from "@/components/landing/SubcategoriesSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";
import { sharedTestimonials } from "@/data/landingContent";
import { jewelryBoxesPageData } from "@/data/jewelryBoxesPageData";
import type { LandingPageData } from "@/data/landingPageDataTypes";

const pageData = jewelryBoxesPageData as unknown as LandingPageData;

export const metadata = {
  title: jewelryBoxesPageData.meta.title,
  description: jewelryBoxesPageData.meta.description,
};

export default function CustomJewelryBoxesPage() {
  return (
    <div className="relative">
      <JewelryHero pageData={pageData} />
      <QuoteForm formImages={pageData.quoteFormImages} imageAltPrefix={pageData.name} productName={pageData.name} />
      <ProductOverviewSection pageData={pageData} />
      <TestimonialsSection testimonials={sharedTestimonials} />
      <SubcategoriesSection pageData={pageData} />
      <FAQSection pageData={pageData} />
      <CTASection pageData={pageData} />
    </div>
  );
}
