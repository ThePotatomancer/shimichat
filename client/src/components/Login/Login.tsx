import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TextInput } from "../TextInput/textInput";
import { addUsersAction } from "../../store/users";
import { setCurrentUserAction } from "../../store/currentUser";
import { joinChat } from "../../socketHandlers/emitter";

function isUsernameValid(username: string | undefined) {
    return typeof username === "string" && username.length >= 4;
}

function showAlert(message: string) {
    window.alert(message)
}

export const Login = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState<string>("");

    function confirmUsername() {
        if (isUsernameValid(username)) {
            dispatch(addUsersAction([{userId: username, color: "#"}]));
            dispatch(setCurrentUserAction(username));
            joinChat("global", username);
        }
        else {
            
            showAlert("This username is invalid, it has to be 4 characters long at least");
        }
    }

    return <div>
            <TextInput value={username} onChange={setUsername}/>
            <button onClick={confirmUsername}> Login </button>
        </div>
};