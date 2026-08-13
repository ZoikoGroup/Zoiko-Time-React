import Link from "next/link";
import Image from "next/image";
import { Eyebrow, AvailabilityPill, ActionPill } from "./Pills";
import { ClockIcon } from "./Icons";

const sourceLinks = [
  { label: "Release Notes (3 entries)", href: "/product-documentation" },
  { label: "Product Documentation", href: "/product-documentation" },
  { label: "Getting Started", href: "/implementation-guide" },
  { label: "Support", href: "/help-center" },
];

export default function FeaturedUpdate() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        <Eyebrow label="Featured Update" />

        <h2 className="mt-6 max-w-[560px] text-3xl font-semibold leading-tight text-slate-800 dark:text-white sm:text-4xl">
          This month&apos;s most meaningful change.
        </h2>

        {/* Card */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] dark:border-slate-800">

          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Image */}
            <Image
              src="/product-updates/Featured-Update.png"
              alt="A review team working through grouped exception queues on screen"
              width={584}
              height={410}
              className="h-full w-full object-cover"
            />

            {/* Detail */}
            <div className="flex flex-col bg-gray-50 p-8 sm:p-10 dark:bg-slate-900">

              <div className="flex flex-wrap items-center gap-3">

                <AvailabilityPill label="Rolling Out" />
                <ActionPill label="Action: Configure" />

                <span className="text-xs font-normal leading-4 text-gray-500 dark:text-slate-400">
                  Verified Aug 5, 2026
                </span>

              </div>

              <h3 className="mt-6 text-2xl font-semibold leading-8 text-slate-800 dark:text-white">
                Exception Queues Now Group by Location Automatically
              </h3>

              <p className="mt-4 text-sm font-normal leading-6 text-gray-500 dark:text-slate-400">
                Reviewers with scope across multiple locations previously worked
                from one flat exception queue. Grouped queues are rolling out to
                organizations on the Enterprise plan.
              </p>

              {/* What to do */}
              <div className="mt-6 flex gap-3 rounded-[10px] border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-950/40">

                <ClockIcon size={14} className="mt-0.5 shrink-0 text-teal-700" />

                <p className="text-xs font-normal leading-5 text-gray-700 dark:text-slate-300">
                  <span className="font-bold">What to do:</span> Admins can
                  enable location grouping under Review Settings — no data
                  migration required.
                </p>

              </div>

              {/* Buttons */}
              <div className="mt-7 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap">

                <Link
                  href="#latest-updates"
                  className="inline-flex items-center justify-center rounded-full bg-teal-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-700"
                >
                  Read the update
                </Link>
{/* 
                <Link
                  href="/product-documentation"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                >
                  Open current guidance
                </Link> */}

              </div>

            </div>

          </div>

          {/* Source Links */}
          <div className="flex flex-wrap gap-x-10 gap-y-3 border-t border-slate-200 bg-white px-8 py-5 sm:px-10 dark:border-slate-800 dark:bg-slate-950">
            {sourceLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs font-semibold leading-5 text-blue-950 transition hover:text-teal-700 dark:text-white"
              >
                {link.label} →
              </Link>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
