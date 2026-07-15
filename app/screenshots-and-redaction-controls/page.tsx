import React from 'react'
import ScreenshotRedactionHero from './components/ScreenshotHero'
import WhyMatters from './components/WhyMatters'
import SupportCards from './components/SupportCards'
import Configuration from './components/Configuration'
import Redaction from './components/Redaction'
import AccessAudit from './components/AccessAudit'
import RetentionEvidence from './components/RetentionEvidence'
import Transparency from './components/Transparency'
import ScreenshotFAQ from './components/ScreenshotFAQ'
import EnterpriseReview from './components/EnterpriseReview'

export default function page() {
  return (
    <main>
        <ScreenshotRedactionHero />
        <WhyMatters />
        <SupportCards />
        <Configuration />
        <Redaction />
        <AccessAudit />
        <RetentionEvidence />
        <Transparency />
        <ScreenshotFAQ />
        <EnterpriseReview />
    </main>
  )
}
