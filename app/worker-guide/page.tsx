import React from 'react'
import WorkerGuideHero from './components/WorkerGuideHero'
import WorkerOverview from './components/WorkerOverview'
import WorkerAccount from './components/WorkerAccount'
import WorkerWorkflows from './components/WorkerWorkflows'
import WorkContext from './components/WorkContext'
import SensitiveInfo from './components/SensitiveInfo'
import WorkerFAQs from './components/WorkerFAQs'
import HelpCTA from './components/HelpCTA'


export default function page() {
  return (
    <main>
        <WorkerGuideHero />
        <WorkerOverview />
        <WorkerAccount />
        <WorkerWorkflows />
        <WorkContext />
        <SensitiveInfo />
        <WorkerFAQs />
        <HelpCTA />
    </main>
  )
}
