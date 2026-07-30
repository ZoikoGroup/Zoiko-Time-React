"use client";

import Image from "next/image";

const features = [
  "SSO & MFA integrations",
  "Lifecycle management",
  "Least privilege access",
  "Authorization evidence",
];

export default function IdentityAccess() {
  return (
    <section className="w-full bg-white py-12 dark:bg-slate-950 sm:py-16 lg:py-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-10 px-5 sm:px-8 lg:flex-row lg:gap-16 lg:px-10">

        {/* Content */}
        <div className="w-full lg:w-[50%]">

          {/* Heading */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-950/5 dark:bg-white/10">
              <Image
                src="/enterprise/access-icon.png"
                alt=""
                width={24}
                height={24}
                className="h-6 w-6 object-contain dark:brightness-0 dark:invert"
              />
            </div>

            <h2 className="text-2xl font-extrabold leading-8 text-sky-950 dark:text-white">
              Identity &amp; Access
            </h2>
          </div>

          {/* Description */}
          <p className="mt-6 max-w-[522px] text-base font-normal leading-6 text-zinc-700 dark:text-slate-300">
            Evaluate authentication, account lifecycle, least privilege, role
            separation, and access evidence.
          </p>

          {/* Features */}
          <div className="mt-8 flex flex-col gap-3">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-2"
              >
                <Image
                  src="/enterprise/tick.png"
                  alt=""
                  width={16}
                  height={16}
                  className="h-4 w-4 shrink-0 object-contain"
                />

                <p className="text-sm font-semibold leading-5 text-sky-950 dark:text-white">
                  {feature}
                </p>
              </div>
            ))}
          </div>

          {/* Learn More */}
          <button
            type="button"
            className="mt-8 text-base font-bold leading-6 text-emerald-500 transition hover:text-emerald-600"
          >
            Learn more →
          </button>
        </div>

        {/* Image */}
        <div className="w-full lg:w-[50%]">
          <Image
            src="/enterprise/access.png"
            alt="Identity and access"
            width={551}
            height={367}
            className="h-auto w-full object-contain"
          />
        </div>

      </div>
    </section>
  );
}