'use client'
import { Box, Button, Flex } from "@mantine/core"
import InputField from "../../common/InputField"
import classes from '@/styles/Button.module.css'
import { useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';
import { toastError, toastSuccess } from "@/providers/toast.provider";
import * as yup from 'yup';
import { desc, form } from "framer-motion/client";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object({
    email: yup.string().email('Email must be a valid email').required('Email is required'),
    name: yup.string().required('Name is required'),
    subject: yup.string().required('Subject is required'),
    description: yup.string().required('Description is required'),
})

function ContactForm() {
    const formRef = useRef<HTMLFormElement>(null);
    const { control, handleSubmit } = useForm(
        { resolver: yupResolver(schema) }
    )

    const onSubmit = (data: yup.Asserts<typeof schema>) => {
        console.log(formRef.current)
        if (formRef.current) {
            emailjs
                .sendForm('service_3582ulh', 'template_4ojb97w', formRef.current, {
                    publicKey: 'uYLR9TSN5GbG4gHeA',
                })
                .then(
                    () => {
                        toastSuccess('Message sent successfully!')
                    },
                    (error) => {
                        toastError('Service is unavailable')
                    },
                );
        }
    }

    return <form
        style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            gap: '8px',
            backgroundColor: '#F7F7F7',
            borderRadius: '8px',
            padding: '16px',
        }}
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
    >
        <InputField name='email' control={control} label="Your email" placeholder="Enter your email" />

        <InputField name='name' control={control} label="Your name" placeholder="Enter your name" />

        <InputField name="subject" control={control} label="Subject" placeholder="Enter subject" />

        <InputField name='description' control={control} label="Your message" placeholder="Enter your message" multiline />

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