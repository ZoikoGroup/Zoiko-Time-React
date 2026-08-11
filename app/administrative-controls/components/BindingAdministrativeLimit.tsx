import Link from "next/link";

export default function BindingAdministrativeLimit() {
  return (
    <section className="w-full overflow-hidden bg-[#060B1F]">
      <div className="mx-auto w-full max-w-[880px] px-5 py-14 sm:px-8 lg:px-12 lg:py-16">

        <div className="flex flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-400">
            Binding administrative limit
          </p>

          <h2 className="mt-4 text-2xl font-bold leading-9 text-white sm:text-3xl">
            No administrative setting creates a hidden surveillance tier.
          </h2>

          <p className="mt-4 max-w-[820px] text-lg font-bold leading-7 text-white">
            No screenshots, keystroke content, URL history, application-name
            monitoring, or clipboard collection under any tier or configuration.
          </p>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-white">
            The prohibition applies to native controls, add-ons, plan tiers, APIs,
            and product-managed integrations alike. There is no administrator role,
            no enterprise contract, and no configuration path that enables it —
            this is enforced in the product, not in policy.
          </p>

          <p className="mt-4 text-xs font-normal leading-5 text-white">
            Honest limitation: ZoikoTime cannot govern independent third-party
            systems outside its contract and technical control. What your
            organization does with data after it leaves the platform is outside
            this invariant&apos;s reach.
          </p>

          {/* Routes */}
          <div className="mt-6 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:justify-center">

            <Link
              href="/privacy"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3.5 text-base font-bold text-white transition hover:bg-emerald-600"
            >
              Privacy
            </Link>

            <Link
              href="/security-overview"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/[0.28] bg-transparent px-6 py-3.5 text-base font-bold text-white transition hover:border-white/60"
            >
              Security <span aria-hidden="true">→</span>
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}
