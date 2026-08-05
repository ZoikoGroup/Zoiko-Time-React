import React from "react";

export default function ExperienceModel() {
  const cards = [
    {
      tag: "Worker",
      title: "Worker experience",
      description:
        "See current record state, complete permitted actions, review details, request corrections, submit records, and reach privacy and help.",
    },
    {
      tag: "Reviewer",
      title: "Manager / reviewer",
      description:
        "Review assigned records and exceptions, compare current and proposed values, request information, correct or approve where authorized, and escalate with evidence.",
    },
    {
      tag: "Admin",
      title: "Administrator",
      description:
        "Configure roles, policies, application access, notices, availability, releases, support, and audit evidence — with segregation of duties.",
    },
    {
      tag: "Evidence",
      title: "Evidence & reporting",
      description:
        "Inspect versions, corrections, approvals, delivery state, and organization-level record health — with no individual productivity scoring.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 dark:bg-slate-950 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-600">
            Experience Model
          </p>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-800 dark:text-white sm:text-4xl">
            Four surfaces, one governed lifecycle
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-500 dark:text-gray-400">
            Capture and review may occur on a supported worker surface;
            classification stays deterministic; approval stays human-controlled;
            evidence and outputs stay governed. A device never expands a
            user&apos;s authority.
          </p>

        </div>


        {/* Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {cards.map((card) => (
            <div
              key={card.tag}
              className="
              min-h-64
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-7
              shadow-[0_6px_18px_rgba(14,31,61,0.05)]
              dark:border-slate-800
              dark:bg-slate-900
              "
            >

              <p className="text-xs font-semibold uppercase tracking-wide text-teal-600">
                {card.tag}
              </p>


              <h3 className="mt-4 text-base font-semibold leading-7 text-slate-800 dark:text-white">
                {card.title}
              </h3>


              <p className="mt-5 text-sm leading-6 text-gray-500 dark:text-gray-400">
                {card.description}
              </p>


            </div>
          ))}

        </div>

      </div>
    </section>
  );
}