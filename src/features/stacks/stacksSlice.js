import { createSlice } from "@reduxjs/toolkit";
import { mockupStacks } from "./stacksMockup";

export const stacksSlice = createSlice({
    name: 'stacks',
    initialState: mockupStacks.stacks,
    reducers: {
        createStack: (state, action) => {
            state.push(action.payload);
        },
        deleteStack: (state, action) => {
            return state.filter((stack) => stack === action.payload.stackName);
        },
    }
});

export const { createStack, deleteStack } = stacksSlice.actions;
export default stacksSlice.reducer;
