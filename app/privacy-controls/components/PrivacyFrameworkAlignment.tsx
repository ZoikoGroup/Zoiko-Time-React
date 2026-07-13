"use client";

const complianceRows = [
  "Data subject rights (access, deletion, portability)",
  "Data minimisation — collection limited to stated purpose",
  "Transparency — individuals informed of data collection",
  "Security of processing — encryption, access controls",
  "Lawful basis documentation per processing activity",
  "Records of processing activities (Article 30 / equivalent)",
  "Cross-border transfer safeguards (SCCs / equivalents)",
  "Privacy Impact Assessment (DPIA / PIA) support",
];

export default function PrivacyFrameworkAlignment() {
  return (
    <section className="bg-slate-100 dark:bg-slate-950 py-24">
      <div className="max-w-[1200px] mx-auto px-5">

        {/* Header */}
        <div className="text-center">

          <p className="text-xs font-bold uppercase tracking-wider text-teal-600">
            Compliance
          </p>

          <h2 className="mt-5 text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Privacy Framework Alignment
          </h2>

          <p className="mt-6 max-w-[590px] mx-auto text-lg leading-7 text-slate-500 dark:text-slate-400">
            ZoikoTime&apos;s privacy architecture is aligned to GDPR, UK GDPR,
            CCPA, and equivalent global privacy frameworks — providing the
            documentation evidence that compliance and legal teams require.
          </p>

        </div>


        {/* Table Card */}
        <div className="mt-16 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">

          <div className="overflow-x-auto">

            <table className="w-full min-w-[900px] border-collapse">

              <thead>

                <tr className="bg-slate-100 dark:bg-slate-800 text-xs uppercase tracking-wide">

                  <th className="w-[55%] px-6 py-4 text-left text-slate-400">
                    Privacy Requirement
                  </th>

                  <th className="px-6 py-4 text-center text-indigo-700">
                    GDPR / UK GDPR
                  </th>

                  <th className="px-6 py-4 text-center text-teal-700">
                    CCPA
                  </th>

                  <th className="px-6 py-4 text-center text-indigo-500">
                    ISO 27701
                  </th>

                </tr>

              </thead>


              <tbody>

                {complianceRows.map((item,index)=>(

                  <tr
                    key={index}
                    className="border-t border-slate-200 dark:border-slate-700"
                  >

                    <td className="px-6 py-5 text-sm font-semibold text-slate-900 dark:text-white">
                      {item}
                    </td>


                    <td className="px-6 py-5 text-center text-lg text-slate-900 dark:text-white">
                      ✓
                    </td>


                    <td className="px-6 py-5 text-center text-lg text-slate-900 dark:text-white">
                      ✓
                    </td>


                    <td className="px-6 py-5 text-center text-lg text-slate-900 dark:text-white">
                      ✓
                    </td>


                  </tr>

                ))}


              </tbody>

            </table>

          </div>

        </div>


      </div>
    </section>
  );
}