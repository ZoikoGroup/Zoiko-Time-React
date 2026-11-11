"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { X, Sparkles, ShieldCheck, Clock, ArrowRight } from "lucide-react";
import { useOfferCountdown } from "@/app/black-friday/components/useOfferCountdown";

/** Delay before the popup appears on each page load (ms). */
const OPEN_DELAY = 900;
/** Must match the transition duration below. */
const CLOSE_DURATION = 300;

const HIGHLIGHTS = [
  { icon: ShieldCheck, text: "Verified time tracking & timesheets" },
  { icon: Clock, text: "Approvals, reporting & audit-grade records" },
];

/**
 * Black Friday promo popup for the home page.
 * Intentionally has no "seen" memory — it opens on every page load / refresh.
 */
export default function BlackFridayPopup() {
  const remaining = useOfferCountdown();
  const [mounted, setMounted] = useState(false); // in the DOM
  const [visible, setVisible] = useState(false); // animated in
  const ctaRef = useRef<HTMLAnchorElement>(null);

  // Open shortly after every page load.
  useEffect(() => {
    const t = window.setTimeout(() => {
      setMounted(true);
      requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
    }, OPEN_DELAY);
    return () => window.clearTimeout(t);
  }, []);

  const close = useCallback(() => {
    setVisible(false);
    window.setTimeout(() => setMounted(false), CLOSE_DURATION);
  }, []);

  // Esc to close, lock page scroll, focus the CTA while open.
  useEffect(() => {
    if (!mounted) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    ctaRef.current?.focus({ preventScroll: true });
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [mounted, close]);

  // Don't show once the offer is over.
  if (!mounted || remaining === null) return null;

  const units: [string, number | undefined][] = [
    ["Days", remaining?.days],
    ["Hrs", remaining?.hours],
    ["Min", remaining?.minutes],
    ["Sec", remaining?.seconds],
  ];

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close Black Friday offer"
        tabIndex={-1}
        onClick={close}
        className="absolute inset-0 cursor-default bg-[#020618]/75 backdrop-blur-sm"
      />

      {/* Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="bf-popup-title"
        aria-describedby="bf-popup-desc"
        className={`relative w-full max-w-[1000px] overflow-hidden rounded-3xl border border-white/10 bg-[#070f1d] text-white shadow-[0_40px_120px_-20px_rgba(16,185,129,0.35)] transition-all duration-300 ease-out ${
          visible ? "translate-y-0 scale-100" : "translate-y-6 scale-95"
        }`}
      >
        {/* Glow + grid decoration */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 -top-24 size-80 rounded-full bg-emerald-500/25 blur-3xl" />
          <div className="absolute -bottom-28 -right-20 size-80 rounded-full bg-indigo-600/25 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
              backgroundSize: "36px 36px",
              maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
              WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            }}
          />
          <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-500 to-indigo-500" />
        </div>

        {/* Close */}
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-colors hover:bg-white/15 hover:text-white"
        >
          <X className="size-4" />
        </button>

        <div className="relative grid max-h-[90vh] overflow-x-hidden overflow-y-auto md:grid-cols-[minmax(0,1fr)_340px]">
          {/* Left: content */}
          <div className="p-6 pt-8 sm:p-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-emerald-400">
              <Sparkles className="size-3.5" />
              Black Friday 2026
            </span>

            <h2
              id="bf-popup-title"
              className="bf-display mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-[40px]"
            >
              Make every work hour{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                count.
              </span>
            </h2>

            <p id="bf-popup-desc" className="mt-3 max-w-md text-sm leading-6 text-slate-300 sm:text-base">
              Save <strong className="text-emerald-400">30% on the first year</strong> of any
              eligible ZoikoTime annual plan. Offer ends Cyber Monday, 30 November.
            </p>

            <ul className="mt-5 space-y-2.5">
              {HIGHLIGHTS.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2.5 text-sm text-slate-300">
                  <span className="flex size-6 items-center justify-center rounded-md bg-emerald-500/15 text-emerald-400">
                    <Icon className="size-3.5" />
                  </span>
                  {text}
                </li>
              ))}
            </ul>

            {/* Countdown */}
            <div className="mt-6" role="timer" aria-live="off">
              <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-slate-400">
                Offer ends in
              </p>
              <div className="mt-2 flex gap-2">
                {units.map(([label, value]) => (
                  <div
                    key={label}
                    className="flex w-[62px] flex-col items-center rounded-xl border border-white/10 bg-[#171e2b] py-2.5"
                  >
                    <span className="bf-display text-xl font-bold tabular-nums">
                      {value === undefined ? "--" : String(value).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.12em] text-slate-400">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                ref={ctaRef}
                href="/black-friday"
                onClick={close}
                className="bf-display group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-lg border border-emerald-300/50 bg-emerald-500 px-7 text-base font-semibold text-white shadow-[0_10px_30px_-8px_rgba(16,185,129,0.7)] transition-colors hover:bg-emerald-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/30 blur-sm transition-all duration-700 group-hover:left-[120%]"
                />
                Claim 30% off
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <button
                type="button"
                onClick={close}
                className="h-12 px-2 text-sm font-medium text-slate-400 transition-colors hover:text-white"
              >
                Maybe later
              </button>
            </div>

            <p className="mt-5 text-[11px] leading-5 text-slate-500">
              New customers only · eligible annual subscriptions · pass-through services excluded
            </p>
          </div>

          {/* Right: offer visual */}
          <div className="relative hidden items-center justify-center border-l border-white/10 bg-gradient-to-b from-[#0d1a2e] to-[#070f1d] p-8 md:flex">
            <div className="relative">
              {/* Spinning dashed ring */}
              <div
                aria-hidden="true"
                className="absolute -inset-5 animate-[spin_18s_linear_infinite] rounded-full border-2 border-dashed border-emerald-400/40"
              />
              {/* Badge */}
              <div className="flex size-48 items-center justify-center rounded-full border-[6px] border-slate-700/70 bg-emerald-500 shadow-[0_0_60px_rgba(16,185,129,0.5)]">
                <div className="flex size-[86%] -rotate-12 flex-col items-center justify-center rounded-full bg-[#020618] text-center">
                  <span className="bf-display text-xs font-extrabold uppercase leading-tight tracking-wide text-white">
                    Black Friday
                    <br />
                    Sale
                  </span>
                  <span className="bf-display mt-1 text-4xl font-extrabold text-emerald-400">
                    30%
                  </span>
                  <span className="bf-display text-sm font-extrabold uppercase tracking-widest text-white">
                    Off
                  </span>
                </div>
              </div>
            </div>

            {/* Price chip */}
            <div className="absolute inset-x-6 bottom-8 rounded-xl border border-white/10 bg-[#111827]/90 px-4 py-3 text-center backdrop-blur">
              <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400">
                Sovereign plan · per worker/mo
              </p>
              <p className="mt-1 flex items-baseline justify-center gap-2">
                <span className="text-sm text-slate-500 line-through">
                  <span className="sr-only">was </span>$25
                </span>
                <span className="bf-display text-2xl font-bold text-emerald-400">
                  <span className="sr-only">now </span>$17.50
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
