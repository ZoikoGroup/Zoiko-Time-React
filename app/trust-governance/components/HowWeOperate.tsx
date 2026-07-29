import Image from "next/image";

const principles = [
  {
    icon: "/trust-goverance/purpose.png",
    title: "Purpose Limitation",
    description:
      "We use data only for stated, legitimate purposes clearly defined in our agreements.",
  },
  {
    icon: "/trust-goverance/data.png",
    title: "Data Minimization",
    description:
      "We collect the minimum data necessary for operations, avoiding toxic data lakes.",
  },
  {
    icon: "/trust-goverance/evidence.png",
    title: "Evidence First",
    description:
      "Every claim is backed by telemetry, logs, or external audits—never just a handshake.",
  },
];

export default function HowWeOperate() {
  return (
    <section className="bg-slate-950 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[60px] lg:leading-[1.05]">
              How we operate
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-300">
              Principles that guide our decisions and daily operations.
              These aren't just words; they are built into the
              architecture of our business.
            </p>

            <div className="mt-12 space-y-8">
              {principles.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4"
                >
                  {/* Icon */}
                  <div className="mt-1 h-7 w-7 shrink-0">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={28}
                      height={28}
                      className="h-7 w-7 object-contain"
                    />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-md text-base leading-7 text-neutral-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="relative flex justify-center lg:justify-end">

                        <div className="relative w-full max-w-[571px]">
              {/* Main Image */}
              <Image
                src="/trust-goverance/HowWeOperate.png"
                alt="How We Operate"
                width={571}
                height={469}
                priority
                className="w-full rounded-2xl object-cover"
              />

              {/* Floating Audit Card */}
              <div className="absolute -bottom-8 left-1/2 w-[320px] -translate-x-1/2 rounded-xl bg-[#44B97A] p-8 shadow-2xl lg:bottom-6 lg:right-6 lg:left-auto lg:translate-x-0">
                <h3 className="text-2xl font-bold text-slate-950">
                  100% Audit Readiness
                </h3>

                <p className="mt-2 text-sm text-slate-950/70">
                  Continuous monitoring enabled
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}