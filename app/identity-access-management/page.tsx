import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import IamHero from "./components/IamHero";
import StandardsStrip from "./components/StandardsStrip";
import AccessControl from "./components/AccessControl";
import IdentityLifecycle from "./components/IdentityLifecycle";
import GovernedAccess from "./components/GovernedAccess";
import AccessReviews from "./components/AccessReviews";
import VisibilityControl from "./components/VisibilityControl";
import EnterpriseIsolation from "./components/EnterpriseIsolation";
import SecureByDesign from "./components/SecureByDesign";
import ConnectsWithStack from "./components/ConnectsWithStack";
import IamFaq from "./components/IamFaq";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Workforce Identity & Access Management | ZoikoTime",
  description: "Manage workforce identity and access with ZoikoTime. Control SSO, MFA, roles, provisioning, time-bound access, reviews, sessions, and audit trails securely.",
};

export default function Page() {
  return (
    <div className={`${poppins.variable} iam-type`}>
      <IamHero />
      <StandardsStrip />
      <AccessControl />
      <IdentityLifecycle />
      <GovernedAccess />
      <AccessReviews />
      <VisibilityControl />
      <EnterpriseIsolation />
      <SecureByDesign />
      <ConnectsWithStack />
      <IamFaq />
    </div>
  );
}
