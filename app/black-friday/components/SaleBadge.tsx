type SaleBadgeProps = {
  className?: string;
  /** Tilt in degrees. Negative tilts up to the right. */
  rotate?: number;
};

export default function SaleBadge({ className = "", rotate = -10 }: SaleBadgeProps) {
  return (
    <div
      aria-hidden="true"
      style={{ transform: `rotate(${rotate}deg)` }}
      className={`pointer-events-none select-none bg-gradient-to-r from-emerald-500 via-teal-700 to-blue-800 px-7 py-2.5 text-center text-white shadow-[0_16px_36px_-8px_rgba(16,185,129,0.45)] sm:px-8 sm:py-3 ${className}`}
    >
      <span className="bf-display block text-sm font-extrabold uppercase leading-tight tracking-wide sm:text-base">
        Black Friday
      </span>
      <span className="bf-display block text-xs font-bold italic leading-tight sm:text-sm">
        Sale
      </span>
    </div>
  );
}
