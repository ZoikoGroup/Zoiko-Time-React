"use client";

const roles = [
  {
    title: "Workers",
    description: "Own-record visibility, correction, and support.",
  },
  {
    title: "Reviewers & managers",
    description: "Review queues, decisions, and separation of duties.",
  },
  {
    title: "Administrators & IT",
    description: "Configuration, identity, access, and integrations.",
  },
  {
    title: "Developers",
    description: "Development guidance and current technical contracts.",
  },
  {
    title: "Security, privacy & legal",
    description: "Governance evidence and worker-rights doctrine.",
  },
  {
    title: "Procurement & leadership",
    description: "Enterprise readiness, support model, and commercial terms.",
  },
];

const stages = [
  {
    title: "Evaluating",
    description:
      "Product overview, Trust Center, Enterprise readiness, Pricing. Evidence first, conversation second.",
  },
  {
    title: "Implementing",
    description:
      "Getting Started, Product Documentation, Administration & Policy, Development Documentation.",
  },
  {
    title: "Operating",
    description:
      "Help Center, Release Notes, System Status, Enterprise Support. Support intent is never diverted to sales.",
  },
];

function InfoCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-5 py-6 shadow-[0px_1px_2px_0px_rgba(11,18,32,0.04)] transition-colors dark:border-white/10 dark:bg-white/[0.03]">
      <h3 className="text-base font-bold leading-6 text-slate-900 dark:text-white">
        {title}
      </h3>

      <p className="mt-1.5 text-base font-normal leading-6 text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </div>
  );
}

export default function RoleStage() {
  return (
    <section className="w-full bg-white py-14 sm:py-16 lg:py-20 dark:bg-[#0b1220]">
      <div className="mx-auto grid w-full max-w-[1124px] grid-cols-1 gap-12 px-5 sm:px-7 lg:grid-cols-2 lg:gap-14">
        
        {/* Choose by role */}
        <div className="flex flex-col gap-3.5">
          <div>
            <h2 className="text-2xl font-bold leading-7 text-slate-900 dark:text-white">
              Choose by role
            </h2>
          </div>

          <p className="text-base font-normal leading-7 text-gray-600 dark:text-gray-300">
            Role is{" "}
            <strong className="font-bold">
              explicitly selected
            </strong>
            , never inferred from your browsing. Selecting one filters the
            directory; it does not create a profile.
          </p>

          <div className="flex flex-col gap-4 pt-1">
            {roles.map((role) => (
              <InfoCard
                key={role.title}
                title={role.title}
                description={role.description}
              />
            ))}
          </div>
        </div>

        {/* Choose by stage */}
        <div className="flex flex-col gap-3.5">
          <div>
            <h2 className="text-2xl font-bold leading-7 text-slate-900 dark:text-white">
              Choose by stage
            </h2>
          </div>

          <p className="text-base font-normal leading-7 text-gray-600 dark:text-gray-300">
            Contextual next steps by declared stage — and a demo request never
            substitutes for content that should exist.
          </p>

          <div className="flex flex-col gap-4 pt-1">
            {stages.map((stage) => (
              <InfoCard
                key={stage.title}
                title={stage.title}
                description={stage.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}