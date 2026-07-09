import React from "react";

export default function PersonalInformationCollected() {
  const information = [
    "Identity and contact data: names, email addresses, phone numbers, job titles, company names",
    "Account and authentication data: usernames, credentials, authentication events, access logs",
    "Transaction and billing data: payment method details, billing address, subscription history, invoices",
    "Usage and technical data: IP addresses, browser/device information, session logs, feature usage",
    "Communications data: support interactions, email correspondence, chat history",
    "Worker and workforce data: time records, activity signals, work-state classifications, screenshots where enabled (see Section 5)",
    "Marketing data: engagement data, preference signals, communication responses",
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-0 py-6 bg-white dark:bg-slate-950">
      <div className="w-full max-w-[696px] mx-auto">
        {/* Heading */}
        <h2
          className="
            text-2xl
            font-extrabold
            leading-8
            text-slate-900
            dark:text-white
          "
        >
          4. Personal Information We Collect
        </h2>

        {/* Teal Line */}
        <div
          className="
            w-12
            h-[3px]
            bg-teal-600
            rounded-full
            mt-4
            mb-6
          "
        />

        {/* Description */}
        <p
          className="
            text-base
            font-normal
            leading-7
            text-slate-700
            dark:text-slate-300
            mb-5
          "
        >
          The personal information collected by ZoikoTime depends on the
          relationship, configuration, device, jurisdiction, and services used.
          Categories include:
        </p>

        {/* Bullet List */}
        <ul className="space-y-3 mb-6">
          {information.map((item, index) => (
            <li
              key={index}
              className="
                flex
                items-start
                gap-3
                text-base
                font-normal
                leading-7
                text-slate-700
                dark:text-slate-300
              "
            >
              <span
                className="
                  text-teal-600
                  font-bold
                  text-base
                  leading-7
                "
              >
                ›
              </span>

              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Closing Paragraph */}
        <p
          className="
            text-base
            font-normal
            leading-7
            text-slate-700
            dark:text-slate-300
          "
        >
          We do not intentionally collect more personal information than is
          reasonably necessary for the purposes described in this Notice.
        </p>
      </div>
    </section>
  );
}