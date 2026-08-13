"use client";

import Image from "next/image";
import Link from "next/link";

const events = [
  {
    image: "/webinars-events/hero-event-1.png",
    title: "Deterministic Classification, Explained",
    meta: "Aug 12 · 10:00 AM ET · Verified speaker",
  },
  {
    image: "/webinars-events/hero-event-2.png",
    title: "Break & Rest: Audit-Ready Workshop",
    meta: "Aug 19 · 1:00 PM ET · Captions on",
  },
  {
    image: "/webinars-events/hero-event-3.png",
    title: "Office Hours: Policy Configuration",
    meta: "Aug 21 · 11:00 AM ET · Live Q&A",
  },
];

export default function WebinarsEventsHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 dark:bg-slate-950">
      {/* Background */}
      <Image
        src="/webinars-events/hero-bg.png"
        alt="Background"
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-slate-950/75 dark:bg-slate-950/80" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-14 px-6 py-20 lg:flex-row lg:justify-between lg:px-8 xl:px-12">
        {/* Left Content */}
        <div className="max-w-2xl text-center lg:text-left">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">
            Webinars & Events
          </span>

          <h1 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-[54px] lg:leading-[1.12]">
            Learn how governed
            <br className="hidden sm:block" />
            time actually works —
            <br className="hidden sm:block" />
            live, or on your own
            <br className="hidden sm:block" />
            time.
          </h1>

          <p className="mt-8 max-w-xl text-base leading-8 text-slate-200">
            Register for live sessions, browse on-demand recordings, and hear
            directly from the people building ZoikoTime&apos;s evidence, review,
            and compliance workflows.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              href="#upcoming-event"
              className="inline-flex h-12 items-center justify-center rounded-full bg-teal-600 px-8 text-sm font-semibold text-white transition hover:bg-teal-500"
            >
              Browse Upcoming Events
            </Link>

            <Link
              href="#get-event-update"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/40 bg-white/10 px-8 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Get Event Updates
            </Link>
          </div>
        </div>

        {/* Right Card */}
        <div className="w-full max-w-lg">
          <div className="rounded-3xl border border-white/50 bg-white/95 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.28)] backdrop-blur dark:border-slate-700 dark:bg-slate-900/95">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-slate-800 dark:text-white">
                This Week
              </h3>

              <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 dark:bg-emerald-900/40">
                <span className="h-2 w-2 rounded-full bg-teal-600" />

                <span className="text-xs font-semibold text-teal-700 dark:text-teal-300">
                  Live in 2 days
                </span>
              </div>
            </div>

            {/* Event List */}
            <div className="mt-6 divide-y divide-slate-200 dark:divide-slate-700">
              {events.map((event) => (
                <div
                  key={event.title}
                  className="flex items-center gap-4 py-5"
                >
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={44}
                    height={44}
                    className="rounded-lg object-cover"
                  />

                  <div>
                    <h4 className="text-sm font-semibold text-slate-800 dark:text-white">
                      {event.title}
                    </h4>

                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                      {event.meta}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-5 border-t border-slate-200 pt-5 dark:border-slate-700">
              <div className="flex flex-wrap gap-5 text-xs font-semibold text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-teal-600" />
                  Verified speakers
                </div>

                <div className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v6l4 2" />
                  </svg>
                  Auto local time
                </div>

                <div className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="14"
                      rx="2"
                    />
                    <path d="M7 10h10M7 14h6" />
                  </svg>
                  Captions available
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}