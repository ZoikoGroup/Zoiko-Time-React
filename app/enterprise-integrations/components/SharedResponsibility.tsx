import Link from "next/link";
import Image from "next/image";

const parties = [
  {
    party: "Organization / customer",
    responsibility:
      "Own connection purpose, authorization, mapping approval, retention, and downstream use; provide lawful scope and source-system authority.",
  },
  {
    party: "ZoikoTime",
    responsibility:
      "Apply deterministic mapping, enforce authorization and activation control, preserve delivery & reconciliation evidence, and expose states.",
  },
  {
    party: "Connected system / provider",
    responsibility:
      "Authenticate, exchange approved data, return acknowledgements/errors, and support reconciliation per contract.",
  },
];

export default function SharedResponsibility() {
  return (
    <section className="w-full bg-white py-16 dark:bg-slate-950 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
            Shared Responsibility
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-800 dark:text-white sm:text-4xl">
            Clear ownership across the connection
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-[1000px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] dark:border-slate-700 dark:bg-slate-800">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-800">
                  <th className="w-[24%] px-3.5 py-3 text-xs font-semibold leading-5 text-white">
                    Party
                  </th>
                  <th className="w-[76%] px-3.5 py-3 text-xs font-semibold leading-5 text-white">
                    Responsibility
                  </th>
                </tr>
              </thead>

              <tbody>
                {parties.map(({ party, responsibility }, index) => (
                  <tr
                    key={party}
                    className={`border-t border-slate-200 dark:border-slate-700 ${
                      index % 2 === 1 ? "bg-[#F6F9F9] dark:bg-slate-900/40" : ""
                    }`}
                  >
                    <td className="px-3.5 py-3 align-top text-xs font-bold leading-5 text-slate-800 dark:text-white">
                      {party}
                    </td>
                    <td className="px-3.5 py-3 text-xs font-normal leading-5 text-gray-700 dark:text-slate-300">
                      {responsibility}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mx-auto mt-6 flex max-w-[880px] flex-col gap-2">
          <Image
            src="/enterprise-integrations/SVG.svg"
            alt=""
            aria-hidden="true"
            width={16}
            height={16}
            className="h-4 w-4"
          />
          <p className="text-base leading-6 text-gray-700 dark:text-slate-300">
            <span className="font-bold">Adjacent boundaries.</span> Identity
            &amp; Access governs accounts, service identities, and credentials;
            Administration &amp; Policy Controls governs policy and approval; the
            Trust Center governs security, privacy, and residency. This page
            certifies no external system, protocol, region, throughput, or
            service level.{" "}
            <Link
              href="/trust-center"
              className="font-semibold text-teal-700 underline-offset-2 hover:underline dark:text-teal-400"
            >
              Visit Trust Center →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
