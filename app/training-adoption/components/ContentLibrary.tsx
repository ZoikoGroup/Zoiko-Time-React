import Image from "next/image";

const formats = [
  {
    icon: "/training-adoption/Micro-videos.svg",
    title: "Micro-videos",
    body: "Short, focused clips for just-in-time learning.",
  },
  {
    icon: "/training-adoption/Step-by-step%20guides.svg",
    title: "Step-by-step guides",
    body: "Task guides with screenshots of the real UI.",
  },
  {
    icon: "/training-adoption/Interactive-walkthroughs.svg",
    title: "Interactive walkthroughs",
    body: "Guided, in-product tours for hands-on learning.",
  },
  {
    icon: "/training-adoption/Downloadable-references.svg",
    title: "Downloadable references",
    body: "Quick-reference PDFs and role cheat-sheets.",
  },
];

export default function ContentLibrary() {
  return (
    <section className="w-full bg-white py-16 dark:bg-slate-950 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
            Content Library
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-800 dark:text-white sm:text-4xl">
            A searchable library in every format
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-base font-normal leading-7 text-gray-500 dark:text-slate-400">
            Short videos, step-by-step guides, interactive walkthroughs, and
            downloadable references — always current and accessible.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {formats.map(({ icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 dark:bg-slate-800">
                <Image
                  src={icon}
                  alt=""
                  aria-hidden="true"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
              </div>

              <h3 className="mt-5 text-base font-semibold leading-7 text-slate-800 dark:text-white">
                {title}
              </h3>

              <p className="mt-1 text-sm font-normal leading-6 text-gray-500 dark:text-slate-400">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
