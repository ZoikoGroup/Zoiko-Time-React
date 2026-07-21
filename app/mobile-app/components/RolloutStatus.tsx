"use client";

import React from "react";
import Link from "next/link";

const statusCards = [
  {
    title: "Current status",
    value: (
      <>
        Controlled rollout
        <br />
        preparation
      </>
    ),
  },
  {
    title: "App-store links",
    value: (
      <>
        Coming after
        <br />
        approval
      </>
    ),
  },
  {
    title: "Enterprise pilot",
    value: (
      <>
        Available by
        <br />
        approval
      </>
    ),
  },
  {
    title: "Customer access",
    value: (
      <>
        Requires tenant
        <br />
        workspace
      </>
    ),
  },
  {
    title: "Worker access",
    value: (
      <>
        Requires invitation or
        <br />
        login
      </>
    ),
  },
];

const stores = [
  {
    name: "App Store",
  },
  {
    name: "Google Play",
  },
];

export default function RolloutStatus() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden

        py-20

        transition-colors
        duration-300

        bg-gray-50

        dark:bg-slate-950
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none

          absolute

          left-1/2

          top-[-220px]

          h-[500px]

          w-[760px]

          -translate-x-1/2

          rounded-full

          bg-[radial-gradient(circle,rgba(20,184,166,0.08)_0%,transparent_70%)]

          dark:bg-[radial-gradient(circle,rgba(20,184,166,0.12)_0%,transparent_70%)]
        "
      />


      <div
        className="
          relative

          mx-auto

          max-w-[1440px]

          px-6

          sm:px-10

          lg:px-16
        "
      >

        {/* Header */}
        <div className="mx-auto max-w-[700px] text-center">

          <p
            className="
              text-xs

              font-semibold

              uppercase

              tracking-[0.2em]

              text-teal-600

              dark:text-teal-400
            "
          >
            Rollout Status
          </p>


          <h2
            className="
              mt-3

              text-3xl

              font-bold

              tracking-tight

              text-slate-900

              dark:text-white

              sm:text-4xl
            "
          >
            Mobile app rollout status
          </h2>


          <p
            className="
              mt-6

              text-base

              leading-7

              text-slate-600

              dark:text-slate-400
            "
          >
            The ZoikoTime Mobile App is being prepared for controlled rollout.
            Public App Store and Google Play links will be added once the iOS
            and Android listings are approved and available.
          </p>

        </div>


        {/* Status Cards */}
        <div
          className="
            mx-auto

            mt-16

            grid

            max-w-[920px]

            grid-cols-1

            gap-4

            sm:grid-cols-2

            lg:grid-cols-5
          "
        >

          {statusCards.map((card) => (

            <div
              key={card.title}
              className="
                flex

                min-h-[96px]

                flex-col

                items-center

                justify-center

                rounded-xl

                border

                border-slate-200

                bg-white

                px-3

                py-4

                text-center

                shadow-[0px_6px_18px_rgba(14,31,61,0.05)]

                transition-colors

                dark:border-slate-800

                dark:bg-slate-900

                dark:shadow-[0px_6px_18px_rgba(0,0,0,0.18)]
              "
            >

              <p
                className="
                  text-[11px]

                  font-semibold

                  uppercase

                  tracking-wide

                  text-slate-500

                  dark:text-slate-500
                "
              >
                {card.title}
              </p>


              <p
                className="
                  mt-2

                  text-xs

                  font-semibold

                  leading-4

                  text-slate-800

                  dark:text-slate-200
                "
              >
                {card.value}
              </p>

            </div>

          ))}

        </div>


        {/* App Store Cards */}
        <div
          className="
            mx-auto

            mt-12

            grid

            max-w-[600px]

            grid-cols-1

            gap-5

            sm:grid-cols-2
          "
        >

          {stores.map((store) => (

            <div
              key={store.name}
              className="
                flex

                h-32

                flex-col

                items-center

                justify-center

                rounded-2xl

                border

                border-slate-300

                bg-white

                transition-colors

                dark:border-slate-700

                dark:bg-slate-900
              "
            >

              <p
                className="
                  text-xs

                  text-slate-500

                  dark:text-slate-500
                "
              >
                Coming to
              </p>


              <p
                className="
                  mt-1

                  text-base

                  font-semibold

                  text-slate-900

                  dark:text-white
                "
              >
                {store.name}
              </p>


              <span
                className="
                  mt-3

                  rounded-full

                  bg-slate-100

                  px-4

                  py-1

                  text-[10px]

                  font-bold

                  uppercase

                  tracking-wide

                  text-slate-500

                  dark:bg-slate-800

                  dark:text-slate-400
                "
              >
                Coming soon
              </span>

            </div>

          ))}

        </div>


        {/* CTA */}
        <div className="mt-12 flex justify-center">

          <Link
  href="/request-a-demo"
  className="
    h-11
    rounded-[10px]
    bg-teal-600
    px-7
    text-sm
    font-semibold
    text-white
    shadow-[0px_6px_16px_rgba(16,162,141,0.28)]
    transition
    hover:bg-teal-700
    dark:bg-teal-500
    dark:hover:bg-teal-400
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