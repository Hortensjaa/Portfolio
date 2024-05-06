import { createLazyFileRoute } from '@tanstack/react-router'
import { Divider, Typography } from '@mui/material'
import EducationTimeline from '../components/educationTimeline'
import ExperienceSection from '../components/experienceSection'
import TechStackCards from '../components/techstackCards'
import AboutMeSection from '../components/aboutMeSection'

export const Route = createLazyFileRoute('/about')({
  component: About,
})

function About() {
    return (
        <div>
            <AboutMeSection />
            <Typography variant="h2" sx={{mt: 10}}>Stack</Typography>
            <TechStackCards />
            <Divider sx = {{mb: 4}}/>
            <Typography variant="h2" sx={{mt: 10}}>Education</Typography>
            <EducationTimeline />
            <Divider sx = {{mb: 4}}/>
            <Typography variant="h2" sx={{mt: 10}}>Work experience</Typography>
            <ExperienceSection />
        </div>
    )
}
