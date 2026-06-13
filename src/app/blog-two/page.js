import React from "react";
import WebflowPageId from "@/components/WebflowPageId";
import BlogtwoSection1 from "@/components/BlogtwoSection1";
import BlogtwoSection2 from "@/components/BlogtwoSection2";
import BlogtwoSection3 from "@/components/BlogtwoSection3";

export default function BlogtwoPage() {
  return (
    <>
      <WebflowPageId pageId="696f01d2ebe73350d0a080bd" />
      <style
        dangerouslySetInnerHTML={{ __html: `` }}
        suppressHydrationWarning
      />
      <main>
        <BlogtwoSection1 />
        <BlogtwoSection2 />
        <BlogtwoSection3 />
      </main>
    </>
  );
}
