"use client";

import Image from "next/image";

const deploymentFeatures = [
  {
    title: "MDM & Intune support",
    description:
      "Push installers through your existing mobile device management.",
  },
  {
    title: "Silent install & CLI flags",
    description:
      "Scripted deployment for SCCM and other enterprise tools.",
  },
  {
    title: "Centralized licensing",
    description:
      "Manage seats and updates from one admin console.",
  },
];

export default function EnterpriseDeployment() {
  return (
    <section className="w-full bg-white px-4 py-16 transition-colors duration-300 dark:bg-slate-950 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
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
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1180px) 100vw, 1180px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Feature Cards - No Icons */}
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
          {deploymentFeatures.map((feature) => (
            <div
              key={feature.title}
              className="flex min-h-[120px] flex-col items-start rounded-2xl border border-slate-200 bg-gray-50 p-5 transition-all duration-300 hover:shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-black/20"
            >
              <h3 className="text-sm font-semibold leading-6 text-slate-800 dark:text-slate-100">
                {feature.title}
              </h3>

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