export type PillTone = "green" | "amber" | "red" | "gray" | "blue" | "purple";

const toneClasses: Record<PillTone, string> = {
  green: "bg-emerald-50 text-emerald-600",
  amber: "bg-orange-100 text-yellow-600",
  red: "bg-pink-100 text-pink-700",
  gray: "bg-gray-100 text-slate-500",
  blue: "bg-indigo-50 text-blue-600",
  purple: "bg-violet-100 text-purple-800",
};

export default function StatePill({
  label,
  tone,
}: {
  label: string;
  tone: PillTone;
}) {
  return (
    <span
      className={`inline-flex rounded-md px-2.5 py-1 text-xs font-bold ${toneClasses[tone]}`}
    >
      {label}
    </span>
  );
}
