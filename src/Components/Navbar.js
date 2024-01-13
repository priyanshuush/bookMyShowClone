// Navbar.js

import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-800 to-gray-600 p-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-white text-xl ml-4 font-semibold">React Navbar</span>
        </div>
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="text-white hover:text-gray-300 transition duration-300">Home</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300 transition duration-300">Movies</a>
          </li>
          <li>
            <a href="#" className="bg-white text-gray-800 hover:bg-gray-500 hover:text-white text-sm px-4 py-2 rounded-full transition duration-300">Login</a>
          </li>
          <li>
            <a href="#" className="bg-white text-gray-800 hover:bg-gray-500 hover:text-white text-sm px-4 py-2 rounded-full transition duration-300">Signup</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
