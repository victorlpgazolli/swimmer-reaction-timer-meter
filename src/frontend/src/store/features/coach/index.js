import { createSlice } from '@reduxjs/toolkit'
import {
    fetchSwimmers,
    createSwimmer,
    setSwimmerAsCurrent,
    updateSwimmer,
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
        },
        [setSwimmerAsCurrent.fulfilled]: (state, {
            payload: swimmerId
        }) => {
            const newSwimmerList = state.swimmers.map(swimmer => ({
                ...swimmer,
                isCurrent: console.log(swimmer._id === swimmerId) || swimmer._id === swimmerId,
            }))

            state.swimmers = newSwimmerList

        },
        [updateSwimmer.fulfilled]: (state, {
            payload: newSwimmer
        }) => {
            const newSwimmerList = state.swimmers.map(swimmer => {
                const foundSwimmer = swimmer._id === newSwimmer._id
                if (foundSwimmer) return {
                    ...swimmer,
                    ...newSwimmer
                }
                return swimmer;
            })

            state.swimmers = newSwimmerList

        },
    }
})


export const {
    addCoach,
    addSwimmer,
} = coachSlice.actions

export default coachSlice.reducer