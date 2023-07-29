import React from "react";
import logo from "../assets/images/Logo.png";
import { copyToClipboard } from "../utils/copyToClipboard";

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


interface CardProps {
  // name: string;
  // profession: string;
  // email:string
  // phonenumber:string,
  // twitterurl:string,
  // githuburl:string,
  // linkedinurl:string
  dev:Dev;
  onClose?:() => void;
}

// export const handleCopyemail=(data:string)=>{
    
//   // const url = `https://dashboard/user/${userId}`;
//   function isLink(str:string) {
//     return str.startsWith('http://') || str.startsWith('https://');
//   }

//   navigator.clipboard.writeText(data)
//   .then(() => {
//     if (data.includes('@')) {
//     alert('Email copied to clipboard');

//     }
//     else if(isLink(data)){
//     alert('Link copied to clipboard');

//     }
//     else {
//       alert('Phonenumber copied to clipboard');

//     }
//   })
//   .catch((error) => {
//     console.error('Failed to copy URL', error);
//   });
// }

const Carddemo: React.FC<CardProps> = ({ dev,onClose }) => {
 
  // name ,profession,email,phonenumber,twitterurl,githuburl,linkedinurl
  return (
    <>
    
      <>
        {/* <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <label htmlFor="my-modal-4" className="modal cursor-pointer"> */}
          <div key={dev._id} className="max-w-sm w-52 h-full lg:h-full md:w-42  lg:w-52  flex-shrink-0 flex-grow-0 rounded-2xl overflow-hidden shadow-lg bg-white font-poppins">
            <div className="flex flex-col gap-2 ">
                <div className="flex flex-col gap-0">
                <div className=" flex justify-end items-center">
                <img
                  src={logo} // Replace "image-url.jpg" with the URL of your image
                  className="pr-4    h-9 "
                />
              </div>
              <div className=" flex justify-center items-center  ">
                <img
                  src={logo} // Replace "image-url.jpg" with the URL of your image
                  className="pr-4  h-11 pl-3"
                />
              </div>
                </div>
              

              <div className="flex flex-col gap-1  ">
                <div className="flex flex-col   gap-1 mb-3">
                  <h2 className="flex justify-center text-black text-xl ">{dev?.name}</h2>

                  <p className="flex justify-center text-amber-500 text-lg">
                    {dev?.profession}
                    
                    
                  </p>
                  <div className="flex flex-col ">
                    <div className="flex justify-center   ">
                      <p className="text-[12px]  dark:text-[#284184]  ">
                        {dev?.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="flex flex-col w-full items-center gap-1 lg:mt-10">
                    <button className="btn btn-xs  w-3/4 bg-violet-500 hover:bg-violet-600 border-none text-slate-100 " onClick={()=>copyToClipboard(dev?.email ?? '')} style={{ textTransform: 'lowercase' } }>{dev?.email}</button>
                    <button className="btn btn-xs  w-3/4 bg-violet-500 hover:bg-violet-600 border-none text-slate-100" onClick={()=>copyToClipboard(dev?.phonenumber ?? '')}>{dev?.phonenumber}</button>
                    <button className="btn btn-xs  w-3/4 bg-violet-500 hover:bg-violet-600 border-none text-slate-100">Resume</button>
                    

                    
                   
                  </div>

                  <div className="flex  mt-1 lg:mt-2    justify-center gap-6  items-end  w-40 px-2 lg:mx-5   ">
                    <div className="w=1/3"> <a
                      href={dev?.twitterurl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-1 "
                    >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      strokeWidth="24"
                      height=""
                      viewBox="0 0 24 24"
                      className="fill-amber-500 h-5 w-7 lg:h-6 hover:fill-blue-600"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                    </a></div>
                    <div className="w=1/3">
                    <a
                      href={dev?.githuburl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-7 lg:h-6 fill-amber-500 hover:fill-red-950"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      height="18"

                      >
                        <path  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    </div>
                    <div className="w=1/3">
                    <a
                      href={dev?.linkedinurl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-7 lg:h-6 fill-amber-500 hover:fill-blue-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path className="hover:bg-red-500" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                      </svg>
                    </a>
                    </div>


                  
                    
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* </label> */}
      </>
    </>
  );
};

export default Carddemo;
