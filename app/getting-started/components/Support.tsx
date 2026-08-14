"use client";

import React from "react";
import Link from "next/link";

const supportOptions = [
  {
    title: "Help Center",
    description: (
      <>
        Searchable answers for every stage of
        <br className="hidden sm:block" />
        setup.
      </>
    ),
    action: "Browse articles →",
    icon: "help",
    href: "/help-center",
  },
  {
    title: "Talk to a Specialist",
    description: (
      <>
        Book time with an onboarding
        <br className="hidden sm:block" />
        specialist, free during setup.
      </>
    ),
    action: "Book a session →",
    icon: "specialist",
    href: "/contact-sales",
  },
  {
    title: "Admin Guide",
    description: (
      <>
        Field-by-field reference for every
        <br className="hidden sm:block" />
        configuration screen.
      </>
    ),
    action: "Open guide →",
    icon: "guide",
    href: "/admin-guide",
  },
  {
    title: "Contact Support",
    description: (
      <>
        Reach the team directly for anything
        <br className="hidden sm:block" />
        the guides don&apos;t cover.
      </>
    ),
    action: "Contact us →",
    icon: "support",
    href: "/contact",
  },
];

function SupportIcon({ type }: { type: string }) {
  if (type === "help") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-4 w-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M9.5 9a2.5 2.5 0 1 1 4.3 1.7c-.9.8-1.8 1.1-1.8 2.3" />
        <path d="M12 16h.01" />
      </svg>
    );
  }

  if (type === "specialist") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-4 w-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M4.5 20c.8-3.5 3.2-5.5 7.5-5.5s6.7 2 7.5 5.5" />
      </svg>
    );
  }

  if (type === "guide") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-4 w-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 3.5h9l3 3V20H6V3.5Z" />
        <path d="M15 3.5V7h3" />
        <path d="M9 11h6" />
        <path d="M9 14.5h6" />
        <path d="M9 18h3.5" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 5h16v12H7l-3 3V5Z" />
      <path d="M8 9h8" />
      <path d="M8 12.5h5" />
    </svg>
  );
}

export default function Support() {
  return (
    <section className="w-full bg-white px-5 py-16 dark:bg-slate-950 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1232px]">
        {/* HEADER */}
        <div className="max-w-[680px]">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-[3px] bg-teal-600" />

            <span className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
              Support
            </span>
          </div>

          <h2 className="mt-2 max-w-[620px] text-3xl font-bold leading-9 text-sky-950 dark:text-white">
            Help is never more than a click away.
          </h2>

          <p className="mt-4 max-w-[680px] text-sm font-normal leading-6 text-slate-600 dark:text-slate-400 sm:text-base">
            Onboarding is guided, not unattended. If something doesn&apos;t
            resolve on its own, here&apos;s where to go.
          </p>
        </div>

        {/* SUPPORT OPTIONS */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {supportOptions.map((option) => (
            <article
              key={option.title}
              className="flex min-h-[192px] flex-col rounded-2xl border border-gray-200 bg-white p-[23px] transition duration-200 hover:-translate-y-0.5 hover:shadow-lg dark:border-white/10 dark:bg-slate-900"
            >
              {/* ICON */}
              <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-slate-50 text-emerald-600 dark:bg-slate-800 dark:text-emerald-400">
                <SupportIcon type={option.icon} />
              </div>

              {/* TITLE */}
              <h3 className="mt-4 text-sm font-bold text-sky-950 dark:text-white">
                {option.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-2 text-xs font-normal leading-5 text-slate-500 dark:text-slate-400">
                {option.description}
              </p>

              {/* ACTION */}
              <Link
                href={option.href}
                className="mt-auto pt-5 text-left text-xs font-bold text-emerald-600 transition hover:text-emerald-500 dark:text-emerald-400"
              >
                {option.action}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}