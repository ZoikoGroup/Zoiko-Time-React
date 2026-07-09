import React from "react";

export default function FreeTrialTerms() {
  const cards = [
    {
      title: "Trial duration",
      text: "The standard free trial is 30 days, unless a different duration is stated in a specific offer, promotion, checkout flow, order form, or agreement.",
    },
    {
      title: "Trial access",
      text: "Trial access may include selected features depending on plan, region, customer type, product configuration, or current trial policy.",
    },
    {
      title: "Trial conversion",
      text: "Continued access may require selecting a paid plan, completing billing details, subscription activation, or an approved enterprise order process.",
    },
    {
      title: "Payment details",
      text: "ZoikoTime may require payment details to start, continue, or convert a trial depending on the checkout flow, offer, region, or plan.",
    },
    {
      title: "Trial abuse protection",
      text: "ZoikoTime may limit, suspend, or refuse trial access to prevent abuse, duplicate accounts, fraud, misuse, or unauthorized resale.",
    },
    {
      title: "Trial data",
      text: "Trial data may be retained, restricted, exported, deleted, or made inaccessible per product settings, retention practices, and terms.",
    },
  ];

  return (
    <section className="bg-gray-50 px-6 py-16 dark:bg-gray-900">

      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">

        <p className="text-xs font-semibold uppercase tracking-widest text-teal-600">
          Free Trial
        </p>

        <h2 className="mt-4 text-3xl font-bold text-slate-800 dark:text-white sm:text-4xl">
          Free trial terms
        </h2>

        <p className="mt-5 text-base leading-7 text-gray-500 dark:text-gray-300">
          ZoikoTime&apos;s standard free trial is designed to help organizations
          evaluate the platform before committing to a paid subscription.
        </p>

      </div>


      {/* Cards */}
      <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">

        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0px_6px_18px_rgba(14,31,61,0.05)] dark:border-gray-700 dark:bg-gray-800"
          >

            <div className="flex items-center gap-3">

              <span className="h-1.5 w-1.5 rounded-sm bg-teal-600" />

              <h3 className="text-base font-semibold text-slate-800 dark:text-white">
                {card.title}
              </h3>

            </div>


            <p className="mt-5 text-sm leading-6 text-gray-500 dark:text-gray-300">
              {card.text}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}