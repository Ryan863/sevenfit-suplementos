"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, Phone, ShieldCheck, X } from "lucide-react";
import { NAV_LINKS, OPENING_HOURS, SEVENFIT_CONTACT } from "@/lib/sevenfit-data";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Discreet Topbar */}
      <div className="bg-[#0C0C0E] border-b border-white/10 text-[11px] sm:text-xs text-zinc-300">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <p className="flex items-center gap-2 font-medium tracking-wide truncate">
            <ShieldCheck
              className="h-3.5 w-3.5 shrink-0 text-[#D91636]"
              strokeWidth={1.8}
              aria-hidden="true"
            />
            <span className="truncate">
              Cobertura de Preço Concórdia &amp; Chapecó • Pronta Entrega no Centro
            </span>
          </p>
          <a
            href={SEVENFIT_CONTACT.phoneHref}
            className="hidden sm:inline-flex items-center gap-1.5 font-semibold text-white hover:text-[#D91636] transition-colors tabular-nums shrink-0"
          >
            <Phone className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden="true" />
            <span>{SEVENFIT_CONTACT.phoneDisplay}</span>
          </a>
        </div>
      </div>

      {/* Main Editorial Navbar */}
      <nav
        aria-label="Navegação principal"
        className="bg-[#0C0C0E]/90 backdrop-blur-md border-b border-white/10"
      >
        <div className="mx-auto flex h-16 sm:h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a
            href="#topo"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D91636] rounded"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#D91636] font-display text-sm font-bold tracking-tight text-white">
              7F
            </span>
            <div className="flex flex-col leading-none">
              <span className="font-display text-lg font-bold tracking-[0.14em] text-white uppercase">
                SEVENFIT
              </span>
              <span className="text-[10px] tracking-[0.2em] text-zinc-400 uppercase">
                Suplementos &amp; Fitness
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-300 hover:text-white transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={SEVENFIT_CONTACT.whatsappDefaultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-[#D91636] hover:bg-[#B00E29] px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors"
            >
              <span>Consultar Estoque</span>
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-drawer"
              aria-label={menuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white hover:bg-white/10 transition-colors"
            >
              {menuOpen ? (
                <X className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Mobile Drawer */}
      {menuOpen && (
        <div
          id="mobile-nav-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Menu mobile SevenFit"
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[#0C0C0E] px-6 py-8 lg:hidden overflow-y-auto"
        >
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <span className="font-display text-lg font-bold tracking-[0.14em] text-white uppercase">
                SEVENFIT
              </span>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Fechar menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white"
              >
                <X className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
              </button>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              {NAV_LINKS.map((link, idx) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between border-b border-white/10 py-4 font-display text-2xl font-bold uppercase tracking-tight text-white hover:text-[#D91636] transition-colors"
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-sans tracking-[0.2em] text-zinc-500 tabular-nums">
                    0{idx + 1}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 space-y-5 border-t border-white/10 pt-6">
            <div className="space-y-1 text-xs text-zinc-400">
              <p className="font-semibold uppercase tracking-[0.16em] text-zinc-300">
                Horário de Atendimento
              </p>
              {OPENING_HOURS.map((item) => (
                <p key={item.day} className="flex justify-between tabular-nums">
                  <span>{item.day}</span>
                  <span className="text-zinc-200">{item.hours}</span>
                </p>
              ))}
            </div>

            <a
              href={SEVENFIT_CONTACT.whatsappDefaultUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex w-full min-h-[48px] items-center justify-center gap-2 rounded-lg bg-[#D91636] hover:bg-[#B00E29] px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors"
            >
              <span>Consultar Estoque e Preços</span>
              <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
