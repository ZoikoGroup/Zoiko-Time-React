export default function MonitoringSection() {
  return (
    <section className="w-full px-5 bg-white dark:bg-slate-950">
      <div
        className="
          max-w-[696px]
          mx-auto
          pt-12
        "
      >

        {/* Title */}
        <h2
          className="
            text-2xl
            font-extrabold
            leading-8
            text-slate-900
            dark:text-white
          "
        >
          8. Monitoring, Screenshots, and Proportionality
        </h2>


        {/* Divider */}
        <div
          className="
            mt-3
            w-12
            h-[3px]
            rounded-full
            bg-teal-600
          "
        />


        {/* Paragraph 1 */}
        <p
          className="
            mt-6
            text-base
            leading-7
            font-normal
            text-slate-700
            dark:text-slate-300
          "
        >
          ZoikoTime may support monitoring-related features, including
          activity metadata, work-state classification, idle detection,
          screenshot capture, policy flags, and audit logs. Customers should
          use monitoring features only where lawful, necessary, proportionate,
          transparent, and consistent with local employment, labor, privacy,
          data protection, human rights, works council, collective bargaining,
          and worker consultation requirements.
        </p>


        {/* Paragraph 2 */}
        <p
          className="
            mt-6
            text-base
            leading-7
            font-normal
            text-slate-700
            dark:text-slate-300
          "
        >
          Where screenshot functionality is used, customer organizations
          should consider privacy-preserving settings such as limited
          frequency, work-hours-only capture, restricted application scope,
          redaction, blurring, and restricted access to images. Workers are
          entitled to know whether screenshots are enabled, the frequency and
          scope, and who can access them.
        </p>


      </div>
    </section>
  );
}