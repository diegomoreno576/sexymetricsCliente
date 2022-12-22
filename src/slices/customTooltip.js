import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tooltip_data: []


};

export const customTooltipSlice = createSlice({
    name: 'customTooltip',
    initialState,
    reducers: {
        setTooltipData: (state, action) => {
            state.tooltip_data = action.payload
        },
        setTooltipName: (state, action) => {
            state.tooltip_name = action.payload
        },
        setTooltipTime: (state, action) => {
            state.tooltip_time = action.payload
        },

    }
})

export const { setTooltipData } = customTooltipSlice.actions
export const { setTooltipName } = customTooltipSlice.actions
export const { setTooltipTime } = customTooltipSlice.actions

export default customTooltipSlice.reducer

