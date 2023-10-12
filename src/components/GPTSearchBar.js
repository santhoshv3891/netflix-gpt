import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { gptSuggestedMovies, showLoaderAction } from "../utils/moviesSlice";
import Loader from "./Loader";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store?.languages?.selectedLang);
  const dispatch = useDispatch();
  const searchText = useRef();
  const { showLoader } = useSelector((store) => store?.movies);

  const searchMovie = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    dispatch(showLoaderAction({ showLoader: true }));

    const gptQuery =
      "Act as a movie recommendation application and provide movies list from query" +
      searchText.current.value +
      ". Just give 5 movie names with comma seperated. Example: Lagaan, Charlie, Golmaal, Appu , Abhi";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    const movieNames = gptResults?.choices[0]?.message.content.split(",");
    const allMoviesData = movieNames.map((movie) => searchMovie(movie));
    const tmdbResults = await Promise.all(allMoviesData);
    dispatch(
      gptSuggestedMovies({
        gptMovieNames: movieNames,
        gptMoviesResults: tmdbResults,
      })
    );
  };

  return (
    <div className="p-5 text-center">
      <form className="w-full" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          ref={searchText}
          className="w-1/4 rounded-lg p-2 mr-3 border-black border-2"
          placeholder={lang[langKey].placeholder}
        />
        <button
          onClick={handleGptSearchClick}
          className="bg-red-600 text-white font-bold p-2 rounded-lg"
        >
          {lang[langKey].search}
        </button>
      </form>
      {showLoader && <Loader />}
    </div>
  );
};

export default GPTSearchBar;
