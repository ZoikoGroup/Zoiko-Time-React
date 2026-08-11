import Link from "next/link";
import { FiArrowRight, FiCheck } from "react-icons/fi";

export default function RemoteHybridHero() {
  const features = [
    "No surveillance",
    "No location tracking",
    "Privacy-first",
  ];

  const stats = [
    { label: "On schedule", value: "142 / 148" },
    { label: "Approved time", value: "1,240h" },
    { label: "Open exceptions", value: "3 · owned" },
    { label: "Privacy mode", value: "On", highlight: true },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 dark:bg-slate-950 bg-white">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-teal-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-14 px-6 py-20 lg:flex-row lg:justify-between lg:px-8">
        {/* Left Content */}
        <div className="max-w-2xl">
          <span className="inline-block rounded-full bg-emerald-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-emerald-400 dark:text-emerald-300">
            Remote & Hybrid Work
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            Coordinate distributed work
            <br />
            <span className="text-emerald-500 dark:text-emerald-400">
              without watching people
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Govern schedules, approved time, availability, exceptions, and
            privacy-respecting evidence across locations and time zones in one
            workflow built on trust, not surveillance.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/request-a-demo"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-7 py-3 text-base font-semibold text-white transition hover:bg-emerald-600"
            >
              Get a Demo
              <FiArrowRight className="ml-2" />
            </Link>

            <Link
              href="/contact-sales"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3 text-base font-semibold text-slate-900 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
            >
              Talk to Sales
            </Link>
          </div>

          {/* Features */}
          <div className="mt-8 flex flex-wrap gap-6">
            {features.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300"
              >
                <FiCheck className="text-emerald-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Card */}
        <div className="w-full max-w-sm">
          <div className="overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-slate-900">
            {/* Card Header */}
            <div className="bg-gradient-to-br from-slate-800 to-teal-700 p-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-teal-500 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white">
                <span className="h-2 w-2 rounded-sm bg-white" />
                Coverage Now
              </span>

              <h2 className="mt-5 text-5xl font-extrabold text-white">96%</h2>

              <p className="mt-2 text-sm text-white/80">
                across 4 time zones · today
              </p>
            </div>

            {/* Card Body */}
            <div className="p-6">
              <div className="space-y-4">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between border-b border-slate-200 pb-3 dark:border-slate-700"
                  >
                    <span className="text-sm text-slate-600 dark:text-slate-300">
                      {item.label}
                    </span>

                    <span
                      className={`text-sm font-bold ${
                        item.highlight
                          ? "text-teal-600 dark:text-teal-400"
                          : "text-slate-900 dark:text-white"
                      }`}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-xs leading-5 text-slate-500 dark:text-slate-400">
                Presence is declared/scheduled — not live location.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
