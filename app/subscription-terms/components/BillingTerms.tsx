export default function BillingTerms() {
  const cards = [
    {
      title: "Plan selection",
      text: "Customers choose from available plans based on features, governance needs, reporting, support expectations, and implementation requirements.",
    },
    {
      title: "Billing cycle",
      text: "Subscriptions may be billed monthly or annually. Annual plans may provide savings where available.",
    },
    {
      title: "User-based billing",
      text: "Plans are generally priced per user; the billing definition of a user may depend on plan type, active status, role, or order form.",
    },
    {
      title: "Adding users",
      text: "Adding users during a cycle may increase fees; charges may be prorated, immediate, or applied in the next cycle.",
    },
    {
      title: "Removing users",
      text: "Removing or deactivating users may affect future billing; credits or prorations depend on plan and agreement.",
    },
    {
      title: "Add-ons & services",
      text: "Certain features, integrations, storage, support levels, or implementation services may be priced separately.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">

        {/* Heading */}
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-teal-600 font-['Poppins']">
          Billing
        </p>

        <h2 className="mt-4 text-center text-3xl font-bold text-slate-800 dark:text-white sm:text-4xl font-['Poppins']">
          Plans, billing, and user counts
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-7 text-gray-500 dark:text-gray-300 font-['Poppins']">
          Subscriptions are generally billed based on plan, billing cycle,
          number of active paid users, add-ons, taxes, and any customer-specific
          order terms.
        </p>


        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">

          {cards.map((card) => (
            <div
              key={card.title}
              className="
                rounded-xl 
                border border-slate-200 
                bg-white 
                p-6 
                shadow-[0px_6px_18px_rgba(14,31,61,0.05)]
                dark:border-gray-700
                dark:bg-gray-800
              "
            >

              <div className="flex items-center gap-3">

                <span className="h-1.5 w-1.5 rounded-sm bg-teal-600" />

                <h3 className="text-base font-semibold text-slate-800 dark:text-white font-['Poppins']">
                  {card.title}
                </h3>

              </div>


              <p className="mt-5 text-sm leading-6 text-gray-500 dark:text-gray-300 font-['Poppins']">
                {card.text}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}