import {
  FiClock,
  FiEdit3,
  FiCheckCircle,
  FiRefreshCw,
} from "react-icons/fi";

const alerts = [
  {
    icon: FiClock,
    title: "Timesheet due Friday",
    description: "Review and submit your Aug 1–15 period.",
    badge: "Due · 2d",
  },
  {
    icon: FiEdit3,
    title: "Correction requested",
    description: "A reviewer asked for context on record #4823.",
    badge: "Action",
  },
  {
    icon: FiCheckCircle,
    title: "Approval decision",
    description: "Your Aug 4 correction was approved.",
    badge: "Info",
  },
  {
    icon: FiRefreshCw,
    title: "Sync pending",
    description: "2 actions will sync when you reconnect.",
    badge: "Status",
  },
];

export default function PurposefulAlerts() {
  return (
    <section className="bg-gray-50 py-16 md:py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600">
            Purposeful Alerts
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-800 dark:text-white sm:text-4xl lg:text-5xl">
            Notifications that inform — never pressure
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 dark:text-slate-400">
            Role-aware, permission-aware, and privacy-safe. No streaks,
            public comparison, punitive frequency, false urgency, or
            gamified nudges.
          </p>
        </div>

        {/* Alert Cards */}
        <div className="mx-auto mt-14 flex max-w-4xl flex-col gap-5">
          {alerts.map((alert) => {
            const Icon = alert.icon;

            return (
              <div
                key={alert.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  {/* Left */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-900/30">
                      <Icon className="h-5 w-5 text-teal-600" />
                    </div>

                    <div>
                      <h3 className="text-base font-semibold text-slate-800 dark:text-white">
                        {alert.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
                        {alert.description}
                      </p>
                    </div>
                  </div>

                  {/* Right Badge */}
                  <div className="self-start rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-700 dark:text-slate-300">
                    {alert.badge}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}