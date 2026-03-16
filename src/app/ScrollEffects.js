// components/ScrollEffects.js
"use client";

import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    // window.scrollTo(0, 0);
    // ────────────────────────────────────────────────
    // 1. Scroll Reveal with IntersectionObserver
    // ────────────────────────────────────────────────
    const reveals = document.querySelectorAll(".reveal");

    if (!reveals.length) return; // nothing to observe

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Optional: unobserve after reveal (better perf)
            // observer.unobserve(entry.target);
          }
          // Optional: remove class when scrolling back up
          // else {
          //   entry.target.classList.remove("visible");
          // }
        });
      },
      {
        threshold: 0.12, // same as your original
        rootMargin: "0px", // can tweak e.g. "-60px 0px" to reveal earlier
      }
    );

    reveals.forEach((el) => observer.observe(el));

    // ────────────────────────────────────────────────
    // 2. Nav background change on scroll
    // ────────────────────────────────────────────────
    const nav = document.querySelector("nav");

    if (!nav) return;

    const handleScroll = () => {
      if (window.scrollY > 60) {
        nav.style.background = "rgba(10,10,10,0.97)";
        nav.style.backdropFilter = "blur(12px)";
      } else {
        nav.style.background = "linear-gradient(to bottom, rgba(10,10,10,0.98) 0%, rgba(10,10,10) 100%)";
        nav.style.backdropFilter = "blur(2px)";
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Optional: run once on mount (in case already scrolled)
    handleScroll();

    // Cleanup (very important in Next.js)
    return () => {
      reveals.forEach((el) => observer.unobserve(el));
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // empty dependency = run once on mount

  return null; // this component doesn't render anything
}