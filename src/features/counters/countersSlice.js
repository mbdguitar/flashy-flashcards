import { createSlice } from "@reduxjs/toolkit";

export const countersSlice = createSlice({
    name: 'counters',
    initialState: {
        stackCounter: 10,
        flashcardCounter: 10
    },
    reducers: {
        increaseStackCounter: (state) => {
            state.stackCounter += 1;
        },
        increaseFlashcardCounter: (state) => {
            state.flashcardCounter += 1;
        }
    }
})

export const { increaseStackCounter, increaseFlashcardCounter } = countersSlice.actions;
export default countersSlice.reducer;