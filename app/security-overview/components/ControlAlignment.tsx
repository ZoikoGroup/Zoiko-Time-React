const controls = [
  {
    area: "Access Control",
    soc2: true,
    iso: true,
    gdpr: true,
  },
  {
    area: "Encryption at Rest & in Transit",
    soc2: true,
    iso: true,
    gdpr: true,
  },
  {
    area: "Audit Logging & Evidence Trails",
    soc2: true,
    iso: true,
    gdpr: true,
  },
  {
    area: "Data Protection & Lifecycle Management",
    soc2: true,
    iso: true,
    gdpr: true,
  },
  {
    area: "Incident Response & Breach Notification",
    soc2: true,
    iso: true,
    gdpr: true,
  },
  {
    area: "Vendor & Third-Party Risk Management",
    soc2: true,
    iso: true,
    gdpr: true,
  },
  {
    area: "Continuous Monitoring & Anomaly Detection",
    soc2: true,
    iso: true,
    gdpr: true,
  },
];

export default function ControlAlignment() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-teal-600">
            Control Alignment
          </p>

          <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
            Control Alignment with Security Standards
          </h2>

          <p className="mt-6 text-base leading-7 text-slate-500 dark:text-slate-300 md:text-lg">
            Every ZoikoTime security control is mapped to SOC 2,
            ISO 27001, and GDPR requirements — providing the
            audit-friendly evidence that compliance teams and
            security reviewers need.
          </p>

        </div>

        {/* Table */}
        <div className="mt-14 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-[0_1px_4px_rgba(13,21,38,0.04),0_4px_16px_rgba(13,21,38,0.08)] dark:border-slate-700 dark:bg-slate-900">

          <table className="min-w-full border-collapse">

                        <thead className="bg-slate-100 dark:bg-slate-800">
              <tr>
                <th className="border-b border-slate-200 px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500 dark:border-slate-700 dark:text-slate-300">
                  Control Area
                </th>

                <th className="border-b border-slate-200 px-6 py-4 text-center text-xs font-bold uppercase tracking-wider text-indigo-700 dark:border-slate-700">
                  SOC 2
                </th>

                <th className="border-b border-slate-200 px-6 py-4 text-center text-xs font-bold uppercase tracking-wider text-teal-700 dark:border-slate-700">
                  ISO 27001
                </th>

                <th className="border-b border-slate-200 px-6 py-4 text-center text-xs font-bold uppercase tracking-wider text-indigo-500 dark:border-slate-700">
                  GDPR
                </th>
              </tr>
            </thead>

            <tbody>
              {controls.map((control) => (
                <tr
                  key={control.area}
                  className="border-b border-slate-200 last:border-none dark:border-slate-700"
                >
                  <td className="px-6 py-5 text-sm font-semibold text-slate-900 dark:text-white">
                    {control.area}
                  </td>

                  <td className="px-6 py-5 text-center text-lg font-bold text-emerald-600">
                    {control.soc2 ? "✓" : "—"}
                  </td>

                  <td className="px-6 py-5 text-center text-lg font-bold text-emerald-600">
                    {control.iso ? "✓" : "—"}
                  </td>

                  <td className="px-6 py-5 text-center text-lg font-bold text-emerald-600">
                    {control.gdpr ? "✓" : "—"}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

              </div>
    </section>
  );
}