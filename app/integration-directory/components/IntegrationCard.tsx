import Image from "next/image";

export type Status = "Available" | "Requires setup" | "Beta" | "Planned";

export type Tint = "teal" | "red" | "orange" | "indigo" | "blue";

export type Integration = {
  name: string;
  kind: string;
  description: string;
  protocol: string;
  status: Status;
  tint: Tint;
  /** File in /public/integration-directory. */
  icon: string;
};

const tintStyles: Record<Tint, string> = {
  teal: "bg-gradient-to-br from-teal-600 to-teal-700",
  red: "bg-gradient-to-br from-red-500 to-red-700",
  orange: "bg-gradient-to-br from-orange-400 to-yellow-700",
  indigo: "bg-gradient-to-br from-indigo-500 to-indigo-700",
  blue: "bg-gradient-to-br from-blue-600 to-blue-800",
};

const statusStyles: Record<Status, { pill: string; dot: string }> = {
  Available: {
    pill: "bg-emerald-50 text-teal-700 dark:bg-emerald-950/40 dark:text-emerald-300",
    dot: "bg-teal-700 dark:bg-emerald-400",
  },
  "Requires setup": {
    pill: "bg-indigo-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300",
    dot: "bg-blue-700 dark:bg-blue-400",
  },
  Beta: {
    pill: "bg-orange-100 text-yellow-700 dark:bg-amber-950/40 dark:text-amber-300",
    dot: "bg-yellow-700 dark:bg-amber-400",
  },
  Planned: {
    pill: "bg-zinc-100 text-gray-500 dark:bg-slate-800 dark:text-slate-400",
    dot: "bg-gray-500 dark:bg-slate-400",
  },
};

export function StatusPill({ status }: { status: Status }) {
  const style = statusStyles[status];

  return (
    <span
      className={`inline-flex items-center gap-2 whitespace-nowrap rounded-[20px] px-2.5 py-1 text-[10px] font-bold leading-4 ${style.pill}`}
    >
      <span
        className={`h-1.5 w-1.5 shrink-0 rounded-sm ${style.dot}`}
        aria-hidden="true"
      />
      {status}
    </span>
  );
}

export default function IntegrationCard({
  integration,
}: {
  integration: Integration;
}) {
  return (
    <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] dark:border-slate-800 dark:bg-slate-900">

      {/* Header */}
      <div className="flex items-start gap-4">

        <span
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${tintStyles[integration.tint]}`}
        >
          <Image
            src={`/integration-directory/${integration.icon}`}
            alt=""
            width={20}
            height={20}
            className="h-5 w-5"
          />
        </span>

        <div className="flex min-w-0 flex-col">

          <h3 className="text-base font-semibold leading-6 text-slate-800 dark:text-white">
            {integration.name}
          </h3>

          <p className="mt-0.5 text-xs font-medium leading-4 text-gray-500 dark:text-slate-400">
            {integration.kind}
          </p>

        </div>

      </div>

      <p className="mt-4 flex-1 text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
        {integration.description}
      </p>

      {/* Footer */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-4 dark:border-slate-800">

        <span className="id-mono inline-flex rounded-md bg-emerald-50 px-2 py-1 text-[10px] font-bold leading-4 text-teal-700 dark:bg-emerald-950/40 dark:text-emerald-300">
          {integration.protocol}
        </span>

        <StatusPill status={integration.status} />

      </div>

    </article>
  );
}
