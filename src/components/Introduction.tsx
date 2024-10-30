/* eslint-disable react/no-unescaped-entities */
import { Avatar, Box, Button, Text } from "@mantine/core"
import icPhone from "@/assets/icons/icPhone.svg"
import icEmail from "@/assets/icons/icEmail.svg"
import icPlaceMarker from "@/assets/icons/icPlaceMarker.svg"
import imgAvatar from "@/assets/images/imgAvatar.jpg"
import Image from "next/image"

function Introduction() {
    return <Box
        style={{
            backgroundColor: '#F7F7F7',
            padding: '64px 128px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '32px'
        }}>
        <Box
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                maxWidth: '700px',
            }}>

            <Text style={{
                fontSize: '32px',
                fontWeight: 700,
                lineHeight: '48px',
            }}>Hi There,</Text>

            <Text
                style={{
                    fontSize: '32px',
                    fontWeight: 700,
                    lineHeight: '48px',
                }}
            >I'm <span style={{ color: '#18D26E' }}>Quang Thanh</span></Text>

            <Text>Dedicated front-end developer skills, merging creativity with technical expertise for visually appealing and user-centric websites.</Text>

            <Box id="contact-and-download-cv" style={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '8px',
                gap: '24px',
            }}>
                <Box
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        paddingLeft: '16px',
                        borderLeft: '7px solid #18D26E',
                    }}>
                    <Box
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                        }}>
                        <Image src={icPlaceMarker} alt="place-marker" width={24} height={24} />
                        <Text style={{
                            fontSize: '16px',
                            lineHeight: '32px',
                        }}>Ho Chi Minh City, Viet Nam</Text>
                    </Box>
                    <Box
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                        }}>
                        <Image src={icPhone} alt="phone" width={24} height={24} />
                        <Text style={{
                            fontSize: '16px',
                            lineHeight: '32px',
                        }}>0337 268 100</Text>
                    </Box>
                    <Box
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                        }}>
                        <Image src={icEmail} alt="email" width={24} height={24} />
                        <Text style={{
                            fontSize: '16px',
                            lineHeight: '32px',
                        }}>thanh.dangquang@gmail.com</Text>
                    </Box>
                </Box>

                <Button color="#18D26E" style={{
                    width: 'max-content',
                }}>DOWNLOAD CV</Button>
            </Box>
        </Box>

        <Avatar
            src={''}
            alt="it's me"
            size={250}
            style={{ borderRadius: '50%', objectFit: 'cover', color: 'green' }}
        />
    </Box >
}

export default Introduction