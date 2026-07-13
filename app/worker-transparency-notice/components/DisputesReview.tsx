export default function DisputesReview() {
  return (
    <section className="w-full px-5 bg-white dark:bg-slate-950">
      <div
        className="
          max-w-[696px]
          mx-auto
          pt-12
        "
      >

        {/* Title */}
        <h2
          className="
            text-2xl
            font-extrabold
            leading-8
            text-slate-900
            dark:text-white
          "
        >
          12. Disputes, Corrections, and Human Review
        </h2>


        {/* Divider */}
        <div
          className="
            mt-3
            w-12
            h-[3px]
            rounded-full
            bg-teal-600
          "
        />


        {/* Paragraph 1 */}
        <p
          className="
            mt-6
            text-base
            font-normal
            leading-7
            text-slate-700
            dark:text-slate-300
          "
        >
          Workers should have a reasonable way to question, explain, or
          dispute records that appear inaccurate, incomplete, misleading, or
          out of context. Customer organizations should define the internal
          route for raising concerns, the correction process, and the appeal
          or escalation path if concerns are not resolved.
        </p>


        {/* Paragraph 2 */}
        <p
          className="
            mt-6
            text-base
            font-normal
            leading-7
            text-slate-700
            dark:text-slate-300
          "
        >
          ZoikoTime may support audit trails for manual edits, correction
          notes, reviewer identity, timestamps, policy versions, supporting
          evidence, and status changes. Customer organizations should not
          delete or suppress original records in a way that prevents
          reconstruction of how decisions were made.
        </p>


      </div>
    </section>
  );
}