"use client";

import Image from "next/image";

export default function WhyZoikoTimeHybrid() {
  return (
    <section
      className="
        w-full
        bg-white
        py-16
        sm:py-20
        lg:py-[80px]
        dark:bg-slate-950
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1180px]
          px-6
          sm:px-8
          lg:px-0
        "
      >
        {/* =====================================================
            HEADER
        ===================================================== */}
        <div className="text-center">
          <span
            className="
              text-xs
              font-semibold
              uppercase
              leading-5
              tracking-widest
              text-teal-600
              dark:text-emerald-400
            "
          >
            Why ZoikoTime for Hybrid
          </span>

          <h2
            className="
              mt-2
              text-3xl
              font-bold
              leading-10
              tracking-tight
              text-slate-800
              sm:text-4xl
              dark:text-white
            "
          >
            Six things a hybrid system has to get right
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-[720px]
              text-base
              font-normal
              leading-7
              text-gray-500
              dark:text-slate-400
            "
          >
            Coordinate, clarify, standardize, defend, respect, and deploy —
            proven, not promised.
          </p>
        </div>

        {/* =====================================================
            DESKTOP / TABLET GRID
        ===================================================== */}
        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {/* =================================================
              COORDINATE
          ================================================= */}
          <div
            className="
              rounded-[20px]
              border
              border-slate-200
              bg-white
              p-6
              shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)]
              sm:col-span-2
              lg:col-span-2
              lg:row-span-2
              dark:border-slate-700
              dark:bg-slate-900
            "
          >
            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-xl
                bg-emerald-50
                dark:bg-emerald-950
              "
            >
              <CheckIcon />
            </div>

            <h3
              className="
                mt-5
                text-base
                font-bold
                leading-6
                text-slate-800
                dark:text-white
              "
            >
              Coordinate
            </h3>

            <p
              className="
                mt-2
                max-w-[475px]
                text-xs
                font-normal
                leading-5
                text-gray-500
                dark:text-slate-400
              "
            >
              Unify work context, schedules, time, breaks, projects, and
              approvals across office and remote work — in one reviewable
              system.
            </p>

            {/* Metrics */}
            <div
              className="
                mt-10
                grid
                grid-cols-1
                gap-3
                sm:grid-cols-3
              "
            >
              <Metric
                value="94%"
                label="Records ready"
              />

              <Metric
                value="6"
                label="Pending review"
              />

              <Metric
                value="3"
                label="Exceptions"
              />
            </div>
          </div>

          {/* =================================================
              IMAGE — ONE TEAM, MANY PLACES
          ================================================= */}
          {/* =================================================
    IMAGE 1 — ONE TEAM, MANY PLACES
================================================= */}
<div
  className="
    relative
    w-full
    overflow-hidden
    rounded-[20px]
    bg-slate-100
    shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)]
    sm:col-span-2
    lg:col-span-2
    dark:bg-slate-900
  "
>
  <Image
    src="/hybrid-workforces/hybrid-team.png"
    alt="One team, many places"
    width={558}
    height={160}
    className="
      h-auto
      w-full
      object-contain
    "
    sizes="
      (max-width: 640px) 100vw,
      (max-width: 1024px) 100vw,
      558px
    "
  />
</div>

          {/* =================================================
    IMAGE 2 — RESPECT
================================================= */}
<div
  className="
    relative
    w-full
    overflow-hidden
    rounded-[20px]
    bg-slate-100
    shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)]
    dark:bg-slate-900
  "
>
  <Image
    src="/hybrid-workforces/hybrid-respect.png"
    alt="Respect"
    width={256}
    height={160}
    className="
      h-auto
      w-full
      object-contain
    "
    sizes="
      (max-width: 640px) 100vw,
      (max-width: 1024px) 50vw,
      256px
    "
  />
</div>

          {/* =================================================
              CLARIFY
          ================================================= */}
          <div
            className="
              min-h-[160px]
              rounded-[20px]
              border
              border-slate-200
              bg-gradient-to-br
              from-emerald-50
              to-white
              p-6
              shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)]
              dark:border-slate-700
              dark:from-emerald-950
              dark:to-slate-900
            "
          >
            <SmallIcon />

            <h3
              className="
                mt-4
                text-base
                font-bold
                leading-6
                text-slate-800
                dark:text-white
              "
            >
              Clarify
            </h3>

            <p
              className="
                mt-2
                text-xs
                font-normal
                leading-5
                text-gray-500
                dark:text-slate-400
              "
            >
              Workers and managers see the same status, context, owner, and
              next action.
            </p>
          </div>

          {/* =================================================
              STANDARDIZE
          ================================================= */}
          <div
            className="
              rounded-[20px]
              border
              border-slate-200
              bg-white
              p-6
              shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)]
              sm:col-span-2
              lg:col-span-2
              dark:border-slate-700
              dark:bg-slate-900
            "
          >
            <SmallIcon />

            <h3
              className="
                mt-4
                text-base
                font-bold
                leading-6
                text-slate-800
                dark:text-white
              "
            >
              Standardize
            </h3>

            <p
              className="
                mt-2
                max-w-[510px]
                text-xs
                font-normal
                leading-5
                text-gray-500
                dark:text-slate-400
              "
            >
              Apply versioned policy consistently while preserving lawful
              regional and worker-type variation.
            </p>
          </div>

          {/* =================================================
              DEFEND
          ================================================= */}
          <div
            className="
              min-h-[160px]
              rounded-[20px]
              border
              border-slate-200
              bg-white
              p-6
              shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)]
              dark:border-slate-700
              dark:bg-slate-900
            "
          >
            <SmallIcon />

            <h3
              className="
                mt-4
                text-base
                font-bold
                leading-6
                text-slate-800
                dark:text-white
              "
            >
              Defend
            </h3>

            <p
              className="
                mt-2
                text-xs
                font-normal
                leading-5
                text-gray-500
                dark:text-slate-400
              "
            >
              Preserve evidence, review, approval, and change history for
              payroll, audit, and disputes.
            </p>
          </div>

         {/* =================================================
    IMAGE 3 — DEPLOY
================================================= */}
<div
  className="
    relative
    w-full
    overflow-hidden
    rounded-[20px]
    bg-slate-100
    shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)]
    dark:bg-slate-900
  "
>
  <Image
    src="/hybrid-workforces/hybrid-deploy.png"
    alt="Deploy hybrid workforce management"
    width={256}
    height={160}
    className="
      h-auto
      w-full
      object-contain
    "
    sizes="
      (max-width: 640px) 100vw,
      (max-width: 1024px) 50vw,
      256px
    "
  />
</div>
          </div>
        </div>

    </section>
  );
}

/* =============================================================
   METRIC
============================================================= */

function Metric({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div
      className="
        rounded-lg
        border
        border-slate-200
        bg-gray-50
        px-4
        py-3
        text-center
        dark:border-slate-700
        dark:bg-slate-800
      "
    >
      <div
        className="
          text-base
          font-extrabold
          leading-7
          text-slate-800
          dark:text-white
        "
      >
        {value}
      </div>

      <div
        className="
          mt-1
          text-[8.5px]
          font-normal
          uppercase
          leading-3
          tracking-tight
          text-gray-500
          dark:text-slate-400
        "
      >
        {label}
      </div>
    </div>
  );
}

/* =============================================================
   CHECK ICON
============================================================= */

function CheckIcon({ dark = false }: { dark?: boolean }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="M3 8.2L6.2 11L13 4.8"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={
          dark
            ? "text-teal-300"
            : "text-teal-700 dark:text-emerald-400"
        }
      />
    </svg>
  );
}

/* =============================================================
   SMALL ICON
============================================================= */

function SmallIcon() {
  return (
    <div
      className="
        flex
        h-9
        w-9
        items-center
        justify-center
        rounded-xl
        bg-emerald-50
        dark:bg-emerald-950
      "
    >
      <CheckIcon />
    </div>
  );
}