import Image from "next/image";

const guarantees = [
  {
    icon: "/explore-zoikotime/icon-deterministic.svg",
    title: "Deterministic",
    description: "Visible rules, not hidden AI",
  },
  {
    icon: "/explore-zoikotime/icon-explainable.svg",
    title: "Explainable",
    description: "Every path shows why it fits",
  },
  {
    icon: "/explore-zoikotime/icon-no-worker-scoring.svg",
    title: "No worker scoring",
    description: "Only your declared choices are used",
  },
  {
    icon: "/explore-zoikotime/icon-full-directory.svg",
    title: "Full directory, always",
    description: "Every approved route stays reachable",
  },
];

export default function ExploreTrustStrip() {
  return (
    <section className="bg-slate-800 dark:bg-slate-900">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {guarantees.map((item, index) => (
            <div
              key={item.title}
              className={`flex items-center gap-3.5 px-0 py-6 lg:px-7 ${
                index > 0 ? "lg:border-l lg:border-white/10" : ""
              }`}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10">
                <Image
                  src={item.icon}
                  alt=""
                  width={16}
                  height={16}
                  aria-hidden="true"
                />
              </span>

              <div>
                <p className="text-sm font-semibold leading-5 text-white">
                  {item.title}
                </p>

                <p className="mt-1.5 text-xs leading-5 text-slate-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
