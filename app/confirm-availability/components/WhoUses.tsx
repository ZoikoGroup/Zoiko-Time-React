import Image from "next/image";

const roles = [
  {
    title: "IT & Security",
    description:
      "Confirm technical, monitoring, and data-location readiness before a rollout begins.",
    icon: "/confirm-availability/it-security.png",
  },
  {
    title: "Procurement & Legal",
    description:
      "Check contractual and legal/privacy review status ahead of a formal review cycle.",
    icon: "/confirm-availability/procurement-legal.png",
  },
  {
    title: "Finance",
    description:
      "See commercial-terms status without inferring pricing from geography.",
    icon: "/confirm-availability/finance.png",
  },
  {
    title: "Existing customers",
    description:
      "Route straight to Enterprise Support for an account-aware answer — no new sales lead created.",
    icon: "/confirm-availability/existing-customers.png",
  },
];

export default function WhoUses() {
  return (
    <section className="w-full bg-white px-5 py-12 transition-colors duration-300 dark:bg-gray-900 sm:px-8 sm:py-16 lg:px-10">
      <div className="mx-auto w-full max-w-[1016px]">

        {/* Section label */}
        <div className="mb-6 flex items-center gap-[9px]">
          <span className="h-1.5 w-1.5 rounded-sm bg-emerald-600" />

          <span className="text-xs font-bold uppercase leading-5 tracking-[0.2em] text-emerald-700 dark:text-emerald-400">
            WHO USES THIS BEFORE THEY DEPLOY
          </span>
        </div>

        {/* Heading */}
        <div className="mb-10 max-w-[482px]">
          <h2 className="text-3xl font-bold leading-10 text-slate-900 dark:text-white">
            Different Roles, the Same Verified
            <br className="hidden sm:block" />
            Result
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-[49px]">

          {/* Image */}
          <div className="overflow-hidden rounded-[20px] bg-white shadow-[0px_8px_20px_-12px_rgba(10,22,40,0.16)] dark:bg-gray-800">
            <Image
              src="/confirm-availability/roles.png"
              alt="ZoikoTime deployment availability verification"
              width={482}
              height={380}
              className="h-auto w-full object-cover"
            />
          </div>

          {/* Role cards */}
          <div className="flex flex-col gap-3.5">

            {roles.map((role) => (
              <div
                key={role.title}
                className="flex min-h-[128px] items-start gap-3.5 rounded-[10px] border border-green-100 bg-green-50 px-4 py-4 transition-colors duration-300 dark:border-emerald-900 dark:bg-emerald-950/30"
              >
                {/* Icon */}
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white dark:bg-gray-800">
                  <Image
                    src={role.icon}
                    alt=""
                    width={20}
                    height={20}
                    className="h-5 w-5 object-contain"
                  />
                </div>

                {/* Content */}
                <div className="min-w-0 pt-0.5">
                  <h3 className="text-sm font-bold leading-6 text-slate-900 dark:text-white">
                    {role.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-gray-500 dark:text-gray-400">
                    {role.description}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}