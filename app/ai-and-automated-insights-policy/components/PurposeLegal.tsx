export default function PurposeLegal() {
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
        1. Purpose and Legal Status
      </h2>

      {/* Teal Line */}
      <div
        className="
          w-12
          h-[3px]
          mt-3
          bg-teal-600
          rounded-full
          dark:bg-teal-400
        "
      />

      {/* First Paragraph */}
      <p
        className="
          mt-6
          text-base
          leading-7
          font-normal
          text-slate-700
          dark:text-slate-300
        "
      >
        This AI and Automated Insights Policy explains how ZoikoTime uses
        artificial intelligence, machine learning, rules-based automation,
        statistical analysis, anomaly detection, and automated workforce
        intelligence features within the ZoikoTime platform.
      </p>

      {/* Second Paragraph */}
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
        The Policy is designed to support responsible deployment, worker
        transparency, human oversight, legal defensibility, and enterprise
        procurement review. It does not replace the Terms of Service, Data
        Processing Addendum, Privacy Notice, Worker Transparency Notice, or any
        signed Order Form.
      </p>
    </section>
  );
}