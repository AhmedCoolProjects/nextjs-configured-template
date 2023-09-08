"use client";

import { Button } from "../ui/button";

import { useGetJokeQuery } from "@/features/api/jokeApiSlice";

function HomepageContainerApi() {
  const { data: joke, refetch, isFetching } = useGetJokeQuery();

  const handleFetch = () => {};

  return (
    <div className="flex flex-col items-center justify-center">
      <h3>This is a joke by fetching an API with RTK Query</h3>
      <p className="p-4 border border-gray-400 rounded-xl my-3">
        {isFetching ? "Loading..." : joke?.joke}
      </p>
      <Button className="mb-3" onClick={() => refetch()}>
        {isFetching ? "Refetching..." : "Refetch"}
      </Button>
    </div>
  );
}

export default HomepageContainerApi;
