import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false
}

const userStatusSlice = createSlice({
    name: "User Status",
    initialState,
    reducers: {
        switchStatus: (state) => {
            state.status = !state.status
        }
    }
})

export const { switchStatus } = userStatusSlice.actions

export default userStatusSlice.reducer