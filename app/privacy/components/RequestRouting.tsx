import Link from "next/link";

const requestTypes = [
  {
    title: "Workforce-record explanation or correction",
    summary:
      "A question about a specific time, attendance, or approval record.",
    route:
      "Your authenticated personal record view, or the approved worker route with your employer.",
  },
  {
    title: "Account access or correction",
    summary: "Your name, work email, or account details.",
    route: "Account settings, or the Help and Privacy route.",
  },
  {
    title: "Customer-admin export or deletion",
    summary: "Organization-level export, deletion, or scope change.",
    route: "An authorized administrator, or Enterprise Support.",
  },
  {
    title: "Privacy rights inquiry",
    summary:
      "Access, correction, deletion, restriction, objection, or portability questions.",
    route:
      "Privacy request route, with jurisdiction and relationship triage — and appropriate involvement of your employer.",
  },
  {
    title: "DPA, subprocessor or transfer inquiry",
    summary: "Contractual and procurement evidence needs.",
    route: "Controlled Privacy Review, with secure evidence delivery.",
  },
  {
    title: "Complaint or escalation",
    summary: "When a response was inadequate or a route did not work.",
    route: "Privacy or support escalation, with a named owner and a status path.",
  },
];

const handling = [
  "Identity and authority verification is proportionate and purpose-limited",
  "Status, clarification, partial fulfilment, exception, and appeal are all visible",
  "Exported data uses secure delivery with expiry, revocation, and audit",
  "Marketing consent is never required to submit a privacy request",
];

const notPromised = [
  "A universal response time — obligations vary by jurisdiction and relationship",
  "That a specific legal right applies to you — that depends on your jurisdiction, your relationship to the data, and your employer's role",
];

export default function RequestRouting() {
  return (
    <section
      id="privacy-requests"
      className="w-full scroll-mt-24 overflow-hidden bg-slate-50 dark:bg-slate-950"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Privacy Requests &amp; Rights Routing
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Six Request Types, and Who Answers Them
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            For most workforce-record questions your employer is the primary
            route, because they define the purpose and hold the context. We say
            so plainly rather than routing you in a circle.
          </p>

        </div>

        {/* Request Types */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {requestTypes.map((request) => (
            <article
              key={request.title}
              className="flex flex-col rounded-xl border border-stone-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
            >

              <h3 className="text-sm font-bold leading-5 text-sky-950 dark:text-white">
                {request.title}
              </h3>

              <p className="mt-2 flex-1 text-xs font-normal leading-5 text-zinc-700 dark:text-slate-300">
                {request.summary}
              </p>

              <p className="mt-3 border-t border-dashed border-stone-200 pt-3 text-[10px] font-bold uppercase leading-4 tracking-wide text-zinc-500 dark:border-slate-800 dark:text-slate-400">
                Primary route
              </p>

              <p className="mt-1 text-xs font-normal leading-5 text-zinc-700 dark:text-slate-300">
                {request.route}
              </p>

            </article>
          ))}

        </div>

        {/* Handling & Limits */}
        <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2">

          <div className="flex flex-col rounded-2xl border border-stone-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">

            <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
              How requests are handled
            </h3>

            <ul className="mt-4 flex flex-col gap-2.5">
              {handling.map((item) => (
                <li key={item} className="flex gap-2.5">

                  <span
                    className="mt-2.5 h-[5px] w-[5px] shrink-0 rounded-xs bg-emerald-400"
                    aria-hidden="true"
                  />

                  <span className="text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                    {item}
                  </span>

                </li>
              ))}
            </ul>

          </div>

          <div className="flex flex-col rounded-2xl border border-[#F7DBE6] bg-[#FEFAF9] p-6 dark:border-red-900/40 dark:bg-red-950/10">

            <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
              Two things we will not promise
            </h3>

            <ul className="mt-4 flex flex-col gap-2.5">
              {notPromised.map((item) => (
                <li key={item} className="flex gap-2.5">

                  <span
                    className="mt-2.5 h-[5px] w-[5px] shrink-0 rounded-xs bg-emerald-400"
                    aria-hidden="true"
                  />

                  <span className="text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                    {item}
                  </span>

                </li>
              ))}
            </ul>

            <p className="mt-4 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
              When submitting, do not include credentials, health information,
              union or representative details, legal strategy, or unnecessary
              worker data.
            </p>

          </div>

        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col justify-center gap-3.5 sm:flex-row">

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3.5 text-base font-bold text-white transition hover:bg-emerald-600"
          >
            Submit a privacy request
          </Link>

          <Link
            href="/trust-center"
            className="inline-flex items-center justify-center rounded-lg border border-stone-300 bg-white px-6 py-3.5 text-base font-bold text-sky-950 transition hover:border-sky-950 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-slate-500"
          >
            Request Privacy Review via Trust Center
          </Link>

        </div>

      </div>
    </section>
  );
}
