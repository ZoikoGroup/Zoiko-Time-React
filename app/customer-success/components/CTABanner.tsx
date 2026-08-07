
export default function CTABanner({
  title,
  subtitle,
  img,
}: {
  title: string;
  subtitle: string;
  img: string;
}) {
  return (
    <section className="bg-white dark:bg-gray-900 py-8 sm:py-10">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-2xl shadow-[0px_10px_30px_0px_rgba(14,31,61,0.10)]">
          <img src={img} alt="" className="h-40 w-full object-cover sm:h-36" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-teal-900/60 to-teal-700/40 dark:from-black/90 dark:via-slate-900/70 dark:to-teal-900/50" />
          <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10">
            <h3 className="max-w-xl text-lg sm:text-xl font-bold leading-tight text-white">
              {title}
            </h3>
            <p className="mt-2 max-w-md text-sm text-white/90">{subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
}