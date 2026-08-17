import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function GovernanceDirectory() {
  const links = [
    { label: "Explore Deterministic Time Classification", href: "/deterministic-time-classification" },
    { label: "Review AI Governance", href: "/ai-governance" },
    { label: "Meet Kairos", href: "/kairos-assistant" },
    { label: "Explore Evidence Ledger", href: "/evidence-ledger" },
    { label: "Review Worker Experience", href: "/auditable-time-records-worker-experience" },
    { label: "Privacy Overview", href: "/privacy" },
    { label: "Trust Center Root", href: "/trust-center" },
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 font-sans border-t border-b border-gray-150 dark:border-slate-800">
      <div className="space-y-8">
        <h3 className="text-xl font-bold text-slate-850 dark:text-white">
          Governance Directory &amp; Core Documentation
        </h3>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-teal-700 dark:hover:text-teal-405 transition-colors select-none"
            >
              <div className="h-4 w-4 bg-emerald-50 rounded flex items-center justify-center text-teal-700 dark:bg-emerald-950/20 dark:text-teal-400 shrink-0">
                <ArrowRight className="h-2.5 w-2.5" />
              </div>
              <span>{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
