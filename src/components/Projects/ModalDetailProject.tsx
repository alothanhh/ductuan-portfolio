import Image from 'next/image'

import { ProjectDetailProps } from '@/constants/project.constant'
import useWindowSize from '@/hooks/use-window-size'

import ModalWrap from '../shared/modal-wrap'

type Props = {
  onClose: () => void
  isOpen: boolean
  selectedProject: ProjectDetailProps
}

const ModalDetailProject = ({ onClose, isOpen, selectedProject: project }: Props) => {
  const { isMobile } = useWindowSize()
  return (
    <ModalWrap onClose={onClose} isOpen={isOpen}>
      <h1>{project.title}</h1>
      <Image
        src={project.image}
        alt='project'
        style={{
          minWidth: isMobile ? 100 : 400,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
    </ModalWrap>
  )
}

export default ModalDetailProject
