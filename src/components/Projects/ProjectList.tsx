'use client'

import { useState } from 'react'
import { Grid } from '@mantine/core'

import useWindowSize from '@/hooks/use-window-size'

import { PROJECTS_LIST } from '../constants/project.constant'

import ProjectCard from './ProjectCard'

const ProjectList = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const { isMobile } = useWindowSize()

  return (
    <Grid
      style={{
        alignItems: 'center',
        gap: '20px',
        width: '100%',
        padding: isMobile ? '32px' : '32px 64px',
      }}
    >
      {PROJECTS_LIST.map((project, index) => (
        <Grid.Col
          key={index}
          span={{ base: 12, md: 6 }}
          onMouseOver={() => setActiveCard(index)}
          onMouseLeave={() => setActiveCard(null)}
        >
          <ProjectCard project={project} opacity={activeCard === index || activeCard === null ? '1' : '0.5'} />
        </Grid.Col>
      ))}
    </Grid>
  )
}

export default ProjectList
