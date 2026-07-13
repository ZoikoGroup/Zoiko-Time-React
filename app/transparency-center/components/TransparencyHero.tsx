"use client";

export default function TransparencyHero() {
  const tags = [
    "Explainable System Behaviour",
    "Traceable Outcomes",
    "Human-in-Command Decisions",
    "Policy-Driven Operation",
    "Audit Visibility",
  ];

  return (
    <section
      className="
        w-full overflow-hidden
        bg-gradient-to-br from-emerald-50 via-slate-50 to-white
        dark:from-slate-950 dark:via-slate-900 dark:to-slate-950
      "
    >
      <div
        className="
          max-w-[1200px] mx-auto
          px-5 sm:px-6 lg:px-8
          py-12 md:py-16
          text-center
        "
      >

        {/* Label */}
        <div
          className="
            text-teal-600 dark:text-teal-400
            text-xs font-semibold
            uppercase tracking-wider
            font-sans
          "
        >
          Transparency Center
        </div>


        {/* Heading */}
        <h1
          className="
            mt-6
            text-3xl sm:text-4xl lg:text-5xl
            leading-tight
            font-semibold
            font-sans
            text-slate-900 dark:text-white
          "
        >
          A System You Can{" "}
          <span className="text-teal-600 dark:text-teal-400">
            See,
            <br />
            Understand, and Trust
          </span>
        </h1>


        {/* Description */}
        <p
          className="
            mt-8
            max-w-[780px]
            mx-auto
            text-sm sm:text-lg
            leading-7
            font-normal
            font-sans
            text-slate-500 dark:text-slate-300
          "
        >
          ZoikoTime makes workforce data, system behaviour, and
          decision logic fully visible, explainable, and accountable
          across every layer of operation.
        </p>


        {/* Info Box */}
        <div
          className="
            mt-10
            max-w-[780px]
            mx-auto
            h-auto min-h-[56px]
            flex items-center justify-center
            px-5
            bg-emerald-50
            dark:bg-emerald-950/40
            rounded-xl
            border border-teal-600/20
          "
        >
          <p
            className="
              text-teal-700 dark:text-teal-400
              text-sm
              font-semibold
              font-sans
              leading-6
            "
          >
            If a decision or signal exists, it can be explained, traced,
            and verified.
          </p>
        </div>


        {/* Buttons */}
        <div
          className="
            mt-10
            flex flex-col sm:flex-row
            justify-center
            items-center
            gap-4
          "
        >
          <button
            className="
              w-full sm:w-64
              h-12
              rounded-md
              bg-teal-600
              text-white
              text-sm sm:text-base
              font-medium
              font-sans
              shadow-[0px_4px_14px_0px_rgba(0,157,140,0.28)]
              hover:bg-teal-700
              transition
            "
          >
            Explore Explainability Engine
          </button>


          <button
            className="
              w-full sm:w-48
              h-12
              rounded-md
              bg-white
              dark:bg-slate-900
              border border-slate-200
              dark:border-slate-700
              text-slate-700
              dark:text-slate-200
              text-sm sm:text-base
              font-medium
              font-sans
              transition
            "
          >
            View System Logic
          </button>
        </div>


        {/* Feature Pills */}
        <div
          className="
            mt-12
            flex flex-wrap
            justify-center
            gap-3
            max-w-[750px]
            mx-auto
          "
        >
          {tags.map((tag) => (
            <div
              key={tag}
              className="
                flex items-center gap-2
                px-4 py-2
                bg-white
                dark:bg-slate-900
                rounded-full
                border border-slate-200
                dark:border-slate-700
                shadow-sm
              "
            >
              <span className="w-1.5 h-1.5 bg-teal-600 rounded-full" />

              <span
                className="
                  text-xs
                  font-semibold
                  font-sans
                  text-slate-700
                  dark:text-slate-200
                "
              >
                {tag}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}