"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does the Black Friday offer work?",
    answer:
      "30% off the first year of an eligible annual ZoikoTime subscription for new customers. Pass-through services are excluded.",
  },
  {
    question: "Who is eligible?",
    answer:
      "The offer is open to new ZoikoTime customers who purchase an eligible annual Verified, Governed or Sovereign plan during the promotion. Existing subscriptions and Enterprise contracts are not eligible.",
  },
  {
    question: "What happens after the first year?",
    answer:
      "Your subscription renews at the standard annual rate for your plan. We'll remind you before renewal, and you can change or cancel your plan in line with your subscription terms.",
  },
  {
    question: "Does the discount apply to monthly plans?",
    answer:
      "No. The 30% discount applies only to annual plans. Monthly plans are billed at the standard monthly price.",
  },
  {
    question: "When does the offer end?",
    answer:
      "The offer ends at the close of Cyber Monday, 30 November. Annual plans purchased after that are charged at the standard rate.",
  },
];

export default function BlackFridayFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-[#0b1120] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-20">
      <div className="mx-auto grid w-full max-w-[1280px] gap-10 lg:grid-cols-[500px_1fr] lg:gap-5">
        <div className="hidden lg:block" />
        <h2 className="text-center text-3xl font-medium tracking-tight sm:text-4xl lg:-mt-2">
          Frequently asked questions
        </h2>

        <Image
          src="/black-friday/faq-team-screen.webp"
          alt="Two colleagues reviewing a dashboard together on a monitor"
          width={500}
          height={399}
          className="h-auto w-full max-w-[500px] self-start rounded-2xl object-cover max-lg:mx-auto"
        />

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `bf-faq-panel-${index}`;
            return (
              <div
                key={faq.question}
                className="rounded-xl border border-white/10 bg-[#121826]"
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-semibold text-white"
                  >
                    {faq.question}
                    <ChevronDown
                      aria-hidden="true"
                      className={`size-4 shrink-0 text-emerald-400 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </h3>
                <div id={panelId} hidden={!isOpen} className="px-5 pb-5 text-sm leading-6 text-slate-400">
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
