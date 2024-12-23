'use client'
import { Box, Button, Flex } from "@mantine/core"
import InputField from "../../common/InputField"
import classes from '@/styles/Button.module.css'
import { LegacyRef, RefObject, useRef } from "react";
import emailjs from '@emailjs/browser';

function ContactForm() {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (form.current) {
            emailjs
                .sendForm('service_3582ulh', 'template_4ojb97w', form.current, {
                    publicKey: 'uYLR9TSN5GbG4gHeA',
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        }
    };

    return <form style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        gap: '8px',
        backgroundColor: '#F7F7F7',
        borderRadius: '8px',
        padding: '16px',
    }}
        ref={form}
        onSubmit={sendEmail}
    >

        <InputField name='email' label="Your email" placeholder="Enter your email" />

        <InputField name='name' label="Your name" placeholder="Enter your name" />

        <InputField name='subject' label="Subject" placeholder="Enter subject" />

        <InputField name='message' label="Your message" placeholder="Enter your message" multiline style={{
            resize: 'none',
            border: 'none',
            borderRadius: '8px',
            padding: '8px',
            fontSize: '14px',
            outline: 'none',
            minHeight: '80px'
        }}
        />

        <Button
            className={classes['button-gradient']}
            w='100%'
            type="submit"
        >
            Send Message
        </Button>
    </form>
}

export default ContactForm