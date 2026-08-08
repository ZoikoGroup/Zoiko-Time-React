import {
  Code,
  CodeBlock,
  EndpointCard,
  Str,
  ParamTable,
  SectionHeading,
  type Param,
} from "./Primitives";

const createParams: Param[] = [
  {
    name: "url",
    type: "string",
    requirement: "required",
    description: "HTTPS endpoint to receive events.",
  },
  {
    name: "events",
    type: "array",
    requirement: "required",
    description: (
      <>
        Event types, e.g. <Code>record.flagged</Code> or{" "}
        <Code>correction.created</Code>.
      </>
    ),
  },
];

const deleteParams: Param[] = [
  {
    name: "id",
    type: "string",
    requirement: "required",
    description: "The webhook id.",
  },
];

export default function WebhooksSection() {
  return (
    <section className="mt-14 flex flex-col">

      <SectionHeading id="webhooks" title="Webhooks" />

      <p className="mt-6 text-sm font-normal leading-6 text-gray-500 dark:text-slate-400">
        Subscribe to events and receive signed payloads. Verify the{" "}
        <Code>Zoiko-Signature</Code> header on every delivery.
      </p>

      <div className="mt-8 flex flex-col gap-8">

        {/* Create webhook */}
        <EndpointCard
          id="create-webhook"
          method="POST"
          path="/v1/webhooks"
          description="Create a webhook subscription for one or more event types."
        >

          <ParamTable caption="Body parameters" params={createParams} />

          <p className="mt-6 text-xs font-bold uppercase leading-4 tracking-wide text-gray-500 dark:text-slate-400">
            Request
          </p>

          <div className="mt-3">
            <CodeBlock label="POST /v1/webhooks">
              <span className="text-teal-300">curl</span>
              {" -X POST .../v1/webhooks \\\n  -H "}
              <Str>&quot;Authorization: Bearer $ZOIKO_API_KEY&quot;</Str>
              {" \\\n  -d "}
              <Str>
                {
                  '\'{ "url": "https://your.example.com/hook", "events": ["record.flagged","correction.created"] }\''
                }
              </Str>
            </CodeBlock>
          </div>

        </EndpointCard>

        {/* Delete webhook */}
        <EndpointCard
          id="delete-webhook"
          method="DELETE"
          path="/v1/webhooks/{id}"
          description="Delete a webhook subscription."
        >
          <ParamTable caption="Path parameters" params={deleteParams} />
        </EndpointCard>

      </div>

      {/* Governance note */}
      <div className="mt-10 rounded-xl border border-emerald-100 bg-emerald-50 px-5 py-4 dark:border-emerald-900/40 dark:bg-emerald-950/20">

        <p className="text-xs font-normal leading-5 text-gray-700 dark:text-slate-300">

          <span className="font-bold text-teal-700 dark:text-teal-300">
            Governance:
          </span>{" "}
          the API exposes governed records, explainable policy, and preserved
          evidence. It makes no automatic employment, payroll, or legal
          decision. No screenshots, keystroke content, URL history,
          application-name monitoring, or clipboard collection under any tier or
          configuration.

        </p>

      </div>

    </section>
  );
}
