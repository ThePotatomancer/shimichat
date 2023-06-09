import React, { ChangeEvent, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { addUsersAction } from "../../store/users";
import { setCurrentUserAction } from "../../store/currentUser";
import { joinChat } from "../../socketHandlers/emitter";
import "./Login.css"
import { SERVER_URL } from "../../config";
import { showAlert } from "../../utils";
import { digestPassword, isUsernameValid } from "./login.utils";

export const Login = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const onUsernameValueChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    }, []);

    const onPasswordValueChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }, []);

    async function performLogin() {
        try {
            if (isUsernameValid(username)) {
                const hashedPassword = await digestPassword(password);
                const result = await fetch(SERVER_URL + "/login", {method: "POST", body: JSON.stringify({userId: username, hashedPassword})});
                dispatch(addUsersAction([{userId: username, color: "#000000"}]));
                dispatch(setCurrentUserAction(username));
                joinChat("global", username);
            }
            else {
                showAlert("This username is invalid, it has to be 4 characters long at least");
            }
        }
        catch {
            showAlert("There was an erorr during the authentication proccess");
        }
    }

    return <div className="Login-Page">
            <span> Username </span>
            <input onChange={onUsernameValueChange} value={username} maxLength={256}/>
            <span> Password </span>
            <input onChange={onPasswordValueChange} value={password} maxLength={256} type="password"/>
            <button onClick={performLogin}> Login </button>
        </div>
};