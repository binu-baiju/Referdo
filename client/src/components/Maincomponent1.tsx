import React from "react";
import girl_img from "../assets/images/image-og-girl-fotor-bg-remover-202305161864.png";
import job_search from "../assets/images/Frame 19 (1).png";
import icon1 from "../assets/images/ic_round-restaurant-menu.png";
import icon2 from "../assets/images/mdi_alien-outline.png";
import icon3 from "../assets/images/mdi_all-inclusive.png";
import Login from "../pages/login";

const Maincomponent1: React.FC = () => {
  return (
    <div className="bg-slate-100 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 mt-16  flex flex-col h-screen overflow-auto">
  <Login/>

      <div className=" space-x-4 flex justify-center mt-10 align-items">
        <span className="self-center text-4xl font-semibold whitespace-nowrap dark:text-[#284184] flex items-center justify-center font-poppins">
          Refer.
        </span>
        <span className="self-center text-4xl font-semibold whitespace-nowrap dark:text-amber-500 flex items-center justify-center font-poppins">
          Job.
        </span>
        <span className="self-center text-4xl whitespace-nowrap dark:text-indigo-400 flex items-center justify-center font-poppins">
          Search.
        </span>
      </div>
      <span className="self-center text-xs whitespace-nowrap dark:text-[#284184] flex items-center justify-center font-poppins pt-3 font-normal">
        Place where people Refer and Earn each Other
      </span>
      <div className="flex justify-center h-96 bg-gradient-to-b from-violet-50 to-violet-300">
        <img src={girl_img} className="object-contain opacity-" alt="logo" />
      </div>
      <div className="bg-violet-300 flex-col justify-center min-h-screen overflow-auto pt-20">
        <span className="self-center text-4xl whitespace-nowrap dark:text-white flex items-center justify-center font-poppins">
          Features
        </span>
        <span className="self-center text-xs whitespace-nowrap dark:text-[#284184] flex items-center justify-center font-poppins pt-1 pb-16 font-normal">
          Mentors can refer
        </span>
        <div className="flex flex-col md:flex-row text-center justify-center font-poppins h-96 gap-10">
          <div className="pl-48 pt-48 md:pl-0 md:pt-0 md:flex md:items-center">
            <img
              src={job_search}
              className="object-contain w-64 md:w-74 md:h-84 ml- "
              alt="logo"
            />
          </div>

          <div className="flex flex-col justify-center text-center">
            <div className="">
              <div className="flex gap-2 justify-center items-center">
                <img src={icon1} className="pb-12" alt="" />
                <div className=" pt-">
                  <span className="text-xl whitespace-nowrap dark:text-[#284184]     font-poppins pr-32">
                    Refer Platform
                  </span>
                  <p className="text-start text-x">
                    Platform where you can refer and
                    <br />
                    Earn
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex gap-2 justify-center items-center pl-9">
                <img src={icon2} className="pb-12" alt="" />
                <div className="">
                  <span className="text-xl whitespace-nowrap dark:text-[#284184]     font-poppins pr-">
                    Job seekers can start a new life
                  </span>
                  <p className="text-start text-base">
                    Platform where you can refer and
                    <br />
                    Earn
                  </p>
                </div>
              </div>
            </div>
            <div className="pl-3">
              <div className="flex gap-2 justify-center items-center">
                <img src={icon3} className="pb-12" alt="" />
                <div className=" pt-">
                  <span className="text-xl whitespace-nowrap dark:text-[#284184]     font-poppins pr-32">
                    Mentors get paid
                  </span>
                  <p className="text-start text-base">
                    Many companies paying mentors
                    <br />
                    who refer their employees
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-violet-300 flex-col justify-center min-h-min  pt-20 bg-gradient-to-b from-violet-300 to-violet-50">
        <div>
          <span className="self-center text-4xl whitespace-nowrap dark:text-white flex items-center justify-center font-poppins">
            Subscription Plans
          </span>
          <span className="self-center text-xs whitespace-nowrap dark:text-[#284184] flex items-center justify-center font-poppins pt-1 pb-16 font-normal">
            Mentors can refer
          </span>
        </div>
      </div>

      <footer className="footer items-center mb-16 bg-slate-100 dark:text-[#284184]  h-48 border-t border-black">
        <div className="flex gap-5 flex-row pl-5">
          <div className="items-center grid-flow-row">
            <div className="flex flex-col pb-2 pt-2">
              <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-[#284184] flex items-center justify-center font-poppins pb-2">
                Resources
              </span>
              <a className="link link-hover" href="https://www.tutorialspoint.com" target="_blank" rel="noopener noreferrer">
                <span className="self-center text-sm font-semibold whitespace-nowrap dark:text-[#284184] flex items-center justify-center font-poppins">
                  TutorialPoint
                </span>
              </a>
              <a className="link link-hover" href="https://www.geeksforgeeks.org" target="_blank" rel="noopener noreferrer">
                <span className="self-center text-sm font-semibold whitespace-nowrap dark:text-[#284184] flex items-center justify-center font-poppins">
                  GeekforGeeks
                </span>
              </a>
              <a className="link link-hover" href="https://medium.com" target="_blank" rel="noopener noreferrer">
                <span className="self-center text-sm font-semibold whitespace-nowrap dark:text-[#284184] flex items-center justify-center font-poppins">
                  Medium
                </span>
              </a>
              <a className="link link-hover" href="https://www.pesto.tech" target="_blank" rel="noopener noreferrer">
                <span className="self-center text-sm font-semibold whitespace-nowrap dark:text-[#284184] flex items-center justify-center font-poppins">
                  Pesto
                </span>
              </a>
            </div>
          </div>
          <div className="items-center grid-flow-row ">
            <div className="flex flex-col pb-2 pt-2">
              <span className="self-center text-l font-semibold whitespace-nowrap dark:text-[#284184] flex items-center justify-center font-poppins pb-2 text-lg">
                About
              </span>
              <a className="link link-hover">
                <span className="self-center text-sm font-semibold whitespace-nowrap dark:text-[#284184] flex items-center justify-center font-poppins">
                  Home
                </span>
              </a>
              <a className="link link-hover">
                <span className="self-center text-sm font-semibold whitespace-nowrap dark:text-[#284184] flex items-center justify-center font-poppins">
                  Login
                </span>
              </a>
              <a className="link link-hover">
                <span className="self-center text-sm font-semibold whitespace-nowrap dark:text-[#284184] flex items-center justify-center font-poppins">
                  Pricing
                </span>
              </a>
              <a className="link link-hover">
                <span className="self-center text-sm font-semibold whitespace-nowrap dark:text-[#284184] flex items-center justify-center font-poppins">
                  Updates
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="grid-flow-row md:place-self-center md:justify-self-end pr-5 gap-2">
          <div className="flex text-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>

            <span className="self-center text-l font-semibold whitespace-nowrap dark:text-[#284184] flex items-center justify-center font-poppins">
              Kerala,India
            </span>
          </div>

          <div className="flex text-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>

            <span className="self-center text-l font-semibold whitespace-nowrap dark:text-[#284184] flex items-center justify-center font-poppins">
              123456789
            </span>
          </div>
          <div className="flex gap-3">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
            strokeWidth="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-blue-500"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 fill-blue-500"
                
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
            strokeWidth="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-blue-500"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Maincomponent1;
