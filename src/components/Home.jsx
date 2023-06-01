import React from "react";
import umugongo from "../imgs/umugongo.jpeg";
import main from "../imgs/main.jpeg";
import real from "../imgs/real.jpeg";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import umu from "../imgs/umu .png";
import "./home.css";

export default function Home() {
  return (
    <div className="bg-image">
      <Navigation />
      <div>
        <div className="flex ml-32">
          <div className="mt-36 mb-15 w-full">
            <h1 className="text-5x3 font-bold w-full text-brown" style={{ fontSize: '40px' }}>
              UMUCO <br />
              NYARWANDA
            </h1>
            <p className="mt-2 text-brown font-normal" style={{ fontSize: '24px' }}>
              “Umuco dusangiye uraturanga, <br />
              Ururimi rwacu rukaduhuza”
            </p>
            <Link to="More">
              <button className="text-center border-4 w-28 h-19.9 bg-brown text-brown mt-6 font-bold rounded-lg hover:bg-cyan-950 hover:text-white">
                More...
              </button>
            </Link>
          </div>
          <div className="mt-28">
            <img src={main} alt="" className="p-3" style={{ width: '1800px', height: '453px',  marginRight:'2rem' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
