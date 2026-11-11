"use client";

import { useOfferCountdown } from "./useOfferCountdown";

export default function PromoBar() {
  const remaining = useOfferCountdown();

  const timeLeft =
    remaining === undefined
      ? null
      : remaining === null
        ? "Offer ended"
        : `${remaining.days}d ${remaining.hours}h ${remaining.minutes}m left`;

  return (
    <div className="relative w-full bg-[#020618] px-4 py-2.5 text-center text-[11px] font-semibold uppercase tracking-[0.08em] sm:text-xs">
      <span className="text-emerald-400">30% off</span>{" "}
      <span className="text-white">Annual plans</span>
      <span aria-hidden="true" className="mx-2 text-slate-600 sm:mx-3">•</span>
      <span className="text-slate-400">27 Nov – 30 Nov 2026</span>
      {timeLeft && (
        <>
          <span aria-hidden="true" className="mx-2 text-slate-600 sm:mx-3">•</span>
          <span className="normal-case tracking-normal text-slate-400">{timeLeft}</span>
        </>
      )}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-500 to-indigo-500"
      />
    </div>
  );
}
