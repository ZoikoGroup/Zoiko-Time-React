"use client";

import React from "react";

const faqs = [
  "What is the ZoikoTime Mobile App?",
  "Can Workers download the app now?",
  "Does downloading the app create ZoikoTime access?",
  "Can Workers clock in and out from the app?",
  "Can Workers take breaks from the app?",
  "Can Managers approve requests from the app?",
  "Does the app capture screenshots?",
  "Does the app track private phone activity?",
  "Does the app use location?",
  "What happens if the Worker loses connection?",
];

export default function MobileAppFAQs() {
  return (
    <section
      className="
        w-full

        px-5

        py-16

        transition-colors

        duration-300


        bg-gray-50

        dark:bg-slate-950


        sm:px-8

        lg:px-12
      "
    >

      <div
        className="
          mx-auto

          w-full

          max-w-[1180px]
        "
      >

        {/* Header */}
        <div className="text-center">

          <p
            className="
              text-xs

              font-semibold

              uppercase

              leading-5

              tracking-[0.2em]


              text-teal-600

              dark:text-teal-400
            "
          >
            Questions
          </p>


          <h2
            className="
              mt-2

              text-3xl

              font-bold

              leading-tight


              text-slate-900

              dark:text-white


              sm:text-4xl
            "
          >
            Mobile App FAQs
          </h2>

        </div>


        {/* FAQ List */}
        <div
          className="
            mt-12

            space-y-3

            mx-auto

            max-w-[800px]
          "
        >

          {faqs.map((faq) => (
            <div
              key={faq}
              className="
                flex

                items-start

                gap-3

                rounded-lg

                px-4

                py-2

                text-sm

                leading-6


                text-gray-700

                transition-colors

                duration-200


                hover:bg-white


                dark:text-slate-300

                dark:hover:bg-slate-900/60


                sm:text-base
              "
            >

              <span
                aria-hidden="true"
                className="
                  mt-0.5

                  shrink-0

                  text-teal-600

                  dark:text-teal-400
                "
              >
                •
              </span>


              <span>
                {faq}
              </span>


            </div>
          ))}

        </div>


      </div>


    </section>
  );
}