const data = ["Governance controls", "Security review support", "Role-based access", "Implementation planning", "Audit-ready reporting"]

export default function Hero() {
    return (
        <section className="bg-[#DFF8F3] px-6 py-24 md:px-54">
            <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 md:gap-32 items-center">
                <div className="md:min-w-125">
                    <span className="inline-block text-xs font-semibold border border-[#00C6A933] tracking-wide text-[#00C6A9] bg-[#00C6A91A] rounded-full px-3 py-1 mb-4">
                        Enterprise Readiness
                    </span>
                    <h1 className="text-3xl md:text-[46px] md:min-w-125 font-bold text-[#0F0F0F] leading-tight mb-5">
                        Workforce Intelligence
                        Built for Enterprise
                        Deployment
                    </h1>
                    <p className="text-[#0F0F0FA6] text-[17px] mb-4 md:min-w-120">
                        ZoikoTime is designed to support enterprise teams with
                        governance controls, security review support, role-based
                        access, implementation planning, reporting, and audit-ready
                        workforce intelligence.
                    </p>
                    <p className="text-[#0F0F0F73] text-[15px] mb-8 md:min-w-112">
                        From workforce records and time verification to payroll confidence,
                        client billing, audit-ready evidence, and AI-assisted insights —
                        ZoikoTime is designed to support serious organizational
                        deployment, not just individual sign-up.
                    </p>
                    <div className="flex flex-wrap gap-4 mb-3 md:min-w-125">
                        <button className="bg-[#009D8C] shadow-[0_4px_20px_0_rgba(0,157,140,0.4)] hover:bg-teal-700 cursor-pointer text-white font-medium px-6 py-3 rounded-[8px] transition-colors">
                            Request an Enterprise Demo
                        </button>
                        <button className="border border-[#009D8C] cursor-pointer hover:bg-teal-100 text-slate-800 font-medium px-6 py-3 rounded-md transition-colors">
                            Start Free Trial
                        </button>
                    </div>
                </div>
                <div className="md:min-h-135 md:min-w-140">
                    <img
                        src="/enterprise-readiness/hero.png"
                        alt="ZoikoTime platform"
                        className="md:mt-10"
                    />
                </div>
            </div>
            <div className="bg-[#0F0F0F0A] mt-8 md:min-w-5xl mx-auto flex flex-col md:flex-row gap-2 md:gap -0 justify-between py-5 px-10 border border-[#0F0F0F12]">
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
