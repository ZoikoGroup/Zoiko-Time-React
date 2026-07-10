import React from 'react'
import FaqHero from './components/FaqHero'
import FaqTabs from './components/FaqTabs'
import GeneralFaq from './components/GeneralFaq'
import BillingFaq from './components/BillingFaq'
import TimeFaq from './components/TimeFaq'
import PrivacyFaq from './components/PrivacyFaq'
import SecurityFaq from './components/SecurityFaq'
import SupportFaq from './components/SupportFaq'
import FaqNotice from './components/FaqNotice'
import FaqCta from './components/FaqCta'

export default function page() {
  return (
    <main>
        <FaqHero />
        <FaqTabs />
        <GeneralFaq />
        <BillingFaq />
        <TimeFaq />
        <PrivacyFaq />
        <SecurityFaq />
        <SupportFaq />
        <FaqNotice />
        <FaqCta />
    </main>
  )
}

