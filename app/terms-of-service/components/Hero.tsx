import React from "react";

export default function Hero() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="border-b border-slate-200 dark:border-gray-700 pb-10 sm:pb-14 md:pb-16 mb-10 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white text-center leading-tight mb-4">
          Terms of Service
        </h1>

        <p className="text-sm sm:text-base lg:text-lg text-slate-500 dark:text-gray-400 text-center leading-7 max-w-2xl mx-auto mb-6">
          These Terms govern access to and use of ZoikoTime, a workforce
          assurance, productivity, time, activity, governance, and performance
          intelligence platform provided by Zoiko Tech Inc.
        </p>

        <div className="flex justify-center">
          <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-teal-600/20 dark:border-teal-500/30 rounded-full px-4 sm:px-6 py-2">
            <span className="text-xs sm:text-sm font-bold text-teal-700 dark:text-teal-300">
              Effective May 1, 2026
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}