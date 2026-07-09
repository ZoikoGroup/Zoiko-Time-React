import React from "react";

interface FAQItem {
  question: string;
}

export default function SecurityAddendumFAQs() {

  const faqs: FAQItem[] = [
    {
      question: "What is the ZoikoTime Security Addendum?",
    },
    {
      question: "Does ZoikoTime encrypt customer data?",
    },
    {
      question: "Does ZoikoTime support role-based access control?",
    },
    {
      question: "Does ZoikoTime keep audit logs?",
    },
    {
      question: "How does ZoikoTime protect screenshots?",
    },
    {
      question: "Can enterprise customers request security documentation?",
    },
    {
      question: "Does ZoikoTime support legal hold?",
    },
  ];


  return (
    <section
      className="
        w-full
        bg-gray-50
        dark:bg-slate-950
        px-5
        py-[74px]
      "
    >

      <div className="max-w-[820px] mx-auto">


        {/* Header */}
        <div className="text-center mb-10">

          <div
            className="
              text-teal-600
              text-xs
              font-semibold
              font-['Poppins']
              uppercase
              leading-5
              tracking-widest
            "
          >
            Questions
          </div>


          <h2
            className="
              mt-2
              text-3xl
              md:text-4xl
              text-slate-800
              dark:text-white
              font-bold
              font-['Poppins']
              leading-10
            "
          >
            Security Addendum FAQs
          </h2>

        </div>



        {/* FAQ Cards */}
        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="
                h-20
                bg-white
                dark:bg-slate-900
                rounded-xl
                border
                border-slate-200
                dark:border-slate-700
                shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)]
                flex
                items-center
                justify-between
                px-[22px]
              "
            >

              <h3
                className="
                  text-slate-800
                  dark:text-white
                  text-base
                  font-semibold
                  font-['Poppins']
                  leading-6
                "
              >
                {faq.question}
              </h3>


              <span
                className="
                  text-teal-600
                  text-xl
                  font-normal
                  font-['Poppins']
                  leading-9
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