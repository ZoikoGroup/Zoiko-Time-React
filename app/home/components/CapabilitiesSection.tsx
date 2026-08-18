import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const items = [
  "Distributed workforces at scale",
  "Regulated and audit-heavy environments",
  "Global payroll and contractor operations",
  "Teams requiring defensible records",
];

export default function CapabilitiesSection() {
  return (
    <section className="bg-slate-950 px-4 py-16 dark:bg-black sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="order-2 overflow-hidden rounded-3xl shadow-2xl lg:order-1">
          <Image
            className="h-72 w-full object-cover sm:h-[400px] lg:h-[557px]"
            width={563}
            height={844}
            src="/home/image 79.png"
            alt="Team member working"
          />
        </div>

        <div className="order-1 flex flex-col gap-4 lg:order-2">
          <span className="text-xs font-bold uppercase tracking-wide text-emerald-400">
            Enterprise-Ready Capabilities
          </span>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
            From Verified Time Capture to Workforce Truth Infrastructure
          </h2>
          <p className="max-w-xl pt-2 text-lg leading-7 text-white/70">
            ZoikoTime combines deterministic classification, evidence-backed
            records, and human review to help organizations manage distributed
            work with trust, compliance, and operational control.
          </p>

          <ul className="flex flex-col gap-4 pt-4">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-emerald-400" />
                <span className="text-base font-bold text-white">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4 pt-6 sm:flex-row">
            <a
  href="https://getzoikotime.com/start"
  className="inline-block rounded-lg bg-emerald-400 px-8 py-4 text-base font-bold text-white transition-colors hover:bg-emerald-500"
>
  Explore The Platform
</a>
            <Link
  href="/request-a-demo"
  className="flex items-center justify-center gap-2 rounded-md border border-emerald-400 px-8 py-4 text-base font-bold text-emerald-400 transition-colors hover:bg-emerald-400/10"
>
  Request Demo
  <ArrowRight className="size-4" />
</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
