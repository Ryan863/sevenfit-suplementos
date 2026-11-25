import { ArrowRight, AtSign, MapPin, Phone } from "lucide-react";
import { NAV_LINKS, SEVENFIT_CONTACT } from "@/lib/sevenfit-data";
import { BrandLogo } from "./BrandLogo";

export function Footer() {
  return (
    <footer className="bg-[#0C0C0E] text-white">
      {/* Cinematic Closing Band */}
      <div className="bg-gradient-to-br from-[#9E0B22] via-[#6B0717] to-[#0C0C0E] border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                SevenFit Group • Concórdia - SC
              </p>
              <h2 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight leading-[0.95] text-white">
                Evolução é decisão.
              </h2>
              <p className="text-sm sm:text-base text-white/85">
                Fale agora com um consultor SevenFit, confira disponibilidade em
                estoque e garanta a cobertura de preço na sua próxima compra.
              </p>
            </div>

            <a
              href={SEVENFIT_CONTACT.whatsappDefaultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] shrink-0 items-center justify-center gap-2.5 rounded-lg bg-white hover:bg-zinc-100 px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#111114] transition-colors"
            >
              <span>Falar com Consultor Agora</span>
              <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {/* Institutional Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          <div className="md:col-span-5 space-y-3">
            <BrandLogo />
            <p className="text-xs leading-relaxed text-zinc-400 max-w-sm">
              {SEVENFIT_CONTACT.fullName} — Suplementação nacional e importada,
              alimentação fit, vestuário esportivo, acompanhamento nutricional e
              CT SevenFit.
            </p>
          </div>

          <div className="md:col-span-3 space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
              Navegação
            </p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs uppercase tracking-[0.14em] text-zinc-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
              Contato Direto
            </p>
            <div className="space-y-2.5 text-xs text-zinc-300">
              <a
                href={SEVENFIT_CONTACT.phoneHref}
                className="flex items-center gap-2 hover:text-white transition-colors tabular-nums"
              >
                <Phone className="h-3.5 w-3.5 text-[#D91636]" strokeWidth={1.8} aria-hidden="true" />
                <span>{SEVENFIT_CONTACT.phoneDisplay}</span>
              </a>
              <a
                href={SEVENFIT_CONTACT.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-white transition-colors"
              >
                <MapPin className="h-3.5 w-3.5 shrink-0 text-[#D91636] mt-0.5" strokeWidth={1.8} aria-hidden="true" />
                <span>{SEVENFIT_CONTACT.address}</span>
              </a>
              <a
                href={SEVENFIT_CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <AtSign className="h-3.5 w-3.5 text-[#D91636]" strokeWidth={1.8} aria-hidden="true" />
                <span>{SEVENFIT_CONTACT.instagramHandle} • Facebook: {SEVENFIT_CONTACT.facebookName}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] text-zinc-500 tabular-nums">
          <p>
            {SEVENFIT_CONTACT.legalName} – CNPJ {SEVENFIT_CONTACT.cnpj}
          </p>
          <p>© {new Date().getFullYear()} SevenFit Suplementos Nutricionais.</p>
        </div>
      </div>
    </footer>
  );
}
