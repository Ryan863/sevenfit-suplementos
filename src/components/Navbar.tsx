"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { NAV_LINKS, OPENING_HOURS, SEVENFIT_CONTACT } from "@/lib/sevenfit-data";
import { BrandLogo } from "./BrandLogo";

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
      {/* Whisper-thin architectural topbar */}
      <div className="bg-[#070709] border-b border-white/[0.07] text-[10px] sm:text-[11px] text-zinc-400">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 sm:px-6 lg:px-8">
          <p className="flex items-center gap-2 font-mono-tech uppercase tracking-[0.14em] truncate">
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#D91636]"
              aria-hidden="true"
            />
            <span className="truncate">
              Cobertura de Preço Concórdia &amp; Chapecó • Pronta Entrega
            </span>
          </p>
          <a
            href={SEVENFIT_CONTACT.phoneHref}
            className="hidden sm:inline-flex items-center gap-1.5 font-mono-tech text-[11px] font-medium text-zinc-200 hover:text-white transition-colors tabular-nums shrink-0"
          >
            <Phone className="h-3 w-3 text-[#D91636]" strokeWidth={1.8} aria-hidden="true" />
            <span>{SEVENFIT_CONTACT.phoneDisplay}</span>
          </a>
        </div>
      </div>

      {/* Editorial Glass Navbar */}
      <nav
        aria-label="Navegação principal"
        className="bg-[#09090B]/80 backdrop-blur-xl border-b border-white/[0.08]"
      >
        <div className="mx-auto flex h-16 sm:h-[74px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a
            href="#topo"
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D91636] rounded-sm"
          >
            <BrandLogo />
          </a>

          <div className="hidden lg:flex items-center gap-9">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-400 hover:text-[#F5F3EF] transition-colors py-2 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#D91636] hover:after:w-full after:transition-all after:duration-300"
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
              className="hidden sm:inline-flex items-center gap-2 rounded-sm border border-[#D91636]/75 bg-[#D91636]/15 hover:bg-[#D91636] px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F5F3EF] transition-colors"
            >
              <span>Consultar Estoque</span>
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-drawer"
              aria-label={menuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-sm border border-white/15 bg-white/5 text-white hover:bg-white/10 transition-colors"
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
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[#09090B] px-6 py-8 lg:hidden overflow-y-auto"
        >
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <BrandLogo compact />
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Fechar menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-white/15 bg-white/5 text-white"
              >
                <X className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
              </button>
            </div>

            <div className="mt-8 flex flex-col">
              {NAV_LINKS.map((link, idx) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-baseline justify-between border-b border-white/10 py-4 font-display text-4xl font-bold uppercase tracking-tight text-[#F5F3EF] hover:text-[#D91636] transition-colors"
                >
                  <span>{link.label}</span>
                  <span className="font-mono-tech text-xs tracking-[0.2em] text-zinc-500 tabular-nums">
                    0{idx + 1}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 space-y-5 border-t border-white/10 pt-6">
            <div className="space-y-1.5 text-xs text-zinc-400">
              <p className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-zinc-300">
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
              className="flex w-full min-h-[48px] items-center justify-center gap-2 rounded-sm bg-[#F5F3EF] hover:bg-white px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#09090B] transition-colors"
            >
              <span>Consultar Estoque e Preços</span>
              <ArrowUpRight className="h-4 w-4 text-[#D91636]" strokeWidth={2.2} aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
