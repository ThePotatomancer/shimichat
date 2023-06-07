import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TextInput } from "../TextInput/textInput";

export const Login = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState<string>();

    return <TextInput value={username} onChange={setUsername}/>
};