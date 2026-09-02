import type { Metadata } from "next";
import AntiSurveillanceBanner from "./components/AntiSurveillanceBanner";
import ControlledSecurityReview from "./components/ControlledSecurityReview";
import DataProtectionAndBoundaries from "./components/DataProtectionAndBoundaries";
import DevAndLoggingControls from "./components/DevAndLoggingControls";
import IdentityAndAccess from "./components/IdentityAndAccess";
import IncidentsAndRecovery from "./components/IncidentsAndRecovery";
import ProviderSecurity from "./components/ProviderSecurity";
import SecurityEvidenceDirectory from "./components/SecurityEvidenceDirectory";
import SecurityHero from "./components/SecurityHero";
import SecurityPrinciples from "./components/SecurityPrinciples";
import SecurityQuestionsFAQ from "./components/SecurityQuestionsFAQ";
import SharedResponsibility from "./components/SharedResponsibility";

export const metadata: Metadata = {
  title: "Security & Data Protection for Workforces | ZoikoTime",
  description: "Learn how ZoikoTime protects workforce data with encryption, access controls, monitoring, secure development, incident response, and privacy safeguards.",
};

export default function page(){
    return(
        <main>
            <SecurityHero/>
            <AntiSurveillanceBanner/>
            <SecurityPrinciples/>
            <IdentityAndAccess/>
            <DataProtectionAndBoundaries/>
            <DevAndLoggingControls/>
            <IncidentsAndRecovery/>
            <ProviderSecurity/>
            <SecurityEvidenceDirectory/>
            <SharedResponsibility/>
            <ControlledSecurityReview/>
            <SecurityQuestionsFAQ/>
        </main>
    )
}