import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AntiSurveillanceCommitment() {
  return (
    <section className="bg-slate-50 py-16 dark:bg-[#0B1120] md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-xl border border-neutral-200/70 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 lg:p-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_1fr]">
            {/* Left Image */}
            <div>
              <Image
                src="/trust-goverance/anti-surveillance.png"
                alt="Anti Surveillance Commitment"
                width={631}
                height={316}
                priority
                className="h-auto w-full rounded-lg object-cover"
              />
            </div>

            {/* Right Content */}
            <div>
              <h2 className="text-3xl font-semibold leading-tight text-slate-950 dark:text-white">
                Our Anti-Surveillance
                <br />
                Commitment
              </h2>

              <p className="mt-4 text-base leading-7 text-zinc-700 dark:text-slate-300">
                ZoikoTime does not sell, rent, trade, or share personal data.
                We do not track you across websites or applications. We do not
                use dark patterns or manipulate choices. You are not profiled.
                You are not scored. You are not surveilled.
              </p>

              {/* Button */}
              {/* <button
                type="button"
                aria-label="Read Anti-Surveillance Principles"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-[#44B97A] transition-colors hover:text-[#3EAA70]"
              >
                 Read Anti-Surveillance Principles 

                <ArrowRight
                  className="h-4 w-4"
                  strokeWidth={2.5}
                />
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
