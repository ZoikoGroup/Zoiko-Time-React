"use client";

import Image from "next/image";

export default function EnterpriseDeploymentIncludes() {
  return (
    <section className="w-full bg-green-50 px-6 py-14 transition-colors sm:px-10 md:px-16 lg:px-24 xl:px-44 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1080px]">
        {/* Header */}
        <div className="w-full max-w-[817px] lg:pl-8">
          <div className="flex h-5 items-center gap-[9px]">
            <span className="h-1.5 w-1.5 shrink-0 rounded-sm bg-emerald-600" />

            <span className="text-xs font-bold uppercase leading-5 tracking-[0.2em] text-emerald-700 dark:text-emerald-400">
              What Enterprise Deployment Includes
            </span>
          </div>

          <h2 className="mt-3 text-3xl font-bold leading-10 text-slate-900 md:text-[32px] dark:text-white">
            Beyond the Check: What&apos;s Actually Being Verified
          </h2>

          <p className="mt-1 max-w-[885px] text-sm font-normal leading-6 text-gray-500 dark:text-slate-400">
            Each dimension in the availability check maps to a real, owned
            enterprise capability — not a generic feature list.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:gap-9 lg:pl-8">
          {/* Capability Cards */}
          <div className="w-full lg:w-[482px]">
            <div className="flex flex-col gap-3">
              {/* Administration & Policy */}
              <div className="rounded-[10px] border border-slate-200 bg-white px-4 py-10 transition-colors dark:border-slate-700 dark:bg-slate-900">
                <h3 className="text-xs font-bold leading-5 text-slate-900 dark:text-white">
                  Administration &amp; Policy
                </h3>

                <p className="mt-6 text-xs font-normal leading-4 text-gray-500 dark:text-slate-400">
                  Global policy controls, effective-dated and versioned.
                </p>
              </div>

              {/* Identity & Access */}
              <div className="rounded-[10px] border border-slate-200 bg-white px-4 py-10 transition-colors dark:border-slate-700 dark:bg-slate-900">
                <h3 className="text-xs font-bold leading-5 text-slate-900 dark:text-white">
                  Identity &amp; Access
                </h3>

                <p className="mt-6 text-xs font-normal leading-4 text-gray-500 dark:text-slate-400">
                  SSO, role-based access, and provisioning where supported.
                </p>
              </div>

              {/* Monitoring & Support */}
              <div className="rounded-[10px] border border-slate-200 bg-white px-4 py-10 transition-colors dark:border-slate-700 dark:bg-slate-900">
                <h3 className="text-xs font-bold leading-5 text-slate-900 dark:text-white">
                  Monitoring &amp; Support
                </h3>

                <p className="mt-6 text-xs font-normal leading-4 text-gray-500 dark:text-slate-400">
                  Health monitoring, incident ownership, and verified support
                  routing.
                </p>
              </div>

              {/* Procurement & Legal */}
              <div className="rounded-[10px] border border-slate-200 bg-white px-4 py-10 transition-colors dark:border-slate-700 dark:bg-slate-900">
                <h3 className="text-xs font-bold leading-5 text-slate-900 dark:text-white">
                  Procurement &amp; Legal
                </h3>

                <p className="mt-6 text-xs font-normal leading-4 text-gray-500 dark:text-slate-400">
                  Contract, DPA, and order-form fit reviewed on request.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="w-full overflow-hidden rounded-[20px] bg-white shadow-[0px_8px_20px_-12px_rgba(10,22,40,0.16)] transition-colors lg:w-[482px] dark:bg-slate-900 dark:shadow-none">
            <Image
              src="/confirm-availability/deployment.png"
              alt="Enterprise deployment verification"
              width={482}
              height={330}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}