import Image from 'next/image'
import Link from 'next/link'

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
          {project.hasGitRepo && (
            <Link href={project.gitLink} target='_blank'>
              <ActionIcon
                variant='gradient'
                size='lg'
                radius='xl'
                aria-label='Gradient action icon'
                gradient={{ from: 'rgb(26, 247, 169)', to: 'rgb(8, 205, 218)', deg: 128 }}
              >
                <IconBrandGithub />
              </ActionIcon>
            </Link>
          )}
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

      <Box style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '20px' }}>
        {project.techList.map((tech) => {
          return (
            <Text
              key={tech}
              style={{
                padding: '2px 8px',
                borderRadius: '999px',
                border: '1px solid #e5e5e5',
                fontSize: '14px',
                fontWeight: '500',
              }}
            >
              {tech}
            </Text>
          )
        })}
      </Box>

      <Divider my={20} />

      <Text>{project.description}</Text>

      <Divider my={20} />

      <Text fw={600}>Main features:</Text>

      <List listStyleType='disc'>
        {project.mainFeature?.map((feature, index) => <List.Item key={index}>{feature}</List.Item>)}
      </List>

      <Divider my={20} />

      <Text fw={600}>Responsibility:</Text>
      <List listStyleType='disc'>
        {project.responsibilities?.map((feature, index) => <List.Item key={index}>{feature}</List.Item>)}
      </List>
    </ModalWrap>
  )
}

export default ModalDetailProject
