import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;
  const mainMovie = movies[1];
  //console.log(mainMovie);
  const { original_title, overview, id } = mainMovie;
  return (
    <div className="w-screen relative -mt-[74px]">
      <VideoBackground movieid={id} title={original_title} />
      <VideoTitle title={original_title} overview={overview} />
    </div>
  );
};

export default MainContainer;
