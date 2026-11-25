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
        className="group relative flex h-12 sm:h-12 w-12 sm:w-auto items-center justify-center sm:px-5 rounded-full bg-[#D91636] hover:bg-[#B00E29] text-white shadow-lg shadow-[#0C0C0E]/40 border border-white/15 transition-all active:scale-95"
      >
        <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>
        <MessageCircle className="h-5 w-5 sm:mr-2" strokeWidth={2} aria-hidden="true" />
        <span className="hidden sm:inline text-xs font-semibold uppercase tracking-[0.14em]">
          Consultor WhatsApp
        </span>
      </a>
    </aside>
  );
}
