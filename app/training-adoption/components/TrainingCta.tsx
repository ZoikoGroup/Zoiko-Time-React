import Link from "next/link";

export default function TrainingCta() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-900 py-20 lg:py-24">
      {/* Soft teal glow, top-right */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-teal-500/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[1180px] px-5 text-center sm:px-8 lg:px-6">
        <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-400">
          Turn Rollout Into Adoption
        </p>

        <h2 className="mx-auto mt-5 max-w-[720px] text-3xl font-bold leading-[1.3] text-white sm:text-4xl">
          Give every team the training to succeed with ZoikoTime
        </h2>

        <p className="mx-auto mt-5 max-w-[560px] text-sm font-normal leading-6 text-white/70">
          See Training &amp; Adoption mapped to your roles, goals, and timeline
          — with programs, practice, certification, and adoption analytics built
          in.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
          <Link
            href="/request-enterprise-demo"
            className="inline-flex w-full items-center justify-center rounded-lg bg-teal-600 px-6 py-3 text-sm font-semibold leading-5 text-white transition hover:bg-teal-700 sm:w-auto"
          >
            Request Enterprise Demo
          </Link>

          <Link
            href="/contact-sales"
            className="inline-flex w-full items-center justify-center rounded-lg border border-white/15 bg-slate-800 px-6 py-3 text-sm font-semibold leading-5 text-white transition hover:bg-slate-700 sm:w-auto"
          >
            Talk to Sales
          </Link>
        </div>

        <p className="mt-8 text-xs font-normal leading-5 text-white/60">
          Accessible by standard · Role-based access · Adoption analytics, never
          surveillance.
        </p>

        <p className="mx-auto mt-4 max-w-[560px] text-xs font-normal leading-5 text-white/40">
          No screenshots, keystroke content, URL history, application-name
          monitoring, or clipboard collection under any tier or configuration.
        </p>
      </div>
    </section>
  );
}
