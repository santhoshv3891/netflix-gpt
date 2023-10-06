import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieid, title }) => {
  const trailerKey = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieid);

  return (
    <div className="">
      <iframe
        className="w-screen aspect-video overflow-x-hidden"
        src={
          "https://www.youtube.com/embed/" + trailerKey + "?autoplay=1&mute=1"
        }
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
