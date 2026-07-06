
export default function Hero() {
    return (
        <>
            <section className="bg-gradient-to-b from-[#F0FDFB] to-white px-6 pt-12 md:px-54">
                <div className="mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <span className="inline-block text-xs font-bold tracking-[1.30px] text-[#009D8C] mb-10">
                            About ZoikoTime
                        </span>
                        <h2 className="text-4xl md:text-[48px] font-semibold text-[#0D1526] mb-5">
                            Workforce Assurance for {" "}
                            <span className="text-[#009D8C]">
                                Modern Enterprises
                            </span>
                        </h2>
                        <p className="text-[#5A6E87] max-w-225 mx-auto">
                            ZoikoTime is an enterprise-grade workforce assurance and
                            performance intelligence system — built to serve as the
                            system of record for how work is verified,
                            governed, and understood across modern organisations.
                        </p>

                        <div className="flex gap-4 mt-10 justify-center">
                            <button className="bg-[#009D8C] shadow-[0_4px_20px_0_rgba(0,157,140,0.4)] hover:bg-teal-600 cursor-pointer text-white font-medium px-10 py-3 rounded-[8px] transition-colors border border-[#C8D6E8]">
                                Request a ZoikoTime Demo
                            </button>
                            <button className="border border-[#C8D6E8] cursor-pointer hover:bg-slate-100 text-slate-800 font-medium px-15 py-3 rounded-md transition-colors">
                                Start Free Trial
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white px-6 pb-12 md:px-54">
                <div className="mx-auto max-w-6xl bg-[#F4F7FA] rounded-[16px] p-10">
                    <div className="mb-12 flex flex-col items-center text-center">
                        <span className="inline-block text-xs font-bold tracking-[1.30px] text-[#00C6A9] mb-8">
                            A New Standard
                        </span>
                        <h2 className="text-4xl text-center md:text-[36px] max-w-190 font-semibold text-[#0D1526] mb-5">
                            Defining a New Standard for {" "}
                            <span className="text-[#00C6A9]">
                                WorkforceGovernance
                            </span>
                        </h2>
                        <p className="text-[#5A6E87] max-w-140 mx-auto">
                            As work has become global, distributed, and increasingly complex, enterprises
                            have gained flexibility — but lost consistency, control, and defensibility.
                            Traditional time-tracking tools were not designed for this reality. ZoikoTime
                        </p>
                        <p className="text-[#5A6E87] mt-2 max-w-145 mx-auto">
                            establishes a new category: {" "} <span className="text-[#00C6A9]">Workforce Assurance Infrastructure</span> — where every
                            unit of work is measurable, explainable, and defensible.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
