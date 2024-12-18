import { Box, Flex, Text } from "@mantine/core"
import { MultiRoleExperienceProps } from "../constants/experience.constant"
import Image from "next/image"
import useWindowSize from "@/hooks/use-window-size"

const MultiRoleCard = ({ experience }: { experience: MultiRoleExperienceProps }) => {
    const { isMobile } = useWindowSize()

    return (
        <Flex gap='md' w='100%'
            direction={isMobile ? 'column' : 'row'}
            style={{
                padding: '20px',
                background: 'white',
                borderRadius: '8px',
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px -1px rgba(0, 0, 0, .1)',
            }}
        >
            <Image src={experience.logo} alt="logo" width={64} />

            <Flex direction='column' w='100%'>

                <Text size="xl" fw={600}>{experience.company_name}</Text>
                <Text size='md' c='gray' visibleFrom="md">{experience.location}</Text>

                <Flex
                    pt={10}
                    gap={10}
                    direction='column'
                >
                    {
                        experience.roles.map((role, index) => (
                            <Flex
                                key={role.title}
                                gap='xs'
                                direction='column'
                                pos='relative'
                            >
                                <span style={{
                                    backgroundColor: 'var(--mantine-color-gray-5)',
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '100%',
                                    position: 'absolute',
                                    left: '-30px',
                                    top: '10px'
                                }} />

                                {index !== experience.roles.length - 1 && <span style={{
                                    backgroundColor: 'var(--mantine-color-gray-5)',
                                    width: '2px',
                                    height: '110%',
                                    position: 'absolute',
                                    left: '-27px',
                                    top: '10px'
                                }} />}
                                <Flex
                                    w='100%'
                                    direction={isMobile ? 'column' : 'row'}
                                    justify='space-between'
                                >
                                    <Text size='lg' fw={600}>{role.title}</Text>
                                    <Text size='md' fw={500}>{role.date}</Text>
                                </Flex>

                                <Flex direction='column' gap={4}>
                                    {role.description.map((desc) => (
                                        <Text size='md' key={index}>{desc}</Text>
                                    ))}
                                </Flex>

                            </Flex>
                        ))
                    }
                </Flex>
            </Flex>
        </Flex >
    )
}

export default MultiRoleCard