import React, { useState, useEffect } from "react";
import axios from "axios";

function Banner() {
  const [banner, setBanner] = useState({ banner_path: "", name: "" });

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=845e62b0e59f9c0af46e4904c2819d89&language=en-US`
      )
      .then((res) => {
        const movie = res.data.results[0];
        // if (movies.length > 0) {
         
        //   const randomIndex = Math.floor(Math.random() * movies.length);
        //   const movie = movies[randomIndex];
          setBanner({
            banner_path: movie.backdrop_path,
            name: movie.original_title,
          });
        // }
      });
      
  }, []);

  
  return (
    <div
      className="h-[20vh] md:h-[80vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${banner.banner_path})`,
      }}
    >
      <div className="text-white text-xl text-center w-full bg-gray-900/60 p-4">
        {banner.name}
      </div>
    </div>
  );
}

export default Banner