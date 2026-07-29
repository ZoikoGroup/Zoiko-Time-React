import {
  BadgeDollarSign,
  FileCheck2,
  Scale,
  Gavel,
} from "lucide-react";

const items = [
  {
    title: "Financial Control",
    description: (
      <>
        Accurate payroll, billing, and cost
        <br className="hidden sm:block" />
        control.
      </>
    ),
    icon: BadgeDollarSign,
  },
  {
    title: "Evidence You Can Trust",
    description: (
      <>
        Deterministic classification,
        <br className="hidden sm:block" />
        review, and immutable audit trail.
      </>
    ),
    icon: FileCheck2,
  },
  {
    title: "Accuracy & Fairness",
    description: (
      <>
        Human review and correction
        <br className="hidden sm:block" />
        protect workers and
        <br className="hidden sm:block" />
        organizations.
      </>
    ),
    icon: Scale,
  },
  {
    title: "Dispute Prevention",
    description: (
      <>
        Trusted records reduce disputes
        <br className="hidden sm:block" />
        and compliance risk.
      </>
    ),
    icon: Gavel,
  },
];

export default function Why() {
  return (
    <section className="w-full bg-white py-16 dark:bg-slate-950 sm:py-20 lg:py-16">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8">

        {/* SECTION LABEL */}
        <div className="flex justify-center">
          <p
            className="
              text-center
              text-xs
              font-bold
              uppercase
              leading-4
              tracking-wider
              text-[#44B97A]
            "
          >
            WHY IT MATTERS
          </p>
        </div>

        {/* CARDS */}
        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-6
            sm:grid-cols-2
            lg:grid-cols-4
            lg:gap-8
          "
        >
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  flex
                  min-h-[270px]
                  flex-col
                  items-center
                  rounded-xl
                  border
                  border-neutral-300
                  bg-white
                  px-6
                  py-6
                  text-center
                  shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]
                  dark:border-slate-800
                  dark:bg-slate-900
                "
              >
                {/* ICON */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#44B97A]">
                  <Icon
                    className="h-6 w-6 text-white"
                    strokeWidth={2}
                  />
                </div>

                {/* TITLE */}
                <h3
                  className="
                    mt-4
                    text-lg
                    font-semibold
                    leading-7
                    text-slate-950
                    dark:text-white
                  "
                >
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    mt-1
                    text-sm
                    font-normal
                    leading-5
                    text-zinc-700
                    dark:text-zinc-300
                  "
                >
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