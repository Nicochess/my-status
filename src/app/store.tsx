import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice/authSlice";
import statusReducer from "../features/userStatus/userStatusSlice"


export const store = configureStore({
    reducer: {
        status: statusReducer,
        auth: authSlice
    }
})

export type RootState = ReturnType<typeof store.getState>