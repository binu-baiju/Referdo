import React from "react";
import "../pages/form.css";
const Form: React.FC = () => {
  return (
    <>
      <div className="font-poppins">
        <header className="fixed top-0 left-0 right-0 bg-gray-900">
          <div className="container mx-auto py-4">
            <h1 className="dark:text-white text-2xl font-semibold">
              My Header
            </h1>
          </div>
        </header>
        {/* <div className="bg-violet-400">
        <h2>Fill with your details</h2>
        <form action="post"></form>
      </div> */}
        <div className="flex items-center justify-center h-screen w-full max-w-screen-lg px-4 sm:w-full  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        {/*  */}
          <div className="w-4/6 p-6  bg-violet-400  flex-grow">
            <h2 className="text-xl font-semibold mb-4">Fill the details</h2>
            <form className="">
                <div className="bg-white flex items-center justify-left rounded-lg">
                <div className="form-control p-6 w-96 ">
                <label className="label bg-gray-200 mb-2 ">
                  <span className="label-text">Your Email</span>
                </label>
                <label className="input-group input-group-vertical">
                  {/* <span>Email</span> */}
                  <input
                    type="text"
                    placeholder="info@site.com"
                    className="border-b rounded-b-none rounded-none focus:border-gray-500 focus:outline-none text-black bg-white placeholder:pl-1"
                    style={{ borderRadius: '0' }}
                  />
                </label>
              </div>
                </div>
             
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
