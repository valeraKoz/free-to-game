import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {api} from "../api/api.js"
import {reducer as favoritesReducer} from "./favorites.slice.js";
import {reducer as gameInfoSliceReducer} from "./saveGameInfo.slice.js";
import {persistReducer, persistStore} from "redux-persist";
import {PERSIST} from "redux-persist/es/constants";
import storage from "redux-persist/lib/storage";

const reducers = combineReducers({
    favorites: favoritesReducer,
    [api.reducerPath]: api.reducer,
    saveGameInfo: gameInfoSliceReducer
})
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['saveGameInfo']
}
const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck:{
                ignoreActions: [PERSIST]
            }
        })
            .concat(api.middleware)
})

const persistor = persistStore(store);

export {persistor, store};