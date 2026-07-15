import React from "react";
import { Target, Search, Eye } from "lucide-react";

const cards = [
  {
    icon: Target,
    title: "Context-Aware, Not Intrusive",
    description:
      "Location and context signals are used exclusively for policy resolution. They are not retained beyond the decision window or used for behavioural profiling.",
  },
  {
    icon: Search,
    title: "Transparent Processing",
    description:
      "Every worker can see which policies were applied to their workforce record and why — in plain language, not legal jargon.",
  },
  {
    icon: Eye,
    title: "Full User Visibility",
    description:
      "Workers have access to their own compliance record and can request a full explanation of any policy decision that affected their pay or schedule.",
  },
];

export default function PrivacyEthics() {
  return (
    <section
      className="
      w-full
      bg-slate-100
      dark:bg-slate-950
      py-16
      md:py-20
      transition-colors
      duration-300
      "
    >

      <div className="max-w-[1440px] mx-auto px-5">


        {/* Header */}

        <div className="text-center">

          <p
            className="
            text-teal-500
            text-xs
            font-semibold
            uppercase
            tracking-wider
            "
          >
            Privacy & Ethics
          </p>


          <h2
            className="
            mt-5
            text-black
            dark:text-white
            text-3xl
            md:text-4xl
            font-bold
            leading-tight
            "
          >
            Context-Aware Without Overreach
          </h2>


          <p
            className="
            mt-5
            max-w-xl
            mx-auto
            text-gray-600
            dark:text-gray-300
            text-sm
            md:text-base
            leading-7
            "
          >
            ZoikoTime uses context to ensure compliance — not to monitor
            behaviour. The distinction is architectural.
          </p>

        </div>



        {/* Cards */}

        <div
          className="
          mt-14
          md:mt-24
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
          "
        >

          {cards.map((card, index) => {

            const Icon = card.icon;

            return (

              <div
                key={index}
                className="
                bg-white
                dark:bg-slate-900
                rounded-2xl
                border
                border-slate-200
                dark:border-slate-800
                shadow-[0px_2px_16px_0px_rgba(10,22,40,0.07)]
                p-7
                min-h-[240px]
                transition-colors
                duration-300
                "
              >


                {/* Icon */}

                <div
                  className="
                  w-11
                  h-11
                  flex
                  items-center
                  justify-center
                  rounded-lg
                  bg-slate-100
                  dark:bg-slate-800
                  "
                >

                  <Icon
                    size={30}
                    strokeWidth={2}
                    className="
                    text-black
                    dark:text-white
                    "
                  />

                </div>



                {/* Title */}

                <h3
                  className="
                  mt-7
                  text-black
                  dark:text-white
                  text-base
                  font-bold
                  leading-7
                  "
                >
                  {card.title}
                </h3>




                {/* Description */}

                <p
                  className="
                  mt-4
                  text-gray-600
                  dark:text-gray-300
                  text-sm
                  leading-6
                  "
                >
                  {card.description}
                </p>


              </div>

            );

          })}

        </div>


      </div>


    </section>
  );
}