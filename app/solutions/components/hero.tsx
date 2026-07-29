import {
  ArrowRight,
  BadgeCheck,
  CircleCheck,
  EyeOff,
  FileCheck2,
  UserRoundCheck,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full bg-[#F8F9FC] py-16 dark:bg-slate-950 sm:py-20 lg:py-0">
      <div className="mx-auto flex min-h-[725px] w-full max-w-[1280px] items-center px-5 sm:px-8 lg:px-8">

        <div className="flex w-full flex-col gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-10">

          {/* LEFT CONTENT */}
          <div className="flex w-full flex-col gap-8 lg:w-[596px]">

            {/* Badge */}
            <div className="flex w-fit items-center gap-2 rounded-full bg-blue-100 px-3 py-1 dark:bg-blue-950/60">
              <CircleCheck
                className="h-3.5 w-3.5 shrink-0 text-green-500"
                strokeWidth={2.5}
              />

              <span className="text-[10px] font-bold uppercase leading-4 tracking-wide text-green-500 sm:text-xs dark:text-green-400">
                Solutions for every workforce context
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-[1.2] tracking-[-0.02em] text-slate-950 sm:text-5xl lg:text-[48px] lg:leading-[1.28] dark:text-white">
              Find the right solution.
              <br />
              For your role, your
              <br />
              goals, your way of work.
            </h1>

            {/* Description */}
            <p className="max-w-[576px] text-base font-normal leading-7 text-zinc-600 sm:text-lg dark:text-zinc-300">
              ZoikoTime helps organizations and workers create accurate,
              auditable time records with deterministic classification, human
              review, and complete anti-surveillance protections.
            </p>

            {/* Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row">

              {/* View All Solutions */}
              <button
                type="button"
                className="inline-flex h-14 items-center justify-center rounded-lg bg-[#44B97A] px-8 text-base font-semibold leading-6 text-white shadow-md transition hover:bg-[#3EAA70]"
              >
                View All Solutions
                <ArrowRight
                  className="ml-2 h-4 w-4"
                  strokeWidth={2}
                />
              </button>

              {/* Request Demo */}
              <button
                type="button"
                className="inline-flex h-14 items-center justify-center rounded-lg border border-neutral-300 bg-white px-8 text-base font-semibold leading-6 text-slate-950 shadow-sm transition hover:bg-neutral-50 dark:border-neutral-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
              >
                Request Enterprise Demo
              </button>

            </div>

            {/* Features */}
            <div className="border-t border-blue-100 pt-8 dark:border-blue-950">
              <div className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4 sm:gap-4">

                {/* Deterministic classification */}
                <Feature
                  icon={<BadgeCheck />}
                  text={
                    <>
                      Deterministic
                      <br />
                      classification
                    </>
                  }
                />

                {/* No surveillance */}
                <Feature
                  icon={<EyeOff />}
                  text={
                    <>
                      No surveillance,
                      <br />
                      ever
                    </>
                  }
                />

                {/* Human review */}
                <Feature
                  icon={<UserRoundCheck />}
                  text={
                    <>
                      Human review,
                      <br />
                      always
                    </>
                  }
                />

                {/* Evidence */}
                <Feature
                  icon={<FileCheck2 />}
                  text={
                    <>
                      Evidence-led
                      <br />
                      outcomes
                    </>
                  }
                />

              </div>
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full lg:w-[596px]">
            <div className="relative min-h-[320px] w-full overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-lg sm:min-h-[420px] lg:min-h-[568px] dark:border-blue-950 dark:bg-slate-900">

              <img
                src="/solutions/solutions.png"
                alt="ZoikoTime solutions"
                className="absolute left-1/2 top-1/2 h-auto w-[720px] max-w-none -translate-x-1/2 -translate-y-1/2 sm:w-[800px] lg:w-[886px]"
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* -------------------------------- */
/* FEATURE                           */
/* -------------------------------- */

function Feature({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-2">
      <div className="flex h-5 w-5 shrink-0 items-center justify-center text-[#44B97A]">
        <span className="h-5 w-5 [&>svg]:h-5 [&>svg]:w-5">
          {icon}
        </span>
      </div>

      <span className="text-xs font-medium leading-4 text-zinc-700 sm:text-sm dark:text-zinc-300">
        {text}
      </span>
    </div>
  );
}