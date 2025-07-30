import { createSlice } from "@reduxjs/toolkit";

export const modalMenuTypeSlice = createSlice({
    name: 'modalMenuType',
    initialState: '',
    reducers: {
        setModalMenuType: (state, action) => {
            if (typeof action.payload === 'string') {
                return state = action.payload;
            }
            return state;
        },
        resetModalMenuType: (state) => {
            return state = '';
        }
    }
})

export const { setModalMenuType, resetModalMenuType } = modalMenuTypeSlice.actions;
export default modalMenuTypeSlice.reducer;