export default function CtaSection() {
  return (
    <section className="bg-[#F1FAFA] px-6 py-12 md:px-54">
      <div className="mx-auto max-w-6xl flex flex-col gap-8">
        <div className="flex flex-col items-center">
          <span className="inline-block text-xs uppercase font-bold tracking-[1.30px] text-[#009D8C] mb-5">
            Build Something Real
          </span>
          <h2 className="text-2xl md:text-[34px] font-semibold text-slate-900 mb-3">
            Build the System That{" "}<span className="text-[#009D8C]"> Defines Modern Work</span>
          </h2>
          <p className="text-[#5A6E87] max-w-250 text-center">
            ZoikoTime is building the governance infrastructure that enterprise organisations rely on to manage work with accuracy, accountability, and
            compliance. If that sounds like a problem worth solving, we would like to hear from you.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center shrink-0 w-full">
          <button className="bg-[#009D8C] hover:bg-teal-700 shadow-[0_4px_12px_0_#009D8C59] text-[15px] text-white font-medium py-3 px-10 cursor-pointer rounded-[8px] transition-colors">
            Explore Open Roles
          </button>
          <button className="bg-white border border-[#E4EBF4] hover:bg-slate-100 cursor-pointer text-[#2A3D55] font-medium px-15 py-3 rounded-md transition-colors">
            Learn About ZoikoTime
          </button>
        </div>
      </div>
    </section>
  );
}
