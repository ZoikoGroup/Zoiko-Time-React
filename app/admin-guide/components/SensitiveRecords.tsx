import React from "react";

export default function SensitiveRecords() {

  const cards = [
    {
      icon: "/SensitiveRecords/screenshot.png",
      title: "Screenshots Where Enabled",
      description:
        "Define whether screenshots are enabled, which teams or roles are covered, capture frequency, and who can access screenshot records.",
    },
    {
      icon: "/SensitiveRecords/reduction.png",
      title: "Redaction Controls",
      description:
        "Clarify what may be redacted, who can apply redaction, who can view redacted or unredacted content, and how redaction history is preserved.",
    },
    {
      icon: "/SensitiveRecords/evidence.png",
      title: "Evidence Controls",
      description:
        "Govern audit trail access, evidence package creation, timesheet history, correction records, and export permissions for authorized roles.",
    },
  ];


  return (
    <section className="
      bg-slate-100
      dark:bg-black
      px-6
      py-24
      transition-colors
    ">

      <div className="max-w-6xl mx-auto">


        {/* Header */}

        <div className="flex items-center justify-center gap-3">

          <div className="
            h-[2px]
            w-5
            bg-teal-600
          " />

          <p className="
            text-xs
            font-bold
            uppercase
            tracking-wider
            text-teal-600
          ">
            Sensitive Records
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
          Screenshots, Redaction, and Evidence Controls
        </h2>



        <p className="
          mx-auto
          mt-6
          max-w-4xl
          text-center
          text-base
          leading-7
          text-slate-500
          dark:text-white/60
        ">
          Some ZoikoTime features involve sensitive workforce information.
          Administrators should configure these features with transparency,
          access limits, retention awareness, and accountable review.
        </p>



        {/* Cards */}

        <div className="
          mt-16
          grid
          gap-6
          lg:grid-cols-3
        ">


          {cards.map((card,index)=>(

            <div
              key={index}
              className="
                relative
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-6
                dark:border-white/10
                dark:bg-white/5
              "
            >


              {/* Top Gradient Line */}

              <div className="
                absolute
                left-0
                top-0
                h-[3px]
                w-full
                bg-gradient-to-r
                from-teal-600
                to-teal-500
              "/>



              <img
                src={card.icon}
                alt={card.title}
                className="
                  h-8
                  w-8
                  object-contain
                "
              />



              <h3 className="
                mt-6
                text-base
                font-semibold
                text-slate-900
                dark:text-white
              ">
                {card.title}
              </h3>



              <p className="
                mt-3
                text-xs
                leading-5
                text-slate-500
                dark:text-white/60
              ">
                {card.description}
              </p>



            </div>

          ))}


        </div>




        {/* Warning Note */}

        <div className="
          mt-12
          rounded-r-lg
          border-l-[3px]
          border-amber-500
          bg-orange-50
          p-5
          dark:bg-orange-500/10
        ">

          <p className="
            text-sm
            font-semibold
            leading-6
            text-amber-800
            dark:text-amber-400
          ">
            Sensitive records should only be accessible to authorized users
            with a legitimate business purpose. Access should be documented,
            permission-controlled, and regularly reviewed.
          </p>


        </div>


      </div>


    </section>
  );
}