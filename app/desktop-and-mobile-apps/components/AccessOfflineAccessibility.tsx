import { FiShield, FiWifi, FiEye, FiDownload } from "react-icons/fi";

const cards = [
  {
    icon: FiShield,
    title: "Identity & sessions",
    description:
      "Approved authentication only — no invented SSO, MFA, passkey, or biometric claims. Sessions are identifiable, revocable, and audit-logged, with device revocation and clear recovery.",
  },
  {
    icon: FiWifi,
    title: "Connectivity & offline",
    description:
      "Offline is publication-gated. Where it isn't approved, the app states a connection is required for that action — never 'works anywhere,' 'never lose time,' or 'always sync.'",
  },
  {
    icon: FiEye,
    title: "Accessibility as a requirement",
    description:
      "WCAG 2.2 AA is release-blocking: keyboard/switch operation, screen-reader labels, text scaling and reflow, reduced motion, target size — with any known limitation stated, not hidden.",
  },
  {
    icon: FiDownload,
    title: "First use & updates",
    description:
      "Access, installation, and updates render only from the governed registry. No download button, store badge, QR code, or system requirement appears until the destination and evidence exist.",
  },
];

export default function AccessOfflineAccessibility() {
  return (
    <section className="bg-gray-50 py-16 md:py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600">
            Access, Offline & Accessibility
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-800 dark:text-white sm:text-4xl lg:text-5xl">
            Honest about what's supported
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-500 dark:text-slate-400">
            Identity, offline behavior, and accessibility are treated as
            evidence-gated — described only within tested, approved scope.
          </p>
        </div>

        {/* Cards - 2 Per Row */}
        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-lg dark:border-slate-700 dark:bg-slate-800"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-900/30">
                    <Icon className="h-5 w-5 text-teal-600" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                      {card.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Notice */}
        <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-emerald-100 bg-emerald-50 px-8 py-6 dark:border-emerald-900 dark:bg-emerald-950/30">
          <p className="text-center text-sm leading-7 text-slate-700 dark:text-slate-300">
            Deterministic Time Classification is policy-bound and reviewable —
            <span className="font-bold text-teal-700 dark:text-teal-400">
              {" "}
              never branded as AI
            </span>
            . Assistive features retrieve and explain governed data; they decide
            nothing.
          </p>
        </div>
      </div>
    </section>
  );
}