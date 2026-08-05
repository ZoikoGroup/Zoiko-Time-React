import FaqSection from "../about-zoikotech/components/FaqSection";
import AdministrationPolicyControlsCard from "./adminhero";
import ChangeControlSection from "./ChangeControlSection";
import ControlDomainsSection from "./ControlDomainsSection";
import RolesPermissionsSection from "./RolesPermissionsSection";
import SharedResponsibilitySection from "./SharedResponsibilitySection";
import TrustNoticeBanner from "./TrustNoticeBanner";

export default function page(){
    return(
        <main>
            <AdministrationPolicyControlsCard/>
            <TrustNoticeBanner/>
            <ControlDomainsSection/>
            <ChangeControlSection/>
            <RolesPermissionsSection/>
            <SharedResponsibilitySection/>
            <FaqSection/>

        </main>
    )
}