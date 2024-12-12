'use client'
import { Box, Button } from "@mantine/core"
import InputField from "../common/InputField"
import { useHover } from "@mantine/hooks";

function ContactForm() {
    const { hovered, ref } = useHover<HTMLButtonElement>();

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

            <Button
                ref={ref}
                style={{
                    width: '100%',
                    backgroundSize: '200%',
                    transition: 'background-position 0.8s ease, color 0.3s ease',
                    backgroundImage: hovered
                        ? 'linear-gradient(90deg, rgb(26, 247, 169), rgb(8, 205, 218), rgb(26, 247, 169))'
                        : 'linear-gradient(90deg, rgb(8, 205, 218), rgb(26, 247, 169), rgb(8, 205, 218))',
                    backgroundPosition: hovered ? '100% 0' : '0% 0',
                }}>Send Message</Button>
        </Box>
    </>
}

export default ContactForm