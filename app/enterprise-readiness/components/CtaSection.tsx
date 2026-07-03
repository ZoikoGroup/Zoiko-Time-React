export default function CtaSection() {
  return (
    <section className="bg-gradient-to-r from-[#F0FDFB] to-[#EAF9F6] px-6 py-12 md:px-54">
      <div className="mx-auto max-w-6xl flex flex-col gap-8">
        <div>
          <h2 className="text-2xl md:text-[34px] font-semibold text-slate-900 mb-3">
            Prepare Your Organization for Trusted
            Workforce Intelligence
          </h2>
          <p className="text-[#5A6E87] max-w-230 text-center">
            ZoikoTime helps enterprise organizations govern workforce records,
            support security review, configure role-based access, plan structured rollout,
            and generate audit-ready
            evidence for payroll, billing, compliance, and operational confidence.
          </p>
        </div>
        <div className="flex gap-8 justify-center shrink-0 w-full">
          <button className="bg-[#009D8C] hover:bg-teal-700 shadow-[0_4px_12px_0_#009D8C4D] text-[15px] text-white font-medium py-3 px-18 cursor-pointer rounded-[8px] transition-colors shadow-sm">
            Contact Sales
          </button>
          <button className="bg-white border border-slate-200 hover:bg-slate-100 cursor-pointer text-slate-800 font-medium px-18 py-3 rounded-md transition-colors">
            Start Free Trial
          </button>
        </div>
      </div>
    </section>
  );
}
