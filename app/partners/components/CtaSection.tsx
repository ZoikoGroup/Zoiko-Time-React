import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="bg-gradient-to-r from-[#0E1F3D] to-[#14264A] px-4 py-12 transition-colors duration-300 dark:from-slate-950 dark:to-slate-900 sm:px-6 md:py-16 lg:px-10 xl:px-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center">
        {/* Heading */}
        <div className="max-w-3xl">
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[1.3px] text-[#009D8C]">
            Let's Build Together
          </span>

          <h2 className="mb-4 text-3xl font-semibold uppercase leading-tight text-white md:text-4xl">
            Build the Future of Workforce Intelligence
            <br className="hidden md:block" />
            with ZoikoTime
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/80 md:text-base">
            ZoikoTime is seeking trusted partners that can help organizations
            deploy, integrate, govern, and scale workforce intelligence
            responsibly.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row">
          <Link
            href="/partners#contact-partnerships"
            className="inline-flex w-full items-center justify-center rounded-lg bg-[#009D8C] px-8 py-3 text-sm font-medium text-white shadow-[0_4px_12px_0_rgba(0,157,140,0.3)] transition-all hover:bg-teal-700 sm:w-auto"
          >
            Contact Partnerships
          </Link>

          <Link
            href="/request-a-demo"
            className="inline-flex w-full items-center justify-center rounded-lg border border-white/30 bg-white/10 px-8 py-3 text-sm font-medium text-white transition-all hover:bg-white/20 dark:hover:bg-white/10 sm:w-auto"
          >
            Request a ZoikoTime Demo
          </Link>
        </div>
      </div>
    </section>
  );
}