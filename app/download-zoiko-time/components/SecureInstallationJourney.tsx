import Image from "next/image";

const installationSteps = [
  {
    number: "1",
    title: "Download",
    description: "Get the signed installer for your platform.",
  },
  {
    number: "2",
    title: "Verify",
    description:
      "Your OS confirms the ZoikoTime publisher signature.",
  },
  {
    number: "3",
    title: "Install",
    description:
      "Follow the standard installer for your platform.",
  },
  {
    number: "4",
    title: "Sign in",
    description:
      "Use your organization's SSO or ZoikoTime credentials.",
  },
  {
    number: "5",
    title: "Sync",
    description:
      "Your records and preferences sync automatically.",
  },
];

export default function SecureInstallationJourney() {
  return (
    <section className="w-full bg-gray-50 px-4 py-16 transition-colors dark:bg-slate-950 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-14">

          {/* LEFT CONTENT */}
          <div className="w-full flex-1 pt-1">

            {/* Label */}
            <div className="mb-3.5 flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-sm bg-teal-600 dark:bg-teal-400" />

              <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-teal-700 dark:text-teal-400">
                Secure Installation Journey
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl font-semibold leading-9 text-slate-800 dark:text-white sm:text-3xl sm:leading-[48px]">
              Five steps, start to signed-in.
            </h2>

            {/* Steps */}
            <div className="mt-2 pt-1.5">
              {installationSteps.map((step, index) => (
                <div
                  key={step.number}
                  className={`flex items-start gap-4 py-4 ${
                    index !== 0
                      ? "border-t border-slate-200 dark:border-slate-800"
                      : ""
                  }`}
                >
                  {/* Number */}
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 dark:bg-emerald-950/60">
                    <span className="text-xs font-bold leading-5 text-green-600 dark:text-emerald-400">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-semibold leading-6 text-slate-800 dark:text-slate-100">
                      {step.title}
                    </h3>

                    <p className="mt-[3px] text-xs font-normal leading-5 text-gray-500 dark:text-slate-400 sm:text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full lg:w-[530px] lg:shrink-0">
            <div className="relative aspect-[530/424] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 sm:rounded-3xl">
              <Image
                src="/download-zoiko-time/installation.png"
                alt="ZoikoTime secure installation process"
                fill
                sizes="(max-width: 1024px) 100vw, 530px"
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}