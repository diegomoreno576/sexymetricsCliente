import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tooltip_data: [],
    current_tooltip_posts: [],


};

export const customTooltipSlice = createSlice({
    name: 'customTooltip',
    initialState,
    reducers: {
        setTooltipData: (state, action) => {
            state.tooltip_data = action.payload;

        
        },
        setCurrentTooltipPosts: (state, action) => {
            state.current_tooltip_posts = action.payload;
        }

    },
 

})

export const { setTooltipData } = customTooltipSlice.actions
export const { setCurrentTooltipPosts } = customTooltipSlice.actions

export default customTooltipSlice.reducer

