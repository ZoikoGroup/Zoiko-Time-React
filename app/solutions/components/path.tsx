import {
  ArrowRight,
  BriefcaseBusiness,
  ChevronRight,
  CircleDollarSign,
  UsersRound,
} from "lucide-react";

const roles = [
  {
    title: "HR & People Teams",
    description: "Build trusted attendance and time records.",
    icon: UsersRound,
  },
  {
    title: "Finance & Payroll Teams",
    description: "Ensure accurate payroll and financial control.",
    icon: CircleDollarSign,
  },
  {
    title: "Workers",
    description: "Track time, protect rights, and stay informed.",
    icon: BriefcaseBusiness,
  },
];

export default function SolutionsPath() {
  return (
    <section
    id="solutions"
     className="w-full bg-white py-16 dark:bg-slate-950 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">

        {/* HEADER */}
        <div className="flex flex-col items-center gap-3 text-center">

          <span className="text-xs font-bold uppercase leading-4 tracking-wider text-[#44B97A]">
            Discover solutions that fit
          </span>

          <h2 className="text-3xl font-bold leading-[48px] text-slate-950 sm:text-4xl dark:text-white">
            Three ways to find what you need
          </h2>

          <p className="text-base font-normal leading-7 text-zinc-700 sm:text-lg dark:text-zinc-300">
            Choose the path that matches how you think about your goals and your
            workforce.
          </p>

        </div>

        {/* CONTENT */}
        <div className="mt-12 flex flex-col gap-8 lg:flex-row lg:items-stretch">

          {/* ROLE CARD */}
          <div className="w-full rounded-2xl border border-neutral-300 bg-slate-50 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 lg:w-[384px] lg:shrink-0">

            {/* Card Header */}
            <div className="flex items-center gap-4">

              {/* Green Icon Circle */}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#44B97A]">
                <UsersRound
                  className="h-7 w-7 text-white"
                  strokeWidth={2}
                />
              </div>

              <div>
                <h3 className="text-2xl font-semibold leading-8 text-slate-950 dark:text-white">
                  1. By Role
                </h3>

                <p className="text-sm leading-5 text-zinc-700 dark:text-zinc-300">
                  Solutions tailored to your
                  <br />
                  responsibilities.
                </p>
              </div>

            </div>

            {/* Role Items */}
            <div className="mt-8 flex flex-col gap-4">

              {roles.map((role) => {
                const Icon = role.icon;

                return (
                  <div
                    key={role.title}
                    className="group rounded-lg p-4 transition hover:bg-white dark:hover:bg-slate-800"
                  >
                    <div className="flex items-center justify-between gap-3">

                      <h4 className="text-base font-semibold leading-6 text-slate-950 dark:text-white">
                        {role.title}
                      </h4>

                      <ChevronRight
                        className="h-4 w-4 shrink-0 text-zinc-700 transition-transform group-hover:translate-x-1 dark:text-zinc-300"
                        strokeWidth={1.8}
                      />

                    </div>

                    <div className="mt-1 flex items-center gap-2">
                      <Icon className="hidden h-3.5 w-3.5 text-[#44B97A]" />

                      <p className="text-sm font-normal leading-5 text-zinc-700 dark:text-zinc-300">
                        {role.description}
                      </p>
                    </div>
                  </div>
                );
              })}

            </div>

            {/* Bottom Link */}
            <div className="mt-8 border-t border-neutral-300 pt-6 dark:border-neutral-700">

              <button
                type="button"
                className="group inline-flex items-center gap-2 text-base font-semibold leading-6 text-[#44B97A]"
              >
                Explore by role

                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  strokeWidth={2}
                />
              </button>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative min-h-[320px] w-full overflow-hidden rounded-[20px] bg-zinc-300 dark:bg-slate-800 sm:min-h-[450px] lg:min-h-[570px]">

            <img
              src="/solutions/solutions-path.png"
              alt="ZoikoTime solutions"
              className="absolute left-1/2 top-0 h-full w-auto max-w-none -translate-x-1/2 object-cover sm:h-auto sm:min-h-full sm:w-[899px]"
            />

          </div>

        </div>
      </div>
    </section>
  );
}