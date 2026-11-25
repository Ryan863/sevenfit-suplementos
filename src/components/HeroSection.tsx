import Image from "next/image";
import {
  ArrowRight,
  Award,
  Flame,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";
import { HERO_BENEFITS, SEVENFIT_CONTACT } from "@/lib/sevenfit-data";

const BENEFIT_ICONS = [Flame, HeartPulse, Sparkles, Truck];

export function HeroSection() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-[#0C0C0E] text-white border-b border-white/10"
    >
      {/* Desktop Full-Bleed Hero Image */}
      <div className="hidden md:block absolute inset-0 z-0">
        <Image
          src="/images/hero-desktop.jpg"
          alt="Pote de suplemento preto fosco e coqueteleira rubi SevenFit sobre rocha em estúdio escuro"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right lg:object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#0C0C0E]/95 via-[#0C0C0E]/68 to-transparent"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#0C0C0E] via-transparent to-[#0C0C0E]/40"
        />
      </div>

      {/* Mobile Dedicated Top Visual Stage (keeps tub & shaker unobstructed) */}
      <div className="relative md:hidden h-[300px] sm:h-[360px] w-full overflow-hidden">
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
          className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0C0C0E] via-[#0C0C0E]/75 to-transparent"
        />
      </div>

      {/* Main Editorial Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-2 pb-10 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          {/* Left Editorial Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="hero-stagger inline-flex items-center gap-2 rounded-md border border-[#D91636]/40 bg-[#9E0B22]/25 px-3 py-1.5 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D91636]" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-100">
                SUPLEMENTAÇÃO • ALIMENTAÇÃO FIT • CT SEVENFIT • CONCÓRDIA - SC
              </span>
            </div>

            <h1 className="hero-stagger font-display text-4xl sm:text-6xl lg:text-[4.5rem] font-bold uppercase tracking-tight leading-[0.95] text-white">
              SevenFit.
              <span className="block text-[#D91636] mt-1">Evolução é decisão.</span>
              <span className="sr-only">
                {" "}
                — Suplementos Nutricionais em Concórdia, SC
              </span>
            </h1>

            <p className="hero-stagger max-w-xl text-base sm:text-lg leading-relaxed text-zinc-300">
              Suplementos nacionais e importados a pronta entrega, refeições fit,
              vestuário e treinamento personalizado no Centro de Concórdia — com
              cobertura de preço garantida.
            </p>

            {/* Dual CTAs */}
            <div className="hero-stagger flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href={SEVENFIT_CONTACT.whatsappDefaultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-lg bg-[#D91636] hover:bg-[#B00E29] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors shadow-lg shadow-[#9E0B22]/30"
              >
                <span>Consultar Estoque e Preços</span>
                <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              </a>

              <a
                href="#pilares"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors"
              >
                <span>Conhecer o Ecossistema</span>
                <ArrowRight className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right/Bottom Floating Editorial Spec Cards */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-end justify-end gap-3">
            <div className="hero-badge w-full sm:w-auto lg:w-72 rounded-xl border border-white/15 bg-[#141417]/85 p-4 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#9E0B22]/30 text-[#D91636] border border-[#D91636]/30">
                  <Award className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                </div>
                <div>
                  <p className="font-display text-sm font-bold uppercase tracking-wide text-white tabular-nums">
                    10 Anos de Evolução
                  </p>
                  <p className="text-xs text-zinc-400 tabular-nums">
                    Marca ativa desde 2016 • Empresa desde 2010
                  </p>
                </div>
              </div>
            </div>

            <div className="hero-badge w-full sm:w-auto lg:w-72 rounded-xl border border-white/15 bg-[#141417]/85 p-4 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#9E0B22]/30 text-[#D91636] border border-[#D91636]/30">
                  <ShieldCheck className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                </div>
                <div>
                  <p className="font-display text-sm font-bold uppercase tracking-wide text-white tabular-nums">
                    Cobertura de Preço (Até 2x)
                  </p>
                  <p className="text-xs text-zinc-400">
                    Concórdia, Chapecó e sites oficiais
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Benefit Strip */}
        <div className="hero-stagger mt-12 border-t border-white/10 pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {HERO_BENEFITS.map((benefit, index) => {
            const Icon = BENEFIT_ICONS[index];
            return (
              <div
                key={benefit.title}
                className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3"
              >
                <Icon
                  className="h-4 w-4 shrink-0 text-[#D91636]"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-white">
                    {benefit.title}
                  </p>
                  <p className="text-xs text-zinc-400">{benefit.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
