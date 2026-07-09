export default function DataAccessCancellation() {
  const cards = [
    {
      title: "Account access",
      text: "Access may continue until the end of the billing period, end immediately, or follow enterprise agreement terms.",
    },
    {
      title: "Data export",
      text: "Export required reports, records, evidence packages, invoices, and workforce data before termination if needed.",
    },
    {
      title: "Retention periods",
      text: "Data may be retained, restricted, anonymized, deleted, or preserved per retention practices, settings, legal hold, and terms.",
    },
    {
      title: "Legal hold exception",
      text: "Records under legal hold may be governed by legal hold workflows and customer agreement terms.",
    },
    {
      title: "Reinstatement",
      text: "Reinstatement may be possible within a defined period depending on data status, account status, and payment resolution.",
    },
    {
      title: "Customer responsibility",
      text: "Customers plan data exports, recordkeeping, payroll timing, billing cycles, and legal or compliance needs before cancellation.",
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-teal-600 font-['Poppins']">
          After Cancellation
        </p>

        <h2
          className="
          mt-4
          text-center
          text-3xl
          md:text-4xl
          font-bold
          text-slate-800
          dark:text-white
          font-['Poppins']
          "
        >
          Data access after cancellation or expiration
        </h2>


        <p
          className="
          mx-auto
          mt-4
          max-w-3xl
          text-center
          text-base
          leading-7
          text-gray-500
          dark:text-gray-400
          font-['Poppins']
          "
        >
          When a subscription is canceled, expires, or is suspended, access to
          ZoikoTime data may change. Export required records before cancellation
          where appropriate — especially data that supports payroll, billing,
          compliance, or legal processes.
        </p>


        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">

          {cards.map((card) => (
            <div
              key={card.title}
              className="
              rounded-xl
              border
              border-slate-200
              dark:border-gray-700
              bg-white
              dark:bg-gray-800
              p-6
              shadow-sm
              "
            >

              <div className="flex items-center gap-3">

                <span
                  className="
                  h-1.5
                  w-1.5
                  rounded-sm
                  bg-teal-600
                  "
                />

                <h3
                  className="
                  text-base
                  font-semibold
                  text-slate-800
                  dark:text-white
                  font-['Poppins']
                  "
                >
                  {card.title}
                </h3>

              </div>


              <p
                className="
                mt-5
                text-sm
                leading-6
                text-gray-500
                dark:text-gray-400
                font-['Poppins']
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