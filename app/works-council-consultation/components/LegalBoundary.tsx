import Link from "next/link";

const distinctions = [
  {
    lead: "Delivery is not consultation.",
    rest: "Sending materials does not prove meaningful dialogue occurred.",
  },
  {
    lead: "Attendance is not agreement.",
    rest: "A meeting record shows a session happened, nothing more.",
  },
  {
    lead: "Acknowledgment is not consent.",
    rest: "Evidence of receipt is not evidence of acceptance.",
  },
  {
    lead: "Agreement, approval, and consent are different things.",
    rest: "The terms are not interchangeable and each must be supported for the jurisdiction, body, scope, and authority in question.",
  },
];

export default function LegalBoundary() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-12 sm:px-8 lg:px-12">

        <div className="rounded-2xl border border-l-4 border-amber-200 bg-amber-50/60 px-6 pb-7 pt-10 sm:px-8 dark:border-amber-900/60 dark:bg-amber-950/20">

          <p className="text-base font-bold uppercase leading-6 tracking-widest text-amber-600 dark:text-amber-400">
            Professional and legal boundary
          </p>

          <h2 className="mt-3 max-w-[860px] text-xl font-bold leading-7 text-amber-900 dark:text-amber-100">
            These resources are product and governance evidence. They are not
            legal advice.
          </h2>

          <p className="mt-3 max-w-[760px] text-base font-normal leading-6 text-amber-800 dark:text-amber-200/80">
            Employers remain responsible for applicable law, collective
            agreements, representative rights, notice, timing, bargaining,
            consultation, consent, independent advice, and implementation
            decisions. ZoikoTime explains product behavior and provides
            evidence — it does not determine what your obligations are or
            whether you have met them.
          </p>

          {/* Distinctions */}
          <ul className="mt-5 flex flex-col gap-2">

            {distinctions.map((item) => (
              <li key={item.lead} className="flex gap-3">

                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500"
                  aria-hidden="true"
                />

                <p className="text-sm font-normal leading-6 text-amber-800 dark:text-amber-200/80">
                  <span className="font-bold">{item.lead}</span> {item.rest}
                </p>

              </li>
            ))}

          </ul>

          <p className="mt-5 max-w-[760px] text-base font-normal leading-6 text-amber-800 dark:text-amber-200/80">
            <span className="font-bold">
              We will not label a consultation
            </span>{" "}
            Ready, Complete, Approved, Agreed, Consented, Compliant, or Legally
            Sufficient unless that exact term is supported for the jurisdiction,
            body, scope, and authority. Product readiness and legal sufficiency
            are separate — and this page keeps them separate.
          </p>

          {/* Ownership Footer */}
          <div className="mt-7 flex flex-col gap-1 border-t border-amber-200 pt-4 dark:border-amber-900/60">

            <p className="text-xs font-normal leading-5 text-amber-700 dark:text-amber-300/70">
              Statement owner: Trust &amp; Governance · Last reviewed 12 Jul
              2026 · Next review 12 Jan 2027
            </p>

            <Link
              href="/compliance"
              className="inline-flex items-center gap-2 self-start text-sm font-bold leading-6 text-emerald-600 transition hover:text-emerald-700 dark:text-emerald-400"
            >
              <span>Compliance &amp; Assurance</span>
              <span aria-hidden="true">→</span>
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}
