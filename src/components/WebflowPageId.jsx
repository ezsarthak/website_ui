"use client";

import { useEffect } from "react";

export default function WebflowPageId({ pageId }) {
  useEffect(() => {
    if (pageId) {
      document.documentElement.setAttribute("data-wf-page", pageId);
      document.documentElement.setAttribute("data-wf-site", "696f017270bc35c55e784979");

      // Re-initialize Webflow interactions for the new page ID
      if (window.Webflow) {
        window.Webflow.destroy();
        window.Webflow.ready();
        // IX2 disabled for performance
      }
    }
  }, [pageId]);

  return null;
}
