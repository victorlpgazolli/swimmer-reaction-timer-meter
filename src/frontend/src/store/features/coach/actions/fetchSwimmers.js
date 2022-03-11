import { createAsyncThunk } from '@reduxjs/toolkit'
import { FETCH_SWIMMERS } from "../types"
import { getSwimmersFromCoach } from "utils"

export const fetchSwimmers = createAsyncThunk(
    FETCH_SWIMMERS,
    getSwimmersFromCoach
)