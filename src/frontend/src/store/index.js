import { configureStore } from '@reduxjs/toolkit'
import coach from './features/coach';


export const store = configureStore({
    reducer: {
        coach
    },
})
