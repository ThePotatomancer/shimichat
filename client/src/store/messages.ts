import { createAction, createReducer } from "@reduxjs/toolkit";

export interface MessageState {
    content: string,
    senderUserId: string,
    chatId: string
}

export interface MessagesState {
    [messageId: string]: MessageState
}

export const addMessages = createAction<(MessageState & {messageId: string})[]>("AddMessages");

export const messagesReducer = createReducer<MessagesState>({}, 
    (builder) => {
        builder
        .addCase(addMessages, (state, action) => {
            action.payload.forEach((message) => {
                const {messageId, ...leanMessage} = message;
                state[messageId] = leanMessage;
            });
        });
    });