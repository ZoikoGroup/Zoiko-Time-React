import ContactSection from "./components/ContactSection";
import Coverage from "./components/Coverage";
import CtaSection from "./components/CtaSection";
import Explainer from "./components/Explainer";
import Hero from "./components/Hero";

export default function ContactPage() {
    return (
        <main>
            <Hero />
            <ContactSection />
            <Explainer />
            <Coverage />
            <CtaSection />
        </main>
    )
}