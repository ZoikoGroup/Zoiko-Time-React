import { Building2, Cog, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "🏗 Enterprise Platform Builder",
    desc: "Zoiko Tech develops software intended to support real business operations, customer experiences, and organizational workflows across multiple industries and jurisdictions.",
  },
  {
    title: "🤖 AI and Automation Company",
    desc: "Zoiko Tech applies AI to improve productivity, decision support, workflow automation, user guidance, and operational intelligence across its software platforms.",
  },
  {
    title: "🛡 Governance-First Technology Organization",
    desc: "Zoiko Tech emphasizes responsible AI, auditability, human oversight, access controls, permissioned workflows, and governance-led product development.",
  },
];

export default function TrustedTechnologySection() {
  return (
    <section className="bg-[#F4F7FA] px-6 py-12 md:px-54">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12">
        <div>
          <span className="inline-block text-xs font-semibold tracking-[1px] text-[#009D8C] mb-4">
            WHO ZOIKO TECH IS
          </span>
          <h2 className="text-[24px] font-semibold text-[#2A3D55] mb-5">
            Building Trusted Technology for Modern Organizations
          </h2>
          <p className="text-[#5A6E87] mb-4 max-w-120">
            Zoiko Tech Inc. is the technology arm of Zoiko Group Inc., focused
            on building AI-powered software platforms, enterprise systems,
            digital infrastructure, and governed technology products for
            businesses, institutions, and consumers.
          </p>
          <p className="text-[#5A6E87] mb-4 max-w-110">
            Zoiko Tech develops platforms across workforce intelligence,
            business operations, communications, telecom infrastructure,
            compliance, cybersecurity, payments, AI, media, and digital
            ecosystems. Its work is shaped by a commitment to security,
            usability, governance, scalability, and responsible innovation.
          </p>
          <a href="#" className="text-[#009D8C] font-medium hover:underline">
            Visit ZoikoTech.com for the broader company portfolio ↗
          </a>
        </div>
        <div className="flex flex-col gap-6">
          {features.map(({ title, desc }) => (
            <div key={title} className="flex bg-white rounded-xl px-5 py-4 gap-4">
              <div>
                <h3 className="font-semibold text-[#0D1526] text-sm mb-1">{title}</h3>
                <p className="text-[13px] max-w-110 text-[#5A6E87]">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
