import React from "react";
import MoviesCard from "./MoviesCard";
import { useHorizontalScroll } from "../hooks/useSideScroll";

const MoviesList = ({ title, movies }) => {
  const scrollRef = useHorizontalScroll();
  return (
    <div className="">
      <h1 className="text-white p-5 font-bold">{title}</h1>
      <div
        className="flex flex-wrap overflow-x-scroll no-scrollbar"
        ref={scrollRef}
      >
        <div className="flex">
          {movies?.map((movie) => (
            <MoviesCard
              key={movie.id}
              title={movie.title}
              image={movie.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
