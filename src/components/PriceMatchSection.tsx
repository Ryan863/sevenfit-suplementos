import { ArrowRight, BadgeCheck, ShieldCheck, Zap } from "lucide-react";
import { buildWhatsAppUrl, DIFFERENTIALS } from "@/lib/sevenfit-data";

const DIFF_ICONS = [ShieldCheck, Zap, BadgeCheck];

export function PriceMatchSection() {
  return (
    <section
      id="vantagens"
      className="relative overflow-hidden bg-[#0C0C0E] text-white py-20 sm:py-24 border-b border-white/10"
    >
      {/* Subtle Ruby Architectural Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-[#9E0B22]/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Commercial Manifesto Banner */}
        <div className="reveal-block rounded-xl border border-[#D91636]/40 bg-gradient-to-br from-[#9E0B22] via-[#7A081A] to-[#141417] p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                Política Comercial SevenFit • Concórdia &amp; Chapecó
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight leading-[1.02] text-white">
                Garantia real de cobertura de preço, na hora e sem frete.
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-white/90 max-w-3xl">
                Encontrou mais barato em site oficial ou loja física de Concórdia
                ou Chapecó? Nós cobrimos a oferta (mesma marca, à vista ou em
                até <span className="font-bold tabular-nums">2x no cartão</span>)
                e você leva na hora sem esperar frete.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <a
                href={buildWhatsAppUrl(
                  "Olá, SevenFit! Encontrei uma oferta e quero ativar a Garantia de Cobertura de Preço."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto min-h-[48px] items-center justify-center gap-2.5 rounded-lg bg-white hover:bg-zinc-100 px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#111114] transition-colors"
              >
                <span>Enviar Oferta no WhatsApp</span>
                <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* 3 Technical Differential Cards */}
        <div className="stagger-grid mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {DIFFERENTIALS.map((item, idx) => {
            const Icon = DIFF_ICONS[idx];
            return (
              <div
                key={item.title}
                className="stagger-card flex flex-col justify-between rounded-xl border border-white/10 bg-[#141417] p-6 sm:p-8 space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-400 tabular-nums">
                      {item.code}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#9E0B22]/25 text-[#D91636] border border-[#D91636]/30">
                      <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-zinc-300">
                    {item.description}
                  </p>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D91636] tabular-nums">
                    {item.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
