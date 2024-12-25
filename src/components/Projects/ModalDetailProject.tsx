import Image from 'next/image'

import { Divider, Flex, Text } from '@mantine/core'

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
        <Text>Github | Figma</Text>
        <Text>Time: July 2023 - Oct 2024</Text>
      </Flex>

      <Text>Team size: 30 | FE Team: 3</Text>

      <Divider my={20} />

      <Text>{project.description}</Text>
      <Text fw={600}>Main features:</Text>

      <Divider my={20} />

      <Text fw={600}>Responsibilities:</Text>
    </ModalWrap>
  )
}

export default ModalDetailProject
