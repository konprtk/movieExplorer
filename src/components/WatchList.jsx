import React, { useState } from "react";

function WatchList({watchlist}) {

  const [search, setSearch] = useState("")

  let handleSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        <div className="flex justify-center  items-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl text-white font-bold mx-4">
          Sci-Fi
        </div>

        <div className="flex justify-center  items-center h-[3rem] w-[9rem] bg-gray-400/50 rounded-xl text-white font-bold">
          Sci-Fi
        </div>
      </div>

      <div className="flex justify-center my-4">
        <input onChange={handleSearch} value={search}
          type="text"
          placeholder="Search for movies"
          className="h-[3rem] w-[18rem] bg-gray-200 outline-none px-4"
        />
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 m-8">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>

          {watchlist.filter((movieObj) => {
            return movieObj.title.toLowerCase().includes(search.toLocaleLowerCase())
          }).map((movieObj)=>{
            return (
              <tr className="border-b-2">
                <td className="flex items-center px-6 py-4">
                  <img
                    className="h-[6rem] w-[10rem]"
                    src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                    alt="Poster"
                  />
                  <div className="mx-10">{movieObj.title}</div>
                </td>
                <td>{movieObj.vote_average.toFixed(1)}</td>
                <td>{movieObj.popularity}</td>
                <td>{movieObj.genre_ids}</td>

                <td className="text-red-600">Delete</td>
              </tr>
            );
          })}

            
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
