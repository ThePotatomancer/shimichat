import { createAction, createReducer } from "@reduxjs/toolkit";

export interface ChatState {
    headerMessage?: string
}

export interface ChatsState {
    [chatId: string]: ChatState
}

export const addChats = createAction<(ChatState & {chatId: string})[]>("addChats");

export const chatsReducer = createReducer<ChatsState>({},
    (builder) => {
        builder
        .addCase(addChats, (state, action) => {
            action.payload.forEach((chat) => {
                const {chatId, ...leanChat} = chat;
                state[chatId] = leanChat;
            });
        });
    });