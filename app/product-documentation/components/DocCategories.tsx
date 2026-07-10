import React from "react";

export default function DocCategories() {
  return (
    <section className="w-full bg-gray-50 py-16 transition-colors dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
            Categories
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
            Documentation categories
          </h2>

          <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
            Find the right guide faster — organized by what you're trying to do.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1 */}
<div className="min-h-[320px] rounded-2xl border border-slate-200 bg-white p-7 shadow-md transition-colors dark:border-slate-700 dark:bg-slate-900 flex flex-col">
  <h3 className="text-[18px] font-bold leading-8 text-slate-900 dark:text-white">
    Getting Started
  </h3>

  <p className="mt-3 text-[15px] leading-8 text-slate-600 dark:text-slate-400">
    Setup basics, rollout planning,
    <br />
    workspace preparation,
    <br />
    onboarding, and launch
    <br />
    readiness.
  </p>

  <div className="mt-6 flex flex-wrap gap-2">
    <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-teal-700 dark:border-slate-700 dark:bg-slate-800">
      Implementation Guide
    </span>

    <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-teal-700 dark:border-slate-700 dark:bg-slate-800">
      Admin Guide
    </span>

    <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-teal-700 dark:border-slate-700 dark:bg-slate-800">
      Help Center
    </span>
  </div>
</div>

{/* Card 2 */}
<div className="min-h-[320px] rounded-2xl border border-slate-200 bg-white p-7 shadow-md transition-colors dark:border-slate-700 dark:bg-slate-900 flex flex-col">
  <h3 className="text-[18px] font-bold leading-8 text-slate-900 dark:text-white">
    Administrator Controls
  </h3>

  <p className="mt-3 text-[15px] leading-8 text-slate-600 dark:text-slate-400">
    Workspace profile, users,
    <br />
    departments, permissions,
    <br />
    policies, roles, schedules,
    <br />
    reports, and settings.
  </p>

  <div className="mt-6 flex flex-wrap gap-2">
    <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-teal-700 dark:border-slate-700 dark:bg-slate-800">
      Admin Guide
    </span>

    <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-teal-700 dark:border-slate-700 dark:bg-slate-800">
      Enterprise Governance
    </span>

    <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-teal-700 dark:border-slate-700 dark:bg-slate-800">
      Reporting
    </span>
  </div>
</div>

{/* Card 3 */}
<div className="min-h-[320px] rounded-2xl border border-slate-200 bg-white p-7 shadow-md transition-colors dark:border-slate-700 dark:bg-slate-900 flex flex-col">
  <h3 className="text-[18px] font-bold leading-8 text-slate-900 dark:text-white">
    Worker Experience
  </h3>

  <p className="mt-3 text-[15px] leading-8 text-slate-600 dark:text-slate-400">
    Clock-in/out, timesheets,
    <br />
    activity visibility,
    <br />
    corrections, mobile app,
    <br />
    screenshots where enabled,
    <br />
    and support.
  </p>

  <div className="mt-6 flex flex-wrap gap-2">
    <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-teal-700 dark:border-slate-700 dark:bg-slate-800">
      Worker Guide
    </span>

    <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-teal-700 dark:border-slate-700 dark:bg-slate-800">
      Mobile App
    </span>

    <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-teal-700 dark:border-slate-700 dark:bg-slate-800">
      Time Verification
    </span>
  </div>
</div>

{/* Card 4 */}
<div className="min-h-[320px] rounded-2xl border border-slate-200 bg-white p-7 shadow-md transition-colors dark:border-slate-700 dark:bg-slate-900 flex flex-col">
  <h3 className="text-[18px] font-bold leading-8 text-slate-900 dark:text-white">
    Reporting &amp; Analytics
  </h3>

  <p className="mt-3 text-[15px] leading-8 text-slate-600 dark:text-slate-400">
    Dashboards, timesheets,
    <br />
    workforce analytics,
    <br />
    exports, approvals,
    <br />
    exceptions, and
    <br />
    audit-ready reports.
  </p>

  <div className="mt-6 flex flex-wrap gap-2">
    <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-teal-700 dark:border-slate-700 dark:bg-slate-800">
      Reporting
    </span>

    <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-teal-700 dark:border-slate-700 dark:bg-slate-800">
      Payroll Integrity
    </span>

    <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-teal-700 dark:border-slate-700 dark:bg-slate-800">
      Audit-Grade Evidence
    </span>
  </div>
</div>
         {/* Card 5 */}
<div className="min-h-[320px] rounded-2xl border border-slate-200 bg-white p-7 shadow-md transition-colors dark:border-slate-700 dark:bg-slate-900 flex flex-col">
  <h3 className="text-[18px] font-bold leading-8 text-slate-900 dark:text-white">
    Evidence &amp; Verification
  </h3>

  <p className="mt-3 text-[15px] leading-8 text-slate-600 dark:text-slate-400">
    Time verification, activity
    <br />
    context, screenshots,
    <br />
    redaction, evidence
    <br />
    packages, audit trails, and
    <br />
    review controls.
  </p>

  <div className="mt-6 flex flex-wrap gap-2">
    <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-teal-700 dark:border-slate-700 dark:bg-slate-800">
      Time Verification
    </span>

    <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-teal-700 dark:border-slate-700 dark:bg-slate-800">
      Screenshots &amp; Redaction
    </span>

    <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-teal-700 dark:border-slate-700 dark:bg-slate-800">
      Audit-Grade Evidence
    </span>
  </div>
</div>

{/* Card 6 */}
<div className="min-h-[320px] rounded-2xl border border-slate-200 bg-white p-7 shadow-md transition-colors dark:border-slate-700 dark:bg-slate-900 flex flex-col">
  <h3 className="text-[18px] font-bold leading-8 text-slate-900 dark:text-white">
    Governance &amp; Compliance
  </h3>

  <p className="mt-3 text-[15px] leading-8 text-slate-600 dark:text-slate-400">
    Data retention, legal hold,
    <br />
    access controls, responsible
    <br />
    AI, enterprise governance,
    <br />
    and review boundaries.
  </p>

  <div className="mt-6 flex flex-wrap gap-2">
    <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-teal-700 dark:border-slate-700 dark:bg-slate-800">
      Data Retention &amp; Legal Hold
    </span>

    <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-teal-700 dark:border-slate-700 dark:bg-slate-800">
      Responsible AI
    </span>

    <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-teal-700 dark:border-slate-700 dark:bg-slate-800">
      Enterprise Governance
    </span>
  </div>
</div>

{/* Card 7 */}
<div className="min-h-[320px] rounded-2xl border border-slate-200 bg-white p-7 shadow-md transition-colors dark:border-slate-700 dark:bg-slate-900 flex flex-col">
  <h3 className="text-[18px] font-bold leading-8 text-slate-900 dark:text-white">
    Security &amp; Availability
  </h3>

  <p className="mt-3 text-[15px] leading-8 text-slate-600 dark:text-slate-400">
    Security controls, encryption,
    <br />
    access management,
    <br />
    infrastructure posture,
    <br />
    status updates, and
    <br />
    readiness.
  </p>

  <div className="mt-6 flex flex-wrap gap-2">
    <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-teal-700 dark:border-slate-700 dark:bg-slate-800">
      Security Addendum
    </span>

    <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-teal-700 dark:border-slate-700 dark:bg-slate-800">
      Incident Status
    </span>

    <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-teal-700 dark:border-slate-700 dark:bg-slate-800">
      Enterprise Readiness
    </span>
  </div>
</div>

{/* Card 8 */}
<div className="min-h-[320px] rounded-2xl border border-slate-200 bg-white p-7 shadow-md transition-colors dark:border-slate-700 dark:bg-slate-900 flex flex-col">
  <h3 className="text-[18px] font-bold leading-8 text-slate-900 dark:text-white">
    Support &amp; Answers
  </h3>

  <p className="mt-3 text-[15px] leading-8 text-slate-600 dark:text-slate-400">
    Common questions,
    <br />
    troubleshooting, support
    <br />
    pathways, implementation
    <br />
    help, and documentation
    <br />
    updates.
  </p>

  <div className="mt-6 flex flex-wrap gap-2">
    <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-teal-700 dark:border-slate-700 dark:bg-slate-800">
      Help Center
    </span>

    <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-teal-700 dark:border-slate-700 dark:bg-slate-800">
      FAQs
    </span>

    <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-teal-700 dark:border-slate-700 dark:bg-slate-800">
      Contact Sales
    </span>
  </div>
</div>
        </div>
      </div>
    </section>
  );
}