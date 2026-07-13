import Image from "next/image";
import React from "react";

const records = [
  {
    icon: "/RecordsGoverned/time.png",
    title: "Time Records",
    description:
      "Clock-in / clock-out records, work sessions, breaks, idle events, manual entries, corrections, approvals, and exceptions.",
  },
  {
    icon: "/RecordsGoverned/activity.png",
    title: "Activity Records",
    description:
      "Application activity, URL activity, active and idle patterns, work-session metadata, and verification signals where enabled.",
  },
  {
    icon: "/RecordsGoverned/attendance.png",
    title: "Attendance Records",
    description:
      "Attendance events, shift records, absence records, schedule exceptions, and manager approvals.",
  },
  {
    icon: "/RecordsGoverned/screenshot.png",
    title: "Screenshot Records",
    description:
      "Screenshots, redacted screenshots, metadata, review activity, access logs, and retention rules where enabled.",
  },
  {
    icon: "/RecordsGoverned/payroll.png",
    title: "Timesheet and Payroll",
    description:
      "Timesheet submissions, approvals, corrections, disputes, payroll export records, and reconciliation support records.",
  },
  {
    icon: "/RecordsGoverned/analytics.png",
    title: "Reporting and Analytics",
    description:
      "Generated reports, parameters, exports, analytics outputs, and related review context where retained.",
  },
  {
    icon: "/RecordsGoverned/admin.png",
    title: "Administrative and Audit",
    description:
      "Policy changes, role changes, access events, admin actions, configuration changes, and legal hold actions.",
  },
  {
    icon: "/RecordsGoverned/worker.png",
    title: "Worker Transparency",
    description:
      "Worker-facing notices, policy acknowledgments, consent records where applicable, correction requests, and dispute history.",
  },
];

export default function RecordsGoverned() {
  return (
    <section className="bg-teal-600 dark:bg-gray-900 py-16 md:py-20 px-5 md:px-8">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Records That May Be Governed
          </h2>

          <p className="mt-6 text-sm md:text-base leading-7 text-white/70">
            Depending on configuration, plan, and agreement,
            ZoikoTime may support retention and preservation
            controls across these record categories.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

                      {records.slice(0, 4).map((record, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center">
                <Image
                  src={record.icon}
                  alt={record.title}
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="mt-5 text-lg font-semibold text-white">
                {record.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm leading-6 text-white/70">
                {record.description}
              </p>
            </div>
          ))}

                    {records.slice(4, 8).map((record, index) => (
            <div
              key={index + 4}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center">
                <Image
                  src={record.icon}
                  alt={record.title}
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="mt-5 text-lg font-semibold text-white">
                {record.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm leading-6 text-white/70">
                {record.description}
              </p>
            </div>
          ))}

                  </div>

      </div>

    </section>
  );
}