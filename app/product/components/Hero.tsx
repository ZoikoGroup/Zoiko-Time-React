import Image from "next/image";
import Link from "next/link";

const features = [
  "Deterministic classification",
  "No surveillance, ever",
  "Human review, always",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-16 dark:bg-slate-950 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* ================= Left Content ================= */}
          <div>
            {/* Badge */}
<div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 dark:bg-emerald-500/10">
  <span className="h-2 w-2 rounded-full bg-emerald-500"></span>

  <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
    Workforce Truth Infrastructure
  </span>
</div>

{/* Heading */}
<h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
  Build the workforce
  record you can trust.
</h1>

{/* Description */}
<p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
  ZoikoTime creates the most accurate and ethical record of work using
  Deterministic Time Classification. No surveillance. Always human in
  command.
</p>

{/* Buttons */}
<div className="mt-10 flex flex-col gap-4 sm:flex-row">
  <Link
    href="/start-free"
    className="rounded-lg bg-emerald-500 px-8 py-4 text-center shadow-lg transition-all duration-300 hover:bg-emerald-600 hover:shadow-xl"
  >
    <span className="block text-lg font-bold text-white">
      Start Free
    </span>

    <span className="mt-1 block text-xs text-white/80">
      30-day free trial
    </span>
  </Link>

  <Link
  href="/request-enterprise-demo"
  className="rounded-lg border border-slate-300 bg-white px-8 py-4 text-center transition-all duration-300 hover:border-emerald-500 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800"
>
  <span className="block text-lg font-bold text-slate-900 dark:text-white">
    Request Enterprise Demo
  </span>

  <span className="mt-1 block text-xs text-slate-500 dark:text-slate-400">
    Talk to an expert
  </span>
</Link>
</div>

            {/* Features */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

                              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-500/20">
                    <svg
                      className="h-4 w-4 text-emerald-600 dark:text-emerald-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>

                  <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ================= Right Image ================= */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900">
              <Image
                src="/product/image1.png"
                alt="ZoikoTime Dashboard"
                width={796}
                height={534}
                priority
                className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Decorative Glow */}
            <div className="absolute -bottom-8 -right-8 -z-10 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl"></div>
            <div className="absolute -left-8 -top-8 -z-10 h-40 w-40 rounded-full bg-sky-500/10 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}