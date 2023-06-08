import React from "react";

interface TextInputProps {
    placeholder?: string,
    onChange: (newValue: string) => void,
    value?: string
}

export const TextInput = (props: TextInputProps) => {
    const {onChange, placeholder, value} = {...props};

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.currentTarget.value);
    } 

    return <input onChange={onInputChange} placeholder={placeholder} value={value}/>
};