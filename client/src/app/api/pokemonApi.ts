import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
    reducerPath: "pokemonApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2" }),
    endpoints: (builder) => ({
        getAllPokemons: builder.query<void, void>({
            query: () => `/pokemon`,
        }),
    }),
});

export const { useGetAllPokemonsQuery } = pokemonApi;
