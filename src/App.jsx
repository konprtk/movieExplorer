import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import WatchList from "./components/WatchList";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  let [watchlist, setWatchList] = useState([]);

  let handleAddToWatchList = (movieObj) => {
    let newWatchlist = [...watchlist, movieObj];
    localStorage.setItem('moviesApp', JSON.stringify(newWatchlist))
    setWatchList(newWatchlist);
    console.log(newWatchlist);
  };

  let handleRemoveFromWatchList = (movieObj) => {
    let filteredWatchList = watchlist.filter((movie) => {
      return movie.id != movieObj.id;
    });

    setWatchList(filteredWatchList);
    console.log(filteredWatchList);
  };

  useEffect(()=>{
   let moviesFromLocalStorage = localStorage.getItem('moviesApp')
   if(!moviesFromLocalStorage){
    return
   }
   setWatchList(JSON.parse(moviesFromLocalStorage))
  },[])

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  watchlist={watchlist}
                  handleAddToWatchList={handleAddToWatchList}
                  handleRemoveFromWatchList={handleRemoveFromWatchList}
                />
              </>
            }
          />
          <Route
            path="/watchlist"
            element={
              <WatchList watchlist={watchlist} setWatchList={setWatchList} />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
