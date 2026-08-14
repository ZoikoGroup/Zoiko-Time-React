export default function CallToAction() {
  return (
    <section className="bg-gray-50 px-4 py-16 dark:bg-gray-900 sm:px-8 sm:py-20 lg:px-16">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-xl dark:border-gray-700 dark:bg-gray-800 sm:p-12">
        <div className="flex flex-col-1 gap-3">
          <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Follow the evidence
          </span>
          <h2 className="text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl">
            Trace a record without being asked to trust a badge
          </h2>
          <p className="mt-3 max-w-xl text-base leading-7 text-gray-600 dark:text-gray-300">
            See how source, derivation, policy version, correction, approval, export,
            acknowledgment, and reconciliation stay separate - with limitations visible
            at every step.
          </p>
          <div className="mt-2">
            <button className="rounded-lg bg-emerald-500 px-6 py-3 text-base font-bold text-white transition hover:bg-emerald-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-800">
              Start Free
            </button>
          </div>
        </div>
        
        <div>
        <img
          className="mt-8 h-[350px] w-[400px] rounded-[20px] border border-gray-200 shadow-xl dark:border-gray-700"
          src="/lineage/image (6).png"
          alt="Product preview"
        />
        </div>
        </div>
      </div>
    </section>
  );
}
