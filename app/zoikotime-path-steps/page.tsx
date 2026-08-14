"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Clock, ListTodo, ChevronLeft, ChevronRight, Check, Lock } from "lucide-react";

interface Step {
  title: string;
  duration: string;
  desc: string;
  checklist: string[];
}

interface Track {
  name: string;
  badge: string;
  title: string;
  subtitle: string;
  totalTime: string;
  steps: Step[];
}

const tracksData: Track[] = [
  {
    name: "Admin Setup",
    badge: "OWNERS & ADMINS",
    title: "Admin Setup",
    subtitle: "Stand up the organization, assign roles, and draft the first policy pack before anyone else touches the account.",
    totalTime: "~40 min total",
    steps: [
      {
        title: "Confirm organization profile",
        duration: "5 min",
        desc: "Enter your legal entity name, business locations, and time zones. This becomes the source of truth every policy pack references later — get it right once and every role inherits it correctly.",
        checklist: [
          "Legal entity name",
          "Primary locations & time zones",
          "Fiscal / pay period settings"
        ]
      },
      {
        title: "Assign owner & backup admin",
        duration: "5 min",
        desc: "Add at least one backup admin so setup, approvals, and readiness sign-off don't bottleneck on a single person being available.",
        checklist: [
          "Invite backup admin",
          "Set permission scope",
          "Confirm two-factor authentication enabled"
        ]
      },
      {
        title: "Draft first policy pack",
        duration: "15 min",
        desc: "Configure break, rest, and shift rules for your primary jurisdiction. This is a draft — nothing enforces against real shifts until you publish it.",
        checklist: [
          "Select jurisdiction template",
          "Set break/rest thresholds",
          "Save as draft (not published)"
        ]
      },
      {
        title: "Invite HR & IT collaborators",
        duration: "5 min",
        desc: "Loop in the people who'll actually configure rosters, notices, and integrations — admin setup works best as a small team, not a solo effort.",
        checklist: [
          "Invite HR admin",
          "Invite IT admin",
          "Assign each their track access"
        ]
      },
      {
        title: "Enter the sandbox to test rules",
        duration: "10 min",
        desc: "Run your draft policy pack against sample shifts before anything goes live. Anything the system can't resolve confidently gets flagged here, not in production.",
        checklist: [
          "Load draft pack into sandbox",
          "Simulate 3 sample shifts",
          "Review flagged exceptions"
        ]
      }
    ]
  },
  {
    name: "HR Rollout",
    badge: "HR & PEOPLE OPS",
    title: "HR Rollout",
    subtitle: "Bring your roster in, notify workers transparently, and confirm consent before any tracking begins.",
    totalTime: "~30 min total",
    steps: [
      {
        title: "Import worker roster",
        duration: "10 min",
        desc: "Upload or sync your worker list from your HRIS. Each worker record needs a valid role and location to inherit the right policy pack automatically.",
        checklist: [
          "Upload roster file or connect HRIS",
          "Map roles to ZoikoTime role tracks",
          "Resolve any duplicate or missing records"
        ]
      },
      {
        title: "Send worker transparency notice",
        duration: "5 min",
        desc: "Workers should know what's being tracked and why before their first shift under the new system — not find out after the fact.",
        checklist: [
          "Review default notice language",
          "Customize for your organization",
          "Schedule send date"
        ]
      },
      {
        title: "Confirm consent capture",
        duration: "5 min",
        desc: "Where consent is required by your jurisdiction, confirm it's being captured and logged as its own record — not assumed from silence.",
        checklist: [
          "Verify consent capture is enabled",
          "Spot-check one worker's consent record"
        ]
      },
      {
        title: "Coordinate with managers on rollout",
        duration: "10 min",
        desc: "Managers need to know the rollout timeline before their teams do, so questions land with someone prepared to answer them.",
        checklist: [
          "Share rollout schedule with managers",
          "Confirm each manager's track progress"
        ]
      }
    ]
  },
  {
    name: "Manager Rollout",
    badge: "MANAGERS",
    title: "Manager Rollout",
    subtitle: "Get your team scheduled and run a real pilot before going live across the full roster.",
    totalTime: "~25 min total",
    steps: [
      {
        title: "Review your team roster",
        duration: "5 min",
        desc: "Confirm everyone on your team appears correctly, with the right shift patterns and reporting lines.",
        checklist: [
          "Check team member list",
          "Confirm shift patterns",
          "Flag any missing workers to HR"
        ]
      },
      {
        title: "Configure shift schedules",
        duration: "10 min",
        desc: "Set up your team's actual schedule inside ZoikoTime — this is what the classification engine evaluates every clock-in against.",
        checklist: [
          "Build weekly schedule template",
          "Set exception coverage rules"
        ]
      },
      {
        title: "Run a one-week pilot",
        duration: "1 week",
        desc: "Live-test the schedule and policy pack with your team for one full week before rolling out further. This is real usage, not a sandbox — but scoped to a small, known group.",
        checklist: [
          "Announce pilot week to team",
          "Monitor daily for flagged exceptions"
        ]
      },
      {
        title: "Collect team feedback",
        duration: "5 min",
        desc: "Ask the pilot group what felt confusing or wrong before assuming the rollout is ready for everyone else.",
        checklist: [
          "Send short feedback form",
          "Note any recurring issues"
        ]
      },
      {
        title: "Confirm readiness with admin",
        duration: "5 min",
        desc: "Report pilot results to your admin. A wider rollout still needs their sign-off — this isn't automatic.",
        checklist: [
          "Summarize pilot outcomes",
          "Request admin review"
        ]
      }
    ]
  },
  {
    name: "Worker Activation",
    badge: "WORKERS",
    title: "Worker Activation",
    subtitle: "The shortest track — sign in, verify identity, and complete your first shift under the new system.",
    totalTime: "~8 min total",
    steps: [
      {
        title: "Download the ZoikoTime app",
        duration: "2 min",
        desc: "Install the app and sign in with the invite your employer sent. If you didn't get one, ask your manager or HR contact.",
        checklist: [
          "Download from app store",
          "Sign in with invite link"
        ]
      },
      {
        title: "Verify your identity",
        duration: "3 min",
        desc: "A one-time verification step confirms it's really you before your account is activated. This happens once, not every shift.",
        checklist: [
          "Complete identity verification",
          "Set up app PIN or biometric unlock"
        ]
      },
      {
        title: "Review the worker transparency notice",
        duration: "3 min",
        desc: "Read what's tracked, why, and who can see it, before your first shift. You should never be surprised by what the app is doing.",
        checklist: [
          "Read transparency notice",
          "Acknowledge receipt"
        ]
      },
      {
        title: "Complete your first shift",
        duration: "varies",
        desc: "Clock in as normal. Your first shift's evidence is reviewed the same way every shift is — nothing special happens because it's your first.",
        checklist: [
          "Clock in at shift start",
          "Take scheduled break as normal",
          "Clock out at shift end"
        ]
      }
    ]
  },
  {
    name: "Payroll Reviewer Setup",
    badge: "PAYROLL REVIEWERS",
    title: "Payroll Reviewer Setup",
    subtitle: "Connect your payroll system and learn the reviewer queue before your first live export.",
    totalTime: "~25 min total",
    steps: [
      {
        title: "Connect payroll system",
        duration: "10 min",
        desc: "Link your payroll or timesheet system so classified records can flow into your existing process rather than requiring manual re-entry.",
        checklist: [
          "Select payroll integration",
          "Authenticate connection",
          "Confirm field mapping"
        ]
      },
      {
        title: "Learn the reviewer queue",
        duration: "10 min",
        desc: "Every record ZoikoTime can't auto-classify confidently lands here. Understanding the queue now means fewer surprises at your first real export.",
        checklist: [
          "Walk through sample queue items",
          "Understand auto vs. reviewer-routed records"
        ]
      },
      {
        title: "Run a test export",
        duration: "10 min",
        desc: "Generate an export against sandbox data to see exactly what a real export will look like before you rely on it.",
        checklist: [
          "Generate sandbox export",
          "Review export format and fields"
        ]
      },
      {
        title: "Confirm export matches expectations",
        duration: "5 min",
        desc: "Check the test export against what your payroll system expects. Catching a mismatch here costs minutes; catching it in production costs a pay cycle.",
        checklist: [
          "Compare against payroll system format",
          "Flag any mismatches to IT"
        ]
      }
    ]
  },
  {
    name: "IT & Security Setup",
    badge: "IT & SECURITY",
    title: "IT & Security Setup",
    subtitle: "Lock down access and integrations before any other role starts configuring.",
    totalTime: "~40 min total",
    steps: [
      {
        title: "Configure SSO",
        duration: "15 min",
        desc: "Connect your identity provider so access follows your existing org-wide authentication and deprovisioning policies.",
        checklist: [
          "Connect identity provider",
          "Test sign-in with a pilot account"
        ]
      },
      {
        title: "Set data retention rules",
        duration: "10 min",
        desc: "Define how long evidence and records are retained before deletion, in line with your legal and internal requirements.",
        checklist: [
          "Set retention period",
          "Confirm legal hold process"
        ]
      },
      {
        title: "Review integration scopes",
        duration: "10 min",
        desc: "Check exactly what data each connected integration can read or write — least privilege by default, not by exception.",
        checklist: [
          "Audit connected integrations",
          "Restrict unnecessary scopes"
        ]
      },
      {
        title: "Confirm audit log access",
        duration: "5 min",
        desc: "Make sure the right people can see the audit log before you need it under pressure, not after.",
        checklist: [
          "Assign audit log viewers",
          "Spot-check a log entry"
        ]
      }
    ]
  },
  {
    name: "Privacy Review Track",
    badge: "PRIVACY TEAMS",
    title: "Privacy Review Track",
    subtitle: "Review what's collected and approve worker-facing language before launch is possible.",
    totalTime: "~35 min total",
    steps: [
      {
        title: "Review data collection scope",
        duration: "10 min",
        desc: "Confirm exactly what's being collected, from whom, and why — before any of it goes live for a single worker.",
        checklist: [
          "Review data collection inventory",
          "Flag anything outside expected scope"
        ]
      },
      {
        title: "Approve worker notice language",
        duration: "10 min",
        desc: "The worker transparency notice needs your sign-off before HR can send it — plain language, no buried disclosures.",
        checklist: [
          "Review notice draft",
          "Approve or request changes"
        ]
      },
      {
        title: "Confirm retention & deletion policy",
        duration: "10 min",
        desc: "Verify IT's configured retention settings actually match your documented policy, not just what's technically convenient.",
        checklist: [
          "Cross-check retention settings",
          "Confirm deletion request process"
        ]
      },
      {
        title: "Sign off before launch",
        duration: "5 min",
        desc: "Formal sign-off is a required gate, not a formality — launch doesn't proceed without it.",
        checklist: [
          "Record formal sign-off",
          "Notify admin launch is cleared"
        ]
      }
    ]
  },
  {
    name: "Partner Handoff",
    badge: "PARTNERS",
    title: "Partner Handoff",
    subtitle: "Set up a client workspace and prepare a clean handoff to the client's own admin.",
    totalTime: "~55 min total",
    steps: [
      {
        title: "Set up client workspace",
        duration: "10 min",
        desc: "Create the client's workspace under your partner account, scoped so it can be fully transferred later without leaving residual access behind.",
        checklist: [
          "Create client workspace",
          "Set initial branding & locations"
        ]
      },
      {
        title: "Configure handoff checklist",
        duration: "10 min",
        desc: "Prepare the specific list of what the client's admin will need to confirm before you formally hand over ownership.",
        checklist: [
          "Build handoff checklist",
          "Attach relevant documentation"
        ]
      },
      {
        title: "Walk client admin through setup",
        duration: "20 min",
        desc: "Live walkthrough with the client's designated admin — this is where they start taking ownership, not after the fact.",
        checklist: [
          "Schedule walkthrough call",
          "Cover admin setup track together"
        ]
      },
      {
        title: "Transfer ownership to client admin",
        duration: "5 min",
        desc: "Formally transfer ownership so the client admin — not your partner account — holds primary control going forward.",
        checklist: [
          "Transfer owner role",
          "Confirm partner access scope going forward"
        ]
      }
    ]
  }
];

export default function OnboardingPathStepsPage() {
  const [activeTrackIndex, setActiveTrackIndex] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});

  const activeTrack = tracksData[activeTrackIndex];
  const activeStep = activeTrack.steps[currentStepIndex];

  // Deep linking detection
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const roleParam = params.get("role");
      const roleOrder = ["owner", "hr", "manager", "worker", "payroll", "it", "privacy", "partner"];
      if (roleParam) {
        const idx = roleOrder.indexOf(roleParam.toLowerCase());
        if (idx !== -1) {
          setActiveTrackIndex(idx);
          setCurrentStepIndex(0);
        }
      }
    }
  }, []);

  const handleTrackChange = (idx: number) => {
    setActiveTrackIndex(idx);
    setCurrentStepIndex(0);
  };

  const isStepComplete = (trackIdx: number, stepIdx: number): boolean => {
    const step = tracksData[trackIdx].steps[stepIdx];
    return step.checklist.every((_, itemIdx) => checkedItems[`${trackIdx}_${stepIdx}_${itemIdx}`]);
  };

  const isTrackComplete = (trackIdx: number): boolean => {
    const track = tracksData[trackIdx];
    return track.steps.every((_, stepIdx) => isStepComplete(trackIdx, stepIdx));
  };

  const getCompletedStepsCount = (trackIdx: number): number => {
    const track = tracksData[trackIdx];
    let count = 0;
    for (let i = 0; i < track.steps.length; i++) {
      if (isStepComplete(trackIdx, i)) {
        count++;
      }
    }
    return count;
  };

  const getTrackProgressPercent = (trackIdx: number): number => {
    const track = tracksData[trackIdx];
    const completedCount = getCompletedStepsCount(trackIdx);
    return Math.round((completedCount / track.steps.length) * 100);
  };

  const handleCheckboxToggle = (trackIdx: number, stepIdx: number, itemIdx: number) => {
    const key = `${trackIdx}_${stepIdx}_${itemIdx}`;
    setCheckedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleMarkStepComplete = () => {
    const stepDone = isStepComplete(activeTrackIndex, currentStepIndex);
    const updated: { [key: string]: boolean } = { ...checkedItems };
    activeStep.checklist.forEach((_, itemIdx) => {
      updated[`${activeTrackIndex}_${currentStepIndex}_${itemIdx}`] = !stepDone;
    });
    setCheckedItems(updated);

    if (!stepDone && currentStepIndex < activeTrack.steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const handleNextStep = () => {
    if (currentStepIndex < activeTrack.steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen text-slate-900 dark:text-white font-sans transition-colors duration-200 flex flex-col">
      {/* Breadcrumb Bar */}
      <div className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-[1232px] mx-auto px-4 py-3 flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 flex-wrap">
          <Link href="/" className="hover:text-teal-600 transition-colors">Home</Link>
          <span className="text-slate-300 dark:text-slate-700">/</span>
          <Link href="/getting-started" className="hover:text-teal-600 transition-colors">Getting Started</Link>
          <span className="text-slate-300 dark:text-slate-700">/</span>
          <span className="text-slate-900 dark:text-white font-semibold">{activeTrack.title}</span>
        </div>
      </div>

      <div className="max-w-[1232px] mx-auto w-full px-4 py-8 space-y-8 flex-1">
        {/* Top Navigation Pill Bar - Clean Layout */}
        <div className="w-full bg-slate-900 dark:bg-slate-950 rounded-2xl p-3 border border-slate-800/80">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {tracksData.map((track, idx) => {
              const isActive = activeTrackIndex === idx;
              const completedCount = getCompletedStepsCount(idx);
              const totalCount = track.steps.length;

              return (
                <button
                  key={idx}
                  onClick={() => handleTrackChange(idx)}
                  className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                    isActive
                      ? "bg-teal-600 text-white border border-teal-600"
                      : "bg-transparent text-white/70 border border-white/20 hover:bg-white/10"
                  }`}
                >
                  <span>{track.name}</span>
                  <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${
                    isActive ? "bg-white/20 text-white" : "bg-white/10 text-white/70"
                  }`}>
                    {completedCount}/{totalCount}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Section Header & Progress Card */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2 max-w-[640px]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-teal-600 rounded-full animate-pulse" />
              <span className="text-teal-650 dark:text-teal-400 text-xs font-bold uppercase tracking-wide">
                {activeTrack.badge}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-sky-950 dark:text-white tracking-tight">
              {activeTrack.title}
            </h1>
            <p className="text-slate-650 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              {activeTrack.subtitle}
            </p>
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                <Clock className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                <span>{activeTrack.totalTime}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                <ListTodo className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                <span>{activeTrack.steps.length} steps</span>
              </div>
            </div>
          </div>

          {/* Progress Card */}
          <div className="w-full md:w-56 p-5 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-3 shadow-sm">
            <div className="flex justify-between items-center">
              <span className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wide">
                Your Progress
              </span>
              <span className="text-teal-600 dark:text-teal-400 text-lg font-bold">
                {getTrackProgressPercent(activeTrackIndex)}%
              </span>
            </div>
            <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-teal-600 transition-all duration-300 rounded-full"
                style={{ width: `${getTrackProgressPercent(activeTrackIndex)}%` }}
              />
            </div>
            <p className="text-slate-550 dark:text-slate-400 text-xs font-medium">
              {getCompletedStepsCount(activeTrackIndex)} of {activeTrack.steps.length} steps complete
            </p>
          </div>
        </div>

        {/* Steps Sidebar & Step Detail Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sidebar Step List */}
          <div className="lg:col-span-4 rounded-2xl border border-gray-200 dark:border-slate-800 overflow-hidden bg-white dark:bg-slate-900 shadow-sm">
            {activeTrack.steps.map((step, idx) => {
              const isSelected = currentStepIndex === idx;
              const isDone = isStepComplete(activeTrackIndex, idx);

              return (
                <div
                  key={idx}
                  onClick={() => setCurrentStepIndex(idx)}
                  className={`p-4 border-b border-gray-100 dark:border-slate-850 flex items-start gap-3 relative cursor-pointer transition-colors ${
                    isSelected
                      ? "bg-slate-50 dark:bg-slate-800/60"
                      : "hover:bg-slate-50/50 dark:hover:bg-slate-800/20"
                  }`}
                >
                  {isSelected && <div className="w-1 absolute left-0 top-0 bottom-0 bg-teal-600" />}
                  
                  <div className={`w-6 h-6 rounded-xl border flex items-center justify-center shrink-0 transition-colors ${
                    isDone
                      ? "bg-teal-600 border-teal-600 text-white"
                      : isSelected
                      ? "bg-white dark:bg-slate-950 border-teal-600 dark:border-teal-500 text-teal-600 dark:text-teal-400"
                      : "bg-white dark:bg-slate-900 border-gray-250 dark:border-slate-800 text-slate-500"
                  }`}>
                    {isDone ? (
                      <Check className="w-3.5 h-3.5" />
                    ) : (
                      <span className="text-xs font-bold">
                        {idx + 1}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className={`text-sm font-semibold leading-5 ${
                      isDone ? "text-slate-400 dark:text-slate-500 line-through decoration-slate-200 dark:decoration-slate-800" : "text-sky-950 dark:text-white"
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-550 dark:text-slate-400 mt-0.5">
                      {step.duration}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Step Details / Complete Card */}
          <div className="lg:col-span-8">
            {isTrackComplete(activeTrackIndex) ? (
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 rounded-[20px] p-10 text-center text-white border border-slate-800 space-y-6 shadow-md">
                <div className="w-14 h-14 rounded-full bg-teal-500/20 flex items-center justify-center mx-auto text-teal-400">
                  <Check className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold">
                  {activeTrack.title} — all steps complete
                </h2>
                <p className="text-white/70 text-sm leading-relaxed max-w-md mx-auto">
                  Every step in this path is checked off. An admin still needs to review and confirm readiness before anything goes live — completing steps here doesn't launch anything automatically.
                </p>
                <div className="flex justify-center gap-3 flex-wrap pt-2">
                  <Link href="/getting-started#readiness" className="px-6 py-3 bg-teal-650 hover:bg-teal-555 text-white font-semibold text-sm rounded-full transition-colors">
                    Review Readiness
                  </Link>
                  <button 
                    onClick={() => {
                      if (typeof window !== "undefined") {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    className="px-6 py-3 bg-transparent border border-white/30 hover:bg-white/10 text-white font-semibold text-sm rounded-full transition-colors cursor-pointer"
                  >
                    Explore another path
                  </button>
                </div>
                <div className="text-xs text-white/50 flex items-center justify-center gap-1.5 pt-2">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Human verification still required before launch</span>
                </div>
              </div>
            ) : (
              <div className="p-6 sm:p-8 rounded-[20px] border border-gray-200 dark:border-slate-800 shadow-sm bg-white dark:bg-slate-900 space-y-6">
                <div className="flex justify-between items-center">
                  <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-xs font-bold rounded-full">
                    Step {currentStepIndex + 1} of {activeTrack.steps.length}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{activeStep.duration}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-sky-950 dark:text-white">
                    {activeStep.title}
                  </h2>
                  <p className="text-slate-650 dark:text-slate-300 text-base leading-relaxed">
                    {activeStep.desc}
                  </p>
                </div>

                {/* Checklist */}
                <div className="pt-6 border-t border-gray-100 dark:border-slate-800 space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Checklist for this step
                  </h4>
                  <div className="space-y-3">
                    {activeStep.checklist.map((item, itemIdx) => {
                      const itemKey = `${activeTrackIndex}_${currentStepIndex}_${itemIdx}`;
                      const isChecked = !!checkedItems[itemKey];

                      return (
                        <div
                          key={itemIdx}
                          className="flex items-center gap-3 cursor-pointer group select-none"
                          onClick={() => handleCheckboxToggle(activeTrackIndex, currentStepIndex, itemIdx)}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            readOnly
                            className="w-4 h-4 rounded border-gray-300 dark:border-slate-700 text-teal-600 focus:ring-teal-500 dark:bg-slate-950 cursor-pointer"
                          />
                          <span className={`text-sm transition-colors ${
                            isChecked
                              ? "line-through text-slate-400 dark:text-slate-500"
                              : "text-sky-950 dark:text-slate-200 group-hover:text-teal-600 font-medium"
                          }`}>
                            {item}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="pt-6 border-t border-gray-100 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="flex gap-2 w-full sm:w-auto">
                    <button
                      onClick={handlePreviousStep}
                      disabled={currentStepIndex === 0}
                      className="px-4 py-2.5 text-xs font-bold text-sky-950 dark:text-white border border-sky-950/20 dark:border-white/20 rounded-full disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors w-full sm:w-auto flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" /> Previous
                    </button>
                    <button
                      onClick={handleNextStep}
                      disabled={currentStepIndex === activeTrack.steps.length - 1}
                      className="px-4 py-2.5 text-xs font-bold text-sky-950 dark:text-white border border-sky-950/20 dark:border-white/20 rounded-full disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors w-full sm:w-auto flex items-center justify-center gap-1 cursor-pointer"
                    >
                      Next <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                  <button
                    onClick={handleMarkStepComplete}
                    className="w-full sm:w-auto px-6 py-3 bg-teal-650 hover:bg-teal-555 text-white font-bold text-sm rounded-full transition-colors shadow-sm cursor-pointer"
                  >
                    {isStepComplete(activeTrackIndex, currentStepIndex) ? "✓ Step complete" : "Mark step complete"}
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}