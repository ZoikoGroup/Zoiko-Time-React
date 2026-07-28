import React from 'react'
import Hero from './components/Hero'
import PrivacyBanner from './components/PrivacyBanner'
import CoreCapabilities from './components/CoreCapabilities'
import ZoikoEcosystem from './components/ZoikoEcosystem'
import WhoWeServe from './components/WhoWeServe'
import ReadyToBuild from './components/ReadyToBuild'

export default function page() {
  return (
   <main>
    <Hero />
    <PrivacyBanner />
    <CoreCapabilities />
    <ZoikoEcosystem />
    <WhoWeServe />
    <ReadyToBuild />
   </main>
  )
}
