"use client";

const guides = [
  {
    title: "Authentication & keys",
    description: (
      <>
        Create scoped keys, rotate secrets, and apply
        <br className="hidden sm:block" /> least privilege.
      </>
    ),
    image: "/development-documentation/authentication.png",
  },
  {
    title: "Working with records",
    description: (
      <>
        Fetch, filter, correct, and read evidence on time
        <br className="hidden sm:block" /> records.
      </>
    ),
    image: "/development-documentation/records.png",
  },
  {
    title: "Webhooks & events",
    description: (
      <>
        Subscribe to events and verify signed payloads
        <br className="hidden sm:block" /> reliably.
      </>
    ),
    image: "/development-documentation/webhooks.png",
  },
];

export default function Guides() {
  return (
    <section className="w-full bg-gray-50 py-10 dark:bg-slate-950 sm:py-14 lg:py-16">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 xl:px-14">

        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <div className="text-xs font-semibold uppercase leading-5 tracking-[0.18em] text-teal-600 dark:text-teal-400">
            Guides
          </div>

          <h2 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-slate-800 dark:text-white sm:text-4xl">
            Guides &amp; walkthroughs
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-gray-500 dark:text-slate-400 sm:text-base">
            Task-focused guides for the most common integrations.
          </p>
        </div>

        {/* Guide Cards */}
        <div className="mx-auto mt-10 grid w-full max-w-[1060px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <article
              key={guide.title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_6px_18px_rgba(14,31,61,0.05),0_1px_3px_rgba(14,31,61,0.06)] dark:border-slate-700 dark:bg-slate-900 dark:shadow-none"
            >
              {/* Image */}
              <div className="relative aspect-[338/180] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="px-[19px] py-5">
                <h3 className="text-base font-semibold leading-6 text-slate-800 dark:text-white">
                  {guide.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-gray-500 dark:text-slate-400">
                  {guide.description}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}