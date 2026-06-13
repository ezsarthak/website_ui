import React from "react";
import WebflowPageId from "@/components/WebflowPageId";
import BlogoneSection1 from "@/components/BlogoneSection1";
import BlogoneSection2 from "@/components/BlogoneSection2";

export default function BlogonePage() {
  return (
    <>
      <WebflowPageId pageId="696f01c606fff047819b50a9" />
      <style
        dangerouslySetInnerHTML={{
          __html: `@media (min-width:992px) {html.w-mod-js:not(.w-mod-ix) [data-w-id="3ff3079d-656e-af98-147c-733f8f95edc7"] {-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}}`,
        }}
        suppressHydrationWarning
      />
      <main>
        <BlogoneSection1 />
        <BlogoneSection2 />
      </main>
    </>
  );
}
