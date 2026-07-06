import React from "react";

const FEATURES = [
    "AI-Guided Routing",
    "Enterprise-Grade Engagement",
    "Fast Response Times",
    "Dedicated Teams",
];

export default function Hero() {
    return (
        <section className="bg-[#F1FAFB] px-6 py-12 md:px-54 text-center">
            <div className="mx-auto max-w-6xl">
                <h1 className="text-4xl font-extrabold leading-tight text-[#0F2420] md:text-[50px]">
                    Connect With ZoikoTime —
                    <br />
                    <span className="text-[#00C6A9]">
                        Routed, Prioritised, and Handled
                        <br />
                        With Precision
                    </span>
                </h1>

                <p className="mx-auto mt-6 max-w-150 text-base text-slate-500 sm:text-lg">
                    Every inquiry is intelligently routed to the right team — ensuring
                    faster responses, higher-quality engagement, and better outcomes.
                </p>

                <div className="mt-6 flex justify-center">
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#00C6A91F] border border-[#00C6A933] px-4 py-1.5 text-xs font-semibold text-[#00C6A9] sm:text-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        AI-Guided Routing · Intent Detection · Real-Time Assignment
                    </span>
                </div>

                <div className="mx-auto mt-8 flex max-w-2xl items-center rounded-[16px] bg-white p-2 shadow-md shadow-emerald-900/5">
                    <input
                        type="text"
                        placeholder="Tell us what you need…"
                        className="w-full bg-transparent px-4 py-2 text-sm text-slate-700 placeholder:text-[#191919A6] outline-none sm:text-base"
                    />
                    <button className="flex shrink-0 items-center gap-1 rounded-full bg-[#009D8C] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700">
                        Route Me
                        <span aria-hidden>→</span>
                    </button>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                    <button className="rounded-lg bg-[#009D8C] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700">
                        Start Conversation
                    </button>
                    <button className="rounded-lg border border-[#009D8C] px-6 py-3 text-sm font-semibold text-[#009D8C] transition-colors hover:bg-emerald-50">
                        Choose a Path Manually
                    </button>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#009D8C] sm:text-sm">
                    {FEATURES.map((feature) => (
                        <span key={feature} className="inline-flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            {feature}
                        </span>
                    ))}
                </div>

            </div>
        </section>
    );
}
