import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=845e62b0e59f9c0af46e4904c2819d89&language=en-US&page=1`
      )
      .then(function (res) {
        setMovies(res.data.results);
      });
  }, []);

  return (
    <div className="p-5">
      <div className="text-2xl m-5 font-bold text-center ">
        Trending Movies
      </div>

      <div className="flex flex-row flex-wrap  justify-around gap-8">
        {movies.map((movieObj) => {
          return <MovieCard poster_path={movieObj.poster_path} name={movieObj.original_title}/>;
        })}
      </div>
    </div>
  );
}

export default Movies;

//popular movies
// https://api.themoviedb.org/3/movie/popular?api_key=845e62b0e59f9c0af46e4904c2819d89&language=en-US&page=1

// trending movies
// https://api.themoviedb.org/3/trending/movie/day?api_key=845e62b0e59f9c0af46e4904c2819d89&language=en-US