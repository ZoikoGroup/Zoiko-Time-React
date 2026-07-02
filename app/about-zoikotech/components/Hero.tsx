export default function Hero() {
  return (
    <section className="bg-[#e1f8f4]/50 px-6 py-24 md:px-54">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block text-xs font-semibold border border-[#00C6A933] tracking-wide text-[#00C6A9] bg-[#00C6A91A] rounded-full px-3 py-1 mb-4">
            ABOUT ZOIKO TECH INC.
          </span>
          <h1 className="text-3xl md:text-[46px] font-bold text-[#0F0F0F] leading-tight mb-5">
            The Technology Company Behind ZoikoTime
          </h1>
          <p className="text-[#0F0F0FA6] text-[17px] mb-4 max-w-115">
            Zoiko Tech Inc. builds governed, AI-powered software
            platforms for workforce intelligence, enterprise operations,
            communications, compliance, cybersecurity, payments, and
            digital infrastructure.
          </p>
          <p className="text-[#0F0F0F73] text-[15px] mb-8">
            ZoikoTime is developed by Zoiko Tech Inc., a technology subsidiary
            of Zoiko Group Inc. The platform reflects Zoiko Tech's commitment
            to enterprise-grade, governed, and responsible software.
          </p>
          <div className="flex flex-wrap gap-4 mb-3">
            <button className="bg-[#009D8C] hover:bg-teal-700 cursor-pointer text-white font-medium px-6 py-3 rounded-[8px] transition-colors">
              Request a ZoikoTime Demo
            </button>
            <button className="border border-[#0F0F0F33] cursor-pointer hover:border-slate-400 text-slate-800 font-medium px-6 py-3 rounded-md transition-colors">
              Start Free Trial
            </button>
          </div>
          <p className="text-xs text-[#0F0F0F59]">
            ↗ Visit ZoikoTech.com for the full corporate story
          </p>
        </div>
        <div>
          <img
            src="/about-zoikotech/hero.png"
            alt="ZoikoTime platform"
          />
        </div>
      </div>
    </section>
  );
}
