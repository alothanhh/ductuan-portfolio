'use client'
import { Button } from "@mantine/core"
import InputField from "../../common/InputField"
import classes from '@/styles/Button.module.css'
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { toastError, toastSuccess } from "@/providers/toast.provider";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object({
    email: yup.string().email('Email must be a valid email').required('Email is required'),
    name: yup.string().required('Name is required'),
    subject: yup.string().required('Subject is required'),
    description: yup.string().required('Description is required'),
})

function ContactForm() {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const formRef = useRef<HTMLFormElement>(null);
    const { control, reset, handleSubmit } = useForm(
        { resolver: yupResolver(schema) }
    )

    const onSubmit = (data: yup.Asserts<typeof schema>) => {
        setIsLoading(true)
        if (formRef.current) {
            emailjs
                .sendForm('service_3582ulh', 'template_4ojb97w', formRef.current, {
                    publicKey: 'uYLR9TSN5GbG4gHeA',
                })
                .then(
                    () => {
                        toastSuccess('Message sent successfully!')
                        reset({
                            email: '',
                            name: '',
                            subject: '',
                            description: '',
                        })
                        setIsLoading(false)
                    },
                    (error) => {
                        toastError('Service is unavailable')
                        setIsLoading(false)
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
            disabled={isLoading}
        >
            {isLoading ? 'Sending...' : 'Send Message'}
        </Button>
    </form>
}

export default ContactForm