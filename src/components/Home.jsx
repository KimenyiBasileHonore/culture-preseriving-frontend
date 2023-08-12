import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
    return (
        <div className="bg-image  museu ">
            <div className="flex ml-32">
                <div className="mar mb-15 bg-white center-div">
                    <h1 className="text-5x3 font-bold w-full text-brown" style={{ fontSize: '40px', textAlign: 'center' }}>
                        RCP
                    </h1>
                    <h2 className="font-bold text-brown" style={{ fontSize: "30px", textAlign: 'center' }}>
                        Rwanda Culture Preserving
                    </h2>
                    <p className="mt-2 text-brown font-normal" style={{ fontSize: '24px', textAlign: 'center' }}>
                        “Umuco dusangiye uraturanga, <br />
                        Ururimi rwacu rukaduhuza”
                    </p>
                    <Link to="/Dashboard">
                        <button className="text-center border-4 w-28 h-19.9 bg-brown text-brown mt-6 font-bold rounded-lg hover:bg-cyan-950 hover:text-white" style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block' }}>
                            Signup
                        </button>
                    </Link>
                    <Link to="/Admdash">
                        <button className="text-center border-4 w-28 h-19.9 bg-brown text-brown mt-6 font-bold rounded-lg hover:bg-cyan-950 hover:text-white" style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block' }}>
                        Admindashboard
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
} 