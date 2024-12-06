import React from "react";
import { IoCaretForwardCircle } from "react-icons/io5";

const CardFilm = (props) => {
  return (
    <div
      onClick={() => props.detailMovie(props.id)}
      className="cursor-pointer w-full max-w-[200px] h-[300px] overflow-hidden rounded-2xl relative group">
      <img src={props.image} alt={props.title} className="w-full h-full object-cover" />
      <div
        className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-black text-white text-sm font-semibold p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex gap-2 flex-col w-full h-full justify-center items-center text-lg">
          <div className="text-ellipsis overflow-hidden whitespace-nowrap">{props.title}</div>
          <button className="text-gray-800 text-lg font-bold bg-white rounded-full px-3 py-1 flex items-center gap-2">
            <IoCaretForwardCircle /> Watch Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardFilm;
