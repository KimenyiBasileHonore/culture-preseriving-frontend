import React, { useState, useRef, useEffect,useMemo } from 'react';
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
  const [filteredItems, setFilteredItems] = useState([]);
 // Combine the content from different JSX files into a single array
 const allItems = useMemo(
  () => [
    "Imigani migufi",
    "Ikenshavugo",
    "Incamarenga",
    "Ibisakuzo",
    "Isomero",
    // Add more items from other JSX files if needed
  ],
  [] // Empty dependency array since there are no dependencies
);
useEffect(() => {
  if (searchQuery) {
    const filtered = allItems.filter((item) =>
      item.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredItems(filtered);
  } else {
    setFilteredItems([]); // Set to an empty array when there's no search query
  }
}, [searchQuery, allItems]);



  const [selectedItem, setSelectedItem] = useState("Home");
  const mainContentRef = useRef(null);
  const handleItemClick = (item) => {
    setSelectedItem(item);
    if (mainContentRef.current) {
      mainContentRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="fixed w-1/4 h-screen bg-blue-900 text-white p-6">
        {/* Sidebar content */}
        <div>
          <img
            src={logo}
            className="w-10 mb-2 float-left ml-16 rounded-lg"
            alt=""
          />
          <h1 className="text-xl font-bold">RCP</h1>
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

        <ul className="space-y-2">
  {filteredItems.map((item) => (
    <button
      key={item}
      className={`w-full py-2 px-6 hover:bg-gray-300 toto cursor-pointer ${selectedItem === item ? "bg-gray-300" : ""
        }`}
      onClick={() => handleItemClick(item)}
    >
      {item}
    </button>
  ))}
</ul>


        <ul className="space-y-2">
          {/* Render filtered items */}
          {filteredItems.map((item) => (
            <li
              key={item}
              className={`py-2 px-6 hover:bg-gray-300 toto cursor-pointer ${selectedItem === item ? "bg-gray-300" : ""
                }`}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>


        <ul className="space-y-2">
          <li
            className={`py-2 px-6 hover:bg-gray-300 toto cursor-pointer ${selectedItem === "Home" ? "bg-gray-300" : ""}`}
            onClick={() => handleItemClick("Home")}
          >
            Home
          </li>
          <li
            className={`py-2 px-6 hover:bg-gray-300 toto  cursor-pointer ${selectedItem === "Imigani migufi" ? "bg-gray-300" : ""}`}
            onClick={() => handleItemClick("Imigani migufi")}
          >
            Imigani migufi
          </li>
          <li
            className={`py-2 px-6 hover:bg-gray-300 toto  cursor-pointer ${selectedItem === "Ikenshavugo" ? "bg-gray-300" : ""}`}
            onClick={() => handleItemClick("Ikenshavugo")}
          >
            Ikenshavugo
          </li>
          <li
            className={`py-2 px-6 hover:bg-gray-300 toto  cursor-pointer ${selectedItem === "Incamarenga" ? "bg-gray-300" : ""}`}
            onClick={() => handleItemClick("Incamarenga")}
          >
            Incamarenga
          </li>
          <li
            className={`py-2 px-6 hover:bg-gray-300 toto  cursor-pointer ${selectedItem === "Ibisakuzo" ? "bg-gray-300" : ""}`}
            onClick={() => handleItemClick("Ibisakuzo")}
          >
            Ibisakuzo
          </li>
          <li
            className={`py-2 px-6 hover:bg-gray-300 toto  cursor-pointer ${selectedItem === "Isomero" ? " bg-gray-300" : ""}`}
            onClick={() => handleItemClick("Isomero")}
          >
            Isomero
          </li>
        </ul>
        {/* Rest of the sidebar content */}
        <div className="flex-grow"></div>

        <div className="p-4 mt-44 ml-4">
          <button className="bg-blue-900 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded"
          // onClick={handleLogout}
          >
            Log Out
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="w-3/4 bg-white ml-80 goooo">
        <div className="bg-gray-100 ml-5 py-4 px-6 fixed top-0 w-3/4 z-10">
          <h2 className="text-xl font-semibold">{selectedItem || "Content"}</h2>
        </div>

        <div className="p-6 ">
          {selectedItem === "Home" && (
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                  <Firstpage />
                </div>
              </div>
            </section>
          )}
          {selectedItem === "Imigani migufi" && (
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                  <Imigani />

                </div>
              </div>
            </section>
          )}
          {selectedItem === "Ikenshavugo" && (
            <section className="text-gray-600  body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                  <Ikenshavugo />

                </div>
              </div>
            </section>
          )}
          {selectedItem === "Incamarenga" && (
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                  <Incamarenga />

                </div>
              </div>
            </section>
          )}
          {selectedItem === "Ibisakuzo" && (
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                  <Ibisakuzo />

                </div>
              </div>
            </section>
          )}
          {selectedItem === "Isomero" && (
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                  <Isomero />

                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
