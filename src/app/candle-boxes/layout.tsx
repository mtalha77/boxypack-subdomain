import React from "react";
import ProductLandingLayout from "@/components/landing/ProductLandingLayout";

export default function CandleBoxesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProductLandingLayout>{children}</ProductLandingLayout>;
}
