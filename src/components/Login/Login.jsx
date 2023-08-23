import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { GrFacebookOption } from "react-icons/gr";
// import { FcGoogle } from "react-icons/fc";
// import axios from "axios";
import "./Login.css";



// import museum from "../../imgs/museum.jpeg";

export default function Login() {

  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create an object with the user's login credentials
    const userCredentials = {
      account,
      password,
    };

    try {
      console.log(userCredentials);
      const response = await fetch("http://localhost:4050/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userCredentials),
      });

      // Check if the response status is OK (200)
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData); // Customize the handling as needed
        console.log('hello');
        setAccount("");
        setPassword("");

        // Save the token to local storage
        localStorage.setItem("accessToken", responseData.accessToken);

        // Redirect to the dashboard page after successful login
        if(responseData.role==='admin')
        {
          navigate("/Admdash");
        }
        else {
          if(responseData.role==='user')
        {
          navigate("/Dashboard");
        }
        }
        

      } 
      else {
        // Handle different error scenarios based on response status
        if (response.status === 401) {
          setErrorMessage("Password doesn't match.");
        } else if (response.status === 404) {
          setErrorMessage("We couldn't find a user with that information. Please ensure the user is registered or try again with correct details");
        } else {
          setErrorMessage("An error occurred. Please try again later.");
        }
      }
    } catch (error) {
      console.error(error); // Customize the error handling as needed
    }
  };


  


  return (

    <div className="back " >


      <section class="c1 ml-32  ">
        <div class="flex items-center  justify-right px-1 py-10 mx-auto md:h-screen lg:py-0 c3">
          <div class="flex-col w-full bg-white rounded-lg shadow dark:border md:mt-10 sm:max-w-md xl:p-0 ">
            <div class="p-6 space-y-4 md:space-y-6  sm:p-8">
              <form class="space-y-4 md:space-y-6 " onSubmit={handleSubmit} action="#">
                <h1 class="text-xl text-center font-bold leading-tight tracking-tight md:text-2xl mb-16 colo">
                  SIGN IN
                </h1>
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 sm:text-sm rounded-full block w-full p-2.5 outline-none "
                    placeholder="name@gmail.com"
                    required=""
                    value={account}
                    onChange={(e) => setAccount(e.target.value)}
                    
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 sm:text-sm rounded-full block w-full p-2.5 outline-none"
                    required=""
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {/* <div class="flex justify-center align-baseline mt-3 mb-3">
                  <label
                    For="setone"
                    class="font-light text-sm colo w-full flex "
                  >
      
                    <button
                      type="button"
                      onClick={handleForgotPassword}
                      className="flex w-fit text-blue-900 hover:bg-cyan-600 font-medium rounded-full text-sm px-1 border-2 border-blue-900 py-2 text-center bg-white"
                    >
                      Forgot Password
                    </button>
                    
                    <button
                      type="button"
                      onClick={handleResetPassword}
                      className="flex w-fit hover:bg-cyan-600 text-blue-900 font-medium rounded-full text-sm px-1 border-2 border-blue-900 py-2 text-center bg-white"
                    >
                      Reset Password
                    </button>
                    <hr class="border mt-3 ml-3 border-gray-200 w-20" />
                  </label>
                  <hr />
                </div> */}
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                <div class="flex gap-5">
                  <Link to="/Signup">
                    <button
                      type="submit"
                      class="w-32 text-blue-900 ml-7 hover:bg-cyan-950 font-medium rounded-full text-sm px-6 border-2 border-blue-900 py-2.5 text-center bg-white "
                    >
                      Sign Up
                    </button>
                  </Link>
                  <button
                    type="submit"
                    class="w-32 text-white font-medium hover:bg-cyan-950 rounded-full text-sm px-6 py-2.5 text-center bg-blue-900 ml-9 "
                  >
                    Log In
                  </button>
                </div>
                {/* <div class="flex px-6 mt-3 mb-3">
                  <label
                    For="setone"
                    class="font-light text-base colo w-full text-center flex "
                  >
                    <hr class="border mt-3 mr-3 border-gray-200 w-32" /> Or
                    <hr class="border mt-3 ml-3 border-gray-200 w-32" />
                  </label>
                </div> */}
                {/* <div class="flex gap-3  mb-6">
                  <Link to="https://en-gb.facebook.com/">
                    <button
                      type=""
                      class="flex w-fit text-blue-900 hover:bg-cyan-600 font-medium rounded-full text-sm px-1 border-2 border-blue-900 py-2 text-center bg-white "
                    >
                      <GrFacebookOption class="w-6 h-6" />  Continue with Facebook
                    </button>
                  </Link>
                  <Link >
                    <button
                      type=""
                      class="flex w-fit hover:bg-cyan-600 text-blue-900 font-medium rounded-full text-sm px-1 border-2 border-blue-900 py-2 text-center bg-white "
                    >
                      <FcGoogle class="w-6 h-6 mr-1" />Continue with Google

                    </button>
                  </Link>

                </div> */}
              </form>
            </div>

          </div>

        </div>
      </section>
      <div>
        {/* <img src={museum} alt="" class="prs"/> */}
      </div>

    </div>

  );
}