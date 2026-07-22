import React from "react";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Verified",
    price: "$8",
    description:
      "Best for small teams needing verified time records and basic accountability.",
    features: [
      "Verified time records",
      "Basic policy controls",
      "Standard reporting",
      "Email support",
    ],
  },
  {
    name: "Governed",
    price: "$15",
    description:
      "Best for growing teams needing policy controls, reporting, and stronger governance.",
    features: [
      "Everything in Verified",
      "Full policy engine",
      "Overtime & leave management",
      "Audit trail & exports",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Sovereign",
    price: "$25",
    description:
      "Best for regulated, multi-jurisdiction, or high-accountability workforces.",
    features: [
      "Everything in Governed",
      "Multi-jurisdiction policies",
      "Evidence & compliance center",
      "Legal hold & data residency",
      "SLA-backed support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description:
      "Advanced security, private deployment, dedicated support, custom integrations, and procurement-led rollout.",
    features: [
      "Everything in Sovereign",
      "Private cloud / on-prem",
      "Dedicated CSM & AE",
      "Custom SLA & DPA",
      "Executive briefing program",
    ],
  },
];

export default function PricingSection() {
  return (
    <section
      className="
        w-full
        max-w-[1373px]
        mx-auto
        bg-teal-900
        rounded-3xl
        px-6
        sm:px-10
        lg:px-20
        py-14
        overflow-hidden
      "
    >

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">

        <div
          className="
            text-teal-400
            text-xs
            font-bold
            uppercase
            tracking-wider
            mb-5
          "
        >
          Pricing
        </div>


        <h2
          className="
            text-white
            text-3xl
            sm:text-4xl
            font-semibold
            leading-tight
          "
        >
          Transparent pricing. No surprises.
        </h2>


        <p
          className="
            mt-5
            text-white/60
            text-sm
            sm:text-base
            leading-6
          "
        >
          Published plans for every workforce model. Enterprise pricing
          available for advanced security, data residency, and custom
          integrations.
        </p>

      </div>


      {/* Pricing Cards */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          gap-5
          mt-12
        "
      >

        {plans.map((plan) => (

          <div
            key={plan.name}
            className={`
              relative
              rounded-[20px]
              border
              p-5
              min-h-[320px]

              ${
                plan.popular
                  ? "bg-teal-400/10 border-teal-400"
                  : "bg-white/20 border-white/10"
              }
            `}
          >

            {plan.popular && (
              <div
                className="
                  absolute
                  top-4
                  right-4
                  bg-teal-400
                  text-gray-900
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-wide
                  px-2
                  py-1
                  rounded-full
                "
              >
                Popular
              </div>
            )}


            <p
              className="
                text-white/50
                text-xs
                font-bold
                uppercase
                tracking-wide
              "
            >
              {plan.name}
            </p>


            <div className="flex items-end gap-2 mt-3">

              <h3
                className="
                  text-white
                  text-3xl
                  font-black
                "
              >
                {plan.price}
              </h3>


              {plan.price !== "Custom" && (
                <span className="text-white/60 text-sm mb-1">
                  / user / mo
                </span>
              )}

            </div>


            <p
              className="
                mt-3
                text-white/60
                text-xs
                leading-5
              "
            >
              {plan.description}
            </p>


            <ul className="mt-6 space-y-3">

              {plan.features.map((feature) => (

                <li
                  key={feature}
                  className="
                    flex
                    items-center
                    gap-3
                    text-white/75
                    text-xs
                  "
                >

                  <Check
                    size={14}
                    className="text-teal-400 shrink-0"
                  />

                  {feature}

                </li>

              ))}

            </ul>


          </div>

        ))}

      </div>


      {/* Bottom CTA */}
      <div className="text-center mt-12">

        <p
          className="
            text-white/70
            text-sm
            sm:text-base
          "
        >
          Not sure which plan fits? Talk to sales and we&apos;ll match the
          right tier to your needs.
        </p>


        <Link
  href="/contact-sales"
  className="
    mt-8
    inline-flex
    items-center
    justify-center
    gap-3
    mx-auto
    rounded-2xl
    bg-teal-400
    px-8
    py-3.5
    font-semibold
    text-gray-900
    shadow-[0px_4px_18px_rgba(77,219,184,0.35)]
    transition
    hover:bg-teal-300
  "
>
  <ArrowRight size={18} />
  <span>Talk to Sales about the right plan</span>
</Link>
      </div>


    </section>
  );
}