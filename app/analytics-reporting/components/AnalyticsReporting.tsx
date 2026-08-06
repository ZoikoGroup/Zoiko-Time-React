// app/components/AnalyticsReporting.tsx

import Image from "next/image";

export default function AnalyticsReporting() {
  return (
    <section className="w-full px-4 py-16 sm:px-8 lg:px-32">

      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-8">


        {/* Heading */}
        <div className="flex w-full max-w-[800px] flex-col items-center gap-4 text-center">

          <p className="text-xs font-bold uppercase tracking-wider text-emerald-500">
            Integration & Warehouse Boundaries
          </p>


          <h2 className="
            text-3xl 
            font-bold 
            leading-tight 
            text-slate-900
            dark:text-white
            sm:text-4xl
          ">
            Analytics Consumes Governed Records.
            <br className="hidden sm:block" />
            It Does Not Override Their Source.
          </h2>


          <p className="
            max-w-[650px]
            text-base
            leading-7
            text-slate-600
            dark:text-slate-300
          ">
            Each authority below owns its domain. Analytics reads from them and
            reports honestly about their state — it never becomes a second
            source of truth.
          </p>


        </div>



        {/* Image */}
        <div
          className="
          relative
          w-full
          overflow-hidden
          rounded-2xl
          border
          border-slate-200
          dark:border-slate-700
          "
        >

          <Image
            src="/analytics-reporting.png"
            alt="Analytics reporting and warehouse boundaries"
            width={1124}
            height={562}
            className="
              h-auto
              w-full
              object-cover
            "
            priority
          />

        </div>


      </div>

    </section>
  );
}