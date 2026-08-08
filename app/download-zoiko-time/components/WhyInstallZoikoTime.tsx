import Image from "next/image";

const benefits = [
  "Offline access to your own recent records",
  "Faster load times than the browser",
  "Timely notifications for reviews and approvals",
  "Biometric sign-in on supported devices",
];

export default function WhyInstallZoikoTime() {
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
                Why Install ZoikoTime
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl font-semibold leading-9 text-slate-800 dark:text-white sm:text-3xl sm:leading-[48px]">
              The app does more than the
              <br className="hidden sm:block" />
              browser tab.
            </h2>

            {/* Description */}
            <p className="mt-3 max-w-[620px] text-sm font-normal leading-6 text-gray-500 dark:text-slate-400 sm:text-base">
              Installing ZoikoTime gets your team faster access, offline
              resilience, and timely notifications — without changing
              anything about how records are governed.
            </p>

            {/* Benefits */}
            <div className="mt-5 flex flex-col">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-2.5 py-2"
                >
                  {/* Check icon */}
                  <div className="flex h-4 w-4 shrink-0 items-center justify-center">
                    <div className="h-3 w-3 rounded-full border-[1.5px] border-teal-600 dark:border-teal-400" />
                  </div>

                  <span className="text-sm font-normal leading-6 text-gray-700 dark:text-slate-300">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full lg:w-[530px] lg:shrink-0">
            <div className="relative aspect-[530/424] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 sm:rounded-3xl">
              <Image
                src="/download-zoiko-time/why-install.png"
                alt="ZoikoTime application"
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