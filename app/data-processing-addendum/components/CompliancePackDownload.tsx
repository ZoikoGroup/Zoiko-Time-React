import React from "react";

const documents = [
  "📋 Data Processing Agreement",
  "🌍 EU SCCs + UK IDTA",
  "🔗 Sub-Processor List",
  "🔐 Security Summary (TOMs)",
  "📊 Processing Register",
  "⚖️ Rights Request Procedure",
];

export default function CompliancePackDownload() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="relative bg-slate-900 rounded-2xl overflow-hidden p-10">

          {/* Glow */}
          <div className="absolute right-0 top-0 w-96 h-72 bg-teal-500/10 blur-3xl rounded-full" />


          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Left Content */}
            <div>

              <h2 className="text-2xl font-extrabold text-white leading-10">
                Download the Complete Compliance Pack
              </h2>

              <p className="mt-4 text-base leading-6 text-white/60">
                Everything your legal, procurement, and compliance teams need
                to evaluate and contract ZoikoTime&apos;s data processing — in a
                single structured download.
              </p>


              <div className="flex flex-wrap gap-3 mt-6">
                {documents.map((item, index) => (
                  <span
                    key={index}
                    className="bg-white/10 border border-white/10 rounded-full px-4 py-1.5 text-xs font-bold text-white/80"
                  >
                    {item}
                  </span>
                ))}
              </div>

            </div>



            {/* Buttons */}
            <div className="flex flex-col justify-center items-center lg:items-end gap-4">

              <button
                className="w-64 h-12 bg-teal-600 hover:bg-teal-700 rounded-md 
                shadow-lg text-white text-base font-bold"
              >
                Download DPA + SCC Pack
              </button>


              <button
                className="w-64 h-12 rounded-md border border-white 
                text-white/80 text-xs font-semibold hover:bg-white/10"
              >
                Preview Contents
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}