import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
    upcomingMovies: null,
    topRatedMovies: null,
    moviesResults: null,
    searchedMovieNames: null,
    showLoader: false,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    gptSuggestedMovies: (state, action) => {
      const { gptMovieNames, gptMoviesResults, loader } = action.payload;
      state.searchedMovieNames = gptMovieNames;
      state.moviesResults = gptMoviesResults;
      state.showLoader = loader;
    },
    showLoaderAction: (state, action) => {
      state.showLoader = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addUpcomingMovies,
  addTopRatedMovies,
  gptSuggestedMovies,
  showLoaderAction,
} = moviesSlice.actions;
export default moviesSlice.reducer;
