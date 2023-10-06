import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-1/4 absolute top-2/4 left-16 text-white">
      <h1 className="text-2xl font-bold p-5">{title}</h1>
      <p className="text-base pl-5">{overview}</p>
    </div>
  );
};

export default VideoTitle;
