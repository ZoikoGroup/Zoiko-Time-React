import Image from "next/image";
import React from "react";

const lifecycleData = [
  {
    icon: "/DataRetentionHero/capture.png",
    title: "Capture",
    status: "Active",
  },
  {
    icon: "/DataRetentionHero/retain.png",
    title: "Retain",
    status: "Policy-governed",
  },
  {
    icon: "/DataRetentionHero/restrict.png",
    title: "Restrict",
    status: "Controlled access",
  },
  {
    icon: "/DataRetentionHero/preserve.png",
    title: "Preserve",
    status: "Legal hold",
  },
  {
    icon: "/DataRetentionHero/review.png",
    title: "Review",
    status: "Authorized",
  },
  {
    icon: "/DataRetentionHero/export.png",
    title: "Export",
    status: "Logged",
  },
  {
    icon: "/DataRetentionHero/delete.png",
    title: "Expire / Delete",
    status: "Policy-governed",
  },
];

export default function DataRetentionHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-20 px-6 lg:px-20">

      {/* Background Glow */}
      <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-teal-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1280px]">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT CONTENT */}

          <div>

            <span className="inline-flex rounded-full border border-teal-500/30 bg-teal-500/10 px-6 py-2 text-xs font-bold uppercase tracking-[2px] text-teal-300">
              Workforce Record Governance
            </span>

            <h1 className="mt-8 text-5xl font-semibold leading-tight text-white lg:text-[64px]">
              Data Retention &
              <br />
              Legal Hold
            </h1>

            <p className="mt-8 max-w-[520px] text-lg leading-9 text-slate-300">
              ZoikoTime helps organizations govern workforce records across
              their lifecycle with configurable retention policies,
              legal hold preservation, controlled access,
              audit trails, and lifecycle safeguards.
            </p>

            <p className="mt-8 max-w-[520px] text-base leading-8 text-slate-400">
              Govern workforce records from retention and access
              control to legal hold preservation and defensible
              expiry workflows.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <button className="rounded-lg bg-teal-600 px-8 py-4 font-semibold text-white shadow-lg shadow-teal-600/30 transition-all duration-300 hover:bg-teal-700">
                Contact Sales
              </button>

              <button className="rounded-lg border border-slate-600 bg-slate-900 px-8 py-4 font-medium text-slate-200 transition-all duration-300 hover:border-teal-500 hover:bg-slate-800 hover:text-white">
                Explore Audit-Grade Evidence
              </button>

            </div>

            <p className="mt-8 max-w-[620px] text-sm leading-7 text-slate-500">
              Capabilities may vary by plan, configuration,
              deployment model, contract, jurisdiction,
              and customer policy.
            </p>

          </div>

          {/* RIGHT CARD */}

                    <div className="rounded-3xl border border-slate-700 bg-slate-900/80 p-6 backdrop-blur-xl shadow-2xl">

            <p className="mb-6 text-[11px] font-bold uppercase tracking-[2px] text-teal-400">
              Record Lifecycle
            </p>

            <div className="space-y-3">

              {lifecycleData.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-xl border border-slate-700 bg-slate-800 px-5 py-4 transition-all duration-300 hover:border-teal-500/40 hover:bg-slate-700"
                >
                  <div className="flex items-center gap-4">

                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={22}
                      height={22}
                      className="object-contain"
                    />

                    <span className="text-sm font-semibold text-slate-100">
                      {item.title}
                    </span>

                  </div>

                  <span
                    className={`rounded-full border border-teal-500/40 bg-teal-500/15 px-4 py-1 text-[10px] font-semibold text-teal-300 ${
                      item.status === "Policy-governed"
                        ? "min-w-[110px] text-center"
                        : item.status === "Controlled access"
                        ? "min-w-[125px] text-center"
                        : item.status === "Legal hold"
                        ? "min-w-[80px] text-center"
                        : item.status === "Authorized"
                        ? "min-w-[85px] text-center"
                        : item.status === "Logged"
                        ? "min-w-[70px] text-center"
                        : "min-w-[60px] text-center"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>

        {/* Bottom Feature Bar */}

                <div className="mt-14">
          <div className="rounded-2xl border border-slate-700 bg-slate-900/80 px-8 py-6 backdrop-blur-xl">

            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-5">

              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-teal-500" />
                <span className="text-sm font-semibold text-slate-300">
                  Configurable retention
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-teal-500" />
                <span className="text-sm font-semibold text-slate-300">
                  Legal hold workflows
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-teal-500" />
                <span className="text-sm font-semibold text-slate-300">
                  Role-based access
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-teal-500" />
                <span className="text-sm font-semibold text-slate-300">
                  Audit trails
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-teal-500" />
                <span className="text-sm font-semibold text-slate-300">
                  Export controls
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}