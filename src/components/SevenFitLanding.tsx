"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navbar } from "./Navbar";
import { HeroSection } from "./HeroSection";
import { PillarsSection } from "./PillarsSection";
import { PriceMatchSection } from "./PriceMatchSection";
import { AboutStructureSection } from "./AboutStructureSection";
import { SocialProofLocationSection } from "./SocialProofLocationSection";
import { Footer } from "./Footer";
import { FloatingWhatsApp } from "./FloatingWhatsApp";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function SevenFitLanding() {
  const mainRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".hero-stagger", {
          y: 26,
          opacity: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: "power3.out",
          clearProps: "transform,opacity",
        });

        gsap.from(".hero-badge", {
          y: 20,
          opacity: 0,
          duration: 0.7,
          delay: 0.25,
          stagger: 0.12,
          ease: "power2.out",
          clearProps: "transform,opacity",
        });

        gsap.utils.toArray<HTMLElement>(".reveal-block").forEach((block) => {
          gsap.from(block, {
            y: 32,
            opacity: 0,
            duration: 0.75,
            ease: "power2.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
              trigger: block,
              start: "top 86%",
              once: true,
            },
          });
        });

        gsap.utils.toArray<HTMLElement>(".stagger-grid").forEach((grid) => {
          const cards = grid.querySelectorAll(".stagger-card");
          if (!cards.length) return;
          gsap.from(cards, {
            y: 28,
            opacity: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power2.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
              trigger: grid,
              start: "top 86%",
              once: true,
            },
          });
        });

        if (typeof document !== "undefined" && document.fonts) {
          document.fonts.ready.then(() => {
            ScrollTrigger.refresh();
          });
        }
      });

      return () => mm.revert();
    },
    { scope: mainRef }
  );

  return (
    <div ref={mainRef} className="relative min-h-screen">
      <div className="grain-overlay" aria-hidden="true" />
      <Navbar />
      <main>
        <HeroSection />
        <PillarsSection />
        <PriceMatchSection />
        <AboutStructureSection />
        <SocialProofLocationSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
