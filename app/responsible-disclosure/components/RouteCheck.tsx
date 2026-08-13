"use client";

import Link from "next/link";

const routes = [
  {
    title: "Potential product vulnerability",
    description: "You've found something that looks like a security flaw in ZoikoTime.",
    action: "This is the right route →",
    href: "#report",
    featured: true,
    height: "min-h-[144px]",
  },
  {
    title: "Active account compromise",
    description: "Unauthorized access happening now — do not test further.",
    action: "Go to urgent account route →",
    href: "#urgent-account",
    height: "min-h-[144px]",
  },
  {
    title: "Service outage",
    description: "Something is down or degraded — this isn't necessarily a vulnerability.",
    action: "Go to System Status →",
    href: "#system-status",
    height: "min-h-[144px]",
  },
  {
    title: "Spam, fraud, or phishing",
    description: "Misuse of the platform, not a technical flaw.",
    action: "Go to Acceptable Use →",
    href: "#acceptable-use",
    height: "min-h-[128px]",
  },
  {
    title: "Privacy or data-practice question",
    description: "Questions about how data is collected or used.",
    action: "Go to Privacy →",
    href: "#privacy",
    height: "min-h-[128px]",
  },
  {
    title: "AI governance concern",
    description: "A harmful AI output without a security flaw.",
    action: "Go to AI Governance →",
    href: "#ai-governance",
    height: "min-h-[128px]",
  },
  {
    title: "Normal product bug",
    description: "Something isn't working as expected, with no security impact.",
    action: "Go to Support →",
    href: "#support",
    height: "min-h-[144px]",
  },
  {
    title: "Third-party vulnerability",
    description:
      "Affects a provider or integration, not a first-party ZoikoTime component.",
    action: "Go to provider's route →",
    href: "#provider",
    height: "min-h-[144px]",
  },
  {
    title: "Not sure?",
    description:
      "Tell us what you found — we'll route it internally without forcing a resubmission.",
    action: "Report and we'll route it →",
    href: "#report",
    height: "min-h-[144px]",
  },
];

export default function RouteCheck() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-[80px] dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1120px] px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 shrink-0 rounded-sm bg-teal-600" />

            <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-teal-700 dark:text-teal-400">
              Is This the Right Route?
            </span>
          </div>

          <h2 className="mt-3 max-w-[600px] text-2xl font-semibold leading-10 text-slate-800 sm:text-3xl dark:text-white">
            Not every security concern belongs here.
          </h2>
        </div>

        {/* Route Cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {routes.map((route) => (
            <Link
              key={route.title}
              href={route.href}
              className={`
                group
                ${route.height}
                rounded-2xl
                border
                p-5
                transition-all
                duration-200
                ${
                  route.featured
                    ? `
                      border-emerald-100
                      bg-emerald-50
                      hover:border-emerald-200
                      hover:shadow-sm
                      dark:border-emerald-900/60
                      dark:bg-emerald-950/30
                      dark:hover:border-emerald-800
                    `
                    : `
                      border-slate-200
                      bg-white
                      hover:border-slate-300
                      hover:shadow-sm
                      dark:border-slate-800
                      dark:bg-slate-900
                      dark:hover:border-slate-700
                    `
                }
              `}
            >
              <div className="flex h-full flex-col">
                {/* Title */}
                <h3 className="text-sm font-semibold leading-6 text-slate-800 dark:text-slate-100">
                  {route.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-xs leading-5 text-gray-500 dark:text-slate-400">
                  {route.description}
                </p>

                {/* Action */}
                <span
                  className={`
                    mt-auto
                    pt-5
                    text-xs
                    font-semibold
                    leading-5
                    transition-colors
                    ${
                      route.featured
                        ? "text-blue-950 group-hover:text-teal-700 dark:text-teal-300 dark:group-hover:text-teal-200"
                        : "text-blue-950 group-hover:text-teal-700 dark:text-slate-200 dark:group-hover:text-teal-300"
                    }
                  `}
                >
                  {route.action}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}