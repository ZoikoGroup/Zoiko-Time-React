import React from "react";
import Image from "next/image";

const contactCards = [
  {
    icon: "/PrivacyTeamAccess/inquiry.png",
    title: "Legal Inquiry",
    description: (
      <>
        Contract review, DPA questions, liability
        <br />
        scope, or legal interpretation — routed
        <br />
        directly to ZoikoTime&apos;s legal counsel with a
        <br />
        24-hour response SLA.
      </>
    ),
    button: "Submit Legal Inquiry →",
  },
  {
    icon: "/PrivacyTeamAccess/discussion.png",
    title: "Compliance Discussion",
    description: (
      <>
        GDPR alignment questions, regulatory
        <br />
        obligation mapping, audit support, or
        <br />
        compliance framework queries — answered
        <br />
        by ZoikoTime&apos;s compliance specialists.
      </>
    ),
    button: "Request Compliance Call →",
  },
  {
    icon: "/PrivacyTeamAccess/negotiation.png",
    title: "DPA Negotiation",
    description: (
      <>
        Enterprise clients requiring bespoke DPA
        <br />
        terms — direct engagement with the legal
        <br />
        team for structured redlining and clause
        <br />
        negotiation. Initial response within 2
        <br />
        business days.
      </>
    ),
    button: "Start DPA Negotiation →",
  },
];

export default function PrivacyTeamAccess() {
  return (
    <section className="py-16 px-6 bg-white dark:bg-slate-950">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-center text-4xl font-bold text-slate-900 dark:text-white">
          Direct Access to ZoikoTime&apos;s Privacy Team
        </h2>


        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-14">

          {contactCards.map((card, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-7"
            >

              {/* Image Icon */}
              <Image
                src={card.icon}
                alt={card.title}
                width={36}
                height={36}
                className="mb-8"
              />


              {/* Title */}
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">
                {card.title}
              </h3>


              {/* Description */}
              <p className="text-xs leading-5 text-slate-500 dark:text-slate-400 min-h-[90px]">
                {card.description}
              </p>


              {/* Button */}
              <button
                className="mt-8 px-5 py-2 rounded-md border border-teal-600 
                text-teal-600 text-xs font-semibold hover:bg-teal-50 dark:hover:bg-teal-950"
              >
                {card.button}
              </button>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}