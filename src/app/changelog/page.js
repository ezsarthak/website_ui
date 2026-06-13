import React from "react";
import WebflowPageId from "@/components/WebflowPageId";
import ChangelogSection1 from "@/components/ChangelogSection1";
import ChangelogSection2 from "@/components/ChangelogSection2";

export default function ChangelogPage() {
  return (
    <>
      <WebflowPageId pageId="696f024505c05469986ba453" />
      <style
        dangerouslySetInnerHTML={{ __html: `` }}
        suppressHydrationWarning
      />
      <main>
        <ChangelogSection1 />
        <ChangelogSection2 />
      </main>
    </>
  );
}
