import { createReducer } from "@reduxjs/toolkit";

export interface ChatState {
    
}

export interface ChatsState {
    [chatId: string]: ChatState
}


export const chatsReducer = createReducer<ChatsState>({},
    (builder) => {});