import { Flex, List, Text } from "@mantine/core"
import { SingleRoleExperienceProps } from "../constants/experience.constant"
import Image from "next/image"
import useWindowSize from "@/hooks/use-window-size"
import { useContext } from "react"
import { ScrollContext } from "@/contexts/ScrollContext"
import Title from "../common/Title"
import Link from "next/link"

const Education = () => {
    const { isMobile } = useWindowSize()
    const { targetId, targetRef } = useContext(ScrollContext);

    return (
        <Flex
            id="education"
            align='center'
            justify='center'
            p={isMobile ? 'md' : 'xl'}
            ref={targetId === 'education' ? targetRef : null}
            gap={isMobile ? '0' : 'md'}
            direction='column'
            style={{
                width: '100%',
            }}
        >
            {/* <Image src={experience.logo} alt="logo" width={64} /> */}
            <Title text="Education" />


            <Flex direction='column'
                style={{
                    width: '100%',
                    padding: '20px',
                    background: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px -1px rgba(0, 0, 0, .1)',
                    maxWidth: '1000px'

                }}>
                <Flex
                    direction={isMobile ? 'column' : 'row'}
                    justify='space-between'
                    style={{
                        width: '100%',
                    }}
                >
                    <Text size="xl" fw={600}>Ho Chi Minh City University of Technology (HCMUT)</Text>

                    <Text size='lg'>Oct 2020 - June 2024</Text>
                </Flex>
                {/* <Text size='lg'>Ho Chi Minh City University of Technology (HCMUT)</Text> */}
                <Text size='md' >Bachelor&apos;s degree, Computer Science</Text>
                <Text size='md' visibleFrom="md">GPA: 3.4/4 (or 8.05/10)</Text>

                <Flex direction='column' gap='xs' mt={10}>
                    <Text size="lg" fw={600}>Achievement & Certicicates</Text>
                    <List>
                        <List.Item>
                            <Text size='md'>Student with Five Good Merits Award (Ho Chi Minh City level)</Text>
                            {/* <Text size='sm' c='gray'>Issued by Vietnam National University - Ho Chi Minh City</Text> */}
                        </List.Item>
                        <List.Item>
                            <Text size='md'>Fossil Scholarship 2022 | EMPOWERING IT YOUTH</Text>
                            {/* <Text size='sm' c='gray'>Issued by Fossil Group | EMPOWERING IT YOUTH</Text> */}
                        </List.Item>
                        <List.Item>
                            <Text size='md'>Encouragement Scholarship (Term 2/2024)</Text>
                        </List.Item>
                        <List.Item>
                            <Text size='md'>Software Development with Scrum Certificate</Text>
                            {/* <Text size='sm' c='gray'>Certified by Axon Active</Text> */}
                        </List.Item>
                        <List.Item>
                            <Text size='md'>TOEIC Reading & Listening | Score: 680</Text>
                        </List.Item>
                    </List>

                    <Text size="lg" fw={600}>Extracurricular Activity</Text>
                    <List>
                        <List.Item>
                            <Text size='md'>CSE Multimedia:</Text>
                            <Text size='md' c='gray'>Lead of design team: Design media publications and other products for events such as the CSE Job Fair, the
                                Green Summer Volunteer Campaign, etc <Link href={''}>Explore my Gallery</Link></Text>
                        </List.Item>
                        <List.Item>
                            <Text size='md'>Spring Volunteer Campaign of CSE Faculty 2020 - 2021</Text>
                            <Text size='md' c='gray'>Volunteer: Support less fortunate people and primary students</Text>
                        </List.Item>
                    </List>
                    {/* {
                        experience.description.map((description, index) => (
                            <Text key={index} size='md'>{description}</Text>
                        ))
                    } */}
                </Flex>
            </Flex>
        </Flex >
    )
}

export default Education