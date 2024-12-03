import { Box, Text } from "@mantine/core"
import icFacebook from "@/assets/icons/contact/icFacebook.svg"
import icLinkedln from "@/assets/icons/contact/icLinkedln.svg"
import icTelegram from "@/assets/icons/contact/icTelegram.svg"
import { CONTACT_CARD_INFO } from "../constants/contact.constant"
import ContactCard from "./ContactCard"
import useWindowSize from "@/hooks/use-window-size"

function ContactInfo() {
    const { isMobile } = useWindowSize();

    return <>
        <Box style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            gap: '8px',
            borderRadius: '8px',
            padding: isMobile ? '0' : '0 8px',
        }}>
            <Text style={{
                fontSize: '30px',
                fontWeight: 700,
                lineHeight: '36px',
                marginBottom: '8px',
            }}>Contact Information</Text>

            <Text style={{
                fontSize: '16px',
                lineHeight: '24px',
                marginBottom: '8px',
            }}>Let&apos;s talk how I can help you to grow your website. I appreciate any kind of suggestions or feedback.</Text>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
            }}>
                {
                    CONTACT_CARD_INFO.map((item, index) => (
                        <ContactCard key={index} logo={item.logo} title={item.title} description={item.description} />))
                }
            </div>
        </Box>
    </>
}

export default ContactInfo