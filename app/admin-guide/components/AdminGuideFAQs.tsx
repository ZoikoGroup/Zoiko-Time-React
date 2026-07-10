"use client";
import React, { useState } from "react";

export default function AdminGuideFAQs() {

  const faqs = [
    {
      question: "Who should use the ZoikoTime Admin Guide?",
      answer:
        "The Admin Guide is designed for workspace owners, administrators, and authorized users responsible for configuring and managing ZoikoTime.",
    },
    {
      question: "Where should a new administrator start?",
      answer:
        "New administrators should begin by configuring workspace settings, creating departments, adding workers, and assigning appropriate roles and permissions.",
    },
    {
      question: "Who should have administrator access?",
      answer:
        "Administrator access should only be provided to trusted users who require workspace-level configuration and management capabilities.",
    },
    {
      question: "Can managers see all worker records?",
      answer:
        "No. Visibility depends on assigned roles and permissions. Managers should only access information required for their responsibilities.",
    },
    {
      question: "Does ZoikoTime support payroll workflows?",
      answer:
        "ZoikoTime supports workforce records, reporting, exports, and workflows that can assist payroll processes.",
    },
    {
      question: "Does the Admin Guide replace legal or HR advice?",
      answer:
        "No. The Admin Guide provides platform guidance and should be used together with organizational policies and professional advice.",
    },
  ];


  const [openIndex, setOpenIndex] = useState<number | null>(null);


  return (
    <section className="
      bg-white
      dark:bg-black
      px-6
      py-24
      transition-colors
    ">


      <div className="
        max-w-6xl
        mx-auto
      ">


        {/* Heading */}

        <div className="
          flex
          items-center
          justify-center
          gap-3
        ">

          <div className="
            w-5
            h-[2px]
            bg-teal-600
          "/>


          <p className="
            text-xs
            font-bold
            uppercase
            tracking-wider
            text-teal-600
          ">
            Common Questions
          </p>


        </div>



        <h2 className="
          mt-5
          text-center
          text-3xl
          sm:text-4xl
          font-semibold
          text-slate-900
          dark:text-white
        ">
          Admin Guide FAQs
        </h2>




        {/* FAQ Box */}

        <div className="
          mx-auto
          mt-12
          max-w-3xl
          overflow-hidden
          rounded-2xl
          border
          border-slate-200
          dark:border-white/10
        ">


          {faqs.map((faq,index)=>(

            <div
              key={index}
              className="
                border-b
                border-slate-200
                last:border-none
                dark:border-white/10
              "
            >


              <button
                onClick={() =>
                  setOpenIndex(
                    openIndex === index ? null : index
                  )
                }
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  px-5
                  py-5
                  text-left
                "
              >


                <span className="
                  text-base
                  font-semibold
                  text-slate-900
                  dark:text-white
                ">
                  {faq.question}
                </span>



                <span className="
                  text-lg
                  text-teal-600
                ">
                  +
                </span>


              </button>



              {openIndex === index && (

                <p className="
                  px-5
                  pb-5
                  text-sm
                  leading-6
                  text-slate-500
                  dark:text-white/60
                ">
                  {faq.answer}
                </p>

              )}


            </div>

          ))}


        </div>


      </div>


    </section>
  );
}