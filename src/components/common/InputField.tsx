import { Mulish } from "next/font/google"
import React, { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    label: string,
    multiline?: boolean
}

function InputField({ label, multiline, ...props }: InputProps) {
    return <>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            marginBottom: '8px',
        }}>
            <p style={{
                fontSize: '16px',
                lineHeight: '20px',
                fontWeight: 600,
            }}>{label}</p>
            {!multiline ? <input
                style={{
                    width: '100%',
                    border: 'none',
                    padding: '8px',
                    fontSize: '14px',
                    borderRadius: '8px',
                    outline: 'none',
                    height: '32px',
                }}
                {...props}
            /> : <textarea
                style={{
                    width: '100%',
                    border: 'none',
                    padding: '8px',
                    fontSize: '14px',
                    borderRadius: '8px',
                    outline: 'none',
                    height: `140px`,
                }}
                onChange={(e) => console.log(e.target.value)}
                {...props}
            />}
        </div>
    </>
}

export default InputField