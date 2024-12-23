import ProjectList from "@/components/Projects/ProjectList"
import { Box, Flex, Grid, Text, Title } from "@mantine/core"

const Projects = () => {
    return (
        <Grid pt={70} pb={70} >
            <Box
                style={{
                    backgroundColor: '#F7F7F7',
                    width: '100%',
                    padding: '50px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    gap: '8px',
                }}
            >
                <Title>PROJECTS</Title>
                <Text size="md">A curated selection of my web projects.</Text>
            </Box>

            <ProjectList />
        </Grid>
    )
}

export default Projects