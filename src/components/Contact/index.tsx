'use client'
import { Box } from "@mantine/core"
import Title from "../common/Title"
import ContactInfo from "./ContactInfo"
import ContactForm from "./ContactForm"
import useWindowSize from "@/hooks/use-window-size"

function Contact() {
    const { isMobile } = useWindowSize();

    return <>
        <Title text='CONTACT' />
        <Box
            style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                gap: '32px',
                marginTop: '32px',
                marginBottom: '32px',
                alignContent: 'center',
                justifyContent: 'center',
                padding: '32px',
            }}
        >
            <ContactInfo />
            <ContactForm />
        </Box>
    </>
}

export default Contact