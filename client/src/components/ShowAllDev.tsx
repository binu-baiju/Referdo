import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

import { User, Dev } from "../pages/Dashboard";
import logo from "../assets/images/Logo.png";

import Card2 from "../pages/Card2";


type showAllDevsProps = {
  // dashboardVerify?: () => void;
  deleteDev?: (id: string, name: string) => void;
  handleRefreshModal?: () => void;

  refreshModal: boolean;
  setRefreshModal: (refresh: boolean) => void;
};





const ShowAllDev = ({ refreshModal, setRefreshModal, handleRefreshModal }: showAllDevsProps) => {

  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    _id: "",
    profession: "",
    devs: [],
  });
  const [devs, setDevs] = useState<Dev[]>([
  ]);
  const [skip,setSkip] = useState(0);
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
        
      } else {
        alert(data.error);
      }
      console.log(data);
    } catch (error) {
      // Handle any error that occurred during the request
      console.error("Error fetching dashboard data:", error);
    }
  }


   async function displayAllDevs(skip : number) {

    const headers = new Headers();
    headers.append("x-access-token", localStorage.getItem("token") || "");
    headers.append("Content-Type", "application/json");
    try {

      const req = await fetch(`http://localhost:5000/api/dashboard/getdevs?skip=${skip}`, {

        headers: headers,
      });
      const data = await req.json();
      console.log(data.devs);
      
      if (data.status === "ok") {
          setDevs([...devs,...data.devs]);
         


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

  

  const handleScroll =(e: React.UIEvent) => {
    const { offsetHeight, scrollTop, scrollHeight } = e.target as HTMLElement;
    console.log(offsetHeight + scrollTop,scrollHeight);
    

    if(offsetHeight + scrollTop >= scrollHeight) {
     
      setSkip(devs?.length);
      console.log(skip);
      
    }
  }

  async function deleteAllDev(id: string, name: string) {
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
            displayAllDevs(skip);
            if(handleRefreshModal){
              handleRefreshModal();
            }
             
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

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwtDecode(token);
      // console.log(user);
      if (!user) {
        localStorage.removeItem("token");
      } else {
        if (dashboardVerify) {
          dashboardVerify();
        }
        // displayDevs(skip);
        displayAllDevs(skip);

        if (refreshModal) {
            setRefreshModal(false);
            console.log('Modal refreshed');
          }
      }

    }
  }, [refreshModal, setRefreshModal,skip]);
  return (
    <>
               
      
      <input type="checkbox" id="my-modal" className="modal-toggle " />
      <div className="modal ">
        <div className="modal-box relative bg-violet-500 font-poppins">
        <Card2 dev={selectedDev} onClose={closeModal} />
          <label
            htmlFor="my-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2 bg-violet-500"
            style={{ border: "none" }}
          >
            X
          </label>
          <div className=" flex">
            <h2 className=" text-2xl font-bold">Show All</h2>
          </div>
          <div className="modal-content overflow-scroll max-h-96 w-full" onScroll={handleScroll}>


            
          {devs.map((dev) => {
            return (
              <div
                key={dev._id}
                className="w-full  h-13 bg-blue-900 rounded-lg my-3 mt-3"
              >

                {/* name={dev.name} profession={dev.profession} email={dev.email} phonenumber={dev.phonenumber} twitterurl={dev.twitterurl} githuburl={dev.githuburl} linkedinurl={dev.twitterurl} */}

                <div className="flex flex-row  justify-between items-center  px-3 ">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center   mb-1">
                      <img src={logo} className="w-9 h-9" alt="Flowbite Logo" />
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
                        className="btn-xs  bg-blue-900 flex items-center"
                        onClick={() => {
                          deleteAllDev && deleteAllDev(dev._id, dev.name);
                          
                        }}
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
                        htmlFor="my-modal-1"
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
      

          <div className="modal-action"></div>
        </div>
      </div>
    </>
  );
};

export default ShowAllDev;
