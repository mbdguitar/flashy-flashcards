import { createSlice } from "@reduxjs/toolkit"

export const isModalActiveSlice = createSlice({
    name: 'isModalActive',
    initialState: false,
    reducers: {
        activateModal: (state) => {
            return state = true;
        },
        deactivateModal: (state) => {
            return state = false;
        }
    }
})

export const { activateModal, deactivateModal } = isModalActiveSlice.actions;
export default isModalActiveSlice.reducer;