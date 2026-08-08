import Image from "next/image";

export default function GovernedBanner() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 pb-14 sm:px-8 lg:px-12 lg:pb-16">

        <div className="relative overflow-hidden rounded-2xl bg-slate-900">

          {/* Background */}
          <Image
            src="/integration-directory/governed-banner.png"
            alt=""
            fill
            sizes="(max-width: 1280px) 100vw, 1180px"
            className="object-cover"
          />

          {/* Scrim keeps the copy legible over the photograph */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40"
            aria-hidden="true"
          />

          <div className="relative px-8 py-8 sm:px-10">

            <h2 className="text-base font-bold leading-6 text-white sm:text-lg">
              Every connection is governed — not just plugged in.
            </h2>

            <p className="mt-2 text-xs font-normal leading-5 text-slate-300">
              Mapped, tested, activated, and reconciled, with evidence preserved
              on both sides.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
