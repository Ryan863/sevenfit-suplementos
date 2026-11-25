interface BrandLogoProps {
  compact?: boolean;
}

export function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <div className="inline-flex items-center gap-3 select-none">
      {/* Bespoke geometric kinetic "7" emblem */}
      <svg
        width="30"
        height="30"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M3 5H27.5L15.5 27H9.2L19.4 9.5H3V5Z"
          fill="#F5F3EF"
        />
        <path
          d="M20.8 18.5H29L24.4 27H16.2L20.8 18.5Z"
          fill="#D91636"
        />
      </svg>

      <div className="flex flex-col leading-none">
        <div className="flex items-baseline gap-0.5 font-display text-[22px] sm:text-[24px] font-extrabold uppercase tracking-[0.06em]">
          <span className="text-[#F5F3EF]">SEVEN</span>
          <span className="text-[#D91636]">FIT</span>
        </div>
        {!compact && (
          <span className="font-mono-tech text-[9px] uppercase tracking-[0.26em] text-zinc-400 mt-0.5">
            Performance &amp; Nutrição
          </span>
        )}
      </div>
    </div>
  );
}
