import React from 'react'
import DisclosureHero from './components/DisclosureHero'
import RouteCheck from './components/RouteCheck'
import TestWarning from './components/TestWarning'

export default function page() {
  return (
    <main>
        <DisclosureHero />
        <RouteCheck />
        <TestWarning />
    </main>
  )
}
