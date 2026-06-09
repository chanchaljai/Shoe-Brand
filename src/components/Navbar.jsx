import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/brand_logo.png";

const Navbar = ({setShowPopup}) => {
  return (
    <div>
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 md:px-12 py-4">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <ul className="flex gap-8 hidden md:flex text-lg">
          <li>
            <Link to="/#">Menu</Link>
          </li>
          <li>
            <Link to="/#">Location</Link>
          </li>
          <li>
            <Link to="/#">About</Link>
          </li>
          <li>
            <Link to="/#">Contact</Link>
          </li>
        </ul>
        <button onClick={() => setShowPopup(true)}
         className="bg-red-700 text-white px-2 py-1 text-lg font-semibold rounded hover:bg-red-600 hover:cursor-pointer">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
