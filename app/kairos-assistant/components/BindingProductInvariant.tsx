import React from 'react';

export default function BindingProductInvariant() {
  return (
    <section className="w-full bg-slate-900 text-slate-100 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-[860px] mx-auto flex flex-col items-center text-center gap-5">
        
        {/* Badge / Subtitle */}
        <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">
          Binding product invariant
        </span>

        {/* Main Banner Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight max-w-[780px]">
          No screenshots, keystroke content, URL history, application-name monitoring, or clipboard collection — under any tier or configuration.
        </h2>

        {/* Detailed Explanation */}
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-[640px]">
          Kairos works only with approved, governed information that ZoikoTime is already authorized to make available for the selected purpose and role. Asking a question does not activate hidden device, content, behavior, or background collection.
        </p>

        {/* Legal / Policy Disclaimer */}
        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-[720px]">
          This is a binding product invariant — not an optional mode, plan feature, default setting, or marketing preference. Changing it requires Product, Privacy, Security, Legal, Content, Accessibility, and cross-asset approval.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 pt-3 w-full sm:w-auto">
          <button
            type="button"
            className="w-full sm:w-auto px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white font-bold text-base rounded-lg transition-colors cursor-pointer text-center"
          >
            Read Anti-Surveillance Principles
          </button>
          
          <button
            type="button"
            className="w-full sm:w-auto px-6 py-3.5 bg-transparent hover:bg-slate-800 text-white font-bold text-base rounded-lg border border-slate-600 transition-colors cursor-pointer inline-flex items-center justify-center gap-2 group"
          >
            <span>Visit Trust Center</span>
            <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
              →
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}