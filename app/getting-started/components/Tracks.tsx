"use client";

import React from "react";
import Link from "next/link";

type IconProps = {
  className?: string;
};

const icons = {
  owners: ({ className = "h-4 w-4" }: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
      <path d="M7 6.5h.01" />
      <path d="M10 6.5h.01" />
    </svg>
  ),

  hr: ({ className = "h-4 w-4" }: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="9" cy="7" r="3" />
      <path d="M3.5 20c.5-3.5 2.3-5.5 5.5-5.5s5 2 5.5 5.5" />
      <path d="M17 5v6" />
      <path d="M14 8h6" />
    </svg>
  ),

  managers: ({ className = "h-4 w-4" }: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M8 8h8" />
      <path d="M8 12h8" />
      <path d="M8 16h5" />
    </svg>
  ),

  workers: ({ className = "h-4 w-4" }: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="8" />
      <path d="m8.5 12.5 2.3 2.2 4.7-5" />
    </svg>
  ),

  payroll: ({ className = "h-4 w-4" }: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M7 9h10" />
      <path d="M7 13h3" />
      <path d="M15 13h2" />
      <path d="M7 16h5" />
    </svg>
  ),

  security: ({ className = "h-4 w-4" }: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3l7 3v5c0 4.5-2.8 7.8-7 10-4.2-2.2-7-5.5-7-10V6l7-3Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),

  privacy: ({ className = "h-4 w-4" }: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a7 7 0 0 0-7 7v3a7 7 0 0 0 14 0v-3a7 7 0 0 0-7-7Z" />
      <path d="M9 13h6" />
      <path d="M10 16h4" />
    </svg>
  ),

  partners: ({ className = "h-4 w-4" }: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="8" r="3" />
      <circle cx="17" cy="10" r="2.5" />
      <path d="M3.5 19c.5-3.2 2.1-5 4.5-5s4 1.8 4.5 5" />
      <path d="M14 16c.5-1.8 1.6-2.8 3-2.8 1.8 0 3 1.5 3.5 4" />
    </svg>
  ),
};

const tracks = [
  {
    title: "Owners & Admins",
    subtitle: "Org setup & policy configuration",
    icon: icons.owners,
    href: "/administrative-controls",
    steps: [
      "Configure organization profile",
      "Assign roles & permissions",
      "Draft first policy pack",
    ],
  },
  {
    title: "HR & People Ops",
    subtitle: "Rosters & worker communication",
    icon: icons.hr,
    href: "/hr-people-teams",
    steps: [
      "Import worker roster",
      "Send worker transparency notice",
      "Confirm consent capture",
    ],
  },
  {
    title: "Managers",
    subtitle: "Team schedules & approvals",
    icon: icons.managers,
    href: "/team-lead-managers",
    steps: [
      "Review team roster",
      "Configure shift schedules",
      "Run a pilot week",
    ],
  },
  {
    title: "Workers",
    subtitle: "Daily use, clock-in & verification",
    icon: icons.workers,
    href: "/solutions-workers",
    steps: [
      "Download & sign in to app",
      "Verify identity once",
      "Complete a first shift",
    ],
  },
  {
    title: "Payroll Reviewers",
    subtitle: "Evidence review & export",
    icon: icons.payroll,
    href: "/payroll-and-timesheet-integrity",
    steps: [
      "Connect payroll system",
      "Learn the reviewer queue",
      "Run a test export",
    ],
  },
  {
    title: "IT & Security",
    subtitle: "Access, identity & integrations",
    icon: icons.security,
    href: "/security",
    steps: [
      "Configure SSO",
      "Set data retention rules",
      "Review integration scopes",
    ],
  },
  {
    title: "Privacy Teams",
    subtitle: "Data review & worker notice",
    icon: icons.privacy,
    href: "/privacy",
    steps: [
      "Review data collection scope",
      "Approve worker notice language",
      "Sign off before launch",
    ],
  },
  {
    title: "Partners",
    subtitle: "Client onboarding & handoff",
    icon: icons.partners,
    href: "/partners",
    steps: [
      "Set up client workspace",
      "Configure handoff checklist",
      "Transfer ownership to client admin",
    ],
  },
];

export default function Tracks() {
  return (
    <section className="w-full bg-white px-5 py-16 dark:bg-slate-950 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1232px]">
        {/* SECTION HEADER */}
        <div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-[3px] bg-teal-600" />

            <span className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
              Role Tracks
            </span>
          </div>

          <h2 className="mt-2 max-w-[620px] text-3xl font-bold leading-9 text-sky-950 dark:text-white">
            Built for who&apos;s actually doing the work.
          </h2>

          <p className="mt-4 max-w-[650px] text-sm font-normal leading-6 text-slate-600 dark:text-slate-400 sm:text-base">
            Eight tracks cover the people who touch ZoikoTime — from first
            configuration to daily use.
          </p>
        </div>

        {/* TRACK CARDS */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {tracks.map((track) => {
            const Icon = track.icon;

            return (
              <article
                key={track.title}
                className="group flex min-h-[240px] flex-col rounded-2xl border border-gray-200 bg-white p-[21px] transition duration-200 hover:-translate-y-0.5 hover:shadow-lg dark:border-white/10 dark:bg-slate-900"
              >
                {/* ICON */}
                <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                  <Icon />
                </div>

                {/* TITLE */}
                <h3 className="mt-4 text-base font-bold text-sky-950 dark:text-white">
                  {track.title}
                </h3>

                {/* SUBTITLE */}
                <p className="mt-1 text-xs font-normal text-slate-500 dark:text-slate-400">
                  {track.subtitle}
                </p>

                {/* STEPS */}
                <ul className="mt-5 space-y-2.5">
                  {track.steps.map((step) => (
                    <li
                      key={step}
                      className="flex items-start gap-2 text-xs leading-4 text-slate-600 dark:text-slate-300"
                    >
                      <span className="mt-[3px] flex h-3 w-3 shrink-0 items-center justify-center">
                        <svg
                          viewBox="0 0 12 12"
                          fill="none"
                          className="h-3 w-3 text-teal-600 dark:text-emerald-400"
                        >
                          <path
                            d="M3 6.2 5 8l4-4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>

                      <span>{step}</span>
                    </li>
                  ))}
                </ul>

                {/* LINK */}
                <Link
                  href={track.href}
                  className="mt-auto pt-5 text-left text-xs font-bold text-emerald-600 transition hover:text-emerald-500 dark:text-emerald-400"
                >
                  View track →
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}