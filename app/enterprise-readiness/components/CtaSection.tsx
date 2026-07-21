export default function CtaSection() {
  return (
    <section className="border-t-4 border-[#009D8C] bg-gradient-to-r from-[#F0FDFB] to-[#EAF9F6] dark:from-gray-900 dark:to-gray-800 px-6 py-12 md:px-12 lg:px-20 xl:px-32 transition-colors duration-300">
      <div className="mx-auto max-w-6xl flex flex-col items-center gap-8 text-center">
        <div>
          <h2 className="mb-4 text-2xl font-semibold text-slate-900 dark:text-white md:text-[34px]">
            Prepare Your Organization for Trusted
            <br className="hidden md:block" />
            Workforce Intelligence
          </h2>

          <p className="mx-auto max-w-4xl text-[#5A6E87] dark:text-gray-300 leading-7">
            ZoikoTime helps enterprise organizations govern workforce records,
            support security review, configure role-based access, plan
            structured rollout, and generate audit-ready evidence for payroll,
            billing, compliance, and operational confidence.
          </p>
        </div>

        <div className="flex w-full flex-col justify-center gap-4 sm:flex-row sm:gap-6">
          <button className="rounded-lg bg-[#009D8C] px-8 py-3 text-[15px] font-medium text-white shadow-[0_4px_12px_0_#009D8C4D] transition-colors hover:bg-teal-700 sm:px-12 cursor-pointer">
            Contact Sales
          </button>

          <button className="rounded-lg border border-slate-200 bg-white px-8 py-3 font-medium text-slate-800 transition-colors hover:bg-slate-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 sm:px-12 cursor-pointer">
            Start Free Trial
          </button>
        </div>
      </div>
    </section>
  );
}