import React from 'react'
import AnalyticsHero from './components/AnalyticsHero'
import Problem from './components/Problem'
import Categories from './components/Categories'
import Executive from './components/Executive'
import Finance from './components/Finance'
import Operations from './components/Operations'
import Evidence from './components/Evidence'
import Teams from './components/Teams'
import Responsible from './components/Responsible'
import Decision from './components/Decision'

export default function page() {
  return (
    <main>
        <AnalyticsHero />
        <Problem />
        <Categories />
        <Executive />
        <Finance />
        <Operations />
        <Evidence />
        <Teams />
        <Responsible />
        <Decision />
    </main>
  )
}
