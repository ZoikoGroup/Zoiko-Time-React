import React from "react";

export default function AgreementSection() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section 1 */}
      <section className="mb-10 sm:mb-12 md:mb-16">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight mb-3">
          1. Agreement Structure and Acceptance
        </h2>

        <div className="w-12 h-1 bg-teal-600 rounded-full mb-5"></div>

        <p className="text-sm sm:text-base text-slate-700 dark:text-gray-300 leading-7 mb-4">
          These Terms of Service (the "Terms") govern access to and use of the
          ZoikoTime software platform, websites, applications, dashboards, APIs,
          documentation, support services, professional services, and related
          offerings (collectively, the "Services") provided by Zoiko Tech Inc.
          ("Provider," "we," "us," or "our").
        </p>

        <p className="text-sm sm:text-base text-slate-700 dark:text-gray-300 leading-7 mb-4">
          By creating an account, signing an Order Form, clicking to accept
          these Terms, accessing the Services, or permitting any Authorized User
          to access the Services, Customer agrees to be bound by these Terms. If
          Customer does not agree, Customer must not use the Services.
        </p>

        <p className="text-sm sm:text-base text-slate-700 dark:text-gray-300 leading-7">
          The Agreement consists of these Terms, the applicable Order Form, the
          Data Processing Addendum, Privacy Notice, Acceptable Use Policy, AI
          and Automated Insights Notice, Security Measures Schedule,
          Sub-processor Policy, Service Level Agreement, Worker Transparency
          Notice, and any other incorporated schedule or order document. No
          purchasing terms, vendor onboarding terms, purchase order terms, or
          other Customer-provided terms modify the Agreement unless signed by an
          authorized officer of Zoiko Tech Inc.
        </p>
      </section>
    </div>
  );
}