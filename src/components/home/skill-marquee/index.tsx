import { Box } from '@mantine/core'
import Marquee from 'react-fast-marquee'

import icAi from '@/assets/icons/skill/icAI.png'
import icAngular from '@/assets/icons/skill/icAngular.png'
import icGitlab from '@/assets/icons/skill/icGitlab.svg'
import icMongoDb from '@/assets/icons/skill/icMongoDB.svg'
import icNext from '@/assets/icons/skill/icNext.svg'
import icPts from '@/assets/icons/skill/icPts.png'
import icReact from '@/assets/icons/skill/icReact.png'
import icTailwind from '@/assets/icons/skill/icTailwind.png'

import ScrollFadeUp from '../../shared/scroll-fade-up'

import SkillCard from './skill-card'

const SKILL_LIST = [icReact, icGitlab, icNext, icAngular, icTailwind, icPts, icAi, icMongoDb]

function SkillMarquee() {
  return (
    <ScrollFadeUp repeat>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          marginTop: '32px',
          paddingBottom: '32px',
        }}
      >
        <Marquee pauseOnHover autoFill gradient>
          {SKILL_LIST.map((item, index) => (
            <SkillCard key={index} logo={item} />
          ))}
        </Marquee>

        {/* <Box
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    alignItems: 'center',
                    backgroundColor: '#f7f7f7',
                    paddingBottom: '16px',
                    paddingTop: '32px',
                }}
            >
                <Box>Languages: Typescript, Javascript, C++, Python, Move</Box>
                <Box>Technologies: NextJS, ReactJS, WEB3, Angular, React Native, TailwindCSS, MongoDB, NestJS</Box>
                <Box>Front-end Libraries: Redux, Redux Toolkit, React Hook Form, React Query, MUI, Mantine, ChartJs, etc.</Box>
                <Box>Tools: Git, VSCode, Figma, Sourcetree, Jira Software, Postman, Docker, Adobe Photoshop,
                    Adobe Illustrator</Box>
            </Box> */}
      </Box>
    </ScrollFadeUp>
  )
}

export default SkillMarquee
