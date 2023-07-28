import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../assets/images/Logo.png";
import EditProfile from "../components/EditProfile";
import Carddemo from "../components/Carddemo";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Linksnew from "../components/Links";

const user1 = {
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
  { name: "Edit Profile", href: "#", htmlFor: "my-modal-3" },
  { name: "Sign out", href: "#", htmlFor: "" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export type User = {
  name: string;
  email: string;
  _id: string;
  profession: string;
  devs: Array<string>;
};

export type Dev = {
  email: string;
  name: string;
  user: string;
  _id: string;
  profession: string;
  description: string;
  phonenumber: string;
  twitterurl: string;
  githuburl: string;
  linkedinurl: string;
};

export default function Dashboardnew() {
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    _id: "",
    profession: "",
    devs: [],
  });

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

  async function dashboardVerify() {
    const headers = new Headers();
    headers.append("x-access-token", localStorage.getItem("token") || "");
    try {
      const req = await fetch("http://localhost:5000/api/dashboard", {
        headers: headers,
      });
      const data = await req.json();

      if (data.status === "ok") {
        setUser(data.user);
        // setProfession(data.profession)
      } else {
        alert(data.error);
      }
      console.log(data);
    } catch (error) {
      // Handle any error that occurred during the request
      console.error("Error fetching dashboard data:", error);
    }
  }

  async function displayAllDevs(skip: number) {
    const headers = new Headers();
    headers.append("x-access-token", localStorage.getItem("token") || "");
    headers.append("Content-Type", "application/json");
    try {
      const req = await fetch(
        `http://localhost:5000/api/dashboard/getdevs?skip=${skip}`,
        {
          headers: headers,
        }
      );
      const data = await req.json();
      console.log(data.devs);

      if (data.status === "ok") {
        setDevs([...devs, ...data.devs]);

        console.log(devs.length);
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

  // async function displayDevs() {
  //   const headers = new Headers();
  //   headers.append("x-access-token", localStorage.getItem("token") || "");

  //   try {
  //     const req = await fetch("http://localhost:5000/api/dashboard/getdevs", {
  //       headers: headers,
  //     });
  //     const data = await req.json();
  //     if (data.status === "ok") {
  //       setDevs(data.devs);
  //       // setProfession(data.profession)
  //     } else {
  //       alert(data.error);
  //     }

  //     // Process the data or update state as needed
  //     console.log(data);
  //   } catch (error) {
  //     // Handle any error that occurred during the request
  //     console.error("Error fetching devs:", error);
  //   }
  // }

  const handleScroll = (e: React.UIEvent) => {
    const { offsetHeight, scrollTop, scrollHeight } = e.target as HTMLElement;
    console.log(offsetHeight + scrollTop, scrollHeight);

    if (offsetHeight + scrollTop >= scrollHeight) {
      setSkip(devs?.length);
      console.log(skip);
    }
  };

  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwtDecode(token);
      // console.log(user);
      if (!user) {
        localStorage.removeItem("token");
        navigate("/login", { replace: true });
      } else {
        dashboardVerify();
        displayAllDevs(skip);
      }
    }
  }, [skip]);
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full w-screen  overflow-y-auto fixed  top-0 font-poppins ">
        <EditProfile dashboardVerify={dashboardVerify} />

        <Disclosure as="nav" className="bg-blue-900  top-0">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="flex max-w-xs items-center rounded-full  text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src={user1.imageUrl}
                              alt=""
                            />
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
                                  <label
                                    // href={item.href}
                                    htmlFor="my-modal-3"
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    {item.name}
                                  </label>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
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
                        src={user1.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">
                        {user1.name}
                      </div>
                      <div className="text-sm font-medium leading-none text-gray-400">
                        {user1.email}
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
                {/* Dashboard */}
              </h1>
            </div>
          </header>
          <main className="relative">
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 bg  h-screen">
              {/* jknkjbjhbhbhjbhvgybhgvhvgh */}
            </div>
          </main>
          <div className="flex flex-1 flex-col justify-center items-center lg:flex-row lg:justify-center gap-9   absolute top-24 left-1/2 transform -translate-x-1/2 lg:h-3/5 h-full   w-full  ">
            <div className=" bg-slate-100 border flex justify-center  h-3/4   lg:w-full  w-full lg:ml-5  lg:h-full rounded-lg">
              <div className="w-full flex flex-col justify-between  items-center  m-2 border-[2px] border-dashed border-gray-400">
                <h2 className="text-black p-2 underline font-bold">
                  Referred Devs
                </h2>
                <div className=" flex flex-col justify-start w-full h-96 lg:h-full px-1">
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
                      className="flex  flex-wrap  lg:h-96 overflow-y-auto  w-full md:justify-start lg:justify-start   lg:items-start  h-full lg:gap-3 gap-3 lg:px-3 px-6   py-2"
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

                <div className="w-full h-  flex justify-end items-center  ">
                  <button className="btn btn-sm mr-2  text-white">Share</button>
                </div>
              </div>
            </div>
           <Linksnew />
          </div>
        </div>
      </div>
    </>
  );
}
