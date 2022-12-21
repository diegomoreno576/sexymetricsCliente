import { createSlice } from '@reduxjs/toolkit';


let date = new Date();
const start = String(date.getFullYear() + String(date.getMonth() + 1).padStart(2, '0') + '01');
const end = String(date.getFullYear() + String(date.getMonth() + 1).padStart(2, '0') + String(date.getDate()).padStart(2, '0'));

const startPast = String(date.getFullYear() + String(date.getMonth()).padStart(2, '0') + '01');
const endPast = String(date.getFullYear() + String(date.getMonth()).padStart(2, '0') + String(date.getDate()).padStart(2, '0'));

const initialState = {
    TimeStart: start,
    TimeEnd: end,
    TimeStartPast: startPast,
    TimeEndPast: endPast,
    currentdateLoading: false
};

export const currentDateSlice = createSlice({
    name: 'currentDate',
    initialState,
    reducers: {
        setTimeStart: (state, action) => {
            state.TimeStart = action.payload
        },
        setTimeEnd: (state, action) => {
            state.TimeEnd = action.payload
        },
        setTimeStartPast: (state, action) => {
            state.TimeStartPast = action.payload
        },
        setTimeEndPast: (state, action) => {
            state.TimeEndPast = action.payload
        },
        setCurrentdateLoading: (state, action) => {
            state.currentdateLoading = action.payload
        },
    }
})

export const { setTimeStart } = currentDateSlice.actions
export const { setTimeEnd } = currentDateSlice.actions
export const { setTimeStartPast } = currentDateSlice.actions
export const { setTimeEndPast } = currentDateSlice.actions
export const { setCurrentdateLoading } = currentDateSlice.actions

export default currentDateSlice.reducer
