export default function DataUseProtection() {
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
        15. Data Use, Model Training, and Customer Data Protection
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
        ZoikoTime does not claim ownership of Customer Data. Customer Data
        remains subject to the Agreement, Data Processing Addendum, Privacy
        Notice, and applicable law.
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
        Unless expressly stated in a signed written agreement, ZoikoTime will
        not use identifiable Customer Data to train foundation models or general
        models for the benefit of other customers. ZoikoTime may use
        aggregated, de-identified, or statistical information to maintain,
        secure, operate, improve, benchmark, or develop the platform where
        permitted by the Agreement and applicable law, provided such information
        does not identify Customer, Workers, or individuals.
      </p>

    </section>
  );
}