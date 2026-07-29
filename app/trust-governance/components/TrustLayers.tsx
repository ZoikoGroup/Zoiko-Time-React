import {
  UserCheck,
  LockKeyhole,
  LayoutGrid,
  Eye,
  BadgeCheck,
} from "lucide-react";

const trustItems = [
  {
    icon: UserCheck,
    title: "Human-in-\nCommand",
    description:
      "Human review remains authoritative for consequential decisions.",
  },
  {
    icon:  LockKeyhole,
    title: "Privacy by\nDesign",
    description:
      "Data minimization, purpose limitation, and strong default protections.",
  },
  {
    icon: LayoutGrid,
    title: "Deterministic\nClassification",
    description:
      "No automated decision-making. ML used only for anomaly functions.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "We explain what we do, how we do it, and how we're held accountable.",
  },
  {
    icon: BadgeCheck,
    title: "Accountability",
    description:
      "Named ownership, real reviews, and correction pathways.",
  },
];

export default function TrustLayers() {
  return (
    <section className="bg-slate-50 py-16 dark:bg-[#0B1120] md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-950 dark:text-white md:text-4xl">
            Trust at every layer
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-lg text-zinc-700 dark:text-slate-300">
            Our commitments are embedded across product, people, and
            operations.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-xl border border-[#44B97A]/30 bg-[#F3FBF7] p-6 transition-all hover:shadow-md dark:border-[#44B97A]/20 dark:bg-[#10221B]"
              >
                <Icon
                  className="h-7 w-7 text-[#44B97A]"
                  strokeWidth={2}
                />

                <h3 className="mt-8 whitespace-pre-line text-2xl font-semibold leading-8 text-slate-950 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-6 text-sm leading-6 text-zinc-700 dark:text-slate-300">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}