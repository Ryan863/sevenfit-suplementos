"use client";

import { MessageCircle } from "lucide-react";
import { SEVENFIT_CONTACT } from "@/lib/sevenfit-data";

export function FloatingWhatsApp() {
  return (
    <aside
      aria-label="Atendimento rápido pelo WhatsApp"
      className="fixed bottom-5 right-5 z-40"
    >
      <a
        href={SEVENFIT_CONTACT.whatsappDefaultUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com consultor SevenFit no WhatsApp"
        className="group relative flex h-12 w-12 sm:w-auto items-center justify-center sm:px-4 rounded-sm bg-[#121215]/92 hover:bg-[#D91636] text-[#F5F3EF] shadow-2xl shadow-black/50 border border-white/15 backdrop-blur-md transition-colors active:scale-95"
      >
        <span className="relative flex h-2 w-2 sm:mr-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
        </span>
        <MessageCircle className="h-4 w-4 sm:mr-2" strokeWidth={1.9} aria-hidden="true" />
        <span className="hidden sm:inline font-mono-tech text-[11px] font-medium uppercase tracking-[0.14em]">
          WhatsApp
        </span>
      </a>
    </aside>
  );
}
