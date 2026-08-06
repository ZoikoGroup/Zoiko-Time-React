import DataMigrationAfterHeroSection from './components/DataMigrationAfterHeroSection';
import CutoverContinuitySection from './components/CutoverContinuitySection';
import EvidenceContinuitySection from './components/EvidenceContinuitySection';
import DataQualityExceptionsSection from './components/DataQualityExceptionsSection';
import DataMigrationHeroSection from './components/DataMigrationHeroSection';
import MigrationGovernanceCenterSection from './components/MigrationGovernanceCenterSection';
import MigrationFaqSection from './components/MigrationFaqSection';
import MigrationReadinessAssessment from './components/MigrationReadinessAssessment';
import RehearsalValidationSection from './components/RehearsalValidationSection';
import ServiceAvailabilitySection from './components/ServiceAvailabilitySection';
import SecurityTrustSection from './components/SecurityTrustSection';
import SourceScopeRegistrySection from './components/SourceScopeRegistrySection';
import WhyGovernedMigrationMatters from './components/WhyGovernedMigrationMatters';
import DeterministicMappingSection from './components/DeterministicMappingSection.tsx';
import GovernedMigrationHero from './components/GovernedMigrationHero';

export default function Page() {
  return (
    <main>
      <DataMigrationHeroSection />
      <DataMigrationAfterHeroSection />
      <WhyGovernedMigrationMatters />
      <MigrationGovernanceCenterSection />
      <MigrationReadinessAssessment />
      <SourceScopeRegistrySection />
      <DeterministicMappingSection/>
      <DataQualityExceptionsSection />
      <RehearsalValidationSection />
      <CutoverContinuitySection />
      <SecurityTrustSection />
      <EvidenceContinuitySection />
      <ServiceAvailabilitySection />
      
      <GovernedMigrationHero/>
      <MigrationFaqSection />
    </main>
  );
}
