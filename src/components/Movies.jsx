import React, { useEffect } from "react";
import MovieCard from "./MovieCard";
import axios from "axios"


function Movies() {
  return (
    <div className="p-5">
      <div className=" text-2xl m-5 font-bold text-center ">
        Trending Movies
      </div>

      <div className="flex flex-row justify-wrap justify-around space-x-6">
        <MovieCard />
        
      </div>
    </div>
  );
}

export default Movies;


