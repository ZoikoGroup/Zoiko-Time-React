import React from "react";
import { AlertCircle, HelpCircle, Eye, HandMetal, ShieldAlert, Award } from "lucide-react";

export default function WhatClassificationCannotDecide() {
  return (
    <section className="bg-slate-900 px-6 py-16 dark:bg-slate-950 sm:px-12 lg:px-24 text-slate-100 font-sans">
      <div className="mx-auto max-w-7.5xl">
        {/* Title Block */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            What a classification cannot decide
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400">
            Deterministic classification can route or describe a configured record state.
            That is the whole of its authority.
          </p>
        </div>

        {/* Warning Alert Banner */}
        <div className="mx-auto max-w-3xl mb-12 flex gap-4 rounded-xl border border-red-900/30 bg-red-950/20 p-5">
          <AlertCircle className="h-5 w-5 shrink-0 text-red-400 mt-0.5" />
          <div>
            <h4 className="text-xs font-bold text-red-400 uppercase tracking-wide">
              Classification does not determine
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-slate-350">
              Payroll outcomes · discipline · misconduct · termination · legal rights · or any
              other consequential outcome. A downstream &quot;blocked&quot; state describes
              configured eligibility for a next step — it is not a decision about a person.
            </p>
          </div>
        </div>

        {/* 4-column Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1 */}
          <div className="rounded-2xl border border-slate-800 bg-slate-850/40 p-6 shadow-sm flex flex-col justify-between hover:bg-slate-850/60 transition-colors duration-150">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-base font-bold text-white">What a worker sees</h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Permitted record facts, the historical policy and version label, a plain-language
                rule explanation, the result state, the review state, and who can help.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-slate-800 bg-slate-850/40 p-6 shadow-sm flex flex-col justify-between hover:bg-slate-850/60 transition-colors duration-150">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-base font-bold text-white">What a worker can do</h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Where configured: ask for clarification, request a correction, add permitted
                context, see pending status, and receive the outcome with its history.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-slate-800 bg-slate-850/40 p-6 shadow-sm flex flex-col justify-between hover:bg-slate-850/60 transition-colors duration-150">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-base font-bold text-white">Restricted policy detail</h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Where full text is restricted, the category and purpose are explained along with why
                detail is unavailable. Hidden information is{" "}
                <span className="font-bold text-amber-400">never</span> exposed through counts,
                titles, or tooltips.
              </p>
            </div>
          </div>

          {/* Card 4 - Highlighted Green Card */}
          <div className="rounded-2xl border border-emerald-950/40 bg-emerald-950/20 p-6 shadow-md flex flex-col justify-between hover:bg-emerald-950/30 transition-colors duration-150">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-base font-bold text-white">Neutral language only</h3>
              </div>
              <p className="text-sm text-emerald-300/90 leading-relaxed">
                No fraud, dishonest, suspicious worker, guilt, automatic violation, noncompliant
                worker, low performer, productivity risk, AI confidence, or risk score. None of
                these exists in this product.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
