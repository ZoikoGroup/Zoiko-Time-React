"use client";

import Image from "next/image";

const cards = [
  {
    image: "/enterprise-support/human-led-owner.png",
    alt: "Support owner reviewing a case",
    text: "An owner reviews every case before it moves.",
  },
  {
    image: "/enterprise-support/human-led-escalation.png",
    alt: "Authorized team handling an escalation",
    text: "Escalations reach an authorized team.",
  },
  {
    image: "/enterprise-support/human-led-worker.png",
    alt: "Worker requesting a correction",
    text: "Workers can request a correction directly.",
  },
];

export default function HumanLedSupport() {
  return (
    <section
      className="
        w-full
        bg-white
        text-slate-800
        dark:bg-slate-950
        dark:text-slate-100
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1180px]
          px-4
          py-12
          sm:px-6
          sm:py-14
          lg:px-8
          lg:py-16
        "
      >
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="flex flex-col items-center text-center">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span
              className="
                h-1.5
                w-1.5
                shrink-0
                rounded-sm
                bg-teal-600
                dark:bg-teal-400
              "
            />

            <span
              className="
                text-xs
                font-semibold
                uppercase
                leading-5
                tracking-wide
                text-teal-700
                dark:text-teal-400
              "
            >
              Human-Led, Every Step
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              mt-5
              max-w-[1044px]
              text-center
              text-3xl
              font-semibold
              leading-[1.15]
              tracking-tight
              text-slate-800
              dark:text-slate-100
              sm:text-4xl
              sm:leading-10
            "
          >
            A person is accountable at every stage.
          </h2>
        </div>

        {/* =====================================================
            IMAGE CARDS
        ===================================================== */}

        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:mt-12
            lg:grid-cols-[425px_320px_320px]
            lg:gap-5
            lg:justify-center
          "
        >
          {cards.map((card, index) => (
            <div
              key={card.text}
              className={`
                relative
                w-full
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-slate-100
                dark:border-slate-700
                dark:bg-slate-900

                ${
                  index === 0
                    ? "lg:h-[409px]"
                    : "lg:h-[409px]"
                }

                h-[360px]
                sm:h-[380px]
              `}
            >
              {/* =================================================
                  IMAGE
              ================================================= */}

              <Image
                src={card.image}
                alt={card.alt}
                fill
                priority={index === 0}
                className="
                  object-cover
                  object-center
                "
                sizes="
                  (max-width: 639px) 100vw,
                  (max-width: 1023px) 50vw,
                  425px
                "
              />

              {/* =================================================
                  BOTTOM GRADIENT
              ================================================= */}

              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  h-24
                  bg-gradient-to-t
                  from-slate-800/80
                  via-slate-800/35
                  to-transparent
                "
              />

              {/* =================================================
                  CAPTION
              ================================================= */}

              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  px-[18px]
                  pb-4
                "
              >
                <p
                  className="
                    text-xs
                    font-medium
                    leading-5
                    text-white
                  "
                >
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}