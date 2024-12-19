import { Flex } from "@mantine/core"
import Title from "../common/Title"
import { ScrollContext } from "@/contexts/ScrollContext";
import { useContext } from "react";

const Education = () => {
    const { targetRef, targetId } = useContext(ScrollContext);
    return (
        <Flex
            id="education"
            ref={targetId === 'education' ? targetRef : null}
            direction='column'
            p={32}
        >
            <Title text='EDUCATION' />
        </Flex>
    )
}

export default Education