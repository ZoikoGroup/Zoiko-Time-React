import type { Metadata } from "next";
import React from 'react'
import ROI from './components/ROI'
import ValueDrivers from './components/ValueDrivers'
import CalculationNotice from './components/CalculationNotice'
import Ready from './components/Ready'

export const metadata: Metadata = {
  title: "ZoikoTime ROI Calculator | Measure Your Savings",
  description: "Use the ZoikoTime ROI calculator to estimate workforce savings, improve productivity, reduce admin effort, and understand your time tracking impact.",
};

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
