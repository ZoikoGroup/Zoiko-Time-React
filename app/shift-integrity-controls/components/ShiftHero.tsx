import Link from "next/link";
import Image from "next/image";

const assurances = [
  "No screenshots or keystrokes",
  "No GPS tracking",
  "Human review, always",
];

const snapshot = [
  { value: "1,204", label: "Records verified" },
  { value: "22", label: "Needs review" },
  { value: "98.4%", label: "Policy health" },
];

export default function ShiftHero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white to-[#F6F9F9] dark:from-slate-950 dark:to-slate-900">
      {/* Soft teal wash behind the visual */}
      <div
        className="pointer-events-none absolute -top-40 left-1/4 h-[400px] w-[760px] rounded-full bg-teal-600/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[1180px] px-5 py-16 sm:px-8 lg:px-6 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14">
          {/* Copy */}
          <div>
            <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
              Shift Integrity Controls
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-[1.1] text-slate-800 dark:text-white sm:text-5xl">
              Accurate shift
              <br />
              records, built on
              <br />
              <span className="text-teal-600 dark:text-teal-400">
                human review
              </span>
            </h1>

            <p className="mt-6 max-w-[480px] text-base font-normal leading-7 text-gray-500 dark:text-slate-400">
              ZoikoTime keeps shift records policy-bound and reviewable — with
              worker transparency, neutral exception states, and traceable
              evidence at every step. Workforce Truth Infrastructure, not
              employee monitoring.
            </p>

            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
              <Link
                href="/start-free"
                className="inline-flex items-center justify-center rounded-[10px] bg-teal-600 px-7 py-3.5 text-base font-semibold leading-4 text-white shadow-[0px_6px_16px_0px_rgba(16,162,141,0.28)] transition hover:bg-teal-700"
              >
                Start Free
              </Link>

              <Link
                href="/request-enterprise-demo"
                className="inline-flex items-center justify-center rounded-[10px] border border-gray-300 bg-white px-7 py-3.5 text-base font-semibold leading-4 text-slate-800 transition hover:border-slate-800 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-slate-500"
              >
                Request Enterprise Demo
              </Link>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              {assurances.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Image
                    src="/shift-integrity-controls/tick-mark.svg"
                    alt=""
                    aria-hidden="true"
                    width={14}
                    height={14}
                    className="h-3.5 w-3.5 shrink-0"
                  />
                  <span className="text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-[0px_30px_60px_0px_rgba(14,31,61,0.22)]">
              <Image
                src="/shift-integrity-controls/hero.png"
                alt="A worker reviewing their shift record"
                width={596}
                height={548}
                priority
                className="h-auto w-full object-cover"
              />

              <div
                className="absolute inset-0 bg-gradient-to-b from-slate-800/0 from-50% to-slate-800/40"
                aria-hidden="true"
              />

              <span className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-[30px] bg-slate-800/90 px-4 py-2.5 text-xs font-semibold leading-5 text-white backdrop-blur-[2px]">
                <Image
                  src="/shift-integrity-controls/Frame.svg"
                  alt=""
                  aria-hidden="true"
                  width={14}
                  height={14}
                  className="h-3.5 w-3.5 shrink-0"
                />
                Policy-bound · reviewable
              </span>
            </div>

            {/* Control-centre snapshot, overlapping the photo */}
            <div className="mt-6 rounded-xl bg-white p-4 shadow-[0px_20px_40px_-20px_rgba(10,22,40,0.35)] dark:bg-slate-800 lg:absolute lg:-left-28 lg:top-[18%] lg:mt-0 lg:w-[370px]">
              <div className="flex items-center gap-2">
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-green-500"
                  aria-hidden="true"
                />
                <p className="text-[11px] font-semibold leading-4 text-slate-800 dark:text-white">
                  Shift Integrity Control Center
                </p>
              </div>

              <dl className="mt-3 grid grid-cols-3 gap-2">
                {snapshot.map(({ value, label }) => (
                  <div
                    key={label}
                    className="rounded-md bg-gray-50 px-2 py-2 text-center dark:bg-slate-900"
                  >
                    <dd className="text-sm font-bold leading-5 text-slate-800 dark:text-white">
                      {value}
                    </dd>
                    <dt className="mt-0.5 text-[8px] font-medium uppercase leading-3 tracking-wide text-gray-500 dark:text-slate-400">
                      {label}
                    </dt>
                  </div>
                ))}
              </dl>

              <div className="mt-3 flex items-center justify-between gap-3 border-t border-slate-200 pt-2.5 dark:border-slate-700">
                <span className="text-[10px] font-normal leading-4 text-gray-500 dark:text-slate-400">
                  Selected record
                </span>
                <span className="text-[10px] font-bold leading-4 text-slate-800 dark:text-white">
                  Late Clock-In — Pending Review
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
