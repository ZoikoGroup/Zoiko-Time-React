import AdministrationPolicyControlsCard from "./components/adminhero";
import ChangeControlSection from "./components/ChangeControlSection";
import ControlDomainsSection from "./components/ControlDomainsSection";
import FAQSection from "./components/FAQSection";
import RolesPermissionsSection from "./components/RolesPermissionsSection";
import SharedResponsibilitySection from "./components/SharedResponsibilitySection";
import TrustNoticeBanner from "./components/TrustNoticeBanner";

export default function Page() {
  return (
    <main>
      <AdministrationPolicyControlsCard />
      <TrustNoticeBanner />
      <ControlDomainsSection />
      <ChangeControlSection />
      <RolesPermissionsSection />
      <SharedResponsibilitySection />
      <FAQSection />
    </main>
  );
}
