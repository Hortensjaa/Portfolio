import { createLazyFileRoute } from '@tanstack/react-router'
import { Divider } from '@mui/material'
import EducationTimeline from '../components/educationTimeline'
import ExperienceSection from '../components/experienceSection'
import TechStackCard from '../components/techstackCards'

export const Route = createLazyFileRoute('/about')({
  component: About,
})

function About() {
    return (
        <div>
            <h1>Technological stack</h1>
            <TechStackCard />
            <Divider sx = {{mb: 4}}/>
            <h1>Education</h1>
            <EducationTimeline />
            <Divider sx = {{mb: 4}}/>
            <h1>Work experience</h1>
            <ExperienceSection />
        </div>
    )
}
