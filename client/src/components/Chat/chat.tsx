import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { MessagesState } from "../../store/messages";
import { TextInput } from "../TextInput/textInput";
import { sendMessage } from "../../socketHandlers/emitter";
import { Message } from "../Message/message";

export const Chat = () => {
    const [messageDraft, setMessageDraft] = useState("");
    const messages = useSelector<RootState, MessagesState>((state) => state.messages);
    const currentUserId = useSelector<RootState, string>((state) => state.currentUser.userId as string);

    return <div>
        Welcome to the global chat!
        {
            Object.keys(messages).map((messageId) => {
                const message = messages[messageId];
                return <Message {...message} messageId={messageId}/>
            })
        }
        <TextInput onChange={setMessageDraft} value={messageDraft}/>
        <button onClick={() => {
            sendMessage(messageDraft, "global", currentUserId);
            setMessageDraft("");
        }}> send </button>
    </div>
}