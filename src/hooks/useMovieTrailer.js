import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieid) => {
  const dispatch = useDispatch();
  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieid +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filteredData = json.results.filter(
      (videos) => videos.type === "Trailer"
    );
    const trailerVideo = filteredData.length
      ? json.results[0]
      : filteredData[0];
    dispatch(addTrailerVideo(trailerVideo.key));
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useMovieTrailer;
