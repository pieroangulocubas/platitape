"use client";
import { useEffect } from "react";

/**
 * Observa automáticamente los títulos h2/h3, párrafos de sección,
 * y cualquier elemento con data-reveal, añadiendo la clase "revealed"
 * cuando entran al viewport. Sin modificar los componentes existentes.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const AUTO_SELECTORS = [
      "section h2",
      "section h3",
      "section > div > p",
      ".glass-card",
      ".step-number",
      "[data-reveal]",
    ];

    const elements = document.querySelectorAll<HTMLElement>(AUTO_SELECTORS.join(", "));

    // Asigna delay escalonado a elementos hermanos dentro del mismo padre
    const parentCounters = new Map<Element, number>();
    elements.forEach((el) => {
      const parent = el.parentElement!;
      const idx = (parentCounters.get(parent) ?? 0);
      parentCounters.set(parent, idx + 1);
      el.style.transitionDelay = `${idx * 0.08}s`;
      el.classList.add("reveal-init");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
