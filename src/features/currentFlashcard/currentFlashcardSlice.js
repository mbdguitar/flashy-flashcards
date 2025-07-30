import { createSlice } from "@reduxjs/toolkit";

const currentFlashcardSlice = createSlice({
    name: 'currentFlashcard',
    initialState: 'fc1',
    reducers: {
        setCurrentFlashcard: (state, action) => {
            return action.payload; 
        }
    }
});

export const { setCurrentFlashcard } = currentFlashcardSlice.actions;
export default currentFlashcardSlice.reducer;