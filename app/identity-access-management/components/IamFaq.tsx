"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Does ZoikoTime support single sign-on and MFA?",
    answer:
      "Yes, where configured. Workers sign in once through your identity provider, with multi-factor authentication and step-up required for sensitive administrative actions. SSO enforcement and supported protocols vary by plan and environment, so confirm the standards you need during evaluation.",
  },
  {
    question: "How does access get provisioned and removed?",
    answer:
      "Through lifecycle provisioning driven by your worker master and directory sources where connected. Joiner provisions accounts and least-privilege roles, mover adjusts roles and scope automatically when a role, team, or location changes, and leaver revokes access on offboarding with a recorded, reviewable deprovisioning trail.",
  },
  {
    question: "What is least privilege and segregation of duties here?",
    answer:
      "Roles are least-privilege and scoped by organization, team, and worker type. Segregation of duties keeps configuration, approval, and export in different hands — no one approves their own change — and conditional or read-only roles are available where a full grant isn't warranted.",
  },
  {
    question: "Can we grant temporary elevated access?",
    answer:
      "Yes, as just-in-time elevation. A request needs approval from a different role and a required reason, is limited to a time window, and auto-revokes with an audit event when it expires.",
  },
  {
    question: "How do access reviews work?",
    answer:
      "Recurring certification campaigns put entitlements in front of named reviewers, who certify, revoke, or reduce scope with the last-used date visible alongside each grant. Recertification is human-controlled, and every decision is reasoned and logged.",
  },
  {
    question: "Does IAM monitor what workers do?",
    answer:
      "No. Identity & Access Management protects your organization and your workers — it governs access, it never watches activity. Under any tier and any configuration there are no screenshots, keystroke content, URL history, application-name monitoring, or clipboard collection.",
  },
  {
    question: "Is identity data isolated between organizations?",
    answer:
      "Yes. Access, data, sessions, dashboards, and exports are separated per organization and follow your configured data region. Region and residency availability are published in the compatibility register; ZoikoTime does not assert options it has not verified.",
  },
  {
    question: "Does ZoikoTime guarantee security or compliance?",
    answer:
      "No. IAM enforces the access you configure; it does not decide employment, discipline, or legal outcomes, and no security control eliminates all risk. See the Security Addendum for supported controls, certifications, and assurances.",
  },
];

export default function IamFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full overflow-hidden bg-[#F6F9F9] dark:bg-slate-900">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <div className="flex w-full flex-col items-center gap-3">

          <p className="text-center text-xs font-semibold uppercase leading-5 tracking-widest text-[#10A28D]">
            Questions
          </p>

          <h2 className="text-center text-3xl font-bold leading-[1.11] text-[#0E1F3D] lg:whitespace-nowrap dark:text-white sm:text-4xl">
            Identity &amp; Access Management — answered
          </h2>

        </div>

        {/* Questions */}
        <div className="mx-auto mt-10 flex w-full max-w-[820px] flex-col gap-3">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-[#E4E9EE] bg-white shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05),0px_1px_3px_0px_rgba(14,31,61,0.06)] dark:border-slate-800 dark:bg-slate-950"
              >

                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className={`flex w-full items-center justify-between gap-6 px-[23px] pt-7 text-left ${
                    isOpen ? "pb-1" : "pb-7"
                  }`}
                >

                  <span className="text-base font-semibold leading-6 text-[#0E1F3D] dark:text-white">
                    {faq.question}
                  </span>

                  <span
                    className={`shrink-0 text-xl font-normal leading-none text-[#10A28D] transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>

                </button>

                {isOpen ? (
                  <p className="px-[23px] pb-7 text-sm font-normal leading-6 text-[#6B7785] dark:text-slate-400">
                    {faq.answer}
                  </p>
                ) : null}

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
