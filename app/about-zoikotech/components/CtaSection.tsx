export default function CtaSection() {
  return (
    <section className="bg-gradient-to-r from-[#F0FDFB] to-[#EAF9F6] px-6 py-12 md:px-54 border-t-4 border-[#00C6A9]">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <h2 className="text-2xl md:text-[34px] max-w-175 font-semibold text-slate-900 mb-3">
            See the Workforce Platform Built by Zoiko Tech
          </h2>
          <p className="text-[#5A6E87] max-w-170">
            ZoikoTime brings Zoiko Tech's governed software philosophy, AI capabilities, and enterprise
            engineering discipline into a workforce intelligence platform built for organizations that need
            trusted records, operational control, and responsible oversight.
          </p>
        </div>
        <div className="flex flex-col gap-3 shrink-0 w-full sm:w-56">
          <button className="bg-[#009D8C] hover:bg-teal-700 text-[15px] text-white font-medium py-3 px-2 cursor-pointer rounded-[8px] transition-colors shadow-sm">
            Request a ZoikoTime Demo
          </button>
          <button className="bg-white border border-slate-200 hover:border-slate-300 cursor-pointer text-slate-800 font-medium px-6 py-3 rounded-md transition-colors">
            Start Free Trial
          </button>
        </div>
      </div>
    </section>
  );
}
