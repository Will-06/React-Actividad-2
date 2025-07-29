import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="p-4 dark:bg-gray-100 dark:text-gray-800">
      <div className="container flex justify-between h-16 mx-auto">
       
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <Link
              to="/"
              className="flex items-center px-4 -mb-1 border-b-2 dark:text-violet-600 dark:border-violet-600"
            >
              Inicio
            </Link>
          </li>
          <li className="flex">
            <Link
              to="/productos"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:dark:border-violet-600"
            >
              Productos
            </Link>
          </li>
          <li className="flex">
            <Link
              to="/contacto"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:dark:border-violet-600"
            >
              Contacto
            </Link>
          </li>
        </ul>

        
        <Link to="/" aria-label="Back to homepage" className="flex items-center p-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-8 h-8 dark:text-violet-600">
            <path d="M27.912 7.289l-10.324-5.961..."></path>
          </svg>
        </Link>

       
        <div className="flex items-center md:space-x-4">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button type="submit" title="Search" className="p-1 focus:outline-none focus:ring">
                <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-800">
                  <path d="M479.6,399.716l-81.084-81.084..."></path>
                </svg>
              </button>
            </span>
            <input
              type="search"
              name="Search"
              placeholder="Search..."
              className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50"
            />
          </div>
          <button type="button" className="hidden px-6 py-2 font-semibold rounded lg:block dark:bg-violet-600 dark:text-gray-50">
            Log in
          </button>
        </div>

        
        <button title="Open menu" type="button" className="p-4 lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
