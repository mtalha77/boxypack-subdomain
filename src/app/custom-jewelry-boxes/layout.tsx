import React from "react";
import Script from "next/script";
import ProductLandingLayout from "@/components/landing/ProductLandingLayout";

const GTAG_INLINE = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-DQN58W7QSF');`;

const GTM_INLINE = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KTC3V4GX');`;

export default function CustomJewelryBoxesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Google tag (gtag.js) — G-DQN58W7QSF */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-DQN58W7QSF"
        strategy="afterInteractive"
      />
      <Script id="google-analytics-gtag-custom-jewelry" strategy="afterInteractive">
        {GTAG_INLINE}
      </Script>
      {/* Google Tag Manager — this route only */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {GTM_INLINE}
      </Script>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-KTC3V4GX"
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
