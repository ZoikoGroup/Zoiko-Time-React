export default function CtaSection() {
  return (
    <section className="border-t-4 border-[#009D8C] bg-gradient-to-r from-[#F0FDFB] to-[#EAF9F6] dark:from-gray-900 dark:to-gray-800 px-6 py-12 md:px-12 lg:px-20 xl:px-32 transition-colors duration-300">
      <div className="mx-auto max-w-7xl flex flex-col items-center gap-8 text-center">
        {/* Heading */}
        <div className="max-w-4xl">
          <h2 className="mb-4 text-3xl font-semibold text-slate-900 dark:text-white md:text-[34px]">
            See Workforce Intelligence Built With Governance at the Core
          </h2>

          <p className="leading-7 text-[#5A6E87] dark:text-gray-300">
            ZoikoTime helps organizations verify time, understand activity,
            support payroll and billing confidence, govern workforce records,
            and use AI-assisted insights responsibly — with human oversight at
            every critical decision point.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row sm:gap-6">
          <button className="rounded-lg bg-[#009D8C] px-8 py-3 text-[15px] font-medium text-white shadow-[0_4px_12px_rgba(0,157,140,0.3)] transition hover:bg-teal-700">
            Request a ZoikoTime Demo
          </button>

          <button className="rounded-lg border border-slate-300 bg-white px-8 py-3 font-medium text-slate-800 transition hover:bg-slate-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
            Start Free Trial
          </button>
        </div>
      </div>
    </section>
  );
}