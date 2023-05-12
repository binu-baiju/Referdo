import React from "react";
import Logo from "../assets/images/Logo.png";

const Header: React.FC = () => {
  return (
    <nav className="bg-[#ffffff] fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <img src={Logo} className="h-8 mr-3" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-[#284184]">
            Refer
          </span>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-[#FFAD49]">
            do
          </span>
        </a>
        <div className="flex ">
          <div className="flex md:order-2 pl-10">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Subscribe
            </button>
            <button
              type="button"
              className="ml-3 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:border-gray-600 dark:text-[#284184] dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            >
              Login
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-white md:dark:bg- dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 dark:text-[#284184]  rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 dark:text-[#284184]  rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
