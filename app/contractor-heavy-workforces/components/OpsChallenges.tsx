"use client";

import {
  FiClock,
  FiList,
  FiSquare,
  FiX,
} from "react-icons/fi";

const challenges = [
  {
    title: "Fragmented records",
    description: (
      <>
        Agencies, freelancers, and consultants each track time differently.
      </>
    ),
    icon: "yellow",
  },
  {
    title: "No project attribution",
    description: (
      <>
        Hours rarely map cleanly to the project or cost center they belong to.
      </>
    ),
    icon: "blue",
  },
  {
    title: "Manual approvals",
    description: (
      <>
        Spreadsheet-based sign-off slows down billing and invites errors.
      </>
    ),
    icon: "teal",
  },
  {
    title: "Offboarding gaps",
    description: (
      <>
        Access and records linger after an engagement ends.
      </>
    ),
    icon: "navy",
  },
];

type IconType = "yellow" | "blue" | "teal" | "navy";

function ChallengeIcon({ type }: { type: IconType }) {
  const iconStyles = {
    yellow: {
      wrapper:
        "border-yellow-200 bg-white dark:border-yellow-900 dark:bg-slate-950",
      icon: "text-yellow-700 dark:text-yellow-400",
    },
    blue: {
      wrapper:
        "border-blue-100 bg-white dark:border-blue-900 dark:bg-slate-950",
      icon: "text-blue-600 dark:text-blue-400",
    },
    teal: {
      wrapper:
        "border-teal-100 bg-white dark:border-teal-900 dark:bg-slate-950",
      icon: "text-teal-600 dark:text-teal-400",
    },
    navy: {
      wrapper:
        "border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-950",
      icon: "text-blue-950 dark:text-blue-400",
    },
  };

  const icons = {
    yellow: FiList,
    blue: FiSquare,
    teal: FiClock,
    navy: FiX,
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
        rounded-[8px]
        border
        ${iconStyles[type].wrapper}
      `}
    >
      <Icon
        className={iconStyles[type].icon}
        size={15}
        strokeWidth={1.8}
      />
    </div>
  );
}

export default function OpsChallenges() {
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
        {/* Section Heading */}
        <div className="mb-10">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-sm bg-teal-600" />

            <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-teal-700 dark:text-teal-400">
              Contractor Operations Challenges
            </span>
          </div>

          <h2 className="text-3xl font-semibold leading-10 tracking-[-0.02em] text-slate-800 dark:text-white sm:text-4xl">
            Mixed workforces break simple
            <br className="hidden sm:block" />
            time systems.
          </h2>
        </div>

        {/* Challenge Cards */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {challenges.map((challenge) => (
            <div
              key={challenge.title}
              className="
                flex
                min-h-[157px]
                flex-col
                items-start
                rounded-2xl
                border
                border-slate-200
                bg-gray-50
                px-4
                py-5
                dark:border-slate-700
                dark:bg-slate-900
              "
            >
              {/* Icon */}
              <ChallengeIcon type={challenge.icon as IconType} />

              {/* Title */}
              <div className="mt-3 w-full">
                <h3 className="text-sm font-semibold leading-6 text-slate-800 dark:text-white">
                  {challenge.title}
                </h3>
              </div>

              {/* Description */}
              <p className="mt-0.5 w-full text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}