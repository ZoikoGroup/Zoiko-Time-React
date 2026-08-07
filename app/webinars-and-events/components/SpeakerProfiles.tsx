"use client";

import Image from "next/image";

const speakers = [
  {
    image: "/webinars-events/speaker-5.png",
    name: "Compliance Lead",
    role: "Trust & Governance",
    description:
      "Speaks on policy configuration and evidence standards.",
  },
  {
    image: "/webinars-events/speaker-6.png",
    name: "Product Lead",
    role: "Evidence Platform",
    description:
      "Walks through the state model and reviewer tooling.",
  },
  {
    image: "/webinars-events/speaker-7.png",
    name: "Customer Success Lead",
    role: "Implementation",
    description:
      "Hosts onboarding workshops and office hours.",
  },
  {
    image: "/webinars-events/speaker-8.png",
    name: "Accessibility Lead",
    role: "Platform Standards",
    description:
      "Covers WCAG standards across the product.",
  },
];

export default function SpeakerProfiles() {
  return (
    <section className="bg-white py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-2 w-2 rounded-sm bg-teal-600" />

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-600 dark:text-teal-400">
              Speaker Profiles
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-semibold leading-tight text-slate-900 dark:text-white md:text-4xl">
            Hear from the people who build this.
          </h2>
        </div>

        {/* Speakers */}
        <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-4">
          {speakers.map((speaker) => (
            <div
              key={speaker.name}
              className="flex flex-col items-center text-center"
            >
              {/* Avatar */}
              <div className="relative h-28 w-28 overflow-hidden rounded-full border-[3px] border-white shadow-lg dark:border-slate-700">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="mt-6 text-lg font-semibold text-slate-900 dark:text-white">
                {speaker.name}
              </h3>

              {/* Role */}
              <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-teal-600 dark:text-teal-400">
                {speaker.role}
              </p>

              {/* Description */}
              <p className="mt-4 max-w-[220px] text-sm leading-6 text-slate-500 dark:text-slate-400">
                {speaker.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}