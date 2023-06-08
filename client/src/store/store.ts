import { combineReducers, configureStore, createReducer} from '@reduxjs/toolkit';
import { usersReducer } from './users';
import { currentUserReducer } from './currentUser';

interface ChatState {
    
}

interface ChatsState {
    [chatId: string]: ChatState
}

interface MessageState {
    content: string,
    senderUserId: string
}

interface MessagesState {
    [messageId: string]: MessageState
}

const chatsReducer = createReducer<ChatsState>({},
     (builder) => {});

const messagesReducer = createReducer<MessagesState>({}, 
    (builder) => {});

const rootReducer = combineReducers({
    chats: chatsReducer,
    messages: messagesReducer,
    users: usersReducer,
    currentUser: currentUserReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({reducer: rootReducer});
