import { AnyAction, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { pokemonApi } from "../api/pokemonApi";
import authSlice from "./auth/authSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pokemonApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    AnyAction
>;
