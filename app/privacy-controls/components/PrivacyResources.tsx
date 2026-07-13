"use client";

const resources = [
  {
    icon: "📋",
    title: "Privacy Overview",
    description:
      "Complete privacy architecture documentation — controls, principles, and framework alignment — for legal and compliance review.",
  },
  {
    icon: "📊",
    title: "Data Processing Summary",
    description:
      "Structured summary of all processing activities, lawful bases, and retention schedules — formatted for GDPR Article 30 compliance records.",
  },
  {
    icon: "✅",
    title: "Compliance Documentation",
    description:
      "GDPR, UK GDPR, and CCPA alignment evidence — structured for legal due diligence, procurement review, and regulatory audit support.",
  },
];

export default function PrivacyResources() {
  return (
    <section className="bg-slate-100 dark:bg-slate-950 py-24">

      <div className="max-w-[1040px] mx-auto px-5">

        {/* Header */}
        <div className="text-center">

          <p className="text-xs font-bold uppercase tracking-wider text-teal-600">
            Privacy Resources
          </p>

          <h2 className="mt-5 text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Privacy Documentation & Downloads
          </h2>

        </div>


        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">

          {resources.map((item, index) => (

            <div
              key={index}
              className="
                h-64
                bg-white
                dark:bg-slate-900
                rounded-xl
                border border-slate-200
                dark:border-slate-800
                shadow-sm
                flex
                flex-col
                items-center
                text-center
                px-6
                pt-8
              "
            >

              {/* Icon */}
              <div className="text-3xl text-slate-700 dark:text-slate-200">
                {item.icon}
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
                {item.title}
              </h3>


              {/* Description */}
              <p
                className="
                  mt-4
                  text-xs
                  leading-5
                  text-slate-500
                  dark:text-slate-400
                "
              >
                {item.description}
              </p>


            </div>

          ))}

        </div>


      </div>

    </section>
  );
}