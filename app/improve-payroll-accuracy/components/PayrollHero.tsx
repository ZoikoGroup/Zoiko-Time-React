import Link from "next/link";
import Image from "next/image";

const assurances = ["Human review", "Complete change history", "Clean exports"];

const rows = [
  { label: "w-14", tone: "bg-[#E8F5F2]", dot: "bg-[#10A28D]" },
  { label: "w-20", tone: "bg-[#E8F5F2]", dot: "bg-[#10A28D]" },
  { label: "w-12", tone: "bg-[#FFF3D6]", dot: "bg-[#E0A800]" },
];

export default function PayrollHero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white to-[#F6F9F9] dark:from-slate-950 dark:to-slate-900">

      {/* Teal Glow */}
      <div
        className="pointer-events-none absolute left-1/4 top-[-160px] h-96 w-[760px] max-w-full bg-[radial-gradient(ellipse_at_center,rgba(16,162,141,0.10),rgba(16,162,141,0)_70%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[1280px] px-5 pb-20 pt-16 sm:px-8 lg:px-12">

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14">

          {/* Left Content */}
          <div className="flex flex-col">

            <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-[#10A28D]">
              Improve Payroll Accuracy
            </p>

            <h1 className="mt-3.5 max-w-[500px] text-4xl font-bold leading-[1.1] text-[#0E1F3D] dark:text-white sm:text-5xl">
              Fewer payroll errors start with{" "}
              <span className="text-[#10A28D]">trustworthy time data</span>
            </h1>

            <p className="mt-7 max-w-[560px] text-base font-normal leading-7 text-[#6B7785] dark:text-slate-400">
              ZoikoTime helps organizations improve the accuracy of the time,
              attendance, break, and approval records that reach payroll — with
              deterministic rules, human review, complete change history, and
              clean, validated exports.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">

              <Link
                href="/start-free"
                className="inline-flex min-h-11 items-center justify-center rounded-[10px] bg-[#10A28D] px-6 py-3.5 text-base font-semibold leading-4 text-white shadow-[0px_6px_16px_0px_rgba(16,162,141,0.28)] transition hover:bg-[#0B8675]"
              >
                Start Free
              </Link>

              <Link
                href="/request-enterprise-demo"
                className="inline-flex min-h-11 items-center justify-center rounded-[10px] border border-[#D2DAE2] bg-white px-6 py-3.5 text-base font-semibold leading-4 text-[#0E1F3D] transition hover:border-[#0E1F3D] dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-slate-500"
              >
                Request Enterprise Demo
              </Link>

            </div>

            {/* Assurance Pills */}
            <div className="mt-7 flex flex-wrap gap-3">
              {assurances.map((assurance) => (
                <span
                  key={assurance}
                  className="inline-flex items-center gap-2.5 rounded-[30px] border border-[#C9EAE2] bg-white px-4 py-2 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05),0px_1px_3px_0px_rgba(14,31,61,0.06)] dark:border-slate-800 dark:bg-slate-900"
                >
                  <Image
                    src="/improve-payroll-accuracy/check-teal.png"
                    alt=""
                    width={16}
                    height={16}
                    className="h-4 w-4 shrink-0 object-contain"
                  />
                  <span className="text-xs font-semibold leading-5 text-[#0E1F3D] dark:text-white">
                    {assurance}
                  </span>
                </span>
              ))}
            </div>

          </div>

          {/* Product Visual */}
          <div className="flex flex-col items-center">

            <div
              className="relative w-full max-w-[515px] overflow-hidden rounded-[20px] border border-[#C9EAE2] bg-gradient-to-br from-[#E8F5F2] to-white to-70% shadow-[0px_24px_50px_0px_rgba(14,31,61,0.14)] dark:border-slate-800 dark:from-slate-900 dark:to-slate-950"
              aria-hidden="true"
            >

              {/* Ambient Shapes */}
              <span className="pointer-events-none absolute -top-6 right-[-8%] h-64 w-64 rounded-full bg-[#10A28D]/10" />
              <span className="pointer-events-none absolute bottom-[-14%] left-[5%] h-40 w-40 rounded-full bg-[#0E1F3D]/5" />

              <div className="relative flex flex-col gap-4 p-6 sm:flex-row sm:gap-3 sm:pb-9 sm:pl-[60px] sm:pr-16 sm:pt-[60px]">

                {/* Record Card */}
                <div className="min-w-0 flex-1 rounded-xl border border-[#DCE6E4] bg-gradient-to-b from-white to-[#F6F9F9] p-5 dark:border-slate-800 dark:from-slate-900 dark:to-slate-950">

                  <span className="block h-3 w-28 rounded-full bg-[#0E1F3D] dark:bg-slate-200" />
                  <span className="mt-2.5 block h-2 w-20 rounded-full bg-[#33465F]/40" />

                  <div className="mt-5">
                    {rows.map((row) => (
                      <div
                        key={row.label}
                        className="flex items-center justify-between gap-3 border-t border-[#DCE6E4] py-3.5 dark:border-slate-800"
                      >
                        <span
                          className={`block h-2 rounded-full bg-[#33465F]/50 ${row.label}`}
                        />
                        <span
                          className={`flex h-3.5 w-11 shrink-0 items-center justify-center rounded-[3px] ${row.tone}`}
                        >
                          <span
                            className={`h-[5px] w-[5px] rounded-full ${row.dot}`}
                          />
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Payroll-ready Bar */}
                  <div className="mt-2.5 flex items-center justify-between gap-3 rounded-lg bg-[#0E1F3D] px-4 py-3">

                    <span className="min-w-0">
                      <span className="block text-[10.26px] font-normal leading-4 text-slate-400">
                        Payroll-ready
                      </span>
                      <span className="block text-sm font-bold leading-5 text-white">
                        Approved &amp; exported
                      </span>
                    </span>

                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#10A28D]">
                      <Image
                        src="/improve-payroll-accuracy/check-white.png"
                        alt=""
                        width={12}
                        height={12}
                        className="h-3 w-3 object-contain"
                      />
                    </span>

                  </div>

                </div>

                {/* Floating Cards */}
                <div className="flex shrink-0 flex-row justify-between gap-3 sm:w-[147px] sm:flex-col sm:justify-between sm:py-[22px]">

                  <Image
                    src="/improve-payroll-accuracy/chart-card.svg"
                    alt=""
                    width={130}
                    height={104}
                    className="h-auto w-[112px] sm:w-[130px]"
                  />

                  <Image
                    src="/improve-payroll-accuracy/approved-card.svg"
                    alt=""
                    width={147}
                    height={80}
                    className="h-auto w-[126px] sm:w-[147px]"
                  />

                </div>

              </div>

            </div>

            <p className="mt-4 max-w-[515px] text-center text-xs font-normal leading-4 text-[#6B7785] dark:text-slate-400">
              Illustrative product visual — replace with licensed photography if
              preferred.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
