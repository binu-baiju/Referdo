import React, { useEffect, useState } from "react";

export default function Linksnew() {
  const [linkName, setLinkName] = useState("");
  const [links, setLinks] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLinkName(event.target.value);
    
    
  };

  async function displayAllLinks() {
    const headers = new Headers();
    headers.append("x-access-token", localStorage.getItem("token") || "");
    headers.append("Content-Type", "application/json");
    try {
      const req = await fetch(
        `http://localhost:5000/api/dashboard/link/getlink`,
        {
          headers: headers,
        }
      );
      const data = await req.json();
      console.log(data.links);

      if (data.status === "ok") {
        setLinks([...links, ...data.links]);

        console.log(links.length);
      } else {
        alert(data.error);
      }

      // Process the data or update state as needed
      console.log(data);
    } catch (error) {
      // Handle any error that occurred during the request
      console.error("Error fetching links:", error);
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(linkName);
    try {
      const headers = new Headers();
      headers.append("x-access-token", localStorage.getItem("token") || "");
      headers.append("Content-Type", "application/json");
      const response = await fetch(`http://localhost:5000/api/dashboard/link/createlink`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({linkName}),
      // body: {linkName},

    })
    console.log(response)
      if(response.ok){
       setLinkName("")
      }
      else {
        console.log("response.ok not");
      }
        // setLinkName("");
      
    } catch (error) {
      console.error('Error submitting form:', error);
    }

  };
  useEffect(() => {
    displayAllLinks();
    console.log("Links are "+links);
  },[]);

  return (
    <>
      <div className=" bg-slate-200 flex justify-center  lg:w-1/4 h-1/2 w-11/12  lg:mr-5 lg:mb-0 mb-64 lg:h-full rounded-lg">
        <div className="w-full flex flex-col items-center  m-2 border-[2px] border-dashed border-gray-400">
          <div>
            <h2 className="text-black p-2 underline font-bold">Links</h2>
          </div>
          <div className="w-full  flex flex-col items-center ">
            <div className="dropdown  w-11/12 flex justify-center">
              <label tabIndex={0} className="btn btn-sm m-1 w-3/4">
                Create a new link +
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content mt-9  menu p-2 shadow bg-base-100 rounded-box w-full h-36"
              >
                <li className="  flex justify-center">
                  <form action="" onSubmit={handleSubmit}>
                    <div className="form-control  w-full">
                      <label className="input-group input-group-sm flex justify-center  ">
                        <span>Link Name</span>
                        <input
                          type="text"
                          value={linkName}
                          onChange={handleChange}
                          placeholder="Link's name"
                          className="input input-bordered"
                        />
                      </label>
                      <button className="btn btn-active btn-sm hover:bg-white hover:text-black">
                        Create Link
                      </button>
                    </div>
                  </form>
                </li>
              </ul>
            </div>
            <div className="w-full h-96 overflow-y-auto   ">
              <ul className="flex flex-col gap-2   my-2 items-center  ">
              {links.slice().reverse().map((link,index) => (
                <li className="w-full flex  justify-center   py-2 rounded-lg " key={link + index}>
                
                      <p className="w-5/6 bg-white text-black flex justify-center items-center mx-2 rounded-lg" >
                      {link}
                    </p>
                    <label tabIndex={0} className="btn btn-sm m-1 ">
                      Copy
                    </label>
                </li>
                  ))}
                {/* <li className="w-full flex  justify-center   py-2 rounded-lg ">
                  <p className="w-5/6 bg-white text-black flex justify-center items-center mx-2 rounded-lg">
                    1
                  </p>
                  <label tabIndex={0} className="btn btn-sm m-1 ">
                    Copy
                  </label>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
