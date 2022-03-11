import { createAsyncThunk } from '@reduxjs/toolkit'
import { ADD_SWIMMERS } from "../types"
import { createSwimmerForCoach } from "utils"

export const createSwimmer = createAsyncThunk(
    ADD_SWIMMERS,
    createSwimmerForCoach
)