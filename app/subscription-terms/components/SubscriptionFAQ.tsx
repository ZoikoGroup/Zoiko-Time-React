export default function SubscriptionFAQ() {
  const faqs = [
    "Does ZoikoTime offer a free trial?",
    "When does billing start?",
    "Is ZoikoTime billed monthly or annually?",
    "How are users counted for billing?",
    "Can we upgrade or downgrade our plan?",
    "What happens if payment fails?",
    "Are taxes included?",
    "Can we get a refund after cancellation?",
    "What happens to our data after cancellation?",
    "Do enterprise customers have different terms?",
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-20 transition-colors">
      <div className="mx-auto max-w-4xl px-6">

        {/* Label */}
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-teal-600 font-['Poppins']">
          Questions
        </p>

        {/* Heading */}
        <h2
          className="
          mt-4 
          text-center 
          text-3xl 
          md:text-4xl 
          font-bold 
          text-slate-800 
          dark:text-white
          font-['Poppins']
          "
        >
          Subscription Terms FAQs
        </h2>


        {/* FAQ List */}
        <div className="mt-12 space-y-5">

          {faqs.map((faq) => (
            <div
              key={faq}
              className="
              flex 
              items-center 
              justify-between
              rounded-xl
              border
              border-slate-200
              dark:border-slate-700
              bg-white
              dark:bg-slate-800
              px-6
              py-6
              shadow-sm
              transition-colors
              "
            >

              <p
                className="
                text-sm
                md:text-base
                font-semibold
                text-slate-800
                dark:text-white
                font-['Poppins']
                "
              >
                {faq}
              </p>


              <span
                className="
                text-xl
                font-normal
                text-teal-600
                font-['Poppins']
                "
              >
                +
              </span>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}