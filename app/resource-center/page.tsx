import React from 'react'
import ResHero from './components/ResHero'
import TaskCards from './components/TaskCards'
import Governance from './components/Governance'
import RoleStage from './components/RoleStage'
import ResourceFamilies from './components/ResourceFamilies'
import Directory from './components/Directory'
import Authority from './components/Authority'
import Recovery from './components/Recovery'
import PersonHelp from './components/PersonHelp'
import FAQ from './components/FAQ'

export default function page() {
  return (
    <main>
        <ResHero />
        <TaskCards />
        <Governance />
        <RoleStage />
        <ResourceFamilies />
        <Directory />
        <Authority />
        <Recovery />
        <PersonHelp />
        <FAQ />
    </main>
  )
}
