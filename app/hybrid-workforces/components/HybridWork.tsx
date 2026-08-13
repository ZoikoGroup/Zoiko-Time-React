"use client";

import Image from "next/image";

const workSettings = [
  {
    image: "/hybrid-workforces/office.png",
    alt: "Office workforce",
  },
  {
    image: "/hybrid-workforces/remote.png",
    alt: "Remote workforce",
  },
  {
    image: "/hybrid-workforces/field.png",
    alt: "Field workforce",
  },
];

export default function HybridWork() {
  return (
    <section className="w-full bg-white px-4 py-16 transition-colors dark:bg-slate-950 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1180px]">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
            Where Hybrid Work Happens
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-slate-800 dark:text-white sm:text-4xl">
            One system across every setting
          </h2>

          <p className="mt-5 text-sm leading-6 text-gray-500 dark:text-slate-400 sm:text-base sm:leading-7">
            Office, remote, or field — work context is declared or configured,
            and always worker-visible.
          </p>
        </div>

        {/* Images */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {workSettings.map((item) => (
            <div
              key={item.image}
              className="
                relative
                w-full
                overflow-hidden
                rounded-2xl
                bg-slate-800
                shadow-[0_6px_18px_rgba(14,31,61,0.05)]
                outline
                outline-1
                outline-offset-[-1px]
                outline-slate-200
                dark:outline-slate-700
              "
            >
              <Image
                src={item.image}
                alt={item.alt}
                width={360}
                height={320}
                className="block h-auto w-full"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}