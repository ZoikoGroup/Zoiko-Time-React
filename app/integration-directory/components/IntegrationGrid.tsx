import IntegrationCard from "./IntegrationCard";
import { integrations } from "./integrations";

export default function IntegrationGrid() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 pb-14 sm:px-8 lg:px-12 lg:pb-20">

        <p className="text-center text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
          {integrations.length} integrations
        </p>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {integrations.map((integration) => (
            <IntegrationCard
              key={`${integration.name}-${integration.kind}`}
              integration={integration}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
