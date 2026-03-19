import React from "react";
import ProductLandingLayout from "@/components/landing/ProductLandingLayout";

export default function GiftBoxWithLidLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProductLandingLayout>{children}</ProductLandingLayout>;
}
