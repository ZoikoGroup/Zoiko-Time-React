import Link from "next/link";

export default function DesktopMobileAppsCTA() {
  return (
    <section className="bg-gradient-to-br from-slate-800 via-slate-900 to-blue-950 py-16 lg:py-24 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-500 sm:text-base">
            Get Started
          </p>

          {/* Heading */}
          <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.2]">
            Use ZoikoTime across the application
            <br className="hidden md:block" />
            experiences your organization supports
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/80">
            Start a guided self-serve evaluation, or review platform, role,
            identity, privacy, accessibility, deployment, integration, and
            support requirements with the enterprise team.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/start-free"
              className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-teal-600 px-8 text-base font-semibold text-white shadow-lg shadow-teal-600/30 transition hover:bg-teal-700 sm:w-auto"
            >
              Start Free
            </Link>

            <Link
              href="/request-enterprise-demo"
              className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-white/30 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 sm:w-auto"
            >
              Request Enterprise Demo
            </Link>
          </div>

          {/* Note */}
          <p className="mx-auto mt-10 max-w-3xl text-sm leading-7 text-white/70">
            30-day trial for eligible plans · Log In, Getting Started,
            Documentation, Release Notes, and Service Status remain available
            without lead capture.
          </p>

          {/* Privacy Statement */}
          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-white/60">
            No screenshots, keystroke content, URL history,
            application-name monitoring, or clipboard collection under any tier
            or configuration.
          </p>
        </div>
      </div>
    </section>
  );
}