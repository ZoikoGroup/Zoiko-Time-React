import {
  Code,
  CodeBlock,
  EndpointCard,
  Key,
  Str,
  Num,
  Keyword,
  Comment,
  ParamTable,
  SectionHeading,
  type Param,
} from "./Primitives";

const listParams: Param[] = [
  {
    name: "state",
    type: "string",
    requirement: "optional",
    description: (
      <>
        Filter by record state, e.g. <Code>needs_review</Code>.
      </>
    ),
  },
  {
    name: "source",
    type: "string",
    requirement: "optional",
    description: (
      <>
        Filter by capture source, e.g. <Code>web_clock</Code>.
      </>
    ),
  },
  {
    name: "limit",
    type: "integer",
    requirement: "optional",
    description: "Page size, 1–100 (default 20).",
  },
  {
    name: "starting_after",
    type: "string",
    requirement: "optional",
    description: "Cursor: last object id from the previous page.",
  },
];

const getParams: Param[] = [
  {
    name: "id",
    type: "string",
    requirement: "required",
    description: (
      <>
        The record id, e.g. <Code>rec_4821</Code>.
      </>
    ),
  },
];

const correctionParams: Param[] = [
  {
    name: "reason",
    type: "string",
    requirement: "required",
    description: "Why the correction is requested.",
  },
  {
    name: "fields",
    type: "object",
    requirement: "required",
    description: (
      <>
        The field(s) to correct, e.g. <Code>{'{ "clock_out": "17:14" }'}</Code>.
      </>
    ),
  },
];

export default function RecordsSection() {
  return (
    <section className="mt-14 flex flex-col">

      <SectionHeading id="records" title="Records" />

      <p className="mt-6 text-sm font-normal leading-6 text-gray-500 dark:text-slate-400">
        Time records carry their source, the versioned policy that applied, a
        deterministic classification, and a link to preserved evidence.
      </p>

      <div className="mt-8 flex flex-col gap-8">

        {/* List records */}
        <EndpointCard
          id="list-records"
          method="GET"
          path="/v1/records"
          description="List and filter time records."
        >

          <ParamTable caption="Query parameters" params={listParams} />

          <p className="mt-6 text-xs font-bold uppercase leading-4 tracking-wide text-gray-500 dark:text-slate-400">
            Response
          </p>

          <div className="mt-3">
            <CodeBlock label="200 OK">
              {"{\n  "}
              <Key>&quot;object&quot;</Key>
              {": "}
              <Str>&quot;list&quot;</Str>
              {",\n  "}
              <Key>&quot;has_more&quot;</Key>
              {": "}
              <Keyword>true</Keyword>
              {",\n  "}
              <Key>&quot;data&quot;</Key>
              {": [\n    {\n      "}
              <Key>&quot;id&quot;</Key>
              {": "}
              <Str>&quot;rec_4821&quot;</Str>
              {",\n      "}
              <Key>&quot;state&quot;</Key>
              {": "}
              <Str>&quot;needs_review&quot;</Str>
              {",\n      "}
              <Key>&quot;source&quot;</Key>
              {": "}
              <Str>&quot;web_clock&quot;</Str>
              {",\n      "}
              <Key>&quot;policy&quot;</Key>
              {": { "}
              <Key>&quot;id&quot;</Key>
              {": "}
              <Str>&quot;auto_clockout&quot;</Str>
              {", "}
              <Key>&quot;version&quot;</Key>
              {": "}
              <Num>4</Num>
              {" },\n      "}
              <Key>&quot;classification&quot;</Key>
              {": "}
              <Str>&quot;deterministic&quot;</Str>
              {",\n      "}
              <Key>&quot;decision&quot;</Key>
              {": "}
              <Keyword>null</Keyword>
              {"\n    }\n  ]\n}"}
            </CodeBlock>
          </div>

        </EndpointCard>

        {/* Get record */}
        <EndpointCard
          id="get-record"
          method="GET"
          path="/v1/records/{id}"
          description="Retrieve a single record and a reference to its evidence."
        >

          <ParamTable caption="Path parameters" params={getParams} />

          <p className="mt-6 text-xs font-bold uppercase leading-4 tracking-wide text-gray-500 dark:text-slate-400">
            Response
          </p>

          <div className="mt-3">
            <CodeBlock label="GET /v1/records/rec_4821">
              {"{\n  "}
              <Key>&quot;id&quot;</Key>
              {": "}
              <Str>&quot;rec_4821&quot;</Str>
              {",\n  "}
              <Key>&quot;state&quot;</Key>
              {": "}
              <Str>&quot;needs_review&quot;</Str>
              {",\n  "}
              <Key>&quot;source&quot;</Key>
              {": "}
              <Str>&quot;web_clock&quot;</Str>
              {",\n  "}
              <Key>&quot;policy&quot;</Key>
              {": { "}
              <Key>&quot;id&quot;</Key>
              {": "}
              <Str>&quot;auto_clockout&quot;</Str>
              {", "}
              <Key>&quot;version&quot;</Key>
              {": "}
              <Num>4</Num>
              {" },\n  "}
              <Key>&quot;evidence&quot;</Key>
              {": "}
              <Str>&quot;ev_9f2a&quot;</Str>
              {",\n  "}
              <Key>&quot;decision&quot;</Key>
              {": "}
              <Keyword>null</Keyword>
              {"   "}
              <Comment>{"// a human decides"}</Comment>
              {"\n}"}
            </CodeBlock>
          </div>

        </EndpointCard>

        {/* Create correction */}
        <EndpointCard
          id="create-correction"
          method="POST"
          path="/v1/records/{id}/corrections"
          description={
            <>
              Submit a reasoned correction. Corrections are append-only and
              enter review — the original is never overwritten. Send an{" "}
              <Code>Idempotency-Key</Code> header to make retries safe.
            </>
          }
        >

          <ParamTable caption="Body parameters" params={correctionParams} />

          <p className="mt-6 text-xs font-bold uppercase leading-4 tracking-wide text-gray-500 dark:text-slate-400">
            Request
          </p>

          <div className="mt-3">
            <CodeBlock label="POST /v1/records/{id}/corrections">
              <span className="text-teal-300">curl</span>
              {" -X POST .../v1/records/rec_4821/corrections \\\n  -H "}
              <Str>&quot;Authorization: Bearer $ZOIKO_API_KEY&quot;</Str>
              {" \\\n  -H "}
              <Str>&quot;Idempotency-Key: a1b2c3&quot;</Str>
              {" \\\n  -d "}
              <Str>
                {
                  '\'{ "reason": "Missing clock-out", "fields": { "clock_out": "17:14" } }\''
                }
              </Str>
            </CodeBlock>
          </div>

          <p className="mt-6 text-xs font-bold uppercase leading-4 tracking-wide text-gray-500 dark:text-slate-400">
            Response
          </p>

          <div className="mt-3">
            <CodeBlock label="201 Created">
              {"{\n  "}
              <Key>&quot;id&quot;</Key>
              {": "}
              <Str>&quot;cor_2211&quot;</Str>
              {",\n  "}
              <Key>&quot;record&quot;</Key>
              {": "}
              <Str>&quot;rec_4821&quot;</Str>
              {",\n  "}
              <Key>&quot;reason&quot;</Key>
              {": "}
              <Str>&quot;Missing clock-out&quot;</Str>
              {",\n  "}
              <Key>&quot;state&quot;</Key>
              {": "}
              <Str>&quot;pending_review&quot;</Str>
              {",\n  "}
              <Key>&quot;decision&quot;</Key>
              {": "}
              <Keyword>null</Keyword>
              {"\n}"}
            </CodeBlock>
          </div>

        </EndpointCard>

      </div>

    </section>
  );
}
