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
    // resetJoke
    resetJoke(state) {
      state.joke = "";
    },
  },
});

export const { setJoke, resetJoke } = jokeSlice.actions;
export default jokeSlice.reducer;
