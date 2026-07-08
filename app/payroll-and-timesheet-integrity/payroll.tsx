"use client";
import { AlertTriangle } from "lucide-react";
const payrollFaqs = [
  "Does ZoikoTime process payroll?",
  "How does this reduce billing leakage?",
  "Can approved records flow into our payroll or billing systems?",
  "What happens to records during a dispute?",
];

  const operatingModelCards = [
  {
    label: "Payroll",
    title: "Payroll team",
    description:
      "Receive complete, approved, explainable records before processing.",
  },
  {
    label: "Finance",
    title: "Finance team",
    description:
      "Improve billing support, recovery, and cost reporting accuracy.",
  },
  {
    label: "HR",
    title: "HR team",
    description:
      "Resolve attendance and correction matters with governed records.",
  },
  {
    label: "Operations",
    title: "Operations team",
    description:
      "Drive approval discipline and exception resolution before deadlines.",
  },
  {
    label: "Legal",
    title: "Legal & compliance",
    description:
      "Preserve defensible records, retention, and legal hold.",
  },
  {
    label: "IT",
    title: "IT & security",
    description:
      "Manage access, integrations, and export controls.",
  },
];

const evidenceItems = [
  {
    title: "Approval history",
    description: "Preserve who approved what, and when.",
  },
  {
    title: "Correction history",
    description: "Track every correction request and its outcome.",
  },
  {
    title: "Export history",
    description: "Record what was exported, by whom, and when.",
  },
  {
    title: "Evidence packages",
    description:
      "Compile structured records for review, audits, or disputes.",
  },
  {
    title: "Retention controls",
    description:
      "Apply retention by plan, configuration, and obligation.",
  },
  {
    title: "Legal hold support",
    description:
      "Preserve records when disputes or investigations require it.",
  },
  {
    title: "Access logs",
    description:
      "Track access to sensitive records where supported.",
  },
  {
    title: "Chain-of-custody support",
    description:
      "Support traceability for records used in sensitive matters.",
  },
];
const revenueCards = [
  {
    title: "Billable time visibility",
    description:
      "See billable vs non-billable time clearly across teams and projects.",
  },
  {
    title: "Approval before billing",
    description:
      "Ensure records are approved before they reach billing.",
  },
  {
    title: "Evidence-supported billing",
    description:
      "Back billed time with defensible, reviewable records.",
  },
  {
    title: "Write-off risk indicators",
    description:
      "Surface time at risk of write-off before it's lost.",
  },
  {
    title: "Project-level reporting",
    description:
      "Review time and recovery by project, client, or matter.",
  },
  {
    title: "Contractor billing review",
    description:
      "Validate contractor time before billing and payment.",
  },
  {
    title: "Finance & operations alignment",
    description:
      "Keep finance and operations working from the same records.",
  },
  {
    title: "Client trust support",
    description:
      "Strengthen client confidence with explainable billing evidence.",
  },
];

const problems = [
  {
    title: "Missing or Incomplete Entries",
    description:
      "Gaps in time records create downstream payroll and billing uncertainty.",
  },
  {
    title: "Delayed Approvals",
    description:
      "Late manager review pushes risk into payroll and billing deadlines.",
  },
  {
    title: "Disputed Hours",
    description:
      "Unclear records turn into employee relations and billing disputes.",
  },
  {
    title: "Weak Correction Trails",
    description:
      "Informal corrections leave no defensible history.",
  },
  {
    title: "Billing Leakage",
    description:
      "Unapproved or miscategorized time reduces billable recovery.",
  },
  {
    title: "Audit & Review Pressure",
    description:
      "Records that can't be explained create exposure during audits.",
  },
];
const workflowSteps = [
  {
    step: "1",
    title: "Capture",
    description:
      "Record time, breaks, activity context, and manual entries where configured.",
  },
  {
    step: "2",
    title: "Validate",
    description:
      "Run completeness checks to surface gaps before review.",
  },
  {
    step: "3",
    title: "Review",
    description:
      "Managers and authorized reviewers check records and exceptions.",
  },
  {
    step: "4",
    title: "Approve",
    description:
      "Records are approved before payroll, billing, or reporting deadlines.",
  },
  {
    step: "5",
    title: "Prepare",
    description:
      "Apply project, client, and cost-center allocation for downstream use.",
  },
  {
    step: "6",
    title: "Export or Integrate",
    description:
      "Move approved records into payroll, HRIS, billing, or accounting systems.",
  },
  {
    step: "7",
    title: "Retain",
    description:
      "Preserve records with retention rules, audit history, and legal hold support.",
  },
];
const controls = [
  {
    title: "Completeness checks",
    description:
      "Surface missing entries, gaps, and unverified records before review.",
  },
  {
    title: "Approval queues",
    description:
      "Give managers a clear queue of records awaiting approval.",
  },
  {
    title: "Cutoff visibility",
    description:
      "Track records at risk of missing payroll or billing cutoffs.",
  },
  {
    title: "Worker correction requests",
    description:
      "Let workers flag issues through a governed correction pathway.",
  },
  {
    title: "Manager comments",
    description:
      "Capture reviewer context directly on the record.",
  },
  {
    title: "Status control",
    description:
      "Track Ready, Needs Review, Exception, and Hold states.",
  },
  {
    title: "Project & client allocation",
    description:
      "Attribute time to departments, clients, jobs, or cost centers.",
  },
  {
    title: "Audit trail",
    description:
      "Preserve the sequence of creation, changes, approvals, and corrections.",
  },
];

export default function Payroll() {
  return (
    <>
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-10 lg:py-10 dark:from-gray-950 dark:to-gray-900">
      {/* Radial Background */}
      <div className="absolute left-1/2 top-[-180px] h-[450px] w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(13,148,136,0.12)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(20,184,166,0.18)_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Badge */}
        <div className="flex justify-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-600">
            Payroll &amp; Timesheet Integrity
          </span>
        </div>

        {/* Heading */}
        <div className="mx-auto mt-6 max-w-5xl text-center">
          <h1 className=" text-4xl font-bold leading-tight text-slate-800 dark:text-white lg:text-6xl">
            Payroll accuracy starts with{" "}
            <span className="text-teal-600">
              trusted
              <br />
              timesheets
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl  text-base leading-8 text-gray-500 dark:text-gray-300">
            ZoikoTime helps organizations capture, review, approve, correct,
            retain, and export workforce time records before they reach
            payroll, billing, finance, or audit workflows.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="rounded-[10px] bg-teal-600 px-8 py-3 text-base font-semibold text-white shadow-[0px_6px_16px_rgba(16,162,141,0.28)] transition-all duration-300 hover:bg-teal-700 hover:shadow-lg">
            Get a Demo
          </button>

          <button className="rounded-[10px] border border-gray-300 bg-white px-8 py-3 text-base font-semibold text-slate-800 transition-all duration-300 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
            Contact Sales
          </button>
        </div>

        {/* Footer Note */}
        <p className="mx-auto mt-12 max-w-4xl text-center font-['Poppins'] text-xs leading-6 text-gray-500 dark:text-gray-400">
          ZoikoTime supports payroll readiness and timesheet governance. It
          does not replace payroll, tax, legal, or employer decision-making.
        </p>
      </div>
    </section>
     <section className="bg-gray-50 py-16 lg:py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-['Poppins'] text-xs font-semibold uppercase tracking-[0.25em] text-teal-600">
            The Problem
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-800 dark:text-white lg:text-5xl">
            Weak timesheet records create payroll
            <br className="hidden md:block" />
            and billing risk
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-gray-500 dark:text-gray-300">
            Payroll and billing problems often start upstream — incomplete
            timesheets, inconsistent approvals, disputed corrections, and
            records that cannot be easily explained.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-4 md:grid-cols-2 md:grid-cols-3">
          {problems.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_6px_18px_rgba(14,31,61,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
            >
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white">
                {item.title}
              </h3>

              <p className="mt-5 text-sm leading-7 text-gray-500 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-16 text-center">
          <p className="text-lg font-bold leading-8 text-gray-600 dark:text-gray-300">
            The payroll system can only be as reliable as the workforce records
            it
            <br className="hidden md:block" />
            receives.
          </p>
        </div>
      </div>
    </section>
     <section className="bg-white py-10 lg:py-11 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <p className=" text-xs font-semibold uppercase tracking-[0.3em] text-teal-600">
            Readiness Workflow
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-800 dark:text-white lg:text-4xl ">
            Move timesheets from capture to payroll
            <br className="hidden md:block" />
            readiness
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-gray-500 dark:text-gray-300">
            ZoikoTime helps teams move workforce records through a structured
            readiness workflow before payroll or billing handoff.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto mt-16 max-w-4xl">
          {/* Vertical Line */}

          <div className="space-y-10">
            {workflowSteps.map((item) => (
              <div key={item.step} className="relative  gap-8">
                {/* Number */}
                <div className=" h-10 w-10  text-sm font-bold text-white shadow-lg">
                  {item.step}
                 
                </div>
 
                {/* Content */}
                <div>
                  <h3 className="mt-2 text-lg font-bold  text-slate-800 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-base leading-7    text-gray-500 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-base leading-8 text-gray-500 dark:text-gray-300">
            Readiness states:{" "}
            <span className="font-bold text-slate-700 dark:text-white">
              Ready
            </span>{" "}
            · Needs Manager Review · Needs Worker Action ·
            <br className="hidden md:block" />
            Exception Open · Payroll Hold.
          </p>
        </div>
      </div>
    </section>
     <section className="bg-gray-50 py-10 lg:py-10 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600">
            Controls
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-800 dark:text-white lg:text-4xl">
            Control completeness, approval,
            
            and cutoff risk
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-gray-500 dark:text-gray-300">
            See which timesheets are ready, which records are incomplete,
         
            and which
               <br/> items require action before payroll deadlines.
          </p>
        </div>

        {/* Controls List */}
        <div className="mx-auto mt-16 max-w-5xl rounded-2xl bg-white p-8 shadow-sm  dark:bg-gray-900 ">
          <div className="space-y-2">
            {controls.map((item, index) => (
              <div
                key={index}
                className=" pb-2 last:border-none last:pb-0 "
              >
                <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
 <section className="bg-white py-16 lg:py-12 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600">
            Corrections
          </p>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-800 dark:text-white lg:text-4xl">
            Resolve corrections before they become
            <br className="hidden md:block" />
            payroll problems
          </h2>

          <p className="mt-6 text-base leading-7 text-gray-500 dark:text-gray-300">
            ZoikoTime gives organizations a structured way to manage
            corrections, review gaps, exceptions, and disputes before they
            create downstream issues.
          </p>
        </div>

        {/* Warning Card */}
        <div className="mx-auto mt-14 max-w-4xl rounded-xl border border-orange-200 bg-yellow-50 p-6 dark:border-yellow-800 dark:bg-yellow-900/20">
          <div className="flex items-start gap-4">
            <AlertTriangle
              size={20}
              className="mt-0.5 shrink-0 text-yellow-800 dark:text-yellow-400"
            />

            <p className="text-sm leading-6 text-yellow-800 dark:text-yellow-200">
              ZoikoTime helps organize workforce records, evidence, and review
              workflows. It does{" "}
              <span className="font-bold text-yellow-900 dark:text-yellow-100">
                not
              </span>{" "}
              automatically determine wages owed, legal liability, tax
              treatment, or disciplinary outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-gray-50 py-16 lg:py-12 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-600">
            Revenue Assurance
          </p>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-slate-800 dark:text-white lg:text-4xl">
            Protect revenue with better time and billing
            <br className="hidden md:block" />
            support
          </h2>

          <p className="mt-6 text-base leading-7 text-gray-500 dark:text-gray-300">
            For professional services, agencies, consulting, and project-based
            organizations, timesheet integrity directly affects revenue.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {revenueCards.map((card, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_6px_18px_rgba(14,31,61,0.05),0_1px_3px_rgba(14,31,61,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
            >
              <h3 className="text-lg font-semibold leading-7 text-slate-800 dark:text-white">
                {card.title}
              </h3>

              <p className="mt-5 text-sm leading-7 text-gray-500 dark:text-gray-300">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
     <section className="bg-white py-16 lg:py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-600">
            Evidence
          </p>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-slate-800 dark:text-white lg:text-4xl">
            Keep payroll and timesheet records
            <br className="hidden md:block" />
            reviewable
          </h2>

          <p className="mt-6 text-base leading-7 text-gray-500 dark:text-gray-300">
            When records affect pay, billing, audits, or disputes,
            organizations need more than summary totals.
          </p>
        </div>

        {/* Evidence List */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="space-y-3">
            {evidenceItems.map((item, index) => (
              <div
                key={index}
                className=" pb-3"
              >
                <h3 className="text-sm font-bold text-slate-700 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  


    <section className="bg-gray-50 py-16 lg:py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-600">
            Operating Model
          </p>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-slate-800 dark:text-white lg:text-4xl">
            Designed to support the systems you already
            <br className="hidden md:block" />
            use
          </h2>

          <p className="mt-6 text-base leading-7 text-gray-500 dark:text-gray-300">
            ZoikoTime fits into your existing payroll, finance, HR, operations,
            legal, and IT workflows without replacing the systems you already
            rely on.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3 xl:grid-cols-3">
          {operatingModelCards.map((card, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_6px_18px_rgba(14,31,61,0.05),0_1px_3px_rgba(14,31,61,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-teal-600">
                {card.label}
              </p>

              <h3 className="mt-4 text-xl font-semibold text-slate-800 dark:text-white">
                {card.title}
              </h3>

              <p className="mt-6 text-sm leading-7 text-gray-500 dark:text-gray-300">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
<section className="bg-white py-16 lg:py-24 dark:bg-gray-950">
  <div className="mx-auto max-w-6xl px-6">
    {/* Heading */}
    <div className="text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-600">
        Questions
      </p>

      <h2 className="mt-6 text-3xl font-bold text-slate-800 dark:text-white lg:text-4xl">
        Payroll & Timesheet Integrity FAQs
      </h2>
    </div>

    {/* FAQ */}
    <div className="mt-14 rounded-2xl ">
      {payrollFaqs.map((faq, index) => (
        <button
          key={index}
          className="flex w-full items-center justify-between  px-6 py-2 text-left "
        >
          <span className="text-base text-slate-700 dark:text-gray-200">
            . {faq}
          </span>
        </button>
      ))}
    </div>
  </div>
</section>
<section className="bg-gradient-to-r from-slate-800 to-blue-950 py-20 dark:from-slate-900 dark:to-slate-950">
  <div className="mx-auto max-w-5xl px-6 text-center">
    {/* Label */}
    <p className="text-base font-semibold uppercase tracking-[0.16em] text-teal-500">
      Strengthen Payroll Inputs
    </p>

    {/* Heading */}
    <h2 className="mt-8 text-4xl font-bold leading-tight text-white lg:text-5xl">
      Strengthen the workforce records behind
      <br className="hidden md:block" />
      payroll and billing
    </h2>

    {/* Description */}
    <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-white/80">
      Talk with the ZoikoTime team about timesheet completeness,
      approval control, corrections, billing support, and
      audit-ready evidence.
    </p>

    {/* Buttons */}
    <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
      <button className="rounded-[10px] bg-teal-600 px-8 py-3 text-base font-semibold text-white shadow-[0_6px_16px_rgba(16,162,141,0.28)] transition hover:bg-teal-700">
        Get a Demo
      </button>

      <button className="rounded-[10px] border border-white/30 bg-white/10 px-8 py-3 text-base font-semibold text-white transition hover:bg-white/20">
        Contact Sales
      </button>
    </div>
  </div>
</section>
    </>
  );
}