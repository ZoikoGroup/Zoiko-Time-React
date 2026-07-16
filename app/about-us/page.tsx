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
