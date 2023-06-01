import React from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/logo.png";
import rwanda from "../imgs/rwanda.ico";
import "./home.css";

export default function Navigation() {
  return (
    <div>
      <nav className="fixed mt-8 mb-4 px-10 nav rounded">
        <div className="text-brown">
          <div className="px-0.5 pt-0.5 lg:px-8">
            <nav className="flex items-center">
              <div className="flex lg:flex-1">
                <img
                  src={logo}
                  className="w-10 float-left ml-16 rounded-lg"
                  alt=""
                />
                <span className="text-brown mt-3 font-bold">RCHA</span>
              </div>
              <div className="hidden lg:flex lg:gap-x-12 font-bold">
                <Link to="Home" className="text-base text-brown font-bold hover:bg-cyan-950 hover:text-white">
                  Home
                </Link>
                <Link to="About" className="text-base text-brown font-bold hover:bg-cyan-950 hover:text-white">
                  About
                </Link>
                <Link to="Contact" className="text-base text-brown font-bold hover:bg-cyan-950 hover:text-white">
                  Contact
                </Link>
              </div>
              <div className="flex lg:flex lg:flex-1 lg:justify-end font-bold mr-10">
                <Link
                  to="Register"
                  className="text-base text-white bg-blue-500 hover:bg-cyan-950 hover:text-white rounded py-1 px-2 rounded"
                >
                  Register
                </Link>
              </div>
              <div>
                <img
                  src={rwanda}
                  className="w-8 float-right mr-10 rounded-lg"
                  alt=""
                />
              </div>
            </nav>
          </div>
        </div>
      </nav>
    </div>
  );
}