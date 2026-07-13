export default function AIInsightsHero() {
  return (
    <section
      className="
        w-full max-w-[696px] 
        mx-auto
        h-auto
        border-b-2 border-slate-200
        pb-8
        pt-10
        text-center
        dark:border-slate-700
      "
    >
      {/* Title */}
      <h1
        className="
          text-4xl
          leading-10
          font-extrabold
          text-slate-900
          dark:text-white
          max-w-[586px]
          mx-auto
        "
      >
        AI and Automated Insights Policy
      </h1>

      {/* Description */}
      <p
        className="
          mt-5
          text-base
          leading-7
          font-normal
          text-slate-500
          dark:text-slate-400
        "
      >
        This Policy explains how ZoikoTime uses artificial intelligence,
        machine learning, rules-based automation, statistical analysis,
        anomaly detection, and automated workforce intelligence features —
        and the governance obligations that apply.
      </p>

      {/* Effective Date Badge */}
      <div
        className="
          mt-8
          inline-flex
          items-center
          justify-center
          h-8
          px-4
          rounded-full
          bg-emerald-50
          border
          border-teal-600/20
          dark:bg-emerald-950/40
          dark:border-teal-500/30
        "
      >
        <span
          className="
            text-xs
            font-bold
            leading-5
            text-teal-700
            dark:text-teal-400
          "
        >
          Effective May 1, 2026
        </span>
      </div>
    </section>
  );
}