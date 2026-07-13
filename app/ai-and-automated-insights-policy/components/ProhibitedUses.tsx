export default function ProhibitedUses() {
  const items = [
    "Using AI outputs as the sole basis for adverse employment decisions without human review and due process",

    "Using AI outputs to infer protected characteristics or sensitive attributes without lawful basis and customer governance approval",

    "Manipulating, deceiving, intimidating, or unlawfully pressuring workers through AI-assisted outputs",

    "Training external AI models using ZoikoTime outputs or data without written authorization",

    "Creating unlawful profiling or discriminatory outcomes by combining ZoikoTime outputs with external data",
  ];

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
        8. Prohibited and Restricted Uses
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
        Customers must not use ZoikoTime AI or automated insights for any
        prohibited, unlawful, deceptive, discriminatory, or disproportionately
        intrusive purpose, including:
      </p>


      {/* List */}
      <div
        className="
          mt-6
          space-y-5
        "
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="
              flex
              items-start
              gap-3
              text-base
              leading-7
            "
          >

            {/* Bullet */}
            <span
              className="
                mt-[2px]
                text-teal-600
                text-xl
                font-bold
                leading-7
                dark:text-teal-400
              "
            >
              ›
            </span>


            {/* Text */}
            <p
              className="
                flex-1
                text-slate-700
                dark:text-slate-300
                font-normal
              "
            >
              {item}
            </p>

          </div>
        ))}
      </div>

    </section>
  );
}