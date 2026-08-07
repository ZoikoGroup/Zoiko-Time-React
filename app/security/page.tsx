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