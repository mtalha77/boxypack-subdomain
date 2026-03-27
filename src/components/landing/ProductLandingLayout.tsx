import React from "react";
import FreeShippingBanner from "@/components/landing/FreeShippingBanner";
import ContactTopBar from "@/components/landing/ContactTopBar";
import GoogleTagManager from "@/components/landing/GoogleTagManager";
import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";

export default function ProductLandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GoogleTagManager />
      <div className="min-h-screen flex flex-col">
      <FreeShippingBanner />
      <ContactTopBar />
      <LandingHeader />
      <main className="flex-1">{children}</main>
      <LandingFooter />
    </div>
    </>
  );
}
