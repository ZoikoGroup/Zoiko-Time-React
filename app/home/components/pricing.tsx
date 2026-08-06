import Link from "next/link";
import { Check, CheckCircle2 } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$8",
    unit: "per worker / month",
    features: [
      "Time tracking",
      "Timesheets & approvals",
      "Basic reports",
      "Mobile & desktop access",
    ],
    cta: "Start Free",
    href: "/start-free",
    style: "default",
  },
  {
    name: "Growth",
    price: "$15",
    unit: "per worker / month",
    featuresLead: "Everything in Starter",
    features: [
      "Attendance & break controls",
      "Project time tracking",
      "Integrations",
    ],
    cta: "Start Free",
    href: "/start-free",
    style: "default",
  },
  {
    name: "Business",
    price: "$25",
    unit: "per worker / month",
    featuresLead: "Everything in Growth",
    features: [
      "Policy controls",
      "Advanced reporting",
      "Priority support",
    ],
    cta: "Start Free",
    href: "/start-free",
    style: "highlight",
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    unit: "",
    features: [
      "Global deployment",
      "Compliance workflows",
      "SSO & provisioning",
      "Dedicated enterprise support",
    ],
    cta: "Request Enterprise Demo",
    href: "/request-enterprise-demo",
    style: "dark",
  },
];

const guarantees = [
  "30-day free trial for eligible plans.",
  "No auto-starting gimmicks.",
  "No invasive monitoring.",
];

export default function PricingPage() {
  return (
    <section className="bg-white px-4 py-16 dark:bg-gray-900 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12">

        <div className="flex flex-col items-center gap-4 text-center">
          <span className="text-xs font-bold uppercase tracking-wide text-emerald-500 dark:text-emerald-400">
            Flexible Pricing & Packaging
          </span>

          <h1 className="max-w-3xl text-3xl font-bold text-slate-950 dark:text-white sm:text-4xl">
            Clear Plans for Teams, Managers, and Enterprise
          </h1>

          <p className="max-w-2xl text-lg leading-7 text-zinc-700 dark:text-gray-300">
            ZoikoTime offers straightforward pricing for growing teams and
            customizable options for larger organizations.
          </p>
        </div>


        <div className="grid w-full grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {plans.map((plan) => {
            const isHighlight = plan.style === "highlight";
            const isDark = plan.style === "dark";

            return (
              <div
                key={plan.name}
                className={[
                  "relative flex flex-col gap-6 rounded-2xl border p-8",
                  isHighlight
                    ? "bg-emerald-800 border-2 border-emerald-400 shadow-xl lg:-mt-4 lg:mb-4"
                    : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",
                ].join(" ")}
              >

                {plan.badge && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-emerald-400 px-4 py-1 text-xs font-bold text-white">
                    {plan.badge.toUpperCase()}
                  </span>
                )}


                <p
                  className={`text-lg font-bold ${
                    isHighlight
                      ? "text-white"
                      : "text-slate-900 dark:text-white"
                  }`}
                >
                  {plan.name}
                </p>


                <div className="flex h-10 items-end gap-2">
                  <span
                    className={`text-4xl font-bold ${
                      isHighlight
                        ? "text-emerald-400"
                        : "text-slate-950 dark:text-white"
                    }`}
                  >
                    {plan.price}
                  </span>

                  {plan.unit && (
                    <span
                      className={`pb-1.5 text-sm ${
                        isHighlight
                          ? "text-white/70"
                          : "text-zinc-700 dark:text-gray-400"
                      }`}
                    >
                      {plan.unit}
                    </span>
                  )}
                </div>


                <div className="flex flex-col gap-4">

                  {plan.featuresLead && (
                    <p
                      className={`text-sm font-bold ${
                        isHighlight
                          ? "text-white"
                          : "text-slate-900 dark:text-white"
                      }`}
                    >
                      {plan.featuresLead}
                    </p>
                  )}


                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">

                      <Check
                        className={`size-3.5 shrink-0 ${
                          isHighlight
                            ? "text-emerald-400"
                            : "text-emerald-500 dark:text-emerald-400"
                        }`}
                        strokeWidth={3}
                      />

                      <span
                        className={`text-sm ${
                          isHighlight
                            ? "text-white"
                            : "text-slate-900 dark:text-gray-200"
                        }`}
                      >
                        {feature}
                      </span>

                    </div>
                  ))}

                </div>


                <Link
                  href={plan.href}
                  className={[
                    "mt-auto rounded-lg py-3 text-center text-base font-bold transition-colors",
                    isHighlight
                      ? "bg-emerald-400 text-white hover:bg-emerald-500"
                      : isDark
                      ? "bg-emerald-400 text-white hover:bg-emerald-500"
                      : "border border-emerald-400 text-emerald-500 hover:bg-emerald-400/10 dark:text-emerald-400",
                  ].join(" ")}
                >
                  {plan.cta}
                </Link>

              </div>
            );
          })}

        </div>


        <p className="text-center text-sm text-zinc-700 dark:text-gray-300">
          Annual options available:{" "}
          <span className="text-emerald-500 dark:text-emerald-400">
            $79 / $149 / $240 / Custom
          </span>
        </p>


        <div className="flex w-full max-w-xl flex-col gap-3">

          {guarantees.map((item) => (
            <div key={item} className="flex items-center gap-3">

              <CheckCircle2
                className="size-3.5 text-emerald-500 dark:text-emerald-400"
                strokeWidth={3}
              />

              <span className="text-sm text-zinc-700 dark:text-gray-300">
                {item}
              </span>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
