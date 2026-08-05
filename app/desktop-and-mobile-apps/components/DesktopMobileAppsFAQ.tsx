"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "What are ZoikoTime desktop and mobile apps?",
    answer:
      "ZoikoTime provides desktop and mobile applications that allow authorized users to record, review, and manage time according to their assigned permissions. Available features depend on your organization's configuration.",
  },
  {
    question: "Which operating systems and devices are supported?",
    answer:
      "Supported operating systems and devices depend on the officially published release documentation. Only approved platforms are supported.",
  },
  {
    question: "Do desktop and mobile apps have the same features?",
    answer:
      "Not always. Features vary based on platform capabilities, user permissions, and organization policies.",
  },
  {
    question: "Can ZoikoTime work offline?",
    answer:
      "Offline functionality is available only where specifically supported. If an action requires connectivity, the application clearly indicates that an internet connection is needed.",
  },
  {
    question:
      "Does ZoikoTime take screenshots or monitor apps and websites?",
    answer:
      "Only capabilities that are officially documented and enabled by your organization are available. The application does not claim monitoring features that have not been approved.",
  },
  {
    question:
      "Does the mobile app track location in the background?",
    answer:
      "Location behavior follows organization policy and user permissions. Any location access is clearly disclosed and permission controlled.",
  },
  {
    question:
      "Can workers review and correct records?",
    answer:
      "Yes, when permitted by organization policy. Workers can review their own records and submit correction requests for approval.",
  },
  {
    question:
      "Can managers approve records on mobile?",
    answer:
      "Managers can perform approvals on supported mobile platforms when that capability is enabled for their role.",
  },
  {
    question:
      "How are records synchronized across devices?",
    answer:
      "Records synchronize through approved backend services whenever connectivity is available. Synchronization status is clearly displayed.",
  },
  {
    question:
      "How are apps installed or accessed?",
    answer:
      "Installation and access are provided only through officially approved distribution channels and documented deployment methods.",
  },
  {
    question: "Are the apps accessible?",
    answer:
      "Accessibility follows WCAG guidance where supported, including keyboard navigation, screen-reader compatibility, scalable text, and reduced motion support.",
  },
  {
    question:
      "Where can existing customers get help?",
    answer:
      "Existing customers should use their organization's designated support process or the official ZoikoTime support resources.",
  },
];

export default function DesktopMobileAppsFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-gray-50 py-16 lg:py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600">
            Questions
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-800 dark:text-white sm:text-4xl lg:text-5xl">
            Desktop &amp; mobile apps — answered
          </h2>
        </div>

        {/* FAQ */}
        <div className="mx-auto mt-14 max-w-4xl space-y-5">
          {faqs.map((faq, index) => {
            const active = open === index;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all dark:border-slate-700 dark:bg-slate-800"
              >
                <button
                  onClick={() =>
                    setOpen(active ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                >
                  <span className="text-base font-semibold text-slate-800 dark:text-white">
                    {faq.question}
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-50 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400">
                    {active ? (
                      <FiMinus className="h-5 w-5" />
                    ) : (
                      <FiPlus className="h-5 w-5" />
                    )}
                  </span>
                </button>

                {active && (
                  <div className="border-t border-slate-100 px-6 pb-6 pt-4 dark:border-slate-700">
                    <p className="text-sm leading-7 text-slate-500 dark:text-slate-400">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}