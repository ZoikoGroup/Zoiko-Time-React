import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Layers, MonitorPlay, ShieldCheck, Tag, Users } from "lucide-react";
import SalesForm from "./SalesForm";

const HERO_POINTS = [
  "Expert guidance on pricing and plans",
  "Personalized product demonstration",
  "Support for implementation, security review, and enterprise readiness",
];

const REASONS = [
  { icon: Users, title: "Right plan for your needs" },
  { icon: MonitorPlay, title: "Live, tailored demonstration" },
  { icon: Layers, title: "Implementation and rollout support" },
  { icon: ShieldCheck, title: "Security, compliance and procurement" },
];

export default function SalesHero() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative isolate overflow-hidden bg-[#0d1b3d]">
        {/* Photo, faded into the navy on the left */}
        <div className="absolute inset-y-0 right-0 -z-10 w-full lg:w-[62%]">
          <Image
            src="/contact-sales/Img%20-%20Three%20colleagues%20smiling%20at%20a%20laptop.webp"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 62vw, 100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#0d1b3d]/80 lg:bg-transparent lg:bg-gradient-to-r lg:from-[#0d1b3d] lg:via-[#0d1b3d]/40 lg:to-transparent" />
        </div>

        <div className="mx-auto max-w-[1160px] px-4 pb-14 pt-12 sm:px-6 lg:min-h-[600px] lg:pb-24 lg:pt-20">
          <div className="max-w-[500px] text-white lg:max-w-[440px] xl:max-w-[500px]">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#bfe5cc] bg-[#e6f4ec] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-[#16803c]">
              <Tag className="size-3.5" />
              Sales &amp; Enterprise Inquiry
            </span>

            <h1 className="mt-6 text-[32px] font-bold leading-[1.1] tracking-tight min-[380px]:text-4xl sm:text-5xl xl:text-[56px]">
              Talk to
              <br />
              ZoikoTime Sales
            </h1>

            <p className="mt-5 text-base leading-7 text-slate-200 sm:text-lg">
              Find the right plan, see the platform in action, and discuss a rollout that fits your
              workforce.
            </p>

            <ul className="mt-6 space-y-3">
              {HERO_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3 text-[15px] leading-6 text-slate-100">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#22a04f]">
                    <Check className="size-3 text-white" strokeWidth={3} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#sales-form"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#16803c] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#126b32]"
              >
                Request a Sales Conversation <ArrowRight className="size-4" />
              </a>
              <Link
                href="/pricing"
                className="inline-flex h-12 items-center justify-center rounded-md border border-white/60 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Explore Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHY + FORM ============ */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-[1160px] gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-[minmax(0,1fr)_440px] lg:gap-10 lg:pb-20 xl:grid-cols-[minmax(0,1fr)_520px] xl:gap-16">
          {/* Form: overlaps the hero on desktop */}
          <div className="relative z-10 -mt-6 mx-auto w-full max-w-[560px] lg:order-2 lg:max-w-none lg:-mt-[160px]">
            <SalesForm />
          </div>

          {/* Why talk to our team */}
          <div className="lg:order-1 lg:self-end">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#16803c]">
              Why talk to our team?
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-[40px]">
              A partner for your workforce, not just software.
            </h2>
            <p className="mt-4 max-w-[480px] text-base leading-7 text-slate-600">
              Whether you&apos;re a growing business or a global organization, our team will help
              you choose, plan, and launch ZoikoTime with confidence.
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {REASONS.map(({ icon: Icon, title }) => (
                <li
                  key={title}
                  className="flex items-center gap-4 rounded-lg bg-[#e8f3ee] px-5 py-5 text-[15px] font-semibold leading-snug text-slate-900"
                >
                  <Icon className="size-7 shrink-0 text-[#16803c]" strokeWidth={1.5} />
                  {title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
