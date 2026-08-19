import Image from "next/image";
import { FileText } from "lucide-react";

const resources = [
  {
    title: "Trust Policies Library",
    description:
      "Access all external-facing legal and trust policies.",
    button: "View policies",
    href: "/policies",
    icon: "lucide",
  },
  {
    title: "Regulatory Mappings",
    description:
      "See how we map to GDPR, CCPA, and global frameworks.",
    button: "View mappings",
    href: "/regulatory-mappings",
    icon: "/trust-goverance/regulatory.png",
  },
  {
    title: "Certifications",
    description:
      "Download ISO, SOC2, and other trust certifications.",
    button: "View certificates",
    href: "/certifications",
    icon: "/trust-goverance/certifications.png",
  },
];

export default function ResourcesCompliance() {
  return (
    <section className="bg-white py-16 dark:bg-[#0B1120] md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-950 dark:text-white md:text-4xl">
            Resources &amp; compliance
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {resources.map((item) => (
            <div
              key={item.title}
              className="flex justify-between rounded-xl border border-neutral-300/30 bg-slate-50 p-8 transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex flex-col">
                <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-zinc-700 dark:text-slate-300">
                  {item.description}
                </p>

                {/* Button removed */}
              </div>

              <div className="ml-6 shrink-0">
                {item.icon === "lucide" ? (
                  <FileText
                    className="h-7 w-7 text-[#44B97A]"
                    strokeWidth={2}
                  />
                ) : (
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={28}
                    height={28}
                    className="h-7 w-7 object-contain"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}