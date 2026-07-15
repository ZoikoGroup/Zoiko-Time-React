import React from "react";

const disputeCards = [
  {
    icon: "⚡",
    title: "Fast Resolution",
    description:
      "Verified evidence eliminates ambiguity — disputes are resolved on fact, not recollection, dramatically reducing resolution time and legal cost.",
  },
  {
    icon: "🛡️",
    title: "Defensible Outcomes",
    description:
      "Every decision supported by verified evidence is inherently defensible — protecting the organisation in any formal challenge or escalation.",
  },
  {
    icon: "⚖️",
    title: "Impartial Record",
    description:
      "Evidence constructed at the moment of the event — before any dispute existed — is inherently impartial and cannot be accused of retrospective construction.",
  },
];

export default function DisputeResolution() {
  return (
    <section className="w-full bg-slate-100 dark:bg-slate-950 py-20 px-5">

      <div
        className="
          max-w-[1040px]
          mx-auto
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-12
          items-start
        "
      >

        {/* Left Section */}
        <div>

          {/* Label */}
          <div className="flex items-center gap-4 mb-5">
            <span className="w-6 h-[2px] bg-teal-600"></span>

            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-wider
                text-teal-600
              "
            >
              Dispute Resolution
            </span>
          </div>


          {/* Heading */}
          <h2
            className="
              text-3xl
              md:text-4xl
              font-bold
              leading-tight
              text-slate-900
              dark:text-white
            "
          >
            Resolve Disputes With
            <br />
            Verified Evidence
          </h2>


          {/* Description */}
          <p
            className="
              mt-5
              text-base
              leading-7
              text-slate-500
              dark:text-slate-400
            "
          >
            When disputes arise — whether from employees, contractors,
            regulators, or legal counsel — ZoikoTime provides the verified,
            structured evidence needed to resolve them quickly and
            defensibly.
          </p>



          {/* Dispute Cards */}
          <div className="mt-10 space-y-5">

            {disputeCards.map((card) => (

              <div
                key={card.title}
                className="
                  flex
                  gap-5
                  bg-white
                  dark:bg-slate-900
                  rounded-lg
                  border
                  border-slate-200
                  dark:border-slate-800
                  shadow-sm
                  p-5
                "
              >

                {/* Icon */}
                <div
                  className="
                    w-9
                    h-9
                    shrink-0
                    flex
                    items-center
                    justify-center
                    rounded-md
                    bg-emerald-50
                    dark:bg-emerald-900/30
                    text-base
                  "
                >
                  {card.icon}
                </div>


                {/* Content */}
                <div>

                  <h3
                    className="
                      text-base
                      font-bold
                      text-slate-900
                      dark:text-white
                    "
                  >
                    {card.title}
                  </h3>


                  <p
                    className="
                      mt-2
                      text-xs
                      leading-5
                      text-slate-500
                      dark:text-slate-400
                    "
                  >
                    {card.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>




        {/* Right Image */}
        <div
          className="
            w-full
            h-[724px]
            rounded-2xl
            overflow-hidden
            border
            border-slate-200
            dark:border-slate-800
            shadow-sm
            bg-zinc-400
          "
        >

          <img
            src="/DisputeResolution/image.png"
            alt="Dispute resolution evidence"
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