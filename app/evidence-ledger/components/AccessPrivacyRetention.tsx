import Image from "next/image";

import SectionIntro from "./SectionIntro";

const controls = [
  {
    title: "Role & purpose-based access",
    description:
      "Every view is scoped to a role and a stated purpose — not open by default.",
    icon: "access-role.png",
  },
  {
    title: "Field-level masking",
    description:
      "Sensitive fields can be masked independently of whether the record itself is visible.",
    icon: "access-masking.png",
  },
  {
    title: "Attributable redaction",
    description:
      "A redaction is itself a logged, attributable action — not an invisible edit.",
    icon: "access-redaction.png",
  },
  {
    title: "Policy-controlled retention",
    description:
      "Retention follows configured policy, not a single universal duration across every org.",
    icon: "access-retention.png",
  },
  {
    title: "Preservation & restriction",
    description:
      "Records can be held or restricted, without implying automatic legal-hold coverage.",
    icon: "access-preservation.png",
  },
  {
    title: "Access review",
    description:
      "Who accessed what, and why, is itself reviewable — access isn't a one-time grant and forget.",
    icon: "access-review.png",
  },
];

export default function AccessPrivacyRetention() {
  return (
    <section className="bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1240px] px-6 py-16 lg:px-9 lg:py-20">
        <SectionIntro
          eyebrow="Access, Privacy & Retention"
          title="A governance layer, not an open shelf."
          description="Access is scoped by role and purpose — nothing here implies every administrator sees every event."
          descriptionClassName="max-w-[640px]"
        />

        <div className="mt-12 grid grid-cols-1 gap-x-16 gap-y-7 md:grid-cols-2">
          {controls.map((control) => (
            <div key={control.title} className="flex items-start gap-3">
              <Image
                src={`/evidence-ledger/${control.icon}`}
                alt=""
                width={16}
                height={16}
                aria-hidden="true"
                className="mt-0.5 shrink-0"
              />

              <div>
                <h3 className="text-sm font-bold leading-5 text-sky-950 dark:text-white">
                  {control.title}
                </h3>

                <p className="mt-1.5 text-sm leading-5 text-slate-600 dark:text-slate-400">
                  {control.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
