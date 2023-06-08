import { createAction, createReducer } from "@reduxjs/toolkit"

interface CurrentUserState {
    userId: string | undefined
}

export const setCurrentUserAction = createAction<string>("setCurrentUser");

export const currentUserReducer = createReducer<CurrentUserState>(
    {
        userId: undefined
    },
    (builder) => {
        builder.addCase(setCurrentUserAction, (state, action) => {
            state.userId = action.payload;
        });
    }
  )
