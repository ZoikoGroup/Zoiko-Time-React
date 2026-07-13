"use client";

const accessData = [
  {
    role: "Employee",
    scope: "Own data",
    scopeStyle:
      "bg-amber-100 text-amber-800 border-amber-200",
    data: (
      <>
        Own session records, confidence score history,
        transparency dashboard — visibility into what is
        collected about their sessions
      </>
    ),
    restrictions: (
      <>
        Cannot view other workers&apos; data. Cannot modify
        records. Cannot access confidence score
        reasoning for other workers.
      </>
    ),
  },
  {
    role: "Manager",
    scope: "Team insights",
    scopeStyle:
      "bg-indigo-50 text-indigo-500 border-indigo-200",
    data: (
      <>
        Aggregated team-level performance intelligence,
        anomaly flags requiring review, and workforce
        summary metrics for their direct scope
      </>
    ),
    restrictions: (
      <>
        Access scoped to their reporting hierarchy.
        Cannot access individual session detail beyond
        what is required for review decisions.
      </>
    ),
  },
  {
    role: "HR / Admin",
    scope: "Configurable",
    scopeStyle:
      "bg-emerald-50 text-teal-700 border-teal-200",
    data: (
      <>
        System configuration, policy settings, user
        management, and workforce overview — scope
        configured by the organisation&apos;s governance
        policy
      </>
    ),
    restrictions: (
      <>
        Configuration access does not include access
        to individual session detail by default. Must be
        explicitly scoped per governance policy.
      </>
    ),
  },
  {
    role: "Compliance / Audit",
    scope: "Audit-level",
    scopeStyle:
      "bg-emerald-50 text-teal-700 border-emerald-200",
    data: (
      <>
        Full evidence records, chain of custody, decision
        logs, and control validation reports — structured
        for audit, legal, and regulatory review
      </>
    ),
    restrictions: (
      <>
        Read-only access to evidence. Cannot modify
        records or system configuration. All access
        logged with full context.
      </>
    ),
  },
];


export default function AccessModel() {
  return (
    <section
      className="
      bg-slate-100 dark:bg-slate-950
      py-24 px-5
      transition-colors
      "
    >

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">

        <p className="
        text-teal-600
        text-xs
        font-bold
        uppercase
        tracking-wider
        ">
          Access Model
        </p>


        <h2 className="
        mt-5
        text-3xl
        md:text-4xl
        font-bold
        text-slate-900
        dark:text-white
        ">
          Who Can Access What
        </h2>


        <p className="
        mt-5
        text-lg
        leading-7
        text-slate-500
        dark:text-slate-400
        ">
          Role-based visibility scoping ensures that data access is
          proportionate to governance function — no role can access
          data beyond the scope required for their responsibilities.
        </p>

      </div>



      {/* Table */}

      <div className="
      mt-20
      max-w-[1040px]
      mx-auto
      overflow-x-auto
      rounded-2xl
      bg-white
      dark:bg-slate-900
      border
      border-slate-200
      dark:border-slate-800
      shadow-lg
      ">


      <table className="
      min-w-[1000px]
      w-full
      text-left
      ">

        <thead>

          <tr
          className="
          bg-slate-100
          dark:bg-slate-800
          border-b
          border-slate-200
          dark:border-slate-700
          "
          >

            <th className="p-6 text-xs uppercase tracking-wide text-slate-400">
              Role
            </th>


            <th className="
            p-6
            text-xs
            uppercase
            tracking-wide
            text-teal-600
            bg-emerald-50
            dark:bg-emerald-950/40
            ">
              Access Scope
            </th>


            <th className="p-6 text-xs uppercase tracking-wide text-slate-400">
              Data Types Accessible
            </th>


            <th className="p-6 text-xs uppercase tracking-wide text-slate-400">
              Restrictions
            </th>

          </tr>

        </thead>



        <tbody>

        {accessData.map((item,index)=>(

          <tr
          key={index}
          className="
          border-b
          border-slate-200
          dark:border-slate-800
          "
          >

            <td className="
            p-6
            text-sm
            font-bold
            text-slate-900
            dark:text-white
            align-top
            ">
              {item.role}
            </td>



            <td className="
            p-6
            bg-teal-600/5
            align-top
            ">

              <span
              className={`
              inline-flex
              px-4
              py-2
              rounded-full
              text-xs
              font-bold
              border
              ${item.scopeStyle}
              `}
              >
                {item.scope}
              </span>

            </td>



            <td className="
            p-6
            text-sm
            leading-6
            text-slate-700
            dark:text-slate-300
            align-top
            max-w-sm
            ">
              {item.data}
            </td>



            <td className="
            p-6
            text-sm
            leading-6
            text-slate-700
            dark:text-slate-300
            align-top
            max-w-sm
            ">
              {item.restrictions}
            </td>


          </tr>

        ))}


        </tbody>


      </table>


      </div>


    </section>
  );
}