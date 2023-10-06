import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black w-screen z-20 relative">
      <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MoviesList title={"Popular"} movies={movies.popularMovies} />
      <MoviesList title={"Top Rated"} movies={movies.topRatedMovies} />
      <MoviesList title={"Upcoming"} movies={movies.upcomingMovies} />
    </div>
  );
};

export default SecondaryContainer;
