"use client";

import Link from "next/link";

export default function ProjectFinalCTA() {
  return (
    <section className="w-full bg-white py-20 sm:py-24 lg:py-[80px] dark:bg-slate-950">
      <div
        className="
          relative
          mx-auto
          flex
          min-h-[384px]
          w-full
          max-w-[1200px]
          flex-col
          items-center
          justify-center
          overflow-hidden
          rounded-3xl
          bg-gradient-to-br
          from-slate-900
          to-sky-950
          px-6
          py-16
          text-center
          sm:px-10
          lg:px-12
        "
      >
        {/* =====================================================
            EYEBROW
        ===================================================== */}
        <div className="flex items-center gap-2">
          <div className="h-0.5 w-4 bg-emerald-300" />

          <span
            className="
              text-xs
              font-bold
              uppercase
              leading-5
              tracking-widest
              text-emerald-300
            "
          >
            People, Project Time, Approvals &amp; Cost Context — One Workflow
          </span>
        </div>

        {/* =====================================================
            HEADING
        ===================================================== */}
        <h2
          className="
            mt-4
            max-w-[630px]
            text-2xl
            font-bold
            leading-9
            text-white
            sm:text-3xl
            sm:leading-[49px]
          "
        >
          Give every project team clear records,
          <br className="hidden sm:block" />
          and every decision a reliable next step.
        </h2>

        {/* =====================================================
            DESCRIPTION
        ===================================================== */}
        <p
          className="
            mt-5
            max-w-[600px]
            text-sm
            font-normal
            leading-6
            text-white/60
            sm:text-base
          "
        >
          Evaluate against your projects, workforce mix, approval model,
          <br className="hidden sm:block" />
          financial systems and global operating model.
        </p>

        {/* =====================================================
            BUTTONS
        ===================================================== */}
        <div
          className="
            mt-8
            flex
            w-full
            flex-col
            items-center
            justify-center
            gap-3

            sm:w-auto
            sm:flex-row
          "
        >
          {/* Enterprise Demo */}
          <Link
            href="/request-enterprise-demo"
            className="
              flex
              h-12
              w-full
              items-center
              justify-center
              rounded-lg
              bg-green-400
              px-6
              text-base
              font-semibold
              text-white
              transition
              hover:bg-green-500
              sm:w-[240px]
            "
          >
            Request Enterprise Demo
          </Link>

          {/* Start Free */}
          <Link
            href="/start-free"
            className="
              flex
              h-12
              w-full
              items-center
              justify-center
              rounded-lg
              border
              border-white/30
              px-6
              text-base
              font-semibold
              text-white
              transition
              hover:bg-white/10
              sm:w-[128px]
            "
          >
            Start Free
          </Link>
        </div>
      </div>
    </section>
  );
}