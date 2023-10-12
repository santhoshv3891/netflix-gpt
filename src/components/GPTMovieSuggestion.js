import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const GPTMovieSuggestion = () => {
  const { searchedMovieNames, moviesResults } = useSelector(
    (store) => store.movies
  );
  if (!searchedMovieNames) return null;
  return (
    <div className="bg-black">
      {searchedMovieNames.map((movie, index) => (
        <MoviesList key={movie} title={movie} movies={moviesResults[index]} />
      ))}
    </div>
  );
};

export default GPTMovieSuggestion;
