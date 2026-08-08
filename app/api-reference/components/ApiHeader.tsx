import Image from "next/image";

const meta = [
  { label: "BASE", value: "https://api.zoikotime.com" },
  { label: "VER", value: "2026-06-01" },
  { label: "AUTH", value: "Bearer key" },
  { label: "FORMAT", value: "JSON" },
];

export default function ApiHeader() {
  return (
    <header className="w-full">

      <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
        Developers
      </p>

      <h1 className="mt-2 text-4xl font-extrabold leading-tight text-slate-800 dark:text-white">
        API Reference
      </h1>

      {/* Meta chips — kept on a single line, scrolling sideways if cramped */}
      <div className="mt-6 flex flex-nowrap gap-3 overflow-x-auto pb-1">
        {meta.map((item) => (
          <span
            key={item.label}
            className="api-mono inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-lg border border-slate-200 bg-gray-50 px-3 py-2 text-xs leading-5 dark:border-slate-800 dark:bg-slate-900"
          >

            <span className="font-bold text-teal-700 dark:text-teal-300">
              {item.label}
            </span>

            <span className="font-normal text-slate-800 dark:text-white">
              {item.value}
            </span>

          </span>
        ))}
      </div>

      {/* Banner */}
      <div className="relative mt-6 overflow-hidden rounded-2xl bg-slate-900">

        <Image
          src="/api-reference/api-zoikotime.png"
          alt=""
          fill
          sizes="(max-width: 1280px) 100vw, 1180px"
          priority
          className="object-cover"
        />

        {/* Scrim keeps the copy legible over the photograph */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30"
          aria-hidden="true"
        />

        <div className="relative px-8 py-10 sm:px-10">

          <p className="text-xl font-bold leading-7 text-white sm:text-2xl">
            ZoikoTime REST API
          </p>

          <p className="mt-2 text-sm font-normal leading-6 text-slate-300">
            Records, policies, evidence &amp; events — governed, versioned,
            explainable.
          </p>

        </div>

      </div>

    </header>
  );
}
