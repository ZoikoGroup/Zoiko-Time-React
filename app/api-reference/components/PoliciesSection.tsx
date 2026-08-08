import {
  Code,
  CodeBlock,
  EndpointCard,
  Key,
  Str,
  Keyword,
  ParamTable,
  SectionHeading,
  type Param,
} from "./Primitives";

const policyParams: Param[] = [
  {
    name: "id",
    type: "string",
    requirement: "required",
    description: (
      <>
        The policy id, e.g. <Code>auto_clockout</Code>.
      </>
    ),
  },
  {
    name: "version",
    type: "integer",
    requirement: "optional",
    description: "Pin a specific version (defaults to latest effective).",
  },
];

const evidenceParams: Param[] = [
  {
    name: "id",
    type: "string",
    requirement: "required",
    description: (
      <>
        The evidence id, e.g. <Code>ev_9f2a</Code>.
      </>
    ),
  },
];

export default function PoliciesSection() {
  return (
    <section className="mt-14 flex flex-col">

      <SectionHeading id="policies-evidence" title="Policies & Evidence" />

      <p className="mt-6 text-sm font-normal leading-6 text-gray-500 dark:text-slate-400">
        Policies are deterministic and versioned; evidence trails are preserved
        and append-only.
      </p>

      <div className="mt-8 flex flex-col gap-8">

        {/* Get policy */}
        <EndpointCard
          id="get-policy"
          method="GET"
          path="/v1/policies/{id}"
          description="Fetch a versioned policy definition, including its plain-language explanation and the rule that applied."
        >
          <ParamTable caption="Path parameters" params={policyParams} />
        </EndpointCard>

        {/* Get evidence */}
        <EndpointCard
          id="get-evidence"
          method="GET"
          path="/v1/evidence/{id}"
          description="Read a preserved, append-only evidence trail for a record."
        >

          <ParamTable caption="Path parameters" params={evidenceParams} />

          <p className="mt-6 text-xs font-bold uppercase leading-4 tracking-wide text-gray-500 dark:text-slate-400">
            Response
          </p>

          <div className="mt-3">
            <CodeBlock label="GET /v1/evidence/ev_9f2a">
              {"{\n  "}
              <Key>&quot;id&quot;</Key>
              {": "}
              <Str>&quot;ev_9f2a&quot;</Str>
              {",\n  "}
              <Key>&quot;record&quot;</Key>
              {": "}
              <Str>&quot;rec_4821&quot;</Str>
              {",\n  "}
              <Key>&quot;trail&quot;</Key>
              {": [\n    { "}
              <Key>&quot;event&quot;</Key>
              {": "}
              <Str>&quot;captured&quot;</Str>
              {", "}
              <Key>&quot;actor&quot;</Key>
              {": "}
              <Str>&quot;worker&quot;</Str>
              {" },\n    { "}
              <Key>&quot;event&quot;</Key>
              {": "}
              <Str>&quot;flagged&quot;</Str>
              {", "}
              <Key>&quot;actor&quot;</Key>
              {": "}
              <Str>&quot;policy:auto_clockout&quot;</Str>
              {" },\n    { "}
              <Key>&quot;event&quot;</Key>
              {": "}
              <Str>&quot;decided&quot;</Str>
              {", "}
              <Key>&quot;actor&quot;</Key>
              {": "}
              <Str>&quot;user:reviewer&quot;</Str>
              {" }\n  ],\n  "}
              <Key>&quot;preserved&quot;</Key>
              {": "}
              <Keyword>true</Keyword>
              {"\n}"}
            </CodeBlock>
          </div>

        </EndpointCard>

      </div>

    </section>
  );
}
