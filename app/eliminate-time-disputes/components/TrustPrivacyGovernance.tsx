"use client";

export default function TrustPrivacyGovernance() {
  return (
    <section className="w-full px-5 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center">
        {/* Eyebrow */}
        <span className="text-center text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600">
          Trust, Privacy &amp; Governance
        </span>

        {/* Heading */}
        <h2 className="mt-3 w-full max-w-[820px] text-center text-3xl font-bold leading-tight text-slate-800 sm:text-4xl sm:leading-10 dark:text-white">
          Fair review — never surveillance
        </h2>

        {/* Description */}
        <p className="mt-4 w-full max-w-[760px] text-center text-base font-normal leading-7 text-gray-500 dark:text-gray-400">
          Transparency-first and privacy-first: reviewable records, explainable
          policy, worker participation, and accountable human decisions.
        </p>

        {/* Trust notice */}
        <div className="mt-8 w-full max-w-[900px] rounded-xl border border-emerald-100 bg-emerald-50 px-5 py-4 dark:border-emerald-900/50 dark:bg-emerald-950/40">
          <p className="text-center text-sm leading-5">
            <span className="font-bold text-teal-700 dark:text-teal-400">
              Human authority remains controlling.
            </span>{" "}
            <span className="font-normal text-slate-800 dark:text-slate-200">
              ZoikoTime supports fair review with preserved evidence and
              explainable policy; it does not guarantee zero disputes, decide
              misconduct, or replace payroll or legal judgment.
            </span>{" "}
            <a
              href="/trust"
              className="font-semibold text-teal-700 transition-colors hover:text-teal-800 dark:text-teal-400 dark:hover:text-teal-300"
            >
              Visit Trust Center →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}