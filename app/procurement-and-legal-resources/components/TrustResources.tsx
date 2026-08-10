"use client";

import Image from "next/image";
import Link from "next/link";

const resources = [
  {
    title: "Security",
    description:
      "Architecture, access control, and incident response — with current attestations linked where held.",
    image: "/procurement-and-legal-resources/security.png",
    action: "Visit Security →",
    href: "/security",
  },
  {
    title: "Privacy",
    description:
      "Data minimization, the negative capability set, and the current data map.",
    image: "/procurement-and-legal-resources/privacy.png",
    action: "Visit Privacy →",
    href: "/privacy",
  },
  {
    title: "Accessibility",
    description:
      "WCAG 2.2 AA conformance approach and testing methodology.",
    image: "/procurement-and-legal-resources/accessibility.png",
    action: "Visit Accessibility →",
    href: "/accessibility",
  },
];

export default function TrustResources() {
  return (
    <section className="bg-slate-50 px-6 py-16 dark:bg-slate-950 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1180px]">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600 dark:text-teal-400">
            Trust Resources
          </p>

          <h2 className="mx-auto mt-3 max-w-[820px] text-3xl font-bold leading-tight text-slate-800 dark:text-white lg:text-4xl">
            Security, privacy, and accessibility — in plain language
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {resources.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_6px_18px_rgba(14,31,61,0.05),0px_1px_3px_rgba(14,31,61,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="relative h-40 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  {item.description}
                </p>

                <Link href={item.href} className="mt-5 text-sm font-semibold text-teal-700 transition hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300">
                  {item.action}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}