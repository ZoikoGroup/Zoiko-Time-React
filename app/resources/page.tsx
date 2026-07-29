import React from 'react'
import ResourcesHero from './components/resources-hero'
import ContentIntegrity from './components/content-integrity'
import LearnSection from './components/LearnSection'
import UseZoikoTime from './components/UseZoikoTime'
import BuildUpdated from './components/BuildUpdated'

export default function page() {
  return (
    <main>
        <ResourcesHero />
        <ContentIntegrity />
        <LearnSection />
        <UseZoikoTime />
        <BuildUpdated />
    </main>
  )
}
