import React from "react";

function WatchList() {
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
        <input
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
            <tr className="border-b-2">
              <td className="flex items-center px-6 py-4">
                <img
                  className="h-[6rem] w-[10rem]"
                  src={`https://lumiere-a.akamaihd.net/v1/images/p_disney_thecreator_v1_2776_cc1a5f09.jpeg`}
                  alt=""
                />
                <div className="mx-10">The Creator</div>
              </td>
              <td>9.5</td>
              <td>9</td>
              <td>Sci-Fi</td>

              <td className="text-red-600">Delete</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
