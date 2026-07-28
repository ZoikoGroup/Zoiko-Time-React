import Image from "next/image";

export default function ZoikoEcosystem() {
  return (
    <section className="bg-slate-50 px-4 py-10 md:px-6 lg:px-8 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl rounded-3xl border border-gray-200 bg-white p-8 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left */}
          <div>
            <Image
              src="/product/ecosystem-main.png"
              alt="Zoiko Ecosystem"
              width={322}
              height={39}
              className="mb-6 h-auto"
            />

            <h2 className="text-3xl font-bold leading-9 text-sky-950 dark:text-white">
              Part of the Zoiko ecosystem
            </h2>

            <p className="mt-6 text-lg leading-7 text-gray-500 dark:text-gray-300">
              ZoikoTime integrates with Zoiko Sema—our independent AI platform—
              bringing intelligence to workforce data while preserving Zoiko
              Sema&apos;s independent platform identity.
            </p>

            <div className="mt-8 inline-flex items-center gap-2 font-bold text-slate-600 dark:text-gray-200">
  <span>Learn more about Zoiko Sema</span>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 12h14M13 5l7 7-7 7"
    />
  </svg>
</div>
          </div>

          {/* Right */}
          <div className="flex items-center justify-center gap-8">
            {/* ZoikoTime Card */}
            <div className="w-48 rounded-2xl border-2 border-gray-100 bg-slate-50 p-6 text-center shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
              <Image
                src="/product/zoikotime-logo.png"
                alt="ZoikoTime"
                width={120}
                height={48}
                className="mx-auto mb-6 h-auto"
              />

              <h3 className="text-sm font-bold text-sky-950 dark:text-white">
                ZoikoTime
              </h3>

              <p className="mt-2 text-[10px] uppercase leading-4 tracking-wide text-gray-400">
                Workforce Truth
                <br />
                Infrastructure
              </p>
            </div>

            {/* Connection */}
            <div className="hidden w-24 border-t border-gray-300 lg:block"></div>

            {/* Zoiko Sema Card */}
            <div className="w-48 rounded-2xl border-2 border-gray-100 bg-blue-50 p-6 text-center shadow-sm dark:border-neutral-700 dark:bg-sky-950/20">
              <Image
                src="/product/zoiko-sema-logo.png"
                alt="Zoiko Sema"
                width={170}
                height={24}
                className="mx-auto mb-6 h-auto"
              />

              <h3 className="text-sm font-bold uppercase text-sky-950 dark:text-white">
                Zoiko Sema
              </h3>

              <p className="mt-2 text-[10px] uppercase leading-4 tracking-wide text-gray-400">
                Independent AI
                <br />
                Platform
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}