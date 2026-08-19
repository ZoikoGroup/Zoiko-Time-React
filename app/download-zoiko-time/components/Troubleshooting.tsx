const troubleshootingItems = [
  {
    title: "Installer won't open",
    description:
      "Usually a blocked download or an outdated OS version. Confirm your OS meets the minimum version above.",
  },
  {
    title: "Can't sign in after install",
    description:
      "Check that your organization's SSO is enabled, or reset your ZoikoTime password.",
  },
  {
    title: "Records not syncing",
    description:
      "Confirm you're on the latest version and connected to the internet, then restart the app.",
  },
  {
    title: "Need to uninstall or reinstall",
    description:
      "Use your OS's standard uninstall process, then download the latest version above.",
  },
];

export default function Troubleshooting() {
  return (
    <section className="w-full bg-white px-4 py-16 transition-colors dark:bg-slate-950 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-[1180px]">

        {/* Header */}
        <div className="flex w-full max-w-[600px] flex-col items-start gap-3 pt-1">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-sm bg-teal-600 dark:bg-teal-400" />

            <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-teal-700 dark:text-teal-400">
              Troubleshooting
            </span>
          </div>

          <h2 className="text-3xl font-semibold leading-10 text-slate-800 dark:text-white sm:text-4xl">
            Common installation issues
          </h2>
        </div>

        {/* Troubleshooting Cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {troubleshootingItems.map((item) => (
            <div
              key={item.title}
              className="flex min-h-[240px] flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-colors dark:border-slate-800 dark:bg-slate-900"
            >
              {/* Title */}
              <div className="flex items-center gap-2.5">

                {/* Warning Icon */}
                <div className="flex h-4 w-4 shrink-0 items-center justify-center">
                  <div className="relative flex h-3.5 w-3.5 items-center justify-center">
                    <div className="absolute bottom-0 h-0 w-0 border-x-[7px] border-b-[12px] border-x-transparent border-b-amber-700 dark:border-b-amber-500" />

                    <span className="relative z-10 mt-[2px] text-[8px] font-bold text-white">
                      !
                    </span>
                  </div>
                </div>

                <h3 className="text-sm font-semibold leading-6 text-slate-800 dark:text-slate-100">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="mt-3 max-w-[560px] text-xs font-normal leading-5 text-gray-500 dark:text-slate-400 sm:text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}