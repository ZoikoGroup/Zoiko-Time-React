import React from 'react'
import VideoTutorials from './components/VideoTutorials'
import Accessibility from './components/Accessibility'
import LearningPaths from './components/LearningPaths'
import TutorialPreview from './components/TutorialPreview'
import AccessOptions from './components/AccessOptions'
import ContentTrust from './components/ContentTrust'
import LearnByDoing from './components/LearnByDoing'

export default function page() {
  return (
    <main>
        <VideoTutorials />
        <Accessibility />
        <LearningPaths />
        <TutorialPreview />
        <AccessOptions />
        <ContentTrust />
        <LearnByDoing />
    </main>
  )
}
