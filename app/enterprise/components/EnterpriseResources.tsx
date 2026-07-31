"use client";

import {
  FileText,
  BookOpen,
  ClipboardCheck,
  FileQuestion,
  Download,
  ArrowRight,
} from "lucide-react";

type Resource = {
  type: string;
  title: string;
  action: string;
  icon: React.ElementType;
  download?: boolean;
};

const resources: Resource[] = [
  {
    type: "WHITEPAPER",
    title: "Policy-First Workforce Truth Infrastructure",
    action: "Download",
    icon: FileText,
    download: true,
  },
  {
    type: "GUIDE",
    title: "Enterprise Deployment Best Practices",
    action: "Read guide",
    icon: BookOpen,
  },
  {
    type: "CHECKLIST",
    title: "Evaluation & Procurement Readiness",
    action: "View checklist",
    icon: ClipboardCheck,
  },
  {
    type: "TEMPLATE",
    title: "RPP Security & Privacy Questionnaire",
    action: "Download",
    icon: FileQuestion,
    download: true,
  },
];

export default function EnterpriseResources() {
  return (
    <section className="w-full bg-slate-50 py-16 dark:bg-slate-900 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-6">

        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-black leading-9 text-sky-950 dark:text-white sm:text-4xl">
            Resources &amp; insights
          </h2>

          <p className="mt-1 text-base font-normal leading-6 text-zinc-700 dark:text-zinc-300">
            Deep dives into workforce truth infrastructure.
          </p>
        </div>

        {/* Resource Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource) => {
            const Icon = resource.icon;

            return (
              <article
                key={resource.type}
                className="
                  flex min-h-[208px] flex-col justify-between
                  rounded-lg border border-sky-950/5
                  bg-white p-6
                  transition-all duration-200
                  hover:-translate-y-1 hover:shadow-md
                  dark:border-white/10
                  dark:bg-slate-800
                "
              >
                <div>
                  {/* Icon */}
                  <div className="flex h-8 w-8 items-center justify-start">
                    <Icon
                      size={26}
                      strokeWidth={2}
                      className="text-sky-950/40 dark:text-white/50"
                    />
                  </div>

                  {/* Type */}
                  <div className="pt-3">
                    <span className="text-xs font-bold uppercase leading-4 tracking-wider text-emerald-500">
                      {resource.type}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-1 text-base font-bold leading-6 text-sky-950 dark:text-white">
                    {resource.title}
                  </h3>
                </div>

                {/* Action */}
                <div className="pt-4">
                  <button
                    type="button"
                    className="
                      inline-flex items-center gap-1
                      text-sm font-bold leading-5
                      text-emerald-500
                      transition-colors
                      hover:text-emerald-600
                      dark:hover:text-emerald-400
                    "
                  >
                    {resource.action}

                    {resource.download ? (
                      <Download size={16} strokeWidth={2} />
                    ) : (
                      <ArrowRight size={16} strokeWidth={2} />
                    )}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}