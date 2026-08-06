export default function Exports() {
  const steps = [
    {
      step: "Step 01",
      title: "Select export",
      desc: "An approved report, table, evidence package, or documented data object only.",
    },
    {
      step: "Step 02",
      title: "Preview scope",
      desc: "Record basis, metrics, dimensions, period, privacy treatment, classification, estimated size.",
    },
    {
      step: "Step 03",
      title: "Authorize",
      desc: "Role, purpose, destination, approval, and step-up authentication where required.",
    },
    {
      step: "Step 04",
      title: "Generate",
      desc: "Versioned definitions, source snapshot, calculation time, exclusions, integrity check.",
    },
    {
      step: "Step 05",
      title: "Deliver",
      desc: "Controlled destination, expiry, access, retry, acknowledgement where supported.",
    },
    {
      step: "Step 06",
      title: "Record evidence",
      desc: "Requester, approver, scope, reason, format, time, destination, outcome, revocation.",
    },
    {
      step: "Step 07",
      title: "Correct or supersede",
      desc: "Link the recalculation. The prior export is preserved as historical, never silently overwritten.",
    },
    {
      step: "Step 08",
      title: "Retain or dispose",
      desc: "Approved retention and secure disposal. You remain responsible for downstream copies.",
    },
  ];

  const boundary = [
    "No promised format, encryption method, or watermark",
    "No download limit, API, or destination claim",
    "No retention or revocation capability",
    "…unless it is current, documented, owned, and approved",
  ];

  const reproducibility = [
    "Metric and report version",
    "Scope, filters, and time zone",
    "Source snapshot and calculation record",
    "Approvals, delivery, and correction lineage",
  ];

  return (
    <section className="w-full bg-blue-950 px-4 py-16 sm:px-8 lg:px-32 dark:bg-slate-950">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-10">

        {/* Header */}
        <div className="flex w-full max-w-[800px] flex-col items-center gap-4 text-center">

          <p className="text-xs font-bold uppercase tracking-wider text-emerald-300">
            Controlled Exports & Evidence Packages
          </p>

          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
            Eight Steps Between a Request and a File
          </h2>

          <p className="max-w-[650px] text-base leading-7 text-slate-300">
            An export is the moment governance either travels with the data or
            is left behind. Every step below produces a record.
          </p>

        </div>


        {/* Steps */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {steps.map((item) => (
            <div
              key={item.step}
              className="
              rounded-xl border border-slate-200
              bg-white p-5
              shadow-sm
              dark:border-slate-700
              dark:bg-slate-900
              "
            >

              <p className="text-xs font-extrabold tracking-wide text-emerald-600 dark:text-emerald-400">
                {item.step}
              </p>


              <h3 className="mt-2 text-base font-bold text-black dark:text-white">
                {item.title}
              </h3>


              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {item.desc}
              </p>

            </div>
          ))}

        </div>



        {/* Bottom cards */}
        <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2">


          {/* Boundary */}
          <div
            className="
            rounded-2xl border border-white/10
            bg-white/5 p-6
            dark:border-white/10
            "
          >

            <h3 className="flex items-center gap-2 text-base font-bold text-white">

              <span className="text-red-400 text-xl">
                ⊗
              </span>

              Export boundary

            </h3>


            <ul className="mt-5 space-y-3">

              {boundary.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-6 text-slate-300"
                >

                  <span className="font-bold text-red-400">
                    ×
                  </span>

                  {item}

                </li>
              ))}

            </ul>

          </div>




          {/* Reproducibility */}
          <div
            className="
            rounded-2xl border border-emerald-400/30
            bg-emerald-400/10
            p-6
            "
          >

            <h3 className="flex items-center gap-2 text-base font-bold text-white">

              <span className="text-emerald-400 text-xl">
                ◉
              </span>

              Reproducibility

            </h3>


            <ul className="mt-5 space-y-3">

              {reproducibility.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-6 text-slate-300"
                >

                  <span className="font-bold text-emerald-400">
                    ✓
                  </span>

                  {item}

                </li>
              ))}

            </ul>

          </div>


        </div>


      </div>
    </section>
  );
}