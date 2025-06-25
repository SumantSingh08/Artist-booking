import { configureStore } from '@reduxjs/toolkit'
import ArtistSlice from './artistSlice'
export const store = configureStore({
    reducer: {
        artist: ArtistSlice
    }
})

