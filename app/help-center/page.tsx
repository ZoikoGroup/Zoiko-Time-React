import React from 'react'
import HelpHero from './components/HelpHero'
import QuickHelp from './components/QuickHelp'
import HelpRole from './components/HelpRole'
import PopularHelp from './components/PopularHelp'
import StatusHelp from './components/StatusHelp'
import ContactHelp from './components/ContactHelp'
import Resources from './components/Resources'
import HelpCta from './components/HelpCta'

export default function page() {
  return (
    <main>
        <HelpHero />
        <QuickHelp />
        <HelpRole />
        <PopularHelp />
        <StatusHelp />
        <ContactHelp />
        <Resources />
        <HelpCta />
    </main>
  )
}
