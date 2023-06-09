import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { MessagesState } from "../../store/messages";
import { sendMessage } from "../../socketHandlers/emitter";
import { Message } from "../Message/Message";

export const Chat = () => {
    const [messageDraft, setMessageDraft] = useState("");
    const messages = useSelector<RootState, MessagesState>((state) => state.messages);
    const currentUserId = useSelector<RootState, string>((state) => state.currentUser.userId as string);

    return <div className="Chat">
        <div className="Chat-Info"> Welcome to the global chat! </div>
        <div className="Chat-Content">
        {
            Object.keys(messages).map((messageId) => {
                const message = messages[messageId];
                return <Message {...message} messageId={messageId} key={messageId}/>
            })
        }
        </div>
        <div className="Chat-Input">
            <textarea onChange={(e) => setMessageDraft(e.target.value)} value={messageDraft} maxLength={2048}/>
            <button onClick={() => {
                if (messageDraft) {
                    sendMessage(messageDraft, "global", currentUserId);
                    setMessageDraft("");
                }
            }}> send </button>
        </div>
    </div>
}