export default function PaymentTerms() {
  const cards = [
    {
      title: "Payment methods",
      text: "ZoikoTime may support selected payment methods through approved processors; options may vary by region, plan, or contract.",
    },
    {
      title: "Failed payments",
      text: "If payment fails, ZoikoTime may notify the billing contact, retry, restrict access, suspend paid features, or close the subscription.",
    },
    {
      title: "Taxes",
      text: "Sales tax, VAT, GST, or similar charges may apply depending on location, billing address, tax status, classification, and law.",
    },
    {
      title: "Tax information",
      text: "Customers may be responsible for providing accurate billing, tax exemption, VAT, GST, or business registration information.",
    },
    {
      title: "Refunds",
      text: "Refund availability may depend on plan type, billing cycle, cancellation timing, law, provider rules, promotional terms, and agreement.",
    },
    {
      title: "Billing questions",
      text: "Contact ZoikoTime promptly if you believe there is a billing error, unauthorized charge, duplicate payment, or tax issue.",
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-teal-600 font-['Poppins']">
          Payments
        </p>

        <h2 className="
          mt-4 
          text-center 
          text-3xl 
          md:text-4xl 
          font-bold 
          text-slate-800 
          dark:text-white
          font-['Poppins']
        ">
          Payments, taxes, and refunds
        </h2>

        <p className="
          mx-auto 
          mt-4 
          max-w-2xl 
          text-center 
          text-base 
          leading-7
          text-gray-500 
          dark:text-gray-400
          font-['Poppins']
        ">
          Payment processing, taxes, refunds, and account access may depend on
          billing configuration, agreement, payment provider rules, applicable
          law, and location.
        </p>


        {/* Cards */}
        <div className="
          mt-12 
          grid 
          gap-6 
          md:grid-cols-2
        ">

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
              "
            >

              <div className="flex items-center gap-3">

                <span className="
                  h-1.5 
                  w-1.5 
                  rounded-sm 
                  bg-teal-600
                " />

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