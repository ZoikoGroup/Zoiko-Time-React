const surfaces = ["API & data", "Sessions", "Dashboards & reports", "Exports"];

const tenants = ["Organization A", "Organization B"];

export default function EnterpriseIsolation() {
  return (
    <section className="w-full overflow-hidden bg-[#F6F9F9] dark:bg-slate-900">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[760px] flex-col items-center gap-3">

          <p className="text-center text-xs font-semibold uppercase leading-5 tracking-widest text-[#10A28D]">
            Enterprise Isolation
          </p>

          <h2 className="text-center text-3xl font-bold leading-[1.11] text-[#0E1F3D] dark:text-white sm:text-4xl">
            Your identity data, isolated by tenant and region
          </h2>

          <p className="max-w-[680px] text-center text-base font-normal leading-7 text-[#6B7785] dark:text-slate-400">
            Access, data, sessions, and exports are separated per organization
            and follow your configured data region.
          </p>

        </div>

        {/* Tenant Cards */}
        <div className="mx-auto mt-12 grid w-full max-w-[860px] grid-cols-1 gap-5 md:grid-cols-2">

          {tenants.map((tenant) => (
            <div
              key={tenant}
              className="rounded-2xl border border-[#C9EAE2] bg-white p-[21px] shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05),0px_1px_3px_0px_rgba(14,31,61,0.06)] dark:border-slate-800 dark:bg-slate-950"
            >

              <div className="flex items-center gap-2.5">

                <svg
                  viewBox="0 0 20 20"
                  className="h-5 w-5 shrink-0"
                  fill="none"
                  stroke="#10A28D"
                  strokeWidth="1.85"
                  aria-hidden="true"
                >
                  <rect x="3.66" y="3.67" width="12.68" height="12.68" rx="2" />
                </svg>

                <h3 className="text-sm font-bold leading-6 text-[#0E1F3D] dark:text-white">
                  {tenant}
                </h3>

              </div>

              <div className="mt-3 flex flex-col gap-2">
                {surfaces.map((surface) => (
                  <div
                    key={surface}
                    className="flex items-center justify-between gap-3 rounded-lg border border-[#E4E9EE] bg-[#F6F9F9] px-[13px] py-2.5 dark:border-slate-800 dark:bg-slate-900"
                  >

                    <span className="text-xs font-normal leading-5 text-[#0E1F3D] dark:text-slate-200">
                      {surface}
                    </span>

                    <span className="shrink-0 rounded-[20px] bg-[#E8F6F2] px-2 py-1 text-[9.5px] font-bold leading-4 text-[#0B8675]">
                      Isolated
                    </span>

                  </div>
                ))}
              </div>

            </div>
          ))}

        </div>

        {/* Enforcement Line */}
        <p className="mx-auto mt-6 max-w-[700px] text-center text-xs font-semibold leading-5 text-[#0B8675] dark:text-emerald-400">
          Tenant isolation enforced at every layer · data region &amp; residency
          per configuration
        </p>

        {/* Availability Note */}
        <div className="mx-auto mt-6 w-full max-w-[880px] rounded-xl border border-[#C9EAE2] bg-[#E8F6F2] px-6 py-[18px] dark:border-slate-800 dark:bg-slate-900">
          <p className="text-center text-sm font-normal leading-5 text-[#0E1F3D] dark:text-slate-300">
            Region and residency availability are published in the compatibility
            register; ZoikoTime does not assert options it has not verified.
          </p>
        </div>

      </div>
    </section>
  );
}
