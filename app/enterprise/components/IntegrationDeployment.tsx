"use client";

import Image from "next/image";

const deploymentOptions = [
  {
    title: "Integration & Output Validation",
    description:
      "Validate how ZoikoTime connects and performs with your tools.",
    image: "/enterprise/integration1.png",
  },
  {
    title: "Deployment Architecture",
    description:
      "Understand hosting, data handling, and network considerations.",
    image: "/enterprise/deployment.png",
  },
  {
    title: "Security & Compliance Alignment",
    description:
      "Align with your security, compliance, and assurance needs.",
    image: "/enterprise/security.png",
  },
];

const deploymentJourney = [
  {
    title: "Discovery call & needs assessment",
    description: "Understand goals, scope, and success criteria.",
  },
  {
    title: "Solution walkthrough & validation plan",
    description: "Review configuration, integrations, and evaluation plan.",
  },
  {
    title: "Pilot & human review",
    description: "Capture evidence and refine with your team.",
  },
  {
    title: "Controlled release & ongoing support",
    description: "Operate with confidence and continuous improvement.",
  },
];

export default function IntegrationDeployment() {
  return (
    <section className="w-full bg-white py-16 dark:bg-slate-950 sm:py-20">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">

        {/* Integration & Deployment Options */}
        <div className="w-full">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-extrabold leading-9 text-sky-950 dark:text-white">
              Integration &amp; deployment options
            </h2>

            <p className="text-base font-normal leading-6 text-zinc-700 dark:text-slate-300">
              Flexible approaches that fit your environment.
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-4">
            {deploymentOptions.map((option) => (
              <div
                key={option.title}
                className="flex w-full items-center gap-4 rounded-lg border border-sky-950/10 p-5 dark:border-white/10"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10">
                  <Image
                    src={option.image}
                    alt=""
                    width={24}
                    height={24}
                    className="h-6 w-6 object-contain"
                  />
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                    {option.title}
                  </h3>

                  <p className="mt-0.5 text-xs font-normal leading-4 text-zinc-700 dark:text-slate-300">
                    {option.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Typical Deployment Journey */}
        <div className="w-full">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-extrabold leading-9 text-sky-950 dark:text-white">
              Typical deployment journey
            </h2>

            <p className="text-base font-normal leading-6 text-zinc-700 dark:text-slate-300">
              A guided path to operational truth.
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-6">
            {deploymentJourney.map((step) => (
              <div
                key={step.title}
                className="flex items-start gap-4"
              >
                {/* Tick */}
                <div className="flex h-6 w-6 shrink-0 items-center justify-center">
                  <Image
                    src="/enterprise/tick2.png"
                    alt=""
                    width={24}
                    height={24}
                    className="h-6 w-6 object-contain"
                  />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                    {step.title}
                  </h3>

                  <p className="mt-0.5 text-sm font-normal leading-5 text-zinc-700 dark:text-slate-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}