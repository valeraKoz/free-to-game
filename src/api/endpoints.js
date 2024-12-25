import {api} from "./api.js";
import {getParams} from "../components/GamesFilter/utils.js";

export const endpoints = api.injectEndpoints({
    endpoints: build => ({
        getGameById: build.query({
            query: (gameID)=> `game?id=${gameID}`
        }),
        getFilteredGames: build.query({
            query: (params) => {
                const {tag} = getParams(params);
                return tag !== undefined ? `filter${params}` : `games${params}`

            }
        })
    })
})



export const {useGetGameByIdQuery, useGetFilteredGamesQuery} = api;