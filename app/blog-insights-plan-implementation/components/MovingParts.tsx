import React from "react";
import { Key, Link, Database, Shield, Layout, Users, Lock, Code2Icon, Folder, CodeIcon, Grid, User } from "lucide-react";

interface Part {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export default function MovingParts() {
  const partsData: Part[] = [
    {
      title: "Identity",
      desc: "SSO and provisioning coordinated with your identity provider.",
      icon: <Lock className="h-4.5 w-4.5 text-teal-700 dark:text-teal-400" />
    },
    {
      title: "Integrations",
      desc: "Approved connectors, mapping, and reconciliation with your systems.",
      icon: <CodeIcon className="h-4.5 w-4.5 text-teal-700 dark:text-teal-400" />
    },
    {
      title: "Data & migration",
      desc: "Migration scope is qualified — never assumed or auto-included.",
      icon: <Folder className="h-4.5 w-4.5 text-teal-700 dark:text-teal-400" />
    },
    {
      title: "Privacy & security",
      desc: "Review gates and evidence align with existing Trust authorities.",
      icon: <Shield className="h-4.5 w-4.5 text-teal-700 dark:text-teal-400" />
    },
    {
      title: "Environments",
      desc: "Environment strategy for build, test, and production stages.",
      icon: <Grid className="h-4.5 w-4.5 text-teal-700 dark:text-teal-400" />
    },
    {
      title: "Third parties",
      desc: "External owners and approvals are named, not implied.",
      icon: <User className="h-4.5 w-4.5 text-teal-700 dark:text-teal-400" />
    }
  ];

  return (
    <div className="bg-slate-50 py-16 dark:bg-slate-900/60  font-sans">
      <div className="mx-auto max-w-6xl px-6 space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-[#10A28D] text-xs font-bold uppercase tracking-widest ">
            Coordinate Dependencies
          </span>
          <h2 className="text-3xl font-bold text-slate-855 dark:text-white leading-tight">
            The moving parts, named and owned
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partsData.map((part, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl shadow-[0px_6px_18px_0px_rgba(14,31,61,0.03)] p-6 dark:bg-slate-900 dark:border-slate-800 space-y-4"
            >
              <div className="h-9 w-9 bg-emerald-50 rounded-xl flex items-center justify-center dark:bg-emerald-950/20 shrink-0">
                {part.icon}
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-slate-800 dark:text-white">
                  {part.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {part.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
