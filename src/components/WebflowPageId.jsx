"use client";

import { useEffect } from "react";

export default function WebflowPageId({ pageId }) {
  useEffect(() => {
    // Native Intersection Observer to replace laggy Webflow IX2
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            // Optional: stop observing once visible
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, // Trigger when 10% visible
      }
    );

    const animatedElements = document.querySelectorAll("[data-w-id]");
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return null;
}
