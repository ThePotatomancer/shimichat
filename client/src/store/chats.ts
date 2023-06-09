import { createReducer } from "@reduxjs/toolkit";

export interface ChatState {
    headerMessage: string
}

export interface ChatsState {
    [chatId: string]: ChatState
}


export const chatsReducer = createReducer<ChatsState>({},
    (builder) => {});