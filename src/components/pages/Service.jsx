import React from "react";
import { Link, useNavigate } from "react-router-dom";
import imigufi from "../../imgs/imigufi.jpeg"
import imbyino from "../../imgs/imbyino.jpeg"
import isomero from "../../imgs/isomero.jpeg"
import sakwe from "../../imgs/sakwe.jpeg"
import ntibavuga from "../../imgs/ntibavuga.jpeg"
import "./Service.css";

export default function Service() {

    const navigate = useNavigate();
    const handleLearnMoreClick = () => {
        const isLoggedIn = true;
        if (isLoggedIn) {
            navigate("/Dashboard");
        } else {
            navigate("/Login");
        }
    };
    return (

        <div className="text-gray-700 flex body-font bg-image">
            <div className="container px-60 py-8  mx-auto">
                <div className="flex flex-wrap -m-4">
                    <div className="relative p-4 lg:w-1/2">
                        <div className="h-68 bg-white imigani ml-10 pt-6 pb-24 mt-64 rounded-lg overflow-hidden text-center relative z-10">
                            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Imigani migufi</h1>
                            <p className="leading-relaxed text-sm mb-3">Nkuko amateka y’ubuvanganzo nyarwanda abigaragaza ,umugani n’ipfundo ry’amagambo atonze neza,Gacamigani yakagiriyemo ihame ridutoza gukora iki cyangwa se kudakora kiriya.</p>
                            <Link to="#">
                                <button type="submit" onClick={handleLearnMoreClick} className="w-32 text-white  font-medium hover:bg-cyan-950 rounded-full text-sm px-6 py-2.5 text-center bg-blue-900 ">Learn More</button>
                            </Link>
                        </div>
                        <img src={imigufi} alt="" className="wewe h-70 absolute top-0 left-0 z-0" />
                    </div>
                    <div className="relative p-4 lg:w-1/2">
                        <div className="h-68 bg-white imigani ml-10 pt-6 pb-24 mt-64 rounded-lg overflow-hidden text-center relative z-10">
                            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Incamarenga</h1>
                            <p className="leading-relaxed mb-3">Umuntu aca amarenga ashaka kubwira uwo baziranye, icyo adashaka kubwira abamwumva bose. </p>
                            <Link to="#">
                                <button type="submit" onClick={handleLearnMoreClick} className="w-32  text-white font-medium hover:bg-cyan-950 rounded-full text-sm px-6 py-2.5 text-center bg-blue-900 ">Learn More</button>
                            </Link>
                        </div>
                        <img src={ntibavuga} alt="" className="wewe h-80 absolute top-0 left-0 z-0" />
                    </div>
                    <div className="relative p-4 lg:w-1/2">
                        <div className="h-68 bg-white imigani ml-10 pt-6 pb-24 mt-64 rounded-lg overflow-hidden text-center relative z-10">
                            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Ikenshavugo</h1>
                            <p className="leading-relaxed mb-3">Ikeshamvugo ni ubuhanga bukoreshwa mu kuvuga no guhanga mu kinyarwanda. Iyo akaba ari imvugo inoze, yuje ikinyabupfura, ifite inganzo kandi ivugitse ku buryo bunoze.</p>
                            <Link to="#">
                                <button type="submit" onClick={handleLearnMoreClick} className="w-32 text-white font-medium hover:bg-cyan-950 rounded-full text-sm px-6 py-2.5 text-center bg-blue-900">Learn More</button>
                            </Link>
                        </div>
                        <img src={imbyino} alt="" className="wewe h-80 absolute top-0 left-0 z-0" />
                    </div>
                    <div className="relative p-4 lg:w-1/2">
                        <div className="h-68 bg-white imigani ml-10 pt-6 pb-24 mt-64 rounded-lg overflow-hidden text-center relative z-10">
                            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Ibisakuzo</h1>
                            <p className="leading-relaxed mb-3">Ibisakuzo ni umukino wo mu magambo, ibibazo n’ibisubizo bihimbaza abakuru n’abato kandi birimo ubuhanga. Nkuko amateka y’ubuvanganzo nyarwanda abigaragaza, ibisakuzo nabyo byagiraga abahimbyi b’inzobere muri byo, bahoraga bacukumbura ijoro n’umunsi, kugirango barusheho kunoza no gukungahaza uwo mukino.</p>
                            <Link to="#">
                                <button type="submit" onClick={handleLearnMoreClick} className="w-32 text-white font-medium hover:bg-cyan-950 rounded-full text-sm px-6 py-2.5 text-center bg-blue-900">Learn More</button>
                            </Link>
                        </div>
                        <img src={sakwe} alt="" className="wewe h-80 absolute top-0 left-0 z-0" />
                    </div>
                    <div className="relative p-4 lg:w-1/2">
                        <div className="h-68 bg-white imigani ml-10 pt-6 pb-24 mt-64 rounded-lg overflow-hidden text-center relative z-10">
                            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Isomero</h1>
                            <p className="leading-relaxed mb-3">U Rwanda ntirufite amateka maremare ajyanye n'Ubuvanganzo bwanditse, ariko hari ubuvangazo
                                nyemvugo bikomeye bishingiye ku busizi. Mu buryo bwihariye mbere y'Ubukoloni, U Rwanda rwateje
                                imbere Ibitekerezo (ubusizi n'umuziki gakondo), Ubucurabwenge (ibisekuruza by'abami bikunze
                                kuvugwa mu mihango y'iyimikwa), Ibisigo (Ibisigo by'i Bwami).</p>
                            <Link to="#">
                                <button type="submit" onClick={handleLearnMoreClick} className="w-32 text-white font-medium hover:bg-cyan-950 rounded-full text-sm px-6 py-2.5 text-center bg-blue-900">Learn More</button>
                            </Link>
                        </div>
                        <img src={isomero} alt="" className="wewe h-80 absolute top-0 left-0 z-0" />
                    </div>
                </div>
            </div>
        </div>

    );
}

