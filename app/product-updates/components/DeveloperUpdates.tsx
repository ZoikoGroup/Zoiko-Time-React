import Link from "next/link";
import { Eyebrow, AvailabilityPill, ActionPill } from "./Pills";

const updates = [
  {
    availability: "GA",
    action: "Action: Test",
    title: "New webhook: exception.resolved",
    body: "Fires when a reviewer resolves an exception. Existing webhooks are unaffected.",
    links: [
      { label: "API Reference", href: "/product-documentation" },
      { label: "Release Notes", href: "/product-documentation" },
    ],
  },
  {
    availability: "Rolling Out",
    action: "Action: Migrate",
    title: "Evidence export endpoint v2",
    body: "Adds a change-history field; v1 remains supported through the deprecation window.",
    links: [
      { label: "Development Docs", href: "/product-documentation" },
      { label: "Migration Guide", href: "/data-migration" },
    ],
  },
  {
    availability: "Requires Setup",
    action: "Action: Reconnect",
    title: "Scoped API keys for read-only reporting",
    body: "New key scope limits access to reporting endpoints only.",
    links: [
      { label: "Integration Directory", href: "/enterprise-integrations" },
      { label: "Security Advisory", href: "/security-overview" },
    ],
  },
];

export default function DeveloperUpdates() {
  return (
    <section className="w-full overflow-hidden bg-gray-50 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        <Eyebrow label="Developer & Integration Updates" />

        <h2 className="mt-6 max-w-[520px] text-3xl font-semibold leading-tight text-slate-800 dark:text-white sm:text-4xl">
          Technical changes, linked to canonical sources.
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">

          {updates.map((update) => (
            <article
              key={update.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-gray-50 p-6 dark:border-slate-800 dark:bg-slate-900"
            >

              <div className="flex flex-wrap gap-2">
                <AvailabilityPill label={update.availability} />
                <ActionPill label={update.action} />
              </div>

              <h3 className="mt-5 text-sm font-semibold leading-6 text-slate-800 dark:text-white">
                {update.title}
              </h3>

              <p className="mt-3 flex-1 text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
                {update.body}
              </p>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                {update.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-xs font-semibold leading-5 text-blue-950 transition hover:text-teal-700 dark:text-white"
                  >
                    {link.label} →
                  </Link>
                ))}
              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}
