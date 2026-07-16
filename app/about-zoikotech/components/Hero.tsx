export default function Hero() {
  return (
    <section className="bg-[#e1f8f4]/50 dark:bg-gray-900 px-6 py-16 md:py-24 md:px-12 lg:px-20 xl:px-32 transition-colors duration-300">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <span className="inline-block rounded-full border border-[#00C6A933] bg-[#00C6A91A] px-3 py-1 text-xs font-semibold tracking-wide text-[#00C6A9] dark:border-teal-500/40 dark:bg-teal-500/10 dark:text-teal-300">
            ABOUT ZOIKO TECH INC.
          </span>

          <h1 className="mt-5 text-3xl font-bold leading-tight text-[#0F0F0F] dark:text-white md:text-[46px]">
            The Technology Company Behind ZoikoTime
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-[#0F0F0FA6] dark:text-gray-300 md:text-[17px]">
            Zoiko Tech Inc. builds governed, AI-powered software platforms for
            workforce intelligence, enterprise operations, communications,
            compliance, cybersecurity, payments, and digital infrastructure.
          </p>

          <p className="mt-5 text-[15px] leading-7 text-[#0F0F0F73] dark:text-gray-400">
            ZoikoTime is developed by Zoiko Tech Inc., a technology subsidiary
            of Zoiko Group Inc. The platform reflects Zoiko Tech&apos;s
            commitment to enterprise-grade, governed, and responsible software.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-lg bg-[#009D8C] px-6 py-3 font-medium text-white transition hover:bg-teal-700">
              Request a ZoikoTime Demo
            </button>

            <button className="rounded-lg border border-[#0F0F0F33] px-6 py-3 font-medium text-[#0F0F0F] transition hover:border-gray-500 dark:border-gray-600 dark:text-white dark:hover:border-gray-400">
              Start Free Trial
            </button>
          </div>

          <p className="mt-5 text-xs text-[#0F0F0F59] dark:text-gray-400">
            ↗ Visit ZoikoTech.com for the full corporate story
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/about-zoikotech/hero.png"
            alt="ZoikoTime platform"
            className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}