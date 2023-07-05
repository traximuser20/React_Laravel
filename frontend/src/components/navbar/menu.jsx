import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-medium text-slate-700">
      <Link
        to={"/"}
        className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
      >
        Home
      </Link>
      <Link
        to={"/create"}
        className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
      >
        Create
      </Link>
      <Link
        to={"/list"}
        className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
      >
        List
      </Link>
      <Link
        to={"/about"}
        className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
      >
        About
      </Link>
    </div>
  );
};

export default Menu;
