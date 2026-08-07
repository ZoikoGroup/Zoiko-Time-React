import Image from "next/image";

const steps = [
  {
    icon: "/enterprise-integrations/Record-sent.svg",
    title: "Record sent",
    meta: "Payroll input · v3 · run #A-2291 · 18:30",
  },
  {
    icon: "/enterprise-integrations/Delivery-acknowledged.svg",
    title: "Delivery acknowledged",
    meta: "Destination ack · reconciled · 18:31",
  },
  {
    icon: "/enterprise-integrations/Exception-quarantined.svg",
    title: "Exception quarantined",
    meta: "Unmapped value · owner assigned · neutral state",
  },
  {
    icon: "/enterprise-integrations/Correction-propagated.svg",
    title: "Correction propagated",
    meta: "Worker correction · versioned · re-delivered",
  },
  {
    icon: "/enterprise-integrations/Evidence-recorded.svg",
    title: "Evidence recorded",
    meta: "Mapping · approval · delivery · reconciliation linked",
  },
];

export default function DeliveryEvidence() {
  return (
    <section className="w-full bg-[#F6F9F9] py-16 dark:bg-slate-900 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
            Operate &amp; Reconcile
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-800 dark:text-white sm:text-4xl">
            Delivery you can prove — and correct
          </h2>
          <p className="mx-auto mt-4 max-w-[680px] text-base font-normal leading-7 text-gray-500 dark:text-slate-400">
            Connection health becomes accountable work, and every record can be
            traced from send to acknowledgement to correction.
          </p>
        </div>

        {/* Timeline — continuous rail behind the nodes */}
        <div className="relative mx-auto mt-10 max-w-[780px]">
          <span
            className="absolute bottom-6 left-[13px] top-6 w-0.5 bg-emerald-100 dark:bg-slate-700"
            aria-hidden="true"
          />

          <ol className="relative space-y-2.5">
            {steps.map(({ icon, title, meta }) => (
              <li key={title} className="flex items-center gap-6">
                <span className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-[#3FB97A] bg-white dark:bg-slate-800">
                  <Image
                    src={icon}
                    alt=""
                    aria-hidden="true"
                    width={18}
                    height={18}
                    className="h-3.5 w-3.5"
                  />
                </span>

                <div className="flex-1 rounded-xl bg-white px-4 py-3 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] dark:bg-slate-800">
                  <h3 className="text-sm font-bold leading-5 text-slate-800 dark:text-white">
                    {title}
                  </h3>
                  <p className="mt-0.5 text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
                    {meta}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mx-auto mt-10 max-w-[900px] rounded-xl bg-[#EAF6F3] px-6 py-4 text-center dark:bg-slate-800">
          <p className="text-sm font-normal leading-6 text-slate-800 dark:text-slate-300">
            Integration events, anomalies, and reconciliation signals are{" "}
            <span className="font-bold text-[#0B8675] dark:text-teal-400">
              evidence for human review
            </span>{" "}
            — they never determine misconduct, payroll outcomes, or discipline.
          </p>
        </div>
      </div>
    </section>
  );
}
