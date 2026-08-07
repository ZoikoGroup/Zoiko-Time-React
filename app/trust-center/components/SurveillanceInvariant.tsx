import Link from "next/link";

export default function SurveillanceInvariant() {
  return (
    <section className="w-full overflow-hidden bg-slate-950">
      <div className="mx-auto w-full max-w-[880px] px-5 py-14 sm:px-8 lg:px-12 lg:py-16">

        <div className="flex flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-400">
            Binding product invariant
          </p>

          <h2 className="mt-3 text-2xl font-bold leading-9 text-white sm:text-3xl">
            No hidden surveillance tier.
          </h2>

          <p className="mt-3 max-w-[816px] text-base font-bold leading-7 text-white sm:text-lg">
            No screenshots, keystroke content, URL history, application-name
            monitoring, or clipboard collection under any tier or configuration.
          </p>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-slate-400">
            Time and attendance evidence is not invasive productivity
            monitoring. ZoikoTime records what work was performed against
            configured policy — it does not observe how a person uses a device.
            There is no plan, setting, contract, or enterprise tier that turns
            this on.
          </p>

          <p className="mt-5 text-xs font-normal leading-5 text-slate-500">
            Commitment owner: Trust &amp; Governance · Status: Current · Last
            reviewed 12 Jul 2026 · Next review 12 Jan 2027
          </p>

          <p className="mt-1.5 max-w-[760px] text-xs font-normal leading-5 text-slate-500">
            This invariant does not replace your privacy, labor, or consultation
            obligations. It describes what the product does not collect —
            nothing more.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:justify-center">

            <Link
              href="/privacy-controls"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3.5 text-base font-bold text-white transition hover:bg-emerald-600"
            >
              Privacy &amp; collection limits
            </Link>

            <Link
              href="#trust-model"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/[0.28] px-6 py-3.5 text-base font-bold text-white transition hover:border-white/60"
            >
              <span>Explore the trust model</span>
              <span aria-hidden="true">→</span>
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}
