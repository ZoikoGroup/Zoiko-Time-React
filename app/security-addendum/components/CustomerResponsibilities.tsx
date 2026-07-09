import React from "react";

export default function CustomerResponsibilities() {

  const rows = [
    {
      responsibility: "Assign appropriate user roles",
      reason: "Prevents excessive access to workforce records",
    },
    {
      responsibility: "Remove inactive users promptly",
      reason: "Reduces unnecessary account exposure",
    },
    {
      responsibility: "Configure policies carefully",
      reason: "Aligns data collection and reporting with requirements",
    },
    {
      responsibility: "Review export permissions",
      reason: "Protects sensitive reports and evidence packages",
    },
    {
      responsibility: "Use strong authentication",
      reason: "Reduces account compromise risk",
    },
    {
      responsibility: "Train administrators & managers",
      reason: "Improves correct platform use and governance",
    },
    {
      responsibility: "Review screenshot settings",
      reason: "Supports transparency, privacy, and appropriate access",
    },
    {
      responsibility: "Manage integrations carefully",
      reason: "Protects data exchanged with HR, payroll, PM, identity systems",
    },
    {
      responsibility: "Preserve records when needed",
      reason: "Supports audits, disputes, investigations, legal hold",
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

        {/* Heading */}
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
            Shared Responsibility
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
            Customer responsibilities
          </h2>

          <p
            className="
              mt-4
              text-gray-500
              dark:text-gray-400
              text-sm
              md:text-base
              font-normal
              leading-7
            "
          >
            Security is strongest when ZoikoTime and its customers work together.
          </p>

        </div>


        {/* Table */}
        <div
          className="
            mt-12
            bg-white
            dark:bg-slate-900
            rounded-2xl
            overflow-hidden
            border
            border-slate-200
            dark:border-slate-700
            shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)]
          "
        >

          {/* Desktop Header */}
          <div
            className="
              hidden
              md:grid
              grid-cols-[38%_62%]
              bg-slate-800
            "
          >

            <div
              className="
                text-white
                text-xs
                font-semibold
                px-[18px]
                py-[14px]
              "
            >
              Customer responsibility
            </div>

            <div
              className="
                text-white
                text-xs
                font-semibold
                px-[18px]
                py-[14px]
              "
            >
              Why it matters
            </div>

          </div>


          {/* Rows */}
          {rows.map((row, index) => (

            <div
              key={index}
              className={`
                grid
                md:grid-cols-[38%_62%]
                border-t
                border-slate-200
                dark:border-slate-700
                ${index % 2 !== 0
                  ? "bg-gray-50 dark:bg-slate-800/50"
                  : "bg-white dark:bg-slate-900"
                }
              `}
            >

              <div
                className="
                  px-[18px]
                  py-[13px]
                  text-slate-800
                  dark:text-white
                  text-sm
                  font-bold
                "
              >
                {row.responsibility}
              </div>


              <div
                className="
                  px-[18px]
                  py-[13px]
                  text-gray-700
                  dark:text-gray-300
                  text-sm
                  font-normal
                "
              >
                {row.reason}
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}