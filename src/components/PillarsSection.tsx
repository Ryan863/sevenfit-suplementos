import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { buildWhatsAppUrl, PILLARS } from "@/lib/sevenfit-data";

export function PillarsSection() {
  return (
    <section
      id="pilares"
      className="bg-[#F7F6F4] text-[#111114] py-20 sm:py-24 border-b border-stone-900/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="reveal-block flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-stone-900/10">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9E0B22]">
              Ecossistema SevenFit • 4 Pilares
            </p>
            <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight leading-[0.98] text-[#111114]">
              Tudo o que a sua rotina de treino exige em um só lugar.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base leading-relaxed text-[#52525B]">
            Da suplementação de procedência garantida à cozinha fit, vestuário
            técnico e treinamento personalizado no Centro de Concórdia.
          </p>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="stagger-grid mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {PILLARS.map((pillar, index) => {
            const colSpan =
              index === 0
                ? "lg:col-span-7"
                : index === 1
                  ? "lg:col-span-5"
                  : index === 2
                    ? "lg:col-span-5"
                    : "lg:col-span-7";

            const isDark = Boolean(pillar.featuredDark);

            return (
              <article
                key={pillar.number}
                className={`stagger-card group flex flex-col justify-between overflow-hidden rounded-xl border transition-colors ${colSpan} ${
                  isDark
                    ? "bg-[#0C0C0E] text-white border-white/10"
                    : "bg-white text-[#111114] border-stone-900/10"
                }`}
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-900">
                    <Image
                      src={pillar.image}
                      alt={pillar.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-md bg-[#0C0C0E]/85 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm tabular-nums">
                      <span className="text-[#D91636]">{pillar.number}</span>
                      <span className="text-white/40">/</span>
                      <span>{pillar.subtitle}</span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 space-y-4">
                    <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight leading-tight">
                      {pillar.title}
                    </h3>

                    <p
                      className={`text-sm sm:text-base leading-relaxed ${
                        isDark ? "text-zinc-300" : "text-[#52525B]"
                      }`}
                    >
                      {pillar.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {pillar.specs.map((spec) => (
                        <span
                          key={spec}
                          className={`rounded-md border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider ${
                            isDark
                              ? "border-white/15 bg-white/5 text-zinc-200"
                              : "border-stone-900/10 bg-[#F7F6F4] text-[#111114]"
                          }`}
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div
                  className={`px-6 sm:px-8 pb-6 sm:pb-8 pt-4 border-t ${
                    isDark ? "border-white/10" : "border-stone-900/10"
                  }`}
                >
                  <a
                    href={buildWhatsAppUrl(pillar.whatsappText)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex min-h-[44px] items-center gap-2.5 rounded-lg px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] transition-colors ${
                      isDark
                        ? "bg-[#D91636] hover:bg-[#B00E29] text-white"
                        : "bg-[#111114] hover:bg-[#D91636] text-white"
                    }`}
                  >
                    <span>Consultar {pillar.number}</span>
                    <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
