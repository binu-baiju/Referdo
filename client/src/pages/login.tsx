import React, { useState } from "react";
import googleLogo from "../assets/images/google.svg";
import Logo from "../assets/images/Logo.png";
// import { GoogleLogin } from '@react-oauth/google';
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from "@leecheuk/react-google-login";
const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID as string;

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerOrLoginUser(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/api/registerOrLogin", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();
    console.log(data);
    
    if(data.token){
      localStorage.setItem('token',data.token)
      alert("Login Successful")
      window.location.href = '/dashboard'
    }
    else {
      alert('Please check your username and password')
    }

    // console.log(data);
  }
  
  const handleGoogleLoginSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    // Handle successful login response here
    console.log(response);
  };

  const handleGoogleLoginFailure = (error: any) => {
    // Handle failed login response here
    console.log(error);
  };
  
  

  return (
    // {/* The button to open modal */}
    <>
      // {/* The button to open modal */}
      // {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-violet-400 font-poppins relative">
          <div className="card-body ">
            <div className="absolute top-0 left-0  p-4">
              <img src={Logo} className="h-8 mr-3" alt="Flowbite Logo" />
            </div>
            <div className="absolute top-0 left-80">
              <label
                htmlFor="my-modal-3"
                className="btn btn-sm  absolute left-6 right-0 top-4 bg-violet-400 dark:text-[#284184] hover:dark:text-white hover:bg-violet-400 border-none"
              >
                ✕
              </label>
            </div>
            <div className="mb-2 dark:text-amber-300">
              <span>Login/Create an Account</span>
            </div>
            <button className="btn bg-slate-100 normal-case dark:text-[#284184] flex items-center justify-center btn-sm hover:shadow-lg hover:bg-slate-100">
              <img
                src={googleLogo}
                alt="Google_logo"
                className="w-4 h-4 mr-2 pb-"
              />
              <span>Continue with Google</span>
            </button>
            {/* <GoogleLogin
            clientId='279223932900-4c6tivkbrlqfkun1ppcjrkja9d9asnph.apps.googleusercontent.com'
            buttonText="Continue with Google"
            onSuccess={handleGoogleLoginSuccess}
            onFailure={handleGoogleLoginFailure}
            cookiePolicy={'single_host_origin'}>

            </GoogleLogin> */}
            
            <div className="flex items-center">
              <div className="flex-grow border-t border-dotted w-32"></div>
              <p className="mx-4 dark:text-[#284184]">or</p>
              <div className="flex-grow border-t border-dotted w-32"></div>
            </div>
            <form onSubmit={registerOrLoginUser}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-[#284184]">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input input-bordered bg-slate-100 input-sm text-[#284184]"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-[#284184]">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="input input-bordered bg-slate-100 input-sm text-[#284184]"
                />
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover dark:text-[#284184]"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                {/* <button className="btn btn-primary" type="submit">
                  Sign in
                </button> */}
                <input type="submit" className="btn btn-primary" value="Sign in" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
