import {api} from "./api.js";

export const endpoints = api.injectEndpoints({
    endpoints: build => ({
        getAllGames: build.query({
            query: ()=>'games'
        }),
        getGamesByParams: build.query({
            query: (params)=> `games${params}`
        }),
        getGameById: build.query({
            query: (gameID)=> `game?id=${gameID}`
        })
    })
})



export const {useGetAllGamesQuery, useGetGamesByParamsQuery, useGetGameByIdQuery} = api;