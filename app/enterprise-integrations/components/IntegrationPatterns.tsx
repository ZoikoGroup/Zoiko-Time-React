import Image from "next/image";

const patterns = [
  {
    title: "Inbound system-of-record",
    body: "Worker identifiers, organization structure, approved scheduling or policy context.",
    boundary:
      "Source stays authoritative · minimization, mapping, correction & retention",
  },
  {
    title: "Outbound governed records",
    body: "Approved time, attendance, timesheet, evidence, or reporting records.",
    boundary:
      "Only approved versions · destination acknowledgement & reconciliation",
  },
  {
    title: "Identity / access",
    body: "Account or service-identity context needed for access.",
    boundary: "Identity & Access is authoritative · no credential handoff",
  },
  {
    title: "Event delivery / webhook",
    body: "Approved events to an authorized endpoint.",
    boundary: "Signature, retries, idempotency, ordering, revocation",
  },
  {
    title: "Zoiko Sema connection",
    body: "Approved communication/workflow context between independent products.",
    boundary: "Explicit scope, mapping, authorization, activation & evidence",
  },
  {
    title: "Data / analytics",
    body: "Governed, authorized records for reporting and reconciliation.",
    boundary: "Purpose-bound · permissioned · no worker-risk scoring",
  },
];

export default function IntegrationPatterns() {
  return (
    <section className="w-full bg-white py-16 dark:bg-slate-950 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
            Patterns
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-800 dark:text-white sm:text-4xl">
            Integration patterns you can evaluate
          </h2>
          <p className="mx-auto mt-4 max-w-[720px] text-base font-normal leading-7 text-gray-500 dark:text-slate-400">
            What each pattern may exchange — and the boundary it must respect.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {patterns.map(({ title, body, boundary }) => (
            <div
              key={title}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] dark:border-slate-700 dark:bg-slate-900"
            >
              <h3 className="text-base font-semibold leading-6 text-slate-800 dark:text-white">
                {title}
              </h3>

              <p className="mt-2.5 text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
                {body}
              </p>

              <div className="mt-4 flex items-start gap-2.5">
                <Image
                  src="/enterprise-integrations/tick-mark.svg"
                  alt=""
                  aria-hidden="true"
                  width={14}
                  height={14}
                  className="mt-0.5 h-3.5 w-3.5 shrink-0"
                />
                <p className="text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
                  {boundary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
