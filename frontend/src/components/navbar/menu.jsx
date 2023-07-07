import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-medium text-black">
      <Link
        to={"/"}
        className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-blue-400 focus:outline-none focus:text-white focus:bg-blue-600"
      >
        Home
      </Link>
      <Link
        to={"/create"}
        className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-blue-400 focus:outline-none focus:text-white focus:bg-blue-600"
      >
        Create
      </Link>
      <Link
        to={"/users"}
        className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-blue-400 focus:outline-none focus:text-white focus:bg-blue-600"
      >
        Users
      </Link>
      <Link
        to={"/about"}
        className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-blue-400 focus:outline-none focus:text-white focus:bg-blue-600"
      >
        About
      </Link>
    </div>
  );
};

export default Menu;
