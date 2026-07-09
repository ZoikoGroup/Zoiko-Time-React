export default function DataProtection() {
  const cards = [
    {
      title: "Encryption in transit",
      text: "Secure transmission methods protect data moving between users, browsers, mobile apps, APIs, integrations, and platform services.",
    },
    {
      title: "Encryption at rest",
      text: "Stored customer data is protected using appropriate encryption or equivalent safeguards where supported by the architecture.",
    },
    {
      title: "Tenant separation",
      text: "Customer environments and data are logically separated to help prevent unauthorized cross-organization access.",
    },
    {
      title: "Secure APIs",
      text: "APIs and integrations use appropriate authentication, authorization, rate controls, logging, and validation.",
    },
    {
      title: "Data minimization",
      text: "Data is collected and processed in ways tied to product purpose, configuration, workforce governance, and settings.",
    },
    {
      title: "Screenshot protection",
      text: "Where enabled, ZoikoTime supports redaction, access controls, transparency, retention settings, and policy-based governance.",
    },
  ];

  return (
    <section className="w-full px-5 py-10">
      <div className="max-w-[1180px] mx-auto">

        {/* Header */}
        <div className="text-center">
          <div className="text-teal-600 text-xs font-semibold uppercase leading-5 tracking-widest">
            Data Protection
          </div>

          <h2 className="mt-2 text-3xl md:text-4xl font-bold leading-10 text-slate-800 dark:text-white">
            Encryption and data protection
          </h2>

          <p className="mt-4 max-w-[679px] mx-auto text-gray-500 dark:text-gray-400 text-sm md:text-base leading-7">
            Controls may vary by plan, deployment model, product feature,
            integration, and customer agreement.
          </p>
        </div>


        {/* Cards */}
        <div
          className="
            mt-12
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-x-[18px]
            gap-y-5
            px-0
            lg:px-[100px]
          "
        >

          {cards.map((card, index) => (
            <div
              key={index}
              className="
                min-h-[128px]
                lg:min-h-[144px]
                bg-white
                dark:bg-slate-900
                rounded-xl
                border
                border-slate-200
                dark:border-slate-700
                shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)]
                dark:shadow-none
                p-6
              "
            >

              <div className="flex items-center gap-3">
                <span
                  className="
                    w-1.5
                    h-1.5
                    bg-teal-600
                    rounded-sm
                  "
                ></span>

                <h3
                  className="
                    text-base
                    font-semibold
                    text-slate-800
                    dark:text-white
                  "
                >
                  {card.title}
                </h3>
              </div>


              <p
                className="
                  mt-5
                  text-sm
                  font-normal
                  leading-6
                  text-gray-500
                  dark:text-gray-400
                "
              >
                {card.text}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}