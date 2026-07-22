import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-blue-950 transition-colors">
      <div className="max-w-4xl mx-auto px-4 text-center">

        <p className="text-base font-semibold uppercase tracking-[2.5px] text-teal-500">
          Plan Your Rollout
        </p>


        <h2 className="mt-8 text-3xl md:text-4xl font-bold leading-tight text-white">
          Ready to plan a governed ZoikoTime
          <br className="hidden md:block" />
          rollout?
        </h2>


        <p className="mt-6 text-base leading-6 text-white/80">
          Talk with the ZoikoTime team about your scope, governance needs,
          <br className="hidden md:block" />
          training, and launch readiness.
        </p>


        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          {/* Contact Sales */}
<Link
  href="/contact-sales"
  className="
    inline-flex
    h-11
    items-center
    justify-center
    rounded-[10px]
    bg-teal-600
    px-7
    text-base
    font-semibold
    text-white
    shadow-[0_6px_16px_rgba(16,162,141,0.28)]
    transition
    hover:bg-teal-700
  "
>
  Contact Sales
</Link>

{/* Get a Demo */}
<Link
  href="/request-a-demo"
  className="
    inline-flex
    h-11
    items-center
    justify-center
    rounded-[10px]
    border
    border-white/30
    bg-white/10
    px-7
    text-base
    font-semibold
    text-white
    transition
    hover:bg-white/20
  "
>
  Get a Demo
</Link>

        </div>

      </div>
    </section>
  );
}