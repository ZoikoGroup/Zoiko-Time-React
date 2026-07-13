export default function HumanOversight() {
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
        9. Human Oversight and Decision Protocol
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


      {/* Highlight Box */}
      <div
        className="
          mt-6
          w-full
          bg-emerald-50
          dark:bg-emerald-950/30
          rounded-tr-lg
          rounded-br-lg
          border-l-[3px]
          border-teal-600
          px-5
          py-4
        "
      >
        <p
          className="
            text-sm
            leading-6
            font-semibold
            text-teal-700
            dark:text-teal-400
          "
        >
          ZoikoTime AI and automated insights must be used under a human
          oversight model. Human review must be meaningful, documented, and
          capable of changing the outcome.
        </p>
      </div>


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
        A reviewer must consider the underlying evidence, contextual factors,
        worker response, applicable policies, and any dispute or correction
        submitted by the Worker. Human review must not be a rubber-stamp
        exercise.
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
        Where a Customer uses ZoikoTime outputs as part of a significant
        workforce decision, the Customer must maintain records showing the
        human reviewer, evidence considered, worker response or opportunity to
        respond, applicable policy, decision rationale, and any appeal or
        correction outcome.
      </p>


    </section>
  );
}