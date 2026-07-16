import React from "react";

export default function MobileWorkforceAssurance() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-800 to-blue-950 px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center text-center">
        {/* Eyebrow */}
        <p className="text-xs font-semibold uppercase leading-6 tracking-[0.16em] text-teal-400 sm:text-base sm:tracking-[2.56px]">
          Mobile Workforce Assurance
        </p>

        {/* Heading */}
        <h1 className="mt-8 max-w-[700px] text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-[56px]">
          Bring workforce assurance to every approved work environment
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-[650px] text-sm font-normal leading-6 text-white/80 sm:text-base">
          Give Workers a clear mobile experience for managing their status, and
          give Managers the tools to review mobile activity, exceptions,
          approvals, and audit-ready records with confidence.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            className="w-full rounded-[10px] bg-teal-600 px-6 py-3 text-base font-semibold leading-5 text-white shadow-[0px_6px_16px_0px_rgba(16,162,141,0.28)] transition hover:bg-teal-500 sm:w-auto"
          >
            Request Tailored Demo
          </button>

          <button
            type="button"
            className="w-full rounded-[10px] border border-white/30 bg-white/10 px-6 py-3 text-base font-semibold leading-5 text-white transition hover:bg-white/15 sm:w-auto"
          >
            Request Mobile App Pilot Access
          </button>
        </div>
      </div>
    </section>
  );
}