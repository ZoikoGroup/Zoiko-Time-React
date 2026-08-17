import React from "react";
import Link from "next/link";

export default function ConfidenceBanner() {
  return (
    <div className="bg-slate-800 dark:bg-slate-950 py-20 text-white font-sans text-center">
      <div className="mx-auto max-w-4xl px-6 space-y-8">
        {/* Info */}
        <div className="space-y-4">
          <span className="text-teal-400 text-xs font-bold uppercase tracking-widest block">
            Govern Access With Confidence
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Give the right people the right access — and prove it
          </h2>
          <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            See Classification &amp; AI Boundaries configured for your identity providers, roles, approval workflows, and audit requirements.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/request-enterprise-demo"
            className="px-7 py-3.5 text-base font-semibold text-white bg-[#10A28D] rounded-xl shadow-md hover:bg-teal-700 transition-all cursor-pointer"
          >
            Request Enterprise Demo
          </Link>
          <Link
            href="/start-free"
            className="px-7 py-3.5 text-base font-semibold text-white bg-white/10 border border-white/20 rounded-xl hover:bg-white/15 transition-all cursor-pointer"
          >
            Start Free
          </Link>
        </div>

        {/* Note subtext */}
        <p className="text-white/70 text-xs max-w-2xl mx-auto leading-relaxed">
          30-day trial for eligible plans · Human authority remains controlling · Supported controls &amp; assurances are documented in the Trust Center.
        </p>
      </div>
    </div>
  );
}
