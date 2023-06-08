import { createAction, createReducer } from "@reduxjs/toolkit";

export interface UserState {
    // RGB color
    color: string
}

export interface UsersState {
    [userId: string]: UserState
}

export const addUsersAction = createAction<(UserState & {userId: string})[]>("addUsers");

export const usersReducer = createReducer<UsersState>({}, (builder) => {
    builder.addCase(addUsersAction, (state, action) => {
        action.payload.forEach(user => {
            const {userId, ...userData} = user;
            state[userId] = userData; 
        });
    });
})
