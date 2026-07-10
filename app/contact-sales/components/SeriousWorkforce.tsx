import React from "react";

const SeriousWorkforce = () => {
  const cards = [
    {
      image: "/SeriousWorkforce/readiness.png",
      title: "Enterprise Readiness",
      description:
        "Governance controls, security review support, role-based access, implementation planning, and audit-ready reporting.",
    },
    {
      image: "/SeriousWorkforce/security.png",
      title: "Security Addendum",
      description:
        "Detailed security controls, access management, encryption, infrastructure safeguards, and enterprise review documentation.",
    },
    {
      image: "/SeriousWorkforce/audit.png",
      title: "Audit-Grade Evidence",
      description:
        "Workforce records with timestamps, approvals, corrections, policy context, and export logs for defensible decision-making.",
    },
    {
      image: "/SeriousWorkforce/ai.png",
      title: "Responsible AI",
      description:
        "AI-assisted insights designed to support human review, not replace it — with transparency, governance, and accountability.",
    },
  ];

  return (
    <section className="w-full bg-teal-500 dark:bg-teal-700 py-16 px-5">
      <div className="max-w-[1440px] mx-auto">

        <h2 className="text-center text-white text-3xl font-semibold mb-16">
          Built for Serious Workforce Decisions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1052px] mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className="
                h-56
                bg-white/5
                dark:bg-black/20
                rounded-2xl
                border
                border-white/70
                dark:border-white/40
                p-6
              "
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-8 h-8 object-contain mb-6"
              />

              <h3 className="text-white text-base font-semibold mb-3">
                {card.title}
              </h3>

              <p className="text-white/60 dark:text-white/70 text-xs leading-5 font-normal">
                {card.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SeriousWorkforce;