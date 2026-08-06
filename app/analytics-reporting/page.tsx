import React from 'react'
import AnalyticsReportingHero from './components/AnalyticsReportingHero'
import WhatAnalyticsIs from './components/WhatAnalyticsIs'
import WhyGovernedAnalyticsMatters from './components/WhyGovernedAnalyticsMatters'
import AnalyticsLifecycle from './components/AnalyticsLifecycle'
import AnalyticsGovernanceCenter from './components/AnalyticsGovernanceCenter'
import MetricCatalog from './components/MetricCatalog'
import ScopeFiltersTime from './components/ScopeFiltersTime'
import QualityTrust from './components/QualityTrust'
import PrivacyAggregation from './components/PrivacyAggregation'
import EnterpriseWorkforceViews from './components/EnterpriseWorkforceViews'
import SeriesBreakSection from './components/SeriesBreakSection'
import AnomalyReviewBoundaries from './components/AnomalyReviewBoundaries'
import ReportDashboardBuilder from './components/ReportDashboardBuilder'
import SchedulesSubscriptionsDistribution from './components/SchedulesSubscriptionsDistribution'
import Exports from './components/Exports'
import RoleBasedAccess from './components/RoleBasedAccess'
import AnalyticsQuestionsFAQ from './components/AnalyticsQuestionsFAQ'

export default function page() {
  return (
    <main>
        <AnalyticsReportingHero />
        <WhatAnalyticsIs />
        <WhyGovernedAnalyticsMatters />
        <AnalyticsLifecycle />
        <AnalyticsGovernanceCenter />
        <MetricCatalog />
        <ScopeFiltersTime />
        <QualityTrust />
        <PrivacyAggregation />
        <EnterpriseWorkforceViews />
        <SeriesBreakSection />
        <AnomalyReviewBoundaries />
        <ReportDashboardBuilder />
        <SchedulesSubscriptionsDistribution />
        <Exports />
        <RoleBasedAccess />
        <AnalyticsQuestionsFAQ />
    </main>
  )
}
