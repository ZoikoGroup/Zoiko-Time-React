import React from "react";
import { FileText } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-teal-50 via-white to-white px-5 py-20 transition-colors duration-300 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 sm:px-8 lg:px-12">
      {/* Decorative radial glow */}
      <div className="pointer-events-none absolute -right-40 -top-64 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.05)_0%,rgba(20,184,166,0)_70%)] dark:bg-[radial-gradient(circle,rgba(20,184,166,0.12)_0%,rgba(20,184,166,0)_70%)]" />

      <div className="relative mx-auto flex min-h-[395px] w-full max-w-[1180px] flex-col items-center text-center">
        {/* Label */}
        <p className="text-xs font-bold uppercase leading-5 tracking-wider text-teal-600 dark:text-teal-400">
          About ZoikoTime
        </p>

        {/* Heading */}
        <h1 className="mt-12 text-3xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl lg:leading-[57.2px]">
          Workforce Assurance for{" "}
          <span className="text-teal-600 dark:text-teal-400">
            Modern Enterprises
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-[945px] text-base font-normal leading-7 text-slate-500 dark:text-slate-400 sm:text-lg">
          ZoikoTime is an enterprise-grade workforce assurance and performance
          intelligence system — built to serve as the system of record for how
          work is verified, governed, and understood across modern
          organisations.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
          {/* Primary Button */}
          <button
            type="button"
            className="flex h-12 w-full items-center justify-center gap-3 rounded-lg bg-teal-600 px-6 text-base font-semibold text-white shadow-[0px_4px_14px_0px_rgba(0,157,140,0.28)] transition hover:bg-teal-500 sm:w-72"
          >
            <FileText size={16} strokeWidth={1.67} />
            <span>Request Executive Briefing</span>
          </button>

          {/* Secondary Button */}
          <button
            type="button"
            className="h-12 w-full rounded-lg border border-slate-300 px-6 text-base font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800 sm:w-56"
          >
            Explore the Platform
          </button>
        </div>
      </div>
    </section>
  );
}