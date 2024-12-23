'use client'
import { Box, Button } from "@mantine/core"
import ProjectCard from "./ProjectCard"
import { PROJECTS_LIST } from "../../constants/project.constant"
import { useState } from "react"
import { IconArrowRight } from "@tabler/icons-react"
import Link from "next/link"
import classes from '@/styles/Button.module.css'

const ProjectList = () => {
    const [activeCard, setActiveCard] = useState<number | null>(null)

    return (
        <Box style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            width: '100%',
            maxWidth: '900px'
        }}>
            {PROJECTS_LIST.map((project, index) => (
                <div
                    key={index}
                    onMouseOver={() => setActiveCard(index)}
                    onMouseLeave={() => setActiveCard(null)}
                >
                    <ProjectCard
                        project={project}
                        opacity={activeCard === index || activeCard === null ? '1' : '0.5'}
                    />
                </div>
            ))}

            <Link href="/projects" style={{ textDecoration: 'none' }}>
                <Button
                    rightSection={<IconArrowRight size={20} />}
                    className={classes['button-gradient']}>See all</Button>
            </Link>
        </Box>
    )
}

export default ProjectList