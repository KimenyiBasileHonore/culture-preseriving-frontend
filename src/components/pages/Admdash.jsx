import React, { useState, useRef, useEffect } from 'react';
import "./Admdash.css";
import logo from "../../imgs/logo.png";
import Maindashboard from "../Services/Maindashboard";
import Inbox from "../Services/Inbox";
import Feedback from "../Services/Feedback";
import Ibisakuzooo from "../Admin/Ibisakuzooo";
import Ikenshavugooo from "../Admin/Ikenshavugooo";
import Imiganiii from "../Admin/Imiganiii";
import Incamarengaaa from "../Admin/Incamarengaaa";
import Isomerooo from "../Admin/Isomerooo";

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState("Dashboard"); // Set "Dashboard" as the default selected item
  const mainContentRef = useRef(null);

  useEffect(() => {
    // Scroll to the main content when the component mounts
    if (mainContentRef.current) {
      mainContentRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    if (mainContentRef.current) {
      mainContentRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };


  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="fixed w-1/4 h-screen bg-blue-900">
        {/* Sidebar content */}
        <div>
          <img
            src={logo}
            className="w-10 mb-2 float-left ml-16 rounded-lg"
            alt=""
          />
          <h1 className="tet h-8 mt-3 ml-4 font-bold">RCP</h1>
        </div>
        <div className="p-4 ml-2">
          <input
            className="w-full bg-white-800 text-black rounded-full block py-2 px-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>

        <ul className="py-4 ml-2">
          <li
            className={`py-2 px-6 text-white hover:bg-gray-300 cursor-pointer ${selectedItem === "Home" ? "bg-gray-300" : ""}`}
            onClick={() => handleItemClick("Dashboard")}
          >
            Dashboard
          </li>
          <li
            className={`py-2 px-6 text-white hover:bg-gray-300 cursor-pointer ${selectedItem === "Inbox" ? "bg-gray-300" : ""}`}
            onClick={() => handleItemClick("Inbox")}
          >
            Inbox
          </li>
          <li
            className={`py-2 px-6 text-white hover:bg-gray-300 cursor-pointer ${selectedItem === "Feedback" ? "bg-gray-300" : ""}`}
            onClick={() => handleItemClick("Feedback")}
          >
            Feedback
          </li>
          <li
            className={`py-2 px-6 text-white hover:bg-gray-300 cursor-pointer ${selectedItem === "Imigani migufi" ? "bg-gray-300" : ""}`}
            onClick={() => handleItemClick("Imigani migufi")}
          >
            Imigani migufi
          </li>
          <li
            className={`py-2 px-6 text-white hover:bg-gray-300 cursor-pointer ${selectedItem === "Ikenshavugo" ? "bg-gray-300" : ""}`}
            onClick={() => handleItemClick("Ikenshavugo")}
          >
            Ikenshavugo
          </li>
          <li
            className={`py-2 px-6 text-white hover:bg-gray-300 cursor-pointer ${selectedItem === "Incamarenga" ? "bg-gray-300" : ""}`}
            onClick={() => handleItemClick("Incamarenga")}
          >
            Incamarenga
          </li>
          <li
            className={`py-2 px-6 text-white hover:bg-gray-300 cursor-pointer ${selectedItem === "Ibisakuzo" ? "bg-gray-300" : ""}`}
            onClick={() => handleItemClick("Ibisakuzo")}
          >
            Ibisakuzo
          </li>
          <li
            className={`py-2 px-6 text-white hover:bg-gray-300 cursor-pointer ${selectedItem === "Isomero" ? " bg-gray-300" : ""}`}
            onClick={() => handleItemClick("Isomero")}
          >
            Isomero
          </li>


        </ul>
        {/* Rest of the sidebar content */}
        <div className="flex-grow"></div>

        <div className="p-4  ml-4">
          <button className="bg-blue-900 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded">
            Log Out
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="w-3/4 bg-white ml-80 goooo">
        <div className="bg-gray-100 ml-5 py-4 px-6 fixed top-0 w-3/4 z-10">
          <h2 className="text-lg font-semibold">{selectedItem || "Content"}</h2>
        </div>

        <div className="p-6 ">
          {selectedItem === "Dashboard" && (
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                  <Maindashboard />
                </div>
              </div>
            </section>
          )}
          {selectedItem === "Inbox" && (
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                  <Inbox />

                </div>
              </div>
            </section>
          )}
          {selectedItem === "Feedback" && (
            <section className="text-gray-600  body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                  <Feedback />

                </div>
              </div>
            </section>
          )}

          {selectedItem === "Imigani migufi" && (
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                  <Imiganiii />

                </div>
              </div>
            </section>
          )}
          {selectedItem === "Ikenshavugo" && (
            <section className="text-gray-600  body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                  <Ikenshavugooo />

                </div>
              </div>
            </section>
          )}
          {selectedItem === "Incamarenga" && (
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                  <Incamarengaaa />

                </div>
              </div>
            </section>
          )}
          {selectedItem === "Ibisakuzo" && (
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                  <Ibisakuzooo />

                </div>
              </div>
            </section>
          )}
          {selectedItem === "Isomero" && (
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                  <Isomerooo />

                </div>
              </div>
            </section>
          )}


        </div>
      </div>
    </div>
  );
}
