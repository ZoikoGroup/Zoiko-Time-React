import Image from "next/image";
import {
  BadgeCheck,
  ShieldCheck,
  UserRound,
  FileCheck2,
  CheckCircle,
} from "lucide-react";

const stats = [
  {
    icon: BadgeCheck,
    value: "100%",
    title: "DETERMINISTIC",
    subtitle: "CLASSIFICATION",
  },
  {
    icon: ShieldCheck,
    value: "0",
    title: "SURVEILLANCE",
    subtitle: "PRACTICES",
  },
  {
    icon: UserRound,
    value: "Human",
    title: "IN COMMAND",
    subtitle: "ALWAYS",
  },
  {
    icon: FileCheck2,
    value: "100%",
    title: "AUDIT-READY",
    subtitle: "EVIDENCE",
  },
];

const features = [
  "Remote, hybrid, and in-office teams",
  "Startups to large enterprises",
  "Operations, Finance, HR, and Compliance leaders",
  "Organizations that value privacy, ethics, and human authority",
];

export default function WhoWeServe() {
  return (
    <section className="bg-white py-20 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-emerald-400 bg-slate-50 p-10 text-center transition hover:shadow-lg dark:border-emerald-700 dark:bg-neutral-900"
                >
                  <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full border-2 border-emerald-600/30">
                    <Icon className="h-6 w-6 text-emerald-500 stroke-[2]" />
                  </div>

                  <h3 className="text-4xl font-bold text-sky-950 dark:text-white">
                    {item.value}
                  </h3>

                  <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    {item.title}
                    <br />
                    {item.subtitle}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Content */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-500">
              BUILT FOR ORGANIZATIONS THAT VALUE TRUTH
            </p>

            <h2 className="mt-5 text-5xl font-bold leading-tight text-sky-950 dark:text-white">
              Who we serve
            </h2>

            <div className="mt-10 space-y-5">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 fill-emerald-500 text-white" />

                  <p className="text-base font-medium leading-6 text-gray-700 dark:text-gray-300">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Image
                src="/product/who-we-serve.png"
                alt="Who We Serve"
                width={514}
                height={288}
                className="w-full max-w-[514px] rounded-2xl border border-gray-100 shadow-lg dark:border-neutral-800"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}