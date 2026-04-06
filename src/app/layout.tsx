import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono, Bree_Serif } from "next/font/google";
import "./globals.css";
import TawkNotifications from "./components/TawkNotifications";

const GOOGLE_ADS_GTAG_INLINE = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-17815349096');`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const breeSerif = Bree_Serif({
  variable: "--font-ticker",
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BoxyPack",
  description: "Custom packaging solutions",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${breeSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Google tag (gtag.js) — Google Ads AW-17815349096 (all pages) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17815349096"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag-aw-17815349096" strategy="afterInteractive">
          {GOOGLE_ADS_GTAG_INLINE}
        </Script>
        {children}
        {/* Tawk.to Live Chat Widget (same embed as main site boxypack-nextjs) */}
        <Script id="tawk-to" strategy="afterInteractive">
          {`
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
  s1.async=true;
  s1.src='https://embed.tawk.to/69a0ae22cd46461c37295766/1jidqgea7';
  s1.charset='UTF-8';
  s1.setAttribute('crossorigin','*');
  s0.parentNode.insertBefore(s1,s0);
})();


Tawk_API.onLoad = function(){

setTimeout(function() {
  if (typeof Tawk_API !== "undefined" && typeof Tawk_API.maximize === "function") {
    Tawk_API.maximize();
  }
}, 2000000);

// Hide tawk-chat-message-container after 10 seconds of appearing
var tawkMsgCheck = setInterval(function() {
  var found = false;
  // Check main document first
  var msgContainer = document.querySelector('#tawk-chat-message-container');
  if (msgContainer) { found = true; }
  // Check inside all iframes (Tawk renders inside iframe)
  if (!found) {
    var iframes = document.querySelectorAll('iframe');
    for (var i = 0; i < iframes.length; i++) {
      try {
        var iframeDoc = iframes[i].contentDocument || iframes[i].contentWindow.document;
        if (iframeDoc) {
          msgContainer = iframeDoc.querySelector('#tawk-chat-message-container');
          if (msgContainer) { found = true; break; }
        }
      } catch(e) {}
    }
  }
  if (found && msgContainer) {
    clearInterval(tawkMsgCheck);
    setTimeout(function() {
      msgContainer.style.display = 'none';
    }, 7000);
  }
}, 500);

};
`}
        </Script>
        <TawkNotifications />
      </body>
    </html>
  );
}
