"use client";

import {
  FiCheckCircle,
  FiCreditCard,
  FiList,
} from "react-icons/fi";

const readinessItems = [
  {
    title: "Export-ready records",
    description: (
      <>
        Approved time exports in formats your AP and ERP systems already
        expect.
      </>
    ),
    icon: "teal",
  },
  {
    title: "Reconciliation support",
    description: (
      <>
        Every record links back to its approval and project — no guessing at
        billing time.
      </>
    ),
    icon: "blue",
  },
  {
    title: "Held for review",
    description: (
      <>
        Flagged records are excluded from export until a reviewer resolves
        them.
      </>
    ),
    icon: "yellow",
  },
];

type ReadinessIconType = "teal" | "blue" | "yellow";

function ReadinessIcon({ type }: { type: ReadinessIconType }) {
  const styles = {
    teal: {
      wrapper:
        "border-teal-100 bg-teal-50 dark:border-teal-900 dark:bg-slate-950",
      icon: "text-teal-600 dark:text-teal-400",
    },
    blue: {
      wrapper:
        "border-blue-100 bg-blue-50 dark:border-blue-900 dark:bg-slate-950",
      icon: "text-blue-600 dark:text-blue-400",
    },
    yellow: {
      wrapper:
        "border-yellow-100 bg-yellow-50 dark:border-yellow-900 dark:bg-slate-950",
      icon: "text-yellow-700 dark:text-yellow-400",
    },
  };

  const icons = {
    teal: FiList,
    blue: FiCreditCard,
    yellow: FiCheckCircle,
  };

  const Icon = icons[type];

  return (
    <div
      className={`
        flex
        h-8
        w-8
        items-center
        justify-center
        rounded-[9px]
        border
        ${styles[type].wrapper}
      `}
    >
      <Icon
        size={15}
        strokeWidth={1.8}
        className={styles[type].icon}
      />
    </div>
  );
}

export default function FinanceReady() {
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
              Finance &amp; Billing Readiness
            </span>
          </div>

          <h2 className="text-3xl font-semibold leading-10 tracking-[-0.02em] text-slate-800 dark:text-white sm:text-4xl">
            Clean records, ready to feed your
            <br className="hidden sm:block" />
            systems.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {readinessItems.map((item) => (
            <div
              key={item.title}
              className="
                flex
                min-h-[152px]
                flex-col
                items-start
                rounded-2xl
                border
                border-slate-200
                bg-white
                px-5
                py-5
                dark:border-slate-700
                dark:bg-slate-900
              "
            >
              {/* Icon */}
              <ReadinessIcon type={item.icon as ReadinessIconType} />

              {/* Title */}
              <div className="mt-3 w-full">
                <h3 className="text-sm font-semibold leading-6 text-slate-800 dark:text-white">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="mt-0.5 w-full max-w-[350px] text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}