export default function Purpose() {
    return (
        <section className="bg-[#F4F7FA] px-6 py-24 md:px-54">
            <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <span className="inline-block uppercase text-xs font-bold tracking-[1.30px] text-[#009D8C] mb-6">
                        Our Purpose
                    </span>
                    <h1 className="text-3xl md:text-[36px] md:min-w-135 font-bold text-[#0D1526] leading-tight mb-5">
                        Enable Accurate Measurement.
                        Responsible Governance.
                        Intelligent Performance.
                    </h1>
                    <p className="text-[#5A6E87] text-[17px] mb-4 max-w-127">
                        ZoikoTime exists to enable organisations to measure work
                        accurately, govern it responsibly, and improve performance
                        intelligently — without compromising trust, privacy, or employee
                        rights.
                    </p>
                    <p className="text-[#007D6F] rounded-xl p-2 bg-[#EAF9F6] border border-[#009D8C33] border-l-3 border-l-[#009D8C] text-[15px] mb-8 p-6 max-w-125">
                        <span className="text-[#0D1526] font-bold">ZoikoTime is not a surveillance product.</span>{" "} It is a governed system of
                        record for workforce accountability and performance intelligence
                        — engineered to withstand executive scrutiny, procurement due
                        diligence, regulatory inspection, and real-world operational
                        complexity.
                    </p>

                </div>
                <div>
                    <img
                        src="/about-zoikotech/hero.png"
                        alt="ZoikoTime platform"
                    />
                </div>
            </div>
        </section>
    );
}
