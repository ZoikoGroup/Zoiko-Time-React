import React from 'react';
import Link from 'next/link';
import SectionEyebrow from './SectionEyebrow';

type Resource = {
  title: string;
  detail: string;
  icon: string;
  /** Only Enterprise Support routes onward; the rest are plain rows. */
  href?: string;
};

const resources: Resource[] = [
  {
    title: 'Enterprise Overview',
    detail: 'administration, policy, and identity controls.',
    icon: 'enterprise-overview.svg',
  },
  {
    title: 'Procurement & Legal Resources',
    detail: 'for security and legal review.',
    icon: 'contract-edit.svg',
  },
  {
    title: 'Global Deployment',
    detail: 'current availability by region.',
    icon: 'globe.svg',
  },
  {
    title: 'Enterprise Support',
    detail: 'for existing and evaluating customers.',
    icon: 'call.svg',
    href: '/enterprise-support',
  },
];

export default function EnterpriseQualification() {
  return (
    <section className="w-full bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-9">

        {/* Section heading */}
        <div className="flex max-w-[680px] flex-col items-center gap-3">

          <SectionEyebrow label="05 · Enterprise Qualification" />

          <h2 className="text-center text-2xl font-bold leading-10 text-slate-900 sm:text-3xl md:text-4xl">
            Evaluating for a Larger Rollout?
          </h2>

          <p className="text-center text-sm font-semibold leading-7 text-gray-500 sm:text-base">
            Procurement, global deployment, and support resources — for when complexity is
            explicit, not assumed.
          </p>

        </div>

        <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">

          {/* Image */}
          <div className="overflow-hidden rounded-[20px] shadow-[0px_8px_20px_-12px_rgba(10,22,40,0.16)]">
            <img
              className="h-64 w-full object-cover sm:h-80"
              src="/resource-center-start-evaluation/enterprise-rollout.png"
              alt="An enterprise operations team evaluating deployment and procurement resources together"
            />
          </div>

          {/* Resource routes */}
          <div className="flex flex-col gap-3.5">
            {resources.map((resource) => {
              const content = (
                <>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white">
                    <img
                      className="h-4 w-4"
                      src={`/resource-center-start-evaluation/${resource.icon}`}
                      alt=""
                      aria-hidden="true"
                    />
                  </span>

                  <span className="text-sm font-semibold leading-6 text-slate-900">
                    {resource.title}{' '}
                    <span className="font-normal text-slate-900/80">
                      — {resource.detail}
                    </span>
                  </span>
                </>
              );

              const baseClasses =
                'flex items-center gap-4 rounded-[10px] border border-green-100 bg-green-50 p-3.5';

              return resource.href ? (
                <Link
                  key={resource.title}
                  href={resource.href}
                  className={`${baseClasses} transition hover:border-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500`}
                >
                  {content}
                </Link>
              ) : (
                <div key={resource.title} className={baseClasses}>
                  {content}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
