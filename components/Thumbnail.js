import React from "react";
import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";

// eslint-disable-next-line react/display-name
const Thumbnail = React.forwardRef(({ result },ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div ref={ref} className="group cursor-pointer p-2 transition transform ease-in duration-200 sm:hover:scale-105 hover:z-50 ">
      <Image
        layout="responsive"
        width={1920}
        height={1080}
        alt="poster-images"
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
      />
      <div className="p-2">
        <h2 className="mt-1 text-2xl text-white transition-all ease-in-out duration-100 group-hover:font-bold">{result.title || result.original_name}</h2>
        <p className="truncate">{result.overview}</p>
        <div className="flex items-center opacity-0 group-hover:opacity-100">
          <p className="mr-2">{result.media_type && `${result.media_type}`}</p>
          <p className="mr-2">{result.release_date || result.first_air_date}</p>
          <ThumbUpIcon className="h-5 cursor-pointer" />
        </div>
      </div>
    </div>
  );
});

export default Thumbnail;
