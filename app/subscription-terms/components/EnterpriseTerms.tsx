export default function EnterpriseTerms() {
  const cards = [
    {
      title: "Order forms",
      text: "A signed order form may define plan scope, users, pricing, billing cycle, term length, renewal terms, support, and special conditions.",
    },
    {
      title: "Master Subscription Agreement",
      text: "Some customers may require an MSA or negotiated commercial terms before deployment.",
    },
    {
      title: "Data Processing Addendum",
      text: "Where applicable, customers may require a DPA or privacy-related documentation.",
    },
    {
      title: "Security review",
      text: "Enterprise customers may request security documentation, access control information, and technical review support.",
    },
    {
      title: "Implementation services",
      text: "Large deployments may require implementation planning, configuration, training, integrations, or phased rollout.",
    },
    {
      title: "Custom billing",
      text: "Enterprise billing may involve invoices, purchase orders, annual contracts, multi-entity billing, or tax documentation.",
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 transition-colors">
      <div className="mx-auto max-w-6xl px-6">

        {/* Label */}
        <p
          className="
          text-center
          text-xs
          font-semibold
          uppercase
          tracking-widest
          text-teal-600
          font-['Poppins']
          "
        >
          Enterprise
        </p>


        {/* Heading */}
        <h2
          className="
          mt-4
          text-center
          text-4xl
          font-bold
          text-slate-800
          dark:text-white
          font-['Poppins']
          "
        >
          Enterprise agreements and custom terms
        </h2>


        {/* Description */}
        <p
          className="
          mx-auto
          mt-4
          max-w-3xl
          text-center
          text-base
          leading-7
          text-gray-500
          dark:text-gray-300
          font-['Poppins']
          "
        >
          Enterprise customers may require custom commercial, legal, security,
          privacy, procurement, support, implementation, and billing
          arrangements.
        </p>


        {/* Cards */}
        <div
          className="
          mt-12
          grid
          gap-8
          sm:grid-cols-1
          md:grid-cols-2
          "
        >

          {cards.map((card) => (
            <div
              key={card.title}
              className="
              rounded-xl
              border
              border-slate-200
              dark:border-gray-700
              bg-white
              dark:bg-gray-800
              p-6
              shadow-sm
              transition-colors
              "
            >

              <div className="flex items-center gap-3">

                <span
                  className="
                  h-1.5
                  w-1.5
                  rounded-sm
                  bg-teal-600
                  "
                />

                <h3
                  className="
                  text-base
                  font-semibold
                  text-slate-800
                  dark:text-white
                  font-['Poppins']
                  "
                >
                  {card.title}
                </h3>

              </div>


              <p
                className="
                mt-5
                text-sm
                leading-6
                text-gray-500
                dark:text-gray-300
                font-['Poppins']
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