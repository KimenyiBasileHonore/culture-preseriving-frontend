import React from "react";
import { Link } from "react-router-dom";
import nyambo from "../../imgs/nyambo.jpeg";
import "../Home.css";



export default function About() {
    return (
        <div class="flex mt-2 px-10 book">
            
            <img src={nyambo} alt="" class="nyambo mt-40 mb-10 " />
            <div class="flex-center tim ml-98 gap-2 colo mt-40  mb-10">
                <h1 class="font-bold text-xl ">About Us</h1>
                <p class="text-lg font-normal mt-5 ">
                    The Rwanda Cultural Preserving (RCP) is a platform dedicated to preserving 
                    and promoting the cultural richness of Rwanda . Our primary mission is
                    to safeguard the Ikinyarwanda language, preserve and promote
                    Rwandan culture and its values, protect Rwandan heritage,
                    preserve national archives, and promote a reading culture
                    among Rwandans. Through our dedicated efforts, we aim
                    to ensure the rich cultural heritage of Rwanda is cherished,
                    celebrated, and passed on to future generations. By nurturing
                    and preserving our language, culture, and history, we strive to
                    strengthen the cultural identity and collective pride of the Rwandan people



                </p>
                <Link to="about">
                    <button class="text-center border-2 w-32 h-10 rounded-lg text-sm mt-10 font-semibold btn">More</button>
                </Link>

            </div>

        </div>
    );
}