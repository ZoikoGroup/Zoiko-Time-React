import React from 'react';
type FrameworkVariant = 'indigo' | 'emerald' | 'amber';

interface ComplianceRow {
  framework: string;
  frameworkVariant: FrameworkVariant;
  control: string;
  capability: string;
  evidence: string;
  status: 'Implemented' | 'Pending';
}
interface CardProps {
  icon: string;
  title: string;
  description: string;
  footerText: string;
}
const ControlValidationCard: React.FC<CardProps> = ({ icon, title, description, footerText }) => {
  return (
    <div className="relative bg-white dark:bg-gray-900 rounded-xl shadow-[0px_1px_2px_0px_rgba(13,21,38,0.04),0px_1px_4px_0px_rgba(13,21,38,0.06)] border border-slate-200 dark:border-gray-700 overflow-hidden flex flex-col p-6 sm:p-8 min-h-[320px] sm:min-h-[384px]">
      {/* Decorative top colored bar gradient */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-600 to-teal-500" />
      
      {/* Icon Wrapper Box */}
      <div className="size-12 bg-emerald-50 dark:bg-gray-900 rounded-xl border border-teal-600/20 flex items-center justify-center text-xl text-slate-700 dark:text-white mb-6 sm:mb-9 select-none">
        {icon}
      </div>

      {/* Card Content Header */}
      <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-7 mb-3">
        {title}
      </h3>

      {/* Main Body Text */}
      <p className="text-slate-500 dark:text-white text-sm font-normal leading-6 mb-auto whitespace-pre-line">
        {description}
      </p>

      {/* Card Footer Status / Resolution Section */}
      <div className="flex items-start gap-2 mt-6 pt-2">
        <span className="text-teal-600 text-xs font-bold leading-5 select-none mt-0.5">→</span>
        <p className="text-teal-600 text-xs font-bold leading-5 whitespace-pre-line">
          {footerText}
        </p>
      </div>
    </div>
  );
};
const readinessItems = [
    "Workforce records for review period",
    "Compliance proof for each control",
    "Decision traceability for all sessions",
    "Control validation results"
  ];

  const packageItems = [
    {
      title: "Evidence records — all sessions (tamper-\nevident)",
      format: "PDF/A-3 + JSON"
    },
    {
      title: "Control mapping matrix — framework aligned",
      format: "Excel + PDF"
    },
    {
      title: "Decision traceability log — AI reasoning embedded",
      format: "Full audit log"
    },
    {
      title: "Validation results — control performance\nreport",
      format: "Quarterly/monthly"
    },
    {
      title: "Chain of custody — integrity verification per\nrecord",
      format: "SHA-256 sealed"
    }
  ];
const COMPLIANCE_DATA: ComplianceRow[] = [
  {
    framework: 'GDPR',
    frameworkVariant: 'indigo',
    control: 'Data traceability (Art. 30)',
    capability: 'Evidence layer with full processing records — automatically maintained, immediately exportable',
    evidence: 'Processing registry + evidence records',
    status: 'Implemented',
  },
  {
    framework: 'SOC 2',
    frameworkVariant: 'emerald',
    control: 'Activity logging',
    capability: 'Immutable session tracking — all access events, processing decisions, and control actions logged',
    evidence: 'Tamper-evident audit log',
    status: 'Implemented',
  },
  {
    framework: 'ISO 27001',
    frameworkVariant: 'indigo',
    control: 'Access control (A.9)',
    capability: 'Role-based access control with least-privilege enforcement — all access logged and verifiable',
    evidence: 'Access audit records',
    status: 'Implemented',
  },
  {
    framework: 'ISO 42001',
    frameworkVariant: 'amber',
    control: 'AI transparency',
    capability: 'Explainable AI reasoning embedded in every evidence record — every decision traceable to its inputs',
    evidence: 'AI decision logs per session',
    status: 'Implemented',
  },
  {
    framework: 'EU AI Act',
    frameworkVariant: 'amber',
    control: 'Human oversight',
    capability: 'Tiered human-in-command model — medium/low confidence sessions require human review before resolution',
    evidence: 'Override and review records',
    status: 'Implemented',
  },
  {
    framework: 'GDPR',
    frameworkVariant: 'indigo',
    control: 'Security (Art. 32)',
    capability: 'AES-256 encryption, RBAC, zero-trust architecture — security controls enforced and continuously validated',
    evidence: 'Security logs + pen test summary',
    status: 'Implemented',
  },
];
const riskCards = [
  {
    icon: '💸',
    title: 'Financial',
    description: 'Fines and financial penalties for compliance failures can be substantial — GDPR penalties alone reach up to 4% of global annual turnover. Labour law violations carry compounding penalty structures. Unproven compliance is treated as non-compliance.',
  },
  {
    icon: '⚖️',
    title: 'Legal',
    description: 'Regulatory enforcement action, judicial review, and employee legal challenges all require the same output: verified, documented evidence. Gaps in your workforce records become liabilities when scrutinised under legal proceedings.',
  },
  {
    icon: '🏭',
    title: 'Operational',
    description: 'Regulatory investigations disrupt operations, divert leadership bandwidth, and erode workforce trust — particularly when the investigation centres on workforce data that should have been continuously maintained and immediately available.',
  }
];
const GOVERNANCE_LAYERS = [
  {
    id: 'LAYER 01',
    title: 'Control Definition',
    description: 'Regulatory requirements and internal policies are formalised as configurable controls — mapped to applicable frameworks and applied as enforceable rules at the session level.',
    tags: [
      { text: 'Regulatory controls', variant: 'gray' },
      { text: 'Internal policies', variant: 'gray' },
      { text: 'Framework mapping', variant: 'gray' },
      { text: 'Jurisdiction configuration', variant: 'gray' }
    ]
  },
  {
    id: 'LAYER 02',
    title: 'Control Enforcement Engine',
    description: 'Controls are applied automatically at the session level — violations are prevented before they occur, not detected after the fact. Policy enforcement is active, not passive.',
    tags: [
      { text: 'Real-time enforcement', variant: 'emerald' },
      { text: 'Violation prevention', variant: 'emerald' },
      { text: 'Policy application', variant: 'emerald' },
      { text: 'AI-driven detection', variant: 'emerald' }
    ]
  },
  {
    id: 'LAYER 03',
    title: 'Control Validation Layer',
    description: 'Continuous validation confirms that controls are functioning correctly and policies are being applied as configured — providing ongoing assurance that the governance system is working, not just deployed.',
    tags: [
      { text: 'Automated control testing', variant: 'emerald' },
      { text: 'Validation reports', variant: 'emerald' },
      { text: 'Exception tracking', variant: 'gray' },
      { text: 'Drift detection', variant: 'gray' }
    ]
  },
  {
    id: 'LAYER 04',
    title: 'Evidence & Traceability',
    description: 'Every control application, validation result, and policy decision generates a tamper-evident evidence record — providing a complete, unbroken audit trail for every workforce action.',
    tags: [
      { text: 'Full audit trail', variant: 'emerald' },
      { text: 'Decision logic embedded', variant: 'emerald' },
      { text: 'Chain of custody', variant: 'emerald' },
      { text: 'SHA-256 integrity', variant: 'indigo' }
    ]
  },
  {
    id: 'LAYER 05',
    title: 'Assurance & Reporting',
    description: 'Compliance status, control performance metrics, and assurance reports are generated continuously — providing executive and board-level visibility into governance effectiveness at all times.',
    tags: [
      { text: 'Compliance dashboards', variant: 'gray' },
      { text: 'Control performance metrics', variant: 'gray' },
      { text: 'Regulator-ready exports', variant: 'emerald' },
      { text: 'Board reporting', variant: 'gray' }
    ]
  }
];

const tableData = [
    {
      framework: 'GDPR',
      frameworkType: 'gdpr',
      control: 'Data traceability\n(Art. 30)',
      capability: 'Evidence layer with full processing records —\nautomatically maintained, immediately exportable',
      evidence: 'Processing registry +\nevidence records',
      status: '✓ Implemented'
    },
    {
      framework: 'SOC 2',
      frameworkType: 'soc2',
      control: 'Activity logging',
      capability: 'Immutable session tracking — all access events,\nprocessing decisions, and control actions logged',
      evidence: 'Tamper-evident audit\nlog',
      status: '✓ Implemented'
    },
    {
      framework: 'ISO 27001',
      frameworkType: 'iso27001',
      control: 'Access control\n(A.9)',
      capability: 'Role-based access control with least-privilege\nenforcement — all access logged and verifiable',
      evidence: 'Access audit records',
      status: '✓ Implemented'
    },
    {
      framework: 'ISO 42001',
      frameworkType: 'iso42001',
      control: 'AI transparency',
      capability: 'Explainable AI reasoning embedded in every evidence\nrecord — every decision traceable to its inputs',
      evidence: 'AI decision logs per\nsession',
      status: '✓ Implemented'
    },
    {
      framework: 'EU AI Act',
      frameworkType: 'euaiact',
      control: 'Human oversight',
      capability: 'Tiered human-in-command model — medium/low\nconfidence sessions require human review before\nresolution',
      evidence: 'Override and review\nrecords',
      status: '✓ Implemented'
    },
    {
      framework: 'GDPR',
      frameworkType: 'gdpr',
      control: 'Security (Art. 32)',
      capability: 'AES-256 encryption, RBAC, zero-trust architecture —\nsecurity controls enforced and continuously validated',
      evidence: 'Security logs + pen\ntest summary',
      status: '✓ Implemented'
    }
  ];
  const getFrameworkStyles = (type: string) => {
    switch(type) {
      case 'gdpr':
        return 'bg-indigo-50 text-indigo-700';
      case 'soc2':
        return 'bg-emerald-50 text-teal-700';
      case 'iso27001':
        return 'bg-indigo-50 text-indigo-500';
      case 'iso42001':
      case 'euaiact':
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };
  interface IncidentCardProps {
  title: string;
  steps: string[];
}
const stakeholders = [
    {
      role: "CRO",
      title: "Continuous\nCompliance\nAssurance",
      description: "Controls are validated continuously — not annually. Risk exposure is quantified in real time. Regulatory confidence is maintained, not assumed."
    },
    {
      role: "General Counsel",
      title: "Legal Defensibility",
      description: "Every workforce decision is documented, explainable, and evidenced with chain of custody — providing the legal defensibility required for regulatory proceedings and employment disputes."
    },
    {
      role: "CFO",
      title: "Reduced Regulatory\nCost",
      description: "Audit preparation cost reduced from weeks to minutes. Regulatory penalty exposure reduced through continuous compliance posture. Financial defensibility built into every payroll period."
    },
    {
      role: "Board",
      title: "Governance\nConfidence",
      description: "Board and audit committee can confirm with confidence that workforce governance controls are in place, functioning, and continuously validated — not just documented in policy frameworks."
    }
  ];

const IncidentCard: React.FC<IncidentCardProps> = ({ title, steps }) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-[0px_1px_2px_0px_rgba(13,21,38,0.04),0px_1px_4px_0px_rgba(13,21,38,0.06)] border border-slate-200 dark:border-gray-700 p-6 sm:p-8 min-h-[280px] sm:min-h-[320px] w-full max-w-[320px] mx-auto flex flex-col justify-start">
      {/* Card Header Title */}
      <h3 className="text-slate-900 dark:text-white text-base font-bold leading-7 mb-5 flex items-center gap-2">
        {title}
      </h3>

      {/* Stepper Timeline Body */}
      <div className="flex flex-col gap-4">
        {steps.map((stepText, idx) => (
          <div key={idx} className="flex items-start gap-3">
            {/* Arrow Indicator */}
            <span className="text-teal-600 text-xs font-bold leading-5 select-none shrink-0 mt-0.5">
              →
            </span>
            {/* Step Detail Copy */}
            <p className="text-slate-500 dark:text-white text-xs font-normal leading-5 whitespace-pre-line">
              {stepText}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
const records = [
    {
      title: "Accepted Session — Full Explainability Record",
      evidenceId: "SES-2026-08841",
      evidenceSuffix: "— SHA-256 sealed, chain of\ncustody active, audit-ready.",
      rows: [
        {
          label: "Input",
          content: "Four verification signals — identity (97), session (95), device (98), location (94). All within configured policy thresholds."
        },
        {
          label: "Policy",
          content: "Enterprise Remote Session Policy v3.2 — UK jurisdiction — minimum confidence threshold: 80"
        },
        {
          label: "Control",
          content: "Working Time Regulations 1998 — rest period compliance confirmed. GDPR Art. 6 — legitimate interest applied."
        },
        {
          label: "Decision",
          content: "Confidence score: 96 — accepted as valid. Session approved for payroll and billing.",
          isHighlight: true
        }
      ]
    },
    {
      title: "Flagged Session — Full Explainability Record",
      evidenceId: "SES-2026-08842",
      evidenceSuffix: "— SHA-256 sealed, anomaly\nclassification: VPN masking + session deviation.",
      rows: [
        {
          label: "Input",
          content: "Four verification signals — identity (91), session (74), device (96), location (61). Location signal and session below threshold."
        },
        {
          label: "Policy",
          content: "Enterprise Remote Session Policy v3.2 — UK jurisdiction — two layers below minimum confidence threshold: 80"
        },
        {
          label: "Control",
          content: "VPN masking detected — location signal cannot be verified against policy requirement. Session integrity anomaly present."
        },
        {
          label: "Decision",
          content: "Confidence score: 71 — flagged for human review. Billing held pending Tier 2 review decision.",
          isHighlight: true
        }
      ]
    }
  ];
  interface CardItem {
  icon: string;
  title: string;
  description: string;
}
interface ComparisonRow {
  capability: string;
  legacy: boolean;
  zoikoTime: boolean;
}

const COMPLIANCE_TAGS = [
  "CQC alignment",
  "NHS workforce standards",
  "Agency staff verification",
  "Rest period compliance"
];

const COMPARISON_MATRIX: ComparisonRow[] = [
  {
    capability: "Control validation — continuously proving controls are functioning",
    legacy: false,
    zoikoTime: true,
  },
  {
    capability: "Compliance mapping — every feature mapped to regulatory controls",
    legacy: false,
    zoikoTime: true,
  },
  {
    capability: "Regulator-ready outputs — structured, immediately available evidence packages",
    legacy: false,
    zoikoTime: true,
  },
  {
    capability: "Decision explainability — AI reasoning embedded in every evidence record",
    legacy: false,
    zoikoTime: true,
  },
  {
    capability: "Continuous assurance — governance validated in real time, not annually",
    legacy: false,
    zoikoTime: true,
  },
  {
    capability: "Incident evidence — control failures documented, evidenced, and resolved",
    legacy: false,
    zoikoTime: true,
  },
];
export default function Regulated() {
    const accountabilityCards: CardItem[] = [
    {
      icon: "⚙️",
      title: "System Enforces",
      description: "Policy controls applied automatically at session level — no human intervention required for standard operations. Violations prevented before they occur."
    },
    {
      icon: "✅",
      title: "System Validates",
      description: "Every control tested continuously — validation reports generated automatically to confirm governance effectiveness throughout every operational period."
    },
    {
      icon: "👤",
      title: "Human Oversees",
      description: "All consequential decisions require human review — flagged sessions, anomaly classifications, and policy exceptions are reviewed by named, accountable human decision-makers."
    }
  ];
    const tags = [
    "CQC alignment",
    "NHS workforce standards",
    "Agency staff verification",
    "Rest period compliance"
  ];

  const requirements = [
    {
      title: "Requirement: Shift Compliance Records",
      response: "ZoikoTime response: Verified shift records with working time compliance, rest period validation, and staffing ratio evidence — continuous, not retrospective."
    },
    {
      title: "Requirement: Regulatory Audit Readiness",
      response: "ZoikoTime response: Complete audit package generated in <4 minutes — structured for CQC inspection, with controls mapping and decision traceability included."
    },
    {
      title: "Requirement: Agency & Locum Governance",
      response: "ZoikoTime response: Same verification standards applied to agency and locum workers as permanent staff — no governance gap from flexible workforce arrangements."
    }
  ];
    const incidentCards = [
    {
      title: '🚫 Policy Violation',
      steps: [
        'Violation detected in real time against\nconfigured policy threshold',
        'Incident logged with full context,\nworker profile, and policy reference',
        'Escalation triggered to appropriate\nreview tier — proportionate to severity',
        'Evidence record created and sealed —\navailable for immediate audit access'
      ]
    },
    {
      title: '⚙️ Control Failure',
      steps: [
        'Control performance deviation\ndetected — validation layer identifies\nfailure',
        'Alert generated to governance team\nwith full diagnostic context',
        'Investigation workflow initiated — root\ncause analysis triggered automatically',
        'Remediation record created —\nevidence of detection, response, and\nresolution'
      ]
    },
    {
      title: '🔍 Data Integrity Issue',
      steps: [
        'Data integrity challenge detected —\nSHA-256 verification fails on retrieval',
        'Integrity alert generated — affected\nrecords flagged and quarantined',
        'Chain of custody reviewed — root\ncause identified and documented',
        'Regulatory notification workflow\ninitiated if breach threshold met — 72hr\ncompliant'
      ]
    }
  ];
    const validationCards = [
    {
      icon: '🔄',
      title: 'Automated Control Testing',
      description: 'Controls are tested continuously\nagainst live operational data — not\nmanually reviewed on an annual audit\ncycle. Every deviation from expected\ncontrol performance is detected\nautomatically and reported in real time.',
      footerText: 'Answer: Controls are tested continuously,\nnot periodically',
    },
    {
      icon: '📊',
      title: 'Validation Reports',
      description: 'Structured validation reports show the\nperformance of every control over any\ntime period — demonstrating to\nauditors and regulators that controls\nwere not only in place but functioning as\ndesigned throughout the period under\nreview.',
      footerText: 'Answer: Validation evidence is generated\nfor every period',
    },
    {
      icon: '⚠️',
      title: 'Exception Tracking',
      description: 'Every exception — a control that fired, a\npolicy that was breached, an anomaly\nthat triggered a response — is tracked,\ndocumented, and reported with full\ncontext, AI reasoning, and the action\ntaken.',
      footerText: 'Answer: Exceptions are evidenced, not\njust logged',
    },
  ];
  return (
    <main className="dark:bg-gray-900">
    <section className="relative w-full bg-gradient-to-b from-teal-50 to-white to-55% dark:from-gray-900 dark:to-gray-900 overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[500px] sm:min-h-[663px] ">
    

      {/* Sub-heading */}
      <div className="text-teal-600 text-xs font-bold uppercase leading-5 tracking-wider mb-6 text-center">
        Regulated Industries
      </div>

      {/* Main Heading */}
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight sm:leading-[55px] mb-8">
        <span className="block text-slate-900 dark:text-white">A Workforce System You Can</span>
        <span className="block text-teal-600 mt-2">Defend Under Regulatory Scrutiny</span>
      </h1>

      {/* Description */}
      <p className="max-w-4xl text-center text-slate-500 dark:text-white text-base sm:text-lg font-normal leading-7 mb-8 px-2">
        ZoikoTime enables organisations to operate with continuous compliance, verifiable controls, and audit-ready evidence — ensuring every workforce action can be explained, validated, and defended.
      </p>

      {/* Quote Banner */}
      <div className="bg-emerald-50 dark:bg-gray-900 rounded-xl border border-teal-600/20 px-6 py-4 mb-12 max-w-4xl w-full">
        <p className="text-teal-700 text-sm font-semibold leading-6 text-center">
          "ZoikoTime is a regulator-aligned workforce governance system designed to withstand audit, inspection, and legal scrutiny."
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full px-4">
        <button className="w-full sm:w-64 h-12 bg-teal-600 rounded-lg shadow-[0px_4px_14px_0px_rgba(0,157,140,0.28)] flex items-center justify-center text-white text-base font-semibold hover:bg-teal-700 transition-colors">
          Request Regulator Demo
        </button>
        
        <button className="w-full sm:w-60 h-12 rounded-lg border border-teal-600 flex items-center justify-center text-teal-600 text-base font-semibold hover:bg-teal-50 transition-colors">
          View Control Mapping
        </button>
      </div>

    </section>
    <section className="w-full bg-slate-100 dark:bg-gray-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center ">
      
      {/* Header Section */}
      <div className="text-center max-w-3xl mb-12 sm:mb-16">
        <div className="text-teal-600 text-xs font-bold uppercase leading-5 tracking-wider mb-4">
          The Stakes
        </div>
        <h2 className="text-slate-900 dark:text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-tight sm:leading-10 mb-6">
          What Happens When You Cannot Prove Compliance
        </h2>
        <p className="text-slate-500 dark:text-white text-base sm:text-lg font-normal leading-7">
          Regulatory failure is not an operational inconvenience. It is a financial, 
          legal, and reputational event — and it almost always begins with an 
          inability to produce verified evidence.
        </p>
      </div>

      {/* Risk Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl mb-12 sm:mb-16">
        {riskCards.map((card, index) => (
          <div 
            key={index} 
            className="relative bg-white dark:bg-gray-900 rounded-xl shadow-[0px_1px_4px_0px_rgba(13,21,38,0.06)] border border-red-500/20 overflow-hidden flex flex-col p-6 sm:p-8 transition-transform hover:-translate-y-1"
          >
            {/* Top Gradient Bar */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-500 to-orange-500"></div>
            
            {/* Icon */}
            <div className="w-11 h-11 bg-red-50 dark:bg-gray-900 rounded-lg flex items-center justify-center mb-6">
              <span className="text-xl">{card.icon}</span>
            </div>
            
            {/* Content */}
            <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-7 mb-3">
              {card.title}
            </h3>
            <p className="text-slate-500 dark:text-white text-sm font-normal leading-6">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Callout Banner */}
      <div className="w-full max-w-3xl bg-teal-600 rounded-2xl p-6 sm:p-8 flex items-center justify-center text-center shadow-lg">
        <p className="text-white text-base sm:text-lg font-bold leading-7">
          Regulators do not ask what your system does. They ask what you can prove.
        </p>
      </div>

    </section>
    <section className="bg-slate-50 dark:bg-gray-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto text-center mb-12 sm:mb-16">
        <span className="text-teal-600 text-xs font-bold uppercase tracking-wider block mb-3">
          Governance Engine
        </span>
        <h2 className="text-slate-900 dark:text-white text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">
          The Workforce Governance & Control System
        </h2>
        <p className="text-slate-500 dark:text-white text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Five layers of continuous assurance — from control definition through validation, evidence, and executive reporting — providing a complete, defensible governance model.
        </p>
      </div>

      {/* Main Governance Matrix Panel */}
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-slate-200 dark:border-gray-700 overflow-hidden">
        {/* Header Block */}
        <div className="bg-slate-50 dark:bg-gray-900 p-6 sm:p-8 border-b border-slate-200 dark:border-gray-700">
          <h3 className="text-slate-900 dark:text-white text-base sm:text-lg font-bold mb-1">
            ZoikoTime Governance & Control Engine
          </h3>
          <p className="text-slate-500 dark:text-white text-sm">
            A continuously validated system of controls — not a static compliance framework.
          </p>
        </div>

        {/* Matrix Rows */}
        <div className="divide-y divide-slate-200 dark:divide-gray-700">
          {GOVERNANCE_LAYERS.map((layer) => (
            <div key={layer.id} className="flex flex-col md:flex-row min-h-[128px]">
              {/* Left Column: Layer Label */}
              <div className="md:w-56 bg-slate-50 dark:bg-gray-900 md:border-r border-slate-200 dark:border-gray-700 p-6 flex flex-col justify-center shrink-0">
                <span className="font-mono text-slate-400 text-[10px] font-bold tracking-wide mb-1">
                  {layer.id}
                </span>
                <h4 className="text-slate-900 dark:text-white text-xs font-bold leading-tight">
                  {layer.title}
                </h4>
              </div>

              {/* Right Column: Descriptions & Badges */}
              <div className="flex-1 p-6 flex flex-col justify-center gap-4">
                <p className="text-slate-500 dark:text-white text-sm leading-relaxed max-w-3xl">
                  {layer.description}
                </p>
                
                {/* Dynamically Styled Badges */}
                <div className="flex flex-wrap gap-2">
                  {layer.tags.map((tag) => {
                    let badgeStyles = "bg-white dark:bg-gray-900 text-slate-700 dark:text-white border-slate-200 dark:border-gray-700";
                    if (tag.variant === 'emerald') {
                      badgeStyles = "bg-emerald-50 dark:bg-gray-900 text-teal-700 border-teal-600/20";
                    } else if (tag.variant === 'indigo') {
                      badgeStyles = "bg-indigo-50 dark:bg-gray-900 text-indigo-500 border-indigo-500/20";
                    }

                    return (
                      <span
                        key={tag.text}
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${badgeStyles}`}
                      >
                        {tag.text}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="w-full min-h-[600px] sm:min-h-[919px] relative bg-slate-100 dark:bg-gray-900 py-16 sm:py-24 flex flex-col items-center justify-start font-sans select-none">
      {/* Upper Headers */}
      <div className="text-center max-w-4xl px-4 z-10">
        <span className="block text-teal-600 text-xs font-bold tracking-wider uppercase mb-3">
          Control Mapping
        </span>
        <h2 className="text-slate-900 dark:text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-tight sm:leading-10 tracking-tight mb-5">
          Every Feature Mapped to Regulatory Controls
        </h2>
        <p className="text-slate-500 dark:text-white text-base sm:text-lg font-normal leading-7 max-w-2xl mx-auto whitespace-pre-line">
          Procurement-grade clarity — a complete mapping of ZoikoTime{'\n'}
          capabilities to the compliance controls your regulators, auditors, and{'\n'}
          procurement teams require.
        </p>
      </div>

      {/* Main Framework Matrix Container */}
      <div className="w-full max-w-[1040px] mx-auto px-4 sm:px-0 mt-12">
        <div className="w-full h-auto sm:h-[475px] bg-white dark:bg-gray-900 rounded-2xl shadow-[0px_4px_16px_0px_rgba(13,21,38,0.08),0px_1px_4px_0px_rgba(13,21,38,0.04)] border border-slate-200 dark:border-gray-700 overflow-hidden flex flex-col">
          <div className="w-full overflow-x-auto">
            <div className="min-w-[900px]">
              {/* Table Header Row */}
              <div className="w-full h-10 bg-slate-100 dark:bg-gray-900 border-b border-slate-200 dark:border-gray-700 flex items-center text-[11px] font-bold text-slate-400 tracking-wide uppercase">
                <div className="w-32 pl-[22px]">Framework</div>
                <div className="w-44 pl-[22px]">Control</div>
                <div className="w-96 pl-[22px]">ZoikoTime Capability</div>
                <div className="w-48 pl-[22px]">Evidence Output</div>
                <div className="w-36 pl-[22px]">Status</div>
              </div>

              {/* Table Body Content Rows */}
              <div className="w-full max-h-[400px] overflow-y-auto overflow-x-hidden">
                {tableData.map((row, index) => (
                  <div 
                    key={index} 
                    className={`w-full flex items-center border-b border-slate-200 dark:border-gray-700 last:border-b-0 ${
                      row.frameworkType === 'euaiact' ? 'h-20' : 'h-16'
                    }`}
                  >
                    {/* Framework Column Tag */}
                    <div className="w-32 pl-[22px] flex items-center">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold whitespace-nowrap ${getFrameworkStyles(row.frameworkType)}`}>
                        {row.framework}
                      </span>
                    </div>

                    {/* Control Headline */}
                    <div className="w-44 pl-[22px] text-slate-900 dark:text-white text-sm font-semibold leading-tight whitespace-pre-line">
                      {row.control}
                    </div>

                    {/* Capability Description */}
                    <div className="w-96 pl-[22px] text-slate-500 dark:text-white text-sm font-normal leading-normal whitespace-pre-line">
                      {row.capability}
                    </div>

                    {/* Evidence Output Details */}
                    <div className="w-48 pl-[22px] text-slate-500 dark:text-white text-xs font-normal leading-normal whitespace-pre-line">
                      {row.evidence}
                    </div>

                    {/* Implementation Badges */}
                    <div className="w-36 pl-[22px] flex items-center">
                      <span className="px-3 py-1 bg-emerald-50 dark:bg-gray-900 text-teal-700 text-xs font-bold rounded-full border border-emerald-100 dark:border-gray-700 flex items-center gap-1">
                        <span className="text-[10px]">✓</span> Implemented
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="w-full min-h-[633px] bg-slate-100 dark:bg-gray-900 py-16 md:py-24 flex flex-col items-center justify-center font-sans">
      <div className="max-w-[1200px] w-full px-4 md:px-8 mx-auto">
        
        {/* Component Title Headers */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <span className="block text-teal-600 text-xs font-bold tracking-wider uppercase mb-3">
            Continuous Assurance
          </span>
          <h2 className="text-slate-900 dark:text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-tight sm:leading-10 tracking-tight mb-5">
            Prove That Controls Are Working — Continuously
          </h2>
          <p className="text-slate-500 dark:text-white text-base sm:text-lg font-normal leading-7 whitespace-pre-line">
            Deployment is not compliance. ZoikoTime continuously validates that{"\n"}
            every control is functioning correctly — answering the question that{"\n"}
            regulators and auditors always ask.
          </p>
        </div>

        {/* Responsive Grid Matrix Block */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl md:max-w-none mx-auto">
          {validationCards.map((card, index) => (
            <ControlValidationCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              footerText={card.footerText}
            />
          ))}
        </div>

      </div>
    </section>
    <section className="w-full min-h-[740px] bg-slate-100 dark:bg-gray-900 py-16 lg:py-24 flex items-center justify-center font-sans">
      <div className="w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        
        {/* Left Side: Copy and Status Cards */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <span className="block text-teal-600 text-xs font-bold tracking-wider uppercase mb-3">
            Regulatory Inspection
          </span>
          <h2 className="text-slate-900 dark:text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-tight sm:leading-10 tracking-tight mb-5 whitespace-pre-line">
            What a Regulator Sees When{"\n"}They Come
          </h2>
          <p className="text-slate-500 dark:text-white text-base font-normal leading-7 mb-10 whitespace-pre-line">
            When a regulator, auditor, or legal counsel requests{"\n"}
            workforce records, ZoikoTime generates a fully structured,{"\n"}
            tamper-evident evidence package — immediately, without{"\n"}
            manual preparation.
          </p>

          {/* Status Indicators List */}
          <div className="flex flex-col gap-3 max-w-[492px] w-full">
            {readinessItems.map((item, index) => (
              <div 
                key={index} 
                className="w-full h-auto min-h-14 bg-white dark:bg-gray-900 rounded-lg shadow-[0px_1px_2px_0px_rgba(13,21,38,0.04),0px_1px_4px_0px_rgba(13,21,38,0.06)] border border-slate-200 dark:border-gray-700 flex items-center justify-between px-4 sm:px-[22px] py-2 gap-2"
              >
                <span className="text-slate-700 dark:text-white text-sm font-semibold leading-6">
                  {item}
                </span>
                <span className="bg-emerald-50 dark:bg-gray-900 text-teal-600 text-xs font-bold px-3 py-0.5 rounded-full min-w-[56px] text-center shrink-0">
                  Ready
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Document Package Generator Panel */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end w-full">
          <div className="w-full max-w-[492px] bg-white dark:bg-gray-900 rounded-2xl shadow-[0px_4px_24px_0px_rgba(0,157,140,0.10)] border-2 border-teal-600/20 overflow-hidden flex flex-col">
            
            {/* Box Header Section */}
            <div className="bg-teal-600 p-6 border-b border-white/10 text-white">
              <h3 className="text-sm font-bold leading-6 flex items-center gap-1.5">
                <span>📁</span> Regulatory Inspection Package — Auto-Generated
              </h3>
              <p className="text-white/60 text-xs font-normal leading-5 mt-1">
                Structured for submission to regulatory authority — immediately available
              </p>
            </div>

            {/* Content Verification Rows */}
            <div className="flex-1 divide-y divide-slate-200 dark:divide-gray-700">
              {packageItems.map((item, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col sm:flex-row items-start sm:justify-between gap-1 sm:gap-0 px-6 py-4 bg-white dark:bg-gray-900 ${
                    index === 0 || index === 3 || index === 4 ? 'min-h-[64px]' : 'min-h-[48px]'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <span className="size-5 bg-emerald-50 dark:bg-gray-900 rounded-full flex items-center justify-center text-teal-600 text-xs font-bold mt-0.5 shrink-0 select-none">
                      ✓
                    </span>
                    <span className="text-slate-900 dark:text-white text-xs font-semibold leading-5 whitespace-pre-line">
                      {item.title}
                    </span>
                  </div>
                  <span className="text-slate-500 dark:text-white text-xs font-normal leading-5 whitespace-nowrap pl-8 sm:pl-4">
                    {item.format}
                  </span>
                </div>
              ))}
            </div>

            {/* Box Bottom Generation Bar */}
            <div className="bg-emerald-50 dark:bg-gray-900 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-teal-700 text-xs font-semibold leading-5 max-w-[288px] whitespace-pre-line text-center sm:text-left">
                ⏱ Package generated in &lt;4 minutes — no manual{"\n"}preparation required
              </p>
              <button className="bg-teal-600 hover:bg-teal-700 transition-colors text-white text-xs font-bold py-2 px-4 rounded-lg flex flex-col items-center justify-center text-center shrink-0 shadow-sm leading-tight">
                <span>↓ Generate</span>
                <span>Package</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
    
    
<section className="w-full min-h-[571px] bg-slate-50 dark:bg-gray-900 py-16 md:py-20 flex flex-col items-center justify-center font-sans">
      <div className="w-full max-w-[1200px] px-4 md:px-8 mx-auto">
        
        {/* Top Header Information Layout */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <span className="block text-teal-600 text-xs font-bold tracking-wider uppercase mb-3">
            Incident Response
          </span>
          <h2 className="text-slate-900 dark:text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-tight sm:leading-10 tracking-tight mb-5">
            When Compliance Is at Risk — The System Responds
          </h2>
          <p className="text-slate-500 dark:text-white text-base sm:text-lg font-normal leading-7 max-w-2xl mx-auto whitespace-pre-line">
            Real-world compliance events are detected, evidenced, and{"\n"}
            responded to automatically — meeting regulator expectations for{"\n"}
            active, not passive, governance.
          </p>
        </div>

        {/* Modular Grid Panel Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
          {incidentCards.map((card, index) => (
            <IncidentCard 
              key={index} 
              title={card.title} 
              steps={card.steps} 
            />
          ))}
        </div>

      </div>
    </section>
    <section className="w-full min-h-[600px] sm:min-h-[876px] bg-slate-100 dark:bg-gray-900 py-16 md:py-24 flex items-center justify-center font-sans select-none">
      <div className="w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Header Block */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <span className="block text-teal-600 text-xs font-bold tracking-wider uppercase mb-3">
            Explainability
          </span>
          <h2 className="text-slate-900 dark:text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-tight sm:leading-10 tracking-tight mb-5">
            Every Action Can Be Explained — Line by Line
          </h2>
          <p className="text-slate-500 dark:text-white text-base sm:text-lg font-normal leading-7 max-w-2xl mx-auto whitespace-pre-line">
            Audit, legal, and regulatory readiness requires explainability — not just{"\n"}
            records. Every ZoikoTime decision includes the input, policy, control, AI{"\n"}
            reasoning, and evidence output.
          </p>
        </div>

        {/* Matrix Flex Containers */}
        <div className="w-full flex flex-col md:flex-row justify-center items-center md:items-start gap-8 lg:gap-12">
          {records.map((card, cardIdx) => (
            <div 
              key={cardIdx} 
              className="w-full max-w-[508px] bg-white dark:bg-gray-900 rounded-2xl shadow-[0px_4px_16px_0px_rgba(13,21,38,0.08),0px_1px_4px_0px_rgba(13,21,38,0.04)] border border-slate-200 dark:border-gray-700 overflow-hidden flex flex-col"
            >
              {/* Card Title Header */}
              <div className="bg-slate-100 dark:bg-gray-900 border-b border-slate-200 dark:border-gray-700 px-6 py-4.5 flex items-center min-h-[56px]">
                <h3 className="text-slate-900 dark:text-white text-xs font-bold tracking-wide">
                  {card.title}
                </h3>
              </div>

              {/* Rows Mapping Block */}
              <div className="flex-1 flex flex-col divide-y divide-slate-200 dark:divide-gray-700">
                {card.rows.map((row, rowIdx) => (
                  <div key={rowIdx} className="flex px-4 sm:px-6 py-4 items-start gap-4 sm:gap-6 min-h-[64px]">
                    <span className="w-14 sm:w-16 text-slate-400 text-xs font-bold uppercase tracking-wide shrink-0 pt-0.5">
                      {row.label}
                    </span>
                    <p className={`flex-1 text-xs leading-5 whitespace-pre-line ${row.isHighlight ? 'text-teal-600 font-semibold' : 'text-slate-700 dark:text-white font-normal'}`}>
                      {row.content}
                    </p>
                  </div>
                ))}

                {/* Fixed Structural Footer Row */}
                <div className="flex px-4 sm:px-6 py-5 items-start gap-4 sm:gap-6 min-h-[76px]">
                  <span className="w-14 sm:w-16 text-slate-400 text-xs font-bold uppercase tracking-wide shrink-0 pt-0.5">
                    Evidence
                  </span>
                  <div className="flex-1 text-slate-700 dark:text-white text-xs font-normal leading-5">
                    <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
                      <span>Record</span>
                      <span className="bg-emerald-50 dark:bg-gray-900 px-1.5 py-0.5 rounded text-teal-700 font-mono text-[11px]">
                        {card.evidenceId}
                      </span>
                      <span className="whitespace-pre-line">{card.evidenceSuffix}</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    <section className="w-full max-w-7xl mx-auto px-4 py-16 bg-slate-50 dark:bg-gray-900 text-center">
      {/* Header Section */}
      <div className="flex flex-col items-center mb-14">
        <span className="text-xs font-bold text-teal-600 uppercase tracking-wider leading-5 mb-2">
          Board-Level Assurance
        </span>
        <h2 className="max-w-4xl text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight sm:leading-10 mb-4">
          Confidence at the Executive and Board Level
        </h2>
        <p className="max-w-[573px] text-base md:text-lg font-normal text-slate-500 dark:text-white leading-7">
          Four stakeholders, four critical needs — ZoikoTime provides the
          verified governance confidence that audit committees, boards, and
          executive teams require.
        </p>
      </div>

      {/* Stakeholders Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {stakeholders.map((item, index) => (
          <div
            key={index}
            className="relative w-full max-w-[240px] h-auto min-h-[320px] bg-white dark:bg-gray-900 rounded-2xl border border-slate-200 dark:border-gray-700 shadow-[0_1px_2px_rgba(13,21,38,0.04),0_1px_4px_rgba(13,21,38,0.06)] overflow-hidden flex flex-col items-center px-6 pb-6 pt-11 text-center"
          >
            {/* Top Teal Gradient Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-600 to-teal-500" />
            
            {/* Role Category */}
            <span className="text-xs font-bold text-teal-600 uppercase tracking-wider leading-5 mb-3">
              {item.role}
            </span>

            {/* Feature Title */}
            <h3 className="text-base font-bold text-slate-900 dark:text-white whitespace-pre-line leading-7 mb-auto flex items-center justify-center min-h-[56px]">
              {item.title}
            </h3>

            {/* Core Description Text */}
            <p className="text-xs font-normal text-slate-500 dark:text-white leading-5 mt-auto">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
    <section className="w-full bg-slate-100 dark:bg-gray-900 py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20">
          <span className="block text-xs font-bold text-teal-600 uppercase tracking-wider leading-5 mb-3">
            By Industry
          </span>
          <h2 className="max-w-4xl mx-auto text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight mb-4">
            Regulatory Requirements by Industry
          </h2>
          <p className="max-w-[598px] mx-auto text-base md:text-lg font-normal text-slate-500 dark:text-white leading-7">
            Each regulated industry has distinct compliance requirements —
            ZoikoTime is configured for each, with the same continuous verification
            and evidence infrastructure underpinning all.
          </p>
        </div>

        {/* Content Section Split: Info vs Requirements Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Side: Industry Description & Pill Badges */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-tight sm:leading-10 mb-4">
              Healthcare & Life Sciences
            </h3>
            <p className="text-base font-normal text-slate-500 dark:text-white leading-6 mb-8 max-w-[480px]">
              CQC, NHS, MHRA — healthcare workforce governance demands
              verified shift records, staffing ratio compliance, and audit-ready
              documentation that can withstand regulatory inspection at any time.
            </p>
            
            {/* Badges Container */}
            <div className="flex flex-wrap gap-2.5 max-w-[520px]">
              {tags.map((tag, index) => (
                <div 
                  key={index} 
                  className="px-[15px] py-[7px] bg-emerald-50 dark:bg-gray-900 rounded-full border border-teal-600/20 shadow-sm"
                >
                  <span className="text-teal-700 text-xs font-bold leading-5 whitespace-nowrap">
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: ZoikoTime Requirements Response Cards */}
          <div className="lg:col-span-7 space-y-4 w-full">
            {requirements.map((item, index) => (
              <div 
                key={index}
                className="w-full bg-white dark:bg-gray-900 rounded-lg border border-slate-200 dark:border-gray-700 p-6 md:px-9 md:py-5 shadow-[0px_1px_2px_rgba(13,21,38,0.04),0px_1px_4px_rgba(13,21,38,0.06)] transition-all duration-200 hover:shadow-md"
              >
                <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-6 mb-1.5">
                  {item.title}
                </h4>
                <p className="text-xs font-normal text-slate-500 dark:text-white leading-5 max-w-[420px]">
                  {item.response}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
    <section className="w-full bg-slate-50 dark:bg-gray-900 max-w-7xl mx-auto px-4 py-16 text-center">
      {/* Top Heading/Metadata block */}
      <div className="flex flex-col items-center mb-16">
        <span className="text-xs font-bold text-teal-600 uppercase tracking-wider leading-5 mb-3">
          Human-in-Command
        </span>
        <h2 className="max-w-[686px] text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight sm:leading-10 mb-4">
          Governance With Human Accountability
        </h2>
        <p className="max-w-[598px] text-base md:text-lg font-normal text-slate-500 dark:text-white leading-7">
          ZoikoTime enforces and validates controls automatically — but humans
          retain oversight and decision authority at every consequential point.
          The system governs; humans are accountable.
        </p>
      </div>

      {/* Grid Structure for Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        {accountabilityCards.map((card, index) => (
          <div
            key={index}
            className="w-full max-w-[320px] h-auto min-h-[320px] bg-white dark:bg-gray-900 rounded-xl border border-slate-200 dark:border-gray-700 p-6 flex flex-col items-center justify-start text-center shadow-[0px_1px_2px_rgba(13,21,38,0.04),0px_1px_4px_rgba(13,21,38,0.06)] overflow-hidden"
          >
            {/* Visual Icon Header */}
            <div className="text-4xl h-16 flex items-center justify-center mb-5 select-none">
              {card.icon}
            </div>

            {/* Core Label */}
            <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-7 mb-3.5">
              {card.title}
            </h3>

            {/* Content Context Description */}
            <p className="text-sm font-normal text-slate-500 dark:text-white leading-6 max-w-[256px]">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
    <section className="w-full bg-slate-100 dark:bg-gray-900 py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-16 md:mb-20">
          <span className="block text-xs font-bold text-teal-600 uppercase tracking-wider leading-5 mb-3">
            Category Separation
          </span>
          <h2 className="max-w-4xl mx-auto text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight mb-4">
            Why Legacy Tools Cannot Satisfy Regulators
          </h2>
          <p className="max-w-[561px] mx-auto text-base md:text-lg font-normal text-slate-500 dark:text-white leading-7">
            Legacy tools were built for operational tracking — not regulatory
            defence. The capabilities that matter to regulators are absent from
            every major incumbent platform.
          </p>
        </div>

        {/* --- Main Content Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Side: Industry Profile & Badges */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <span className="block text-xs font-bold text-teal-600 uppercase tracking-wider mb-2">
              By Industry
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-tight sm:leading-10 mb-4">
              Healthcare & Life Sciences
            </h3>
            <p className="text-base font-normal text-slate-500 dark:text-white leading-6 mb-8 max-w-[480px]">
              CQC, NHS, MHRA — healthcare workforce governance demands
              verified shift records, staffing ratio compliance, and audit-ready
              documentation that can withstand regulatory inspection at any time.
            </p>
            
            {/* Pill Badges */}
            <div className="flex flex-wrap gap-2 max-w-[520px]">
              {COMPLIANCE_TAGS.map((tag, index) => (
                <div 
                  key={index} 
                  className="px-3.5 py-1.5 bg-emerald-50 dark:bg-gray-900 rounded-full border border-teal-600/20 shadow-sm"
                >
                  <span className="text-teal-700 text-xs font-bold leading-5 whitespace-nowrap">
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Matrix Table */}
          <div className="lg:col-span-8 w-full bg-white dark:bg-gray-900 rounded-2xl border border-slate-200 dark:border-gray-700 shadow-[0px_1px_4px_rgba(13,21,38,0.04),0px_4px_16px_rgba(13,21,38,0.08)] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full table-fixed min-w-[640px] border-collapse text-left">
                
                {/* Table Head */}
                <thead>
                  <tr className="bg-slate-100 dark:bg-gray-900 border-b border-slate-200 dark:border-gray-700">
                    <th className="w-[55%] px-6 py-4 text-sm font-bold text-slate-900 dark:text-white">
                      Regulatory Capability
                    </th>
                    <th className="w-[22.5%] px-4 py-4 text-center text-sm font-bold text-slate-500 dark:text-white">
                      Legacy Tools
                    </th>
                    <th className="w-[22.5%] px-4 py-4 text-center text-sm font-bold text-teal-600 bg-emerald-50/50 dark:bg-gray-900">
                      ZoikoTime®
                    </th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                  {COMPARISON_MATRIX.map((row, index) => (
                    <tr 
                      key={index}
                      className={`${
                        index % 2 === 1 ? 'bg-gray-50/60 dark:bg-gray-900' : 'bg-white dark:bg-gray-900'
                      } ${index !== COMPARISON_MATRIX.length - 1 ? 'border-b border-slate-200 dark:border-gray-700' : ''}`}
                    >
                      {/* Capability Descriptor */}
                      <td className="px-6 py-4 text-sm font-normal text-slate-700 dark:text-white leading-relaxed">
                        {row.capability}
                      </td>

                      {/* Legacy Tools Column */}
                      <td className="px-4 py-4 text-center text-lg font-normal text-slate-400 select-none">
                        {row.legacy ? '✓' : '✗'}
                      </td>

                      {/* ZoikoTime Highlighted Column */}
                      <td className="px-4 py-4 text-center text-lg font-bold text-teal-600 bg-teal-600/[0.02] select-none">
                        {row.zoikoTime ? '✓' : '✗'}
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
          </div>

        </div>

      </div>
    </section>
    <section className="w-full min-h-[500px] sm:min-h-[588px] relative bg-emerald-50 dark:bg-gray-900 overflow-hidden py-16 sm:py-20 flex flex-col items-center justify-center font-sans select-none">
      {/* Top Decorative Gradient Bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600" />

      <div className="w-full max-w-[1200px] px-4 sm:px-6 mx-auto flex flex-col items-center text-center">
        
        {/* Uppermost Sub-badge */}
        <span className="text-teal-500 text-xs font-bold tracking-wider uppercase mb-6 block">
          The Standard
        </span>

        {/* Main Split-Color Heading */}
        <h2 className="text-slate-900 dark:text-white text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight sm:leading-10 tracking-tight max-w-[600px] mb-6">
          If You Cannot Defend It to a<br />
          Regulator, <span className="text-teal-500">It Is Not Compliant</span>
        </h2>

        {/* Central Explainer Copy */}
        <p className="text-slate-900/60 dark:text-white text-base font-normal leading-7 max-w-[700px] mb-10 whitespace-pre-line">
          ZoikoTime provides the continuous compliance controls, validation evidence, and{"\n"}
          audit-ready documentation needed to defend your workforce governance under any{"\n"}
          regulatory scrutiny.
        </p>

        {/* Action Button Blocks */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full px-4">
          {/* Primary Demo Button */}
          <button className="w-full sm:w-64 h-12 bg-teal-600 hover:bg-teal-700 transition-colors rounded-lg shadow-[0px_4px_14px_0px_rgba(0,157,140,0.40)] border border-teal-600 text-white text-base font-semibold flex items-center justify-center">
            Request Regulator Demo
          </button>

          {/* Secondary Expert Button */}
          <button className="w-full sm:w-72 h-12 hover:bg-teal-600/5 transition-colors rounded-lg border border-teal-600 text-teal-600 text-base font-medium flex items-center justify-center">
            Speak to Compliance Expert
          </button>
        </div>

      </div>
    </section>
    </main>
  );
}