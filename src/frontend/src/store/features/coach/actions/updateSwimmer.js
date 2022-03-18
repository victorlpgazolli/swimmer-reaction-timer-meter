import { createAsyncThunk } from '@reduxjs/toolkit'
import { PATCH_SWIMMER } from "../types"
import { patchSwimmer } from "utils"

export const updateSwimmer = createAsyncThunk(
    PATCH_SWIMMER,
    patchSwimmer
)