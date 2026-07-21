import React from "react";
import Link from "next/link";

export default function MobileWorkforceAssurance() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden

        px-5
        py-20

        transition-colors
        duration-300

        bg-gradient-to-br
        from-teal-50
        via-white
        to-slate-100

        dark:from-slate-800
        dark:to-blue-950

        sm:px-8
        lg:px-12
      "
    >

      {/* Background Glow */}
      <div
        className="
          pointer-events-none

          absolute

          left-1/2

          top-[-180px]

          h-[420px]

          w-[600px]

          -translate-x-1/2

          rounded-full

          bg-[radial-gradient(circle,rgba(20,184,166,0.12)_0%,transparent_70%)]

          dark:bg-[radial-gradient(circle,rgba(20,184,166,0.18)_0%,transparent_70%)]
        "
      />


      <div
        className="
          relative

          mx-auto

          flex

          w-full

          max-w-[1180px]

          flex-col

          items-center

          text-center
        "
      >

        {/* Eyebrow */}
        <p
          className="
            text-xs

            font-semibold

            uppercase

            leading-6

            tracking-[0.16em]

            text-teal-600

            dark:text-teal-400

            sm:text-base

            sm:tracking-[2.56px]
          "
        >
          Mobile Workforce Assurance
        </p>


        {/* Heading */}
        <h1
          className="
            mt-8

            max-w-[700px]

            text-3xl

            font-bold

            leading-tight

            text-slate-900

            dark:text-white

            sm:text-4xl

            sm:leading-[56px]
          "
        >
          Bring workforce assurance to every approved work environment
        </h1>


        {/* Description */}
        <p
          className="
            mt-6

            max-w-[650px]

            text-sm

            font-normal

            leading-6

            text-slate-600

            dark:text-white/80

            sm:text-base
          "
        >
          Give Workers a clear mobile experience for managing their status, and
          give Managers the tools to review mobile activity, exceptions,
          approvals, and audit-ready records with confidence.
        </p>


        {/* Buttons */}
        <div
          className="
            mt-10

            flex

            w-full

            flex-col

            items-center

            justify-center

            gap-4

            sm:flex-row
          "
        >

          {/* Request Tailored Demo */}
<Link
  href="/request-tailored-demo"
  className="
    w-full
    rounded-[10px]
    bg-teal-600
    px-6
    py-3
    text-base
    font-semibold
    leading-5
    text-white
    shadow-[0px_6px_16px_0px_rgba(16,162,141,0.28)]
    transition
    hover:bg-teal-500
    sm:w-auto
    inline-flex
    items-center
    justify-center
  "
>
  Request Tailored Demo
</Link>


{/* Request Mobile App Pilot Access */}
<Link
  href="/request-a-demo"
  className="
    w-full
    rounded-[10px]
    border
    border-slate-300
    bg-white/60
    px-6
    py-3
    text-base
    font-semibold
    leading-5
    text-slate-800
    transition
    hover:bg-white
    dark:border-white/30
    dark:bg-white/10
    dark:text-white
    dark:hover:bg-white/15
    sm:w-auto
    inline-flex
    items-center
    justify-center
  "
>
  Request Mobile App Pilot Access
</Link>

        </div>

      </div>

    </section>
  );
}