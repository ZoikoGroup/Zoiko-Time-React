const cards = [
  {
    icon: "🔑",
    title: "Role-Based Access Control",
    description:
      "Every user, role, and system component operates with the minimum access required for their function. Cross-scope data access is prevented at the architecture level — not dependent on user behaviour.",
    pills: [
      "Least-privilege enforcement",
      "No cross-scope visibility by design",
    ],
  },
  {
    icon: "🛡️",
    title: "Multi-Factor Authentication",
    description:
      "MFA is enforced for all user access — configurable per role and risk profile. Session timeout and re-authentication policies are applied based on inactivity and elevated risk signals detected during active sessions.",
    pills: [
      "MFA mandatory for admin roles",
      "Risk-adaptive re-authentication",
    ],
  },
  {
    icon: "🔗",
    title: "Enterprise SSO Integration",
    description:
      "Native integration with enterprise identity providers — Okta, Azure AD, Google Workspace, and other SAML 2.0 / OIDC compatible systems. Single sign-on with centralised identity governance from your existing IdP.",
    pills: [
      "SAML 2.0 + OIDC",
      "Okta, Azure AD, Google",
    ],
  },
  {
    icon: "📋",
    title: "Access Logging",
    description:
      "Every access event is logged — immutably and with full context. Role, timestamp, resource accessed, session state, and outcome are recorded for every interaction, providing a complete access audit trail for any review period.",
    pills: [
      "Immutable access logs",
      "Full context per event",
    ],
  },
  {
    icon: "⏱️",
    title: "Session Controls",
    description:
      "Configurable session timeout and automatic re-authentication policies — applied based on role, risk profile, and inactivity detection. Session continuity monitoring detects anomalous access patterns in real time.",
    pills: [
      "Role-based timeouts",
      "Anomaly-triggered re-auth",
    ],
  },
  {
    icon: "🔏",
    title: "Privileged Access Management",
    description:
      "Elevated privileges are managed through time-limited grants, approval workflows, and enhanced monitoring — no standing privileged access that could be exploited through credential compromise or insider risk.",
    pills: [
      "Time-limited privilege grants",
      "Enhanced monitoring for PAM",
    ],
  },
];

export default function IdentityAccess() {
  return (
    <section className="bg-white py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-teal-600">
            Identity &amp; Access
          </p>

          <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
            Identity and Access Management
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-500 dark:text-slate-300 md:text-lg">
            A comprehensive IAM model — least privilege enforcement,
            session-level validation, and enterprise identity provider
            integration built in from the start.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">


                      {cards.map((card) => (
            <div
              key={card.title}
              className="relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0px_1px_2px_rgba(13,21,38,0.04),0px_1px_4px_rgba(13,21,38,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900"
            >
              {/* Top Gradient */}
              <div className="h-[3px] w-full bg-gradient-to-r from-teal-600 to-teal-500" />

              <div className="p-8">

                {/* Icon */}
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl border border-teal-600/20 bg-emerald-50 text-2xl dark:bg-teal-500/10">
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="min-h-[56px] text-xl font-bold leading-7 text-slate-900 dark:text-white">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="mt-5 min-h-[170px] text-sm leading-7 text-slate-500 dark:text-slate-300">
                  {card.description}
                </p>

                {/* Pills */}
                <div className="mt-6 flex flex-wrap gap-3">
                  {card.pills.map((pill) => (
                    <span
                      key={pill}
                      className="rounded-full border border-teal-600/20 bg-emerald-50 px-4 py-2 text-xs font-semibold text-teal-700 dark:border-teal-500/20 dark:bg-teal-500/10 dark:text-teal-300"
                    >
                      {pill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}

                  </div>
      </div>
    </section>
  );
}
        