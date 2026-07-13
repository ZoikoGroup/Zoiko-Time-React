import Image from "next/image";

const phases = [
  {
    phase: "PHASE 01",
    title: "Detection",
    image: "/IncidentResponse/detection.png",
    description:
      "Anomaly detection and monitoring systems identify incident signals—automated alert generation with risk classification and initial scope assessment.",
  },
  {
    phase: "PHASE 02",
    title: "Containment",
    image: "/IncidentResponse/containment.png",
    description:
      "Immediate isolation of affected systems or users—preserving evidence integrity while limiting further exposure. Escalation to the security team is initiated.",
  },
  {
    phase: "PHASE 03",
    title: "Investigation",
    image: "/IncidentResponse/investigation.png",
    description:
      "Root cause analysis using audit logs, anomaly data, and access records—with full forensic investigation and chain of custody maintained throughout.",
  },
  {
    phase: "PHASE 04",
    title: "Resolution",
    image: "/IncidentResponse/resolution.png",
    description:
      "Remediation of root cause, restoration of affected systems, and verification that controls are functioning correctly—with evidence documentation of actions taken.",
  },
  {
    phase: "PHASE 05",
    title: "Post-Incident Review",
    image: "/IncidentResponse/review.png",
    description:
      "Structured review of detection effectiveness, response time, and control performance—with recommendations incorporated into the continuous improvement programme.",
  },
];

export default function IncidentResponse() {
  return (
    <section className="bg-slate-100 py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10">
                {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-teal-600">
            Incident Response
          </p>

          <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl lg:text-[40px]">
            Incident Response Framework
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-500 dark:text-slate-300 md:text-lg">
            A structured, five-phase incident response framework with defined
            escalation pathways, communication protocols, and evidence
            preservation requirements at each stage.
          </p>
        </div>

        {/* Framework Cards */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_1px_4px_rgba(13,21,38,0.04),0px_4px_16px_rgba(13,21,38,0.08)] dark:border-slate-700 dark:bg-slate-900">

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5">

            {phases.map((item, index) => (
              <div
                key={item.phase}
                className={`flex flex-col items-center px-6 py-8 text-center ${
                  index !== phases.length - 1
                    ? "border-b border-slate-200 md:border-b xl:border-b-0 xl:border-r dark:border-slate-700"
                    : ""
                }`}
              >
                {/* Phase */}
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600">
                  {item.phase}
                </span>

                {/* Icon */}
                <div className="mt-5 flex h-16 w-16 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={34}
                    height={34}
                    className="h-auto w-auto object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm leading-6 text-slate-500 dark:text-slate-300">
                  {item.description}
                </p>
              </div>
            ))}

                      </div>
        </div>
      </div>
    </section>
  );
}