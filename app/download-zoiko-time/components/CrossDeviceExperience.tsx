import Image from "next/image";
import { FiCheckCircle } from "react-icons/fi";

const crossDeviceBenefits = [
  "Real-time sync across desktop, mobile, and web",
  "One account, consistent record everywhere",
  "No re-entry — pick up exactly where you left off",
];

export default function CrossDeviceExperience() {
  return (
    <section className="w-full bg-white px-4 py-16 transition-colors dark:bg-slate-950 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-14">

          {/* IMAGE */}
          <div className="order-2 w-full lg:order-1 lg:w-[530px] lg:shrink-0">
            <div className="relative aspect-[530/424] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 sm:rounded-3xl">
              <Image
                src="/download-zoiko-time/cross-device.png"
                alt="ZoikoTime cross-device experience"
                fill
                sizes="(max-width: 1024px) 100vw, 530px"
                className="object-cover"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="order-1 w-full flex-1 pt-1 lg:order-2">

            {/* Label */}
            <div className="mb-3.5 flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-sm bg-teal-600 dark:bg-teal-400" />

              <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-teal-700 dark:text-teal-400">
                Cross-Device Experience
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl font-semibold leading-9 text-slate-800 dark:text-white sm:text-3xl sm:leading-[48px]">
              Start on one device, pick up on
              <br className="hidden sm:block" />
              another.
            </h2>

            {/* Description */}
            <p className="mt-3 max-w-[620px] text-sm font-normal leading-6 text-gray-500 dark:text-slate-400 sm:text-base">
              Desktop, mobile, and web stay in sync — a correction request
              started on your phone shows up instantly when you open the
              desktop app.
            </p>

            {/* Benefits */}
            <div className="mt-5 flex flex-col">
              {crossDeviceBenefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-2.5 py-2"
                >
                  {/* Check Circle Icon */}
                  <FiCheckCircle
                    className="h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400"
                    strokeWidth={2}
                  />

                  <span className="text-sm font-normal leading-6 text-gray-700 dark:text-slate-300">
                    {benefit}
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