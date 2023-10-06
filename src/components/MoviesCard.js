import React from "react";
import { MOVIE_IMG } from "../utils/constants";

const MoviesCard = ({ title, image }) => {
  return (
    <div className="ml-5 w-48">
      <img className="" src={MOVIE_IMG + image} alt={title + " Movie Image"} />
      <h2 className="text-white">{title}</h2>
    </div>
  );
};

export default MoviesCard;
