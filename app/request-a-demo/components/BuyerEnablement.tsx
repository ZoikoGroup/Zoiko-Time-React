import React from "react";
import { ArrowRight } from "lucide-react";

interface Resource {
  image: string;
  title: string;
  description: string;
  action: string;
}

const resources: Resource[] = [
  {
    image: "/BuyerEnablement/calculator.png",
    title: "ROI Calculator",
    description:
      "Quantify payroll leakage, billing disputes, admin overhead, and compliance exposure for your team size.",
    action: "Calculate ROI",
  },
  {
    image: "/BuyerEnablement/kit.png",
    title: "Buyer Kit",
    description:
      "Champion bundle: one-pager, pricing overview, implementation plan, and security overview for internal presentations.",
    action: "Get the buyer kit",
  },
  {
    image: "/BuyerEnablement/security.png",
    title: "IT & Security FAQ",
    description:
      "Answers for your IT and procurement team: data model, access controls, sub-processors, integrations, and security documentation.",
    action: "Review IT FAQ",
  },
  {
    image: "/BuyerEnablement/implimentation.png",
    title: "Implementation Guide",
    description:
      "30-day rollout timeline, responsibilities breakdown, employee communication templates, and first-sprint priorities.",
    action: "See rollout guide",
  },
  {
    image: "/BuyerEnablement/protection.png",
    title: "Data Protection",
    description:
      "DPA, sub-processor list, data residency options, GDPR/CCPA compliance documentation, and legal review resources.",
    action: "Review DPA resources",
  },
];

export default function BuyerEnablement() {
  return (
    <section
      className="
        w-full
        max-w-[1373px]
        mx-auto
        bg-teal-900
        rounded-3xl
        px-5
        sm:px-8
        lg:px-12
        py-14
        overflow-hidden
      "
    >

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">

        <p
          className="
            text-teal-400
            text-xs
            font-bold
            uppercase
            tracking-wider
          "
        >
          Buyer enablement
        </p>


        <h2
          className="
            mt-4
            text-white
            text-3xl
            sm:text-4xl
            font-semibold
          "
        >
          Help your team say yes.
        </h2>


        <p
          className="
            mt-5
            text-white/60
            text-sm
            leading-6
          "
        >
          Resources to help you build internal confidence, get IT and legal
          sign-off, and move your evaluation forward.
        </p>

      </div>


      {/* Cards */}
      <div
        className="
          mt-12
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-5
          gap-5
        "
      >

        {resources.map((item) => (

          <div
            key={item.title}
            className="
              min-h-[224px]
              bg-white/5
              rounded-[20px]
              border
              border-white/10
              p-5
              flex
              flex-col
            "
          >

            {/* Image Icon */}
            <div
              className="
                w-9
                h-9
                rounded-lg
                bg-teal-400/20
                flex
                items-center
                justify-center
              "
            >
              <img
                src={item.image}
                alt={item.title}
                className="
                  w-6
                  h-6
                  object-contain
                "
              />
            </div>


            <h3
              className="
                mt-6
                text-white
                text-xs
                font-bold
              "
            >
              {item.title}
            </h3>


            <p
              className="
                mt-4
                text-white/60
                text-xs
                leading-4
                flex-1
              "
            >
              {item.description}
            </p>


            <button
              className="
                mt-5
                flex
                items-center
                gap-2
                text-teal-400
                text-xs
                font-bold
              "
            >
              {item.action}
              <ArrowRight size={14} />
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}