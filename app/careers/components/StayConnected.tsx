const TAGS = ["Engineering", "Product", "Enterprise Success", "Compliance & Legal"];

export default function StayConnected() {
  return (
    <section className="bg-white px-6 py-10">
      <div className="mx-auto max-w-5xl rounded-2xl bg-[#0D1526] p-8 sm:p-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-md">
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Stay Connected — Even If the Timing Isn&apos;t Right
            </h3>
            <p className="mt-3 text-sm text-[#FFFFFF8C]">
              We hire in small cohorts, deliberately. If there isn&apos;t an
              open role that matches you today, join the talent network — we
              will reach out when the right opportunity opens.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {TAGS.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-[#FFFFFFB2] border border-[#FFFFFF26]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="w-full max-w-sm shrink-0">
            <form className="flex flex-col gap-2 sm:flex-row">
              <input
                type="email"
                placeholder="Your work email address"
                className="w-full rounded-md border border-[#FFFFFF26] bg-white px-4 py-2 text-sm text-white placeholder-slate-500 outline-none focus:border-emerald-500"
              />
              <button
                type="submit"
                className="whitespace-nowrap rounded-md bg-[#009D8C] px-5 py-2 text-sm font-semibold text-white transition hover:bg-emerald-600"
              >
                Stay Connected
              </button>
            </form>
            <p className="mt-3 text-[11px] text-[#FFFFFF59]">
              We do not send marketing emails. Outreach only when a relevant role opens.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
