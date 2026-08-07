import Image from "next/image";

const capabilities = [
  {
    visual: "/improve-payroll-accuracy/Approvals.png",
    caption: "Approvals completed ahead of the payroll cutoff",
    title: "Approvals finished before the cutoff",
    description:
      "A live readiness view shows what's approved, pending, needs input, or blocked — so managers clear the queue before payroll runs, not after.",
    points: [
      "Readiness by approved / pending / blocked",
      "Cutoff and deadline visibility",
      "Manager approval queues",
    ],
  },
  {
    visual: "/improve-payroll-accuracy/Corrections.png",
    caption: "A correction presented as a reviewable version",
    title: "Corrections that keep a full trail",
    description:
      "Every correction is a reviewable version with author, reason, prior value, and reapproval — never a silent overwrite — so disputes and audits are easy to answer.",
    points: [
      "Version history, not overwrites",
      "Reason and actor on every change",
      "Reapproval after post-approval edits",
    ],
  },
  {
    visual: "/improve-payroll-accuracy/Clean.png",
    caption: "Validated records exporting cleanly into payroll",
    title: "Clean, validated exports",
    description:
      "Approved records are validated against your mapping and delivered to payroll, with acknowledgment and reconciliation — so fewer records bounce back.",
    points: [
      "Mapping validation before export",
      "Delivery acknowledgment & reconciliation",
      "Blocked records held out of export",
    ],
  },
];

export default function HowItHelps() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <div className="flex w-full flex-col items-center gap-3">

          <p className="text-center text-xs font-semibold uppercase leading-5 tracking-widest text-[#10A28D]">
            How It Helps
          </p>

          <h2 className="text-center text-3xl font-bold leading-[1.11] text-[#0E1F3D] lg:whitespace-nowrap dark:text-white sm:text-4xl">
            Where ZoikoTime improves accuracy
          </h2>

          <p className="max-w-[620px] text-center text-base font-normal leading-7 text-[#6B7785] dark:text-slate-400">
            Each capability targets a specific place payroll data goes wrong —
            shown with a product visual.
          </p>

        </div>

        {/* Capability Rows */}
        <div className="mx-auto mt-10 flex w-full max-w-[1180px] flex-col gap-10">

          {capabilities.map((capability, index) => {
            const flipped = index % 2 === 1;

            return (
              <div
                key={capability.title}
                className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14"
              >

                {/* Visual */}
                <div className={flipped ? "lg:order-2" : undefined}>

                  <Image
                    src={capability.visual}
                    alt=""
                    width={640}
                    height={461}
                    className="h-auto w-full"
                  />

                  <p className="-mt-3 text-center text-xs font-normal leading-5 text-[#6B7785] sm:-mt-6 lg:-mt-8 dark:text-slate-400">
                    {capability.caption}
                  </p>

                </div>

                {/* Copy */}
                <div className={flipped ? "lg:order-1" : undefined}>

                  <h3 className="text-2xl font-bold leading-8 text-[#0E1F3D] dark:text-white">
                    {capability.title}
                  </h3>

                  <p className="mt-3 max-w-[560px] text-sm font-normal leading-6 text-[#6B7785] dark:text-slate-400">
                    {capability.description}
                  </p>

                  <ul className="mt-5 flex flex-col gap-2.5">
                    {capability.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">

                        <Image
                          src="/improve-payroll-accuracy/check-teal.png"
                          alt=""
                          width={14}
                          height={14}
                          className="mt-[3px] h-3.5 w-3.5 shrink-0 object-contain"
                        />

                        <span className="text-xs font-medium leading-5 text-[#0E1F3D] dark:text-slate-200">
                          {point}
                        </span>

                      </li>
                    ))}
                  </ul>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
