export default function CtaSection() {
  return (
    <section className="bg-gradient-to-r from-[#F0FDFB] to-[#EAF9F6] px-6 py-12 md:px-54  border-t-4 border-[#009D8C]">
      <div className="mx-auto max-w-6xl flex flex-col gap-8">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl md:text-[34px] font-semibold text-slate-900 mb-3">
            See Workforce Intelligence Built With Governance at the Core
          </h2>
          <p className="text-[#5A6E87] text-center">
            ZoikoTime helps organizations verify time,
            understand activity, support payroll and billing confidence,
            govern workforce records, and use AI-assisted insights responsibly
            — with human oversight at every critical decision point.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center shrink-0 w-full">
          <button className="bg-[#009D8C] hover:bg-teal-700 shadow-[0_4px_12px_0_#009D8C4D] text-[15px] text-white font-medium py-3 px-10 cursor-pointer rounded-[8px] transition-colors shadow-sm">
            Request a ZoikoTime Demo
          </button>
          <button className="bg-white border border-slate-200 hover:bg-slate-100 cursor-pointer text-slate-800 font-medium px-15 py-3 rounded-md transition-colors">
            Start Free Trial
          </button>
        </div>
      </div>
    </section>
  );
}
