import type { Metadata } from "next";
import React from 'react'
import Demo from './components/Demo'
import Session from './components/Session'
import Committee from './components/Committee'
import Ready from './components/Ready'

export const metadata: Metadata = {
  title: "Request a Tailored ZoikoTime Enterprise Demo",
  description: "Request a tailored ZoikoTime demo to explore workforce governance, compliance, payroll evidence, audit-ready records, AI intelligence & multi-country teams.",
};

export default function page() {
  return (
    <main>
        <Demo />
        <Session />
        <Committee />
        <Ready />
    </main>
  )
}
