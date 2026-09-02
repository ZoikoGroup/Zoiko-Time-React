import type { Metadata } from "next";
import Capabilities from "./components/Capabilities";
import Commitment from "./components/Commitment";
import CtaSection from "./components/CtaSection";
import Ecosystem from "./components/Ecosystem";
import Governance from "./components/Governance";
import Hero from "./components/Hero";
import NewStandard from "./components/NewStandard";
import Objective from "./components/Objective";
import Philosophy from "./components/Philosophy";
import Purpose from "./components/Purpose";
import Security from "./components/Security";
import WhyZoikoTime from "./components/WhyZoikoTime";

export const metadata: Metadata = {
  title: "ZoikoTime About Us | Smart Time Tracking Platform",
  description: "ZoikoTime is a Smart Time Tracking Platform that uses AI to improve workforce productivity, streamline time tracking, and deliver actionable team insights.",
};

export default function page() {
    return (
        <main>
            <Hero />
            <NewStandard />
            <Purpose />
            <WhyZoikoTime />
            <Capabilities />
            <Objective />
            <Governance />
            <Security />
            <Philosophy />
            <Ecosystem />
            <Commitment />
            <CtaSection />
        </main>
    )
}
