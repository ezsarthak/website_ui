import React from "react";
import WebflowPageId from "@/components/WebflowPageId";
import StyleguideSection1 from "@/components/StyleguideSection1";
import StyleguideSection2 from "@/components/StyleguideSection2";

export default function StyleguidePage() {
  return (
    <>
      <WebflowPageId pageId="696f02346cc5ce65e7775f7a" />
      <style
        dangerouslySetInnerHTML={{ __html: `` }}
        suppressHydrationWarning
      />
      <main>
        <StyleguideSection1 />
        <StyleguideSection2 />
      </main>
    </>
  );
}
