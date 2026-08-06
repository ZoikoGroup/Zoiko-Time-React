import React from 'react';
import { 
  Clock, 
  Layers, 
  Bell, 
  MessageSquarePlus, 
  UserCheck, 
  CheckCircle2, 
  Info,
  ChevronRight,
  AlignLeft,
  AlertCircle,
  Shield,
  RotateCcw
} from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      title: "Record",
      description: "Approved time event captured",
      icon: Clock,
    },
    {
      title: "Classify",
      description: "Deterministic rules organize it",
      icon: AlignLeft,
    },
    {
      title: "Notify",
      description: "Missing or unusual info surfaces",
      icon: AlertCircle,
    },
    {
      title: "Add context",
      description: "You explain or request correction",
      icon: RotateCcw,
    },
    {
      title: "Review",
      description: "Human authority stays in control",
      icon: CheckCircle2,
    },
    {
      title: "Approve & use",
      description: "Approved record, kept in history",
      icon: Shield,
    },
  ];

  const badges = [
    { label: "In Progress", className: "bg-gray-100 text-gray-600 border border-gray-300 dark:bg-slate-800 dark:text-gray-300 dark:border-slate-700" },
    { label: "Complete", className: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400" },
    { label: "Needs Input", className: "bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-400" },
    { label: "Pending Review", className: "bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-400" },
    { label: "Corrected", className: "bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-400" },
    { label: "Approved", className: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400" },
  ];

  return (
    <section className="bg-gray-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Category Badge */}
        <span className="text-teal-600 dark:text-teal-400 text-xs font-semibold uppercase tracking-widest text-center mb-3">
          How It Works
        </span>

        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-slate-800 dark:text-white max-w-3xl leading-snug sm:leading-tight mb-4">
          From a time event to an approved record
        </h2>

        {/* Subtitle Paragraph */}
        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 text-center max-w-3xl leading-relaxed mb-12">
          ZoikoTime records an approved time event, applies configured deterministic rules, surfaces missing or conflicting information, lets you add context or request correction, preserves human review, and keeps a history of every approval.
        </p>

        {/* All Steps in One Single Row Container */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-2 mb-12">
          {steps.map((step, idx) => {
            const StepIcon = step.icon;

            return (
              <React.Fragment key={idx}>
                {/* Individual Card */}
                <div className="w-full lg:w-40 h-36 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700/60 p-3 shadow-sm flex flex-col items-center justify-center text-center flex-shrink-0">
                  {/* Icon Container */}
                  <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-950/60 rounded-xl flex items-center justify-center mb-2 flex-shrink-0">
                    <StepIcon className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-semibold text-slate-800 dark:text-white leading-tight mb-1">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-tight">
                    {step.description}
                  </p>
                </div>

                {/* Arrow Connector between steps */}
                {idx < steps.length - 1 && (
                  <ChevronRight className="w-5 h-5 text-teal-600 dark:text-teal-400 transform rotate-90 lg:rotate-0 flex-shrink-0 my-1 lg:my-0" />
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Status Badges Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {badges.map((badge, idx) => (
            <span
              key={idx}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-colors ${badge.className}`}
            >
              {badge.label}
            </span>
          ))}
        </div>

        {/* Info Disclaimer Footer */}
        <div className="flex items-start sm:items-center justify-center gap-2 max-w-3xl text-center text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
          <Info className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5 sm:mt-0" />
          <p>
            A flag is not an accusation, a productivity score, or a disciplinary outcome — it means information is missing or unusual enough to need a look.
          </p>
        </div>

      </div>
    </section>
  );
}