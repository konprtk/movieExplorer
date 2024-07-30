import React from "react";
import Logo from "../MovieLogo3.png"

const Navbar = () => {
  return (
  <div className="flex border space-x-8 items-center pl-3 py-4">
    <img className="w-[50px]" src={Logo} alt="" />
    <a href="/" className="text-blue-500 text-3xl font-bold">Home</a>
    <a href="/watchlist" className="text-blue-500 text-3xl font-bold" >WatchList</a>
  </div>
)
};

export default Navbar;
