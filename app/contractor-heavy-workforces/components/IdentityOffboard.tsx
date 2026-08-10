"use client";

import {
  FiCheckCircle,
  FiClock,
  FiLock,
} from "react-icons/fi";

const offboardingItems = [
  {
    title: "Identity verification",
    description: (
      <>
        Contractors are verified once at engagement start, tied to their
        record.
      </>
    ),
    icon: FiCheckCircle,
  },
  {
    title: "Automatic access revocation",
    description: (
      <>
        Offboarding an engagement removes system access on the effective
        date.
      </>
    ),
    icon: FiLock,
  },
  {
    title: "Records retained",
    description: (
      <>
        The evidence trail stays intact for audit long after offboarding.
      </>
    ),
    icon: FiClock,
  },
];

function VerificationIcon({
  Icon,
}: {
  Icon: React.ElementType;
}) {
  return (
    <div
      className="
        flex
        h-8
        w-8
        shrink-0
        items-center
        justify-center
        rounded-[9px]
        border
        border-emerald-100
        bg-white
        dark:border-emerald-900
        dark:bg-slate-950
      "
    >
      <Icon
        size={15}
        strokeWidth={1.8}
        className="text-emerald-500 dark:text-emerald-400"
      />
    </div>
  );
}

export default function IdentityOffboard() {
  return (
    <section className="w-full bg-white dark:bg-slate-950">
      <div
        className="
          mx-auto
          w-full
          max-w-[1180px]
          px-6
          py-16
          sm:px-8
          lg:py-20
        "
      >
        {/* Heading */}
        <div className="mb-10">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-sm bg-teal-600" />

            <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-teal-700 dark:text-teal-400">
              Identity &amp; Offboarding
            </span>
          </div>

          <h2 className="text-3xl font-semibold leading-10 tracking-[-0.02em] text-slate-800 dark:text-white sm:text-4xl">
            Access ends when the
            <br />
            engagement does.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {offboardingItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  flex
                  min-h-[124px]
                  flex-col
                  items-start
                  rounded-2xl
                  border
                  border-slate-200
                  bg-gray-50
                  px-5
                  py-5
                  dark:border-slate-700
                  dark:bg-slate-900
                "
              >
                {/* Icon */}
                <VerificationIcon Icon={Icon} />

                {/* Title */}
                <div className="mt-3 w-full">
                  <h3 className="text-sm font-semibold leading-6 text-slate-800 dark:text-white">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="mt-0.5 w-full text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}