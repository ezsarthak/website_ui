"use client";

import { useEffect } from "react";

export default function WebflowPageId({ pageId }) {
  useEffect(() => {
    if (pageId) {
      document.documentElement.setAttribute("data-wf-page", pageId);

      // Re-initialize Webflow interactions for the new page ID
      if (window.Webflow) {
        window.Webflow.destroy();
        window.Webflow.ready();
        if (window.Webflow.require("ix2")) {
          window.Webflow.require("ix2").init();
        }
      }
    }
  }, [pageId]);

  return null;
}
