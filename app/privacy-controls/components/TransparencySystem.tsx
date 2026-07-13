"use client";

const transparencyCards = [
  {
    icon: "📊",
    title: "Transparency Center",
    description:
      "Every worker has access to a personal Transparency Center — showing what signals are collected in their sessions, how the confidence score is calculated, and what decisions have been made about their data. Accessible at any time, without requiring a formal request.",
  },
  {
    icon: "📋",
    title: "Audit Logs",
    description:
      "Immutable logs of all data access events, processing decisions, and system actions — providing complete traceability for administrators, compliance teams, and data subject rights responses. All access logged with full context and timestamp.",
  },
  {
    icon: "👁️",
    title: "Data Use Clarity",
    description:
      "Clear documentation of what data is collected, why it is collected, how long it is retained, and who can access it — structured for both technical review and plain-language communication to affected individuals.",
  },
];

export default function TransparencySystem() {
  return (
    <section className="bg-white dark:bg-slate-950 py-24">
      <div className="max-w-[1200px] mx-auto px-5">

        {/* Heading */}
        <div className="text-center">

          <p className="text-xs font-bold uppercase tracking-wider text-teal-600">
            Transparency System
          </p>

          <h2 className="mt-5 text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Transparency and Visibility
          </h2>

          <p className="mt-6 max-w-[580px] mx-auto text-lg leading-7 text-slate-500 dark:text-slate-400">
            Privacy without transparency is not sufficient. ZoikoTime provides
            multiple layers of visibility — for workers, administrators, and
            governance teams — ensuring that data practices are never opaque.
          </p>

        </div>


        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">

          {transparencyCards.map((card, index) => (

            <div
              key={index}
              className="
                h-[320px]
                bg-white
                dark:bg-slate-900
                rounded-xl
                border border-slate-200
                dark:border-slate-800
                shadow-sm
                p-8
              "
            >

              {/* Icon */}
              <div
                className="
                  w-11 h-11
                  flex items-center justify-center
                  bg-emerald-50
                  dark:bg-emerald-950
                  rounded-xl
                  text-xl
                "
              >
                {card.icon}
              </div>


              {/* Title */}
              <h3
                className="
                  mt-7
                  text-base
                  font-bold
                  text-slate-900
                  dark:text-white
                "
              >
                {card.title}
              </h3>


              {/* Description */}
              <p
                className="
                  mt-4
                  text-sm
                  leading-6
                  text-slate-500
                  dark:text-slate-400
                "
              >
                {card.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}