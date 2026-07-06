import React from "react";

const FEATURES = [
    "AI-Guided Routing",
    "Enterprise-Grade Engagement",
    "Fast Response Times",
    "Dedicated Teams",
];

export default function Hero() {
    return (
        <section className="bg-[#FDFDFD] px-6 py-12 md:px-54 text-center">
            <div className="mx-auto max-w-6xl">
                <h1 className="text-3xl font-bold leading-tight text-[#0F2420] md:text-[40px]">
                    Build the System That
                    <br />
                    <span className="text-[#00C6A9]">
                        Defines How Work Is Measured, Governed and Trusted
                    </span>
                </h1>

                <p className="mx-auto mt-6 text-[17px] text-[#5A6E87]">
                    Join ZoikoTime to design workforce assurance and performance <br />
                    intelligence systems used by global organisations to manage
                    work with clarity, accountability, and confidence.
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                    <button className="rounded-lg bg-[#009D8C] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-600 shadow-[0_4px_20px_0_rgba(0,157,140,0.4)] cursor-pointer">
                        Explore Open Roles
                    </button>
                    <button className="rounded-lg border border-[#009D8C] px-6 py-3 text-sm font-semibold text-[#009D8C] transition-colors hover:bg-emerald-50 cursor-pointer">
                        Learn About ZoikoTime
                    </button>
                </div>

                <div className="mx-auto mt-8 flex max-w-2xl border border-[#02020226] items-center rounded-[16px] bg-[#89898912] px-2 py-1 shadow-md shadow-emerald-900/5">
                    <input
                        type="text"
                        placeholder="Search roles — e.g. Platform Engineer, Compliance Analyst"
                        className="w-full bg-transparent px-4 py-2 text-sm text-slate-700 placeholder:text-[#41414159] outline-none sm:text-base"
                    />
                    <button className="flex shrink-0 items-center gap-1 rounded-xl bg-[#009D8C] px-10 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-700">
                        Search
                    </button>
                </div>

            </div>
        </section>
    );
}
