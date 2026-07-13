"use client";

export default function TransparencyViews() {
  return (
    <section className="w-full bg-slate-100 dark:bg-slate-950 py-16 md:py-20">
      <div className="max-w-[1040px] mx-auto px-6">

        {/* Header */}
        <div className="text-center">
          <p className="text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider">
            Dual-Mode Transparency
          </p>

          <h2 className="mt-5 text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Two Views of Transparency
          </h2>

          <p className="mt-5 max-w-5xl mx-auto text-base md:text-lg leading-7 text-slate-500 dark:text-slate-400">
            Transparency is tailored to the stakeholder but consistent across all
            of them. Enterprise and employee views show the same underlying data
            through lenses appropriate to each context.
          </p>
        </div>


        {/* Toggle */}
        <div className="mt-10 flex justify-center">
          <div className="flex w-[320px] bg-white dark:bg-slate-900 rounded-md border border-slate-200 dark:border-slate-700 p-1">

            <button className="flex-1 h-11 rounded-md bg-teal-600 text-white text-sm font-bold">
              Enterprise View
            </button>

            <button className="flex-1 text-slate-500 dark:text-slate-400 text-sm font-bold">
              Employee View
            </button>

          </div>
        </div>


        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">


          {/* Enterprise Card */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">

            <div className="bg-slate-900 p-6">
              <h3 className="text-white text-base font-bold">
                Enterprise View
              </h3>

              <p className="text-white text-xs mt-1">
                For HR, Compliance, and Management teams
              </p>
            </div>


            <Info
              title="System-Wide Insights"
              text="Workforce-level confidence score distribution, anomaly rate, and policy compliance metrics — across all teams and jurisdictions."
            />

            <Info
              title="Policy Enforcement View"
              text="Which policies are active, how many sessions triggered each rule, and the outcome distribution — for governance and control review."
            />

            <Info
              title="Audit Perspective"
              text="Full audit trail access — every session, every decision, every evidence record — with export capability for regulatory and legal review."
            />

            <Info
              title="Decision Trace Access"
              text="Any outcome can be reconstructed step-by-step — from input signals through AI reasoning to human decision and final evidence record."
            />


            <FooterText>
              Enterprise view provides governance visibility without exposing
              individual worker data beyond what is required for each role's
              governance function.
            </FooterText>

          </div>



          {/* Employee Card */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">

            <div className="bg-emerald-50 dark:bg-emerald-950 p-6">
              <h3 className="text-teal-700 dark:text-teal-400 text-base font-bold">
                Employee View
              </h3>

              <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
                Personal data visibility for individual workers
              </p>
            </div>


            <Info
              title="My Data"
              text="What signals were collected during each session — identity, device, location, and activity — and how long each is retained."
            />

            <Info
              title="My Confidence Score"
              text="How my session confidence score was calculated — which layers contributed, which signals were present, and the final score."
            />

            <Info
              title="How It Is Used"
              text="A plain-language explanation of how my session data influences payroll, billing, and compliance records — with the policy reference applied."
            />

            <Info
              title="My Privacy Rights"
              text="How to submit a data subject rights request — access, correction, deletion, restriction, or objection — with expected timelines."
            />


            <FooterText>
              Employees are not subjects of the system — they are participants
              within it, with full visibility into what the system records about
              them and why.
            </FooterText>

          </div>

        </div>

      </div>
    </section>
  );
}



function Info({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="p-6 border-b border-slate-200 dark:border-slate-800">

      <h4 className="text-xs font-bold text-slate-900 dark:text-white">
        {title}
      </h4>

      <p className="mt-3 text-xs leading-5 text-slate-500 dark:text-slate-400">
        {text}
      </p>

    </div>
  );
}



function FooterText({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-100 dark:bg-slate-800 p-6">

      <p className="text-xs leading-5 font-semibold text-slate-500 dark:text-slate-300">
        {children}
      </p>

    </div>
  );
}