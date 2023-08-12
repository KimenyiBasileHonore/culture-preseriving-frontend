import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


import "./Login.css";


// import museum from "../../imgs/museum.jpeg";

export default function Signup() {

  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form data before submission:", {
      username,
      fullname,
      phone,
      email,
      password,
    });

    // Create a user object with the form data
    const user = {
      username,
      fullname,
      phone,
      email,
      password,
    };

    try {
      // Send a POST request to the signup endpoint with the user data
      const response = await axios.post("http://localhost:4050/api/user/signup", user);

      // Handle the successful signup response
      console.log(response.data); // You can customize the handling according to your needs

      // Clear the form
      setUsername("");
      setFullname("");
      setPhone("");
      setEmail("");
      setPassword("");

      navigate("/dashboard");
    } catch (error) {
      // Handle signup errors
      console.error(error); // You can customize the error handling according to your needs
    }
  };

  return (
    <div className="back">

      <section class="c1  py-8 ">
        <div class=" justify-right px-10 py-10 ">
          <div class="flex-col w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0.1  ">
            <div class="p-6 space-y-4 md:space-y-9 sm:p-4 " >
              <h1 class="text-xl font-bold leading-tight  text-center tracking-tight md:text-2xl brown ">
                Create an account
              </h1>
              <form onSubmit={handleSubmit} class="space-y-1 md:space-y-1" action="#">
                <div>
                  <label for="name" class="block   font-bold brown ">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={username}
  onChange={(e) => setUsername(e.target.value)}
                    id="username"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 "
                    placeholder=""
                    required
                  />
                </div>
                <div>
                  <label for="name" class="block   font-bold brown ">
                    Fullname
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={fullname}
  onChange={(e) => setFullname(e.target.value)}
                    id="fullName"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 "
                    placeholder=""
                    required
                  />
                </div>
                <div>
                  <label for="email" class="block  font-bold brown ">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
  onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 "
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block  font-bold brown"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={password}
  onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    class="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg block w-full p-2.5"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <div>
                  <label
                    for="phone"
                    class="block  mb-1 font-bold brown"
                  >
                    Phone
                  </label>
                  <input
                    type="number"
                    name="phone"
                    value={phone}
  onChange={(e) => setPhone(e.target.value)}
                    id="phone_number"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
                    placeholder="+2507•••••"
                    required
                  />
                </div>

                <button
                  type="submit"
                  class="w-64 hover:bg-cyan-950 ml-16 text-white font-medium rounded-full text-sm px-6 py-2.5 text-center bg-blue-900"
                >
                  Create an account
                </button>
                <div class="text-sm font-light brown ">
                  Already have an account?{" "}

                  <Link
                    to="/Login"
                    class="font-bold text-base  hover:bg-cyan-600 hover:underline "
                  >
                    Login Here!
                  </Link>
                </div>
              </form>
            </div>
          </div>
          {/* <img src={museum} alt="" class="prs"/> */}
        </div>
      </section>
    </div>
  );
}
