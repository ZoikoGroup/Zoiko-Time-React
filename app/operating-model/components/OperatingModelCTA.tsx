"use client";

import Link from "next/link";

export default function OperatingModelCTA() {
  return (
    <section className="py-20 px-6 lg:px-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Visual accents */}
      <div className="absolute left-0 bottom-0 w-[40%] h-full opacity-10 pointer-events-none">
        <div className="absolute left-[-10%] bottom-[-20%] w-[500px] h-[500px] rounded-full bg-radial from-teal-600 to-transparent blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-semibold text-white leading-tight">
          Give the right people the right access — accountably
        </h2>
        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          See how ZoikoTime manages distributed work with governed stages, human review and source transparency.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-4">
          <Link 
            href="/request-enterprise-demo"
            className="px-6 py-3 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 text-white font-bold rounded-lg shadow-lg transition-all text-sm"
          >
            Request Enterprise Demo
          </Link>
          <Link
            href="/contact-sales"
            className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-slate-700 text-white font-bold rounded-lg transition-colors text-sm"
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </section>
  );
}
