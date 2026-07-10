import React from "react";

const NotLookingForSales = () => {
  const cards = [
    {
      title: "Existing Customer Support",
      description:
        "For product questions, troubleshooting, account help, or technical support visit the Help Center.",
    },
    {
      title: "Billing or Subscription",
      description:
        "For invoice, payment, plan change, or subscription questions visit billing support in your account settings.",
    },
    {
      title: "Partnership Inquiry",
      description:
        "For reseller, referral, SI, or advisor partnerships use the Contact Sales form and select Partnership Inquiry.",
    },
    {
      title: "Security or Procurement Review",
      description:
        "For security documentation, DPA, or procurement review use the form above and select security review.",
    },
  ];

  return (
    <section className="w-full bg-white dark:bg-slate-950 py-16 px-5">
      <div className="max-w-[1440px] mx-auto">

        {/* Heading */}
        <h2 className="text-center text-slate-900 dark:text-white text-3xl font-semibold mb-3">
          Not Looking for Sales?
        </h2>

        <p className="text-center text-slate-500 dark:text-slate-400 text-base font-normal mb-12">
          Use the appropriate route for your question.
        </p>


        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1052px] mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className="
                h-36
                bg-white
                dark:bg-slate-900
                rounded-xl
                border
                border-slate-200
                dark:border-slate-700
                p-5
              "
            >
              <h3 className="text-slate-900 dark:text-white text-sm font-semibold mb-3">
                {card.title}
              </h3>

              <p className="text-slate-500 dark:text-slate-400 text-xs leading-5 font-normal">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default NotLookingForSales;