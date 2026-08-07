import Link from "next/link";
import Image from "next/image";

const highlights = [
  "Role-based programs",
  "Guided practice",
  "WCAG 2.2 AA",
  "Adoption analytics",
];

export default function TrainingHero() {
  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-slate-950">
      {/* Background photograph */}
      <Image
        src="/training-adoption/Hero.png"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="object-cover object-right"
      />

      {/* Readability wash — keeps the left column legible over the photo */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-white from-35% via-white/70 to-white/30 dark:from-slate-950 dark:via-slate-950/80 dark:to-slate-950/40"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[1180px] px-5 py-16 sm:px-8 lg:px-6 lg:py-[120px]">
        <div className="max-w-[520px]">
          <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
            Training &amp; Adoption
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-[1.15] text-slate-800 dark:text-white sm:text-5xl">
            Onboard, train, and
            <br />
            drive{" "}
            <span className="text-teal-600 dark:text-teal-400">
              lasting adoption
            </span>
          </h1>

          <p className="mt-5 text-base font-normal leading-7 text-gray-500 dark:text-slate-400">
            Help administrators, managers, and workers succeed with ZoikoTime
            through structured learning programs, guided practice,
            certification, and continuous adoption support — all measurable,
            accessible, and governed.
          </p>

          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
            <Link
              href="/request-enterprise-demo"
              className="inline-flex items-center justify-center rounded-[10px] bg-teal-600 px-7 py-3.5 text-base font-semibold leading-4 text-white shadow-[0px_6px_16px_0px_rgba(16,162,141,0.28)] transition hover:bg-teal-700"
            >
              Request Enterprise Demo
            </Link>

            <Link
              href="/contact-sales"
              className="inline-flex items-center justify-center rounded-[10px] border border-gray-300 bg-white px-7 py-3.5 text-base font-semibold leading-4 text-slate-800 transition hover:border-slate-800 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-slate-500"
            >
              Talk to Sales
            </Link>
          </div>

          <ul className="mt-8 grid max-w-[440px] grid-cols-1 gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 rounded-[30px] border border-emerald-100 bg-white px-4 py-2.5 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] dark:border-slate-700 dark:bg-slate-900"
              >
                <Image
                  src="/training-adoption/tick-mark.svg"
                  alt=""
                  aria-hidden="true"
                  width={18}
                  height={18}
                  className="h-4 w-4 shrink-0"
                />
                <span className="text-xs font-semibold leading-5 text-slate-800 dark:text-slate-200">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
