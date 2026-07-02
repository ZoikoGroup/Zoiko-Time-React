import Accountability from "./components/Accountability";
import CtaSection from "./components/CtaSection";
import EnterpriseTrust from "./components/EnterpriseTrust";
import FaqSection from "./components/FaqSection";
import Hero from "./components/Hero";
import Operational from "./components/Operational";
import Principles from "./components/Principles";
import ResponsibleAI from "./components/ResponsibleAi";
import Stewardship from "./components/Stewardship";

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