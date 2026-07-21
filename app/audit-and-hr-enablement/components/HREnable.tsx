"use client";
import Link from "next/link";

const workflows = [
  {
    icon: "📊",
    title: "Performance Review",
    description:
      "Performance conversations are grounded in verified time, delivery, and outcome data — not manager recollection. Evidence packs are generated automatically for every review cycle.",
  },
  {
    icon: "⚖️",
    title: "Disciplinary Action",
    description:
      "Every disciplinary process is initiated through a governed case workflow, supported by linked evidence, and recorded with full decision traceability — protecting both employee and employer.",
  },
  {
    icon: "📅",
    title: "Attendance Issues",
    description:
      "Attendance anomalies are detected automatically, validated against session and policy data, and escalated through the appropriate HR workflow — removing subjectivity entirely.",
  },
];

const removedFromOperations = [
  "Decisions based on subjective perception rather than verified data",
  "Inconsistent treatment across managers, teams, or regions",
  "Undocumented processes that cannot survive legal or regulatory scrutiny",
];

export default function HREnable() {
  return (
    <section
      className="
      w-full
      bg-white
      px-4 py-16
      text-slate-900
      sm:px-6
      lg:px-8 lg:py-24
      dark:bg-slate-950
      dark:text-slate-100
      "
    >
      <div
        className="
        mx-auto
        grid
        max-w-[1040px]
        grid-cols-1
        gap-10
        lg:grid-cols-2
        lg:gap-14
        "
      >

        {/* Left Content */}
        <div className="flex flex-col">

          <p
            className="
            text-xs
            font-bold
            uppercase
            tracking-widest
            text-teal-600
            dark:text-teal-400
            "
          >
            HR Enablement
          </p>


          <h2
            className="
            mt-5
            max-w-lg
            text-3xl
            font-bold
            leading-tight
            text-slate-900
            sm:text-4xl
            dark:text-white
            "
          >
            Standardised, Evidence-Based HR Decisions
          </h2>


          <p
            className="
            mt-6
            max-w-xl
            text-base
            leading-7
            text-slate-600
            dark:text-slate-400
            "
          >
            HR teams no longer rely on informal processes or inconsistent
            manager judgements. ZoikoTime provides verified data, structured
            frameworks, and governed workflows for every people decision.
          </p>



          {/* Removes from HR Operations */}
          <div
            className="
            mt-10
            rounded-2xl
            border
            border-teal-500/20
            bg-teal-50
            p-6
            sm:p-7
            dark:bg-teal-950/40
            "
          >

            <p
              className="
              text-xs
              font-bold
              uppercase
              tracking-wider
              text-slate-500
              "
            >
              Removes from HR Operations
            </p>


            <div className="mt-6 space-y-5">

              {removedFromOperations.map((item) => (

                <div
                  key={item}
                  className="
                  flex
                  items-start
                  gap-3
                  "
                >

                  <div
                    className="
                    flex
                    h-7
                    w-7
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-teal-500/10
                    text-sm
                    "
                  >
                    🚫
                  </div>


                  <p
                    className="
                    text-sm
                    font-medium
                    leading-6
                    text-slate-700
                    dark:text-slate-300
                    "
                  >
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>



          {/* Button */}
         <Link
  href="/audit-and-hr-enablement#hr-workflows"
  className="
    mt-8
    inline-flex
    w-fit
    items-center
    justify-center
    rounded-lg
    bg-teal-500
    px-8
    py-3
    text-base
    font-semibold
    text-slate-950
    shadow-lg
    shadow-teal-500/20
    transition
    hover:bg-teal-400
  "
>
  Explore HR Workflows
</Link>

        </div>




        {/* Right Workflow Cards */}
        <div
          id="hr-workflows"
          className="
          flex
          flex-col
          gap-6
          "
        >

          {workflows.map((workflow) => (

            <article
              key={workflow.title}
              className="
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-7
              shadow-xl
              transition-all
              duration-300
              hover:border-teal-500/40
              sm:p-8

              dark:border-slate-800
              dark:bg-slate-900
              "
            >

              <div
                className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-lg
                bg-teal-100
                text-xl
                dark:bg-teal-950
                "
              >
                {workflow.icon}
              </div>


              <h3
                className="
                mt-6
                text-lg
                font-bold
                leading-7
                text-slate-900
                dark:text-white
                "
              >
                {workflow.title}
              </h3>


              <p
                className="
                mt-5
                text-sm
                leading-6
                text-slate-600
                dark:text-slate-400
                "
              >
                {workflow.description}
              </p>


            </article>

          ))}

        </div>


      </div>
    </section>
  );
}