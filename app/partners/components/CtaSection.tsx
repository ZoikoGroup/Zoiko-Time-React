export default function CtaSection() {
  return (
    <section className="bg-gradient-to-r from-[#0E1F3D] to-[#14264A] dark:from-slate-950 dark:to-slate-900 px-4 sm:px-6 lg:px-10 xl:px-20 py-12 md:py-16 transition-colors duration-300">
      <div className="mx-auto max-w-6xl flex flex-col items-center gap-8 text-center">
        {/* Heading */}
        <div className="max-w-3xl">
          <span className="inline-block text-xs font-bold uppercase tracking-[1.3px] text-[#009D8C] mb-3">
            Let's Build Together
          </span>

          <h2 className="text-3xl md:text-4xl font-semibold uppercase text-white leading-tight mb-4">
            Build the Future of Workforce Intelligence
            <br className="hidden md:block" />
            with ZoikoTime
          </h2>

          <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-2xl mx-auto">
            ZoikoTime is seeking trusted partners that can help organizations
            deploy, integrate, govern, and scale workforce intelligence
            responsibly.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 justify-center">
          <button className="w-full sm:w-auto rounded-lg bg-[#009D8C] px-8 py-3 text-sm font-medium text-white shadow-[0_4px_12px_0_rgba(0,157,140,0.3)] transition-all hover:bg-teal-700">
            Contact Partnerships
          </button>

          <button className="w-full sm:w-auto rounded-lg border border-white/30 bg-white/10 px-8 py-3 text-sm font-medium text-white transition-all hover:bg-white/20 dark:hover:bg-white/10">
            Request a ZoikoTime Demo
          </button>
        </div>
      </div>
    </section>
  );
}