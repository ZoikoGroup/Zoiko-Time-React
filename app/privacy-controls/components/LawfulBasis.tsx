export default function LawfulBasis() {
  const rows = [
    {
      purpose: "Workforce\nverification",
      description:
        "Session identity confirmation, confidence scoring, and session integrity monitoring to verify that recorded work reflects genuine, policy-aligned activity",
      basis: "Legitimate interest / Contractual necessity",
      notes:
        "Legitimate interest assessment (LIA) required in EU/UK — documentation provided",
    },
    {
      purpose: "Compliance &\naudit",
      description:
        "Evidence generation, chain of custody maintenance, and regulatory record-keeping required for compliance with applicable labour and data law obligations",
      basis: "Legal obligation",
      notes:
        "Applies across all jurisdictions with mandatory workforce record-keeping requirements",
    },
    {
      purpose: "Performance\ninsight",
      description:
        "Activity-to-outcome mapping and contextual productivity intelligence for workforce management and performance review purposes",
      basis: "Legitimate interest",
      notes:
        "Requires balancing test — employer interests vs. employee privacy rights. Configurable per jurisdiction.",
    },
    {
      purpose: "Anomaly\ndetection",
      description:
        "Pattern analysis and fraud risk detection to identify manipulation, misrepresentation, and policy violations in workforce activity data",
      basis: "Legitimate interest",
      notes:
        "Proportionality assessment required — sensitivity configurable by role and risk profile",
    },
    {
      purpose: "System\nsecurity",
      description:
        "Access logging, session monitoring, and security event detection for the protection of the ZoikoTime system and its data",
      basis: "Legitimate interest",
      notes:
        "Standard security processing — applicable across all jurisdictions",
    },
  ];


  return (
    <section className="w-full bg-white dark:bg-slate-950 py-20 px-5 transition-colors">

      <div className="max-w-[1200px] mx-auto text-center">


        {/* Label */}
        <p className="text-xs font-bold uppercase tracking-wider text-teal-600">
          Lawful Basis
        </p>


        {/* Heading */}
        <h2 className="mt-5 text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
          Lawful Basis for Data Processing
        </h2>


        {/* Description */}
        <p className="mt-5 text-base md:text-lg text-slate-500 dark:text-slate-400 leading-7">
          GDPR and equivalent privacy frameworks require a lawful basis for
          <br className="hidden md:block"/>
          every data processing activity. ZoikoTime's default processing
          <br className="hidden md:block"/>
          activities and their applicable lawful bases are documented below.
        </p>



        {/* Table */}
        <div className="
          mt-12
          overflow-x-auto
          rounded-2xl
          border
          border-slate-200
          dark:border-slate-700
          shadow-sm
        ">

          <table className="
            min-w-[1000px]
            w-full
            text-left
            border-collapse
            bg-white
            dark:bg-slate-900
          ">

            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800">

                {[
                  "Processing Purpose",
                  "Description",
                  "Lawful Basis",
                  "Jurisdiction Notes",
                ].map((head)=>(
                  <th
                    key={head}
                    className="
                      px-6
                      py-5
                      text-xs
                      uppercase
                      tracking-wide
                      font-bold
                      text-slate-400
                      border-b
                      border-slate-200
                      dark:border-slate-700
                    "
                  >
                    {head}
                  </th>
                ))}

              </tr>
            </thead>


            <tbody>

              {rows.map((row,index)=>(

                <tr
                  key={index}
                  className="
                    border-b
                    border-slate-200
                    dark:border-slate-700
                  "
                >

                  <td className="
                    px-6
                    py-6
                    text-sm
                    font-bold
                    whitespace-pre-line
                    text-slate-900
                    dark:text-white
                  ">
                    {row.purpose}
                  </td>


                  <td className="
                    px-6
                    py-6
                    text-sm
                    leading-6
                    text-slate-500
                    dark:text-slate-400
                  ">
                    {row.description}
                  </td>


                  <td className="px-6 py-6">

                    <span
                      className="
                        inline-block
                        px-4
                        py-2
                        rounded-full
                        text-xs
                        font-bold
                        text-teal-700
                        dark:text-teal-400
                        bg-emerald-50
                        dark:bg-emerald-950/40
                        border
                        border-teal-600/20
                      "
                    >
                      {row.basis}
                    </span>

                  </td>


                  <td className="
                    px-6
                    py-6
                    text-sm
                    leading-6
                    text-slate-700
                    dark:text-slate-300
                  ">
                    {row.notes}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>



        {/* Important Note */}
        <div
          className="
            mt-8
            text-left
            bg-indigo-50
            dark:bg-indigo-950/30
            rounded-xl
            border
            border-indigo-500/20
            px-6
            py-5
          "
        >

          <p className="text-xs leading-5 text-slate-700 dark:text-slate-300">

            <span className="font-bold text-indigo-500">
              Important note:
            </span>{" "}

            The applicable lawful basis depends on jurisdiction, the employer's
            specific policies, and applicable regulatory requirements.
            ZoikoTime provides the framework and documentation — the deploying
            organisation is responsible for confirming the appropriate lawful
            basis in their specific legal context with qualified legal counsel.

          </p>

        </div>


      </div>

    </section>
  );
}