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
        url: "/monavi/monavi_logo.webp",
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
    images: ["/monavi/monavi_logo.webp"],
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
      </head>
      <body suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
