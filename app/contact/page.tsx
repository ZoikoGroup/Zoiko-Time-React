import type { Metadata } from "next";
import ContactSection from "./components/ContactSection";
import Coverage from "./components/Coverage";
import CtaSection from "./components/CtaSection";
import Explainer from "./components/Explainer";
import Hero from "./components/Hero";

export const metadata: Metadata = {
  title: "ZoikoTime Contact Us | Get in Touch Today",
  description: "Contact ZoikoTime to learn more about our workforce assurance solutions, enterprise technology, partnerships, and how we support modern organisations.",
};

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