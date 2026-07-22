"use client";
import Link from "next/link";

export default function CategoryDefiningCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-slate-900 dark:to-emerald-950 py-16">

      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600" />


      <div className="max-w-[1000px] mx-auto px-6 text-center">


        {/* Label */}
        <p className="text-xs font-bold uppercase tracking-wider text-teal-600">
          Category-Defining
        </p>



        {/* Heading */}
        <h2 className="mt-6 text-4xl md:text-5xl font-extrabold leading-[48px]">

          <span className="text-slate-900 dark:text-white">
            See Exactly How{" "}
          </span>

          <span className="text-teal-600">
            ZoikoTime Works
          </span>

        </h2>



        {/* Description */}
        <p className="mt-4 text-base md:text-lg leading-7 text-slate-500 dark:text-slate-400">

          Explore the Explainability Engine, request a live demo, or download the
          <br className="hidden md:block" />
          Transparency Guide — everything you need to understand, evaluate, and
          trust ZoikoTime&apos;s system behaviour.

        </p>



        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">


          <Link
  href="/transparency-center#explore-explainability-engine"
  className="
    inline-flex
    h-12
    px-8
    items-center
    justify-center
    rounded-md
    bg-teal-600
    whitespace-nowrap
    text-base
    font-semibold
    text-white
    shadow-[0px_4px_14px_0px_rgba(0,157,140,0.28)]
    transition
    hover:bg-teal-700
  "
>
  Explore Explainability Engine
</Link>



          <Link
  href="/request-a-demo"
  className="
    inline-flex
    h-12
    px-10
    items-center
    justify-center
    whitespace-nowrap
    rounded-md
    border
    border-slate-200
    bg-white
    text-base
    font-medium
    text-slate-700
    transition
    hover:bg-slate-50
    dark:border-slate-700
    dark:bg-slate-900
    dark:text-white
    dark:hover:bg-slate-800
  "
>
  Request Demo
</Link>


        </div>



      </div>


    </section>
  );
}