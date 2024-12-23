import React, { InputHTMLAttributes } from "react"
import { Control, Controller, FieldValues, Path, useFormState, useWatch } from "react-hook-form"

interface InputProps<T extends FieldValues> extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    label: string,
    name: Path<T>
    control: Control<T>
    reset?: (name: Path<T>, options?: Record<string, boolean | any>) => void
    multiline?: boolean
}

function InputField<T extends FieldValues>({ label, multiline, name, control, ...props }: InputProps<T>) {
    const values = useWatch({ control })
    const { errors } = useFormState({ control })

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => {
                const controlledField = { ...field, value: values[name] || '' }
                return (
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
                        {!multiline ?
                            <input
                                className={`input-field ${errors[name] && 'input-error'}`}
                                style={{
                                    color: errors[name] ? 'red' : 'black',
                                    height: '32px',
                                }}
                                {...props}
                                {...controlledField}
                            /> : <textarea
                                className={`input-field ${errors[name] && 'input-error'}`}
                                style={{
                                    minHeight: '80px',
                                    resize: 'none',
                                }}
                                {...props}
                                {...controlledField}
                            />}
                        {errors[name] && errors[name]?.message && <li style={{
                            color: 'red',
                            fontSize: '14px',
                        }}>{String(errors[name]?.message)}</li>}
                    </div>)
            }}
        />
    )
}

export default InputField