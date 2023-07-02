import React, { useState } from 'react';
import "./Dashboard.css";
import logo from "../../imgs/logo.png";
import Firstpage from '../Services/Firstpage';
import Imigani from '../Services/Imigani';
import Ikenshavugo from '../Services/Ikenshavugo';
import Ibisakuzo from "../Services/Ibisakuzo";
import Incamarenga from "../Services/Incamarenga";
import Isomero from "../Services/Isomero";


export default function Dashboard() {


  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState("Content");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
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
            className={`py-2 px-6 text-white hover:bg-gray-300 cursor-pointer ${selectedItem === "Content" ? "bg-gray-300" : ""}`}
            onClick={() => handleItemClick("Content")}
          >
            Content
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
            className={`py-2 px-6 text-white hover:bg-gray-300 cursor-pointer ${selectedItem === "Isomero" ? "bg-gray-300" : ""}`}
            onClick={() => handleItemClick("Isomero")}
          >
            Isomero
          </li>
        </ul>
        {/* Rest of the sidebar content */}
        <div className="flex-grow"></div>

        <div className="p-4 mt-44 ml-4">
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
          {selectedItem === "Content" && (
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                  <Firstpage/>
                </div>
              </div>
            </section>
          )}
          {selectedItem === "Imigani migufi" && (
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                <Imigani/>
                 
                </div>
              </div>
            </section>
          )}
          {selectedItem === "Ikenshavugo" && (
            <section className="text-gray-600  body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4"> 
                <Ikenshavugo/>
                
                </div>
              </div>
            </section>
          )}
          {selectedItem === "Incamarenga" && (
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                <Incamarenga/>
                  
                </div>
              </div>
            </section>
          )}
          {selectedItem === "Ibisakuzo" && (
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                <Ibisakuzo/>
                  
                </div>
              </div>
            </section>
          )}
          {selectedItem === "Isomero" && (
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                <Isomero/>
                  
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
