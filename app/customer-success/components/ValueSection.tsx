export default function ValueSection() {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 sm:py-20">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-400">
            What Customer Success Means Here
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white">
            Value you can see — and question
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-500 dark:text-gray-400">
            Customer Success turns a governed deployment into measurable
            outcomes through a shared success plan, explainable signals, and
            accountable actions. Your organization owns the outcomes;
            ZoikoTime helps you reach and prove them, and human authority
            stays in control throughout.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-xl border border-emerald-100 dark:border-teal-900 bg-emerald-50 dark:bg-teal-900/20 px-6 py-5 sm:px-8">
          <p className="text-center text-sm leading-6 text-slate-800 dark:text-gray-200">
            Adoption is measured{" "}
            <span className="font-bold text-teal-700 dark:text-teal-400">
              in aggregate
            </span>{" "}
            — never by ranking or scoring individual workers. ZoikoTime does
            not guarantee business outcomes, renewal, or ROI; results depend
            on your configuration, data, and decisions.
          </p>
        </div>
      </div>
    </section>
  );
}