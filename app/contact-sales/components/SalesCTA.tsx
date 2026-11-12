import Image from "next/image";
import { ArrowRight, ChartColumnIncreasing } from "lucide-react";

export default function SalesCTA() {
  return (
    <section className="bg-white px-4 pb-16 sm:px-6 lg:pb-20">
      <div className="relative isolate mx-auto max-w-[1300px] overflow-hidden rounded-2xl">
        <Image
          src="/contact-sales/photo-1600880292203-757bb62b4baf.webp"
          alt=""
          fill
          sizes="(min-width: 1300px) 1300px, 100vw"
          className="-z-10 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1b2a3a]/90 via-[#1b2a3a]/75 to-[#1b2a3a]/55" />

        <div className="flex flex-col gap-8 px-6 py-12 sm:px-12 lg:flex-row lg:items-center lg:justify-between lg:px-16 lg:py-16 xl:px-24">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-7">
            <span className="relative flex h-12 w-16 shrink-0 items-end justify-center rounded-md border-2 border-white/90 pb-1.5">
              <ChartColumnIncreasing className="size-7 text-[#3ddc84]" strokeWidth={2.25} />
              <span className="absolute -bottom-2 left-1/2 h-1 w-20 -translate-x-1/2 rounded-full bg-white/90" />
            </span>
            <span aria-hidden="true" className="hidden h-14 w-px bg-white/40 sm:block" />
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-[28px]">
                Ready to see ZoikoTime in action?
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-200 sm:text-base">
                Speak with our team and discover how ZoikoTime can work for you.
              </p>
            </div>
          </div>

          <a
            href="#sales-form"
            className="inline-flex h-12 shrink-0 items-center justify-center gap-2 w-full sm:w-auto self-start rounded-md border border-[#3ddc84]/70 bg-[#0f3b2a]/70 px-6 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-[#16803c] lg:self-auto"
          >
            Request a Sales Conversation <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
