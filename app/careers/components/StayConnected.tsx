const TAGS = [
  "Engineering",
  "Product",
  "Enterprise Success",
  "Compliance & Legal",
];

export default function StayConnected() {
  return (
    <section className="bg-white px-6 py-12 md:px-10 lg:px-20 dark:bg-slate-950">
      <div className="mx-auto max-w-5xl rounded-2xl bg-[#0D1526] p-6 sm:p-8 lg:p-10 dark:bg-slate-900">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          {/* Left Content */}
          <div className="max-w-xl">
            <h3 className="text-2xl font-bold leading-tight text-white md:text-3xl">
              Stay Connected — Even If the Timing Isn&apos;t Right
            </h3>

            <p className="mt-4 text-sm leading-7 text-white/70 md:text-base">
              We hire in small cohorts, deliberately. If there isn&apos;t an
              open role that matches you today, join the talent network — we
              will reach out when the right opportunity opens.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {TAGS.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className="w-full max-w-md">
            <form className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Your work email address"
                className="w-full rounded-lg border border-white/20 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-500 outline-none transition focus:border-[#009D8C] focus:ring-2 focus:ring-[#009D8C]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-400"
              />

              <button
                type="submit"
                className="rounded-lg bg-[#009D8C] px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-700 shadow-[0_4px_20px_rgba(0,157,140,0.35)]"
              >
                Stay Connected
              </button>
            </form>

            <p className="mt-4 text-xs leading-6 text-white/50">
              We do not send marketing emails. Outreach only when a relevant
              role opens.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}