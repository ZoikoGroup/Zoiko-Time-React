"use client";

const metrics = [
  {
    label: "Hours logged",
    value: "95%",
    width: "90%",
    color: "bg-teal-600",
    textColor: "text-teal-600",
  },
  {
    label: "Task completion",
    value: "55%",
    width: "55%",
    color: "bg-amber-500",
    textColor: "text-amber-600",
  },
  {
    label: "Output quality",
    value: "62%",
    width: "60%",
    color: "bg-amber-500",
    textColor: "text-amber-600",
  },
  {
    label: "vs Team baseline",
    value: "-40%",
    width: "40%",
    color: "bg-red-500",
    textColor: "text-red-500",
  },
];


const explanationData = [
  {
    title: "Pattern",
    text: (
      <>
        Task completion 40% below logged hours — 3rd
        <br />
        consecutive week. Output quality declining relative to
        <br />
        team baseline.
      </>
    ),
  },
  {
    title: "Context",
    text: (
      <>
        Pattern is distinct from workload level — hours are at full
        <br />
        capacity but output rate is declining. Could indicate
        <br />
        capacity issue, task complexity change, or
        <br />
        engagement factor.
      </>
    ),
  },
];


export default function LiveExplainabilityExamples() {
  return (
    <section className="w-full bg-slate-100 dark:bg-slate-950 py-16">

      <div className="max-w-[1040px] mx-auto px-6">


        {/* Header */}
        <div className="text-center">

          <p className="text-xs font-bold uppercase tracking-wider text-teal-600">
            Real System Explanations
          </p>

          <h2 className="mt-5 text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Live Explainability Examples
          </h2>

          <p className="mt-5 text-lg leading-7 text-slate-500 dark:text-slate-400">
            Three real scenarios — each showing how ZoikoTime explains its
            <br className="hidden md:block" />
            reasoning in human-readable language, with full supporting data.
          </p>

        </div>



        <div className="mt-16 grid lg:grid-cols-2 gap-14">


          {/* Left */}
          <div>


            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Why a Workload Imbalance Was Flagged
            </h3>


            <p className="mt-5 text-base leading-6 text-slate-500 dark:text-slate-400">
              Consultant K. Adams is showing a 40% gap between logged hours
              and verified task completion — below team baseline for the third
              consecutive week. The performance intelligence engine has flagged
              this pattern for manager review.
            </p>



            <div className="mt-8 space-y-4">

              {metrics.map((item)=>(
                <div
                  key={item.label}
                  className="bg-white dark:bg-slate-900 rounded-md px-4 py-3 flex items-center gap-5"
                >

                  <span className="w-24 text-xs font-semibold text-slate-500">
                    {item.label}
                  </span>


                  <div className="flex-1 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color} rounded-full`}
                      style={{width:item.width}}
                    />
                  </div>


                  <span className={`text-xs font-bold ${item.textColor}`}>
                    {item.value}
                  </span>


                </div>
              ))}

            </div>


          </div>




          {/* Explanation Card */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg overflow-hidden">


            <div className="bg-slate-100 dark:bg-slate-800 px-5 py-4 border-b border-slate-200 dark:border-slate-700">

              <h3 className="text-xs font-bold text-slate-900 dark:text-white">
                System Explanation — Performance Intelligence
              </h3>

            </div>



            {explanationData.map((item)=>(
              <div
                key={item.title}
                className="px-5 py-5 border-b border-slate-200 dark:border-slate-800 flex gap-8"
              >

                <span className="w-20 text-xs uppercase font-bold tracking-wide text-slate-400">
                  {item.title}
                </span>


                <p className="text-xs leading-5 text-slate-700 dark:text-slate-300">
                  {item.text}
                </p>

              </div>
            ))}




            <div className="px-5 py-5 border-b border-slate-200 dark:border-slate-800 flex gap-8">

              <span className="w-20 text-xs uppercase font-bold tracking-wide text-slate-400">
                Confidence
              </span>


              <p className="text-xs leading-5 font-semibold text-teal-600">
                85% — Pattern consistent across 15 sessions. Manager
                <br />
                review recommended, not automated action.
              </p>

            </div>




            <div className="px-5 py-5 flex gap-8">

              <span className="w-36 text-xs uppercase font-bold tracking-wide text-slate-400">
                Recommended Action
              </span>


              <p className="text-xs leading-5 text-slate-700 dark:text-slate-300">
                Manager review — performance intelligence is
                <br />
                provided as context for a human conversation,
                <br />
                not as a performance assessment in itself.
              </p>


            </div>



          </div>


        </div>


      </div>

    </section>
  );
}