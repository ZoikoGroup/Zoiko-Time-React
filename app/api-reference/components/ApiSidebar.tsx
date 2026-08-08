import Link from "next/link";

type Item = { label: string; href: string; method?: string };

const groups: { title: string; items: Item[] }[] = [
  {
    title: "Getting started",
    items: [
      { label: "Introduction", href: "#introduction" },
      { label: "Authentication", href: "#authentication" },
      { label: "Errors", href: "#errors" },
      { label: "Rate limits", href: "#rate-limits" },
      { label: "Pagination", href: "#pagination" },
    ],
  },
  {
    title: "Records",
    items: [
      { label: "/v1/records", href: "#list-records", method: "GET" },
      { label: "/v1/records/{id}", href: "#get-record", method: "GET" },
      { label: "/corrections", href: "#create-correction", method: "POST" },
    ],
  },
  {
    title: "Policies & Evidence",
    items: [
      { label: "/v1/policies/{id}", href: "#get-policy", method: "GET" },
      { label: "/v1/evidence/{id}", href: "#get-evidence", method: "GET" },
    ],
  },
  {
    title: "Webhooks",
    items: [
      { label: "/v1/webhooks", href: "#create-webhook", method: "POST" },
      { label: "/v1/webhooks/{id}", href: "#delete-webhook", method: "DEL" },
    ],
  },
];

export default function ApiSidebar() {
  return (
    <nav aria-label="API reference">

      <div className="flex flex-col gap-7">

        {groups.map((group) => (
          <div key={group.title} className="flex flex-col">

            <p className="text-xs font-bold uppercase leading-4 tracking-wide text-gray-500 dark:text-slate-400">
              {group.title}
            </p>

            <ul className="mt-3 flex flex-col">
              {group.items.map((item) => (
                <li key={item.href}>

                  <Link
                    href={item.href}
                    className="flex items-center gap-2.5 rounded-md border-l-2 border-transparent px-3 py-1.5 transition hover:border-teal-600 hover:bg-gray-50 dark:hover:bg-slate-900"
                  >

                    {item.method && (
                      <span className="api-mono w-8 shrink-0 text-[9px] font-bold leading-4 text-teal-700 dark:text-teal-300">
                        {item.method}
                      </span>
                    )}

                    <span
                      className={`text-xs font-normal leading-5 text-gray-700 dark:text-slate-300 ${
                        item.method ? "api-mono" : ""
                      }`}
                    >
                      {item.label}
                    </span>

                  </Link>

                </li>
              ))}
            </ul>

          </div>
        ))}

      </div>

    </nav>
  );
}
