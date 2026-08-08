export type Availability =
  | "GA"
  | "Generally Available"
  | "Limited"
  | "Rolling Out"
  | "Requires Setup"
  | "Corrected";

const availabilityStyles: Record<string, string> = {
  GA: "border-emerald-100 bg-emerald-50 text-teal-700 dark:border-emerald-900/40 dark:bg-emerald-950/40 dark:text-emerald-300",
  "Generally Available":
    "border-emerald-100 bg-emerald-50 text-teal-700 dark:border-emerald-900/40 dark:bg-emerald-950/40 dark:text-emerald-300",
  Limited:
    "border-orange-200 bg-orange-100 text-yellow-700 dark:border-amber-900/40 dark:bg-amber-950/40 dark:text-amber-300",
  "Rolling Out":
    "border-blue-200 bg-indigo-50 text-blue-600 dark:border-blue-900/40 dark:bg-blue-950/40 dark:text-blue-300",
  "Requires Setup":
    "border-slate-200 bg-gray-100 text-gray-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300",
  Corrected:
    "border-slate-200 bg-gray-100 text-gray-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300",
};

const dotStyles: Record<string, string> = {
  GA: "bg-teal-600",
  "Generally Available": "bg-teal-600",
  Limited: "bg-yellow-700",
  "Rolling Out": "bg-blue-600",
  "Requires Setup": "bg-gray-500",
  Corrected: "bg-gray-500",
};

export function AvailabilityPill({ label }: { label: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-3 py-1 text-xs font-semibold leading-4 ${availabilityStyles[label] ?? availabilityStyles["Requires Setup"]}`}
    >
      <span
        className={`h-1.5 w-1.5 shrink-0 rounded-sm ${dotStyles[label] ?? "bg-gray-500"}`}
        aria-hidden="true"
      />
      {label}
    </span>
  );
}

export function ActionPill({ label }: { label: string }) {
  return (
    <span className="inline-flex whitespace-nowrap rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold leading-4 text-blue-950 dark:border-slate-700 dark:bg-slate-900 dark:text-white">
      {label}
    </span>
  );
}

export function FilterPill({
  label,
  active = false,
}: {
  label: string;
  active?: boolean;
}) {
  return (
    <span
      className={`inline-flex whitespace-nowrap rounded-full border px-4 py-2.5 text-xs font-medium leading-5 ${
        active
          ? "border-emerald-100 bg-emerald-50 text-teal-700 dark:border-emerald-900/40 dark:bg-emerald-950/40 dark:text-emerald-300"
          : "border-slate-200 bg-white text-gray-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
      }`}
    >
      {label}
    </span>
  );
}

export function Eyebrow({ label }: { label: string }) {
  return (
    <p className="flex items-center gap-2 text-xs font-semibold uppercase leading-5 tracking-wide text-teal-700 dark:text-teal-400">
      <span
        className="h-1.5 w-1.5 shrink-0 rounded-sm bg-teal-600"
        aria-hidden="true"
      />
      {label}
    </p>
  );
}
