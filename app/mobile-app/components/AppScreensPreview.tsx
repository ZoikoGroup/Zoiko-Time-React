import React from "react";

export default function AppScreensPreview() {
  const screens = [
    {
      title: "Worker Home",
      description:
        "Current status, assigned shift, Start / End Shift, break actions, Early Finish Request, policy note, timeline preview.",
    },
    {
      title: "Break Timer",
      description:
        "Break type, time remaining, grace period, Return to Working, reminder state, and overrun state.",
    },
    {
      title: "Early Finish Request",
      description:
        "Reason, return intent, expected return time, supporting note, and Submit for Review.",
    },
    {
      title: "Worker Timeline",
      description:
        "Shift start, working periods, breaks, requests, manager decisions, and corrections.",
    },
    {
      title: "Manager Team View",
      description:
        "Active Workers, on break, needs review, team exceptions, and Authorized Stand-Down action.",
    },
    {
      title: "Unverified Exit Review",
      description:
        "Last confirmed status, connection-loss time, Worker explanation, and manager decision options.",
    },
    {
      title: "Permission Prompt",
      description:
        "Why a permission is requested, what it's used for, and what it is not used for.",
    },
    {
      title: "Offline Sync State",
      description:
        "Offline banner, pending actions, sync state, and last-synced timestamp.",
    },
  ];

  return (
    <section className="w-full overflow-hidden bg-slate-950 px-5 py-16 sm:px-8 lg:px-10 lg:py-0">
      <div className="mx-auto max-w-[1180px] text-center lg:min-h-[548px]">
        {/* Label */}
        <p className="text-xs font-semibold uppercase leading-5 tracking-[0.2em] text-teal-400">
          Screens
        </p>

        {/* Heading */}
        <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-100 sm:text-4xl">
          App screens preview
        </h2>

        {/* Description */}
        <p className="mt-4 text-sm font-normal leading-7 text-slate-400 sm:text-base">
          Real ZoikoTime states — not generic phone screens.
        </p>

        {/* Screen Cards */}
        <div className="mx-auto mt-12 grid max-w-[1132px] gap-5 sm:grid-cols-2 lg:mt-[66px] lg:grid-cols-4">
          {screens.map((screen) => (
            <div
              key={screen.title}
              className="min-h-[176px] rounded-2xl border border-slate-700 bg-slate-900 p-6 text-left shadow-[0px_6px_18px_rgba(0,0,0,0.25)] transition-colors duration-200 hover:border-slate-600"
            >
              <h3 className="text-base font-semibold leading-7 text-slate-100">
                {screen.title}
              </h3>

              <p className="mt-3 text-sm font-normal leading-6 text-slate-400">
                {screen.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}