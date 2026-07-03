export default function CtaSection() {
  return (
    <section className="bg-gradient-to-r from-[#0E1F3D] to-[#14264A] px-6 py-12 md:px-54">
      <div className="mx-auto max-w-6xl flex flex-col gap-8">
        <div className="flex flex-col items-center">
          <span className="inline-block text-xs uppercase font-bold tracking-[1.30px] text-[#009D8C] mb-3">
            Let's Build Together
          </span>
          <h2 className="text-2xl md:text-[30px] max-w-210 text-center uppercase font-semibold text-white mb-3">
            Build the future of workforce intelligence
            with ZoikoTime
          </h2>
          <p className="text-[#FFFFFFC7] max-w-130 text-center">
            ZoikoTime is seeking trusted partners that can help organizations deploy,
            integrate, govern, and scale workforce intelligence responsibly.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center shrink-0 w-full">
          <button className="bg-[#009D8C] hover:bg-teal-700 shadow-[0_4px_12px_0_#009D8C4D] text-[15px] text-white font-medium py-3 px-10 cursor-pointer rounded-[8px] transition-colors shadow-sm">
            Contact Partnerships
          </button>
          <button className="bg-white/12 border border-[#FFFFFF52] hover:bg-slate-700 cursor-pointer text-white font-medium px-15 py-3 rounded-md transition-colors">
            Request a ZoikoTime Demo
          </button>
        </div>
      </div>
    </section>
  );
}
