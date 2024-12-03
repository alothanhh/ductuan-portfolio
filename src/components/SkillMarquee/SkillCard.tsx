import Image from "next/image"

type Props = {
    logo: string
}

function SkillCard({ logo }: Props) {
    return <>
        <div
            style={{
                padding: '8px',
            }}>
            <Image src={logo} alt="logo" height={64} />
        </div>
    </>
}

export default SkillCard