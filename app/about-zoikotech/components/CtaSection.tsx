export default function CtaSection() {
  return (
    <section className="border-t-4 border-[#00C6A9] bg-gradient-to-r from-[#F0FDFB] to-[#EAF9F6] dark:from-gray-900 dark:to-gray-800 px-6 py-12 md:px-12 lg:px-20 xl:px-32 transition-colors duration-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        {/* Left Content */}
        <div className="max-w-3xl">
          <h2 className="mb-4 text-3xl font-semibold leading-tight text-slate-900 dark:text-white md:text-[34px]">
            See the Workforce Platform Built by Zoiko Tech
          </h2>

          <p className="leading-7 text-[#5A6E87] dark:text-gray-300">
            ZoikoTime brings Zoiko Tech&apos;s governed software philosophy, AI
            capabilities, and enterprise engineering discipline into a
            workforce intelligence platform built for organizations that need
            trusted records, operational control, and responsible oversight.
          </p>
        </div>

        {/* Right Buttons */}
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:min-w-[220px]">
          <button className="rounded-lg bg-[#009D8C] px-6 py-3 text-[15px] font-medium text-white shadow-sm transition hover:bg-teal-700">
            Request a ZoikoTime Demo
          </button>

          <button className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-medium text-slate-800 transition hover:border-slate-400 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-500">
            Start Free Trial
          </button>
        </div>
      </div>
    </section>
  );
}