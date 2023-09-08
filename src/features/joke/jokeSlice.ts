import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface JokeState {
  joke: string;
}

const initialState: JokeState = {
  joke: "",
};

const jokeSlice = createSlice({
  name: "joke",
  initialState,
  reducers: {
    // setJoke
    setJoke(state, action: PayloadAction<string>) {
      state.joke = action.payload;
    },
  },
});

export const { setJoke } = jokeSlice.actions;
export default jokeSlice.reducer;
