import Marquee from "react-fast-marquee";
import SkillCard from "./SkillCard";
import icReact from "@/assets/icons/skill/icReact.png"
import icGitlab from "@/assets/icons/skill/icGitlab.svg"
import icNext from "@/assets/icons/skill/icNext.svg"
import icAngular from "@/assets/icons/skill/icAngular.png"
import icTailwind from "@/assets/icons/skill/icTailwind.png"
import icPts from "@/assets/icons/skill/icPts.png"
import icAi from "@/assets/icons/skill/icAI.png"
import icMongoDb from "@/assets/icons/skill/icMongoDB.svg"
import Title from "../common/Title";
import { Box } from "@mantine/core";
import { useContext } from "react";
import { ScrollContext } from "@/contexts/ScrollContext";

const SKILL_LIST = [
    icReact,
    icGitlab,
    icNext,
    icAngular,
    icTailwind,
    icPts,
    icAi,
    icMongoDb,
]

function SkillMarquee() {
    const { targetRef, targetId } = useContext(ScrollContext);

    return (
        <Box
            id="skill-marquee"
            ref={targetId === 'skill-marquee' ? targetRef : null}
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '32px',
                marginTop: '32px',
                marginBottom: '32px',
            }}>
            <Marquee
                pauseOnHover
                autoFill
                gradient
            >
                {SKILL_LIST.map((item, index) => (
                    <SkillCard key={index} logo={item} />
                ))}
            </Marquee>
            <Title text='SKILLS' />

            <Box>Languages: Typescript, Javascript, C++, Python, Move</Box>
            <Box>Technologies: NextJS, ReactJS, WEB3, Angular, React Native, TailwindCSS, MongoDB, NestJS</Box>
            <Box>Front-end Libraries: NextJS, ReactJS, WEB3, Angular, React Native, TailwindCSS, MongoDB, NestJS, etc.</Box>
            <Box>Tools: NextJS, ReactJS, WEB3, Angular, React Native, TailwindCSS, MongoDB, NestJS</Box>
        </Box>)
}

export default SkillMarquee