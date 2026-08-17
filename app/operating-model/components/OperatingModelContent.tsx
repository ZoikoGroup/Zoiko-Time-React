"use client";

import React, { useState } from "react";
import { Poppins } from "next/font/google";

import OperatingModelHero from "./OperatingModelHero";
import IntroSection from "./IntroSection";
import StageSelector from "./StageSelector";
import StageDetails from "./StageDetails";
import StageInfoBar from "./StageInfoBar";
import TransitionDiagram from "./TransitionDiagram";
import OperatingModelCTA from "./OperatingModelCTA";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

interface Stage {
  number: string;
  shortName: string;
  subtitle: string;
  badge: string;
  title: string;
  desc: string;
  actors: string;
  inputs: string;
  boundaryLabel: string;
  boundaryText: string;
  treatmentLabel: string;
  treatmentText: string;
  states: { name: string; color: string }[];
  cardTitle: string;
  cardSubtitle: string;
  cardStatus: string;
  cardUrl: string;
  cardFields: { label: string; value: string }[];
  cardFooter: string;
  cardAction?: string;
  isControlCenter?: boolean;
  isExceptionResolver?: boolean;
  isAssuranceLedger?: boolean;
  isOptimizationConsole?: boolean;
  historicalIntegrity?: string;
  info: {
    version: string;
    sources: string;
    timezone: string;
    owner: string;
    state: string;
    privacy: string;
  };
}

const stagesData: Stage[] = [
  {
    number: "01",
    shortName: "Define",
    subtitle: "Approved Context",
    badge: "STAGE 01 / OPERATING CORE",
    title: "Define expectations and privacy constraints",
    desc: "Establish the approved operating context before any schedule, attendance or time record is interpreted. Clean alignments protect privacy and build foundational transparency.",
    actors: "Organization policy owner, authorized platform administrator, security/privacy compliance reviewer.",
    inputs: "Work models, eligible teams, timezone basis, schedule compliance bounds, authorized data integrations.",
    boundaryLabel: "Human Authority",
    boundaryText: "Authorized people publish policy alterations. The platform validates syntactic consistency, never deciding legal sufficiency.",
    treatmentLabel: "Worker Treatment",
    treatmentText: "Workers receive full, plain-language notices detailing exact data regions and explicit boundary settings.",
    states: [
      { name: "Active", color: "emerald" },
      { name: "Needs Review", color: "orange" },
      { name: "Draft", color: "indigo" },
      { name: "Scheduled", color: "gray" },
      { name: "Superseded", color: "gray" }
    ],
    cardTitle: "Work Model Editor",
    cardSubtitle: "Configuration Rule: EMEA Engineering Core",
    cardStatus: "ACTIVE",
    cardUrl: "zoikotime.com/dashboard/policy/emea-engineering",
    cardFields: [
      { label: "Expectation Version", value: "Version v2.4 (Approved)" },
      { label: "Effective From", value: "2026-03-01 · 00:00 UTC" },
      { label: "Workforce Scope", value: "EMEA Engineering & Operations" },
      { label: "Time Zone Basis", value: "Worker Local Time Zone" },
      { label: "Privacy Guard Mode", value: "Standard Redaction Enforced" },
      { label: "Authorized Sources", value: "Slack Activity, Google Calendar, Active Directory" }
    ],
    cardFooter: "Verified by security and compliance. Change history recorded.",
    info: {
      version: "v2.4-EMEA",
      sources: "SSO + Calendar",
      timezone: "UTC+1 Local",
      owner: "Compliance Admin",
      state: "Active / Published",
      privacy: "Standard Guard"
    }
  },
  {
    number: "02",
    shortName: "Assign & Publish",
    subtitle: "Expectation Baseline",
    badge: "STAGE 02 / OPERATING MODEL",
    title: "Assign & Publish expectations cleanly",
    desc: "Bind the approved work model to a defined worker/team scope, publish the schedule or recurring pattern, and record delivery without treating receipt as consent.",
    actors: "Authorized scheduler/workforce admin; manager within scope; worker receives assigned expectation.",
    inputs: "Active work-model version, assignment scope, recurrence, local date/time, site/context, exception eligibility, notice channel.",
    boundaryLabel: "Important Boundary",
    boundaryText: "Published schedule ≠ approved time record. Notification delivered ≠ worker agreement. No-response ≠ misconduct.",
    treatmentLabel: "Source Evidence",
    treatmentText: "Assignment ID/version, work-model reference, schedule version, publisher, publish time, delivery attempts, acknowledgment state.",
    states: [
      { name: "DRAFT", color: "indigo" },
      { name: "SCHEDULED TO PUBLISH", color: "orange" },
      { name: "PUBLISHED", color: "emerald" },
      { name: "DELIVERY PENDING", color: "gray" },
      { name: "DELIVERED", color: "gray" },
      { name: "FAILED", color: "gray" },
      { name: "REPLACED", color: "gray" },
      { name: "CANCELED", color: "gray" },
      { name: "PARTIALLY APPLICABLE", color: "gray" }
    ],
    cardTitle: "Assignment Drawer",
    cardSubtitle: "EMEA Frontend Team Expectations",
    cardStatus: "ACTIVE / PUBLISHED",
    cardUrl: "zoikotime.com/dashboard/schedules/emea-front",
    cardFields: [
      { label: "Effective Period", value: "March 1 - March 31, 2024" },
      { label: "Local Timezone", value: "UTC+1 Berlin (Europe/Berlin)" },
      { label: "Version Control", value: "v3.1 (Approved Model)" },
      { label: "Assigned Scope", value: "EMEA Frontend Team (14 members)" },
      { label: "Publication Status", value: "Published to Notice Channel" },
      { label: "Delivery Performance", value: "Delivered 94% (13/14 Acknowledged)" }
    ],
    cardFooter: "Worker can review own current/past assignment, request permitted change/exception without friction.",
    info: {
      version: "v3.1-EMEA",
      sources: "Roster Sync",
      timezone: "Europe/Berlin",
      owner: "Schedule Admin",
      state: "Active / Published",
      privacy: "Notice Gate"
    }
  },
  {
    number: "03",
    shortName: "Declare & Capture",
    subtitle: "Source Signals",
    badge: "STAGE 03 / OPERATING MODEL",
    title: "Declare & Capture source-linked inputs",
    desc: "Collect only permitted work context and source-linked time/availability inputs, preserving what each source can and cannot prove.",
    actors: "Worker, approved time-capture service, authorized integration/service identity, administrator for source config.",
    inputs: "Worker declaration, time event, schedule context, approved availability, configured source event, optional coarse site/context.",
    boundaryLabel: "Privacy Boundary",
    boundaryText: "Declared context and source-based presence context remain separate. Exact GPS, biometric, Wi-Fi, badge, booking or device claims render only when approved.",
    treatmentLabel: "Source Evidence",
    treatmentText: "Event ID, source type, source authority, local/UTC timestamp, receipt time, freshness, visibility, limitation.",
    states: [
      { name: "NOT STARTED", color: "gray" },
      { name: "CAPTURED", color: "emerald" },
      { name: "QUEUED", color: "indigo" },
      { name: "SYNCED", color: "emerald" },
      { name: "DELAYED", color: "indigo" },
      { name: "STALE", color: "gray" },
      { name: "SOURCE UNAVAILABLE", color: "gray" },
      { name: "CORRECTED", color: "gray" },
      { name: "RESTRICTED", color: "gray" },
      { name: "UNKNOWN RESULT", color: "gray" }
    ],
    cardTitle: "My Workday / Capture",
    cardSubtitle: "Worker: Sarah Jenkins (Berlin)",
    cardStatus: "CAPTURED / SYNCED",
    cardUrl: "zoikotime.com/worker/dashboard/capture",
    cardFields: [
      { label: "Expected Context", value: "Remote - Home Office" },
      { label: "Selected Declaration", value: "Working from Home (Active)" },
      { label: "Source Status", value: "Google Calendar Sync (Success)" },
      { label: "Local Time (CET)", value: "09:14 CET" },
      { label: "UTC Clock Reference", value: "08:14 UTC" },
      { label: "Sync Integrity State", value: "Current / Fresh" }
    ],
    cardAction: "Edit/Correct Entry",
    cardFooter: "Source and collection explanation visible; absolute zero screenshot, keystroke, or URL history collection.",
    info: {
      version: "v3.1-Sarah",
      sources: "GCal + Check-in",
      timezone: "Europe/Berlin",
      owner: "Worker Signature",
      state: "Captured / Synced",
      privacy: "Zero Spyware"
    }
  },
  {
    number: "04",
    shortName: "Validate & Coordinate",
    subtitle: "Symmetry Checking",
    badge: "STAGE 04 / OPERATING MODEL",
    title: "Validate & Coordinate neutral symmetries",
    desc: "Compare configured expectations with available records and team coverage while keeping data-quality uncertainty neutral.",
    actors: "System validation service, operations/manager, worker for clarification, source/integration admin.",
    inputs: "Pattern version, schedule version, declarations, time events, availability, source context, time-zone rules, coverage requirement.",
    boundaryLabel: "System Boundary",
    boundaryText: "Validation detects consistency, missing context, timing/source conflicts. It does not determine fault, misconduct, productivity, legal compliance or employment outcome.",
    treatmentLabel: "Source Evidence",
    treatmentText: "Validation check/version, compared objects, result, reason/explanation, source health, missing data, owner/next action.",
    states: [
      { name: "VALIDATED", color: "emerald" },
      { name: "NEEDS CONTEXT", color: "orange" },
      { name: "MISSING SOURCE", color: "gray" },
      { name: "SOURCE DELAYED", color: "gray" },
      { name: "CONFLICT", color: "orange" },
      { name: "COVERAGE GAP", color: "gray" },
      { name: "POLICY MISMATCH", color: "gray" },
      { name: "SCHEDULE CHANGED", color: "gray" },
      { name: "REVIEW REQUIRED", color: "gray" },
      { name: "NOT APPLICABLE", color: "gray" }
    ],
    cardTitle: "Control Center",
    cardSubtitle: "EMEA Team Live Coordination Grid",
    cardStatus: "VALIDATED & SYMMETRIC",
    cardUrl: "zoikotime.com/dashboard/ops/validate",
    cardFields: [
      { label: "Active Validation Version", value: "v2.09 (Neutral Rule-set)" },
      { label: "Calendar Source Health", value: "96% Healthy Sync Rate" },
      { label: "Access Control Health", value: "94% Match Accuracy" },
      { label: "Declaration Validation", value: "100% Core Symmetries Checked" }
    ],
    cardFooter: "When worker action is required, show exactly what information is missing, why requested, who reviews, and how to get help.",
    isControlCenter: true,
    info: {
      version: "v2.09-EMEA",
      sources: "Rules Engine",
      timezone: "Worker Local",
      owner: "Validation Service",
      state: "Validated / Checked",
      privacy: "Data Symmetry"
    }
  },
  {
    number: "05",
    shortName: "Review & Decide",
    subtitle: "Exception Resolving",
    badge: "STAGE 05 / HUMAN INTERVENTION",
    title: "Review & Decide",
    desc: "Move consequential exceptions into an accountable human workflow with worker context, evidence, reasoned decisions and review history.",
    actors: "Authorized manager/reviewer, payroll/time operations, HR/workforce governance, worker, specialist privacy/security reviewer for sensitive cases.",
    inputs: "Neutral exception, relevant schedule/policy/source context, worker response, permitted evidence, authority and separation-of-duties rules.",
    boundaryLabel: "Human Authority",
    boundaryText: "Only an authorized human records consequential approval/rejection/correction outcome. Automation may route, validate or summarize, but is not the decision-maker.",
    treatmentLabel: "Evidence Captured",
    treatmentText: "Review start, assignee, evidence viewed, worker input, decision, rationale, conditions, decision time, notice, supersession/reopen link.",
    states: [
      { name: "AWAITING WORKER", color: "orange" },
      { name: "READY FOR REVIEW", color: "indigo" },
      { name: "IN REVIEW", color: "orange" },
      { name: "NEEDS INFORMATION", color: "orange" },
      { name: "REASSIGNED", color: "gray" },
      { name: "APPROVED", color: "emerald" },
      { name: "REJECTED", color: "red" },
      { name: "PARTIALLY APPROVED", color: "orange" }
    ],
    cardTitle: "Exception Resolver",
    cardSubtitle: "Flagged Exception ID: EX-40892",
    cardStatus: "REVIEW IN PROGRESS",
    cardUrl: "zoikotime.com/ops/exceptions/8821",
    cardFields: [
      { label: "Issue Summary", value: "Schedule conflict — declared remote but expected onsite" },
      { label: "Verified Sources", value: "SSO, Active Directory, Wi-Fi Access Controller" },
      { label: "Historical Policy Basis", value: "v2.3 Core EMEA Policy Ruleset" },
      { label: "Worker Response", value: "Submitted context — approved WFH for medical appointment" },
      { label: "Review Authority", value: "Manager L2 Sign-off Required" }
    ],
    cardFooter: "Worker sees own relevant request/status/decision/reason and correction/escalation/support path.",
    isExceptionResolver: true,
    info: {
      version: "v1.1-EX40892",
      sources: "Manager Sign-off",
      timezone: "Europe/Berlin",
      owner: "Team Manager",
      state: "Under Review",
      privacy: "Contextual Transp."
    }
  },
  {
    number: "06",
    shortName: "Approve & Reconcile",
    subtitle: "Final Verification",
    badge: "STAGE 06 / DOWNSTREAM DISPATCH",
    title: "Approve & Reconcile",
    desc: "Finalize the permitted current version and make downstream delivery/reconciliation state explicit without claiming that sent means accepted.",
    actors: "Authorized approver, payroll/time operations, integration/service identity, reconciliation owner.",
    inputs: "Reviewed outcome, approved time/schedule version, target mapping, destination availability, cutover/period status.",
    boundaryLabel: "Governance Boundary",
    boundaryText: "Approved ZoikoTime record does not prove payroll calculation, statutory compliance, billing correctness or external-system acceptance.",
    treatmentLabel: "Evidence Captured",
    treatmentText: "Approval event, approver, version, release time, payload reference, target, delivery attempt, acknowledgment, acceptance/rejection, reconciliation event.",
    states: [
      { name: "APPROVED", color: "emerald" },
      { name: "RELEASE QUEUED", color: "orange" },
      { name: "SENT", color: "indigo" },
      { name: "ACKNOWLEDGED", color: "emerald" },
      { name: "ACCEPTED", color: "emerald" },
      { name: "RECONCILIATION PENDING", color: "orange" },
      { name: "RECONCILED", color: "emerald" },
      { name: "FAILED", color: "red" }
    ],
    cardTitle: "Assurance Ledger",
    cardSubtitle: "EMEA Pay Period: Mar 1 - Mar 15, 2026",
    cardStatus: "RECONCILED & LOCKED",
    cardUrl: "zoikotime.com/ops/integrations/sf-sync",
    cardFields: [
      { label: "Approved Output Version", value: "v4.2 Final Sign-Off" },
      { label: "Reconciliation Destination", value: "SAP SuccessFactors — EMEA Payroll" },
      { label: "System Mapping Schema", value: "SF-EMEA v1.8 Standard Template" }
    ],
    cardFooter: "Worker-facing downstream state remains plain language and limited to permitted information.",
    isAssuranceLedger: true,
    info: {
      version: "v4.0-Lock26",
      sources: "Ledger System",
      timezone: "UTC Basis",
      owner: "Payroll Director",
      state: "Locked / Exported",
      privacy: "Immutable Audit"
    }
  },
  {
    number: "07",
    shortName: "Improve",
    subtitle: "Feedback Optimization",
    badge: "STAGE 07 / OPTIMIZATION LOOP",
    title: "Improve",
    desc: "Use aggregate operational evidence to improve future policy, coverage and source quality without ranking people or rewriting historical records.",
    actors: "Operations/workforce governance, privacy/security, source/integration owner, authorized analysts, policy owner",
    inputs: "Aggregate exception categories, coverage gaps, source reliability, schedule-change frequency, policy clarification requests, reconciliation failures",
    boundaryLabel: "Privacy Boundary",
    boundaryText: "Minimum group thresholds and aggregation rules prevent small-group exposure. No individual productivity, attendance adherence, office-day, online-time or responsiveness score.",
    treatmentLabel: "Evidence Captured",
    treatmentText: "Metric definition/version, aggregation scope, privacy rule, trend period, issue/opportunity, owner, proposed action, review date",
    historicalIntegrity: "Improvement creates a future change/version with effective date. Prior evidence stays historically intact.",
    states: [
      { name: "BASELINE", color: "gray" },
      { name: "MONITORING", color: "indigo" },
      { name: "NEEDS REVIEW", color: "orange" },
      { name: "IMPROVEMENT PROPOSED", color: "indigo" },
      { name: "APPROVED ACTION", color: "emerald" },
      { name: "CLOSED", color: "gray" },
      { name: "SUPPRESSED FOR PRIVACY", color: "red" }
    ],
    cardTitle: "Optimization Console",
    cardSubtitle: "Quarterly Work Model Review",
    cardStatus: "MODEL COMPLIANCE: 96%",
    cardUrl: "zoikotime.com/analytics/improvement",
    cardFields: [], // Not used, rendered dynamically via custom console view
    cardFooter: "Privacy suppression enforced. Groups < 5 members hidden.",
    isOptimizationConsole: true,
    info: {
      version: "v5.0-Planning",
      sources: "Aggregate Analytics",
      timezone: "Multi-Zone",
      owner: "Operations VP",
      state: "Continuous Feedback",
      privacy: "Anonymized Aggs"
    }
  }
];

export default function OperatingModelContent() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const activeStage = stagesData[activeStageIndex];

  const stepsList = stagesData.map(st => ({
    number: st.number,
    shortName: st.shortName,
    subtitle: st.subtitle
  }));

  return (
    <div className={`${poppins.variable} hr-type bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-200 min-h-screen flex flex-col`}>
      {/* 1. HERO SECTION */}
      <OperatingModelHero />

      {/* 2. INTRO/QUOTE SECTION */}
      <IntroSection />

      {/* 3. INTERACTIVE STEP NAVIGATION BAR */}
      <StageSelector 
        activeStageIndex={activeStageIndex}
        onStageSelect={setActiveStageIndex}
        stages={stepsList}
      />

      {/* 4. ACTIVE STAGE DETAIL SECTION */}
      <StageDetails activeStage={activeStage} />

      {/* 5. STAGE INFO SUMMARY BAR */}
      <StageInfoBar info={activeStage.info} />

      {/* 6. FLOW DIAGRAM & FEEDBACK LOOPS */}
      <TransitionDiagram />

      {/* 7. CTA SECTION */}
      <OperatingModelCTA />
    </div>
  );
}
