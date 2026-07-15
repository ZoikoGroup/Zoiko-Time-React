import React from "react";

export default function GovernedAICTA() {
  return (
    <section className="w-full bg-gradient-to-br from-slate-800 to-blue-950 py-20 md:py-24">
      <div className="mx-auto max-w-[1180px] px-5 md:px-6 text-center">

        {/* Label */}
        <p className="text-base font-semibold uppercase tracking-[0.16em] text-teal-600">
          Governed AI
        </p>


        {/* Heading */}
        <h2 className="mx-auto mt-8 max-w-[620px] text-3xl md:text-4xl font-bold leading-[1.45] text-white">
          Use AI for workforce assurance —
          <br className="hidden md:block" />
          responsibly
        </h2>


        {/* Description */}
        <p className="mx-auto mt-8 max-w-[580px] text-base leading-6 text-white/80">
          Talk with the ZoikoTime team about explainable signals, human review
          boundaries, permissions, privacy, and enterprise AI governance.
        </p>


        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

                      <button
            className="h-11 rounded-[10px] bg-teal-600 px-7 text-base font-semibold text-white shadow-[0px_6px_16px_rgba(16,162,141,0.28)] transition hover:bg-teal-700"
          >
            Get a Demo
          </button>


          <button
            className="h-11 rounded-[10px] border border-white/30 bg-white/10 px-7 text-base font-semibold text-white transition hover:bg-white/20"
          >
            Contact Sales
          </button>

        </div>

      </div>
    </section>
  );
}