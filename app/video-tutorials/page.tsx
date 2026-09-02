import type { Metadata } from "next";
import React from 'react'
import VideoTutorials from './components/VideoTutorials'
import Accessibility from './components/Accessibility'
import LearningPaths from './components/LearningPaths'
import TutorialPreview from './components/TutorialPreview'
import AccessOptions from './components/AccessOptions'
import ContentTrust from './components/ContentTrust'
import LearnByDoing from './components/LearnByDoing'

export const metadata: Metadata = {
  title: "Video Tutorials and Training Guides | ZoikoTime",
  description: "Learn ZoikoTime with video tutorials featuring captions, transcripts, safe demo data, guided learning paths, and verification checklists for every role.",
};

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
