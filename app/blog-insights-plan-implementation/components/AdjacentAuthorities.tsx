import React from "react";
import Link from "next/link";

export default function AdjacentAuthorities() {
  const authorities = [
    { name: "Getting Started →", href: "/getting-started" },
    { name: "Product Documentation →", href: "/product-documentation" },
    { name: "Enterprise Integrations →", href: "/enterprise-integrations" },
    { name: "Training & Adoption →", href: "/training-adoption" },
    { name: "Customer Success →", href: "/customer-success" },
    { name: "Enterprise Support →", href: "/enterprise-support" },
    { name: "Trust Center →", href: "/trust-center" },
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 font-sans">
      <div className="text-center space-y-12 max-w-4xl mx-auto">
        {/* Header */}
        <div className="space-y-3">
          <span className="text-xs text-[#10A28D] font-bold uppercase tracking-widest text-teal-650 dark:text-teal-400">
            Adjacent Authorities
          </span>
          <h2 className="text-3xl font-bold text-slate-855 dark:text-white leading-tight">
            Where related answers live
          </h2>
          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            Implementation Services owns implementation discovery &amp; qualification. These own the rest.
          </p>
        </div>

        {/* Links Grid/Row */}
        <div className="flex flex-wrap justify-center gap-3.5 max-w-3xl mx-auto">
          {authorities.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="px-5 py-2.5 bg-white border border-gray-200 rounded-full shadow-[0px_2px_6px_0px_rgba(14,31,61,0.01)] text-xs font-semibold text-slate-850 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-850 transition-colors inline-block"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
