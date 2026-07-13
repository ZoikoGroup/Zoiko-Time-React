export default function WorkerNoticeHero() {
  return (
    <section className="w-full bg-white dark:bg-slate-950 px-5">
      <div
        className="
          max-w-[696px]
          mx-auto
          h-auto
          min-h-[288px]
          border-b-2
          border-slate-200
          dark:border-slate-700
          text-center
          pt-10
          pb-8
        "
      >

        {/* Title */}
        <h1
          className="
            text-3xl
            sm:text-4xl
            font-extrabold
            leading-10
            text-slate-900
            dark:text-white
          "
        >
          Worker Transparency Notice
        </h1>


        {/* Description */}
        <p
          className="
            mt-6
            text-base
            leading-7
            font-normal
            text-slate-500
            dark:text-slate-400
          "
        >
          This notice explains, in clear and practical terms, how ZoikoTime
          may process workforce-related information when an organization uses
          ZoikoTime for workforce assurance, time verification, performance
          intelligence, and related purposes.
        </p>


        {/* Effective Date Badge */}
        <div
          className="
            mt-8
            mx-auto
            w-fit
            h-8
            px-4
            flex
            items-center
            justify-center
            rounded-full
            bg-emerald-50
            dark:bg-emerald-900/30
            border
            border-teal-600/20
          "
        >
          <span
            className="
              text-xs
              font-bold
              leading-5
              text-teal-700
              dark:text-teal-400
            "
          >
            Effective May 1, 2026
          </span>
        </div>

      </div>
    </section>
  );
}