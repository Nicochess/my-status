import { createSlice } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

type AuthUser = {
    currentUser: User |null
}

const initialState: AuthUser = {
    currentUser: null
}

const authSlice = createSlice({
    name: "Current User",
    initialState,
    reducers: {
        login: (state, action) => {
            state.currentUser = action.payload
        },
        logout: (state) => {
            state.currentUser = null
        }
    }
})

export const selectCurrentUser = (state: AuthUser) => state.currentUser

export const { login, logout } = authSlice.actions

export default authSlice.reducer