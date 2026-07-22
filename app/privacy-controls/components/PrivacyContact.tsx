export default function PrivacyContact() {
  return (
    <section
    id = "contact-privacy-team"
     className="w-full bg-white dark:bg-slate-950 py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-5">

        {/* Header */}
        <div className="text-center">

          <p className="text-xs font-bold uppercase tracking-wider text-teal-600 leading-5">
            Privacy Contact
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-10 text-slate-900 dark:text-white">
            Contact the Privacy Team
          </h2>

        </div>


        {/* Contact Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">


          {/* Data Protection Enquiries Card */}
          <div
            className="
            min-h-[320px]
            bg-white dark:bg-slate-900
            rounded-2xl
            border border-slate-200 dark:border-slate-700
            shadow-[0px_1px_2px_0px_rgba(13,21,38,0.04)]
            shadow-[0px_1px_4px_0px_rgba(13,21,38,0.06)]
            p-8
            "
          >

            {/* Image */}
            <div className="w-14 h-14">
              <img
                src="/PrivacyContact/enquiries.png"
                alt="Privacy enquiries"
                className="w-full h-full object-contain"
              />
            </div>


            {/* Title */}
            <h3
              className="
              mt-5
              text-lg
              font-bold
              text-slate-900
              dark:text-white
              "
            >
              Data Protection & Privacy Enquiries
            </h3>


            {/* Description */}
            <p
              className="
              mt-4
              text-sm
              leading-6
              text-slate-500
              dark:text-slate-400
              "
            >
              For questions about ZoikoTime&apos;s privacy architecture,
              data processing practices, DPIA support, or general privacy
              compliance enquiries from organisations evaluating or
              deploying ZoikoTime.
            </p>


            {/* Email */}
            <div
              className="
              mt-8
              inline-flex
              px-4
              py-3
              bg-emerald-50
              dark:bg-emerald-950/40
              rounded-md
              border border-teal-600/20
              "
            >
              <span
                className="
                text-xs
                font-bold
                text-teal-700
                dark:text-teal-400
                "
              >
                privacy@zoikotime.com
              </span>
            </div>

          </div>



          {/* Data Subject Rights Card */}
          <div
            className="
            min-h-[320px]
            bg-white dark:bg-slate-900
            rounded-2xl
            border border-slate-200 dark:border-slate-700
            shadow-[0px_1px_2px_0px_rgba(13,21,38,0.04)]
            shadow-[0px_1px_4px_0px_rgba(13,21,38,0.06)]
            p-8
            "
          >

            {/* Image */}
            <div className="w-14 h-14">
              <img
                src="/PrivacyContact/requests.png"
                alt="Data subject rights requests"
                className="w-full h-full object-contain"
              />
            </div>


            {/* Title */}
            <h3
              className="
              mt-5
              text-lg
              font-bold
              text-slate-900
              dark:text-white
              "
            >
              Data Subject Rights Requests
            </h3>


            {/* Description */}
            <p
              className="
              mt-4
              text-sm
              leading-6
              text-slate-500
              dark:text-slate-400
              "
            >
              For individual workers exercising data subject rights —
              access requests, deletion requests, objections, and
              corrections are processed through the structured rights
              request channel with documented outcomes.
            </p>


            {/* Email */}
            <div
              className="
              mt-8
              inline-flex
              px-4
              py-3
              bg-emerald-50
              dark:bg-emerald-950/40
              rounded-md
              border border-teal-600/20
              "
            >
              <span
                className="
                text-xs
                font-bold
                text-teal-700
                dark:text-teal-400
                "
              >
                privacy-rights@zoikotime.com
              </span>
            </div>


          </div>


        </div>

      </div>
    </section>
  );
}