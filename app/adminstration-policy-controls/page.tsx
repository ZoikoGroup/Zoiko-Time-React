import type { Metadata } from "next";
import AdministrationPolicyControlsCard from "./components/adminhero";
import ChangeControlSection from "./components/ChangeControlSection";
import ControlDomainsSection from "./components/ControlDomainsSection";
import FAQSection from "./components/FAQSection";
import RolesPermissionsSection from "./components/RolesPermissionsSection";
import SharedResponsibilitySection from "./components/SharedResponsibilitySection";
import TrustNoticeBanner from "./components/TrustNoticeBanner";

export const metadata: Metadata = {
  title: "Workforce Policy Controls & Administration | ZoikoTime",
  description: "Manage workforce policy controls and administration with ZoikoTime. Configure permissions, approvals, jurisdictions, retention rules & audit trails with ease.",
};

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
