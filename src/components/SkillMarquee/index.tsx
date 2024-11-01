import Marquee from "react-fast-marquee";
import SkillCard from "./SkillCard";
import icReact from "@/assets/icons/skill/icReact.png"
import icGitlab from "@/assets/icons/skill/icGitlab.svg"
import icNext from "@/assets/icons/skill/icNext.svg"
import Title from "../common/Title";
import { Box } from "@mantine/core";

const SKILL_LIST = [
    icReact,
    icGitlab,
    icNext
]

function SkillMarquee() {
    return (
        <Box
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '32px',
                marginTop: '16px',
            }}>
            <Title text='SKILLS' />

            <Marquee
                pauseOnHover
                autoFill
                gradient
            >
                {SKILL_LIST.map((item, index) => (
                    <SkillCard key={index} logo={item} />
                ))}
            </Marquee>
        </Box>)
}

export default SkillMarquee