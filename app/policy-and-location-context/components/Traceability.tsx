import React from "react";

const badges = [
  "EU AI Act Ready",
  "ISO 42001",
  "GDPR Article 22",
  "SOC 2 Type II",
];

export default function Traceability() {
  return (
    <section
      className="
      w-full
      bg-white
      dark:bg-slate-950
      py-16
      px-5
      transition-colors
      "
    >

      <div
        className="
        max-w-[1104px]
        mx-auto
        grid
        grid-cols-1
        lg:grid-cols-[420px_1fr]
        gap-12
        items-center
        "
      >

        {/* LEFT CONTENT */}

        <div>

          <p
            className="
            text-xs
            font-semibold
            uppercase
            tracking-wider
            text-teal-500
            "
          >
            Traceability
          </p>


          <h2
            className="
            mt-5
            text-3xl
            md:text-4xl
            font-bold
            leading-tight
            text-slate-900
            dark:text-white
            "
          >
            Every Decision Can Be
            <br />
            Explained and Defended
          </h2>


          <p
            className="
            mt-6
            text-base
            leading-7
            text-slate-500
            dark:text-slate-400
            "
          >
            Legal-grade traceability means every policy decision
            produced by ZoikoTime includes a complete, structured
            evidence record — built for auditors, regulators, and
            employment tribunals.
          </p>



          {/* BADGES */}

          <div
            className="
            mt-10
            flex
            flex-wrap
            gap-3
            "
          >

            {badges.map((badge,index)=>(
              <div
                key={index}
                className="
                h-9
                px-4
                bg-white
                dark:bg-slate-900
                rounded-lg
                border
                border-slate-200
                dark:border-slate-800
                flex
                items-center
                gap-3
                "
              >

                <span
                  className="
                  w-1.5
                  h-1.5
                  rounded-sm
                  bg-teal-500
                  "
                />


                <span
                  className="
                  text-xs
                  font-bold
                  text-slate-500
                  dark:text-slate-300
                  "
                >
                  {badge}
                </span>


              </div>
            ))}

          </div>


        </div>

                {/* RIGHT IMAGE */}

        <div
          className="
          w-full
          h-[390px]
          rounded-2xl
          overflow-hidden
          border
          border-slate-200
          dark:border-slate-800
          shadow-[0px_2px_16px_rgba(10,22,40,0.07)]
          "
        >

          <img
            src="/Traceability/image.png"
            alt="Traceability evidence record"
            className="
            w-full
            h-full
            object-cover
            "
          />

        </div>


      </div>

    </section>
  );
}