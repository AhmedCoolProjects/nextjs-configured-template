"use client";

import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { Button } from "../ui/button";
import { resetJoke, setJoke } from "@/features/joke/jokeSlice";

function Container() {
  const joke = useAppSelector((state) => state.joke.joke);
  const dispatch = useAppDispatch();

  const setRandomText = () => {
    let randomText = "";
    const possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 5; i++)
      randomText += possible.charAt(
        Math.floor(Math.random() * possible.length)
      );

    dispatch(setJoke(randomText));
  };

  const resetText = () => {
    dispatch(resetJoke());
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h3>This is your random text as a joke:</h3>
      <p className="p-4 border border-gray-400 rounded-xl my-3">{joke}</p>
      <Button className="mb-3" onClick={setRandomText}>
        Click me
      </Button>
      <Button onClick={resetText}>Reset</Button>
    </main>
  );
}

export default Container;
