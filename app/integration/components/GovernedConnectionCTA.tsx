"use client";

import Image from "next/image";
import Link from "next/link";

export default function GovernedConnectionCTA() {
  return (
    <section className="bg-slate-50 px-4 py-16 dark:bg-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900 md:p-8 xl:p-12">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
                Governed connection
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl xl:text-5xl">
                Connect governed
                <br />
                communication context to
                <br />
                accountable workforce
                <br />
                operations
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300">
                See how Zoiko Sema and ZoikoTime can connect approved
                workspaces, roles, decisions, actions, and reviewed context
                through explicit mapping, privacy controls, human authority,
                and audit evidence.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/start-free"
                  className="rounded-lg bg-emerald-500 px-6 py-3 text-base font-bold text-white transition hover:bg-emerald-600"
                >
                  Start Free
                </Link>

                <Link
                  href="/request-enterprise-demo"
                  className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-bold text-slate-900 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
                >
                  Request Enterprise Demo
                </Link>
              </div>

              <div className="mt-6">
                <Link
                  href="https://getzoikotime.com/"
                  className="inline-flex items-center font-bold text-emerald-600 transition hover:text-emerald-700"
                >
                  Explore ZoikoTime
                  <span className="ml-2">→</span>
                </Link>
              </div>
                            <div className="mt-8 flex flex-wrap items-center gap-6">

                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                  Independent products.
                </span>

                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                  Optional connection.
                </span>

              </div>

              <div className="mt-8 text-sm leading-7 text-slate-500 dark:text-slate-400">
                <p>
                  Availability, licensing, setup, context scope,
                  direction and support vary.
                </p>

                <div className="mt-2 flex flex-wrap items-center gap-2">

                  <span>Existing customers:</span>

                  <Link
                    href="/documentation"
                    className="font-semibold text-emerald-600 hover:underline"
                  >
                    Documentation
                  </Link>

                  <span>,</span>

                  <Link
                    href="/service-status"
                    className="font-semibold text-emerald-600 hover:underline"
                  >
                    Service Status
                  </Link>

                  <span>,</span>

                  <Link
                    href="/contact-support"
                    className="font-semibold text-emerald-600 hover:underline"
                  >
                    Contact Support
                  </Link>

                  <span>.</span>

                </div>

              </div>

            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">

              <Image
                src="/integration/governed-connection.png"
                alt="Governed connection"
                width={461}
                height={419}
                priority
                className="w-full max-w-[520px] rounded-[20px] border border-slate-200 object-cover shadow-[0_18px_50px_rgba(11,18,32,0.10)] dark:border-slate-700"
              />

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
