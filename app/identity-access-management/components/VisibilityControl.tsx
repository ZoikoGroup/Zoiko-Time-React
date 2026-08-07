import Image from "next/image";

const actionTones = {
  blue: "bg-[#E7F0FF] text-[#2E5BC0]",
  amber: "bg-[#FFF3D6] text-[#8A6500]",
} as const;

const sessions = [
  {
    user: "A. Okafor",
    device: "Desktop · web",
    started: "09:02",
    action: "Revoke",
    tone: "blue" as const,
  },
  {
    user: "J. Rivera",
    device: "Mobile",
    started: "08:40",
    action: "Revoke",
    tone: "blue" as const,
  },
  {
    user: "S. Chen",
    device: "Desktop · web",
    started: "07:55",
    action: "Step-up",
    tone: "amber" as const,
  },
];

const sessionPoints = [
  "One-click session & device revocation",
  "Step-up for sensitive administrative actions",
  "Approved authentication methods only — no invented claims",
];

const trail = [
  {
    icon: "/identity-access-management/Access-reviews.svg",
    title: "SSO sign-in",
    meta: "A. Okafor · OIDC · MFA satisfied · 09:02",
  },
  {
    icon: "/identity-access-management/Role-based-access.svg",
    title: "Role change",
    meta: "Approver granted to M. Diaz · reason logged · 09:14",
  },
  {
    icon: "/identity-access-management/Strong-step-up-auth.svg",
    title: "Elevated access approved",
    meta: "Payroll export · 4h · time-bound · 10:05",
  },
  {
    icon: "/identity-access-management/Time-bound-access.svg",
    title: "Access auto-revoked",
    meta: "Elevated grant expired · 14:05",
  },
  {
    icon: "/identity-access-management/Sessions-devices.svg",
    title: "Session revoked",
    meta: "K. Patel · by administrator · 15:20",
  },
];

const sessionColumns = "grid-cols-[26%_30%_20%_24%]";

export default function VisibilityControl() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[700px] flex-col items-center gap-3">

          <p className="text-center text-xs font-semibold uppercase leading-5 tracking-widest text-[#10A28D]">
            Visibility &amp; Control
          </p>

          <h2 className="text-center text-3xl font-bold leading-[1.11] text-[#0E1F3D] dark:text-white sm:text-4xl">
            See every session. Answer every access question.
          </h2>

          <p className="max-w-[640px] text-center text-base font-normal leading-7 text-[#6B7785] dark:text-slate-400">
            Live session control and a complete access audit trail — so security
            and audit teams always have an answer.
          </p>

        </div>

        {/* Sessions */}
        <div className="mx-auto mt-12 grid w-full max-w-[1180px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">

          {/* Sessions Mock */}
          <div
            className="overflow-hidden rounded-2xl border border-[#E4E9EE] bg-white shadow-[0px_26px_54px_0px_rgba(14,31,61,0.16)] dark:border-slate-800 dark:bg-slate-950"
            aria-hidden="true"
          >

            <div className="flex items-center gap-2 bg-[#0E1F3D] px-4 py-3">
              <span className="h-2 w-2 rounded-full bg-white/25" />
              <span className="h-2 w-2 rounded-full bg-white/25" />
              <span className="h-2 w-2 rounded-full bg-white/25" />
              <p className="pl-2 text-xs font-medium leading-5 text-white/90">
                Sessions &amp; devices
              </p>
            </div>

            <div className="px-4 pb-4 pt-4">

              <div className="flex flex-wrap items-center justify-between gap-2">

                <p className="text-sm font-semibold leading-6 text-[#0E1F3D] dark:text-white">
                  Active sessions
                </p>

                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E8F6F2] px-2 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0B8675]" />
                  <span className="text-[10px] font-bold leading-4 text-[#0B8675]">
                    Revocable · logged
                  </span>
                </span>

              </div>

              <div className="mt-3">

                <div
                  className={`grid ${sessionColumns} border-b border-[#E4E9EE] dark:border-slate-800`}
                >
                  {["User", "Device", "Started", "Action"].map((heading) => (
                    <p
                      key={heading}
                      className="px-1 py-2 text-[9px] font-semibold uppercase leading-4 tracking-tight text-[#6B7785] dark:text-slate-400"
                    >
                      {heading}
                    </p>
                  ))}
                </div>

                {sessions.map((row) => (
                  <div
                    key={row.user}
                    className={`grid ${sessionColumns} items-center border-b border-[#E4E9EE] dark:border-slate-800`}
                  >

                    <p className="px-1 py-2.5 text-[11px] font-normal leading-5 text-[#0E1F3D] dark:text-slate-200">
                      {row.user}
                    </p>

                    <p className="px-1 py-2.5 text-[11px] font-normal leading-5 text-[#0E1F3D] dark:text-slate-200">
                      {row.device}
                    </p>

                    <p className="px-1 py-2.5 text-[11px] font-normal leading-5 text-[#0E1F3D] dark:text-slate-200">
                      {row.started}
                    </p>

                    <div className="px-1">
                      <span
                        className={`inline-flex rounded-[20px] px-2 py-[3px] text-[10px] font-bold leading-4 ${actionTones[row.tone]}`}
                      >
                        {row.action}
                      </span>
                    </div>

                  </div>
                ))}

              </div>

              <p className="mt-3 text-[10px] font-normal leading-4 text-[#6B7785] dark:text-slate-400">
                Sessions are identifiable, revocable, and recorded — with device
                revocation and recovery.
              </p>

            </div>

          </div>

          {/* Sessions Copy */}
          <div>

            <h3 className="text-xl font-bold leading-7 text-[#0E1F3D] dark:text-white">
              Sessions &amp; devices
            </h3>

            <p className="mt-3 max-w-[540px] text-sm font-normal leading-6 text-[#6B7785] dark:text-slate-400">
              Every session is identifiable, revocable, and recorded. Revoke a
              device, require step-up for sensitive actions, and give users a
              clear recovery path.
            </p>

            <ul className="mt-5 flex flex-col gap-2.5">
              {sessionPoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5">

                  <svg
                    viewBox="0 0 14 14"
                    className="mt-[3px] h-3.5 w-3.5 shrink-0"
                    fill="none"
                    stroke="#10A28D"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M2.9 7.6 5.25 9.95 11.1 4.1" />
                  </svg>

                  <span className="text-xs font-medium leading-5 text-[#0E1F3D] dark:text-slate-200">
                    {point}
                  </span>

                </li>
              ))}
            </ul>

          </div>

        </div>

        {/* Access Audit Trail */}
        <div className="mx-auto mt-16 w-full max-w-[790px]">

          <h3 className="text-center text-lg font-bold leading-7 text-[#0E1F3D] dark:text-white">
            Access audit trail
          </h3>

          <div className="relative mt-6">

            <span
              className="absolute bottom-5 left-4 top-5 w-0.5 bg-[#10A28D]"
              aria-hidden="true"
            />

            <div className="flex flex-col gap-3">
              {trail.map((event) => (
                <div key={event.title} className="flex items-center gap-4">

                  <span className="relative z-10 flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#10A28D] bg-white dark:bg-slate-950">
                    <Image
                      src={event.icon}
                      alt=""
                      width={16}
                      height={16}
                      className="h-4 w-4"
                    />
                  </span>

                  <div className="min-w-0 flex-1 rounded-xl border border-[#E4E9EE] bg-white px-4 py-3 shadow-[0px_1px_3px_0px_rgba(14,31,61,0.06)] dark:border-slate-800 dark:bg-slate-950">

                    <p className="text-xs font-bold leading-5 text-[#0E1F3D] dark:text-white">
                      {event.title}
                    </p>

                    <p className="text-[11px] font-normal leading-5 text-[#6B7785] dark:text-slate-400">
                      {event.meta}
                    </p>

                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Admissibility Note */}
        <div className="mx-auto mt-10 w-full max-w-[900px] rounded-xl border border-[#C9EAE2] bg-[#EAF6F3] px-6 py-4 dark:border-slate-800 dark:bg-slate-900">
          <p className="text-center text-xs font-normal leading-5 text-[#0E1F3D] dark:text-slate-300">
            Audit evidence supports review, recertification, and investigations.
            ZoikoTime does not claim universal legal admissibility.
          </p>
        </div>

      </div>
    </section>
  );
}
