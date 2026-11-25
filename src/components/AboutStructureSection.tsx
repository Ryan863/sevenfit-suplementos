import Image from "next/image";
import {
  Accessibility,
  ArrowRight,
  AtSign,
  CheckCircle2,
  CreditCard,
  ShoppingBag,
  Store,
  Truck,
  Wifi,
} from "lucide-react";
import {
  SEVENFIT_CONTACT,
  STRUCTURE_AMENITIES,
} from "@/lib/sevenfit-data";

const STRUCTURE_ICONS = [
  Store,
  ShoppingBag,
  Truck,
  CreditCard,
  Accessibility,
  Wifi,
];

export function AboutStructureSection() {
  return (
    <section
      id="ct-sevenfit"
      className="bg-white text-[#111114] py-20 sm:py-24 border-b border-stone-900/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Editorial Portrait Image */}
          <div className="reveal-block lg:col-span-5">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-stone-900/10 bg-stone-100">
              <Image
                src="/images/about-consultoria.jpg"
                alt="Interior da loja SevenFit com balcão de atendimento consultivo em pedra natural e prateleiras minimalistas"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-white/15 bg-[#0C0C0E]/90 p-4 text-white backdrop-blur-md">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D91636] tabular-nums">
                  Desde 2016 • 10 Anos de Evolução
                </p>
                <p className="mt-1 font-display text-base font-bold uppercase tracking-tight">
                  Atendimento Consultivo Presencial
                </p>
              </div>
            </div>
          </div>

          {/* Story + Structure Grid */}
          <div className="reveal-block lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9E0B22]">
                Sobre a SevenFit &amp; Estrutura Completa
              </p>
              <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight leading-[0.98] text-[#111114]">
                Orientação real de quem vive musculação e nutrição.
              </h2>
              <p className="text-base leading-relaxed text-[#52525B]">
                Com base empresarial sólida desde{" "}
                <span className="font-semibold text-[#111114] tabular-nums">2010</span>{" "}
                e atuação na marca SevenFit desde{" "}
                <span className="font-semibold text-[#111114] tabular-nums">2016</span>,
                construímos em Concórdia um ponto de referência para quem busca
                resultado com seriedade — unindo consultoria técnica, estoque
                verificado e o CT SevenFit.
              </p>
            </div>

            {/* Key Stats Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 border-y border-stone-900/10 py-6">
              <div>
                <p className="font-display text-2xl sm:text-3xl font-bold text-[#111114] tabular-nums">
                  10 Anos
                </p>
                <p className="text-xs uppercase tracking-wider text-[#52525B]">
                  Marca desde 2016
                </p>
              </div>
              <div>
                <p className="font-display text-2xl sm:text-3xl font-bold text-[#111114] tabular-nums">
                  +1.950
                </p>
                <p className="text-xs uppercase tracking-wider text-[#52525B]">
                  Publicações @sevenfitgroup
                </p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="font-display text-2xl sm:text-3xl font-bold text-[#9E0B22] tabular-nums">
                  ~8 mil
                </p>
                <p className="text-xs uppercase tracking-wider text-[#52525B]">
                  Seguidores no Instagram
                </p>
              </div>
            </div>

            {/* 6 Structure & Accessibility Badges */}
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#111114]">
                Modalidades &amp; Acessibilidade no Local
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {STRUCTURE_AMENITIES.map((amenity, idx) => {
                  const Icon = STRUCTURE_ICONS[idx] ?? CheckCircle2;
                  return (
                    <div
                      key={amenity.title}
                      className="flex items-start gap-3 rounded-lg border border-stone-900/10 bg-[#F7F6F4] p-3.5"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white border border-stone-900/10 text-[#9E0B22]">
                        <Icon className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wide text-[#111114]">
                          {amenity.title}
                        </p>
                        <p className="text-xs text-[#52525B] mt-0.5">
                          {amenity.detail}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href={SEVENFIT_CONTACT.whatsappDefaultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-[#D91636] hover:bg-[#B00E29] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors"
              >
                <span>Falar com Consultor</span>
                <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              </a>

              <a
                href={SEVENFIT_CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg border border-stone-900/15 bg-[#F7F6F4] hover:bg-stone-200/70 px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#111114] transition-colors"
              >
                <AtSign className="h-4 w-4 text-[#9E0B22]" strokeWidth={1.8} aria-hidden="true" />
                <span>{SEVENFIT_CONTACT.instagramHandle}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
