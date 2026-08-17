import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const faqData: FAQItem[] = [
  {
    q: "Does clicking “Plan Implementation” start an engagement?",
    a: "No. Clicking any action is informational and lets you review criteria or request qualification worksheets. No formal commercial or service engagement starts without signed scope manifests."
  },
  {
    q: "How long does implementation take?",
    a: "Standard rollout pilots take 1 to 2 weeks, with subsequent roster waves stabilizing in 2 to 4 weeks depending on customer identity and custom HRIS API configurations."
  },
  {
    q: "Is migration or training included?",
    a: "Scope parameters are qualified explicitly. Data migration execution and named worker training deliverables require specific approval flags to be included in the service roadmap."
  },
  {
    q: "Who owns what during implementation?",
    a: "Responsibilities are governed under the Decision Rights Matrix. Customers own policy definitions, identity credentials, and final testing sign-off, while ZoikoTime handles configurations and integration mappings."
  },
  {
    q: "Do you guarantee adoption or a specific outcome?",
    a: "No. Our public model avoids automatic acceptance or guaranteed success metrics. Handover approvals are explicit and require human evaluation at every gate."
  },
  {
    q: "We’re already a customer — do we start over?",
    a: "No. Existing tenants proceed with change scopes using their current support lanes and account management context rather than starting from the initial evaluation funnel."
  }
];

export default function ImplementationFAQ() {
  const [expandedIndices, setExpandedIndices] = useState<{ [key: number]: boolean }>({});

  const toggleExpand = (idx: number) => {
    setExpandedIndices((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 font-sans">
      {/* Header */}
      <div className="text-center space-y-3 mb-10">
        <span className="text-xs text-[#10A28D] font-bold uppercase tracking-widest text-teal-650 dark:text-teal-400">
          Implementation FAQ
        </span>
        <h2 className="text-3xl font-bold text-slate-855 dark:text-white leading-tight">
          Questions, answered honestly
        </h2>
      </div>

      {/* Accordions Stack */}
      <div className="space-y-4 max-w-3xl mx-auto">
        {faqData.map((item, idx) => {
          const isExpanded = !!expandedIndices[idx];

          return (
            <div
              key={idx}
              className="bg-white border border-slate-100 rounded-xl shadow-[0px_2px_8px_0px_rgba(14,31,61,0.02)] overflow-hidden dark:bg-slate-900 dark:border-slate-800"
            >
              {/* Header */}
              <div
                onClick={() => toggleExpand(idx)}
                className="p-5 flex items-center justify-between gap-4 cursor-pointer select-none"
              >
                <h3 className="text-sm md:text-base font-semibold text-slate-850 dark:text-white leading-snug">
                  {item.q}
                </h3>
                <button className="h-6 w-6 rounded-full flex items-center justify-center text-teal-605 shrink-0 hover:bg-slate-50 dark:hover:bg-slate-850">
                  {isExpanded ? (
                    <Minus className="h-4.5 w-4.5" />
                  ) : (
                    <Plus className="h-4.5 w-4.5" />
                  )}
                </button>
              </div>

              {/* Body */}
              {isExpanded && (
                <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed border-t border-gray-50 dark:border-slate-850">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
