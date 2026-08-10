"use client";

import {
  FiCheckCircle,
  FiClock,
  FiList,
  FiSquare,
} from "react-icons/fi";

const integrations = [
  {
    title: "Procurement / VMS",
    description: (
      <>
        Sync engagements and vendor
        <br />
        records
      </>
    ),
    icon: FiSquare,
  },
  {
    title: "Accounting / ERP",
    description: <>Export approved records for billing</>,
    icon: FiList,
  },
  {
    title: "Identity Provider",
    description: <>Single sign-on and access control</>,
    icon: FiClock,
  },
  {
    title: "Project Management",
    description: <>Align tasks with project attribution</>,
    icon: FiCheckCircle,
  },
];

function IntegrationIcon({
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
        bg-emerald-50/50
        dark:border-emerald-900
        dark:bg-slate-950
      "
    >
      <Icon
        size={15}
        strokeWidth={1.7}
        className="text-emerald-500 dark:text-emerald-400"
      />
    </div>
  );
}

export default function OpsIntegrations() {
  return (
    <section className="w-full bg-gray-50 dark:bg-slate-950">
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
              Integrations
            </span>
          </div>

          <h2 className="text-3xl font-semibold leading-10 tracking-[-0.02em] text-slate-800 dark:text-white sm:text-4xl">
            Connects to the systems you
            <br className="hidden sm:block" />
            already run.
          </h2>
        </div>

        {/* Integration Cards */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {integrations.map((integration) => {
            const Icon = integration.icon;

            return (
              <div
                key={integration.title}
                className="
                  flex
                  min-h-[122px]
                  flex-col
                  items-center
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  px-5
                  py-5
                  text-center
                  dark:border-slate-700
                  dark:bg-slate-900
                "
              >
                {/* Icon */}
                <IntegrationIcon Icon={Icon} />

                {/* Title */}
                <div className="mt-3 w-full">
                  <h3 className="text-sm font-semibold leading-5 text-slate-800 dark:text-white">
                    {integration.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="mt-1 w-full text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
                  {integration.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}