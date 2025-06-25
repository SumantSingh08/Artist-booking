import { createSlice } from "@reduxjs/toolkit";
import {artistList} from '../artistList'
const initialState = {
    artists: artistList,
    filterData: {
        category: "",
        location: "",
        price:""
    }
}
const ArtistSlice = createSlice({
    name: 'artist',
    initialState: initialState,
    reducers: {
        setCategory: (state, action) =>{
            state.filterData.category = action.payload;
        },
        setLocation: (state, action) => {
            state.filterData.location = action.payload;
        },
        setPrice: (state, action) => {
            state.filterData.price = action.payload;
        }

    }
});

export const {setCategory, setLocation, setPrice} = ArtistSlice.actions;

export default ArtistSlice.reducer;