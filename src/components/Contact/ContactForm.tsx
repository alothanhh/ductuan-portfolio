'use client'
import { Box, Button } from "@mantine/core"
import InputField from "../common/InputField"

function ContactForm() {
    return <>
        <Box style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            gap: '8px',
            backgroundColor: '#F7F7F7',
            borderRadius: '8px',
            padding: '16px',
        }}>
            <InputField label="Your email" placeholder="Enter your email" />

            <InputField label="Subject" placeholder="Enter subject" />

            <InputField label="Your message" placeholder="Enter your message" multiline />

            <Button color="#18D26E" style={{
                width: '100%',
            }}>Send Message</Button>
        </Box>
    </>
}

export default ContactForm