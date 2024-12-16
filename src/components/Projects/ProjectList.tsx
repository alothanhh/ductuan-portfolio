'use client'
import { Box, Button } from "@mantine/core"
import ProjectCard from "./ProjectCard"
import { PROJECTS_LIST } from "../constants/project.constant"
import { useState } from "react"
import { useHover } from "@mantine/hooks"
import { IconArrowRight } from "@tabler/icons-react"

const ProjectList = () => {
    const [activeCard, setActiveCard] = useState<number | null>(null)
    const { hovered, ref } = useHover<HTMLButtonElement>();

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

            <Button
                ref={ref}
                rightSection={<IconArrowRight size={20} />}
                style={{
                    width: 'max-content',
                    backgroundSize: '200%',
                    transition: 'background-position 0.8s ease, color 0.3s ease',
                    backgroundImage: hovered
                        ? 'linear-gradient(90deg, rgb(26, 247, 169), rgb(8, 205, 218), rgb(26, 247, 169))'
                        : 'linear-gradient(90deg, rgb(8, 205, 218), rgb(26, 247, 169), rgb(8, 205, 218))',
                    backgroundPosition: hovered ? '100% 0' : '0% 0',
                }} color="rgb(26, 247, 169)">See all</Button>
        </Box>
    )
}

export default ProjectList