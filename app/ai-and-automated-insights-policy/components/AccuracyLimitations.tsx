export default function AccuracyLimitations() {
  return (
    <section
      className="
        w-full
        max-w-[696px]
        mx-auto
        mt-14
      "
    >

      {/* Heading */}
      <h2
        className="
          text-2xl
          leading-8
          font-extrabold
          text-slate-900
          dark:text-white
        "
      >
        13. Accuracy, Limitations, and Contestability
      </h2>


      {/* Divider */}
      <div
        className="
          w-12
          h-[3px]
          mt-3
          rounded-full
          bg-teal-600
          dark:bg-teal-400
        "
      />


      {/* Paragraph 1 */}
      <p
        className="
          mt-5
          text-base
          leading-7
          font-normal
          text-slate-700
          dark:text-slate-300
        "
      >
        AI and automated systems may produce incomplete, inaccurate, delayed,
        context-poor, or misleading outputs. Work patterns may be affected by
        device settings, offline work, accessibility tools, network
        conditions, integration errors, leave records, role differences,
        meetings, client work, non-keyboard work, care responsibilities,
        disabilities, religious practices, local labor rules, or approved
        exceptions.
      </p>


      {/* Paragraph 2 */}
      <p
        className="
          mt-5
          text-base
          leading-7
          font-normal
          text-slate-700
          dark:text-slate-300
        "
      >
        Customers must provide a practical route for Workers to contest,
        explain, or correct records that may affect them. Contestability should
        include a clear recipient, review timeframe, evidence review, decision
        record, correction mechanism, and escalation route where appropriate.
      </p>


    </section>
  );
}