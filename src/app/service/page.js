import React from "react";
import WebflowPageId from "@/components/WebflowPageId";
import ServiceSection1 from "@/components/ServiceSection1";
import ServiceSection2 from "@/components/ServiceSection2";
import ServiceSection3 from "@/components/ServiceSection3";

export default function ServicePage() {
  return (
    <>
      <WebflowPageId pageId="696f01f6cab64a4ff5fb1fad" />
      <style
        dangerouslySetInnerHTML={{
          __html: `@media (min-width:992px) {html.w-mod-js:not(.w-mod-ix) [data-w-id="54656bea-a361-86f4-2658-81e77b397f84"] {-webkit-transform:translate3d(0, 0, 0) scale3d(1.2, 1.2, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1.2, 1.2, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1.2, 1.2, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1.2, 1.2, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}html.w-mod-js:not(.w-mod-ix) [data-w-id="263f6410-a097-ec7d-5a46-8b8885825580"] {width:50%;height:250px;}html.w-mod-js:not(.w-mod-ix) [data-w-id="ed7e77e4-58de-488c-08c4-e94ec57de078"] {width:0%;}html.w-mod-js:not(.w-mod-ix) [data-w-id="01004086-b119-9b25-3e7f-e5f909feabf5"] {width:50%;height:250px;}html.w-mod-js:not(.w-mod-ix) [data-w-id="a90c5938-00c5-06d5-f8bb-6ce14bd36b11"] {width:0%;}html.w-mod-js:not(.w-mod-ix) [data-w-id="a6e6413b-69e7-2a54-7c0b-e9a36f830dd5"] {width:50%;height:250px;}html.w-mod-js:not(.w-mod-ix) [data-w-id="9c2a3d92-e378-bb0c-f9b4-d245533fd764"] {width:0%;}html.w-mod-js:not(.w-mod-ix) [data-w-id="8c09893c-2dad-a5de-4221-db5a16d95d18"] {opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id="8c09893c-2dad-a5de-4221-db5a16d95d1a"] {opacity:0;}}`,
        }}
        suppressHydrationWarning
      />
      <main>
        <ServiceSection1 />
        <ServiceSection2 />
        <ServiceSection3 />
      </main>
    </>
  );
}
