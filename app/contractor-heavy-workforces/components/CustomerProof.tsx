"use client";

import Image from "next/image";
import { FiCheckCircle } from "react-icons/fi";

const testimonials = [
  {
    role: "VP of Operations",
    company: "National Logistics Customer",
    quote:
      "We finally have one record for every contractor across a dozen agencies, instead of a dozen spreadsheets.",
    verified: "Consented · Verified Jul 2026",
    image: "/contractor-heavy-workforces/customer-1.png",
  },
  {
    role: "Director of Finance",
    company: "Enterprise Services Customer",
    quote:
      "Exports now match approvals every time — reconciliation used to take days.",
    verified: "Consented · Verified Jun 2026",
    image: "/contractor-heavy-workforces/customer-2.png",
  },
  {
    role: "PMO Lead",
    company: "Technology Customer",
    quote:
      "Project attribution used to be a guess. Now every hour is tied to a cost center automatically.",
    verified: "Consented · Verified May 2026",
    image: "/contractor-heavy-workforces/customer-3.png",
  },
];

function VerifiedMark() {
  return (
    <div className="flex h-4 w-4 shrink-0 items-center justify-center">
      <FiCheckCircle
        size={13}
        strokeWidth={1.8}
        className="text-teal-600 dark:text-teal-400"
      />
    </div>
  );
}

export default function CustomerProof() {
  return (
    <section className="w-full bg-white dark:bg-slate-950">
      <div
        className="
          mx-auto
          w-full
          max-w-[1180px]
          px-6
          py-16
          sm:px-8
          lg:py-20
        "
      >
        {/* Heading */}
        <div className="mb-10">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-sm bg-teal-600" />

            <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-teal-700 dark:text-teal-400">
              Customer Proof
            </span>
          </div>

          <h2 className="text-3xl font-semibold leading-10 tracking-[-0.02em] text-slate-800 dark:text-white sm:text-4xl">
            What operations and finance
            <br className="hidden sm:block" />
            teams say.
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.role}
              className="
                flex
                min-h-[250px]
                flex-col
                items-start
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-6
                dark:border-slate-700
                dark:bg-slate-900
              "
            >
              {/* Customer */}
              <div className="flex w-full items-center gap-3">
                <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.role}
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="text-sm font-semibold leading-5 text-slate-800 dark:text-white">
                    {testimonial.role}
                  </h3>

                  <p className="text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Quote */}
              <p className="mt-5 flex-1 text-sm font-normal leading-6 text-gray-700 dark:text-slate-300">
                “{testimonial.quote}”
              </p>

              {/* Verification */}
              <div className="mt-5 flex items-center gap-2">
                <VerifiedMark />

                <span className="text-xs font-semibold leading-4 text-teal-700 dark:text-teal-400">
                  {testimonial.verified}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}