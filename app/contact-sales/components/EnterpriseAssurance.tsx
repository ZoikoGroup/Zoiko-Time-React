import { Layers, Network, ShieldCheck, UserRound } from "lucide-react";

const ITEMS = [
  { icon: ShieldCheck, label: "Security & privacy" },
  { icon: Layers, label: "Compliance & governance" },
  { icon: Network, label: "Scalable & reliable" },
  { icon: UserRound, label: "Dedicated support" },
];

export default function EnterpriseAssurance() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1160px] px-4 sm:px-6">
        <div className="flex flex-col gap-8 rounded-2xl bg-[#e8f3ee] px-6 py-10 sm:px-10 lg:flex-row lg:items-center lg:gap-0 lg:py-14">
          <div className="lg:w-[300px] lg:shrink-0 lg:border-r lg:border-slate-300 lg:pr-10">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Enterprise assurance</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Built for modern, secure and governed workforces.
            </p>
          </div>

          <ul className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-4 lg:pl-10">
            {ITEMS.map(({ icon: Icon, label }) => {
              const [first, second] = label.split(" & ");
              return (
                <li key={label} className="flex flex-col items-center text-center">
                  <Icon className="size-7 text-[#16803c]" strokeWidth={1.5} />
                  <span className="mt-3 text-sm font-semibold leading-5 text-slate-900">
                    {first}
                    {second && (
                      <>
                        <br />& {second}
                      </>
                    )}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
