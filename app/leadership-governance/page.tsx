import type { Metadata } from "next";
import Accountability from "./components/Accountability";
import CtaSection from "./components/CtaSection";
import EnterpriseTrust from "./components/EnterpriseTrust";
import FaqSection from "./components/FaqSection";
import Hero from "./components/Hero";
import Operational from "./components/Operational";
import Principles from "./components/Principles";
import ResponsibleAI from "./components/ResponsibleAi";
import Stewardship from "./components/Stewardship";

export const metadata: Metadata = {
  title: "Workforce Governance & Leadership | ZoikoTime",
  description: "Learn how ZoikoTime supports workforce governance with leadership accountability, responsible AI, human oversight, role-based controls, and trusted records.",
};

export default function LeadershipGovernancePage() {
    return (
        <main>
            <Hero />
            <Accountability />
            <Principles />
            <Operational/>
            <ResponsibleAI/>
            <Stewardship />
            <EnterpriseTrust />
            <FaqSection />
            <CtaSection />
        </main>
    )
}