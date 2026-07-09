import React from "react";

export default function WhoWeAreContact() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-0 py-6 bg-white dark:bg-slate-950">

      <div className="w-full max-w-[696px] mx-auto">

        {/* Heading */}
        <h2
          className="
            text-2xl
            font-extrabold
            font-['Plus_Jakarta_Sans']
            leading-8
            text-slate-900
            dark:text-white
          "
        >
          2. Who We Are and How to Contact Us
        </h2>


        {/* Teal Line */}
        <div
          className="
            w-12
            h-[3px]
            bg-teal-600
            rounded-full
            mt-4
            mb-6
          "
        />


        {/* Paragraph 1 */}
        <p
          className="
            text-base
            font-normal
            font-['Plus_Jakarta_Sans']
            leading-7
            text-slate-700
            dark:text-slate-300
            mb-6
          "
        >
          ZoikoTime is a platform provided by Zoiko Tech Inc. US Headquarters:
          1401 21st Street, Suite R, Sacramento, CA 95811, USA. European
          Headquarters: 67-69 Great Portland Street, 5th Floor, London W1W 5PF,
          UK. Email: sales@zoikotime.com.
        </p>


        {/* Paragraph 2 */}
        <p
          className="
            text-base
            font-normal
            font-['Plus_Jakarta_Sans']
            leading-7
            text-slate-700
            dark:text-slate-300
          "
        >
          Privacy inquiries, data protection requests, or questions about this
          Privacy Notice may be submitted using the contact details above.
          Where a request relates to workforce data controlled by a ZoikoTime
          Customer, the request should generally be directed to the Customer
          organization.
        </p>

      </div>

    </section>
  );
}