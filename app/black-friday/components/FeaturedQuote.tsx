export default function FeaturedQuote() {
  return (
    <section className="w-full bg-[#070f1d] px-4 py-20 sm:px-6">
      <figure className="mx-auto max-w-[840px] text-center">
        <blockquote>
          <p className="bf-display text-2xl font-medium leading-snug text-white sm:text-[28px]">
            &ldquo;ZoikoTime has completely transformed the way we manage time and
            productivity.&rdquo;
          </p>
          <p className="mt-4 text-sm leading-5 text-slate-400">
            With its seamless time tracking and real-time insights, we&apos;ve seen
            a significant improvement in both efficiency and project management.
          </p>
        </blockquote>
        <figcaption className="mt-5">
          <p className="text-sm font-medium text-white">Sarah Julian</p>
          <p className="text-xs text-slate-500">Operations Manager</p>
        </figcaption>
      </figure>
    </section>
  );
}
