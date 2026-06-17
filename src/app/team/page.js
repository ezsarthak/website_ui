import React from "react";
import WebflowPageId from "@/components/WebflowPageId";
import SpecialistsSection1 from "@/components/SpecialistsSection1";
import SpecialistsSection2 from "@/components/SpecialistsSection2";
import SpecialistsSection3 from "@/components/SpecialistsSection3";

export default function SpecialistsPage() {
  return (
    <>
      <WebflowPageId pageId="696f01e79ad6d1ea44b3411e" />
      <style
        dangerouslySetInnerHTML={{
          __html: `@media (min-width:992px) {html.w-mod-js:not(.w-mod-ix) [data-w-id="bf4c5f67-e372-26db-6419-7bba171d04b8"] {-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}}`,
        }}
        suppressHydrationWarning
      />
      <main>
        <SpecialistsSection1 />
        <SpecialistsSection2 />
        <SpecialistsSection3 />
      </main>
    </>
  );
}
