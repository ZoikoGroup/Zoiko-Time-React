import AuditableTimeRecordLineageHero from "./components/AuditableTimeRecordLineageHero";
import CallToAction from "./components/CallToAction";
import CompareVersions from "./components/CompareVersions";
import IncompleteLineage from "./components/IncompleteLineage";
import LineageExplorer from "./components/LineageExplorer";
import LineageFAQ from "./components/LineageFAQ";
import MinimumUnderstandableChain from "./components/MinimumUnderstandableChain";
import PrivacySecurityBoundaries from "./components/PrivacySecurityBoundaries";
import RelationshipMeaning from "./components/RelationshipMeaning";
import RolesDignity from "./components/RolesDignity";

export default function Page() {
  return (
    <main>
      <AuditableTimeRecordLineageHero />
      <MinimumUnderstandableChain />
      <LineageExplorer />
      <RelationshipMeaning />
      <CompareVersions />
      <IncompleteLineage />
      <RolesDignity />
      <PrivacySecurityBoundaries />
      <CallToAction />
      <LineageFAQ />
    </main>
  );
}
