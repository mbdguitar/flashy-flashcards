import { configureStore } from '@reduxjs/toolkit';
import currentFlashcardReducer from '../features/currentFlashcard/currentFlashcardSlice';
import currentStackReducer from '../features/currentStack/currentStackSlice';
import stacksReducer from '../features/stacks/stacksSlice';

const store = configureStore({
    reducer: {
        currentStack: currentStackReducer,
        currentFlashcard: currentFlashcardReducer,
        stacks: stacksReducer,
    }
})

export default store;