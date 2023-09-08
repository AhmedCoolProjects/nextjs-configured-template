import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface JokeApi {
  id: number;
  type: string;
  category: string;
  joke: string;
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_LINK,
    // If there's any API KEY
    // , prepareHeaders(headers) {
    // headers.set("x-api-key", process.env.API_KEY);
    // return headers;
    // }
  }),
  endpoints(builder) {
    return {
      getJoke: builder.query<JokeApi, void>({
        query: () => "/",
      }),
    };
  },
});

export const { useGetJokeQuery } = apiSlice;
