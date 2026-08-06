import Link from "next/link";
import Image from "next/image";

const reviewQueue = [
  { label: "Record", value: "Unverified Exit" },
  { label: "Assigned", value: "M. Alders — HR" },
  { label: "Worker comment", value: "Added" },
];

export default function HrHero() {
  return (
    <section className="w-full overflow-hidden bg-gradient-to-b from-green-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 pb-24 pt-14 sm:px-8 lg:px-12 lg:pt-16">

        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-12">

          {/* Left Content */}
          <div className="flex flex-col">

            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-sm bg-emerald-600"
                aria-hidden="true"
              />
              <p className="text-xs font-bold uppercase leading-5 tracking-widest text-emerald-700 dark:text-emerald-400">
                For HR &amp; People Teams
              </p>
            </div>

            <h1 className="mt-4 max-w-[560px] text-4xl font-bold leading-[1.15] text-slate-900 dark:text-white sm:text-5xl">
              Time and Attendance Software HR Can Trust
            </h1>

            <p className="mt-4 max-w-[520px] text-lg font-normal leading-7 text-gray-500 dark:text-slate-400">
              Manage attendance, breaks, approvals, payroll inputs, and disputes
              across office, remote, hybrid, and contractor work—without
              screenshots, keystroke capture, or invasive monitoring.
            </p>

            {/* Promise Callout */}
            <div className="mt-4 max-w-[520px] rounded-lg border-l-[3px] border-emerald-600 bg-emerald-50 px-4 pb-3 pt-3.5 dark:bg-slate-900">
              <p className="text-base font-normal leading-6 text-slate-900 dark:text-slate-200">
                ZoikoTime creates deterministic, evidence-backed time records
                that workers can understand and authorized reviewers can verify.
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-col gap-3.5 sm:flex-row">

              <Link
                href="/request-enterprise-demo"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3.5 text-base font-semibold leading-6 text-white transition hover:bg-emerald-600"
              >
                Request Enterprise Demo
              </Link>

              <Link
                href="/start-free"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3.5 text-base font-semibold leading-6 text-slate-900 transition hover:border-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-slate-500"
              >
                Start Free
              </Link>

            </div>

          </div>

          {/* Right Content */}
          <div className="relative">

            <Image
              src="/hr-people-teams/hero.png"
              alt="HR team reviewing attendance records together"
              width={624}
              height={483}
              priority
              className="h-auto w-full rounded-[20px] object-cover shadow-[0px_20px_40px_-24px_rgba(10,22,40,0.25)]"
            />

            {/* Review Queue Card */}
            <div className="mt-6 w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-[0px_20px_40px_-24px_rgba(10,22,40,0.25)] sm:absolute sm:-bottom-10 sm:left-0 sm:mt-0 sm:w-64 lg:-left-7 dark:border-slate-700 dark:bg-slate-900">

              <div className="flex items-center justify-between pb-3">

                <p className="text-xs font-bold uppercase leading-5 tracking-wide text-gray-500 dark:text-slate-400">
                  Review Queue
                </p>

                <span className="rounded-full bg-yellow-50 px-2 py-1 text-xs font-semibold leading-4 text-yellow-700">
                  Pending Review
                </span>

              </div>

              {reviewQueue.map((row) => (
                <div
                  key={row.label}
                  className="flex items-start justify-between gap-3 border-t border-slate-200 py-1.5 dark:border-slate-700"
                >

                  <span className="text-xs font-normal leading-5 text-slate-900 dark:text-slate-300">
                    {row.label}
                  </span>

                  <span className="text-right text-xs font-semibold leading-5 text-slate-900 dark:text-white">
                    {row.value}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
