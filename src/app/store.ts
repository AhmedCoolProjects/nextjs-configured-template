import { configureStore } from "@reduxjs/toolkit";
import jokeReducer from "../features/joke/jokeSlice";

export const store = configureStore({
  reducer: {
    joke: jokeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
