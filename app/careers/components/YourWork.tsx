const cards = [
    {
        role: "HR DIRECTOR",
        title: "Better Workforce Visibility",
        desc: "Real-time confidence scores across every session — enabling informed decisions instead of gut feel, and defensible records instead of assumptions.",
    },
    {
        role: "CFO",
        title: "Reduced Payroll Leakage",
        desc: "Every verified session directly prevents unwarranted payroll approval — quantifiable financial recovery that shows in the accounts within weeks of deployment.",
    },
    {
        role: "GENERAL COUNSEL",
        title: "Stronger Legal Defensibility",
        desc: "Tamper-evident evidence records that hold up in employment tribunals, regulatory proceedings, and legal disputes — built by the people who write the architecture.",
    },
    {
        role: "COO",
        title: "Improved Operational Efficiency",
        desc: "Automated governance reduces the manual overhead of workforce oversight — freeing operations teams to focus on performance rather than administration.",
    },
];

export default function YourWork() {
    return (
        <section className="bg-white px-6 py-12 md:px-54">
            <div className="mx-auto max-w-6xl">
                <div className="text-center mb-12 flex flex-col items-center">
                    <span className="inline-block text-xs uppercase font-bold tracking-[1.30px] text-[#009D8C] mb-5">
                        Your Work in the Real World
                    </span>
                    <h2 className="text-4xl md:text-[34px]  font-semibold text-[#0D1526] mb-5">
                        Where ZoikoTime's Work Shows Up
                    </h2>
                    <p className="text-[#5A6E87] mx-auto">
                        Your contribution isn't abstracted behind a layer of corporate structure <br />
                        — it shows up directly in outcomes that matter to people's financial lives and organisati onal compliance.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cards.map(({ role, title, desc }) => (
                        <div
                            key={title}
                            className="bg-white rounded-lg border-t-4 h-75 flex flex-col md:max-w-80 border-teal-500 shadow-sm p-6"
                        >
                            <span className="inline-block text-xs uppercase font-bold tracking-[1.30px] text-[#009D8C] mb-5">
                                {role}
                            </span>
                            <h3 className="font-semibold text-[#0D1526] text-[18px] max-w-70 mb-4">{title}</h3>
                            <p className="text-sm text-[#5A6E87] max-w-49">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
