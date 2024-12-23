'use client'
import { Box, Button, Grid } from "@mantine/core"
import ProjectCard from "./ProjectCard"
import { PROJECTS_LIST } from "../constants/project.constant"
import { useState } from "react"
import { IconArrowRight } from "@tabler/icons-react"
import Link from "next/link"
import classes from '@/styles/Button.module.css'
import useWindowSize from "@/hooks/use-window-size"

const ProjectList = () => {
    const [activeCard, setActiveCard] = useState<number | null>(null)
    const { isMobile } = useWindowSize()

    return (
        <Grid
            style={{
                alignItems: 'center',
                gap: '20px',
                width: '100%',
                padding: isMobile ? '32px' : '32px 64px'
            }}>
            {PROJECTS_LIST.map((project, index) => (
                <Grid.Col
                    key={index}
                    span={{ base: 12, md: 6 }}
                    onMouseOver={() => setActiveCard(index)}
                    onMouseLeave={() => setActiveCard(null)}
                >
                    <ProjectCard
                        project={project}
                        opacity={activeCard === index || activeCard === null ? '1' : '0.5'}
                    />
                </Grid.Col>
            ))}
        </Grid>
    )
}

export default ProjectList