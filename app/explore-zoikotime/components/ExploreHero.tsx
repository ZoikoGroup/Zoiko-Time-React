import Image from "next/image";
import Link from "next/link";

export default function ExploreHero() {
  return (
    <section className="bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1180px] px-6 py-14 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">

          {/* ========================= */}
          {/* Left Content */}
          {/* ========================= */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-sm bg-teal-600" />

              <span className="text-xs font-semibold uppercase leading-5 tracking-[0.18em] text-teal-700 dark:text-teal-400">
                Explore ZoikoTime
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-6 max-w-[520px] text-4xl font-semibold leading-[1.15] text-slate-800 dark:text-white sm:text-5xl">
              Find the right ZoikoTime path for trustworthy workforce records.
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-[500px] text-base leading-7 text-gray-500 dark:text-slate-400">
              Choose what you need to improve, who needs to use it, and how your
              organization works. ZoikoTime shows an explainable path to approved
              product capabilities, trust evidence, and the right next step —
              without worker scoring or invasive monitoring.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#explore-by-goal"
                className="inline-flex h-12 items-center justify-center rounded-full bg-teal-600 px-7 text-sm font-semibold text-white transition hover:bg-teal-700"
              >
                Start Exploring
              </Link>

              <Link
                href="/request-enterprise-demo"
                className="inline-flex h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-7 text-sm font-semibold text-slate-800 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
              >
                Request Enterprise Demo
              </Link>
            </div>

            {/* Note */}
            <p className="mt-8 max-w-[510px] text-xs leading-5 text-gray-500 dark:text-slate-500">
              No account or email required to explore. Recommendations use only
              the choices you provide.
            </p>
          </div>

          {/* ========================= */}
          {/* Right Content */}
          {/* ========================= */}
          <div className="relative lg:pb-16">
            <div className="overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800">
              <Image
                src="/explore-zoikotime/hero.png"
                alt="A team reviewing an explainable ZoikoTime recommendation path on a shared display"
                width={542}
                height={446}
                priority
                className="h-full w-full object-cover"
              />
            </div>

            {/* Guided Explorer Card */}
            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0px_10px_30px_0px_rgba(14,31,61,0.10)] dark:border-slate-800 dark:bg-slate-900 lg:absolute lg:bottom-0 lg:-left-8 lg:mt-0 lg:w-[300px]">
              <p className="text-xs font-semibold uppercase leading-4 tracking-[0.18em] text-teal-700 dark:text-teal-400">
                Guided Explorer
              </p>

              <div className="mt-4 inline-flex rounded-full bg-slate-800 px-3 py-1.5 dark:bg-slate-700">
                <span className="text-xs font-semibold leading-5 text-white">
                  Goal: Protect shift record integrity
                </span>
              </div>

              <p className="mt-4 text-sm font-semibold leading-5 text-slate-800 dark:text-white">
                Primary path: Shift Integrity Controls
              </p>

              <p className="mt-3 text-xs leading-5 text-gray-500 dark:text-slate-400">
                Matches your goal to review scheduled-vs-recorded boundaries and
                exceptions.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 dark:border-emerald-900/40 dark:bg-emerald-900/20">
                  <Image
                    src="/explore-zoikotime/tick-mark.svg"
                    alt=""
                    width={11}
                    height={11}
                    aria-hidden="true"
                  />

                  <span className="text-xs font-semibold leading-4 text-teal-700 dark:text-emerald-300">
                    Explainable
                  </span>
                </span>

                <span className="text-xs font-medium leading-4 text-gray-500 dark:text-slate-400">
                  No confidence score
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
