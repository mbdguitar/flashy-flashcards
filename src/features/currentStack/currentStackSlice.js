import { createSlice } from "@reduxjs/toolkit";

export const currentStackSlice = createSlice({
    name: 'currentStack',
    initialState: 'stack1',
    reducers: {
        setCurrentStack: (state, action) => {
            return action.payload;
        }
    }
})

export const { setCurrentStack } = currentStackSlice.actions;
export default currentStackSlice.reducer