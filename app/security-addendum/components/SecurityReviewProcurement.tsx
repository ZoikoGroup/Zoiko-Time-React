import React from "react";

interface ReviewCard {
  title: string;
  description: string;
}

export default function SecurityReviewProcurement() {
  const cards: ReviewCard[] = [
    {
      title: "Security questionnaires",
      description:
        "ZoikoTime may support security questionnaires for qualified enterprise opportunities.",
    },
    {
      title: "Documentation requests",
      description:
        "Available security, privacy, data-protection, and product-governance documentation may be provided through appropriate channels.",
    },
    {
      title: "Contractual security terms",
      description:
        "Provisions may sit within an order form, Master Subscription Agreement, Data Processing Addendum, or related documents.",
    },
    {
      title: "Procurement review",
      description:
        "Support for procurement teams reviewing access control, data handling, retention, legal hold, incident response, and integrations.",
    },
  ];

  return (
    <section className="w-full px-5 py-16 bg-white dark:bg-slate-950">
      <div className="max-w-[1180px] mx-auto">

        {/* Header */}
        <div className="text-center">

          <div
            className="
              text-teal-600
              text-xs
              font-semibold
              uppercase
              leading-5
              tracking-widest
            "
          >
            Enterprise Review
          </div>

          <h2
            className="
              mt-2
              text-3xl
              md:text-4xl
              text-slate-800
              dark:text-white
              font-bold
              leading-10
            "
          >
            Security review for procurement
          </h2>

          <p
            className="
              mt-4
              max-w-[678px]
              mx-auto
              text-gray-500
              dark:text-gray-400
              text-sm
              md:text-base
              font-normal
              leading-7
            "
          >
            Enterprise customers may require additional security information for
            procurement, vendor risk review, legal review, privacy review, or
            implementation planning.
          </p>

        </div>


        {/* Cards */}
        <div
          className="
            mt-12
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-x-[18px]
            gap-y-5
            lg:px-[100px]
          "
        >

          {cards.map((card, index) => (
            <div
              key={index}
              className="
                min-h-[144px]
                bg-white
                dark:bg-slate-900
                rounded-xl
                border
                border-slate-200
                dark:border-slate-700
                shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)]
                p-6
              "
            >

              {/* Title */}
              <div className="flex items-center gap-3">

                <span
                  className="
                    w-1.5
                    h-1.5
                    bg-teal-600
                    rounded-sm
                  "
                />

                <h3
                  className="
                    text-slate-800
                    dark:text-white
                    text-base
                    font-semibold
                    leading-6
                  "
                >
                  {card.title}
                </h3>

              </div>


              {/* Description */}
              <p
                className="
                  mt-5
                  text-gray-500
                  dark:text-gray-400
                  text-sm
                  font-normal
                  leading-6
                "
              >
                {card.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}