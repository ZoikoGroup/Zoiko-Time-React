"use client";

const nodes = [
  {
    title: "Data Input",
    image: "/SystemLogicPipeline/input.png",
    description: (
      <>
        Identity · Device · Location ·
        <br />
        Activity
      </>
    ),
  },
  {
    title: "Validation Rules",
    image: "/SystemLogicPipeline/validation.png",
    description: (
      <>
        Policy thresholds · Baseline
        <br />
        comparison
      </>
    ),
  },
  {
    title: "Policy Layer",
    image: "/SystemLogicPipeline/layer.png",
    description: (
      <>
        Jurisdiction rules · Role
        <br />
        configuration
      </>
    ),
  },
  {
    title: "AI Reasoning",
    image: "/SystemLogicPipeline/reasoning.png",
    description: (
      <>
        Confidence scoring · Pattern
        <br />
        analysis
      </>
    ),
  },
  {
    title: "Human Review",
    image: "/SystemLogicPipeline/review.png",
    description: (
      <>
        Tier 2/3 decisions · Override
        <br />
        capability
      </>
    ),
  },
  {
    title: "Output Generation",
    image: "/SystemLogicPipeline/output.png",
    description: (
      <>
        Evidence records · Payroll
        <br />
        signal
      </>
    ),
  },
];


export default function SystemLogicPipeline() {
  return (
    <section className="w-full bg-white dark:bg-slate-950 py-16">

      <div className="max-w-[1200px] mx-auto px-6">


        {/* Heading */}
        <div className="text-center">

          <p className="text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider">
            System Logic
          </p>

          <h2 className="mt-5 text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            How the System Thinks
          </h2>

          <p className="mt-5 text-base md:text-lg leading-7 text-slate-500 dark:text-slate-400 max-w-3xl mx-auto">
            Every node in ZoikoTime's processing pipeline is visible and
            documented — hover to see what each layer does, what inputs it
            requires, and what output it produces.
          </p>

        </div>



        {/* Pipeline Card */}
        <div className="mt-12 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg overflow-hidden">


          {/* Header */}
          <div className="h-16 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex items-center justify-center relative">

            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              ZoikoTime Processing Pipeline — Interactive Diagram
            </h3>


            <div className="absolute right-6 flex items-center gap-2">

              <span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span>

              <span className="text-xs font-bold text-teal-600">
                Live System
              </span>

            </div>

          </div>



          {/* Nodes */}
          <div className="p-8">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 items-start">


              {nodes.map((node, index) => (

                <div
                  key={node.title}
                  className="relative flex flex-col items-center text-center"
                >


                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950 border-2 border-teal-600/25 flex items-center justify-center">

                    <img
                      src={node.image}
                      alt={node.title}
                      className="w-8 h-8 object-contain"
                    />

                  </div>



                  {/* Title */}
                  <h4 className="mt-5 text-xs font-bold text-slate-900 dark:text-white">
                    {node.title}
                  </h4>



                  {/* Description */}
                  <p className="mt-3 text-xs leading-5 text-slate-500 dark:text-slate-400">
                    {node.description}
                  </p>



                  {/* Arrow */}
                  {index !== nodes.length - 1 && (

                    <span className="hidden lg:block absolute top-8 -right-6 text-teal-600 text-base font-bold">
                      →
                    </span>

                  )}


                </div>

              ))}


            </div>

          </div>



          {/* Footer Note */}
          <div className="bg-emerald-50 dark:bg-emerald-950 border-t border-teal-600/10 px-6 py-5 text-center">

            <p className="text-xs font-semibold text-teal-700 dark:text-teal-400">
              Click any node to see what that layer processes, what decisions it
              makes, and what evidence it generates. Every step in this pipeline
              is auditable.
            </p>

          </div>


        </div>


      </div>

    </section>
  );
}