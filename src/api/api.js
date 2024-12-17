import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_API_URL, OPTIONS} from "./api.config.js";
import {setHeaders} from "./utils.js";


export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_API_URL,
        prepareHeaders: headers => setHeaders(headers, OPTIONS.headers)
    }),
    tagTypes: ['Games'],
    endpoints: () => ({})
})


