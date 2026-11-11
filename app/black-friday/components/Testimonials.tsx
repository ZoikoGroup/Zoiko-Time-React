const testimonials = [
  {
    initials: "PN",
    quote:
      "Approvals are faster and our teams finally have the visibility they need. It's been a game-changer.",
    name: "Priya Nair",
    role: "VP of Operations, Astera Group",
    company: "ASTERA",
  },
  {
    initials: "DM",
    quote:
      "ZoikoTime cut our time tracking admin in half and made payroll preparation so much smoother.",
    name: "Daniel Moore",
    role: "Director of Finance, Northbridge Retail",
    company: "NORTHBRIDGE",
  },
  {
    initials: "MT",
    quote:
      "Our frontline teams love how easy it is to log time, and managers love the clear, real-time insights.",
    name: "Melissa Tan",
    role: "HR Director, Meridian Health",
    company: "MERIDIAN+",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-[#101828] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-20">
      <div className="mx-auto w-full max-w-[1100px]">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-400">
            Trusted by teams worldwide
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-[28px]">
            Chosen by the people who run them.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="flex flex-col rounded-2xl border border-white/10 bg-[#1e2939] p-6"
            >
              <span
                aria-hidden="true"
                className="flex size-11 items-center justify-center rounded-full border border-emerald-500/40 bg-emerald-500/15 text-sm font-medium text-emerald-400"
              >
                {item.initials}
              </span>
              <blockquote className="mt-5 flex-1 text-sm leading-6 text-slate-300">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5">
                <p className="text-sm font-medium text-white">{item.name}</p>
                <p className="text-xs text-slate-400">{item.role}</p>
                <p className="mt-2 text-sm font-bold tracking-wide text-slate-400">
                  {item.company}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
