"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What systems does ZoikoTime integrate with?",
    answer:
      "Availability varies by system, direction, object, plan, region, and configuration. Rather than publish a logo wall, ZoikoTime maintains a controlled inventory with a named owner, supporting evidence, and a review date for every entry — confirmed during qualification.",
  },
  {
    question: "How do ZoikoTime integrations work?",
    answer:
      "Through a nine-stage governed lifecycle: scope, authorize, map, test, validate, approve, activate, operate & reconcile, and change or retire. Each stage produces a required record or control.",
  },
  {
    question: "How are connections authorized and secured?",
    answer:
      "A named owner and authorizer grant explicit, scoped access to a service identity. Accounts, service identities, and credentials are governed by Identity & Access — not by this page.",
  },
  {
    question: "How is field mapping validated?",
    answer:
      "Mappings are versioned and deterministic. Source, target, transformation, default, precedence, and approver are explicit, and a compatibility check runs before any version is published.",
  },
  {
    question: "What happens when a connection fails?",
    answer:
      "The connection moves to a visible degraded state and failed deliveries are quarantined. Access is never broadened on failure, and no value is invented to complete a record.",
  },
  {
    question: "How do worker corrections propagate downstream?",
    answer:
      "An authorized correction produces a new record version that is re-delivered and linked to the original. A connection never overrides a worker correction.",
  },
  {
    question: "Does connecting a system monitor workers?",
    answer:
      "No. Connections transport and transform approved records only. There are no screenshots, keystroke content, URL history, application-name monitoring, or clipboard collection under any tier or configuration.",
  },
  {
    question: "Does ZoikoTime guarantee interoperability or compliance?",
    answer:
      "No. This page certifies no external system, protocol, region, throughput, or service level, and it does not guarantee legal compliance. Scope and availability are confirmed in your agreement.",
  },
];

export default function IntegrationsFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-white py-16 dark:bg-slate-950 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
            Questions
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-800 dark:text-white sm:text-4xl">
            Enterprise Integrations — answered
          </h2>
        </div>

        <div className="mx-auto mt-10 flex max-w-[900px] flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0px_1px_3px_0px_rgba(14,31,61,0.06)] dark:border-slate-700 dark:bg-slate-900"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-sm font-semibold leading-6 text-slate-800 transition-colors group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-400">
                    {faq.question}
                  </span>

                  {isOpen ? (
                    <Minus
                      className="h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                  ) : (
                    <Plus
                      className="h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                  )}
                </button>

                {isOpen && (
                  <p className="border-t border-slate-100 px-6 py-5 text-sm font-normal leading-6 text-gray-500 dark:border-slate-700 dark:text-slate-400">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
