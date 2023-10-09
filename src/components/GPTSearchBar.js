import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store?.languages?.selectedLang);
  return (
    <div className="p-5 text-center">
      <form className="w-full">
        <input
          type="text"
          className="w-1/4 rounded-lg p-2 mr-3 border-black border-2"
          placeholder={lang[langKey].placeholder}
        />
        <button className="bg-red-600 text-white font-bold p-2 rounded-lg">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
