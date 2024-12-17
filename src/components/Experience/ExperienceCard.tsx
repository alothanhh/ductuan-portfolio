import { Flex, Text } from "@mantine/core"
import { ExperienceProps } from "../constants/experience.constant"
import Image from "next/image"

const ExperienceCard = ({ experience }: { experience: ExperienceProps }) => {
    return (
        <Flex
            gap='md'
            style={{
                padding: '20px',
                width: '100%',
                background: 'white',
                borderRadius: '8px',
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px -1px rgba(0, 0, 0, .1)',
            }}
        >
            <Image src={experience.logo} alt="logo" width={64} />

            <Flex direction='column'
                style={{
                    width: '100%',
                }}>
                <Flex
                    justify='space-between'
                    style={{
                        width: '100%',
                    }}
                >
                    <Text size="xl" fw={600}>{experience.title}</Text>

                    <Text size='md'>{experience.date}</Text>
                </Flex>
                <Text size='lg'>{experience.company}</Text>
                <Text size='md' c='gray'>{experience.work_type}</Text>

                <Flex direction='column' gap='xs' mt={10}>
                    {
                        experience.description.map((description, index) => (
                            <Text key={index} size='md'>{description}</Text>
                        ))
                    }
                </Flex>
            </Flex>
        </Flex >
    )
}

export default ExperienceCard