import type { Metadata } from "next";
import Contact from "./components/Contact";
import CtaSection from "./components/CtaSection";
import Enablement from "./components/Enablement";
import FaqSection from "./components/FaqSection";
import Hero from "./components/Hero";
import Pathway from "./components/Pathway";
import Review from "./components/Review";
import Standard from "./components/Standard";
import WhyPartner from "./components/WhyPartner";

export const metadata: Metadata = {
  title: "Become a ZoiKoTime Partner and Grow Together",
  description: "Partner with ZoiKoTime to unlock new growth opportunities, expand your reach, and build successful collaborations with a trusted business network.",
};

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