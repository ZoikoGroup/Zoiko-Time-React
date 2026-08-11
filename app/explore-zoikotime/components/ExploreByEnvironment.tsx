import Image from "next/image";
import Link from "next/link";

import SectionHeading from "./SectionHeading";

const environments = [
  {
    label: "Remote",
    image: "/explore-zoikotime/environment-remote.png",
    alt: "A remote worker typing on a laptop at a home desk",
    href: "/remote-teams",
  },
  {
    label: "Hybrid",
    image: "/explore-zoikotime/environment-hybrid.png",
    alt: "A hybrid workspace with desks and shared monitors",
    href: "/manage-remote-hybrid-work",
  },
  {
    label: "Scheduled / Site",
    image: "/explore-zoikotime/environment-scheduled-site.png",
    alt: "A site worker moving stock on a scheduled shift",
    href: "/shift-integrity-controls",
  },
  {
    label: "Distributed / Global",
    image: "/explore-zoikotime/environment-distributed-global.png",
    alt: "A distributed team celebrating across a large venue",
    href: "/distributed-workforces",
  },
  {
    label: "Project / Service",
    image: "/explore-zoikotime/environment-project-service.png",
    alt: "A project team collaborating around laptops in a meeting room",
    href: "/professional-services-firms",
  },
];

export default function ExploreByEnvironment() {
  return (
    <section className="bg-gray-50 dark:bg-slate-900">
      <div className="mx-auto w-full max-w-[1180px] px-6 py-16 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Explore by Environment"
          title="How is your work organized?"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {environments.map((environment) => (
            <Link
              key={environment.label}
              href={environment.href}
              className="group relative h-[187px] overflow-hidden rounded-2xl border border-slate-200 transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800"
            >
              <Image
                src={environment.image}
                alt={environment.alt}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition duration-300 group-hover:scale-105"
              />

              <span className="absolute inset-0 bg-gradient-to-t from-slate-800/90 to-slate-800/10" />

              <span className="absolute bottom-4 left-4 text-sm font-semibold leading-5 text-white">
                {environment.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
