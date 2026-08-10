import Image from "next/image";

const contexts = [
  {
    image: "/download-zoiko-time/mobile.png",
    alt: "ZoikoTime mobile app",
    title: "On the floor, checking a shift on mobile",
  },
  {
    image: "/download-zoiko-time/desktop.png",
    alt: "ZoikoTime desktop app",
    title: "In the office, reviewing on desktop.",
  },
  {
    image: "/download-zoiko-time/web.png",
    alt: "ZoikoTime web app",
    title: "At home, catching up from the web app.",
  },
];

export default function TeamWorkContexts() {
  return (
    <section className="w-full bg-white px-4 py-16 transition-colors dark:bg-slate-950 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-[1180px]">

        {/* Header */}
        <div className="mx-auto flex w-full max-w-[600px] flex-col items-center gap-3 text-center">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-sm bg-teal-600 dark:bg-teal-400" />

            <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-teal-700 dark:text-teal-400">
              Built For How Your Team Works
            </span>
          </div>

          <h2 className="text-3xl font-semibold leading-10 text-slate-800 dark:text-white sm:text-4xl">
            One app, every context.
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-10 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {contexts.map((context) => (
            <div
              key={context.title}
              className="group relative aspect-[320/384] overflow-hidden rounded-3xl"
            >
              {/* Image */}
              <Image
                src={context.image}
                alt={context.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 dark:to-black/80" />

              {/* Text */}
              <div className="absolute inset-x-5 bottom-5">
                <p className="text-sm font-semibold leading-6 text-white sm:leading-7">
                  {context.title}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}