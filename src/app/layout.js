import Script from "next/script";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://monavi.com"),
  title: "MONAVI | Bring Patients Back. Reduce Clinic Chaos.",
  description: "MONAVI helps clinics manage appointments, queues, follow-ups and patient communication while improving patient retention.",
  openGraph: {
    title: "MONAVI | Bring Patients Back. Reduce Clinic Chaos.",
    description: "MONAVI helps clinics manage appointments, queues, follow-ups and patient communication while improving patient retention.",
    url: "https://monavi.com",
    siteName: "MONAVI",
    images: [
      {
        url: "/monavi/monavi_logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MONAVI | Bring Patients Back. Reduce Clinic Chaos.",
    description: "MONAVI helps clinics manage appointments, queues, follow-ups and patient communication while improving patient retention.",
    images: ["/monavi/monavi_logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link
          href="https://fonts.gstatic.com"
          rel="preconnect"
          crossOrigin="anonymous"
        />
        <Script src="/js/webfont.js" strategy="afterInteractive" />
        <style
          dangerouslySetInnerHTML={{
            __html: `@media (min-width:992px) {html.w-mod-js:not(.w-mod-ix) [data-w-id="00804d68-1979-702f-baa6-495723668d69"] {width:47.74%;}html.w-mod-js:not(.w-mod-ix) [data-w-id="f3d09414-ba37-40cc-720a-3e4ae7246ab9"] {width:47.74%;}html.w-mod-js:not(.w-mod-ix) [data-w-id="9c76b42b-2c0f-ea7b-60f5-9e89a60016c2"] {width:47.74%;}html.w-mod-js:not(.w-mod-ix) [data-w-id="3b1f4083-af87-3d26-ff13-cbf85b5a60fd"] {width:47.74%;}html.w-mod-js:not(.w-mod-ix) [data-w-id="b34beea8-7e50-52e1-9832-a7aac93ebddd"] {;}html.w-mod-js:not(.w-mod-ix) [data-w-id="f3d09414-ba37-40cc-720a-3e4ae7246afc"] {;}html.w-mod-js:not(.w-mod-ix) [data-w-id="9c76b42b-2c0f-ea7b-60f5-9e89a6001705"] {;}html.w-mod-js:not(.w-mod-ix) [data-w-id="3b1f4083-af87-3d26-ff13-cbf85b5a6140"] {;}html.w-mod-js:not(.w-mod-ix) [data-w-id="8607cd5e-bebe-75ab-4095-b659c14fa220"] {;}html.w-mod-js:not(.w-mod-ix) [data-w-id="f3d09414-ba37-40cc-720a-3e4ae7246ae7"] {;}html.w-mod-js:not(.w-mod-ix) [data-w-id="9c76b42b-2c0f-ea7b-60f5-9e89a60016f0"] {;}html.w-mod-js:not(.w-mod-ix) [data-w-id="3b1f4083-af87-3d26-ff13-cbf85b5a612b"] {;}html.w-mod-js:not(.w-mod-ix) [data-w-id="076bbf41-9142-46b0-b2cd-2f4e6d2f716d"] {;}html.w-mod-js:not(.w-mod-ix) [data-w-id="f3d09414-ba37-40cc-720a-3e4ae7246ad2"] {;}html.w-mod-js:not(.w-mod-ix) [data-w-id="9c76b42b-2c0f-ea7b-60f5-9e89a60016db"] {;}html.w-mod-js:not(.w-mod-ix) [data-w-id="3b1f4083-af87-3d26-ff13-cbf85b5a6116"] {;}html.w-mod-js:not(.w-mod-ix) [data-w-id="8c060db9-1b63-ec68-ee1f-357c50f1db4d"] {width:16.94%;}html.w-mod-js:not(.w-mod-ix) [data-w-id="f3d09414-ba37-40cc-720a-3e4ae7246ace"] {width:16.94%;}html.w-mod-js:not(.w-mod-ix) [data-w-id="9c76b42b-2c0f-ea7b-60f5-9e89a60016d7"] {width:16.94%;}html.w-mod-js:not(.w-mod-ix) [data-w-id="3b1f4083-af87-3d26-ff13-cbf85b5a6112"] {width:16.94%;}html.w-mod-js:not(.w-mod-ix) [data-w-id="7845d051-44a3-04b5-eb32-36bbc0810ffd"] {opacity:1;}html.w-mod-js:not(.w-mod-ix) [data-w-id="f3d09414-ba37-40cc-720a-3e4ae7246abd"] {opacity:1;}html.w-mod-js:not(.w-mod-ix) [data-w-id="9c76b42b-2c0f-ea7b-60f5-9e89a60016c6"] {opacity:1;}html.w-mod-js:not(.w-mod-ix) [data-w-id="3b1f4083-af87-3d26-ff13-cbf85b5a6101"] {opacity:1;}html.w-mod-js:not(.w-mod-ix) [data-w-id="1d446a12-99fc-162d-f78c-8863066dc5f4"] {width:16.94%;}html.w-mod-js:not(.w-mod-ix) [data-w-id="f3d09414-ba37-40cc-720a-3e4ae7246af8"] {width:16.94%;}html.w-mod-js:not(.w-mod-ix) [data-w-id="9c76b42b-2c0f-ea7b-60f5-9e89a6001701"] {width:16.94%;}html.w-mod-js:not(.w-mod-ix) [data-w-id="3b1f4083-af87-3d26-ff13-cbf85b5a613c"] {width:16.94%;}html.w-mod-js:not(.w-mod-ix) [data-w-id="70e07b3f-b353-4d70-c40a-43ec4a3b13f3"] {width:16.94%;}html.w-mod-js:not(.w-mod-ix) [data-w-id="f3d09414-ba37-40cc-720a-3e4ae7246ae3"] {width:16.94%;}html.w-mod-js:not(.w-mod-ix) [data-w-id="9c76b42b-2c0f-ea7b-60f5-9e89a60016ec"] {width:16.94%;}html.w-mod-js:not(.w-mod-ix) [data-w-id="3b1f4083-af87-3d26-ff13-cbf85b5a6127"] {width:16.94%;}html.w-mod-js:not(.w-mod-ix) [data-w-id="a1b0efa6-69f6-a435-a01d-22fb497eeab2"] {-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}}@media (max-width:991px) and (min-width:768px) {html.w-mod-js:not(.w-mod-ix) [data-w-id="0698d9b9-acdd-b1f2-f466-a71292a6f756"] {;}html.w-mod-js:not(.w-mod-ix) [data-w-id="5478270d-fa15-38c9-4efb-d659e2d3d40a"] {;}html.w-mod-js:not(.w-mod-ix) [data-w-id="4d4fe65a-0179-db71-c87f-8488b364d8f1"] {;}html.w-mod-js:not(.w-mod-ix) [data-w-id="842844d6-e370-2e6b-a75b-6b57eded29e0"] {;}html.w-mod-js:not(.w-mod-ix) [data-w-id="7d3dc104-b32e-06d3-9b42-a76e53c3b929"] {;}html.w-mod-js:not(.w-mod-ix) [data-w-id="b149e1b3-15b4-26de-3fa7-c068aec97969"] {;}html.w-mod-js:not(.w-mod-ix) [data-w-id="da83f8ad-0bfa-0c34-436b-ca59bf66c8b6"] {;}html.w-mod-js:not(.w-mod-ix) [data-w-id="da83f8ad-0bfa-0c34-436b-ca59bf66c8cf"] {;}html.w-mod-js:not(.w-mod-ix) [data-w-id="da83f8ad-0bfa-0c34-436b-ca59bf66c8e9"] {;}html.w-mod-js:not(.w-mod-ix) [data-w-id="3f9c011b-56f0-779f-5db3-12771722fee2"] {;}html.w-mod-js:not(.w-mod-ix) [data-w-id="3f9c011b-56f0-779f-5db3-12771722fefb"] {;}html.w-mod-js:not(.w-mod-ix) [data-w-id="3f9c011b-56f0-779f-5db3-12771722ff14"] {;}}@media (max-width:767px) and (min-width:480px) {html.w-mod-js:not(.w-mod-ix) [data-w-id="0698d9b9-acdd-b1f2-f466-a71292a6f756"] {;}html.w-mod-js:not(.w-mod-ix) [data-w-id="5478270d-fa15-38c9-4efb-d659e2d3d40a"] {;}html.w-mod-js:not(.w-mod-ix) [data-w-id="4d4fe65a-0179-db71-c87f-8488b364d8f1"] {;}html.w-mod-js:not(.w-mod-ix) [data-w-id="842844d6-e370-2e6b-a75b-6b57eded29e0"] {;}html.w-mod-js:not(.w-mod-ix) [data-w-id="7d3dc104-b32e-06d3-9b42-a76e53c3b929"] {;}html.w-mod-js:not(.w-mod-ix) [data-w-id="b149e1b3-15b4-26de-3fa7-c068aec97969"] {;}html.w-mod-js:not(.w-mod-ix) [data-w-id="da83f8ad-0bfa-0c34-436b-ca59bf66c8b6"] {;}html.w-mod-js:not(.w-mod-ix) [data-w-id="da83f8ad-0bfa-0c34-436b-ca59bf66c8cf"] {;}html.w-mod-js:not(.w-mod-ix) [data-w-id="da83f8ad-0bfa-0c34-436b-ca59bf66c8e9"] {;}html.w-mod-js:not(.w-mod-ix) [data-w-id="3f9c011b-56f0-779f-5db3-12771722fee2"] {;}html.w-mod-js:not(.w-mod-ix) [data-w-id="3f9c011b-56f0-779f-5db3-12771722fefb"] {;}html.w-mod-js:not(.w-mod-ix) [data-w-id="3f9c011b-56f0-779f-5db3-12771722ff14"] {;}}@media (max-width:479px) {html.w-mod-js:not(.w-mod-ix) [data-w-id="0698d9b9-acdd-b1f2-f466-a71292a6f756"] {;}html.w-mod-js:not(.w-mod-ix) [data-w-id="5478270d-fa15-38c9-4efb-d659e2d3d40a"] {;}html.w-mod-js:not(.w-mod-ix) [data-w-id="4d4fe65a-0179-db71-c87f-8488b364d8f1"] {;}html.w-mod-js:not(.w-mod-ix) [data-w-id="842844d6-e370-2e6b-a75b-6b57eded29e0"] {;}html.w-mod-js:not(.w-mod-ix) [data-w-id="7d3dc104-b32e-06d3-9b42-a76e53c3b929"] {;}html.w-mod-js:not(.w-mod-ix) [data-w-id="b149e1b3-15b4-26de-3fa7-c068aec97969"] {;}html.w-mod-js:not(.w-mod-ix) [data-w-id="da83f8ad-0bfa-0c34-436b-ca59bf66c8b6"] {;}html.w-mod-js:not(.w-mod-ix) [data-w-id="da83f8ad-0bfa-0c34-436b-ca59bf66c8cf"] {;}html.w-mod-js:not(.w-mod-ix) [data-w-id="da83f8ad-0bfa-0c34-436b-ca59bf66c8e9"] {;}html.w-mod-js:not(.w-mod-ix) [data-w-id="3f9c011b-56f0-779f-5db3-12771722fee2"] {;}html.w-mod-js:not(.w-mod-ix) [data-w-id="3f9c011b-56f0-779f-5db3-12771722fefb"] {;}html.w-mod-js:not(.w-mod-ix) [data-w-id="3f9c011b-56f0-779f-5db3-12771722ff14"] {;}html.w-mod-js:not(.w-mod-ix) [data-w-id="cdc7f0bb-51b1-9dd6-a62e-a0d65481719f"] {;}}`,
          }}
          suppressHydrationWarning
        />
      </head>
      <body suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
        <Script src="/js/webfont.js" strategy="afterInteractive" />
        <Script
          src="/js/jquery-3.5.1.min.dc5e7f18c8.js"
          strategy="afterInteractive"
        />
        <Script
          src="/js/webflow.schunk.36b8fb49256177c8.js"
          strategy="afterInteractive"
        />
        <Script
          src="/js/webflow.schunk.8208d3e53b97e3c7.js"
          strategy="afterInteractive"
        />
        <Script
          src="/js/webflow.schunk.57027dd40c40bf05.js"
          strategy="afterInteractive"
        />
        <Script
          src="/js/webflow.schunk.9dfb96661114d3db.js"
          strategy="afterInteractive"
        />
        <Script
          src="/js/webflow.53a613e1.0ca2f44de061a57d.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
