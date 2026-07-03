const data = ["Leadership accountability", "Human-centered oversight", "Responsible AI principles", "Role-based governance"]

export default function Hero() {
    return (
        <section className="bg-[#DFF8F3] px-6 py-24 md:px-54">
            <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 md:gap-28 items-center">
                <div>
                    <span className="inline-block text-xs font-semibold border border-[#00C6A933] tracking-wide text-[#00C6A9] bg-[#00C6A91A] rounded-full px-3 py-1 mb-4">
                        Leadership & Governance
                    </span>
                    <h1 className="text-3xl md:text-[46px] md:min-w-150 font-bold text-[#0F0F0F] leading-tight mb-5">
                        Governed Workforce
                        Intelligence Starts With
                        Accountability
                    </h1>
                    <p className="text-[#0F0F0FA6] text-[17px] mb-4 max-w-180">
                        ZoikoTime is designed with leadership accountability,
                        responsible AI principles, role-based controls, audit-ready
                        records, and human-centered oversight for organizations that
                        need trusted workforce intelligence.
                    </p>
                    <p className="text-[#0F0F0F73] text-[15px] mb-8 max-w-112">
                        Because ZoikoTime supports time records, activity signals,
                        approvals, payroll confidence, client billing, and workforce
                        decisions, the platform must be built with governance at its
                        foundation — not added later.
                    </p>
                    <div className="flex flex-wrap gap-4 mb-3">
                        <button className="bg-[#009D8C] shadow-[0_4px_20px_0_rgba(0,157,140,0.4)] hover:bg-teal-700 cursor-pointer text-white font-medium px-6 py-3 rounded-[8px] transition-colors">
                            Request a ZoikoTime Demo
                        </button>
                        <button className="border border-[#009D8C] cursor-pointer hover:bg-teal-100 text-slate-800 font-medium px-6 py-3 rounded-md transition-colors">
                            Start Free Trial
                        </button>
                    </div>
                </div>
                <div>
                    <img
                        src="/leadership-governance/hero.png"
                        alt="ZoikoTime platform"
                    />
                </div>
            </div>
            <div className="bg-[#0F0F0F0A] mt-12 md:min-w-5xl mx-auto flex flex-col md:flex-row gap-2 md:gap -0 justify-between py-5 px-10 border border-[#0F0F0F12]">
                {data.map((item, index) => (
                    <div key={index} className="flex gap-2 px-5 border-r border-[#0F0F0F14] items-center">
                        <div className="bg-[#00C6A9] h-2 w-2 rounded-[3px]"></div>
                        <h1 className="text-[13px]">{item}</h1>
                    </div>
                ))
                }
            </div>
        </section>
    );
}
