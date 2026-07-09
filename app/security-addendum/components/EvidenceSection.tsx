export default function EvidenceSection() {
  const cards = [
    {
      title: "Audit logs",
      text: "Important actions are logged to support accountability, administrative review, security investigation, and evidence traceability.",
    },
    {
      title: "Record integrity",
      text: "Time records, approvals, exceptions, reports, and evidence packages are handled to support traceability and reduce unauthorized alteration.",
    },
    {
      title: "Evidence packages",
      text: "Where supported, ZoikoTime helps customers compile workforce evidence for review, billing support, dispute handling, or legal processes.",
    },
    {
      title: "Legal hold",
      text: "Legal hold workflows help preserve relevant records when customers need to prevent deletion due to investigation, dispute, audit, or regulatory review.",
    },
    {
      title: "Retention controls",
      text: "Retention may vary by plan, settings, jurisdiction, module, legal hold status, and customer agreement.",
    },
    {
      title: "Deletion & export governance",
      text: "Deletion, export, restriction, and preservation are governed by role permissions, configuration, settings, and applicable terms.",
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

      <div className="max-w-[980px] mx-auto">

        {/* Header */}
        <div className="text-center">

          <div
            className="
              text-teal-600 
              text-xs 
              font-semibold 
              uppercase 
              leading-5 
              tracking-widest
            "
          >
            Evidence
          </div>


          <h2
            className="
              mt-2
              text-3xl
              md:text-4xl
              font-bold
              leading-10
              text-slate-800
              dark:text-white
            "
          >
            Auditability, retention, and evidence integrity
          </h2>


          <p
            className="
              mt-4
              max-w-[624px]
              mx-auto
              text-sm
              md:text-base
              font-normal
              leading-7
              text-gray-500
              dark:text-gray-400
            "
          >
            Security supports more than account protection — it supports trustworthy
            records, accountability, evidence review, retention governance, and legal
            defensibility.
          </p>

        </div>


        {/* Cards */}
        <div
          className="
            mt-12
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-5
            lg:gap-x-[18px]
          "
        >

          {cards.map((card, index) => (
            <div
              key={index}
              className="
                min-h-[144px]
                bg-white
                dark:bg-slate-900
                rounded-xl
                border
                border-slate-200
                dark:border-slate-700
                shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)]
                p-6
              "
            >

              {/* Card title */}
              <div className="flex items-center gap-3">

                <span
                  className="
                    w-1.5
                    h-1.5
                    bg-teal-600
                    rounded-sm
                  "
                />


                <h3
                  className="
                    text-base
                    font-semibold
                    leading-6
                    text-slate-800
                    dark:text-white
                  "
                >
                  {card.title}
                </h3>

              </div>


              {/* Description */}
              <p
                className="
                  mt-5
                  text-sm
                  font-normal
                  leading-6
                  text-gray-500
                  dark:text-gray-400
                "
              >
                {card.text}
              </p>


            </div>
          ))}

        </div>

      </div>

    </section>
  );
}