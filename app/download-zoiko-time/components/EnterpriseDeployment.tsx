import Image from "next/image";

const deploymentFeatures = [
  {
    title: "MDM & Intune support",
    description:
      "Push installers through your existing mobile device management.",
    icon: "/download-zoiko-time/mdm.png",
  },
  {
    title: "Silent install & CLI flags",
    description:
      "Scripted deployment for SCCM and other enterprise tools.",
    icon: "/download-zoiko-time/cli.png",
  },
  {
    title: "Centralized licensing",
    description:
      "Manage seats and updates from one admin console.",
    icon: "/download-zoiko-time/licensing.png",
  },
];

export default function EnterpriseDeployment() {
  return (
    <section className="w-full bg-white px-4 py-16 transition-colors dark:bg-slate-950 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-[1180px]">

        {/* Header */}
        <div className="flex w-full max-w-[900px] flex-col items-start gap-3.5 pt-1">

          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-sm bg-teal-600 dark:bg-teal-400" />

            <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-teal-700 dark:text-teal-400">
              Enterprise Deployment
            </span>
          </div>

          <h2 className="text-3xl font-semibold leading-10 text-slate-800 dark:text-white sm:text-4xl">
            Roll out to hundreds of devices at once
          </h2>
        </div>

        {/* Hero Image */}
        <div className="mt-10 w-full">
          <div className="relative aspect-[1112/227] w-full overflow-hidden rounded-2xl border border-slate-200 bg-gray-50 dark:border-slate-800 dark:bg-slate-900 sm:rounded-3xl">
            <Image
              src="/download-zoiko-time/enterprise-deployment.png"
              alt="ZoikoTime enterprise deployment"
              fill
              sizes="(max-width: 1180px) 100vw, 1180px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">

          {deploymentFeatures.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-start rounded-2xl border border-slate-200 bg-gray-50 p-5 transition-colors dark:border-slate-800 dark:bg-slate-900"
            >
              {/* Icon */}
              <div className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800">
                <Image
                  src={feature.icon}
                  alt=""
                  width={16}
                  height={16}
                  className="h-4 w-4 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="mt-3 text-sm font-semibold leading-6 text-slate-800 dark:text-slate-100">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-1 text-xs font-normal leading-5 text-gray-500 dark:text-slate-400 sm:text-sm">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}