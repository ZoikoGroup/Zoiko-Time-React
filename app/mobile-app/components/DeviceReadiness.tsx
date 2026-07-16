import React from "react";

export default function DeviceReadiness() {
  return (
    <section className="w-full overflow-hidden bg-slate-950 px-5 py-16 sm:px-8 lg:px-10 lg:py-0">
      <div className="mx-auto max-w-[1180px] text-center lg:min-h-[320px]">
        {/* Label */}
        <p className="text-xs font-semibold uppercase leading-5 tracking-[0.2em] text-teal-400">
          Device Readiness
        </p>

        {/* Heading */}
        <h2 className="mt-2.5 text-3xl font-bold leading-tight text-slate-100 sm:text-4xl">
          BYOD and managed device readiness
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-[650px] text-sm font-normal leading-7 text-slate-400 sm:text-base">
          Clear boundaries so ZoikoTime is never blamed for a customer's
          device-management behavior.
        </p>

        {/* Content */}
        <div className="mx-auto mt-12 max-w-[1080px] space-y-6 lg:mt-[76px] lg:space-y-0">
          {/* BYOD */}
          <div>
            <h3 className="text-sm font-bold leading-5 text-slate-200">
              Bring-your-own-device (BYOD)
            </h3>

            <p className="mt-1 text-sm font-normal leading-6 text-slate-400 sm:text-base">
              ZoikoTime records workforce actions inside the ZoikoTime app. It
              does not monitor the Worker's personal device outside the app.
            </p>
          </div>

          {/* Managed Devices */}
          <div className="mt-6 lg:mt-4">
            <h3 className="text-sm font-bold leading-5 text-slate-200">
              Company-managed devices
            </h3>

            <p className="mx-auto mt-1 max-w-[1080px] text-sm font-normal leading-6 text-slate-400 sm:text-base">
              Broader device controls are handled by the customer's own MDM
              policies and tools — separate from ZoikoTime and governed by the
              customer's notices, policies, and legal obligations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}