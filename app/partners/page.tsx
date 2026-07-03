import Contact from "./components/Contact";
import CtaSection from "./components/CtaSection";
import Enablement from "./components/Enablement";
import FaqSection from "./components/FaqSection";
import Hero from "./components/Hero";
import Pathway from "./components/Pathway";
import Review from "./components/Review";
import Standard from "./components/Standard";
import WhyPartner from "./components/WhyPartner";

export default function PartnersPage() {
    return (
        <main>
            <Hero />
            <WhyPartner />
            <Pathway />
            <Standard />
            <Enablement />
            <Review />
            <FaqSection />
            <Contact />
            <CtaSection />
        </main>
    )
}