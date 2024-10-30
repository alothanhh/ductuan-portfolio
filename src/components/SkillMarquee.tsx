import Marquee from "react-fast-marquee";

function SkillMarquee() {
    return <>
        <Marquee
            pauseOnHover
            autoFill
            gradient
        >
            <div
                style={{
                    padding: '8px',
                }}>
                Đặng
            </div>
            <div
                style={{
                    padding: '8px',
                }}>
                Quang
            </div>
            <div
                style={{
                    padding: '8px',
                }}>
                Thành
            </div>
        </Marquee>
    </>
}

export default SkillMarquee