import React from "react";
import WebflowPageId from "@/components/WebflowPageId";
import ContactSection1 from "@/components/ContactSection1";
import ContactSection2 from "@/components/ContactSection2";
import ContactSection3 from "@/components/ContactSection3";

export default function ContactPage() {
  return (
    <>
      <WebflowPageId pageId="696f0209b959d237a91abfed" />
      <style
        dangerouslySetInnerHTML={{
          __html: `
  [data-wf-bgvideo-fallback-img] {
    display: none;
  }
  @media (prefers-reduced-motion: reduce) {
    [data-wf-bgvideo-fallback-img] {
      position: absolute;
      z-index: -100;
      display: inline-block;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }`,
        }}
        suppressHydrationWarning
      />
      <main>
        <ContactSection1 />
        <ContactSection2 />
        <ContactSection3 />
      </main>
    </>
  );
}
