import React from "react";

export default function LicenseSection() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section 6 */}
      <section className="mb-10 sm:mb-12 md:mb-16">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight mb-3">
          6. License and Right to Use the Services
        </h2>

        <div className="w-12 h-1 bg-teal-600 rounded-full mb-5"></div>

        <p className="text-sm sm:text-base text-slate-700 dark:text-gray-300 leading-7 mb-4">
          Subject to Customer&apos;s compliance with these Terms, timely payment
          of applicable fees, and the terms of any applicable Order Form,
          Zoiko Tech Inc. grants Customer a limited, non-exclusive,
          non-transferable, revocable license to access and use the Services
          during the Subscription Term solely for Customer&apos;s internal
          business operations, workforce management, and the purposes described
          in the applicable Order Form.
        </p>

        <p className="text-sm sm:text-base text-slate-700 dark:text-gray-300 leading-7">
          This license does not include any right to sublicense, resell,
          distribute, publish, modify, adapt, translate, reverse engineer,
          decompile, disassemble, or create derivative works from the Services.
          All rights not expressly granted are reserved by Zoiko Tech Inc.
        </p>
      </section>
    </div>
  );
}