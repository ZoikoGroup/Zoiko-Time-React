const workerRights = [
  {
    title: "Right of access:",
    description:
      "To request information about the data held about you, how it is used, and who can see it",
  },
  {
    title: "Right to rectification:",
    description:
      "To request correction of inaccurate or incomplete records",
  },
  {
    title: "Right to erasure:",
    description:
      "To request deletion of your data where it is no longer lawfully required",
  },
  {
    title: "Right to restriction:",
    description:
      "To ask that processing be limited in certain circumstances",
  },
  {
    title: "Right to portability:",
    description:
      "To receive your data in a structured, machine-readable format in some contexts",
  },
  {
    title: "Right to object:",
    description:
      "To object to processing based on legitimate interests",
  },
  {
    title: "Rights related to automated decision-making:",
    description:
      "To seek human review, challenge outcomes, or obtain an explanation of automated assessments that significantly affect you",
  },
];


export default function WorkerRights() {
  return (
    <section className="w-full px-5 bg-white dark:bg-slate-950">
      <div className="max-w-[696px] mx-auto pt-12">


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
          11. Worker Rights and Choices
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


        {/* Intro */}
        <p
          className="
            mt-6
            text-base
            leading-7
            text-slate-700
            dark:text-slate-300
          "
        >
          Depending on your location and applicable law, you may have rights
          regarding your personal information processed through ZoikoTime.
          These may include:
        </p>


        {/* Rights List */}
        <div className="mt-8 space-y-6">

          {workerRights.map((right, index) => (
            <div
              key={index}
              className="
                flex
                items-start
                gap-3
              "
            >

              <span
                className="
                  text-teal-600
                  text-base
                  font-bold
                  leading-7
                "
              >
                ›
              </span>


              <div
                className="
                  flex
                  flex-col
                  sm:flex-row
                  gap-1
                  sm:gap-5
                "
              >

                <h3
                  className="
                    sm:min-w-[170px]
                    text-base
                    font-bold
                    leading-7
                    text-slate-700
                    dark:text-slate-300
                  "
                >
                  {right.title}
                </h3>


                <p
                  className="
                    text-base
                    font-normal
                    leading-7
                    text-slate-700
                    dark:text-slate-300
                  "
                >
                  {right.description}
                </p>

              </div>

            </div>
          ))}

        </div>


        {/* Closing Paragraph */}
        <p
          className="
            mt-8
            text-base
            leading-7
            font-normal
            text-slate-700
            dark:text-slate-300
          "
        >
          Workers should first contact their employer or engaging organization
          for workforce data rights requests, because the customer organization
          generally controls workforce data inside ZoikoTime. ZoikoTime will
          assist customer organizations in responding to requests as described
          in the Data Processing Addendum.
        </p>


      </div>
    </section>
  );
}