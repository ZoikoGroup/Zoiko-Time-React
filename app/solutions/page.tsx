import React from 'react'
import Hero from './components/hero'
import SolutionsPath from './components/path'
import Business from './components/Business'
import Working from './components/working'
import PrivacyBanner from './components/PrivacyBanner'
import Why from './components/why'
import Cta from './components/cta'


export default function page() {
  return (
    <main>
        <Hero />
        <SolutionsPath />
        <Business />
        <Working />
        <PrivacyBanner />
        <Why />
        <Cta />
    </main>
  )
}
