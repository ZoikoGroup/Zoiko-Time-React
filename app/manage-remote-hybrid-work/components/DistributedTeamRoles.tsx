"use client";

import {
  FiBriefcase,
  FiUsers,
  FiDollarSign,
  FiShield,
} from "react-icons/fi";

const roles = [
  {
    title: "Operations",
    description: "Reliable coverage across zones, resolved by people.",
    icon: FiBriefcase,
    gradient: "from-green-500 to-green-800",
  },
  {
    title: "HR & People",
    description: "Coordinate distributed teams without surveillance.",
    icon: FiUsers,
    gradient: "from-cyan-700 to-cyan-900",
  },
  {
    title: "Payroll",
    description: "Clean, timezone-correct approved time flows through.",
    icon: FiDollarSign,
    gradient: "from-orange-400 to-yellow-700",
  },
  {
    title: "IT & Privacy",
    description: "Privacy-first config & governed integrations.",
    icon: FiShield,
    gradient: "from-blue-950 to-slate-950",
  },
];

export default function DistributedTeamRoles() {
  return (
    <section className="bg-white py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-teal-600 dark:text-teal-400">
            Built For Distributed Teams
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Coordination that works for every role
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((role) => {
            const Icon = role.icon;

            return (
              <div
                key={role.title}
                className={`relative flex min-h-[220px] flex-col justify-end overflow-hidden rounded-3xl bg-gradient-to-br ${role.gradient} p-6`}
              >
                {/* Icon */}
                <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                  <Icon className="h-6 w-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white">
                  {role.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/90">
                  {role.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}