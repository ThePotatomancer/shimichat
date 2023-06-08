import { combineReducers, configureStore} from '@reduxjs/toolkit';
import { usersReducer } from './users';
import { currentUserReducer } from './currentUser';
import { chatsReducer } from './chats';
import { messagesReducer } from './messages';

const rootReducer = combineReducers({
    chats: chatsReducer,
    messages: messagesReducer,
    users: usersReducer,
    currentUser: currentUserReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({reducer: rootReducer});
