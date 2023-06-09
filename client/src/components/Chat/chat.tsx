import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { MessagesState } from "../../store/messages";
import { sendMessage } from "../../socketHandlers/emitter";
import { Message } from "../Message/Message";
import { ChatState } from "../../store/chats";

export const Chat = ({chatId}: {chatId: string}) => {
    const [messageDraft, setMessageDraft] = useState("");
    const messages = useSelector<RootState, MessagesState>((state) => state.messages);
    const chat = useSelector<RootState, ChatState>((state) => state.chats[chatId]);
    const currentUserId = useSelector<RootState, string>((state) => state.currentUser.userId as string);

    return <div className="Chat">
        <div className="Chat-Info"> {chat.headerMessage} </div>
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