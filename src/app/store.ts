import { configureStore } from "@reduxjs/toolkit";
import jokeReducer from "../features/joke/jokeSlice";
import { apiSlice } from "@/features/api/jokeApiSlice";

export const store = configureStore({
  reducer: {
    joke: jokeReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
