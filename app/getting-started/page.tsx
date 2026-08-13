import React from 'react'
import Start from './components/Start'
import PathFinder from './components/PathFinder'
import Model from './components/Model'
import Tracks from './components/Tracks'
import Ready from './components/Ready'
import Paths from './components/Paths'
import Test from './components/Test'
import Progress from './components/Progress'
import Govern from './components/Govern'
import Support from './components/Support'
import FAQ from './components/FAQ'
import ReadyCTA from './components/ReadyCTA'

export default function page() {
  return (
    <main>
        <Start />
        <PathFinder />
        <Model />
        <Tracks />
        <Ready />
        <Paths />
        <Test />
        <Progress />
        <Govern />
        <Support />
        <FAQ />
        <ReadyCTA />
    </main>
  )
}
