const cards = [
    {
        no: 1,
        src: "/contact/brain.png",
        number: "01",
        title: "Intent Detection",
        desc: "Your inquiry is parsed for intent — sales, support, technical, or compliance — and routed to the appropriate team queue.",
    },
    {
        no: 2,
        src: "/contact/light.png",
        number: "02",
        title: "Priority Assignment",
        desc: "Company size, urgency, and inquiry type determine priority level — ensuring high-value and time-sensitive requests are handled first.",
    },
    {
        no: 3,
        src: "/contact/guy.png",
        number: "03",
        title: "Specialist Assignment",
        desc: "A named specialist is assigned based on your sector, use case, and regional context — not a generic support pool.",
    },
    {
        no: 4,
        src: "/contact/chart.png",
        number: "04",
        title: "SLA Tracking",
        desc: "Every inquiry is tracked against the applicable response SLA — with automatic escalation if the deadline is at risk.",
    },
];

export default function Explainer() {
    return (
        <section className="bg-[#F4F7FA] px-6 py-12 md:px-54">
            <div className="mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-[30px] font-semibold text-[#0D1526] mb-4">
                        How Every Request Is Handled
                    </h2>
                </div>

                <div className="grid md:grid-cols-4 gap-6">
                    {cards.map(({ no, src, title, desc }) => (
                        <div
                            key={title}
                            className="bg-white rounded-lg border-t-4 flex flex-col items-center justify-center border-teal-500 shadow-sm p-6"
                        >
                            <p className="text-[#009D8C] font-bold">0{no}</p>
                            <img src={src} alt="image" className="my-4" />
                            <h3 className="font-semibold text-[#0D1526] text-[15px] max-w-70 mb-2">{title}</h3>
                            <p className="text-sm text-[#5A6E87] max-w-75">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
