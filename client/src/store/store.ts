import { configureStore, createReducer} from '@reduxjs/toolkit';

interface CurrentUserState {
    userId: string
}

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

interface UserState {
    // RGB color
    color: string
}

interface UsersState {
    [userId: string]: UserState
}

const chatsReducer = createReducer<ChatsState>({},
     (builder) => {});

const messagesReducer = createReducer<MessagesState>({}, 
    (builder) => {});

const usersReducer = createReducer<UsersState>({}, () => {})

const currentUserReducer = createReducer<CurrentUserState>(
    {
        userId: ""
    },
    (builder) => {
    }
  )

export const store = configureStore({reducer: {
    chats: chatsReducer,
    messages: messagesReducer,
    users: usersReducer,
    currentUser: currentUserReducer
}});
