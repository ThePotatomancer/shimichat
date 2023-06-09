import React from "react";

interface TextInputProps {
    placeholder?: string,
    onChange: (newValue: string) => void,
    value?: string,
    maxLength?: number
}

export const TextInput = ({onChange, placeholder, value, maxLength}: TextInputProps) => {
    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.currentTarget.value);
    } 

    return <input onChange={onInputChange} placeholder={placeholder} value={value} maxLength={maxLength || 256}/>
};