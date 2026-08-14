"use client";

import Image from "next/image";
import Link from "next/link";

const events = [
  {
    image: "/webinars-events/upcoming-event-1.png",
    badge: "Workshop",
    date: "Aug 19 · 1:00 PM ET",
    title: "Break & Rest: Audit-Ready Workshop",
    description:
      "Hands-on session for HR and compliance teams building their first policy pack.",
    footer: "Auto-converts to your time zone",
  },
  {
    image: "/webinars-events/upcoming-event-2.png",
    badge: "Virtual",
    date: "Aug 21 · 11:00 AM ET",
    title: "Office Hours: Policy Configuration",
    description:
      "Open Q&A with our implementation team — bring your policy questions.",
    footer: "Live Q&A",
  },
  {
    image: "/webinars-events/upcoming-event-3.png",
    badge: "In-Person",
    date: "Sep 3 · 9:00 AM ET",
    title: "Enterprise Trust Summit — Chicago",
    description:
      "A half-day for compliance and IT leaders on evidence, access, and audit readiness.",
    footer: "In-person + streamed",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-950">
      <div id="upcoming-event" className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-sm bg-teal-600" />

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-600 dark:text-teal-400">
              Upcoming Events
            </span>
          </div>

          <h2 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
            What's next.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.title}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <span className="absolute left-4 top-4 rounded-full bg-slate-900/90 px-4 py-1 text-xs font-semibold text-white backdrop-blur">
                  {event.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-xs font-semibold text-teal-600 dark:text-teal-400">
                  {event.date}
                </p>

                <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">
                  {event.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {event.description}
                </p>

                <div className="mt-8 flex items-center justify-between">
                  {/*}
                  <Link
                    href="#"
                    className="text-sm font-semibold text-slate-900 transition hover:text-teal-600 dark:text-white dark:hover:text-teal-400"
                  >
                    Register →
                  </Link>
                  */}

                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {event.footer}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}