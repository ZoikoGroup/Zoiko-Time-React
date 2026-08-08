export default function SubscribeBar() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-10 sm:px-8 lg:px-12">

        <form className="flex flex-col gap-6 rounded-3xl border border-emerald-100 bg-emerald-50/70 p-8 lg:flex-row lg:items-center lg:justify-between dark:border-emerald-900/40 dark:bg-emerald-950/20">

          <div className="flex flex-col">

            <h2 className="text-xl font-semibold leading-7 text-slate-800 dark:text-white">
              Get product update alerts
            </h2>

            <p className="mt-2 max-w-[440px] text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
              Choose the product areas, audiences, and frequency you want —
              separate from marketing email, and easy to change or stop.
            </p>

            <p className="mt-3 text-xs font-semibold leading-5 text-teal-700 dark:text-teal-400">
              Operational updates only — not a marketing list
            </p>

          </div>

          <div className="flex flex-col gap-3 sm:flex-row">

            <label htmlFor="update-email" className="sr-only">
              Work email
            </label>

            <input
              id="update-email"
              name="email"
              type="email"
              placeholder="you@company.com"
              className="h-12 w-full rounded-full border border-slate-200 bg-white px-5 text-sm text-slate-800 outline-none transition placeholder:text-gray-500 focus:border-teal-600 sm:w-72 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            />

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-teal-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-700"
            >
              Subscribe
            </button>

          </div>

        </form>

      </div>
    </section>
  );
}
