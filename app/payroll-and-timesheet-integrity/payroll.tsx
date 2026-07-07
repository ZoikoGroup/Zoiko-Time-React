"use client";
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

    </>
  );
}