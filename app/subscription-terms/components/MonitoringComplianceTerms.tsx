export default function MonitoringComplianceTerms() {
  return (
    <section className="bg-white py-16 dark:bg-gray-950">
      <div className="mx-auto max-w-4xl px-6">
        {/* Heading */}
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-teal-600">
          Customer Responsibilities
        </p>

        <h2 className="mt-4 text-center text-3xl font-bold text-slate-800 dark:text-white md:text-4xl">
          Workplace monitoring compliance
        </h2>

        <div className="mt-10 space-y-6">
          <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
            Customer acknowledges and agrees that ZoikoTime provides technical
            capabilities for workforce tracking, activity monitoring, and visual
            screen capture. Customer is solely responsible for determining the
            lawfulness of deploying such capabilities within its organization,
            obtaining all necessary employee/contractor consents, providing
            required statutory notices, and maintaining lawful policies
            regarding employee monitoring.
          </p>

          <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
            ZoikoTime makes no representation or warranty that Customer&apos;s
            use of screen capture, activity tracking, or time verification
            features complies with labor, employment, or privacy laws in
            Customer&apos;s operating jurisdiction.
          </p>
        </div>
      </div>
    </section>
  );
}
