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
    return (
        <Box
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '32px',
                marginTop: '32px',
                marginBottom: '64px',
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