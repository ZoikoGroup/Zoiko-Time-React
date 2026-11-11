import Image from "next/image";
import { Files, Tag, TrendingUp, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SaleBadge from "./SaleBadge";

type Feature = {
  icon: LucideIcon;
  title: string;
  text: string;
};

const leftFeatures: Feature[] = [
  {
    icon: Users,
    title: "Workforce Intelligence",
    text: "Explainable insight linking time, tools and outcomes.",
  },
  {
    icon: Files,
    title: "Evidence Capture",
    text: "Optional, policy-scoped capture for regulated teams.",
  },
];

const rightFeatures: Feature[] = [
  {
    icon: Tag,
    title: "Session & Identity Assurance",
    text: "Risk-based re-verification, not continuous surveillance.",
  },
  {
    icon: TrendingUp,
    title: "Reporting & Workforce Analytics",
    text: "Executive dashboards and cadence reporting exports.",
  },
];

function FeatureCard({ icon: Icon, title, text }: Feature) {
  return (
    <div className="flex flex-1 flex-col justify-center rounded-2xl border border-white/10 bg-[#101828] p-6">
      <span className="flex size-11 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400">
        <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-base font-semibold text-white">{title}</h3>
      <p className="mt-1.5 text-sm leading-6 text-slate-400">{text}</p>
    </div>
  );
}

export default function PlatformFeatures() {
  return (
    <section className="relative w-full overflow-hidden bg-[#070f1d] px-4 py-16 sm:px-6 sm:py-20 lg:px-20">
      <SaleBadge className="absolute left-24 top-20 hidden lg:block" />

      <div className="mx-auto w-full max-w-[1280px]">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Everything you need to govern distributed work.
          </h2>
          <p className="mt-4 text-base leading-6 text-slate-400">
            The same ZoikoTime platform your team already knows — on annual-plan
            Black Friday terms.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          <div className="flex flex-col gap-5">
            {leftFeatures.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>

          <Image
            src="/black-friday/features-team-desk.webp"
            alt="Two colleagues reviewing time records together at a desktop computer"
            width={413}
            height={337}
            className="h-full max-h-[420px] w-full rounded-2xl object-cover lg:max-h-none"
          />

          <div className="flex flex-col gap-5">
            {rightFeatures.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
