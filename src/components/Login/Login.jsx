import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GrFacebookOption } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import "./Login.css";



// import museum from "../../imgs/museum.jpeg";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create an object with the user's login credentials
    const userCredentials = {
      email,
      password,
    };

    try {
      // Send a POST request to the login API endpoint
      const response = await axios.post("/login", userCredentials);

      // Handle the successful login response
      console.log(response.data); // The response will contain the JWT token and other data

      setEmail("");
      setPassword("");
      // You can handle the login response according to your needs, e.g., save the token to local storage and redirect to the dashboard page
      // For example:
      localStorage.setItem("accessToken", response.data.accessToken);
      // Redirect to the dashboard page after successful login
      // Make sure to import 'useHistory' from 'react-router-dom'
      // useHistory().push("/dashboard");
      navigate("/dashboard");
    } catch (error) {
      // Handle login errors
      console.error(error); // You can customize the error handling according to your needs
    }
  };
  const handleForgotPassword = () => {
    // Navigate to the Forgot Password page
    navigate("/forgot-password");
  };

  const handleResetPassword = () => {
    // Replace 'your_reset_token_here' with the actual reset token received in the email link
    const resetToken = "your_reset_token_here";
    // Navigate to the Reset Password page with the reset token as a parameter
    navigate(`/reset-password/${resetToken}`);
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
                  />
                </div>
                <div class="flex justify-center align-baseline mt-3 mb-3">
                  <label
                    For="setone"
                    class="font-light text-sm colo w-full flex "
                  >
                    {/* <hr class="border mt-3 mr-3 border-gray-200 w-20" /> Forgot Your Password?{" "} */}
                    <button
                      type="button"
                      onClick={handleForgotPassword}
                      className="flex w-fit text-blue-900 hover:bg-cyan-600 font-medium rounded-full text-sm px-1 border-2 border-blue-900 py-2 text-center bg-white"
                    >
                      Forgot Password
                    </button>
                    {/* <Link to="" class="text-base hover:bg-cyan-600 ml-1 font-bold hover:underline">
                      SetOne
                    </Link> */}
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
                </div>
                <div class="flex gap-5">
                  <Link to="/Signup">
                    <button
                      type="submit"
                      class="w-32 text-blue-900 ml-7 hover:bg-cyan-950 font-medium rounded-full text-sm px-6 border-2 border-blue-900 py-2.5 text-center bg-white "
                    >
                      Sign up
                    </button>
                  </Link>
                  <button
                    type="submit"
                    class="w-32 text-white font-medium hover:bg-cyan-950 rounded-full text-sm px-6 py-2.5 text-center bg-blue-900 ml-9 "
                  >
                    Log In
                  </button>
                </div>
                <div class="flex px-6 mt-3 mb-3">
                  <label
                    For="setone"
                    class="font-light text-base colo w-full text-center flex "
                  >
                    <hr class="border mt-3 mr-3 border-gray-200 w-32" /> Or
                    <hr class="border mt-3 ml-3 border-gray-200 w-32" />
                  </label>
                </div>
                <div class="flex gap-3  mb-6">
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

                </div>
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