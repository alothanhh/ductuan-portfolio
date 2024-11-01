import { Text } from "@mantine/core"
import Image from "next/image"

type Props = {
    logo: string
    title: string
    description: string
}

function ContactCard({ logo, title, description }: Props) {
    return <>
        <div
            style={{
                padding: '20px 16px',
                backgroundColor: '#F7F7F7',
                borderRadius: '8px',
                width: '100%',
                display: 'flex',
                gap: '16px',
                flexDirection: 'row',
                alignItems: 'center',
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
                <Image src={logo} alt="logo" width={24} height={24} />
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