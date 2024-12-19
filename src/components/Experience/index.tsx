import { ScrollContext } from "@/contexts/ScrollContext";
import useWindowSize from "@/hooks/use-window-size";
import { Box, Flex, Text } from "@mantine/core";
import { useContext } from "react";
import { ATOM, XELEX } from "../constants/experience.constant";
import Title from "../common/Title";
import SingleRoleCard from "./SingleRoleCard";
import MultiRoleCard from "./MultiRoleCard";

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
                padding: isMobile ? '32px 16px' : '40px 32px'
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
                <MultiRoleCard experience={ATOM} />
                <SingleRoleCard experience={XELEX} />
            </Flex>
        </Box>
    )
}

export default Experience