import { Box, Text } from "@mantine/core"
import Title from "../common/Title"
import ContactInfo from "./ContactInfo"
import ContactForm from "./ContactForm"

function Contact() {
    return <>
        <Title text='CONTACT' />
        <Box
            style={{
                display: 'flex',
                flexDirection: 'row',
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