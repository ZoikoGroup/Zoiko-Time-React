import {
  FiMonitor,
  FiMinusCircle,
  FiUser,
  FiMenu,
} from "react-icons/fi";

const cards = [
  {
    title: "Desktop & Mobile Apps",
    description:
      "Supported worker and administrator experiences for the same governed lifecycle.",
    icon: FiMonitor,
  },
  {
    title: "Zoiko Sema",
    description:
      "An approved integration surface — Zoiko Sema remains an independent product with its own permissions.",
    icon: FiMinusCircle,
  },
  {
    title: "Kairos Assistant",
    description:
      "Kairos retrieves, summarizes, and explains governed organization data. It decides nothing.",
    icon: FiUser,
  },
  {
    title: "Integrations",
    description:
      "Approved payroll, billing, reporting, identity, and data destinations with governed delivery.",
    icon: FiMenu,
  },
];

export default function ConnectedWorkSection() {
  return (
    <section className="bg-gray-50 px-6 py-16 dark:bg-slate-950 lg:py-20">
      <div className="mx-auto flex max-w-[1180px] flex-col items-center gap-3">
        {/* Label */}
        <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-teal-600">
          Connected Work
        </p>

        {/* Heading */}
        <h2
          className="
            max-w-4xl
            text-center
            text-3xl
            font-bold
            leading-tight
            text-slate-800
            dark:text-white
            sm:text-4xl
            lg:text-5xl
          "
        >
          Apps and connected work
        </h2>

        {/* Cards */}
        <div
          className="
            mt-8
            grid
            w-full
            grid-cols-1
            gap-6
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {cards.map((card) => {
            const Icon = card.icon;

            return (

                            <div
                key={card.title}
                className="
                  flex
                  flex-col
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-7
                  shadow-[0px_6px_18px_rgba(14,31,61,0.05)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                  dark:border-slate-800
                  dark:bg-slate-900
                "
              >
                {/* Icon */}
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-emerald-100
                    bg-gradient-to-br
                    from-emerald-50
                    to-white
                    shadow-[0_4px_10px_rgba(16,162,141,0.12)]
                    dark:border-teal-900
                    dark:from-teal-950
                    dark:to-slate-900
                  "
                >
                  <Icon className="h-5 w-5 text-teal-600" />
                </div>

                {/* Title */}
                <h3
                  className="
                    mt-6
                    text-[18px]
                    font-semibold
                    leading-7
                    text-slate-800
                    dark:text-white
                  "
                >
                  {card.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-3
                    text-base
                    leading-8
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}