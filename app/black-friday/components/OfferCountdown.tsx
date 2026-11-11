"use client";

import { useOfferCountdown } from "./useOfferCountdown";
import NotifySignup from "./NotifySignup";

const GradientRule = () => (
  <div
    aria-hidden="true"
    className="h-0.5 w-full bg-gradient-to-r from-transparent via-emerald-500 to-indigo-500 opacity-80"
  />
);

export default function OfferCountdown() {
  const remaining = useOfferCountdown();
  const ended = remaining === null;

  const units: [string, number | undefined][] = [
    ["Days", remaining?.days],
    ["Hours", remaining?.hours],
    ["Minutes", remaining?.minutes],
    ["Seconds", remaining?.seconds],
  ];

  return (
    <section className="w-full bg-[#070f1d] text-white">
      <GradientRule />

      <div className="mx-auto max-w-3xl px-4 pb-16 pt-20 text-center sm:px-6">
        <h2 className="text-2xl font-medium tracking-tight sm:text-[32px]">
          {ended
            ? "Our Black Friday offer has ended."
            : "Black Friday ends Cyber Monday, 30 November."}
        </h2>
        <p className="mt-3 text-sm text-slate-400 sm:text-base">
          {ended
            ? "Annual plans are still available at our standard pricing."
            : "Explore annual plans now — pricing confirmed before you check out."}
        </p>

        {!ended && (
          <div className="mt-8 flex justify-center gap-3 sm:gap-4" role="timer" aria-live="off">
            {units.map(([label, value]) => (
              <div
                key={label}
                className="flex w-[72px] flex-col items-center rounded-xl border border-white/10 bg-[#171e2b] py-4 sm:w-[108px]"
              >
                <span className="bf-display text-2xl font-bold tabular-nums sm:text-3xl">
                  {value === undefined ? "--" : String(value).padStart(2, "0")}
                </span>
                <span className="mt-1 text-[10px] uppercase tracking-[0.12em] text-slate-400 sm:text-xs">
                  {label}
                </span>
              </div>
            ))}
          </div>
        )}

        <a
          href="#plans"
          className="bf-display mt-8 inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-base font-medium text-slate-900 transition-colors hover:bg-slate-200"
        >
          Explore annual plans
        </a>

        <NotifySignup />
      </div>

      <GradientRule />
    </section>
  );
}
