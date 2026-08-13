"use client";

import Image from "next/image";

const workAreas = [
  {
    title: "Delivery stand-up",
    image: "/project-based/delivery-standup.png",
    featured: true,
  },
  {
    title: "On-site review",
    image: "/project-based/onsite-review.png",
  },
  {
    title: "Cross-functional planning",
    image: "/project-based/cross-functional-planning.png",
  },
  {
    title: "Remote contributor",
    image: "/project-based/remote-contributor.png",
  },
  {
    title: "Finance handoff",
    image: "/project-based/finance-handoff.png",
  },
];

export default function WhereProjectWorkHappens() {
  return (
    <section
      className="
        w-full
        bg-white
        py-20
        sm:py-24
        lg:py-[80px]
        dark:bg-slate-950
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1200px]
          px-6
          sm:px-8
          lg:px-0
        "
      >
        {/* =====================================================
            EYEBROW
        ===================================================== */}
        <div className="flex items-center gap-2">
          <div className="h-0.5 w-4 shrink-0 bg-emerald-600" />

          <span
            className="
              text-xs
              font-bold
              uppercase
              leading-5
              tracking-widest
              text-emerald-700
              dark:text-emerald-400
            "
          >
            Where Project Work Happens
          </span>
        </div>

        {/* =====================================================
            HEADING
        ===================================================== */}
        <h2
          className="
            mt-2
            max-w-[918px]
            text-3xl
            font-bold
            leading-10
            text-slate-900
            sm:text-4xl
            dark:text-white
          "
        >
          Teams, sites and stakeholders — as peers
        </h2>

        {/* =====================================================
            IMAGE GRID
        ===================================================== */}
        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-4

            sm:grid-cols-2

            lg:mt-[60px]
            lg:grid-cols-3
            lg:grid-rows-2
            lg:gap-4
          "
        >
          {/* =================================================
              FEATURED IMAGE
          ================================================= */}
          <div
            className="
              relative
              h-[420px]
              overflow-hidden
              rounded-2xl

              sm:h-[460px]

              lg:row-span-2
              lg:h-[724px]
            "
          >
            <Image
              src={workAreas[0].image}
              alt={workAreas[0].title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 462px"
            />

            {/* Bottom gradient */}
            <div
              className="
                absolute
                inset-x-0
                bottom-0
                h-16
                bg-gradient-to-b
                from-slate-900/0
                to-slate-900/75
              "
            />

            {/* Label */}
            <span
              className="
                absolute
                bottom-4
                left-4
                text-xs
                font-semibold
                leading-5
                text-white
              "
            >
              {workAreas[0].title}
            </span>
          </div>

          {/* =================================================
              SMALL IMAGES
          ================================================= */}
          {workAreas.slice(1).map((item) => (
            <div
              key={item.title}
              className="
                relative
                h-[280px]
                overflow-hidden
                rounded-2xl

                sm:h-[320px]

                lg:h-[354px]
              "
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 355px"
              />

              {/* Bottom gradient */}
              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  h-12
                  bg-gradient-to-b
                  from-slate-900/0
                  to-slate-900/75
                "
              />

              {/* Label */}
              <span
                className="
                  absolute
                  bottom-4
                  left-4
                  text-xs
                  font-semibold
                  leading-5
                  text-white
                "
              >
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}