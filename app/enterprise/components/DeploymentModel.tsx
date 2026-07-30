"use client";

import Image from "next/image";

const deploymentSteps = [
  {
    title: "Scope",
    description: (
      <>
        Define organization scope and
        <br />
        responsibilities.
      </>
    ),
    image: "/enterprise/scope.png",
  },
  {
    title: "Identity",
    description: <>Set up identity, roles, and access.</>,
    image: "/enterprise/identity1.png",
  },
  {
    title: "Policy",
    description: (
      <>
        Configure policies, approvals,
        <br />
        and guardrails.
      </>
    ),
    image: "/enterprise/policy1.png",
  },
  {
    title: "Integration",
    description: (
      <>
        Validate integrations and
        <br />
        deterministic outputs.
      </>
    ),
    image: "/enterprise/integration.png",
  },
  {
    title: "Pilot & Review",
    description: (
      <>
        Pilot, human review, and
        <br />
        evidence capture.
      </>
    ),
    image: "/enterprise/pilot.png",
  },
  {
    title: "Ongoing Support",
    description: (
      <>
        Go live with support,
        <br />
        improvement, and oversight.
      </>
    ),
    image: "/enterprise/ongoing.png",
  },
];

export default function DeploymentModel() {
  return (
    <section className="w-full bg-white py-10 dark:bg-slate-950 sm:py-14 lg:py-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-5 sm:px-8 lg:px-6">

        {/* Heading */}
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-base font-bold uppercase leading-6 tracking-[0.2em] text-emerald-500">
            Deployment Model
          </p>

          <h2 className="text-3xl font-extrabold leading-9 text-sky-950 dark:text-white">
            From evaluation to governed operation.
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">

          {/* Connecting Line - Desktop */}
          <div className="absolute left-0 right-0 top-[88px] hidden h-0.5 bg-indigo-200 lg:block dark:bg-indigo-900" />

          <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-8">

            {deploymentSteps.map((step) => (
              <div
                key={step.title}
                className="relative z-10 flex flex-col items-center"
              >

                {/* Image */}
                <div className="h-44 w-44 overflow-hidden rounded-lg bg-white shadow-lg outline outline-4 outline-white dark:bg-slate-900 dark:outline-slate-950">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={300}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-3 text-center text-base font-extrabold leading-6 text-sky-950 dark:text-white">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-1 text-center text-xs font-normal leading-4 text-zinc-700 dark:text-slate-300">
                  {step.description}
                </p>

              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}