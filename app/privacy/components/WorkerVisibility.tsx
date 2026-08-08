import Link from "next/link";
import Image from "next/image";

const steps = [
  {
    step: "Step 01",
    title: "See the record",
    body: "Permitted record, source, timestamp, status, and relevant history.",
  },
  {
    step: "Step 02",
    title: "Understand it",
    body: "Policy and rule context, the deterministic classification applied, and any pending-review state.",
  },
  {
    step: "Step 03",
    title: "Ask",
    body: "Request a correction or an explanation, with a reason and supporting context.",
  },
  {
    step: "Step 04",
    title: "Human review",
    body: "Routed to an authorized reviewer with status, due context, and an escalation path.",
  },
  {
    step: "Step 05",
    title: "Outcome preserved",
    body: "Decision, change, source, and history recorded — without hiding the original record.",
  },
];

export default function WorkerVisibility() {
  return (
    <section className="w-full overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left Content */}
          <div className="flex flex-col">

            <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
              Worker Visibility, Explanation &amp; Correction
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
              Privacy, Made Operational for the Person in the Record
            </h2>

            <p className="mt-4 max-w-[560px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
              A right you cannot exercise from inside the product is not a
              right. Workers can see the record, understand why it says what it
              says, and ask a person to look again.
            </p>

            {/* Steps */}
            <div className="mt-6 flex flex-col gap-2.5 sm:pl-10">

              {steps.map((step) => (
                <article
                  key={step.step}
                  className="flex flex-col rounded-xl border border-stone-200 bg-white px-4 pb-4 pt-5 dark:border-slate-800 dark:bg-slate-900"
                >

                  <p className="text-xs font-extrabold leading-5 tracking-wide text-emerald-800 dark:text-emerald-400">
                    {step.step}
                  </p>

                  <h3 className="mt-1 text-sm font-bold leading-5 text-sky-950 dark:text-white">
                    {step.title}
                  </h3>

                  <p className="mt-1.5 text-xs font-normal leading-5 text-zinc-700 dark:text-slate-300">
                    {step.body}
                  </p>

                </article>
              ))}

            </div>

          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-5">

            {/* Product view */}
            <div className="flex flex-col rounded-2xl border border-stone-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">

              <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                When the product view is not enough
              </h3>

              <p className="mt-3 text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
                An account or privacy request route exists for cases the
                in-product view cannot resolve. It does not require marketing
                consent, and it never has.
              </p>

              <Link
                href="#privacy-requests"
                className="group mt-5 inline-flex items-center gap-1.5 self-start text-sm font-bold leading-6 text-[#097F4B] transition hover:text-emerald-800 dark:text-emerald-400"
              >

                <span>Privacy request routes</span>

                <span
                  className="transition group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  →
                </span>

              </Link>

            </div>

            {/* Flagged record */}
            <div className="rounded-xl border border-[#F7DBE6] bg-[#FEF4F4] px-5 pb-5 pt-4 dark:border-red-900/40 dark:bg-red-950/20">

              <p className="text-xs font-bold uppercase leading-5 tracking-wide text-red-700 dark:text-red-400">
                What a flagged record is not
              </p>

              <p className="mt-1.5 text-sm font-normal leading-6 text-red-800 dark:text-red-200/80">
                There is no automatic guilt or misconduct conclusion anywhere in
                this product. A record in review describes a record condition,
                not a person.
              </p>

            </div>

            {/* Honest limitation */}
            <div className="flex gap-3 rounded-xl border border-emerald-100 bg-[#F5FEF7] p-5 dark:border-emerald-900/40 dark:bg-emerald-950/20">

              <Image
                src="/privacy/Honest limitation.svg"
                alt=""
                width={20}
                height={20}
                className="mt-0.5 shrink-0"
              />

              <p className="text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">

                <span className="font-bold text-sky-950 dark:text-white">
                  Honest limitation:
                </span>{" "}
                correction rights and response obligations vary by role and
                jurisdiction. We describe the route clearly — we do not
                guarantee that every requested outcome will be granted.

              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
