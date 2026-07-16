import React from "react";

export default function Decision() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-800 to-blue-950">
      <div className="mx-auto flex min-h-[466px] max-w-[900px] flex-col items-center px-6 py-[74px] text-center">
        {/* Label */}
        <div className="text-base font-semibold uppercase tracking-[2.56px] text-teal-600">
          Decision-Ready
        </div>

        {/* Heading */}
        <h2 className="mt-[32px] text-3xl font-bold leading-[1.45] text-white sm:text-4xl">
          Turn workforce records into intelligence
          <br className="hidden sm:block" />
          you can act on
        </h2>

        {/* Description */}
        <p className="mt-5 max-w-[580px] text-base leading-6 text-white/80">
          Talk with the ZoikoTime team about payroll readiness, billing
          confidence, utilization visibility, exception resolution, and
          audit-ready reporting.
        </p>

        {/* Actions */}
        <div className="mt-[42px] flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="h-11 w-36 rounded-[10px] bg-teal-600 text-base font-semibold leading-4 text-white shadow-[0px_6px_16px_0px_rgba(16,162,141,0.28)] transition hover:bg-teal-500">
            Get a Demo
          </button>

          <button className="h-11 w-40 rounded-[10px] border border-white/30 bg-white/10 text-base font-semibold leading-4 text-white transition hover:bg-white/15">
            Start Free Trial
          </button>
        </div>
      </div>
    </section>
  );
}