import Image from 'next/image'

import { ActionIcon, Box, Divider, Flex, List, Text, ThemeIcon } from '@mantine/core'
import { IconBrandGithub, IconCalendarDue, IconUsers } from '@tabler/icons-react'

import { ProjectDetailProps } from '@/constants/project.constant'

import ModalWrap from '../shared/modal-wrap'

type Props = {
  onClose: () => void
  isOpen: boolean
  selectedProject: ProjectDetailProps
}

const ModalDetailProject = ({ onClose, isOpen, selectedProject: project }: Props) => {
  // const { isMobile } = useWindowSize()

  return (
    <ModalWrap onClose={onClose} isOpen={isOpen}>
      <h1>{project.title}</h1>
      <Image
        src={project.image}
        alt='project'
        style={{
          width: '100%',
          maxHeight: '400px',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          borderRadius: '8px',
          marginTop: '20px',
        }}
      />
      <Flex justify={'space-between'} mt={20}>
        <Box style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <ThemeIcon variant='light' size='lg' radius='xl' color='rgb(8, 205, 218)'>
            <IconCalendarDue />
          </ThemeIcon>
          <Text fw={500}>{project.date}</Text>
        </Box>

        <Box>
          <ActionIcon
            variant='gradient'
            size='lg'
            radius='xl'
            aria-label='Gradient action icon'
            gradient={{ from: 'rgb(26, 247, 169)', to: 'rgb(8, 205, 218)', deg: 128 }}
          >
            <IconBrandGithub />
          </ActionIcon>
        </Box>
      </Flex>

      <Box style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <ThemeIcon variant='light' size='lg' radius='xl' color='rgb(8, 205, 218)'>
          <IconUsers />
        </ThemeIcon>
        <Text fw={500}>
          Team size: {project.teamSize} - FE Team: {project.feTeam}
        </Text>
      </Box>

      <Divider my={20} />

      <Text>{project.description}</Text>

      <Divider my={20} />

      <Text fw={600}>Main features:</Text>

      <List listStyleType='disc'>
        {project.mainFeature?.map((feature, index) => <List.Item key={index}>{feature}</List.Item>)}
      </List>

      <Divider my={20} />

      <Text fw={600}>Responsibilities:</Text>
      <List listStyleType='disc'>
        {project.responsibilities?.map((feature, index) => <List.Item key={index}>{feature}</List.Item>)}
      </List>
    </ModalWrap>
  )
}

export default ModalDetailProject
