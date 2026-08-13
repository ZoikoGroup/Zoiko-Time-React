"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is the ZoikoTime Mobile App?",
    answer:
      "The ZoikoTime Mobile App gives workers and authorized managers access to supported ZoikoTime workforce workflows from a mobile device, including time-related actions, requests, and other features enabled by the organization.",
  },
  {
    question: "Can Workers download the app now?",
    answer:
      "App availability depends on the organization's ZoikoTime deployment and the current release status of the mobile application. Workers should use the approved distribution method provided by their organization.",
  },
  {
    question: "Does downloading the app create ZoikoTime access?",
    answer:
      "No. Downloading or installing the app does not by itself grant access to ZoikoTime workforce data. Access requires an authorized account and the appropriate permissions configured by the organization.",
  },
  {
    question: "Can Workers clock in and out from the app?",
    answer:
      "Yes, when mobile time tracking is enabled by the organization. Workers can use the supported clock-in and clock-out workflows according to the organization's configured policies and permissions.",
  },
  {
    question: "Can Workers take breaks from the app?",
    answer:
      "Yes, where break tracking is enabled. Workers can record supported break events through the app according to the organization's timekeeping policies and configured workflows.",
  },
  {
    question: "Can Managers approve requests from the app?",
    answer:
      "Managers can approve supported workforce requests from the mobile app when mobile approvals are enabled and their account has the required permissions.",
  },
  {
    question: "Does the app capture screenshots?",
    answer:
      "The mobile app does not automatically capture screenshots of a worker's personal phone activity. Any screenshot-related functionality, where supported, is governed by the organization's configured features, policies, permissions, and transparency requirements.",
  },
  {
    question: "Does the app track private phone activity?",
    answer:
      "No. The ZoikoTime mobile app is not intended to monitor unrelated private phone activity. Workforce information collected through the app is limited to the features and workflows enabled by the organization.",
  },
  {
    question: "Does the app use location?",
    answer:
      "Location functionality depends on the organization's configuration and the specific mobile workflow being used. Where location is required, its collection and use should follow applicable permissions, policies, and transparency requirements.",
  },
  {
    question: "What happens if the Worker loses connection?",
    answer:
      "If a worker temporarily loses network connectivity, mobile actions may be delayed until the connection is restored, depending on the specific workflow. The app can only complete actions supported by its available connection and synchronization behavior.",
  },
];

export default function MobileAppFAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  return (
    <section
      className="
        w-full
        bg-gray-50
        px-5
        py-16
        transition-colors
        duration-300
        dark:bg-slate-950
        sm:px-8
        lg:px-12
      "
    >
      <div className="mx-auto w-full max-w-[1180px]">

        {/* Header */}
        <div className="text-center">
          <p
            className="
              text-xs
              font-semibold
              uppercase
              leading-5
              tracking-[0.2em]
              text-teal-600
              dark:text-teal-400
            "
          >
            Questions
          </p>

          <h2
            className="
              mt-2
              text-3xl
              font-bold
              leading-tight
              text-slate-900
              dark:text-white
              sm:text-4xl
            "
          >
            Mobile App FAQs
          </h2>
        </div>

        {/* FAQ List */}
        <div className="mx-auto mt-12 max-w-[800px] space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="
                  overflow-hidden
                  rounded-lg
                  bg-transparent
                  transition-colors
                  duration-200
                  hover:bg-white
                  dark:hover:bg-slate-900/60
                "
              >
                {/* Question Button */}
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                  className="
                    flex
                    w-full
                    cursor-pointer
                    items-center
                    gap-3
                    px-4
                    py-4
                    text-left
                    text-sm
                    font-medium
                    leading-6
                    text-gray-700
                    dark:text-slate-300
                    sm:text-base
                  "
                >
                  {/* Plus / Minus */}
                  <span
                    className="
                      flex
                      h-5
                      w-5
                      shrink-0
                      items-center
                      justify-center
                      text-xl
                      font-normal
                      leading-none
                      text-teal-600
                      dark:text-teal-400
                    "
                  >
                    {isOpen ? "−" : "+"}
                  </span>

                  {/* Question */}
                  <span>{faq.question}</span>
                </button>

                {/* Answer */}
                {isOpen && (
                  <div className="px-4 pb-5 pl-12">
                    <p
                      className="
                        text-sm
                        leading-6
                        text-gray-600
                        dark:text-slate-400
                        sm:text-base
                      "
                    >
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