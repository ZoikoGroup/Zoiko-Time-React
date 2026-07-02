import Commitment from "./components/Commitment";
import CtaSection from "./components/CtaSection";
import FaqSection from "./components/FaqSection";
import Governance from "./components/Governance";
import Hero from "./components/Hero";
import Implementation from "./components/Implementation";
import Reporting from "./components/Reporting";
import Scalability from "./components/Scalability";
import Security from "./components/Security";

export default function EnterpriseReadinessPage() {
    return (
        <main>
            <Hero />
            <Commitment />
            <Security />
            <Governance />
            <Implementation />
            <Reporting />
            <Scalability />
            <FaqSection />
            <CtaSection/>
        </main>
    )
}