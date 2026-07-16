import React from "react";

const notifications = [
  {
    role: "Worker",
    title: "Worker notifications",
    description:
      "Shift & break reminders, break overrun, Early Finish confirmation and decision, Unverified Exit context request, Authorized Stand-Down notice, Return to Working.",
  },
  {
    role: "Manager",
    title: "Manager notifications",
    description:
      "Early Finish Request submitted, break overrun, Unverified Exit awaiting review, Worker explanation submitted, Stand-Down confirmation, team exception summary.",
  },
  {
    role: "Admin",
    title: "Admin notifications",
    description:
      "High-risk mobile policy change, mobile export where allowed, unusual exception pattern, tenant access issue, security or session event.",
  },
];

export default function RoleAwareNotifications() {
  return (
    <section className="w-full bg-gray-50 px-5 py-16 transition-colors duration-300 dark:bg-slate-950 sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-[1180px]">
        {/* Header */}
        <div className="mx-auto max-w-[700px] text-center">
          <p className="text-xs font-semibold uppercase leading-5 tracking-[0.2em] text-teal-600 dark:text-teal-400">
            Notifications
          </p>

          <h2 className="mt-1 text-3xl font-bold leading-10 text-slate-800 dark:text-white sm:text-4xl">
            Role-aware notifications
          </h2>

          <p className="mt-5 text-sm font-normal leading-7 text-gray-500 dark:text-slate-400 sm:text-base">
            Notifications are role-aware, tenant-scoped, policy-driven,
            actionable, never excessive, and never disciplinary in language.
          </p>
        </div>

        {/* Notification Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {notifications.map((notification) => (
            <div
              key={notification.role}
              className="
                min-h-[208px]
                rounded-2xl
                border border-slate-200
                bg-white
                p-6
                shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05),0px_1px_3px_0px_rgba(14,31,61,0.06)]
                transition-colors
                duration-300

                dark:border-slate-700
                dark:bg-slate-900
                dark:shadow-[0px_6px_18px_0px_rgba(0,0,0,0.25)]
              "
            >
              <p className="text-xs font-semibold uppercase leading-4 tracking-wide text-teal-600 dark:text-teal-400">
                {notification.role}
              </p>

              <h3 className="mt-2 text-base font-semibold leading-7 text-slate-800 dark:text-white">
                {notification.title}
              </h3>

              <p className="mt-4 text-sm font-normal leading-6 text-gray-500 dark:text-slate-400">
                {notification.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}