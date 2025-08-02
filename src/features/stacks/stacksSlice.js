import { createSlice } from "@reduxjs/toolkit";
import { mockupStacks } from "./stacksMockup";

export const stacksSlice = createSlice({
    name: 'stacks',
    initialState: mockupStacks.stacks,
    reducers: {
        createStack: (state, action) => {
            state.byId[action.payload.id] = action.payload;
            state.allIds.push(action.payload.id);
        },
        deleteStack: (state, action) => {
            return state.filter((stack) => stack === action.payload.stackName);
        },
        createFlashcard: (state, action) => {
            state.byId[action.payload.stackId].flashcards.push(action.payload.flashcard)
        }
    }
});

export const { createStack, deleteStack, createFlashcard } = stacksSlice.actions;
export default stacksSlice.reducer;
