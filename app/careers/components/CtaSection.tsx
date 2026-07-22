import Link from "next/link";
export default function CtaSection() {
  return (
    <section className="bg-[#F1FAFA] dark:bg-slate-950 px-6 py-16 sm:py-20 md:px-12 lg:px-20 xl:px-32 transition-colors duration-300">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center">
        {/* Badge */}
        <span className="inline-block text-xs font-bold uppercase tracking-[1.3px] text-[#009D8C]">
          Build Something Real
        </span>

        {/* Heading */}
        <h2 className="max-w-4xl text-3xl sm:text-4xl md:text-[34px] font-semibold leading-tight text-slate-900 dark:text-white">
          Build the System That{" "}
          <span className="text-[#009D8C]">Defines Modern Work</span>
        </h2>

        {/* Description */}
        <p className="max-w-4xl text-base sm:text-lg leading-8 text-[#5A6E87] dark:text-slate-300">
          ZoikoTime is building the governance infrastructure that enterprise
          organisations rely on to manage work with accuracy, accountability,
          and compliance. If that sounds like a problem worth solving, we would
          like to hear from you.
        </p>

        {/* Buttons */}
        <div className="mt-2 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
          <Link
          href="/careers#open-roles"
           className="w-full sm:w-auto rounded-lg bg-[#009D8C] px-8 py-3 text-sm font-semibold text-white shadow-[0_4px_12px_rgba(0,157,140,0.35)] transition-all hover:bg-teal-700 cursor-pointer">
            Explore Open Roles
          </Link>

          <Link
          href="about-us"
           className="w-full sm:w-auto rounded-lg border border-[#E4EBF4] dark:border-slate-700 bg-white dark:bg-slate-900 text-[#2A3D55] dark:text-white px-8 py-3 text-sm font-semibold transition-all hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer">
            Learn About ZoikoTime
          </Link>
        </div>
      </div>
    </section>
  );
}