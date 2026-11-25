import {
  Clock,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Star,
  ThumbsUp,
} from "lucide-react";
import {
  OPENING_HOURS,
  REVIEWS,
  SEVENFIT_CONTACT,
} from "@/lib/sevenfit-data";

export function SocialProofLocationSection() {
  return (
    <section
      id="avaliacoes"
      className="bg-[#F7F6F4] text-[#111114] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Verified Social Proof */}
        <div className="space-y-10">
          <div className="reveal-block flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-stone-900/10 pb-10">
            <div className="space-y-3 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9E0B22]">
                Prova Social Verificada
              </p>
              <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight leading-[0.98] text-[#111114]">
                Reputação construída em cada atendimento.
              </h2>
            </div>

            {/* Dual Reputation Badges */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex items-center gap-3 rounded-xl border border-stone-900/10 bg-white px-5 py-3.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#9E0B22]/10 text-[#9E0B22]">
                  <Star className="h-5 w-5 fill-[#9E0B22]" strokeWidth={1.8} aria-hidden="true" />
                </div>
                <div>
                  <p className="font-display text-lg font-bold text-[#111114] tabular-nums">
                    4,9 / 5 no Google
                  </p>
                  <p className="text-xs text-[#52525B] tabular-nums">
                    18 avaliações verificadas
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-stone-900/10 bg-white px-5 py-3.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#111114] text-white">
                  <ThumbsUp className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                </div>
                <div>
                  <p className="font-display text-lg font-bold text-[#111114] tabular-nums">
                    98% de Aprovação
                  </p>
                  <p className="text-xs text-[#52525B] tabular-nums">
                    14 avaliações no Facebook
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="stagger-grid grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((review) => (
              <blockquote
                key={review.author}
                className="stagger-card flex flex-col justify-between rounded-xl border border-stone-900/10 bg-white p-6 sm:p-8 space-y-6"
              >
                <p className="text-sm sm:text-base leading-relaxed text-[#111114]">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <footer className="border-t border-stone-900/10 pt-4 flex items-center justify-between text-xs">
                  <span className="font-bold uppercase tracking-wider text-[#111114]">
                    {review.author}
                  </span>
                  <span className="font-semibold text-[#9E0B22] tabular-nums">
                    {review.source}
                  </span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>

        {/* Location & Hours Architectural Split */}
        <div
          id="contato"
          className="reveal-block grid grid-cols-1 lg:grid-cols-12 overflow-hidden rounded-xl border border-stone-900/10 bg-white"
        >
          <div className="lg:col-span-6 p-8 sm:p-10 lg:p-12 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9E0B22]">
                Localização &amp; Horários • Centro de Concórdia
              </p>
              <h3 className="font-display text-2xl sm:text-4xl font-bold uppercase tracking-tight leading-tight text-[#111114]">
                Visite a SevenFit ou peça pelo WhatsApp.
              </h3>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <MapPin
                    className="h-5 w-5 shrink-0 text-[#D91636] mt-0.5"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-semibold text-[#111114]">
                      {SEVENFIT_CONTACT.address}
                    </p>
                    <p className="text-xs text-[#52525B] tabular-nums">
                      {SEVENFIT_CONTACT.cep}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock
                    className="h-5 w-5 shrink-0 text-[#D91636] mt-0.5"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                  <div className="w-full max-w-sm space-y-1.5 text-sm">
                    {OPENING_HOURS.map((item) => (
                      <div
                        key={item.day}
                        className="flex items-center justify-between border-b border-stone-900/10 pb-1 last:border-b-0 tabular-nums"
                      >
                        <span className="text-[#52525B]">{item.day}</span>
                        <span className="font-semibold text-[#111114]">
                          {item.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                href={SEVENFIT_CONTACT.whatsappDefaultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-[#D91636] hover:bg-[#B00E29] px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                <span>WhatsApp {SEVENFIT_CONTACT.phoneDisplay}</span>
              </a>

              <a
                href={SEVENFIT_CONTACT.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg border border-stone-900/15 bg-[#F7F6F4] hover:bg-stone-200/70 px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#111114] transition-colors"
              >
                <Navigation className="h-4 w-4 text-[#9E0B22]" strokeWidth={1.8} aria-hidden="true" />
                <span>Abrir Rota no Maps</span>
              </a>

              <a
                href={SEVENFIT_CONTACT.phoneHref}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg border border-stone-900/15 bg-white hover:bg-[#F7F6F4] px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#111114] transition-colors tabular-nums"
              >
                <Phone className="h-4 w-4 text-[#9E0B22]" strokeWidth={1.8} aria-hidden="true" />
                <span>Ligar</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 min-h-[340px] lg:min-h-[460px] bg-stone-200 relative">
            <iframe
              title="Mapa SevenFit Suplementos Nutricionais — Concórdia SC"
              src={SEVENFIT_CONTACT.mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full min-h-[340px] border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
