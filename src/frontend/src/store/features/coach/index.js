import { createSlice } from '@reduxjs/toolkit'
import {
    fetchSwimmers,
    createSwimmer
} from './actions'


const initialState = {
    coach: {
        id: "622a8e540daa0d0ce4a8624e",
        name: "coach 1",
        email: "coach@coach.com",
    },
    swimmers: []
}

export const coachSlice = createSlice({
    name: 'coach',
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchSwimmers.fulfilled]: (state, {
            payload: swimmers,
        }) => {
            state.swimmers = swimmers
        },
        [createSwimmer.fulfilled]: (state, {
            payload: swimmer
        }) => {
            state.swimmers.push(swimmer)
        }
    }
})


export const {
    addCoach,
    addSwimmer,
} = coachSlice.actions

export default coachSlice.reducer