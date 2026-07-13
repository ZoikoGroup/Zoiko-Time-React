export default function ExplainabilityEvidence() {
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
        12. Explainability, Confidence Scores, and Evidence
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


      {/* Description */}
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
        ZoikoTime AI features may provide explanations, supporting indicators,
        source references, confidence levels, or evidence links depending on
        feature availability and configuration.
      </p>


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
          Confidence scores and automated flags are not determinations of
          truth, misconduct, fraud, or legal non-compliance. They are signals
          for review.
        </p>
      </div>


      {/* Paragraph */}
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
        Customers must train authorized reviewers to understand that a
        low-confidence, ambiguous, conflicting, or incomplete record requires
        additional context and must not be treated as conclusive.
      </p>


    </section>
  );
}