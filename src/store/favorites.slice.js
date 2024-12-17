import {createSlice} from "@reduxjs/toolkit";


const initialState = [];

export const favorites = createSlice({
    name: "favorites",
    initialState,
    reducers: {}
})

export const { actions, reducer } = favorites