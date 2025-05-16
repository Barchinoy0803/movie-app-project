import { getRatingColor } from "@/helpers";
import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const url = import.meta.env.VITE_IMAGE_URL;
  const rating = item.vote_average;

  return (
    <Link
      to={`/movies/details?id=${item.id}`}
      className="block rounded-lg overflow-hidden shadow-lg bg-gray-900 hover:shadow-2xl transition-shadow duration-300 relative"
      title={item.title}
    >
      <div
        className={`absolute top-3 left-3 flex items-center gap-1 px-2 py-1 rounded-md text-white text-sm font-semibold ${getRatingColor(
          rating
        )} shadow-lg z-10`}
      >
        <FaStar />
        <span>{rating.toFixed(1)}</span>
      </div>

      <div className="w-full h-[420px]">
        <img
          loading="lazy"
          src={url + item.poster_path}
          alt={item.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <h3 className="text-lg font-semibold text-white truncate">{item.title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default React.memo(Card);
