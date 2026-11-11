import Link from "next/link";
import { Check } from "lucide-react";
import SaleBadge from "./SaleBadge";

type Plan = {
  name: string;
  nameColor: string;
  /** Regular monthly price per worker, in USD. Null for Enterprise. */
  regular: number | null;
  audience: string;
  audienceBg: string;
  features: string[];
  popular?: boolean;
};

const DISCOUNT = 0.3;

const plans: Plan[] = [
  {
    name: "Verified",
    nameColor: "text-indigo-300",
    regular: 8,
    audience: "Best for 1–25 workers or a single site",
    audienceBg: "bg-indigo-900/50",
    features: ["Time tracking", "Timesheets & approvals", "Basic reports", "Mobile & desktop access"],
  },
  {
    name: "Governed",
    nameColor: "text-teal-300",
    regular: 15,
    audience: "Best for 26–250 workers",
    audienceBg: "bg-teal-900/40",
    features: ["Everything in Verified", "Attendance & break controls", "Project time tracking", "Integrations"],
  },
  {
    name: "Sovereign",
    nameColor: "text-white",
    regular: 25,
    audience: "For regulated, unionised and multi-country workforces",
    audienceBg: "bg-white/10",
    features: ["Everything in Governed", "Policy controls", "Advanced reporting", "Priority support"],
    popular: true,
  },
  {
    name: "Enterprise",
    nameColor: "text-slate-300",
    regular: null,
    audience: "For complex and strategic deployments",
    audienceBg: "bg-slate-700/60",
    features: ["Global deployment", "Compliance workflows", "SSO & provisioning", "Dedicated enterprise support"],
  },
];

const usd = (value: number) =>
  `$${Number.isInteger(value) ? value : value.toFixed(2)}`;

export default function BlackFridayPricing() {
  return (
    <section
      id="plans"
      className="relative w-full scroll-mt-20 overflow-hidden bg-[#101828] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-10 xl:px-20"
    >
      <SaleBadge
        rotate={12}
        className="absolute right-4 top-6 hidden sm:right-24 sm:top-16 md:block"
      />

      <div className="mx-auto w-full max-w-[1280px]">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-400">
            Flexible pricing &amp; packaging
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Clear plans — Black Friday savings on the year.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-400">
            30% off applies to the first year of any eligible annual plan below
            — real price shown, savings applied.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-4 xl:gap-6">
          {plans.map((plan) => {
            const price =
              plan.regular === null
                ? null
                : {
                    regular: plan.regular,
                    sale: plan.regular * (1 - DISCOUNT),
                    saving: plan.regular * DISCOUNT,
                  };

            return (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border p-6 ${
                  plan.popular
                    ? "border-emerald-500 bg-[#01503c]"
                    : "border-white/10 bg-[#1e2939]"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-emerald-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-emerald-950">
                    Most popular
                  </span>
                )}

                <h3 className={`text-xs font-bold uppercase tracking-[0.12em] ${plan.nameColor}`}>
                  {plan.name}
                </h3>

                <div className="flex min-h-[116px] flex-col">
                {price === null ? (
                  <>
                    <p className="bf-display mt-5 text-4xl font-bold">Custom</p>
                    <p className="mt-1 text-sm text-slate-400">Contract pricing</p>
                  </>
                ) : (
                  <>
                    <p className="mt-5 flex items-baseline gap-2">
                      <span className="text-lg text-slate-500 line-through">
                        <span className="sr-only">Regular price </span>
                        {usd(price.regular)}
                      </span>
                      <span className="bf-display text-4xl font-bold">
                        <span className="sr-only">Black Friday price </span>
                        {usd(price.sale)}
                      </span>
                    </p>
                    <p className="mt-1 text-sm text-slate-400">per worker / month</p>
                    <span
                      className={`mt-3 inline-flex w-fit rounded-md px-2 py-1 text-xs font-bold ${
                        plan.popular ? "bg-white/10 text-emerald-200" : "bg-emerald-500/15 text-emerald-400"
                      }`}
                    >
                      SAVE {usd(price.saving)}/mo this year
                    </span>
                  </>
                )}
                </div>

                <p
                  className={`mt-4 flex min-h-[48px] items-center rounded-lg px-3 py-2.5 text-sm font-semibold text-white ${plan.audienceBg}`}
                >
                  {plan.audience}
                </p>

                <ul className="mt-5 flex-1 space-y-2.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-slate-300">
                      <Check className="mt-0.5 size-3.5 shrink-0 text-slate-400" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {price === null ? (
                  <Link
                    href="/request-enterprise-demo"
                    className="bf-display mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-white px-5 py-2 text-center text-sm font-medium text-slate-900 transition-colors hover:bg-slate-200 xl:w-fit xl:px-8 xl:text-base"
                  >
                    Request Enterprise Demo
                  </Link>
                ) : (
                  <a
                    href="https://getzoikotime.com/"
                    className={`bf-display mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-lg px-5 py-2 text-center text-sm font-medium transition-colors xl:w-fit xl:px-8 xl:text-base ${
                      plan.popular
                        ? "border border-emerald-300/60 bg-emerald-500 text-white hover:bg-emerald-400"
                        : "bg-white text-slate-900 hover:bg-slate-200"
                    }`}
                  >
                    Start 14-Day Free Trial
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
