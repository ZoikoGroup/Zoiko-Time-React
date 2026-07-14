import React from 'react';

const faqs = [
  "Is this one product or three?",
  "Does ZoikoTime replace our HRIS or legal systems?",
  "Can we control who sees sensitive evidence?",
  "How does this support legal hold?",
];

export default function HR() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-slate-800 dark:text-white antialiased">
    
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 py-10 lg:py-10">
        <div className="absolute top-[-160px] left-1/2 h-96 w-[760px] -translate-x-1/2 bg-radial from-teal-600/10 to-teal-600/0 to-70% pointer-events-none" />
        
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-teal-600 block mb-4">
            HR, Legal & Operations Teams
          </span>
          <h1 className="text-4xl font-bold leading-tight text-slate-800 dark:text-white md:text-5xl lg:leading-[53.10px] mb-6">
            One workforce record layer for <span className="text-teal-600 block sm:inline">HR, Legal, and Operations</span>
          </h1>
          <p className="mx-auto max-w-3xl text-base font-normal leading-7 text-gray-500 dark:text-gray-400 mb-10">
            ZoikoTime helps teams align around governed time records, policy workflows, exception review, workforce analytics, evidence retention, and responsible AI.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="w-full sm:w-36 rounded-[10px] bg-teal-600 py-3 text-base font-semibold text-white shadow-[0px_6px_16px_0px_rgba(16,162,141,0.28)] hover:bg-teal-700 transition">
              Get a Demo
            </button>
            <button className="w-full sm:w-40 rounded-[10px] border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 py-3 text-base font-semibold text-slate-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* THE PROBLEM SECTION */}
      <section className="bg-gray-50 dark:bg-gray-950 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-teal-600 block mb-3">The Problem</span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-800 dark:text-white md:text-4xl">
              Fragmented workforce records create risk across the business
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* HR */}
            <div className="rounded-2xl border border-slate-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-7 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)]">
              <span className="text-xs font-semibold uppercase tracking-wide text-teal-600 block mb-2">HR</span>
              <h3 className="text-base font-semibold text-slate-800 dark:text-white mb-3">HR sees policy risk</h3>
              <p className="text-sm font-normal leading-6 text-gray-500 dark:text-gray-400">
                Attendance concerns, correction disputes, transparency questions, inconsistent manager review, and incomplete documentation.
              </p>
            </div>
            {/* Legal */}
            <div className="rounded-2xl border border-slate-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-7 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)]">
              <span className="text-xs font-semibold uppercase tracking-wide text-teal-600 block mb-2">Legal</span>
              <h3 className="text-base font-semibold text-slate-800 dark:text-white mb-3">Legal sees evidence risk</h3>
              <p className="text-sm font-normal leading-6 text-gray-500 dark:text-gray-400">
                Incomplete, mutable, or poorly retained records create exposure during disputes, audits, investigations, or litigation.
              </p>
            </div>
            {/* Operations */}
            <div className="rounded-2xl border border-slate-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-7 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)]">
              <span className="text-xs font-semibold uppercase tracking-wide text-teal-600 block mb-2">Operations</span>
              <h3 className="text-base font-semibold text-slate-800 dark:text-white mb-3">Operations sees execution risk</h3>
              <p className="text-sm font-normal leading-6 text-gray-500 dark:text-gray-400">
                Unresolved exceptions, late approvals, missed shifts, and weak escalation reduce operational control.
              </p>
            </div>
            {/* Finance */}
            <div className="rounded-2xl border border-slate-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-7 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)]">
              <span className="text-xs font-semibold uppercase tracking-wide text-teal-600 block mb-2">Finance</span>
              <h3 className="text-base font-semibold text-slate-800 dark:text-white mb-3">Finance sees downstream risk</h3>
              <p className="text-sm font-normal leading-6 text-gray-500 dark:text-gray-400">
                Timesheet gaps and unapproved records affect payroll readiness, billing support, and cost reporting.
              </p>
            </div>
            {/* Workers */}
            <div className="rounded-2xl border border-slate-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-7 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)]">
              <span className="text-xs font-semibold uppercase tracking-wide text-teal-600 block mb-2">Workers</span>
              <h3 className="text-base font-semibold text-slate-800 dark:text-white mb-3">Workers see trust risk</h3>
              <p className="text-sm font-normal leading-6 text-gray-500 dark:text-gray-400">
                When workers don't understand what's tracked or how corrections work, trust declines.
              </p>
            </div>
            {/* Executives */}
            <div className="rounded-2xl border border-slate-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-7 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)]">
              <span className="text-xs font-semibold uppercase tracking-wide text-teal-600 block mb-2">Executives</span>
              <h3 className="text-base font-semibold text-slate-800 dark:text-white mb-3">Executives see governance risk</h3>
              <p className="text-sm font-normal leading-6 text-gray-500 dark:text-gray-400">
                Leadership needs confidence that records are accurate, explainable, permissioned, and governed by policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE BY ROLE TAB SECTION */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-teal-600 block mb-3">By Role</span>
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white md:text-4xl mb-4">
            Role-based value for HR, Legal, and Operations
          </h2>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400 mb-10">
            Each stakeholder gets immediate relevance from the same governed workforce record layer.
          </p>

          {/* Role Filter Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
            <button className="rounded-[30px] bg-teal-600 px-6 py-2.5 text-sm font-semibold text-white shadow-[0px_6px_16px_0px_rgba(16,162,141,0.28)]">
              HR Teams
            </button>
            <button className="rounded-[30px] border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-6 py-2.5 text-sm font-semibold text-slate-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700">
              Legal Teams
            </button>
            <button className="rounded-[30px] border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-6 py-2.5 text-sm font-semibold text-slate-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700">
              Operations Teams
            </button>
          </div>

          <p className="text-base font-normal text-gray-500 dark:text-gray-400 mb-6">
            Help HR govern workforce records with greater clarity.
          </p>
          <div className="text-base font-bold text-gray-700 dark:text-gray-300 leading-7 max-w-4xl mx-auto border border-dashed border-slate-200 dark:border-gray-800 rounded-xl p-6 bg-slate-50 dark:bg-gray-950">
            Worker Status transparency | Break policy visibility | Early Finish workflow review | Policy consistency across teams | Evidence for employee relations review | Unverified Exit context and manager review | Worker timeline access, where permitted | Manager decision accountability
          </div>
        </div>
      </section>

      {/* GOVERNANCE LAYER LIST SECTION */}
      <section className="bg-gray-50 dark:bg-gray-950 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-teal-600 block mb-3">Governance Layer</span>
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white md:text-4xl">Govern the records behind workforce decisions</h2>
          </div>

          <div className="space-y-3 p-4">
            {[
              { title: "Single record context", desc: "Bring time, approvals, corrections, exceptions, and evidence into one connected workforce record." },
              { title: "Role-based access", desc: "Give HR, legal, operations, finance, and administrators access based on permissions and business need." },
              { title: "Policy-aware workflows", desc: "Configure rules for approvals, corrections, exceptions, retention, and review routing." },
              { title: "Traceable record history", desc: "Preserve key record changes so actions are visible rather than silently overwritten." },
              { title: "Evidence readiness", desc: "Prepare structured record outputs when teams need to review, explain, or defend decisions." },
              { title: "Export & integration support", desc: "Move approved records into payroll, HRIS, billing, reporting, or legal workflows where configured." }
            ].map((item, index) => (
              <div key={index} className="pb-2 last:pb-0">
                <h3 className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">{item.title}</h3>
                <p className="text-base font-normal text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEW WORKFLOWS GRID */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-teal-600 block mb-3">Review Workflows</span>
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white md:text-4xl mb-4">Make exceptions reviewable before they become escalations</h2>
            <p className="mx-auto max-w-2xl text-base font-normal text-gray-500 dark:text-gray-400">
              HR, legal, and operations teams need to know which records are complete, which require action, and which should be escalated.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Manager approval", desc: "Ensure managers review relevant records before payroll, billing, or reporting deadlines." },
              { title: "HR review", desc: "Route attendance, transparency, correction, or policy items to HR where appropriate." },
              { title: "Legal review", desc: "Route sensitive disputes, investigations, legal hold matters, or evidence requests to authorized legal users." },
              { title: "Operations review", desc: "Route exceptions, productivity patterns, missed records, or allocation issues to operational leaders." },
              { title: "Escalation rules", desc: "Define when unresolved items move from manager review to HR, finance, legal, or executive visibility." },
              { title: "Resolution notes", desc: "Capture the reasoning behind actions so decisions are easier to understand later." }
            ].map((item, idx) => (
              <div key={idx} className="rounded-2xl border border-slate-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-7 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)]">
                <h3 className="text-base font-semibold text-slate-800 dark:text-white mb-3">{item.title}</h3>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400 leading-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVIDENCE LIST SECTION */}
      <section className="bg-gray-50 dark:bg-gray-950 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-teal-600 block mb-3">Evidence</span>
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white md:text-4xl">Preserve the evidence behind workforce decisions</h2>
          </div>

          <div className="space-y-1 p-4">
            {[
              { title: "Audit-ready record history", desc: "Preserve creation, changes, approvals, corrections, comments, and exports where supported." },
              { title: "Legal hold support", desc: "Preserve relevant records when disputes, investigations, audits, or litigation require extended retention." },
              { title: "Evidence packages", desc: "Prepare structured workforce evidence for internal review, audits, disputes, or legal requests." },
              { title: "Access logs", desc: "Track access to sensitive workforce records where supported." },
              { title: "Retention rules", desc: "Apply retention settings based on plan, contract, configuration, and applicable obligations." },
              { title: "Chain-of-custody support", desc: "Support traceability for records used in sensitive investigations or disputes." }
            ].map((item, idx) => (
              <div key={idx} className="last:border-0 pb-3 last:pb-0">
                <h3 className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">{item.title}</h3>
                <p className="text-base font-normal text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISIBILITY GRID */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-teal-600 block mb-3">Visibility</span>
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white md:text-4xl mb-4">Give teams the visibility to act earlier</h2>
            <p className="mx-auto max-w-2xl text-base font-normal text-gray-500 dark:text-gray-400">
              A role-based dashboard where each view draws from the same governed workforce record layer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { badge: "HR View", title: "HR visibility", desc: "Attendance trends, correction volume, recurring exceptions, transparency requests, and policy review items." },
              { badge: "Legal View", title: "Legal visibility", desc: "Evidence requests, legal hold status, access logs, audit trails, export history, and case support." },
              { badge: "Operations View", title: "Operations visibility", desc: "Team activity, shift completion, idle patterns, missed records, approvals, and workload indicators." },
              { badge: "Executive View", title: "Executive visibility", desc: "Workforce readiness, operational risk, exception trends, approval discipline, and governance metrics." },
              { badge: "Finance View", title: "Payroll & finance", desc: "Timesheet completeness, approval status, cutoff risk, billing support, and export readiness." },
              { badge: "Compliance View", title: "Compliance visibility", desc: "Policy exceptions, retention status, access control, evidence completeness, and review history." }
            ].map((item, idx) => (
              <div key={idx} className="rounded-2xl border border-slate-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-7 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)]">
                <span className="text-xs font-semibold uppercase tracking-wide text-teal-600 block mb-2">{item.badge}</span>
                <h3 className="text-base font-semibold text-slate-800 dark:text-white mb-3">{item.title}</h3>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400 leading-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST & AI SECTION */}
      <section className="bg-gray-50 dark:bg-gray-950 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-teal-600 block mb-3">Trust</span>
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white md:text-4xl mb-4">Designed for responsible AI and worker trust</h2>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">AI-assisted signals support review — they do not replace human judgment.</p>
          </div>

          <div className="space-y-4 p-4 mb-12">
            {[
              { title: "Human review", desc: "AI-assisted signals support review. They do not automatically replace HR, legal, or manager judgment." },
              { title: "Explainable signals", desc: "Where AI highlights an anomaly, the system provides context so authorized users understand why review may be needed." },
              { title: "Permission boundaries", desc: "Users only see records, analytics, and evidence they are authorized to access." },
              { title: "Worker transparency", desc: "Workers understand relevant tracking, correction, and review processes per customer policy and applicable law." }
            ].map((item, idx) => (
              <div key={idx} className="last:border-0 pb-3 last:pb-0">
                <h3 className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">{item.title}</h3>
                <p className="text-base font-normal text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href="#" className="text-teal-700 dark:text-teal-400 font-semibold hover:underline inline-flex items-center">
              Learn more about ZoikoTime’s Responsible AI approach &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-white py-10 lg:py-10 dark:bg-gray-950">
        <div className="mx-auto max-w-6xl px-6">
          {/* Heading */}
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-600">
              Questions
            </p>
            <h2 className="mt-4 text-3xl font-bold text-slate-800 dark:text-white lg:text-4xl">
              HR, Legal &amp; Operations FAQs
            </h2>
          </div>

          {/* FAQ List */}
          <div className="mx-auto mt-12 max-w-5xl space-y-3">
            {faqs.map((question, index) => (
              <button
                key={index}
                className="flex w-full items-center gap-4 pb-2 text-left transition-colors hover:text-teal-600"
              >
                <span className="text-lg font-semibold text-slate-700 dark:text-gray-300">
                  .
                </span>
                <span className="text-base text-slate-700 dark:text-gray-300">
                  {question}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION BOTTOM BANNER */}
      <section className="bg-gradient-to-r from-slate-800 to-blue-950 py-20 text-white text-center relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-6">
          <span className="text-base font-semibold uppercase tracking-[2.56px] text-teal-600 block mb-6">One Record Layer</span>
          <h2 className="text-3xl font-bold leading-tight md:text-4xl mb-6">
            Give HR, Legal, and Operations one trusted workforce record layer
          </h2>
          <p className="mx-auto max-w-2xl text-base font-normal text-white/80 mb-10">
            Talk with the ZoikoTime team about governed records, exception workflows, evidence retention, and cross-functional visibility.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="w-full sm:w-36 rounded-[10px] bg-teal-600 py-3 text-base font-semibold text-white shadow-[0px_6px_16px_0px_rgba(16,162,141,0.28)] hover:bg-teal-700 transition">
              Get a Demo
            </button>
            <button className="w-full sm:w-40 rounded-[10px] border border-white/30 bg-white/10 py-3 text-base font-semibold text-white hover:bg-white/20 transition">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}