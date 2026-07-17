import React from 'react'
import Demo from './components/Demo'
import Session from './components/Session'
import Committee from './components/Committee'
import Ready from './components/Ready'

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
