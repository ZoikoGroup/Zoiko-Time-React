import React from "react";
import { Check, CloudOff, Info } from "lucide-react";

export default function Connectivity() {
  return (
    <section className="w-full overflow-hidden bg-slate-950 px-5 py-16 sm:px-8 lg:min-h-[633px] lg:px-10 lg:py-[74px]">
      {/* Header */}
      <div className="mx-auto max-w-[700px] text-center">
        <p className="text-xs font-semibold uppercase leading-5 tracking-[0.2em] text-teal-400">
          Connectivity
        </p>

        <h2 className="mt-2.5 text-3xl font-bold leading-tight text-slate-100 sm:text-4xl">
          Offline and low-connectivity behavior
        </h2>

        <p className="mt-4 text-sm font-normal leading-7 text-slate-400 sm:text-base">
          Field and distributed work needs reliable behavior when connection
          drops —
          <br className="hidden sm:block" />
          handled safely and fairly.
        </p>
      </div>

      {/* Main Card */}
      <div className="mx-auto mt-12 max-w-[760px] rounded-2xl border border-slate-700 bg-slate-900 p-5 shadow-[0px_6px_18px_rgba(0,0,0,0.25)] sm:p-6 lg:mt-[76px] lg:p-6">
        {/* Offline Alert */}
        <div className="flex items-start gap-3 rounded-[10px] border border-orange-800/60 bg-yellow-950/40 px-4 py-3">
          <Info
            size={16}
            strokeWidth={2}
            className="mt-0.5 shrink-0 text-yellow-500"
          />

          <p className="text-sm font-medium leading-5 text-yellow-500">
            Offline — 2 actions pending sync · last synced 09:31
          </p>
        </div>

        {/* Information List */}
        <div className="mt-7 space-y-5">
          {/* Item 1 */}
          <div className="flex items-start gap-3">
            <Check
              size={16}
              strokeWidth={2}
              className="mt-1 shrink-0 text-teal-400"
            />

            <p className="text-sm font-normal leading-6 text-slate-300">
              Connectivity state is always shown clearly on screen.
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-3">
            <Check
              size={16}
              strokeWidth={2}
              className="mt-1 shrink-0 text-teal-400"
            />

            <p className="text-sm font-normal leading-6 text-slate-300">
              Eligible actions are preserved where technically safe, with
              original timestamp retained.
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-3">
            <CloudOff
              size={16}
              strokeWidth={2}
              className="mt-1 shrink-0 text-teal-400"
            />

            <p className="text-sm font-normal leading-6 text-slate-300">
              Pending actions sync when connection returns, with a separate
              sync timestamp and idempotency to prevent duplicates.
            </p>
          </div>

          {/* Item 4 */}
          <div className="flex items-start gap-3">
            <Check
              size={16}
              strokeWidth={2}
              className="mt-1 shrink-0 text-teal-400"
            />

            <p className="text-sm font-normal leading-6 text-slate-300">
              Unresolved continuity issues are marked{" "}
              <span className="font-bold text-slate-200">
                Unverified Exit — Pending Review
              </span>
              , never as a violation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}