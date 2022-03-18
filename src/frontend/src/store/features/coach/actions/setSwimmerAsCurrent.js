import { createAsyncThunk } from '@reduxjs/toolkit'
import { SELECT_SWIMMER } from "../types"
import { startSwimmerTraining } from "utils"

export const setSwimmerAsCurrent = createAsyncThunk(
    SELECT_SWIMMER,
    startSwimmerTraining
)