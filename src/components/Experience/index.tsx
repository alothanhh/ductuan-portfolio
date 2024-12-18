import { ScrollContext } from "@/contexts/ScrollContext";
import useWindowSize from "@/hooks/use-window-size";
import { Box, Flex, Text } from "@mantine/core";
import { useContext } from "react";
import { EXPERIENCES } from "../constants/experience.constant";
import ExperienceCard from "./ExperienceCard";
import Title from "../common/Title";

const Experience = () => {
    const { isMobile } = useWindowSize();
    const { targetRef, targetId } = useContext(ScrollContext);

    return (
        <Box
            id="experience"
            ref={targetId === 'experience' ? targetRef : null}
            style={{
                backgroundColor: '#F7F7F7',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '32px',
                alignItems: 'center',
                padding: '40px 32px'
            }}
        >
            <Title text='EXPERIENCE' />

            <Flex
                direction='column'
                align='center'
                style={{
                    maxWidth: '992px',
                    width: '100%',
                }}
                gap='md'
            >
                {EXPERIENCES.map((experience, index) => (
                    <ExperienceCard key={index} experience={experience} />
                ))}
            </Flex>
        </Box>
    )
}

export default Experience