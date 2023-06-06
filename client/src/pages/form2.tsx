import React from "react";
import "../pages/form.css";
import Header1 from "../components/Header1";

const Form: React.FC = () => {
  return (
    <div>
   

      <div className="">
        <div className="font-poppins ">
          <div className="flex items-center justify-center h-screen w-full max-w-screen-lg px-4 sm:w-full  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-4/6 p-20  bg-violet-400  flex-grow rounded-lg space-y-6  ">
              <h2 className="text-xl font-semibold text-white mb-10 ">
                Fill the details
              </h2>

              <div className="">
                <form className="">
                  <div className="bg-white flex items-center justify-left rounded-lg">
                    <div className="form-control pt-96 w-96 ">
                      <label className="label bg-gray-200 mb-2 ">
                        <span className="label-text">Name</span>
                      </label>
                      <label className="input-group input-group-vertical">
                        {/* <span>Email</span> */}
                        <input
                          type="text"
                          placeholder="Add file"
                          className="border-b rounded-b-none rounded-none focus:border-gray-500 focus:outline-none text-black bg-white placeholder:pl-1"
                          style={{ borderRadius: "0" }}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="bg-white flex items-center justify-left rounded-lg ">
                    <div className="form-control p-6 w-96 ">
                      <label className="label bg-gray-200 mb-2 ">
                        <span className="label-text">Profession</span>
                      </label>
                      <label className="input-group input-group-vertical">
                        {/* <span>Email</span> */}
                        <input
                          type="text"
                          placeholder="Add file"
                          className="border-b rounded-b-none rounded-none focus:border-gray-500 focus:outline-none text-black bg-white placeholder:pl-1"
                          style={{ borderRadius: "0" }}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="bg-white flex items-center justify-left rounded-lg">
                    <div className="form-control p-6 w-96 ">
                      <label className="label bg-gray-200 mb-2 ">
                        <span className="label-text">Untitled Form</span>
                      </label>
                      <label className="input-group input-group-vertical">
                        {/* <span>Email</span> */}
                        <input
                          type="text"
                          placeholder="form discription"
                          className="border-b rounded-b-none rounded-none focus:border-gray-500 focus:outline-none text-black bg-white placeholder:pl-1"
                          style={{ borderRadius: "0" }}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="bg-white flex items-center justify-left rounded-lg">
                    <div className="form-control p-6 w-96 ">
                      <label className="label bg-gray-200 mb-2 ">
                        <span className="label-text">Email</span>
                      </label>
                      <label className="input-group input-group-vertical">
                        {/* <span>Email</span> */}
                        <input
                          type="text"
                          placeholder="info@site.com"
                          className="border-b rounded-b-none rounded-none focus:border-gray-500 focus:outline-none text-black bg-white placeholder:pl-1"
                          style={{ borderRadius: "0" }}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="bg-white flex items-center justify-left rounded-lg">
                    <div className="form-control p-6 w-96 ">
                      <label className="label bg-gray-200 mb-2 ">
                        <span className="label-text">Phone Number</span>
                      </label>
                      <label className="input-group input-group-vertical">
                        {/* <span>Email</span> */}
                        <input
                          type="number"
                          placeholder="123456789"
                          className="border-b rounded-b-none rounded-none focus:border-gray-500 focus:outline-none text-black bg-white placeholder:pl-1"
                          style={{ borderRadius: "0" }}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="bg-white flex items-center justify-left rounded-lg">
                    <div className="form-control p-6 w-96 ">
                      <label className="label bg-gray-200 mb-2 ">
                        <span className="label-text">Resume</span>
                      </label>
                      <label className="input-group input-group-vertical">
                        {/* <span>Email</span> */}
                        <input
                          type="text"
                          placeholder="Add file"
                          className="border-b rounded-b-none rounded-none focus:border-gray-500 focus:outline-none text-black bg-white placeholder:pl-1"
                          style={{ borderRadius: "0" }}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="bg-white flex items-center justify-left rounded-lg">
                    <div className="form-control p-6 w-96 ">
                      <label className="label bg-gray-200 mb-2 ">
                        <span className="label-text">GitHub</span>
                      </label>
                      <label className="input-group input-group-vertical">
                        {/* <span>Email</span> */}
                        <input
                          type="text"
                          placeholder="Enter your GitHub account link "
                          className="border-b rounded-b-none rounded-none focus:border-gray-500 focus:outline-none text-black bg-white placeholder:pl-1"
                          style={{ borderRadius: "0" }}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="bg-white flex items-center justify-left rounded-lg">
                    <div className="form-control p-6 w-96 ">
                      <label className="label bg-gray-200 mb-2 ">
                        <span className="label-text">LinkedIn</span>
                      </label>
                      <label className="input-group input-group-vertical">
                        {/* <span>Email</span> */}
                        <input
                          type="text"
                          placeholder="Enter your LinkedIn profile link "
                          className="border-b rounded-b-none rounded-none focus:border-gray-500 focus:outline-none text-black bg-white placeholder:pl-1"
                          style={{ borderRadius: "0" }}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="bg-white flex items-center justify-left rounded-lg">
                    <div className="form-control p-6 w-96 ">
                      <label className="label bg-gray-200 mb-2 ">
                        <span className="label-text">Twitter</span>
                      </label>
                      <label className="input-group input-group-vertical">
                        {/* <span>Email</span> */}
                        <input
                          type="text"
                          placeholder="Enter your Twitter profile link "
                          className="border-b rounded-b-none rounded-none focus:border-gray-500 focus:outline-none text-black bg-white placeholder:pl-1"
                          style={{ borderRadius: "0" }}
                        />
                      </label>
                    </div>
                  </div>
                  <div>
                <button className="bg-yellow-400 text-white  ">create</button>
              </div>
                </form>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
