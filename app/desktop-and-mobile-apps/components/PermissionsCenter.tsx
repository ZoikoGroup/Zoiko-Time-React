export default function PermissionsCenter() {
  const permissions = [
    {
      label: "Optional",
      title: "Notifications",
      description: (
        <>
          Reminders, approvals, exception review,
          <br />
          and status updates. Optional
          <br />
          communications are separated from
          <br />
          required operational and security notices.
        </>
      ),
    },
    {
      label: "Purpose-gated",
      title: "Location context",
      description: (
        <>
          Only if the organization enables location-
          <br />
          context rules, you&apos;ve been notified, and
          <br />
          device permission is granted — never
          <br />
          hidden or background tracking.
        </>
      ),
    },
    {
      label: "On demand",
      title: "Camera",
      description: (
        <>
          Only requested if an approved workflow
          <br />
          needs QR or document capture. Denial
          <br />
          disables just that feature, with an
          <br />
          alternative where available.
        </>
      ),
    },
    {
      label: "Optional",
      title: "Biometric unlock",
      description: (
        <>
          Device-level convenience where supported
          <br />
          — a non-biometric route always remains.
          <br />
          Not workforce monitoring.
        </>
      ),
    },
    {
      label: "Never",
      title: "Explicit non-access",
      description: (
        <>
          No contacts, SMS, call logs, personal photos,
          <br />
          private files, microphone, screen recording,
          <br />
          other-app activity, or browsing history.
        </>
      ),
    },
    {
      label: "Audited",
      title: "Change history",
      description: (
        <>
          Permission and configuration changes are
          <br />
          logged so you can see what changed,
          <br />
          when, and why — without covert collection.
        </>
      ),
    },
  ];

  return (
    <section className="bg-gray-50 py-16 dark:bg-slate-950 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="
            text-xs
            font-semibold
            uppercase
            tracking-[0.25em]
            text-teal-600
          ">
            Permissions
          </p>


          <h2 className="
            mt-5
            text-3xl
            font-bold
            leading-tight
            text-slate-800
            dark:text-white
            sm:text-4xl
          ">
            A collection & permissions center —
            <br className="hidden sm:block" />
            not dark patterns
          </h2>


          <p className="
            mt-5
            text-base
            leading-7
            text-gray-500
            dark:text-slate-400
          ">
            Every device or data permission is purpose-specific,
            requested just in time, and revocable. Denial is
            respected with clear alternatives; there&apos;s no
            pre-checked consent and no nagging.
          </p>

        </div>


        {/* Cards */}
        <div className="
          mt-12
          grid
          grid-cols-1
          gap-6
          sm:grid-cols-2
          lg:grid-cols-3
        ">

          {permissions.map((item) => (

            <div
              key={item.title}
              className="
                min-h-[208px]
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-7
                shadow-[0_6px_18px_rgba(14,31,61,0.05)]
                dark:border-slate-800
                dark:bg-slate-900
              "
            >

              <p className="
                text-base
                font-normal
                text-gray-700
                dark:text-slate-400
              ">
                {item.label}
              </p>


              <h3 className="
                mt-2
                text-base
                font-semibold
                leading-7
                text-slate-800
                dark:text-white
              ">
                {item.title}
              </h3>


              <p className="
                mt-5
                text-sm
                leading-6
                text-gray-500
                dark:text-slate-400
              ">
                {item.description}
              </p>


            </div>

          ))}

        </div>


      </div>
    </section>
  );
}