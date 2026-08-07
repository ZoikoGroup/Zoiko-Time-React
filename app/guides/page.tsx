import BrowseByOutcomeSection from "./components/BrowseByOutcomeSection";
import BrowseByProductAreaSection from "./components/BrowseByProductAreaSection";
import BrowseByRoleSection from "./components/BrowseByRoleSection";
import EditorialStandardsSection from "./components/EditorialStandardsSection";
import FeaturedGuidesSection from "./components/FeaturedGuidesSection";
import GuidesHeroSection from "./components/GuidesHeroSection";
import KeepLearningCTA from "./components/KeepLearningCTA";
import LearningPathsSection from "./components/LearningPathsSection";
import PopularPathsSection from "./components/PopularPathsSection";
import RecentGuidesSection from "./components/RecentGuidesSection";

export default function page(){
    return(
        <main>
            <GuidesHeroSection/>
            <PopularPathsSection/>
            <FeaturedGuidesSection/>
            <BrowseByOutcomeSection/>
            <BrowseByRoleSection/>
            <BrowseByProductAreaSection/>
            <LearningPathsSection/>
            <RecentGuidesSection/>
            <EditorialStandardsSection/>
            <KeepLearningCTA/>
        </main>
    )
}