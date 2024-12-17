import {createSlice} from "@reduxjs/toolkit";

const initialState = []



export const gameInfoSlice = createSlice({
    name: "saveGameInfo",
    initialState,
    reducers: {
        saveGameInfoActions: (state, {payload: gameInfo}) => {
            console.log(gameInfo)
            const isExist = state.some(g => g.id === gameInfo.id);
            const TTL = new Date().toLocaleTimeString("ru");
            if (!isExist) {
            state.push({...gameInfo, ttl: TTL});
            }
        },
    }
})

export const {actions, reducer} = gameInfoSlice;