"use client";

import React from "react";

const enterpriseCards = [
  {
    icon: "📄",
    title: "Accessibility Information",
    description:
      "ZoikoTime may provide available accessibility-related product information to enterprise customers during procurement or implementation review.",
  },
  {
    icon: "🖥",
    title: "Product Walkthroughs",
    description:
      "Enterprise teams may request walkthroughs focused on accessibility-sensitive workflows, admin interfaces, and worker-facing experiences.",
  },
  {
    icon: "📋",
    title: "Implementation Planning",
    description:
      "Large deployments may require accessibility considerations in training, worker communication, and configuration documentation.",
  },
  {
    icon: "🔄",
    title: "Ongoing Improvement",
    description:
      "Accessibility feedback from enterprise customers is routed into product governance and improvement planning.",
  },
];

export default function AccessReport() {
  return (
    <section className="w-full bg-slate-100 px-5 py-20 text-slate-900 transition-colors dark:bg-slate-950 dark:text-white sm:px-8 md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-[1052px] grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-8">
        {/* LEFT SIDE */}
        <div>
          {/* Section Heading */}
          <p className="text-xs font-bold uppercase tracking-wider text-teal-600">
            Report an Issue
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Report an Accessibility Issue
          </h2>

          <p className="mt-5 max-w-[510px] text-base leading-7 text-slate-500 dark:text-white/50">
            ZoikoTime encourages users, customers, administrators, workers, and
            enterprise reviewers to report accessibility barriers. Your
            feedback helps improve the platform for everyone.
          </p>

          {/* FORM CARD */}
          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-7 shadow-[0px_2px_16px_0px_rgba(13,21,38,0.07)] dark:border-white/10 dark:bg-white/[0.04]">
            <h3 className="text-lg font-semibold">
              Report an Accessibility Issue
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-white/50">
              Complete the form and the ZoikoTime accessibility team will
              review your submission.
            </p>

            <form className="mt-7 space-y-5">
              {/* Name and Email */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <FormField label="Full Name *" placeholder="Your name" />

                <FormField
                  label="Email Address *"
                  placeholder="name@company.com"
                  type="email"
                />
              </div>

              {/* Organization and Role */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <FormField
                  label="Organization"
                  placeholder="Company or organization"
                />

                <SelectField
                  label="User Role *"
                  options={[
                    "Administrator",
                    "Manager",
                    "Worker",
                    "HR",
                    "Legal",
                    "Finance",
                    "Enterprise Reviewer",
                    "Other",
                  ]}
                />
              </div>

              {/* Product Area */}
              <SelectField
                label="Product Area Affected *"
                options={[
                  "Marketing Website",
                  "Administrator Dashboard",
                  "Worker Experience",
                  "Reports and Analytics",
                  "Forms and Configuration",
                  "Help Center and Documentation",
                  "Mobile App",
                  "Notifications and Alerts",
                ]}
              />

              {/* Description */}
              <div>
                <label className="mb-2 block text-xs font-bold">
                  Description of Issue *
                </label>

                <textarea
                  rows={4}
                  placeholder="Describe the accessibility barrier you encountered, including steps to reproduce if possible..."
                  className="w-full resize-none rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm outline-none placeholder:text-slate-400 focus:border-teal-600 dark:border-white/10 dark:bg-slate-900 dark:placeholder:text-white/30"
                />
              </div>

              {/* Device and Urgency */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <FormField
                  label="Device Type"
                  placeholder="e.g. Desktop, iPhone, Android"
                />

                <SelectField
                  label="Urgency"
                  options={["Standard", "High", "Critical"]}
                  defaultValue="Standard"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="h-12 w-full rounded-lg bg-teal-600 text-base font-semibold text-white transition hover:bg-teal-700"
              >
                Submit Accessibility Report
              </button>

              <p className="text-xs leading-5 text-slate-400 dark:text-white/40">
                ZoikoTime reviews accessibility reports and may contact you for
                additional context. Reports are used to improve the platform.
              </p>
            </form>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:pt-[84px]">
          <h3 className="text-base font-semibold">
            Accessibility for Enterprise Review
          </h3>

          <p className="mt-5 max-w-[510px] text-base leading-6 text-slate-500 dark:text-white/50">
            Enterprise customers may require accessibility information as part
            of procurement, vendor risk review, implementation planning, or
            regulatory assessment. ZoikoTime can support these reviews.
          </p>

          {/* Enterprise Cards */}
          <div className="mt-8 space-y-4">
            {enterpriseCards.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.04]"
              >
                <div className="flex items-start gap-4">
                  <span className="text-xl leading-7">{card.icon}</span>

                  <div>
                    <h4 className="text-sm font-bold">{card.title}</h4>

                    <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-white/50">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Contact Sales */}
            <div className="rounded-[10px] bg-emerald-50 p-4 dark:bg-teal-950/30">
              <h4 className="text-sm font-semibold">
                Contact Sales for Enterprise Accessibility Review
              </h4>

              <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-white/50">
                For procurement review, accessibility documentation requests,
                or implementation planning support.
              </p>

              <button className="mt-4 text-xs font-bold text-teal-600 transition hover:text-teal-700 dark:text-teal-400">
                Contact Sales →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -----------------------------
   Reusable Form Components
------------------------------ */

function FormField({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-bold">{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        className="h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none placeholder:text-slate-400 focus:border-teal-600 dark:border-white/10 dark:bg-slate-900 dark:placeholder:text-white/30"
      />
    </div>
  );
}

function SelectField({
  label,
  options,
  defaultValue,
}: {
  label: string;
  options: string[];
  defaultValue?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-bold">{label}</label>

      <select
        defaultValue={defaultValue ?? ""}
        className="h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none focus:border-teal-600 dark:border-white/10 dark:bg-slate-900"
      >
        {!defaultValue && <option value="">Select...</option>}

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}