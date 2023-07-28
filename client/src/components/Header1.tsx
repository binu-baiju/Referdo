import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

const Header1: React.FC = () => {
  const location = useLocation();

  const shouldShowButtons = location.pathname !== "/subscribe";
  return (
    <nav className="bg-slate-100 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div>
          <a href="/" className="flex items-center">
            <img src={Logo} className="h-8 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-[#284184] text-blue-900">
              Refer
            </span>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-amber-500 text-yellow-400">
              ado
            </span>
          </a>
        </div>

        <div className="flex justify-end gap-5">
        {shouldShowButtons && (
          <>
          <div className="flex md:order-2 ">
            <button
              type="button"
              className="text-white bg-yellow-400 hover:bg-yellow-200 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-amber-500 dark:hover:bg-amber-400 "
            >
              Subscribe
            </button>
          </div>
          <div>
            <button
              type="button"
              className="bg-slate-100 btn-base ml-3 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:border-gray-600 dark:text-blue-800 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            >
              Logout
            </button>
          </div>
          </>
          )}
          {!shouldShowButtons && (
            <div>
              <Link
                to="/"
                className="bg-slate-100 btn-base ml-3 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:border-gray-600 dark:text-blue-800 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
              >
                Go back to Dashboard
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header1;
