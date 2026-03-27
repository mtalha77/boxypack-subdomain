import React from "react";
import Script from "next/script";
import ProductLandingLayout from "@/components/landing/ProductLandingLayout";

const GTM_INLINE = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M68V8NMV');`;

export default function GiftBoxWithLidLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Google Tag Manager — /gift-boxes-with-lid only */}
      <Script id="google-tag-manager-gift-boxes-with-lid" strategy="afterInteractive">
        {GTM_INLINE}
      </Script>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-M68V8NMV"
          height={0}
          width={0}
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
      {/* End Google Tag Manager (noscript) */}
      <ProductLandingLayout>{children}</ProductLandingLayout>
    </>
  );
}
