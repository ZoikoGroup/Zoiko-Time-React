import React from "react";

export default function SecuritySection() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section 14 */}
      <section className="mb-10 sm:mb-12 md:mb-16">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight mb-3">
          14. Security, Confidentiality, and Access Controls
        </h2>

        <div className="w-12 h-1 bg-teal-600 rounded-full mb-5"></div>

        <p className="text-sm sm:text-base text-slate-700 dark:text-gray-300 leading-7 mb-4">
          Zoiko Tech Inc. will implement and maintain commercially reasonable
          administrative, technical, and organizational security measures as
          described in the Security Measures Schedule. Customer is responsible
          for its own account security, including safeguarding credentials,
          provisioning access appropriately, and promptly reporting any
          suspected compromise or unauthorized access.
        </p>

        <p className="text-sm sm:text-base text-slate-700 dark:text-gray-300 leading-7">
          Each party agrees to maintain the confidentiality of the other
          party&apos;s confidential information and to use it only for purposes
          permitted under the Agreement. Confidentiality obligations survive
          termination for a period of five years unless the information
          constitutes a trade secret, in which case obligations survive
          indefinitely.
        </p>
      </section>
    </div>
  );
}
