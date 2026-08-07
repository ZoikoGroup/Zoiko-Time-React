import Image from "next/image";

export default function AccountabilityBanner() {
  return (
    <section className="w-full bg-white py-10 dark:bg-slate-950 lg:py-12">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-6">
        <div className="relative min-h-[380px] overflow-hidden rounded-2xl bg-slate-900 shadow-[0px_10px_30px_0px_rgba(14,31,61,0.10)] sm:min-h-0 sm:aspect-[1132/432]">
          <Image
            src="/shift-integrity-controls/black-box.png"
            alt=""
            aria-hidden="true"
            fill
            sizes="(max-width: 1180px) 100vw, 1132px"
            className="object-cover"
          />

          {/* Darken the lower band so the caption stays legible */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/30 to-transparent"
            aria-hidden="true"
          />

          <div className="absolute inset-x-0 bottom-0 px-6 pb-8 sm:px-10">
            <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-400">
              Reviewed by people, not left to a black box
            </p>

            <p className="mt-2 max-w-[640px] text-base font-medium leading-6 text-white">
              Every exception on this dashboard was resolved by a named reviewer
              — never an automated decision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
