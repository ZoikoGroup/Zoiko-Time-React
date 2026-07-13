export default function TransparencyBanner() {
  return (
    <section className="w-full px-5 bg-white dark:bg-slate-950">
      <div
        className="
          max-w-[696px]
          mx-auto
          min-h-24
          bg-emerald-50
          dark:bg-emerald-900/20
          rounded-tr-lg
          rounded-br-lg
          border-l-[3px]
          border-teal-600
          flex
          items-center
          px-5
        "
      >
        <p
          className="
            text-sm
            font-semibold
            leading-6
            text-teal-700
            dark:text-teal-400
          "
        >
          This notice is designed as a worker-facing transparency document.
          It should be provided by your employer alongside their own workplace
          privacy notice, internal monitoring policy, and any works council
          materials. It is intended to help you understand your rights and how
          your data may be used.
        </p>
      </div>
    </section>
  );
}