"use client";

export default function ExplainabilityEngine() {
  const questions = [
    "Why was this session flagged?",
    "Why was this anomaly detected?",
    "Why was this session accepted?",
    "Why was this compliance alert triggered?",
  ];

  return (
    <section
    id ="explore-explainability-engine"
     className="w-full bg-white dark:bg-slate-950 transition-colors">
      <div
        className="
        max-w-[1200px] mx-auto
        px-5 sm:px-6 lg:px-8
        py-16
        grid lg:grid-cols-2
        gap-10
        "
      >

        {/* Left Content */}
        <div>

          {/* Label */}
          <div className="
            text-teal-600 dark:text-teal-400
            text-xs font-semibold
            uppercase tracking-wider
            font-sans
          ">
            Explainability Engine
          </div>


          {/* Heading */}
          <h2 className="
            mt-6
            text-3xl md:text-4xl
            font-semibold
            leading-tight
            text-slate-900 dark:text-white
            font-sans
          ">
            "Why Did This Happen?" —
            <br />
            Answered
          </h2>


          {/* Description */}
          <p className="
            mt-6
            text-sm md:text-base
            leading-7
            text-slate-500 dark:text-slate-300
            font-sans
          ">
            ZoikoTime&apos;s Explainability Engine answers any question about
            a session, signal, or decision — in human-readable language,
            with full supporting data, policy reference, and confidence
            score. Select an example to see the engine in action.
          </p>


          {/* Questions */}
          <div className="mt-8 space-y-3">
            {questions.map((item, index) => (
              <button
                key={item}
                className={`
                  w-full h-10
                  rounded-xl
                  border
                  text-xs
                  font-semibold
                  font-sans
                  transition
                  ${
                    index === 0
                      ? "bg-emerald-50 dark:bg-emerald-950/40 text-teal-700 dark:text-teal-400 border-teal-600"
                      : "bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700"
                  }
                `}
              >
                {item}
              </button>
            ))}
          </div>

        </div>



        {/* Right Explain Card */}
        <div
          className="
          bg-white
          dark:bg-slate-900
          rounded-2xl
          border border-slate-200
          dark:border-slate-700
          shadow-sm
          overflow-hidden
          "
        >

          {/* Search Header */}
          <div className="
            p-5
            border-b border-slate-200
            dark:border-slate-700
            flex gap-3
          ">

            <div className="
              flex-1
              h-10
              rounded-md
              border border-slate-300
              dark:border-slate-600
              flex items-center
              px-4
              text-xs
              text-slate-600
              dark:text-slate-300
              font-sans
            ">
              Why was this session flagged?
            </div>


            <button
              className="
              w-24
              h-10
              bg-teal-600
              rounded-md
              text-white
              text-xs
              font-semibold
              font-sans
              "
            >
              Explain →
            </button>

          </div>


          {/* Outcome */}
          <div className="
            bg-slate-900
            p-5
            flex
            justify-between
            items-center
          ">

            <div>
              <p className="
                text-white/50
                text-xs
                font-semibold
                uppercase
                font-sans
              ">
                Outcome
              </p>

              <h3 className="
                mt-1
                text-base
                font-semibold
                text-white
                font-sans
              ">
                Session flagged as anomalous
              </h3>
            </div>


            <span className="
              px-3 py-1
              rounded-full
              bg-teal-500/20
              text-teal-400
              text-xs
              font-bold
              font-mono
            ">
              92% Confidence
            </span>

          </div>


          {/* Details */}
          <div className="divide-y divide-slate-200 dark:divide-slate-700">

            <InfoRow
              title="Explanation"
              value={
                <>
                  Location signal inconsistency detected — VPN origin mismatch.
                  Session activity patterns deviate from 90-day behavioural
                  baseline. Policy threshold exceeded across two verification
                  layers.
                </>
              }
            />


            <InfoRow
              title="Supporting Data"
              value={
                <>
                  Identity: 91 · Session: 74 · Device: 96 · Location: 61 —
                  Location and session below minimum threshold (80)
                </>
              }
            />


            <InfoRow
              title="Policy Reference"
              value={
                <>
                  Enterprise Remote Session Policy v3.2 — Session Integrity
                  Rule #3 · Location Verification Rule #7
                </>
              }
            />


            <InfoRow
              title="Decision"
              value={
                <>
                  <span className="text-teal-600">
                    Session flagged — billing held pending Tier 2 human review.
                  </span>
                  <br />
                  <span className="text-teal-700 bg-emerald-50 px-2 rounded">
                    SES-2026-08842
                  </span>
                </>
              }
            />

          </div>


          {/* Footer */}
          <div className="
            p-5
            bg-emerald-50
            dark:bg-emerald-950/40
            text-teal-700
            dark:text-teal-400
            text-xs
            font-semibold
            leading-5
            font-sans
          ">
            ZoikoTime does not produce black-box outcomes — every signal is
            explainable, every decision is traceable.
          </div>

        </div>

      </div>
    </section>
  );
}



function InfoRow({
  title,
  value,
}: {
  title: string;
  value: React.ReactNode;
}) {
  return (
    <div className="
      grid grid-cols-1 sm:grid-cols-[120px_1fr]
      gap-3
      p-5
    ">
      <div className="
        text-xs
        font-semibold
        uppercase
        tracking-wide
        text-slate-400
        font-sans
      ">
        {title}
      </div>

      <div className="
        text-xs
        leading-5
        text-slate-700
        dark:text-slate-300
        font-sans
      ">
        {value}
      </div>
    </div>
  );
}