import { createLazyFileRoute } from '@tanstack/react-router'
import ProjectsCards from '../components/projectCards'

export const Route = createLazyFileRoute('/projects')({
  component: () => 
  <div>
    <ProjectsCards/>
  </div>
})