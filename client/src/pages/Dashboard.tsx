import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ClipboardJS from 'clipboard'
// import jwt from 'jsonwebtoken'
import Logo from "../assets/images/Logo.png";
import jwtDecode from "jwt-decode";
import EditProfile from "../components/EditProfile";
import Header1 from "../components/Header1";
import "./Dashboard.css";
import Card from "./Card";

type User = {
  name: string;
  email: string;
  _id: string;
  profession: string;
  devs: Array<string>;
};
type Dev = {
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
const Dashboard: React.FC = () => {
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

  const [selectedDev, setSelectedDev] = useState<Dev | null>(null);

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

  async function displayDevs() {
    const headers = new Headers();
    headers.append("x-access-token", localStorage.getItem("token") || "");

    try {
      const req = await fetch(
        "http://localhost:5000/api/dashboard/getsomedevs",
        {
          headers: headers,
        }
      );
      const data = await req.json();
      if (data.status === "ok") {
        
        
        setDevs(data.devs);
        // setProfession(data.profession)
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

  async function deleteDev(id: string, name: string) {
    if (window.confirm(`Are you sure you want to delete ${name}`)) {
      const headers = new Headers();
      headers.append("x-access-token", localStorage.getItem("token") || "");
      headers.append("Content-Type", "application/json");
      try {
        await fetch("http://localhost:5000/api/dashboard/deletedev", {
          method: "DELETE",
          headers: headers,
          body: JSON.stringify({
            devId: id,
            devName: name,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            alert(data.message);
            displayDevs();
          });
      } catch (err) {
        console.error("Error deleting from frontend", err);
      }
    }
  }

  const handleSelectedDev = (dev: Dev) => {
    setSelectedDev(dev);
  };

  const closeModal = () => {
    setSelectedDev(null);
  };

  
  const handleCopyurl=(userId:string)=>{
    
    const url = `http://localhost:5173/form/user/${userId}/dev`;
    

    navigator.clipboard.writeText(url)
    .then(() => {
      alert('URL copied to clipboard');
    })
    .catch((error) => {
      console.error('Failed to copy URL', error);
    });

    


    
  }

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
        displayDevs();
      }
    }
  }, []);
  return (
    <>
      <div className="font-poppins">
        <Header1 />
        <EditProfile dashboardVerify={dashboardVerify} />

        <div className=" fixed w-full z-20  left-0 border-b border-gray-200 dark:border-gray-600 top-16 mt-1.5  flex h-screen overflow-auto">
          <div className="w-1/5 bg-violet-400 flex flex-col items-center gap-2">
            <div>
              <a href="" className="flex items-center">
                <img
                  src={Logo}
                  className="mt-8 lg:h-24 md:h-18"
                  alt="Flowbite Logo"
                />
              </a>
            </div>
            <div>
              <label
                htmlFor="my-modal-3"
                className="btn text-blue-900 bg-yellow-400  text-[8px] mt-2 btn-xs"
              >
                Edit profile
              </label>
            </div>

            <div>
              <div className="text-blue-900">
                <p>{user.name || "no user found"}</p>
              </div>

              <div className="text-yellow-400">
                <p>{user.profession || "Full stack dev"}</p>
              </div>
            </div>
          </div>
          <div className="bg-customPurple w-4/5 flex flex-col justify-center items-center gap-3">
            <div className="text-slate-200    w-full flex justify-start lg:pl-14 md:pl-7">
              <label className="bg-customPurple ">
                <h3 className="border-b-2 border-white">Refered Devs</h3>
              </label>
            </div>

            <div className="w-11/12 h-2/4 bg-blue-900 rounded-lg shadow-md   flex flex-col justify-start items-center">
              {devs.map((dev) => {
                return (
                  <div
                    key={dev._id}
                    className="w-11/12 h-12 bg-violet-400 rounded-lg my-3 mt-3"
                  >
                    <Card dev={selectedDev} onClose={closeModal} />
                    {/* name={dev.name} profession={dev.profession} email={dev.email} phonenumber={dev.phonenumber} twitterurl={dev.twitterurl} githuburl={dev.githuburl} linkedinurl={dev.twitterurl} */}

                    <div className="flex flex-row  justify-between items-center  px-3 ">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center   mb-1">
                          <img
                            src={Logo}
                            className="w-9 h-9"
                            alt="Flowbite Logo"
                          />
                        </div>

                        <div className=" flex flex-col items-start justify-center my-1">
                          <h3>{dev.name}</h3>

                          <p className="text-[13px]">{dev.profession}</p>
                          {/* <p>{dev._id}</p> */}
                          {/* <p>Binu</p>

                          <p>Full stack Engineer</p> */}
                          {/* <p>134242124</p> */}
                        </div>
                      </div>
                      <div className="flex items-center pb-1 gap-1">
                        <div className="">
                          <button
                            className="btn-xs  bg-violet-400 flex items-center"
                            onClick={() => deleteDev(dev._id, dev.name)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-4 h-4 "
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>
                          </button>
                        </div>

                        <div>
                          <label
                            htmlFor="my-modal-4"
                            onClick={() => handleSelectedDev(dev)}
                            className="btn btn-sm text-xs  bg-yellow-400 hover:bg-yellow-300   text-blue-900"
                          >
                            Show
                          </label>
                          {/* <button
                            type="button"
                            
                            className=" h-7 bg-yellow-400   text-[10px] text-blue-900"
                          >
                            Show
                          </button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-end w-full md:px-7 lg:px-14 gap-2">
              <div>
                <button
                  type="button"
                  className="copy-button h-9 bg-yellow-400  text-[14px] text-blue-900 w-24"
                >
                  Show All
                </button>
              </div>

              <div>
                <button
                  type="button"
                  className=" h-9 bg-yellow-400  text-[14px] text-blue-900 w-24"
                >
                  Share
                </button>
              </div>
            </div>

            <div className="w-full">
              <button
                type="button"
                onClick={()=>{handleCopyurl(user._id)}}
                className="bg-slate-200 text-blue-90 text-blue-900 hover:bg-slate-200 focus:ring-4  font-medium rounded-lg text-sm  text-center   py-0 h-8 w-1/2"
              >
                Create a Public Link
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;

// const Dashboard1: React.FC = () => {
//   return (
//     <>
//       <div className="flex flex-col bg-slate-400 w-1/3 items-center h-screen">
//         <div>
//           <a href="" className="flex items-center">
//             <img src={Logo} className="mt-8 h-24" alt="Flowbite Logo" />
//           </a>
//         </div>
//         <div>
//           <label
//             htmlFor="my-modal-3"
//             className="btn text-blue-900 bg-yellow-400  text-[8px] mt-2 btn-xs"
//           >
//             Edit profile
//           </label>
//         </div>

//         <div>
//           <div className="text-blue-900">
//             <p>{user.name || "no user found"}</p>
//           </div>

//           <div className="text-yellow-400">
//             <p>{user.profession || "Full stack dev"}</p>
//           </div>
//         </div>
//       </div>
//       <div className="bg-violet-400 w-2/3">
//         <div className="text-blue-900 mr-48 text-[10px] ">
//           <p>Refferd Devs</p>
//         </div>

//         <div className="w-90 h-40 bg-blue-900 rounded-lg shadow-md absolute inset-x-5 bottom-28 flex flex-col justify-center">
//           {devs.map((dev) => {
//             return (
//               <div className="w-60 h-30 bg-violet-400 rounded-lg ml-5 mt-2  ">
//                 <div className="flex flex-row  justify-between items-center px-3 ">
//                   <div className="flex items-center gap-2">
//                     <img src={Logo} className="w-7 h-7" alt="Flowbite Logo" />
//                     <div className="text-[13px]">
//                       <p>{dev.name}</p>

//                       <p>{dev.profession}</p>
//                       <p>{dev._id}</p>
//                     </div>
//                   </div>
//                   <div className="flex flex-row ">
//                     <button
//                       className="btn-xs flex justify-end items-center bg-violet-400 "
//                       onClick={() => deleteDev(dev._id, dev.name)}
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth={1.5}
//                         stroke="currentColor"
//                         className="w-4 h-4 "
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
//                         />
//                       </svg>
//                     </button>

//                     <button
//                       type="button"
//                       className="text-blue-900 h-7 bg-yellow-400  text-[8px]"
//                     >
//                       Show
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         <div>
//           <button
//             type="button"
//             className="text-blue-90text-blue-900 hover:bg-slate-200 focus:ring-4  font-medium rounded-lg text-sm  text-center absolute inset-x-14 bottom-7 py-0 px-4"
//           >
//             Create a Public Link
//           </button>
//         </div>

//         <div>
//           <button
//             type="button"
//             className="text-blue-900 bg-yellow-400 hover:bg-purple-800 focus:ring-4  text-[8px]  absolute inset-x bottom-16 py-1 px-0 ml-20 w-14"
//           >
//             Show all
//           </button>
//         </div>

//         <div>
//           <button
//             type="button"
//             className="text-blue-900 bg-yellow-400 hover:bg-purple-800 focus:ring-4  text-[8px]  absolute inset-x bottom-16 py-1 px-0 ml-4 w-14"
//           >
//             Share
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

{
  /* <div className="font-poppins">
  <Header1 />

  <div className="bg-violet-400  text-blue-900 shadow-md drop-shadow-2xl  w-full h-screen fixed left-0  right-0 top-16 mt-1.5">
    <EditProfile dashboardVerify={dashboardVerify} />
    <div className="flex flex-col bg-slate-400 w-1/3 items-center h-screen">
      <div>
        <a href="" className="flex items-center">
          <img src={Logo} className="mt-8 h-24" alt="Flowbite Logo" />
        </a>
      </div>

      <div>
        <label
          htmlFor="my-modal-3"
          className="btn text-blue-900 bg-yellow-400  text-[8px] mt-2 btn-xs"
        >
          Edit profile
        </label>
      </div>

      <div>
        <div className="text-blue-900">
          <p>{user.name || "no user found"}</p>
        </div>

        <div className="text-yellow-400">
          <p>{user.profession || "Full stack dev"}</p>
        </div>
      </div>
    </div>

    <div className="text-blue-900 mr-48 text-[10px] ">
      <p>Refferd Devs</p>
    </div>

    <div className="w-90 h-40 bg-blue-900 rounded-lg shadow-md absolute inset-x-5 bottom-28 flex flex-col justify-center">
      {devs.map((dev) => {
        return (
          <div className="w-60 h-30 bg-violet-400 rounded-lg ml-5 mt-2  ">
            <div className="flex flex-row  justify-between items-center px-3 ">
              <div className="flex items-center gap-2">
                <img src={Logo} className="w-7 h-7" alt="Flowbite Logo" />
                <div className="text-[13px]">
                  <p>{dev.name}</p>

                  <p>{dev.profession}</p>
                  <p>{dev._id}</p>
                </div>
              </div>
              <div className="flex flex-row ">
                <button
                  className="btn-xs flex justify-end items-center bg-violet-400 "
                  onClick={() => deleteDev(dev._id, dev.name)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>

                <button
                  type="button"
                  className="text-blue-900 h-7 bg-yellow-400  text-[8px]"
                >
                  Show
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>

    <div>
      <button
        type="button"
        className="text-blue-90text-blue-900 hover:bg-slate-200 focus:ring-4  font-medium rounded-lg text-sm  text-center absolute inset-x-14 bottom-7 py-0 px-4"
      >
        Create a Public Link
      </button>
    </div>

    <div>
      <button
        type="button"
        className="text-blue-900 bg-yellow-400 hover:bg-purple-800 focus:ring-4  text-[8px]  absolute inset-x bottom-16 py-1 px-0 ml-20 w-14"
      >
        Show all
      </button>
    </div>

    <div>
      <button
        type="button"
        className="text-blue-900 bg-yellow-400 hover:bg-purple-800 focus:ring-4  text-[8px]  absolute inset-x bottom-16 py-1 px-0 ml-4 w-14"
      >
        Share
      </button>
    </div>
  </div>
</div>; */
}
