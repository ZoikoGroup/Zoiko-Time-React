import type { ReactNode } from "react";

/** Inline code chip used throughout the prose. */
export function Code({ children }: { children: ReactNode }) {
  return (
    <code className="api-mono rounded-[5px] border border-slate-200 bg-gray-50 px-1.5 py-0.5 text-xs font-normal text-teal-700 dark:border-slate-700 dark:bg-slate-800 dark:text-teal-300">
      {children}
    </code>
  );
}

/** Dark terminal-style block with the three window dots and a file label. */
export function CodeBlock({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-blue-950 bg-slate-900">

      <div className="flex items-center gap-2 border-b border-blue-950 px-4 py-3">

        {[0, 1, 2].map((dot) => (
          <span
            key={dot}
            className="h-2.5 w-2.5 rounded-full bg-white/20"
            aria-hidden="true"
          />
        ))}

        <span className="api-mono ml-3 text-xs font-normal leading-4 text-white/60">
          {label}
        </span>

      </div>

      <div className="overflow-x-auto px-4 py-4">
        <pre className="api-mono text-xs font-normal leading-5 text-slate-300">
          {children}
        </pre>
      </div>

    </div>
  );
}

/* Syntax tokens, coloured to match the Figma code samples. */

export function Key({ children }: { children: ReactNode }) {
  return <span className="text-blue-300">{children}</span>;
}

export function Str({ children }: { children: ReactNode }) {
  return <span className="text-amber-300">{children}</span>;
}

export function Num({ children }: { children: ReactNode }) {
  return <span className="text-orange-300">{children}</span>;
}

export function Keyword({ children }: { children: ReactNode }) {
  return <span className="text-teal-300">{children}</span>;
}

export function Comment({ children }: { children: ReactNode }) {
  return <span className="text-slate-500">{children}</span>;
}

/** Section heading with the underline rule. */
export function SectionHeading({ id, title }: { id: string; title: string }) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 border-b border-slate-200 pb-3 text-2xl font-bold leading-10 text-slate-800 dark:border-slate-800 dark:text-white"
    >
      {title}
    </h2>
  );
}

export type Param = {
  name: string;
  type: string;
  requirement: "required" | "optional";
  description: ReactNode;
};

/** Name / Type / Description table used by every endpoint. */
export function ParamTable({
  caption,
  params,
}: {
  caption: string;
  params: Param[];
}) {
  return (
    <div className="mt-6">

      <p className="text-xs font-bold uppercase leading-4 tracking-wide text-gray-500 dark:text-slate-400">
        {caption}
      </p>

      <div className="mt-3 overflow-x-auto">

        <table className="w-full min-w-[560px] border-collapse text-left">

          <thead>
            <tr>
              {[
                { label: "Name", width: "w-[24%]" },
                { label: "Type", width: "w-[14%]" },
                { label: "Description", width: "w-[62%]" },
              ].map((heading) => (
                <th
                  key={heading.label}
                  className={`border-b border-slate-200 px-2.5 pb-2 text-[10px] font-semibold uppercase leading-4 tracking-wide text-gray-500 dark:border-slate-800 dark:text-slate-400 ${heading.width}`}
                >
                  {heading.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {params.map((param) => (
              <tr
                key={param.name}
                className="border-b border-slate-200 last:border-b-0 dark:border-slate-800"
              >

                <td className="api-mono px-2.5 py-4 align-top text-xs font-bold leading-5 text-slate-800 dark:text-white">
                  {param.name}
                </td>

                <td className="px-2.5 py-4 align-top">

                  <span className="api-mono block text-xs font-normal leading-4 text-teal-700 dark:text-teal-300">
                    {param.type}
                  </span>

                  <span
                    className={`mt-1.5 block text-[10px] leading-4 ${
                      param.requirement === "required"
                        ? "font-bold text-red-700 dark:text-red-400"
                        : "font-normal text-gray-500 dark:text-slate-400"
                    }`}
                  >
                    {param.requirement}
                  </span>

                </td>

                <td className="px-2.5 py-4 align-top text-xs font-normal leading-5 text-gray-700 dark:text-slate-300">
                  {param.description}
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}

const methodStyles: Record<string, string> = {
  GET: "bg-emerald-50 text-teal-700 dark:bg-emerald-950/40 dark:text-emerald-300",
  POST: "bg-indigo-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300",
  DELETE: "bg-red-50 text-red-600 dark:bg-red-950/40 dark:text-red-300",
};

export function MethodBadge({ method }: { method: string }) {
  return (
    <span
      className={`api-mono inline-flex shrink-0 rounded-md px-2.5 py-1 text-[10px] font-bold leading-4 ${methodStyles[method] ?? methodStyles.GET}`}
    >
      {method}
    </span>
  );
}

/** Endpoint card: method + path header, then description, params and samples. */
export function EndpointCard({
  id,
  method,
  path,
  description,
  children,
}: {
  id: string;
  method: string;
  path: string;
  description: ReactNode;
  children?: ReactNode;
}) {
  return (
    <article
      id={id}
      className="scroll-mt-28 overflow-hidden rounded-2xl border border-slate-200 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] dark:border-slate-800"
    >

      <div className="flex flex-wrap items-center gap-3 border-b border-slate-200 bg-gray-50 px-5 py-4 dark:border-slate-800 dark:bg-slate-900">

        <MethodBadge method={method} />

        <span className="api-mono text-sm font-bold leading-5 text-slate-800 dark:text-white">
          {path}
        </span>

      </div>

      <div className="px-5 py-5">

        <p className="text-sm font-normal leading-6 text-gray-500 dark:text-slate-400">
          {description}
        </p>

        {children}

      </div>

    </article>
  );
}
