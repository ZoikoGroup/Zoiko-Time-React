const faqs = [
  "Do I need an account to see any resources?",
  "How long does a controlled request take to review?",
  "Will my request be approved automatically?",
  "What's the difference between controlled and customer-specific access?",
  "How do I know if a document is current?",
  "Does ZoikoTime provide legal advice through this page?",
  "Can existing customers use the same request flow?",
];

export default function ProcurementLegalResourcesFAQ() {
  return (
    <section className="bg-gray-50 py-16 dark:bg-slate-950">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-3 px-6">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600">
            Questions
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 dark:text-white md:text-4xl">
            Procurement &amp; legal resources — answered
          </h2>
        </div>

        {/* FAQ List */}
        <div className="mt-8 flex w-full max-w-[860px] flex-col gap-3">
          {faqs.map((question, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md dark:border-slate-700 dark:bg-slate-900"
            >
              <button className="flex w-full items-center justify-between px-6 py-5 text-left">
                <span className="text-base font-semibold text-slate-900 dark:text-white">
                  {question}
                </span>

                <span className="text-2xl font-light text-teal-600">+</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}