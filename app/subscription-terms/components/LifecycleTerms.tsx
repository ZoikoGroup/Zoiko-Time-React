export default function LifecycleTerms() {
  const cards = [
    {
      title: "Renewals",
      text: "Subscriptions may renew automatically unless canceled per the applicable checkout terms, billing settings, order form, or agreement.",
    },
    {
      title: "Upgrades",
      text: "Upgrading may unlock features and result in prorated charges, immediate adjustments, or updated renewal pricing.",
    },
    {
      title: "Downgrades",
      text: "Downgrading may remove features, reduce limits, change retention options, or alter support levels.",
    },
    {
      title: "Cancellations",
      text: "Customers may cancel through account settings, billing settings, support, or enterprise contract procedures.",
    },
    {
      title: "Cancellation timing",
      text: "Cancellation may take effect immediately, at the end of the billing period, or per an order form or agreement.",
    },
    {
      title: "Re-activation",
      text: "Re-activation may be available depending on account status, data retention, payment status, and plan availability.",
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-teal-600 font-['Poppins']">
          Lifecycle
        </p>

        <h2 className="mt-4 text-center text-3xl md:text-4xl font-bold text-slate-800 dark:text-white font-['Poppins']">
          Renewals, plan changes, and cancellations
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-7 text-gray-500 dark:text-gray-400 font-['Poppins']">
          Subscription changes may affect access, pricing, billing cycles,
          support levels, retention options, and renewal obligations.
        </p>


        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">

          {cards.map((card) => (
            <div
              key={card.title}
              className="
              rounded-xl 
              border border-slate-200 
              dark:border-gray-700
              bg-white 
              dark:bg-gray-800
              p-6 
              shadow-sm
              "
            >

              <div className="flex items-center gap-3">

                <span className="h-1.5 w-1.5 rounded-sm bg-teal-600"></span>

                <h3 className="
                text-base 
                font-semibold 
                text-slate-800 
                dark:text-white
                font-['Poppins']
                ">
                  {card.title}
                </h3>

              </div>


              <p className="
              mt-5 
              text-sm 
              leading-6 
              text-gray-500 
              dark:text-gray-400
              font-['Poppins']
              ">
                {card.text}
              </p>


            </div>
          ))}

        </div>

      </div>
    </section>
  );
}