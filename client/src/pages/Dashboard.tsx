import React from "react";
import Logo from "../assets/images/Logo.png";

const Dashboard: React.FC = () => {
  return (
    <div>
    <nav className="bg-slate-100 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4  drop-shadow-2xl ">
        <a href="https://flowbite.com/" className="flex items-center">
          <img src={Logo} className="h-8 mr-3" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-[#284184] text-blue-900	">
            Refer
          </span>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-amber-500 text-yellow-400">
            ado
          </span>
        </a>
        <div className="flex ">
          <div className="flex md:order-2 pl-10">
            <button
              type="button"
              className="text-white bg-yellow-400 hover:bg-yellow-200 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-amber-500 dark:hover:bg-amber-400 "
            >
              Subscribe
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
        </div>
      </div>
    </nav>
    
    <div className="bg-purple-400  text-white h-[500px] rounded-md w-80 shadow-md drop-shadow-2xl align-center mt-14"> 
    
    <div className="flex flex-col">

    <div>
    <a href="https://flowbite.com/" className="flex items-center">
      <img src={Logo}className="mt-8 ml-28 h-24" alt="Flowbite Logo" />
      </a>
      </div>

    <div>
              <button
              type="button"
              className="text-white bg-yellow-400  text-[8px] mt-2">Edit Profile
              </button>
              </div>

      <div>
      <div className="text-blue-900" >
        <p>Alan Santo</p>
      </div>

      <div className="text-yellow-400">
        <p>Full Stack Developer</p>
      </div>
      </div>
      </div>

      <div className="text-blue-900 mr-48 text-[10px] ">
        <p>Refferd Devs</p>
      </div>

    

        <div className="w-90 h-40 bg-blue-900 rounded-lg shadow-md absolute inset-x-5 bottom-28">

        <div className="w-60 h-10 bg-purple-400 rounded-lg ml-5 mt-2 ">
              <div>
              <button
              type="button"
              className="text-white bg-yellow-400 ml-40 text-[8px]">Show
              </button>
              </div>
        </div> 

        <div className="w-60 h-10 bg-purple-400 rounded-lg ml-5 mt-2">
        <div>
              <button
              type="button"
              className="text-white bg-yellow-400 ml-40 text-[8px]">Show
              </button>
              </div>
          </div> 

        <div className="w-60 h-10 bg-purple-400 rounded-lg ml-5 mt-2 ">
        <div>
              <button
              type="button"
              className="text-white bg-yellow-400 ml-40 text-[8px]">Show
              </button>
              </div>
          </div> 
      </div> 

      <div>
      <button
              type="button"
              className="text-blue-900 bg-white hover:bg-slate-200 focus:ring-4  font-medium rounded-lg text-sm  text-center absolute inset-x-14 bottom-7 py-0 px-4" >
              Create a Public Link
       </button> 
      </div> 

      <div>
      <button
              type="button"
              className="text-white bg-yellow-400 hover:bg-purple-800 focus:ring-4  text-[8px]  absolute inset-x bottom-16 py-1 px-0 ml-20 w-14"
            >
              Show all
       </button>
      </div>

      <div>
      <button
              type="button"
              className="text-white bg-yellow-400 hover:bg-purple-800 focus:ring-4  text-[8px]  absolute inset-x bottom-16 py-1 px-0 ml-4 w-14"  
            >
              Share
       </button>
      </div>
    </div>
    </div> 
  );
  }
export default Dashboard;