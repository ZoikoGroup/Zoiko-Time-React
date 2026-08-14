import React from "react";

export default function GradientCallout() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-16 font-sans">
      <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-teal-800 rounded-3xl p-8 md:p-10 flex flex-col lg:flex-row justify-between items-stretch gap-6 shadow-md overflow-hidden relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{ backgroundImage: "url('/blog-insight-pln-implementation/image%20(9).png')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-teal-900/80" />

        {/* Left Side */}
        <div className="space-y-3 z-10 flex flex-col justify-center max-w-2xl">
          <h2 className="text-2xl font-bold text-white leading-snug">
            A partnership model with named owners and explicit acceptance.
          </h2>
          <p className="text-xs md:text-sm text-white/90 leading-relaxed">
            Scope, responsibilities, and validation you can read before you commit.
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(20,184,166,0.06),transparent_60%)]" />
      </div>
    </div>
  );
}
