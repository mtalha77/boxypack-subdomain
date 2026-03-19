import React from "react";
import ProductLandingLayout from "@/components/landing/ProductLandingLayout";

export default function CustomJewelryBoxesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProductLandingLayout>{children}</ProductLandingLayout>;
}
