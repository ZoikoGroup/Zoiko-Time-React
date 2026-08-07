import Link from "next/link";
import Image from "next/image";

const counts = [
  { value: "142", label: "Verified" },
  { value: "9", label: "Needs Context" },
  { value: "118", label: "Approved" },
];

export default function IamHero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white to-[#F6F9F9] dark:from-slate-950 dark:to-slate-900">

      {/* Teal Glow */}
      <div
        className="pointer-events-none absolute left-1/4 top-[-160px] h-96 w-[760px] max-w-full bg-[radial-gradient(ellipse_at_center,rgba(16,162,141,0.10),rgba(16,162,141,0)_70%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[1280px] px-5 pb-24 pt-16 sm:px-8 lg:px-12">

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14">

          {/* Left Content */}
          <div className="flex flex-col">

            <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-[#10A28D]">
              Identity &amp; Access Management
            </p>

            <h1 className="mt-3.5 max-w-[480px] text-4xl font-bold leading-[1.1] text-[#0E1F3D] dark:text-white sm:text-5xl">
              The right people, the right access —
              <span className="block text-[#10A28D]">
                provable at any moment
              </span>
            </h1>

            <p className="mt-8 max-w-[520px] text-base font-normal leading-7 text-[#6B7785] dark:text-slate-400">
              Govern who can see and do what across ZoikoTime with single
              sign-on, strong authentication, automated lifecycle provisioning,
              least-privilege roles, time-bound access, and a complete,
              reviewable audit trail.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">

              <Link
                href="/request-enterprise-demo"
                className="inline-flex min-h-11 items-center justify-center rounded-[10px] bg-[#10A28D] px-6 py-3.5 text-base font-semibold leading-4 text-white shadow-[0px_6px_16px_0px_rgba(16,162,141,0.28)] transition hover:bg-[#0B8675]"
              >
                Request Enterprise Demo
              </Link>

              <Link
                href="/start-free"
                className="inline-flex min-h-11 items-center justify-center rounded-[10px] border border-[#D2DAE2] bg-white px-6 py-3.5 text-base font-semibold leading-4 text-[#0E1F3D] transition hover:border-[#0E1F3D] dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-slate-500"
              >
                Start Free
              </Link>

            </div>

            <p className="mt-7 max-w-[520px] text-xs font-normal leading-5 text-[#6B7785] dark:text-slate-400">
              Human authority remains controlling · Access decisions are
              attributable
            </p>

          </div>

          {/* Right Visual */}
          <div className="relative overflow-hidden rounded-3xl shadow-[0px_30px_60px_0px_rgba(14,31,61,0.22)]">

            <Image
              src="/identity-access-management/hero.png"
              alt="Colleagues reviewing access records together"
              width={565}
              height={471}
              priority
              className="h-auto w-full object-cover"
            />

            {/* Bottom Scrim */}
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent from-55% to-[#0E1F3D]/30"
              aria-hidden="true"
            />

            {/* Assurance Badge */}
            <div className="absolute right-5 top-5 flex items-center gap-2 rounded-[30px] bg-[#0E1F3D]/90 px-3.5 py-2 backdrop-blur-[2px]">

              <Image
                src="/identity-access-management/lock.svg"
                alt=""
                width={14}
                height={14}
                className="h-3.5 w-3.5"
              />

              <span className="text-xs font-semibold leading-5 text-white">
                Deterministic · reviewable
              </span>

            </div>

            {/* Record Summary Card */}
            <div className="absolute bottom-5 left-6 right-6 rounded-2xl bg-white p-[18px] shadow-[0px_10px_30px_0px_rgba(14,31,61,0.10)] sm:right-auto sm:w-64 dark:bg-slate-900">

              <div className="flex gap-2.5">
                {counts.map((count) => (
                  <div
                    key={count.label}
                    className="flex h-16 flex-1 flex-col items-center justify-center rounded-lg bg-[#F6F9F9] px-1 dark:bg-slate-950"
                  >
                    <span className="text-base font-bold leading-6 text-[#0E1F3D] dark:text-white">
                      {count.value}
                    </span>
                    <span className="text-center text-[8.5px] font-normal uppercase leading-3 text-[#6B7785] dark:text-slate-400">
                      {count.label}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-3.5 text-xs font-normal uppercase leading-4 tracking-wide text-[#6B7785] dark:text-slate-400">
                Selected record
              </p>

              <p className="text-sm font-semibold leading-6 text-[#0E1F3D] dark:text-white">
                Unverified Exit — Pending Review
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
