import React from "react";

const testimonials = [
  {
    name: "James Whitfield",
    role: "Chief Compliance Officer · Global Financial Services",
    initial: "J",
    quote:
      "ZoikoTime reduced our audit preparation time by over 50% and gave us complete confidence in our workforce data for the first time. The evidence records are genuinely court-admissible — we tested this.",
  },
  {
    name: "Sophia Adeyemi",
    role: "VP Operations · NHS Trust · Healthcare",
    initial: "S",
    quote:
      "Our CFO approved ZoikoTime in one meeting. The ROI model was clear, the payback period was under 4 months, and the compliance documentation answered every procurement question before it was asked.",
  },
  {
    name: "Marcus Chen",
    role: "Chief Financial Officer · Global Bank · APAC",
    initial: "M",
    quote:
      "We had £2.4M in contractor billing disputes annually. ZoikoTime eliminated them within a quarter. The evidence records make every invoice defensible. We haven’t had a single dispute in 8 months.",
  },
];

export default function CustomerVoice() {
  return (
    <section
      className="
        w-full
        px-4
        py-16
        bg-white
        dark:bg-slate-950
      "
    >
      <div className="max-w-6xl mx-auto text-center">

        <p
          className="
            text-xs
            font-bold
            uppercase
            tracking-wider
            text-teal-600
          "
        >
          Customer Voice
        </p>


        <h2
          className="
            mt-5
            text-3xl
            lg:text-4xl
            font-bold
            text-slate-900
            dark:text-white
          "
        >
          What Enterprise Leaders Say
        </h2>


        <div
          className="
            mt-10
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="
                relative
                bg-white
                dark:bg-slate-900
                rounded-2xl
                border
                border-slate-200
                dark:border-slate-800
                p-8
                text-left
                shadow-sm
              "
            >

              <div
                className="
                  absolute
                  top-3
                  right-5
                  text-7xl
                  font-bold
                  text-emerald-50
                  dark:text-emerald-900
                  font-serif
                "
              >
                "
              </div>


              <p
                className="
                  relative
                  text-base
                  leading-6
                  text-slate-900
                  dark:text-slate-200
                "
              >
                "{item.quote}"
              </p>


              <div className="mt-8 flex items-center gap-4">

                <div
                  className="
                    w-9
                    h-9
                    rounded-2xl
                    bg-teal-600
                    flex
                    items-center
                    justify-center
                    text-white
                    text-sm
                    font-bold
                  "
                >
                  {item.initial}
                </div>


                <div>
                  <p
                    className="
                      text-xs
                      font-bold
                      text-slate-900
                      dark:text-white
                    "
                  >
                    {item.name}
                  </p>

                  <p
                    className="
                      text-xs
                      text-slate-500
                      dark:text-slate-400
                    "
                  >
                    {item.role}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}