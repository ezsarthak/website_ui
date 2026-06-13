import React from "react";
import WebflowPageId from "@/components/WebflowPageId";
import LicenseSection1 from "@/components/LicenseSection1";
import LicenseSection2 from "@/components/LicenseSection2";

export default function LicensePage() {
  return (
    <>
      <WebflowPageId pageId="696f023c51d495dd8995aebc" />
      <style
        dangerouslySetInnerHTML={{ __html: `` }}
        suppressHydrationWarning
      />
      <main>
        <LicenseSection1 />
        <LicenseSection2 />
      </main>
    </>
  );
}
