import Image from "next/image";
import Link from "next/link";

export default function BlackFridayHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#070f1d] px-4 pb-16 pt-8 sm:px-6 sm:pb-20 lg:px-20">
      <div className="mx-auto grid w-full max-w-[1280px] items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,510px)]">
        <div>
          <span className="inline-flex rounded-full bg-emerald-500/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-emerald-400">
            Black Friday 2026
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[52px]">
            Make every work hour count.
          </h1>

          <p className="mt-5 max-w-md text-base leading-7 text-slate-300 sm:text-lg">
            Black Friday annual-plan savings for time and workforce management.
          </p>

          {/* Offer card */}
          <div className="mt-6 max-w-[508px] rounded-2xl border border-white/10 bg-[#1e2939] p-6">
            <div className="flex items-center justify-between gap-3">
              <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-slate-400">
                Black Friday 2026 offer
              </p>
              <span className="rounded-md border border-emerald-500/40 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-400">
                Limited time
              </span>
            </div>

            <p className="mt-4 flex flex-wrap items-baseline gap-x-3">
              <span className="bf-display text-4xl font-bold text-emerald-400">30% off</span>
              <span className="text-sm text-slate-400">first year, annual plans</span>
            </p>

            <div className="mt-4 flex items-center gap-3 rounded-lg border border-white/5 bg-[#111827] px-4 py-3 text-sm">
              <span className="text-slate-400">Sovereign plan, per worker/mo:</span>
              <span className="text-slate-500 line-through">
                <span className="sr-only">was </span>$25
              </span>
              <span className="font-bold text-emerald-400">
                <span className="sr-only">now </span>$17.50
              </span>
            </div>

            <p className="mt-4 text-xs leading-5 text-slate-500">
              New customers only · eligible annual subscriptions · pass-through
              services excluded
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href="#plans"
                className="bf-display inline-flex h-12 items-center justify-center rounded-lg border border-emerald-300/50 bg-emerald-500 px-8 text-base font-medium text-white transition-colors hover:bg-emerald-400"
              >
                Explore annual plans
              </a>
              <Link
                href="/contact-sales"
                className="bf-display inline-flex h-12 items-center justify-center rounded-lg bg-white px-8 text-base font-medium text-slate-900 transition-colors hover:bg-slate-200"
              >
                Talk to sales
              </Link>
            </div>
          </div>
        </div>

        {/* Image with circular sale badge */}
        <div className="relative mx-auto w-full max-w-[510px] pt-10 sm:pl-10">
          <div
            aria-hidden="true"
            className="absolute left-0 top-0 size-72 rounded-full bg-emerald-500/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-8 -right-8 size-64 rounded-full bg-indigo-600/20 blur-3xl"
          />
          <Image
            src="/black-friday/hero-analyst-laptop.webp"
            alt="Analyst reviewing verified time records on a laptop with a colleague"
            width={510}
            height={374}
            priority
            className="relative h-auto w-full rounded-3xl object-cover"
          />

          <div
            aria-hidden="true"
            className="absolute left-0 top-0 flex size-32 items-center justify-center rounded-full border-[6px] border-slate-700/70 bg-emerald-500 shadow-[0_0_40px_rgba(16,185,129,0.45)] sm:-left-6 sm:-top-6 sm:size-40"
          >
            <div className="flex size-[86%] -rotate-12 flex-col items-center justify-center rounded-full bg-[#020618] text-center">
              <span className="bf-display text-[9px] font-extrabold uppercase leading-tight tracking-wide text-white sm:text-[11px]">
                Black Friday
                <br />
                Sale
              </span>
              <span className="bf-display mt-1 text-lg font-extrabold text-emerald-400 sm:text-2xl">
                30% OFF
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
