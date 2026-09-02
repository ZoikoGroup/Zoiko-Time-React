import type { Metadata } from "next";
import React from 'react'
import Hero from './components/Hero'
import PrivacyNoticeCard from './components/PrivacyNoticeCard'
import PurposeScope from './components/PurposeScope'
import ControllerPlatformOperator from './components/ControllerPlatformOperator'
import WhatCookiesAre from './components/WhatCookiesAre'
import CorePrinciples from './components/CorePrinciples'
import CookieCategories from './components/CookieCategories'
import WorkforceContexts from './components/WorkforceContexts'
import LegalBasesConsent from './components/LegalBasesConsent'
import ManageCookies from './components/ManageCookies'
import ChangesNotice from './components/ChangesNotice'
import ContactZoikoTime from './components/ContactZoikoTime'

export const metadata: Metadata = {
  title: "ZoikoTime Cookie Notice | Cookies & Tracking Policy",
  description: "ZoikoTime Cookie Notice explains how we use cookies, pixels, SDKs, and tracking technologies to improve performance across websites, apps, and services.",
};

export default function page() {
  return (
    <main>
        <Hero />
        <PrivacyNoticeCard />
        <PurposeScope />
        <ControllerPlatformOperator />
        <WhatCookiesAre />
        <CorePrinciples />
        <CookieCategories />
        <WorkforceContexts />
        <LegalBasesConsent />
        <ManageCookies />
        <ChangesNotice />
        <ContactZoikoTime />
    </main>
  )
}
