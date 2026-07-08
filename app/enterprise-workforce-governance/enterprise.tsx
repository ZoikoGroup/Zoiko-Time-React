import React from 'react';

export default function Enterprise() {
  return (
    <div className="w-full min-h-screen bg-white font-['Plus_Jakarta_Sans',_sans-serif] antialiased text-slate-900">
      
      {/* --- HERO SECTION --- */}
      <section className="relative w-full bg-teal-600 text-white overflow-hidden pt-28 pb-40">
        {/* Top Gradient Border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600" />
        
        {/* Background Radial Glow */}
        <div className="absolute right-[-80px] top-[-80px] size-[480px] bg-radial from-teal-500/10 to-teal-500/0 opacity-60 pointer-events-none" />

        <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block px-4 py-1 bg-teal-500/10 rounded-full border border-teal-500/20">
              <span className="text-teal-400 text-xs font-bold tracking-wider uppercase">
                Enterprise Workforce Governance
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
              Govern Workforce <br className="hidden md:inline"/>
              Records With Enterprise- <br className="hidden md:inline"/>
              Grade Control
            </h1>

            <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-[500px]">
              ZoikoTime helps organizations capture, review, approve, retain, and govern workforce records across teams, departments, contractors, and jurisdictions with role-based permissions, audit trails, policy controls, and human oversight.
            </p>

            <p className="text-white/40 text-sm md:text-base leading-relaxed max-w-[460px]">
              Enterprise workforce data affects payroll, billing, compliance, operations, finance, legal exposure, and management decisions. ZoikoTime gives leaders a structured way to govern the records behind those decisions.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-3.5 bg-white text-teal-600 font-semibold text-base rounded-lg shadow-[0px_4px_20px_0px_rgba(0,157,140,0.40)] transition hover:bg-teal-50">
                Contact Sales
              </button>
              <button className="px-8 py-3.5 border border-white/80 text-white/90 font-medium text-sm rounded-lg transition hover:bg-white/10">
                Get a Demo
              </button>
            </div>
          </div>

          {/* Right Column Stats Widget Card */}
          <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm shadow-xl space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/5 rounded-lg p-4">
                <span className="block text-white/30 text-[9px] font-bold tracking-wide uppercase mb-1">PAYROLL READY</span>
                <span className="text-teal-400 text-xl font-bold font-['Inter',_sans-serif]">94%</span>
              </div>
              <div className="bg-white/5 border border-white/5 rounded-lg p-4">
                <span className="block text-white/30 text-[9px] font-bold tracking-wide uppercase mb-1">EXCEPTIONS</span>
                <span className="text-amber-500 text-xl font-bold font-['Inter',_sans-serif]">23</span>
              </div>
              <div className="bg-white/5 border border-white/5 rounded-lg p-4">
                <span className="block text-white/30 text-[9px] font-bold tracking-wide uppercase mb-1">APPROVALS</span>
                <span className="text-white text-xl font-bold font-['Inter',_sans-serif]">1,847</span>
              </div>
              <div className="bg-white/5 border border-white/5 rounded-lg p-4">
                <span className="block text-white/30 text-[9px] font-bold tracking-wide uppercase mb-1">LEGAL HOLDS</span>
                <span className="text-violet-400 text-xl font-bold font-['Inter',_sans-serif]">2</span>
              </div>
            </div>

            <div className="bg-teal-500/10 border border-teal-500/20 rounded-lg p-4 space-y-2">
              <span className="block text-teal-400 text-xs font-bold">Policy Compliance</span>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="w-[87%] h-full bg-teal-500 rounded-full" />
              </div>
              <span className="block text-white/40 text-[10px]">87% records policy-compliant</span>
            </div>

            <p className="text-center text-white/30 text-xs">
              Built for governed workforce records, not invasive monitoring.
            </p>
          </div>
        </div>

        {/* Feature Pills Footer */}
        <div className="max-w-[1052px] mx-auto mt-20 px-4">
          <div className="bg-white/5 border border-white/60 rounded-xl p-4 flex flex-wrap justify-around items-center gap-4 text-center">
            {[
              "Governed records",
              "Role-based permissions",
              "Policy controls",
              "Audit trails",
              "Legal hold support"
            ].map((text, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="size-1.5 bg-teal-400 rounded-full" />
                <span className="text-white/60 text-xs font-semibold">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- INFRASTRUCTURE RISK SECTION --- */}
      <section className="bg-slate-100 py-24 px-6">
        <div className="max-w-[1100px] mx-auto space-y-16">
          <div className="text-center max-w-[900px] mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              Workforce Records Have Become Enterprise Risk Infrastructure
            </h2>
            <p className="text-slate-500 text-base max-w-[800px] mx-auto leading-relaxed">
              Modern organizations rely on workforce records for payroll, billing, compliance, dispute resolution, and executive reporting. Fragmented or ungoverned records create exposure across every function.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🗂", title: "Fragmented Records", text: "Time, attendance, activity, approvals, and exceptions may live in different systems, creating inconsistency, gaps, and governance risk." },
              { icon: "📉", title: "Weak Evidence Quality", text: "Records without timestamps, policy context, correction history, or approval trails are difficult to defend in payroll, billing, or legal review." },
              { icon: "📋", title: "Manual Governance Burden", text: "Spreadsheets, email approvals, and manual exception handling create inconsistency, delays, and audit gaps across distributed teams." },
              { icon: "💸", title: "Payroll and Billing Exposure", text: "Inaccurate or unsupported time records affect payroll accuracy, client invoice defensibility, project margins, and financial reporting." },
              { icon: "⚠", title: "Policy Drift", text: "Without structured policy enforcement, workforce oversight becomes inconsistent across teams, locations, and reporting periods." },
              { icon: "⚖", title: "Legal and Audit Pressure", text: "When investigations, audits, or disputes arise, organizations without structured records face significant evidence and defensibility gaps." }
            ].map((card, idx) => (
              <div key={idx} className="relative bg-white border border-slate-200 rounded-2xl p-6 shadow-sm overflow-hidden pt-10">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-teal-600 to-teal-500" />
                <span className="text-2xl block mb-3">{card.icon}</span>
                <h3 className="text-slate-900 text-base font-semibold mb-2">{card.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-700 text-sm font-semibold pt-4">
            Enterprise governance begins with workforce records that can be trusted, explained, reviewed, and retained.
          </p>
        </div>
      </section>

      {/* --- ARCHITECTURE LAYER SECTION --- */}
      <section className="bg-teal-600 text-white py-24 px-6">
        <div className="max-w-[1052px] mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              A Governance Layer for Workforce Operations
            </h2>
            <p className="text-white/60 text-base max-w-[850px] mx-auto leading-relaxed">
              ZoikoTime provides a workforce governance architecture that connects time capture, activity verification, attendance, approvals, exceptions, reporting, retention, and evidence into one governed platform.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { num: "1", color: "bg-indigo-500", title: "Workforce Events", desc: "Clock-ins, clock-outs, breaks, activity, project context, screenshots where enabled, mobile actions, corrections, approvals, and exceptions." },
              { num: "2", color: "bg-teal-700", title: "Policy and Permission Layer", desc: "Roles, access rights, approval rules, screenshot controls, redaction policies, retention settings, escalation paths, and jurisdiction-aware configuration." },
              { num: "3", color: "bg-teal-500", title: "Review and Decision Layer", desc: "Manager approvals, HR review, finance validation, legal escalation, administrator oversight, and exception resolution." },
              { num: "4", color: "bg-amber-500", title: "Evidence and Audit Layer", desc: "Immutable logs, record history, policy versioning, evidence packages, exports, legal hold, and audit trails." },
              { num: "5", color: "bg-emerald-400", title: "Executive Intelligence Layer", desc: "Dashboards, workforce analytics, payroll readiness, billing support, risk indicators, operational trends, and governance reporting." }
            ].map((layer) => (
              <div key={layer.num} className="bg-white/5 border border-white/20 rounded-xl p-5 flex gap-4 items-start md:items-center">
                <div className={`size-8 flex items-center justify-center rounded-full text-white font-bold text-xs shrink-0 ${layer.color}`}>
                  {layer.num}
                </div>
                <div className="space-y-1">
                  <h4 className="text-white font-semibold text-sm">{layer.title}</h4>
                  <p className="text-white/60 text-xs leading-relaxed">{layer.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- HIGH-STAKES OPERATIONS SECTION --- */}
      <section className="bg-slate-100 py-24 px-6">
        <div className="max-w-[1100px] mx-auto space-y-14">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              Governance for High-Stakes Workforce Operations
            </h2>
            <p className="text-slate-500 text-base max-w-[800px] mx-auto">
              ZoikoTime supports organizations where workforce records influence money, risk, performance, client trust, and compliance workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "💰", title: "Payroll Cutoff Readiness", desc: "Ensure time records, approvals, and exceptions are reviewed and complete before every payroll processing deadline." },
              { icon: "🧾", title: "Client Billing Support", desc: "Support professional services billing with approved time, project allocation, and evidence packages ready for client review." },
              { icon: "🤝", title: "Contractor Oversight", desc: "Govern contractor time records, activity context, approval workflows, and project allocation with the same rigor as direct employees." },
              { icon: "🌐", title: "Distributed Workforce Control", desc: "Maintain consistent governance across remote, hybrid, field, offshore, and multi-location workforce operations." },
              { icon: "📅", title: "Attendance Exception Review", desc: "Surface and resolve attendance gaps, missed entries, policy exceptions, and unusual patterns before they affect operations." },
              { icon: "📋", title: "Audit Preparation", desc: "Maintain structured records, approval history, policy context, audit trails, and exportable evidence for any governance review." },
              { icon: "⚖", title: "Legal Hold Support", desc: "Preserve relevant workforce records when disputes, investigations, audits, or litigation require structured retention." },
              { icon: "📊", title: "Policy Exception Governance", desc: "Review and document policy exceptions, override decisions, escalation history, and resolution notes with full audit logging." }
            ].map((item, idx) => (
              <div key={idx} className="relative bg-white border border-slate-200 rounded-2xl p-6 shadow-sm overflow-hidden pt-10">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-teal-600 to-teal-500" />
                <span className="text-2xl block mb-3">{item.icon}</span>
                <h3 className="text-slate-900 text-base font-semibold mb-2 leading-snug">{item.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECURITY & DEFENSIBLE RECORDS --- */}
      <section className="bg-teal-500 text-white py-24 px-6">
        <div className="max-w-[1100px] mx-auto space-y-14">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight">
              Designed for Security, Retention, and Defensible Records
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "👤", title: "Role-Based Access Control", desc: "Define access by role, responsibility, team, department, and administrative authority — with regular review requirements." },
              { icon: "📁", title: "Data Retention Controls", desc: "Support configurable retention settings, record categories, expiry behavior, and deletion safeguards." },
              { icon: "⚖", title: "Legal Hold Workflows", desc: "Preserve relevant records when legal, investigation, audit, or dispute obligations require structured retention." },
              { icon: "🔗", title: "Chain-of-Custody Support", desc: "Maintain traceable records for time events, corrections, approvals, exports, and administrative actions." },
              { icon: "📸", title: "Screenshot and Redaction", desc: "Govern screenshot capture, access permissions, redaction controls, and worker transparency where enabled." },
              { icon: "📋", title: "Audit-Grade Evidence", desc: "Structured evidence packages with timestamps, policy context, human review trail, and export logs." },
              { icon: "🔒", title: "Secure Administration", desc: "Permission-separated admin access, session controls, audit logging, and enterprise security review support." },
              { icon: "🤖", title: "Responsible AI Controls", desc: "AI-assisted insights that support human review without automatically making adverse workforce decisions." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
                <span className="text-2xl block">{item.icon}</span>
                <h3 className="text-white text-base font-semibold">{item.title}</h3>
                <p className="text-white/60 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PHASEED IMPLEMENTATION ROLLOUT --- */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-[1052px] mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
              Built for Governed Enterprise Rollout
            </h2>
            <p className="text-slate-500 text-base max-w-[850px] mx-auto leading-relaxed">
              Enterprise workforce governance should be implemented carefully. ZoikoTime supports phased deployment aligned to structure, policy, roles, communication, and adoption.
            </p>
          </div>

          <div className="border border-slate-200 rounded-2xl overflow-hidden divide-y divide-slate-200">
            {[
              { step: "Phase 1", title: "Discovery and Governance Design", desc: "Identify buyer objectives, teams, use cases, workforce categories, compliance considerations, and success criteria." },
              { step: "Phase 2", title: "Configuration and Access Control", desc: "Configure roles, permissions, policies, departments, workers, retention settings, and administrative workflows." },
              { step: "Phase 3", title: "Pilot and Validation", desc: "Launch with a pilot group, validate configuration, review exceptions, and confirm reporting outputs." },
              { step: "Phase 4", title: "Integrations and Reporting", desc: "Connect payroll, HR, and project workflows, configure reporting views, and finalize analytics outputs." },
              { step: "Phase 5", title: "Enterprise Rollout", desc: "Launch across full workforce with worker communication, manager training, and governance documentation." },
              { step: "Phase 6", title: "Continuous Governance", desc: "Monitor adoption, review exceptions, tune settings, optimize reporting, and maintain governance discipline." }
            ].map((phase, idx) => (
              <div key={idx} className="p-5 flex flex-col sm:flex-row gap-4 items-start bg-white hover:bg-slate-50/50 transition">
                <div className="px-3 py-1 bg-emerald-50 border border-teal-600/25 rounded-md shrink-0">
                  <span className="text-teal-600 text-xs font-bold">{phase.step}</span>
                </div>
                <div className="space-y-1">
                  <h4 className="text-slate-900 text-sm font-semibold">{phase.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="text-teal-600 text-sm font-semibold hover:underline">
              View Implementation Guide →
            </button>
          </div>
        </div>
      </section>

      {/* --- FAQS SECTION --- */}
      <section className="bg-slate-100 py-24 px-6">
        <div className="max-w-[760px] mx-auto space-y-10">
          <h2 className="text-3xl font-semibold tracking-tight text-center text-slate-900">
            Enterprise Governance FAQs
          </h2>

          <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden divide-y divide-slate-200 shadow-sm">
            {[
              "What is enterprise workforce governance in ZoikoTime?",
              "Is ZoikoTime just an employee monitoring tool?",
              "Does ZoikoTime automatically discipline workers?",
              "Can ZoikoTime support legal hold?",
              "Does ZoikoTime guarantee compliance?",
              "Is enterprise deployment self-service?"
            ].map((faq, idx) => (
              <div key={idx} className="p-5 flex justify-between items-center bg-slate-100 hover:bg-slate-50/50 cursor-pointer transition">
                <span className="text-slate-900 text-base font-semibold">{faq}</span>
                <span className="text-teal-600 text-xl font-normal ml-4">+</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA BANNER --- */}
      <section className="relative bg-gradient-to-r from-teal-50 to-emerald-50 py-20 px-6 overflow-hidden">
        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600" />
        
        <div className="max-w-[1100px] mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div className="space-y-4 max-w-[820px]">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 leading-tight">
              Bring Governance to the Workforce Records <br className="hidden md:inline"/> Your Enterprise Relies On
            </h2>
            <p className="text-slate-500 text-base leading-relaxed">
              See how ZoikoTime helps enterprise organizations govern time, attendance, approvals, exceptions, payroll readiness, billing support, and audit-grade evidence across teams, departments, and jurisdictions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full sm:w-auto shrink-0">
            <button className="w-full sm:w-64 px-6 py-3.5 bg-teal-600 text-white font-semibold text-base rounded-lg shadow-[0px_4px_16px_0px_rgba(0,157,140,0.30)] transition hover:bg-teal-700">
              Contact Sales
            </button>
            <button className="w-full sm:w-64 px-6 py-3.5 bg-white border border-slate-200 text-slate-700 font-medium text-sm rounded-lg transition hover:bg-slate-50">
              Get a Demo
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}