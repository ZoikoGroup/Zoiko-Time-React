'use client'
import React, { useState } from 'react';

interface FAQItem {
  id: string;
  question: string;
  answer?: string;
}

const faqData: FAQItem[] = [
  {
    id: 'screenshots',
    question: 'Does ZoikoTime take screenshots or monitor applications?',
    answer:
      'No screenshots, keystroke content, URL history, application-name monitoring, or clipboard collection under any tier or configuration. Security telemetry covers identity, access, change, source-health, service, and incident events — not what a person types, reads, or visits.',
  },
  {
    id: 'auth',
    question: 'How are users and administrators authenticated and authorized?',
    answer:
      'Authentication is supported via SAML 2.0 / OIDC integrations with Enterprise Identity Providers (IdP). Granular Role-Based Access Control (RBAC) and Least Privilege principles govern authorization across service boundaries.',
  },
  {
    id: 'encryption',
    question: 'Is ZoikoTime data encrypted?',
    answer:
      'Yes. All data is encrypted in transit using TLS 1.3/1.2 protocols and encrypted at rest using AES-256 standards with managed encryption keys.',
  },
  {
    id: 'logging',
    question: 'How are security events logged without monitoring worker activity?',
    answer:
      'Audit logging focuses purely on operational metadata, authentication events, system role changes, and API calls. Individual worker desktop activity and browser content are strictly outside the logging scope.',
  },
  {
    id: 'incidents',
    question: 'How are incidents and vulnerabilities handled?',
    answer:
      'We maintain a structured Incident Response Plan with defined triage timelines, continuous vulnerability scanning, independent penetration testing, and coordinated public/customer disclosure routes.',
  },
  {
    id: 'certifications',
    question: 'Which certifications or assessments are available?',
    answer:
      'Third-party security assessments, architecture control summaries, and compliance documentation are available under request for controlled review.',
  },
  {
    id: 'responsibility',
    question: 'What is my organization responsible for?',
    answer:
      'Customers are responsible for managing their identity provider user lifecycles, internal role assignments, endpoint security, and configuring operational access policies.',
  },
  {
    id: 'evidence-request',
    question: 'How do I request controlled security evidence?',
    answer:
      'Submit a formal request using the Controlled Security Review form on this portal specifying your work email, organization, and requested category.',
  },
];

export default function SecurityQuestionsFAQ() {
  // First item open by default based on Figma design
  const [openId, setOpenId] = useState<string | null>('screenshots');

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 py-16 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-10">
        
        {/* Header Section */}
        <header className="max-w-[700px] text-center flex flex-col items-center gap-3">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Direct Answers
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            Eight Security Questions
          </h2>
        </header>

        {/* FAQ Accordion List */}
        <div className="w-full max-w-3xl border-t border-slate-200 dark:border-slate-800 flex flex-col">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="border-b border-slate-200 dark:border-slate-800 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  className="w-full py-5 px-1 flex items-center justify-between gap-4 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-xs"
                >
                  <span className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {item.question}
                  </span>

                  {/* Toggle Indicator Button */}
                  <span
                    className={`shrink-0 w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-base transition-transform duration-200 ${
                      isOpen ? 'rotate-45 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300' : ''
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Accordion Content Panel */}
                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    className="pb-5 px-1 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
          <button
            type="button"
            className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 shadow-xs"
          >
            Request Security Review
          </button>
          
          <a
            href="#enterprise-demo"
            className="px-6 py-3.5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 font-bold text-sm rounded-lg border border-slate-200 dark:border-slate-800 transition-colors"
          >
            Request Enterprise Demo
          </a>

          <a
            href="#system-status"
            className="px-6 py-3.5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 font-bold text-sm rounded-lg border border-slate-200 dark:border-slate-800 transition-colors"
          >
            System Status
          </a>
        </div>

      </div>
    </section>
  );
}