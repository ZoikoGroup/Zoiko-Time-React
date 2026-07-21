import Image from "next/image";
import { Check } from "lucide-react";

const data = [
  "Selective partner review",
  "Enterprise customer value",
  "Implementation quality",
  "Responsible workforce data use",
  "Technology ecosystem alignment",
];

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-[#F6F9F9] dark:from-slate-950 dark:to-slate-900 px-6 py-14 md:py-20 lg:px-20 xl:px-32">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block uppercase text-xs font-semibold tracking-[2px] text-[#10A28D] dark:text-[#34D399] mb-4">
              ZoikoTime Partners
            </span>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900 dark:text-white mb-5">
              Partner with ZoikoTime to scale{" "}
              <span className="text-[#10A28D] dark:text-[#34D399]">
                trusted workforce intelligence
              </span>
            </h1>

            <p className="text-[17px] leading-8 text-slate-600 dark:text-slate-300 mb-5">
              ZoikoTime works with trusted organizations across technology,
              implementation, consulting, payroll, HR, finance, legal,
              operations, and enterprise ecosystems to help customers deploy
              workforce intelligence responsibly.
            </p>

            <div className="bg-[#F6F9F9] dark:bg-slate-800 border-l-4 border-[#10A28D] rounded-r-lg p-4 mb-8">
              <p className="text-[15px] leading-7 text-slate-600 dark:text-slate-300">
                As organizations move beyond basic time tracking, they need
                stronger workforce records, payroll and timesheet confidence,
                client billing visibility, implementation discipline,
                responsible AI, and governance-ready reporting. ZoikoTime
                partners with organizations that can help customers realize that
                value.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-3">
              <button className="bg-[#009D8C] hover:bg-teal-700 shadow-[0_4px_20px_rgba(0,157,140,0.4)] cursor-pointer text-white font-medium px-6 py-3 rounded-lg transition-colors">
                Contact Partnerships
              </button>

              <button className="border border-[#009D8C] dark:border-[#34D399] hover:bg-teal-100 dark:hover:bg-slate-800 cursor-pointer text-slate-800 dark:text-white font-medium px-6 py-3 rounded-lg transition-colors">
                Request a ZoikoTime Demo
              </button>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 mt-10">
              Built by Zoiko Tech Inc., a technology subsidiary of Zoiko Group
              Inc.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/partners/hero.png"
              alt="ZoikoTime platform"
              width={650}
              height={650}
              priority
              className="w-full max-w-xl h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Tags Section */}
      <section className="bg-white dark:bg-slate-950 px-6 py-12 lg:px-20 xl:px-32">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 rounded-full border border-[#C9EAE2] dark:border-slate-700 bg-white dark:bg-slate-900 px-5 py-2 shadow-sm"
              >
                <Check className="h-4 w-4 text-[#10A28D] dark:text-[#34D399]" />
                <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}