import { Check } from "lucide-react";

const data = [
    "Selective partner review",
    "Enterprise customer value",
    "Implementation quality",
    "Responsible workforce data use",
    "Technology ecosystem alignment",
];
export default function Hero() {
    return (
        <>
            <section className="bg-gradient-to-b from-[#FFFFFF] to-[#F6F9F9] px-6 py-12 md:px-54">
                <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 md:gap-32 items-center">
                    <div>
                        <span className="inline-block uppercase text-xs font-semibold tracking-[2px] text-[#10A28D] mb-4">
                            ZoikoTime Partners
                        </span>
                        <h1 className="text-3xl md:text-[46px] md:min-w-150 font-bold text-[#0F0F0F] leading-tight mb-5">
                            Partner with ZoikoTime to
                            scale{" "}
                            <span className="text-[#10A28D]">trusted workforce intelligence</span>
                        </h1>
                        <p className="text-[#0F0F0FA6] text-[17px] mb-4 md:min-w-125">
                            ZoikoTime works with trusted organizations across technology,
                            implementation, consulting, payroll, HR, finance, legal, operations,
                            and enterprise ecosystems to help customers deploy workforce
                            intelligence responsibly.
                        </p>
                        <p className="text-[#0F0F0F73] rounded-y-[10px] p-2 bg-[#F6F9F9] border-l-3 border-[#C9EAE2] text-[15px] mb-8 md:min-w-128">
                            As organizations move beyond basic time tracking, they need stronger
                            workforce records, payroll and timesheet confidence, client billing visibility,
                            implementation discipline, responsible AI, and governance-ready
                            reporting. ZoikoTime partners with organizations that can help customers
                            realize that value.
                        </p>
                        <div className="flex flex-wrap gap-4 mb-3">
                            <button className="bg-[#009D8C] shadow-[0_4px_20px_0_rgba(0,157,140,0.4)] hover:bg-teal-700 cursor-pointer text-white font-medium px-6 py-3 rounded-[8px] transition-colors">
                                Contact Partnerships
                            </button>
                            <button className="border border-[#009D8C] cursor-pointer hover:bg-teal-100 text-slate-800 font-medium px-6 py-3 rounded-md transition-colors">
                                Request a ZoikoTime Demo
                            </button>
                        </div>

                        <p className="text-xs text-[#6B7785] mt-10">Built by Zoiko Tech Inc., a technology subsidiary of Zoiko Group Inc.</p>

                    </div>
                    <div className="md:h-150">
                        <img
                            src="/partners/hero.png"
                            alt="ZoikoTime platform"
                        />
                    </div>
                </div>
            </section>

            {/* Small Section */}

            <section className="bg-white px-6 py-12 md:px-54">
                <div className="max-w-3xl mx-auto">
                    <div className="flex flex-wrap gap-2 justify-center">
                        {data.map((item, index) => (
                            <div key={index} className="rounded-[30px] flex gap-2 px-6 py-2 justify-center items-center border border-[#C9EAE2] shadow-md">
                                <Check className="text-[#10A28D] h-4 w-4" />
                                <p className="text-sm text-[#0E1F3D] font-medium">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
