
import Link from "next/link";
export default function Cta() {
  return (
    <section
      className="
        w-full
        border-t
        border-blue-100
        bg-slate-50
        dark:border-slate-800
        dark:bg-slate-900
      "
    >
      <div
        className="
          mx-auto
          flex
          min-h-[240px]
          w-full
          max-w-[1280px]
          flex-col
          items-start
          justify-between
          gap-8
          px-5
          py-12
          sm:px-8
          lg:min-h-[240px]
          lg:flex-row
          lg:items-center
          lg:px-8
          lg:py-0
        "
      >
        {/* LEFT CONTENT */}
        <div className="w-full lg:max-w-[505px]">
          <h2
            className="
              text-2xl
              font-semibold
              leading-8
              text-slate-950
              sm:text-3xl
              sm:leading-10
              dark:text-white
            "
          >
            Ready to find the right solution?
          </h2>

          <p
            className="
              mt-2
              text-base
              font-normal
              leading-7
              text-zinc-700
              sm:text-lg
              dark:text-zinc-300
            "
          >
            Explore the full portfolio, start a free trial, or talk to an
            expert.
          </p>
        </div>

        {/* BUTTONS */}
        <div
          className="
            flex
            w-full
            flex-col
            gap-4
            sm:flex-row
            lg:w-auto
            lg:min-w-[660px]
          "
        >
          <Link
  href="/start-free"
  className="
    flex
    min-h-[72px]
    flex-1
    flex-col
    items-center
    justify-center
    rounded-lg
    border
    border-neutral-300
    bg-[#44B97A]
    px-6
    py-3
    text-center
    shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]
    transition
    hover:bg-[#3EAA70]
  "
>
  <span className="text-base font-semibold leading-6 text-white">
    Start Free
  </span>

  <span className="pt-1 text-xs font-normal leading-4 text-white">
    30-day free trial
  </span>
</Link>

<Link
  href="/request-a-demo"
  className="
    flex
    min-h-[72px]
    flex-1
    flex-col
    items-center
    justify-center
    rounded-lg
    border
    border-neutral-300
    bg-white
    px-6
    py-3
    text-center
    shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]
    transition
    hover:bg-slate-50
    dark:border-slate-700
    dark:bg-slate-800
    dark:hover:bg-slate-700
  "
>
  <span className="text-base font-semibold leading-6 text-slate-950 dark:text-white">
    Request Enterprise Demo
  </span>

  <span className="pt-1 text-xs font-normal leading-4 text-zinc-700 dark:text-zinc-300">
    Talk to an expert
  </span>
</Link>
        </div>
      </div>
    </section>
  );
}