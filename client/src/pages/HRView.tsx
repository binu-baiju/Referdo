import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../assets/images/Logo.png";
import Linksnew from "../components/Links";
import { Dev } from "./Dashboardnew";
import Carddemo from "../components/Carddemo";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
  { name: "Reports", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}



export default function HRView() {

   
    const [devs, setDevs] = useState<Dev[]>([
        {
          email: "",
          name: "",
          user: "",
          _id: "",
          profession: "",
          description: "",
          phonenumber: "",
          twitterurl: "",
          githuburl: "",
          linkedinurl: "",
        },
      ]);

      const [skip, setSkip] = useState(0);

      const [userId, setUserId] = useState('');
      const [refferrer, setRefferrer] = useState('');


      async function displayAllHrDevs(skip: number) {
        try {
            const req = await fetch(
              `http://localhost:5000/api/hrview/${userId}?skip=${skip}`
            );
            const data = await req.json();
            console.log(data.devs);
            console.log(data.user.name)
            setRefferrer(data.user.name)
      
            if (data.status === "ok") {
              if (data.devs.length > 0) {
                // If it's the first page (skip === 0), set the state directly with the fetched devs
                // Otherwise, append the fetched devs to the existing devs state
                setDevs((prevDevs) =>
                  skip === 0 ? data.devs : [...prevDevs, ...data.devs]
                );
              } else {
                // If there are no more devs to fetch (empty response), display a message or handle the end of the list
                console.log("No more devs to fetch");
              }
              // setDevs((prevDevs) => {
              //   // Here, prevDevs is the previous state of the 'devs' variable.
              //   // You can use this to calculate the updated state.
              //   return [...prevDevs, ...data.devs];
              // });
              // setDevs([...devs, ...data.devs]);
      
              // console.log(devs.length);
            } else {
              alert(data.error);
            }
      
            // Process the data or update state as needed
            console.log(data);
          } catch (error) {
            // Handle any error that occurred during the request
            console.error("Error fetching devs:", error);
          }
      }

      const handleScroll = (e: React.UIEvent) => {
        const { offsetHeight, scrollTop, scrollHeight } = e.target as HTMLElement;
        console.log(offsetHeight + scrollTop, scrollHeight);
    
        if (offsetHeight + scrollTop >= scrollHeight) {
          setSkip(devs?.length);
          // console.log(skip);
        }
      };

      useEffect(() => {
        // Get the current URL
        const url = window.location.href;
       
        console.log();
        
    
        // Extract the userId from the URL
        const parts = url.split('/');
        const userIdFromURL = parts[4];
        // console.log(userIdFromURL)

        
    
    
    
    // console.log(userIdFromURL);
    // console.log(parts);
    
    
   
        setUserId(userIdFromURL);
        console.log(userId);
        if(userId){
            displayAllHrDevs(skip);
        }
        
       
   
    
       

    
    
      }, [skip,userId]);

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      {/*
        This example requires updating your template:

        
        <html class="h-full bg-gray-100">
        <body class="h-full">
        
      */}
      <div className="min-h-full w-screen  overflow-y-auto fixed  top-0 font-poppins    ">
        <Disclosure as="nav" className="bg-blue-900  top-0  ">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex">
                      <img
                        src={Logo}
                        className="h-8 mr-3"
                        alt="Flowbite Logo"
                      />
                      <span className="self-center text-2xl font-semibold whitespace-nowrap ">
                        Refer
                      </span>
                      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-amber-500 text-yellow-400">
                        ado
                      </span>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {/* {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'dark:text-[#284184] hover:bg-gray-700 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))} */}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block  ">
                    <div className="ml-4 flex items-center md:ml-6">
                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div >
                          <Menu.Button className="flex max-w-xs  items-center rounded-full  text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="sr-only">Open user menu</span>
                            
                            <img
                              className="h-8 w-8 rounded-full"
                              src={user.imageUrl}
                              alt=""
                            />
                            <p className="ml-3">From {refferrer}</p>
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden ">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium leading-none text-gray-400">
                        {user.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <div>
          <header className="bg-blue-900 shadow relative">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 h-16 ">
              
              </h1>
            </div>
          </header>
          <main className="relative">
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 bg  h-screen">
             
            </div>
          </main>
          <div className=" flex flex-1 flex-col justify-center items-center lg:flex-row lg:justify-center gap-9   absolute top-1 lg:top-24 mt-24 lg:mt-0 left-1/2 transform -translate-x-1/2 lg:h-3/5 h-full px-2 lg:px-0    w-full  ">
            <div className=" bg-slate-100 border flex justify-start  h-1/2   lg:w-full  w-full lg:ml-5  lg:h-full rounded-lg ">
              <div className="w-full flex flex-col justify-between   items-center  m-2 border-[2px] border-dashed border-gray-400">
                <div className=" w-full flex flex-col items-center">
                <h2 className="text-black p-2 underline font-bold">
                  Referred Devs
                </h2>
                <div className=" flex flex-col justify-start w-full h-96 lg:h-full px-1 ">
                  <div className="navbar  flex  bg-slate-300 rounded-lg">
                    <div className="flex-none">
                      <ul className="menu menu-horizontal  text-black">
                        <li className="">
                          <a>Devs</a>
                        </li>
                        <li>
                          <a>Marketing</a>
                        </li>
                        <li>
                          <a>Frontend</a>
                        </li>
                        <li>
                          <a>Backend</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className=" w-full h-full   flex lg:flex-wrap  overflow-y-auto     items-center lg:items-start text-black ">
                    <div
                      onScroll={handleScroll}
                      className="flex  flex-wrap   lg:h-96 overflow-y-auto  
                      w-full    sm:justify-center md:justify-center lg:justify-center 
                      lg:items-start  h-full gap-3 sm:gap-0.5 md:gap-8 lg:gap-2 px-2 
                      md:px-0 lg:px-3 py-2 "
                    >
                      {devs.map((dev) => {
                        if (dev) {
                          return <Carddemo key={dev._id} dev={dev} />;
                        }
                        return null;
                      })}

                      {/* //  <Carddemo />
                  //  <Carddemo />
                  //  <Carddemo />
                  //  <Carddemo />
                  //  <Carddemo />
                  //  <Carddemo /> */}
                    </div>

                    {/* <Carddemo />
                    <Carddemo /> */}

                    {/* <Card /> */}
                  </div>
                </div>
                
                </div>
                {/* <div className="w-full h-  flex justify-end items-center   my-2 mr-7 lg:my-12 lg:mr-0 ml-6  ">
                  <label
                    htmlFor="my-modal-share"
                    className="btn btn-sm mr-2  text-white"
                  >
                    Share
                    <svg
                      className="w-4 ml-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M13.803 5.33333C13.803 3.49238 15.3022 2 17.1515 2C19.0008 2 20.5 3.49238 20.5 5.33333C20.5 7.17428 19.0008 8.66667 17.1515 8.66667C16.2177 8.66667 15.3738 8.28596 14.7671 7.67347L10.1317 10.8295C10.1745 11.0425 10.197 11.2625 10.197 11.4872C10.197 11.9322 10.109 12.3576 9.94959 12.7464L15.0323 16.0858C15.6092 15.6161 16.3473 15.3333 17.1515 15.3333C19.0008 15.3333 20.5 16.8257 20.5 18.6667C20.5 20.5076 19.0008 22 17.1515 22C15.3022 22 13.803 20.5076 13.803 18.6667C13.803 18.1845 13.9062 17.7255 14.0917 17.3111L9.05007 13.9987C8.46196 14.5098 7.6916 14.8205 6.84848 14.8205C4.99917 14.8205 3.5 13.3281 3.5 11.4872C3.5 9.64623 4.99917 8.15385 6.84848 8.15385C7.9119 8.15385 8.85853 8.64725 9.47145 9.41518L13.9639 6.35642C13.8594 6.03359 13.803 5.6896 13.803 5.33333Z"
                          fill="#ffffff"
                        ></path>{" "}
                      </g>
                    </svg>
                  </label>


                </div> */}
              </div>
            </div>
            {/* <Linksnew/> */}

            <div className="mb-96 lg:mb-0"></div>
          </div>
        </div>
      </div>
      {/* <div>
          <header className="bg-white shadow relative top-16">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 h-16">
                Dashboard
              </h1>
            </div>
          </header>
          <main className="relative">
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8  bg-red-500 h-screen">
              jknkjbjhbhbhjbhvgybhgvhvgh
            </div>
          </main>
          <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-center gap-9  absolute top-24 left-1/2 transform -translate-x-1/2 lg:h-3/5 h-full  w-full bg-blue-500 ">
            <div className=" bg-purple-500  lg:w-3/4 h-1/2 w-11/12 lg:ml-5 lg:h-full">
              hello
            </div>
            <div className=" bg-green-500 lg:w-1/4 h-1/2 w-11/12  lg:mr-5 lg:mb-0 mb-64 lg:h-full">
              hai
            </div>
          </div>
        </div> */}
    </div>
  );
}


<div className=" flex flex-col justify-between w-full h-96 lg:h-full px-1 bg-green-500"> 
                
                <div className="navbar  flex  bg-slate-300 rounded-lg">
                  <div className="flex-none">
                    <ul className="menu menu-horizontal  text-black">
                      <li className="">
                        <a>Devs</a>
                      </li>
                      <li>
                        <a>Marketing</a>
                      </li>
                      <li>
                        <a>Frontend</a>
                      </li>
                      <li>
                        <a>Backend</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className=" w-full bg-red-500 max-h-3/4  flex lg:flex-wrap  overflow-y-auto     items-center lg:items-start text-black ">
                  <div
                    // onScroll={handleScroll}
                    className="flex  flex-wrap   lg:h-96 overflow-y-auto  
                    w-full    sm:justify-center md:justify-center lg:justify-start 
                    lg:items-start  h-full gap-3 sm:gap-2 md:gap-1 lg:gap-1 px-2 
                    md:px-0 lg:px-3 py-2 "
                  >
                    {/* {devs.map((dev) => {
                      if (dev) {
                        return <Carddemo key={dev._id} dev={dev} />;
                      }
                      return null;
                    })} */}

                    {/* //  <Carddemo />
                //  <Carddemo />
                //  <Carddemo />
                //  <Carddemo />
                //  <Carddemo />
                //  <Carddemo /> */}
                  </div>

                  {/* <Carddemo />
                  <Carddemo /> */}

                  {/* <Card /> */}
                </div>
                </div>