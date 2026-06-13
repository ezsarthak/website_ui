import React from "react";
import WebflowPageId from "@/components/WebflowPageId";
import BlogthreeSection1 from "@/components/BlogthreeSection1";
import BlogthreeSection2 from "@/components/BlogthreeSection2";

export default function BlogthreePage() {
  return (
    <>
      <WebflowPageId pageId="696f01daa60e57c97de818a5" />
      <style
        dangerouslySetInnerHTML={{ __html: `` }}
        suppressHydrationWarning
      />
      <main>
        <BlogthreeSection1 />
        <BlogthreeSection2 />
      </main>
    </>
  );
}
