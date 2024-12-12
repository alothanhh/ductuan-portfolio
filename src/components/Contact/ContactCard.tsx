'use client'
import { Text } from "@mantine/core"
import Image from "next/image"
import { FC, SVGProps, useMemo, useState } from "react"

type Props = {
    logo: FC<SVGProps<SVGElement>>
    title: string
    description: string
}

function ContactCard({ logo, title, description }: Props) {
    const Logo = logo;
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const iconColor = useMemo(() => (isHovered ? 'rgb(8, 205, 218)' : 'rgb(26, 247, 169)'), [isHovered])

    return <>
        <div
            onMouseOver={() => setIsHovered(true)} onMouseOut={() => setIsHovered(false)}
            style={{
                padding: '20px 16px',
                backgroundColor: '#F7F7F7',
                borderRadius: '8px',
                width: '100%',
                display: 'flex',
                gap: '16px',
                flexDirection: 'row',
                alignItems: 'center',
                transition: 'transform 0.3s ease',
                transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            }}>
            <div
                style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                {/* <Image src={logo} alt="logo" width={24} height={24} /> */}
                {/* <Logo />
                 */}
                <Logo fill={iconColor} />
            </div>
            <div>
                <Text style={{
                    fontSize: '16px',
                    lineHeight: '24px',
                    fontWeight: 700,
                }}>{title}</Text>
                <Text style={{
                    fontSize: '14px',
                    lineHeight: '20px',
                    marginBottom: '8px',
                }}>{description}</Text>
            </div>
        </div>
    </>
}

export default ContactCard