export default function ReviewAuthority() {
  const reviews = [
    {
      record: "Record #4821",
      issue: "Correction requested",
      owner: "You",
      action: "Approve",
      style: "green",
    },
    {
      record: "Record #4822",
      issue: "Missing project code",
      owner: "Worker",
      action: "Request info",
      style: "blue",
    },
    {
      record: "Record #4823",
      issue: "Post-approval change",
      owner: "Reviewer",
      action: "Reapprove",
      style: "orange",
    },
    {
      record: "Record #4824",
      issue: "Conflict of interest",
      owner: "—",
      action: "Escalate",
      style: "red",
    },
  ];

  return (
    <section className="bg-white py-16 dark:bg-slate-950 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 text-center">

        {/* Heading */}
        <div className="mb-10 max-w-3xl">

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-600">
            Review With Authority
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-800 dark:text-white sm:text-4xl">
            Bounded manager & reviewer decisions
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-500 dark:text-slate-400">
            Reviewers act only within their organization scope. Every material
            decision needs a structured reason and evidence — and it stays
            separate from downstream payroll, discipline, or legal execution.
          </p>

        </div>


        {/* Application Window */}
        <div className="
          w-full overflow-hidden rounded-2xl
          border border-slate-200
          bg-white
          shadow-[0_10px_30px_rgba(14,31,61,0.10)]
          dark:border-slate-800
          dark:bg-slate-900
        ">


          {/* Top Bar */}
          <div className="
            flex h-11 items-center gap-3
            bg-slate-800 px-5
          ">

            <div className="flex gap-2">
              <span className="h-2.5 w-2.5 rounded-md bg-white/25" />
              <span className="h-2.5 w-2.5 rounded-md bg-white/25" />
              <span className="h-2.5 w-2.5 rounded-md bg-white/25" />
            </div>


            <span className="text-xs font-medium text-white/90">
              ZoikoTime · Reviewer
            </span>

          </div>



          <div className="flex flex-col lg:flex-row">


            {/* Sidebar */}
            <aside className="
              hidden w-44 shrink-0
              border-r border-slate-200
              bg-gray-50 p-5
              dark:border-slate-800
              dark:bg-slate-950
              lg:block
            ">

              <div className="mb-8 text-xs font-extrabold">
                <span className="text-slate-800 dark:text-white">
                  ZOIKO
                </span>
                <span className="text-teal-600">
                  TIME
                </span>
              </div>


              <nav className="space-y-5 text-xs">

                <div className="
                  flex items-center gap-3
                  rounded-lg bg-white px-3 py-2
                  font-medium text-slate-800
                  shadow-sm
                  dark:bg-slate-800
                  dark:text-white
                ">
                  <span className="h-1.5 w-1.5 rounded-sm bg-teal-600"/>
                  Review queue
                </div>


                {[
                  "Exceptions",
                  "Approvals",
                  "Evidence",
                  "History",
                ].map((item)=>(
                  <div
                    key={item}
                    className="
                    flex items-center gap-3
                    text-gray-500
                    dark:text-slate-400
                    "
                  >
                    <span className="h-1.5 w-1.5 rounded-sm bg-gray-300"/>
                    {item}
                  </div>
                ))}

              </nav>

            </aside>



            {/* Content */}
            <div className="flex-1 p-5 lg:p-6">


              <div className="
                mb-6 flex flex-col gap-3
                sm:flex-row
                sm:items-center
                sm:justify-between
              ">

                <h3 className="
                  text-base font-semibold
                  text-slate-800
                  dark:text-white
                ">
                  Review queue · your authority scope
                </h3>


                <span className="
                  inline-flex w-fit items-center gap-2
                  rounded-full bg-orange-100
                  px-3 py-1
                  text-xs font-bold text-yellow-700
                ">
                  <span className="h-1.5 w-1.5 rounded-full bg-yellow-700"/>
                  5 due today
                </span>

              </div>



              {/* Table */}
              <div className="overflow-x-auto">

                <table className="w-full min-w-[700px] text-left text-sm">

                  <thead>

                    <tr className="
                      border-b border-slate-200
                      text-xs uppercase
                      text-gray-500
                      dark:border-slate-700
                      dark:text-slate-400
                    ">

                      <th className="px-3 py-3">
                        Worker / record
                      </th>

                      <th className="px-3 py-3">
                        Issue
                      </th>

                      <th className="px-3 py-3">
                        Owner
                      </th>

                      <th className="px-3 py-3">
                        Action
                      </th>

                    </tr>

                  </thead>


                  <tbody>

                    {reviews.map((item)=>(
                      <tr
                        key={item.record}
                        className="
                        border-b border-slate-200
                        dark:border-slate-800
                        "
                      >

                        <td className="
                          px-3 py-4
                          text-xs
                          text-slate-800
                          dark:text-slate-200
                        ">
                          {item.record}
                        </td>


                        <td className="
                          px-3 py-4
                          text-xs
                          text-slate-800
                          dark:text-slate-200
                        ">
                          {item.issue}
                        </td>


                        <td className="
                          px-3 py-4
                          text-xs
                          text-slate-800
                          dark:text-slate-200
                        ">
                          {item.owner}
                        </td>


                        <td className="px-3 py-4">

                          <Badge type={item.style}>
                            {item.action}
                          </Badge>

                        </td>


                      </tr>
                    ))}

                  </tbody>

                </table>

              </div>



              <p className="
                mt-6 text-xs
                text-gray-500
                dark:text-slate-400
              ">
                Decisions are attributable and reasoned — and separate from any
                downstream payroll or discipline execution.
              </p>


            </div>

          </div>

        </div>

      </div>
    </section>
  );
}



function Badge({
  children,
  type,
}:{
  children:React.ReactNode;
  type:string;
}){

const styles:any={
  green:
  "bg-emerald-50 text-teal-700 dark:bg-emerald-900/30 dark:text-emerald-300",

  blue:
  "bg-indigo-50 text-blue-700 dark:bg-indigo-900/30 dark:text-blue-300",

  orange:
  "bg-orange-100 text-yellow-700 dark:bg-orange-900/30 dark:text-orange-300",

  red:
  "bg-rose-50 text-red-700 dark:bg-rose-900/30 dark:text-red-300",
};


return(
<span className={`
inline-flex rounded-full px-3 py-1
text-xs font-bold
${styles[type]}
`}>
{children}
</span>
)

}