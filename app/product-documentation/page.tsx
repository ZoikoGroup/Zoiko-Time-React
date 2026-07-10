import React from 'react'
import DocsHero from './components/DocsHero'
import DocCategories from './components/DocCategories'
import StartHere from './components/StartHere'
import RoleDocs from './components/RoleDocs'
import Capabilities from './components/Capabilities'
import Governance from './components/Governance'
import DocFaq from './components/DocFaq'
import DocCta from './components/DocCta'

export default function page() {
  return (
    <main> 
        <DocsHero />
        <DocCategories />
        <StartHere />
        <RoleDocs />
        <Capabilities />
        <Governance />
        <DocFaq />
        <DocCta />
    </main>
  )
}
