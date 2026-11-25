import Image from "next/image";
import {
  ArrowDownRight,
  ArrowUpRight,
  Flame,
  HeartPulse,
  Sparkles,
  Truck,
} from "lucide-react";
import { HERO_BENEFITS, SEVENFIT_CONTACT } from "@/lib/sevenfit-data";

const BENEFIT_ICONS = [Flame, HeartPulse, Sparkles, Truck];

export function HeroSection() {
  return (
    <section id="topo" className="relative bg-[#09090B] text-[#F5F3EF]">
      {/* Primary Visual Stage */}
      <div className="relative overflow-hidden md:min-h-[calc(100svh-108px)] md:flex md:items-center">
        {/* Desktop Full-Bleed Hero Image — Right side stays 100% clean & unobstructed */}
        <div className="hidden md:block absolute inset-0 z-0">
          <Image
            src="/images/hero-desktop.jpg"
            alt="Pote de suplemento preto fosco e coqueteleira rubi SevenFit sobre rocha em estúdio escuro"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right"
          />
          {/* Sculpted gradient: strong editorial legibility on the left, crystal-clear product on the right */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#09090B] via-[#09090B]/78 via-45% to-transparent"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent via-18% to-[#09090B]/30"
          />
        </div>

        {/* Mobile Dedicated Top Visual Stage — zero text over the supplement tub */}
        <div className="relative md:hidden h-[310px] sm:h-[370px] w-full overflow-hidden">
          <Image
            src="/images/hero-mobile.jpg"
            alt="Suplementos SevenFit em estúdio escuro com destaque rubi"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#09090B] via-[#09090B]/70 to-transparent"
          />
        </div>

        {/* Left-Aligned Editorial Composition (never overlaps right-side product) */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-3 pb-12 md:py-20 lg:py-24">
          <div className="max-w-xl lg:max-w-[36rem] space-y-7">
            {/* Pure Hairline Editorial Eyebrow */}
            <div className="hero-stagger flex items-center gap-3">
              <span className="h-px w-8 bg-[#D91636]" aria-hidden="true" />
              <span className="font-mono-tech text-[11px] uppercase tracking-[0.24em] text-zinc-300">
                Concórdia — SC &nbsp;·&nbsp; Desde 2016
              </span>
            </div>

            {/* Monumental Editorial Display Typography */}
            <div className="hero-stagger space-y-2">
              <h1 className="font-display text-[3.5rem] sm:text-[4.75rem] lg:text-[6.25rem] font-extrabold uppercase tracking-[-0.015em] leading-[0.88] text-[#F5F3EF]">
                <span className="block">SevenFit.</span>
                <span className="block text-zinc-200">
                  Evolução é{" "}
                  <span className="font-editorial italic font-normal lowercase tracking-normal text-[#F5F3EF] border-b-2 border-[#D91636] pb-0.5">
                    decisão.
                  </span>
                </span>
                <span className="sr-only">
                  {" "}
                  — Suplementos Nutricionais, Alimentação Fit e CT SevenFit em
                  Concórdia, SC
                </span>
              </h1>
            </div>

            {/* Crisp Editorial Lead Copy */}
            <p className="hero-stagger max-w-md text-[15px] sm:text-base leading-relaxed text-zinc-300/90">
              Suplementos nacionais e importados a pronta entrega, refeições
              fit, vestuário técnico e treinamento personalizado no Centro de
              Concórdia — com cobertura de preço garantida.
            </p>

            {/* Architectural Dual CTAs */}
            <div className="hero-stagger flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
              <a
                href={SEVENFIT_CONTACT.whatsappDefaultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[52px] items-center justify-between sm:justify-center gap-4 rounded-sm bg-[#F5F3EF] hover:bg-white pl-6 pr-2.5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#09090B] transition-all"
              >
                <span>Consultar Estoque</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-[#D91636] text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
                </span>
              </a>

              <a
                href="#pilares"
                className="group inline-flex min-h-[52px] items-center justify-center gap-2 px-3 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-300 hover:text-white transition-colors border-b border-white/20 hover:border-[#D91636]"
              >
                <span>Explorar Ecossistema</span>
                <ArrowDownRight
                  className="h-4 w-4 text-[#D91636] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </a>
            </div>

            {/* Clean Editorial Metrics Strip (anchored cleanly on left, zero overlap with product) */}
            <div className="hero-badge pt-6 border-t border-white/10 grid grid-cols-3 gap-4 sm:gap-6">
              <div>
                <p className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#F5F3EF] tabular-nums">
                  10 Anos
                </p>
                <p className="font-mono-tech text-[10px] uppercase tracking-[0.14em] text-zinc-400 mt-0.5">
                  Marca desde 2016
                </p>
              </div>
              <div className="border-l border-white/10 pl-4 sm:pl-6">
                <p className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#F5F3EF] tabular-nums">
                  Até 2x
                </p>
                <p className="font-mono-tech text-[10px] uppercase tracking-[0.14em] text-zinc-400 mt-0.5">
                  Cobertura de preço
                </p>
              </div>
              <div className="border-l border-white/10 pl-4 sm:pl-6">
                <p className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#D91636] tabular-nums">
                  4,9 ★
                </p>
                <p className="font-mono-tech text-[10px] uppercase tracking-[0.14em] text-zinc-400 mt-0.5">
                  Avaliação Google
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Architectural Coordinate Watermark at far bottom-right */}
        <div
          aria-hidden="true"
          className="hidden xl:block absolute bottom-5 right-8 z-10 font-mono-tech text-[10px] uppercase tracking-[0.24em] text-white/30"
        >
          Centro · Concórdia — SC · Pronta Entrega
        </div>
      </div>

      {/* Dedicated Architectural Benefit Bar (cleanly separated below the hero photo) */}
      <div className="border-y border-white/10 bg-[#0D0D10]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {HERO_BENEFITS.map((benefit, index) => {
              const Icon = BENEFIT_ICONS[index];
              return (
                <div
                  key={benefit.title}
                  className="flex items-center gap-3.5 py-5 sm:px-5 first:sm:pl-0 last:sm:pr-0"
                >
                  <Icon
                    className="h-4 w-4 shrink-0 text-[#D91636]"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-display text-sm font-bold uppercase tracking-[0.08em] text-[#F5F3EF]">
                      {benefit.title}
                    </p>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      {benefit.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
