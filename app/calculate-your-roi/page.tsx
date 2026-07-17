import React from 'react'
import ROI from './components/ROI'
import ValueDrivers from './components/ValueDrivers'
import CalculationNotice from './components/CalculationNotice'
import Ready from './components/Ready'

export default function page() {
  return (
    <main>
      <ROI />
      <ValueDrivers />
      <CalculationNotice />
      <Ready />
    </main>
  )
}
