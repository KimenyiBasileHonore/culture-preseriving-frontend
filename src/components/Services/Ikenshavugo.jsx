import React, { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import "./Ikenshavugo.css";
import Ikenshkumwami from "./Ikenshkumwami";
import Ikenshabwinshi from "./Ikenshabwinshi";
import Ikenshavugokungoma from "./Ikenshavugokungoma";
import Ikenshavugokunka from "./Ikenshavugokunka";
import Ikenshicyansi from "./Ikenshicyansi";
import Ikeshantunibintu from "./Ikeshantunibintu";
import axios from "axios";
import './Imigani.css';


function Ikenshavugo() {
    const [isOpen, setIsOpen] = useState(false);
    const [flips, setFlips] = useState([false, false, false, false]);
    const [currentFlipIndex, setCurrentFlipIndex] = useState(-1);
    const [ikenshavugoList, setIkenshavugoList] = useState([]);
    const [viewCount, setViewCount] = useState(0);

    const toggleCollapsible = () => {
        setIsOpen(!isOpen);
    };

    const handleFlip = (index) => {
        const newFlips = [...flips];
        newFlips[index] = !newFlips[index];

        if (currentFlipIndex !== -1 && currentFlipIndex !== index) {
            newFlips[currentFlipIndex] = false;
        }

        setFlips(newFlips);
        setCurrentFlipIndex(index);
    };

    useEffect(() => {
        const fetchIkenshavugoData = async () => {
            try {
                const response = await axios.get("/api/ikenshavugo"); // Use axios to fetch data
                setIkenshavugoList(response.data); // Use response.data
            } catch (error) {
                console.error("Error fetching Ikenshavugo data:", error);
            }
        };

        
        fetchIkenshavugoData();

        const storedViewCount = localStorage.getItem('ikenshavugoViewCount'); // Use a unique key for Ikenshamvugo
        const updatedViewCount = storedViewCount ? parseInt(storedViewCount) + 1 : 1;
        setViewCount(updatedViewCount);
        localStorage.setItem('ikenshavugoViewCount', updatedViewCount.toString()); // Use the same unique key here
    }, []);
    return (
        <div>
            <div className="mt-16">
                {/* ... rest of your content ... */}
                <h1 class="section-heading mt-24">IKESHAMVUGO</h1>
                 <p class="leading-relaxed mb-3">Ikeshamvugo ni ubuhanga bukoreshwa mu kuvuga no guhanga mu kinyarwanda.
                     Iyo akaba ari imvugo inoze, yuje ikinyabupfura, ifite inganzo kandi ivugitse ku buryo bunoze. Ikeshamvugo
                     ahanini, ni imvugo ikoreshwa mu guha agaciro umuntu uyu n’uyu cyangwa ikintu iki n’iki bitewe n’akamaro
                     gifite mu muco w’Abanyarwanda, bityo hakirindwa gukoreshwa izina ryacyo mu buryo bukocamye..</p><br />
                 <p class="leading-relaxed mb-3">Mu Ikeshamvugo niho hakoreshwa ijambo « Ntibavuga ,Bavuga  ».Umuntu akaba yabasha gutandukanya imvugo
                     ikoreshwa k’umuntu mukuru ,umwana ,umuyobozi, inyamaswa n’ibindi Muri zo mvugo zose twavuze haruguru
                     ntan’imwe idakoreshwa,umwihariko wazo ,nuko zizamo amarangamutima y’ahantu uvuga ari ,uwo agiye kuvuga
                     cyangwa icyo agiye kuvuga.Dore zimwe mu ngero z’ikeshamvugo rikunzwe gukoreshwa mu mvugo Nyarwanda</p>

               
                <div className={`collapsible ${isOpen ? "open" : ""}`}>
                    <div className="collapsible-header" onClick={toggleCollapsible}>
                        {/* ... rest of the header content ... */}
                    </div>
                    <hr />
                    {isOpen && (
                        <div className=" marg flex flex-wrap -m-4 collapsible-content">
                            {ikenshavugoList.map((ikenshavugo, index) => (
                                <ReactCardFlip
                                    key={index}
                                    className="p-4 lg:w-1/4"
                                    isFlipped={flips[index]}
                                    flipDirection="vertical"
                                >
                                    <div className="card front-card">
                                        <h1 className="front">{ikenshavugo.title}</h1>
                                        <br />
                                        <br />
                                        {ikenshavugo.content}
                                        <br />
                                        <button
                                            className="flip-button"
                                            onClick={() => handleFlip(index)}
                                        >
                                            {ikenshavugo.author}
                                        </button>
                                    </div>
                                    <div className="card back-card">
                                        <h1 className="backoo">{ikenshavugo.author}</h1>
                                        <br />
                                        <br />
                                        {/* Add other details to display on the back of the card */}
                                        <button
                                            className="flip-button"
                                            onClick={() => handleFlip(index)}
                                        >
                                            {ikenshavugo.title}
                                        </button>
                                    </div>
                                </ReactCardFlip>
                            ))}
                        </div>
                    )}
                </div>
                {/* ... rest of your content ... */}

                <Ikenshkumwami />
                <br /><br />
                <Ikenshavugokungoma />
                <br /><br />
                <Ikenshavugokunka />
                <br /><br />
                <Ikenshicyansi />
                <br /><br />
                <Ikenshabwinshi />
                <br /><br />
                <Ikeshantunibintu />
                <br /><br />
            </div>
        </div>
    );
}

export default Ikenshavugo;


// import React, { useState } from "react";
// import ReactCardFlip from "react-card-flip";
// import "./Ikenshavugo.css";
// import Ikenshkumwami from "./Ikenshkumwami";
// import Ikenshabwinshi from "./Ikenshabwinshi";
// import Ikenshavugokungoma from "./Ikenshavugokungoma";
// import Ikenshavugokunka from "./Ikenshavugokunka";
// import Ikenshicyansi from "./Ikenshicyansi";
// import Ikeshantunibintu from "./Ikeshantunibintu";

// function Ikenshavugo() {

//     const [isOpen, setIsOpen] = useState(false);

//     const toggleCollapsible = () => {
//         setIsOpen(!isOpen);
//     };

//     const [flips, setFlips] = useState([false, false, false, false]);
//     const [currentFlipIndex, setCurrentFlipIndex] = useState(-1);

//     const handleFlip = (index) => {
//         const newFlips = [...flips];
//         newFlips[index] = !newFlips[index];

//         if (currentFlipIndex !== -1 && currentFlipIndex !== index) {
//             newFlips[currentFlipIndex] = false;
//         }

//         setFlips(newFlips);
//         setCurrentFlipIndex(index);
//     };

//     return (
//         <div>
//             <div className="mt-16">
//                 <h1 class="title-font sm:text-2xl section-heading text-xl font-medium text-gray-900 mb-3">IKESHAMVUGO</h1>
//                 <p class="leading-relaxed mb-3">Ikeshamvugo ni ubuhanga bukoreshwa mu kuvuga no guhanga mu kinyarwanda.
//                     Iyo akaba ari imvugo inoze, yuje ikinyabupfura, ifite inganzo kandi ivugitse ku buryo bunoze. Ikeshamvugo
//                     ahanini, ni imvugo ikoreshwa mu guha agaciro umuntu uyu n’uyu cyangwa ikintu iki n’iki bitewe n’akamaro
//                     gifite mu muco w’Abanyarwanda, bityo hakirindwa gukoreshwa izina ryacyo mu buryo bukocamye..</p><br />
//                 <p class="leading-relaxed mb-3">Mu Ikeshamvugo niho hakoreshwa ijambo « Ntibavuga ,Bavuga  ».Umuntu akaba yabasha gutandukanya imvugo
//                     ikoreshwa k’umuntu mukuru ,umwana ,umuyobozi, inyamaswa n’ibindi Muri zo mvugo zose twavuze haruguru
//                     ntan’imwe idakoreshwa,umwihariko wazo ,nuko zizamo amarangamutima y’ahantu uvuga ari ,uwo agiye kuvuga
//                     cyangwa icyo agiye kuvuga.Dore zimwe mu ngero z’ikeshamvugo rikunzwe gukoreshwa mu mvugo Nyarwanda</p>

//                 <div className={`collapsible ${isOpen ? 'open' : ''}`}>
//                     <div className="collapsible-header" onClick={toggleCollapsible}>
//                         <div className="header-content ">
//                             <h2 class="title-font sm:text-2xl  text-xl font-medium text-gray-900 mb-3">Ku bijyanye n’amata</h2>
//                             <span className={`arrow ${isOpen ? 'up' : 'down'}`}></span>
//                         </div>
//                     </div>
//                     <hr />
//                     {isOpen && (
//                         <div className=" marg flex flex-wrap -m-4 collapsible-content">
//                             <ReactCardFlip
//                                 className="p-4 lg:w-1/4"
//                                 isFlipped={flips[0]}
//                                 flipDirection="vertical">

//                                 <div className="card front-card">
//                                     <h1 className="front">Ntibavuga</h1>
//                                     <br /><br />
//                                     Igicuma bashyiramo amata
//                                     <br />
//                                     <button className="flip-button" onClick={() => handleFlip(0)}>
//                                         Bavuga
//                                     </button>
//                                 </div>
//                                 <div className="card back-card">
//                                     <h1 className="backoo">Bavuga</h1>
//                                     <br /><br />
//                                     Icyansi
//                                     <br />
//                                     <button className="flip-button" onClick={() => handleFlip(0)}>
//                                         Ntibavuga
//                                     </button>
//                                 </div>
//                             </ReactCardFlip>
//                             <ReactCardFlip
//                                 className="p-4 lg:w-1/4"
//                                 isFlipped={flips[1]}
//                                 flipDirection="vertical">

//                                 <div className="card front-card">
//                                     <h1 className="front">Ntibavuga</h1>
//                                     <br /><br />
//                                     Aho batereka amata
//                                     <br />
//                                     <button className="flip-button" onClick={() => handleFlip(1)}>
//                                         Bavuga
//                                     </button>
//                                 </div>
//                                 <div className="card back-card">
//                                     <h1 className="backoo">Bavuga</h1>
//                                     <br /><br />
//                                     Uruhimbi
//                                     <br />
//                                     <button className="flip-button" onClick={() => handleFlip(1)}>
//                                         Ntibavuga
//                                     </button>
//                                 </div>
//                             </ReactCardFlip>
//                             <ReactCardFlip
//                                 className="p-4 lg:w-1/4"
//                                 isFlipped={flips[2]}
//                                 flipDirection="vertical">

//                                 <div className="card front-card">
//                                     <h1 className="front">Ntibavuga</h1>
//                                     <br /><br />
//                                     Kuyasuka mu gisabo
//                                     <br />
//                                     <button className="flip-button" onClick={() => handleFlip(2)}>
//                                         Bavuga
//                                     </button>
//                                 </div>
//                                 <div className="card back-card">
//                                     <h1 className="backoo">Bavuga</h1>
//                                     <br /><br />
//                                     Kuyabuganiza
//                                     <br />
//                                     <button className="flip-button" onClick={() => handleFlip(2)}>
//                                         Ntibavuga
//                                     </button>
//                                 </div>
//                             </ReactCardFlip>
//                             <ReactCardFlip
//                                 className="p-4 lg:w-1/4"
//                                 isFlipped={flips[3]}
//                                 flipDirection="vertical">

//                                 <div className="card front-card">
//                                     <h1 className="front">Ntibavuga</h1>
//                                     <br /><br />
//                                     Kuyavanamo amavuta
//                                     <br />
//                                     <button className="flip-button" onClick={() => handleFlip(3)}>
//                                         Bavuga
//                                     </button>
//                                 </div>
//                                 <div className="card back-card">
//                                     <h1 className="backoo">Bavuga</h1>
//                                     <br /><br />
//                                     Gusobanura
//                                     <br />
//                                     <button className="flip-button" onClick={() => handleFlip(3)}>
//                                         Ntibavuga
//                                     </button>
//                                 </div>
//                             </ReactCardFlip>
//                             <ReactCardFlip
//                                 className="p-4 lg:w-1/4"
//                                 isFlipped={flips[4]}
//                                 flipDirection="vertical">

//                                 <div className="card front-card">
//                                     <h1 className="front">Ntibavuga</h1>
//                                     <br /><br />
//                                     Kubika icyansi, igisabo
//                                     <br />
//                                     <button className="flip-button" onClick={() => handleFlip(4)}>
//                                         Bavuga
//                                     </button>
//                                 </div>
//                                 <div className="card back-card">
//                                     <h1 className="backoo">Bavuga</h1>
//                                     <br /><br />
//                                     Kukiranga
//                                     <br />
//                                     <button className="flip-button" onClick={() => handleFlip(4)}>
//                                         Ntibavuga
//                                     </button>
//                                 </div>
//                             </ReactCardFlip>
//                             <ReactCardFlip
//                                 className="p-4 lg:w-1/4"
//                                 isFlipped={flips[5]}
//                                 flipDirection="vertical">

//                                 <div className="card front-card">
//                                     <h1 className="front">Ntibavuga</h1>
//                                     <br /><br />
//                                     Kurangiza koza icyansi
//                                     <br />
//                                     <button className="flip-button" onClick={() => handleFlip(5)}>
//                                         Bavuga
//                                     </button>
//                                 </div>
//                                 <div className="card back-card">
//                                     <h1 className="backoo">Bavuga</h1>
//                                     <br /><br />
//                                     Guhumuza
//                                     <br />
//                                     <button className="flip-button" onClick={() => handleFlip(5)}>
//                                         Ntibavuga
//                                     </button>
//                                 </div>
//                             </ReactCardFlip>
//                             <ReactCardFlip
//                                 className="p-4 lg:w-1/4"
//                                 isFlipped={flips[6]}
//                                 flipDirection="vertical">

//                                 <div className="card front-card">
//                                     <h1 className="front">Ntibavuga</h1>
//                                     <br /><br />
//                                     Kurangiza gukama
//                                     <br />
//                                     <button className="flip-button" onClick={() => handleFlip(6)}>
//                                         Bavuga
//                                     </button>
//                                 </div>
//                                 <div className="card back-card">
//                                     <h1 className="backoo">Bavuga</h1>
//                                     <br /><br />
//                                     Guhumuza
//                                     <br />
//                                     <button className="flip-button" onClick={() => handleFlip(6)}>
//                                         Ntibavuga
//                                     </button>
//                                 </div>
//                             </ReactCardFlip>
//                             <ReactCardFlip
//                                 className="p-4 lg:w-1/4"
//                                 isFlipped={flips[7]}
//                                 flipDirection="vertical">

//                                 <div className="card front-card">
//                                     <h1 className="front">Ntibavuga</h1>
//                                     <br /><br />
//                                     Kumena amata ubishatse
//                                     <br />
//                                     <button className="flip-button" onClick={() => handleFlip(7)}>
//                                         Bavuga
//                                     </button>
//                                 </div>
//                                 <div className="card back-card">
//                                     <h1 className="backoo">Bavuga</h1>
//                                     <br /><br />
//                                     Kuyabyarira
//                                     <br />
//                                     <button className="flip-button" onClick={() => handleFlip(7)}>
//                                         Ntibavuga
//                                     </button>
//                                 </div>
//                             </ReactCardFlip>
//                             <ReactCardFlip
//                                 className="p-4 lg:w-1/4"
//                                 isFlipped={flips[8]}
//                                 flipDirection="vertical">

//                                 <div className="card front-card">
//                                     <h1 className="front">Ntibavuga</h1>
//                                     <br /><br />
//                                     Kumena amata utabishatse
//                                     <br />
//                                     <button className="flip-button" onClick={() => handleFlip(8)}>
//                                         Bavuga
//                                     </button>
//                                 </div>
//                                 <div className="card back-card">
//                                     <h1 className="backoo">Bavuga</h1>
//                                     <br /><br />
//                                     Kuyabogora
//                                     <br />
//                                     <button className="flip-button" onClick={() => handleFlip(8)}>
//                                         Ntibavuga
//                                     </button>
//                                 </div>
//                             </ReactCardFlip>
//                             <ReactCardFlip
//                                 className="p-4 lg:w-1/4"
//                                 isFlipped={flips[9]}
//                                 flipDirection="vertical">

//                                 <div className="card front-card">
//                                     <h1 className="front">Ntibavuga</h1>
//                                     <br /><br />
//                                     Kumena Igisabo
//                                     <br />
//                                     <button className="flip-button" onClick={() => handleFlip(9)}>
//                                         Bavuga
//                                     </button>
//                                 </div>
//                                 <div className="card back-card">
//                                     <h1 className="backoo">Bavuga</h1>
//                                     <br /><br />
//                                     Kukibyarira
//                                     <br />
//                                     <button className="flip-button" onClick={() => handleFlip(9)}>
//                                         Ntibavuga
//                                     </button>
//                                 </div>
//                             </ReactCardFlip>
//                             <ReactCardFlip
//                                 className="p-4 lg:w-1/4"
//                                 isFlipped={flips[10]}
//                                 flipDirection="vertical">

//                                 <div className="card front-card">
//                                     <h1 className="front">Ntibavuga</h1>
//                                     <br /><br />
//                                     Kumara amata mu kintu
//                                     <br />
//                                     <button className="flip-button" onClick={() => handleFlip(10)}>
//                                         Bavuga
//                                     </button>
//                                 </div>
//                                 <div className="card back-card">
//                                     <h1 className="backoo">Bavuga</h1>
//                                     <br /><br />
//                                     Kuyagwizamo
//                                     <br />
//                                     <button className="flip-button" onClick={() => handleFlip(10)}>
//                                         Ntibavuga
//                                     </button>
//                                 </div>
//                             </ReactCardFlip>
//                             <ReactCardFlip
//                                 className="p-4 lg:w-1/4"
//                                 isFlipped={flips[11]}
//                                 flipDirection="vertical">

//                                 <div className="card front-card">
//                                     <h1 className="front">Ntibavuga</h1>
//                                     <br /><br />
//                                     Kurekeraho gukamwa
//                                     <br />
//                                     <button className="flip-button" onClick={() => handleFlip(11)}>
//                                         Bavuga
//                                     </button>
//                                 </div>
//                                 <div className="card back-card">
//                                     <h1 className="backoo">Bavuga</h1>
//                                     <br /><br />
//                                     Guteka
//                                     <br />
//                                     <button className="flip-button" onClick={() => handleFlip(11)}>
//                                         Ntibavuga
//                                     </button>
//                                 </div>
//                             </ReactCardFlip>
//                             <ReactCardFlip
//                                 className="p-4 lg:w-1/4"
//                                 isFlipped={flips[12]}
//                                 flipDirection="vertical">

//                                 <div className="card front-card">
//                                     <h1 className="front">Ntibavuga</h1>
//                                     <br /><br />
//                                     Uduta
//                                     <br />
//                                     <button className="flip-button" onClick={() => handleFlip(12)}>
//                                         Bavuga
//                                     </button>
//                                 </div>
//                                 <div className="card back-card">
//                                     <h1 className="backoo">Bavuga</h1>
//                                     <br /><br />
//                                     Amata
//                                     <br />
//                                     <button className="flip-button" onClick={() => handleFlip(12)}>
//                                         Ntibavuga
//                                     </button>
//                                 </div>
//                             </ReactCardFlip>
//                             <ReactCardFlip
//                                 className="p-4 lg:w-1/4"
//                                 isFlipped={flips[13]}
//                                 flipDirection="vertical">

//                                 <div className="card front-card">
//                                     <h1 className="front">Ntibavuga</h1>
//                                     <br /><br />
//                                     Amata y’inka ikibyara
//                                     <br />
//                                     <button className="flip-button" onClick={() => handleFlip(13)}>
//                                         Bavuga
//                                     </button>
//                                 </div>
//                                 <div className="card back-card">
//                                     <h1 className="backoo">Bavuga</h1>
//                                     <br /><br />
//                                     Umuhondo
//                                     <br />
//                                     <button className="flip-button" onClick={() => handleFlip(13)}>
//                                         Ntibavuga
//                                     </button>
//                                 </div>
//                             </ReactCardFlip>
//                             <ReactCardFlip
//                                 className="p-4 lg:w-1/4"
//                                 isFlipped={flips[14]}
//                                 flipDirection="vertical">

//                                 <div className="card front-card">
//                                     <h1 className="front">Ntibavuga</h1>
//                                     <br /><br />
//                                     Amata y’inka yenda guteka
//                                     <br />
//                                     <button className="flip-button" onClick={() => handleFlip(14)}>
//                                         Bavuga
//                                     </button>
//                                 </div>
//                                 <div className="card back-card">
//                                     <h1 className="backoo">Bavuga</h1>
//                                     <br /><br />
//                                     Amagonera/Amanga/Amasunga
//                                     <br />
//                                     <button className="flip-button" onClick={() => handleFlip(14)}>
//                                         Ntibavuga
//                                     </button>
//                                 </div>
//                             </ReactCardFlip>
//                             <ReactCardFlip
//                                 className="p-4 lg:w-1/4"
//                                 isFlipped={flips[15]}
//                                 flipDirection="vertical">

//                                 <div className="card front-card">
//                                     <h1 className="front">Ntibavuga</h1>
//                                     <br /><br />
//                                     Amata y’inka Ihaka
//                                     <br />
//                                     <button className="flip-button" onClick={() => handleFlip(15)}>
//                                         Bavuga
//                                     </button>
//                                 </div>
//                                 <div className="card back-card">
//                                     <h1 className="backoo">Bavuga</h1>
//                                     <br /><br />
//                                     Amasitu
//                                     <br />
//                                     <button className="flip-button" onClick={() => handleFlip(15)}>
//                                         Ntibavuga
//                                     </button>
//                                 </div>
//                             </ReactCardFlip>
//                             <ReactCardFlip
//                                 className="p-4 lg:w-1/4"
//                                 isFlipped={flips[16]}
//                                 flipDirection="vertical">

//                                 <div className="card front-card">
//                                     <h1 className="front">Ntibavuga</h1>
//                                     <br /><br />
//                                     Amata inyana yanze konka
//                                     <br />
//                                     <button className="flip-button" onClick={() => handleFlip(16)}>
//                                         Bavuga
//                                     </button>
//                                 </div>
//                                 <div className="card back-card">
//                                     <h1 className="backoo">Bavuga</h1>
//                                     <br /><br />
//                                     Amakaba
//                                     <br />
//                                     <button className="flip-button" onClick={() => handleFlip(16)}>
//                                         Ntibavuga
//                                     </button>
//                                 </div>
//                             </ReactCardFlip>
//                             <ReactCardFlip
//                                 className="p-4 lg:w-1/4"
//                                 isFlipped={flips[17]}
//                                 flipDirection="vertical">

//                                 <div className="card front-card">
//                                     <h1 className="front">Ntibavuga</h1>
//                                     <br /><br />
//                                     Ayaraye ataravura
//                                     <br />
//                                     <button className="flip-button" onClick={() => handleFlip(17)}>
//                                         Bavuga
//                                     </button>
//                                 </div>
//                                 <div className="card back-card">
//                                     <h1 className="backoo">Bavuga</h1>
//                                     <br /><br />
//                                     Umubanji
//                                     <br />
//                                     <button className="flip-button" onClick={() => handleFlip(17)}>
//                                         Ntibavuga
//                                     </button>
//                                 </div>
//                             </ReactCardFlip>
//                             <ReactCardFlip
//                                 className="p-4 lg:w-1/4"
//                                 isFlipped={flips[18]}
//                                 flipDirection="vertical">

//                                 <div className="card front-card">
//                                     <h1 className="front">Ntibavuga</h1>
//                                     <br /><br />
//                                     Amata bavanze n’amazi
//                                     <br />
//                                     <button className="flip-button" onClick={() => handleFlip(18)}>
//                                         Bavuga
//                                     </button>
//                                 </div>
//                                 <div className="card back-card">
//                                     <h1 className="backoo">Bavuga</h1>
//                                     <br /><br />
//                                     Umwerera
//                                     <br />
//                                     <button className="flip-button" onClick={() => handleFlip(18)}>
//                                         Ntibavuga
//                                     </button>
//                                 </div>
//                             </ReactCardFlip>
//                             <ReactCardFlip
//                                 className="p-4 lg:w-1/4"
//                                 isFlipped={flips[19]}
//                                 flipDirection="vertical">

//                                 <div className="card front-card">
//                                     <h1 className="front">Ntibavuga</h1>
//                                     <br /><br />
//                                     Amata yiriwe
//                                     <br />
//                                     <button className="flip-button" onClick={() => handleFlip(19)}>
//                                         Bavuga
//                                     </button>
//                                 </div>
//                                 <div className="card back-card">
//                                     <h1 className="backoo">Bavuga</h1>
//                                     <br /><br />
//                                     Amirire
//                                     <br />
//                                     <button className="flip-button" onClick={() => handleFlip(19)}>
//                                         Ntibavuga
//                                     </button>
//                                 </div>
//                             </ReactCardFlip>
//                             <ReactCardFlip
//                                 className="p-4 lg:w-1/4"
//                                 isFlipped={flips[20]}
//                                 flipDirection="vertical">

//                                 <div className="card front-card">
//                                     <h1 className="front">Ntibavuga</h1>
//                                     <br /><br />
//                                     Amaze kuvura
//                                     <br />
//                                     <button className="flip-button" onClick={() => handleFlip(20)}>
//                                         Bavuga
//                                     </button>
//                                 </div>
//                                 <div className="card back-card">
//                                     <h1 className="backoo">Bavuga</h1>
//                                     <br /><br />
//                                     Ikivuguto
//                                     <br />
//                                     <button className="flip-button" onClick={() => handleFlip(20)}>
//                                         Ntibavuga
//                                     </button>
//                                 </div>
//                             </ReactCardFlip>
//                             <ReactCardFlip
//                                 className="p-4 lg:w-1/4"
//                                 isFlipped={flips[21]}
//                                 flipDirection="vertical">

//                                 <div className="card front-card">
//                                     <h1 className="front">Ntibavuga</h1>
//                                     <br /><br />
//                                     Amata y’abashumba
//                                     <br />
//                                     <button className="flip-button" onClick={() => handleFlip(21)}>
//                                         Bavuga
//                                     </button>
//                                 </div>
//                                 <div className="card back-card">
//                                     <h1 className="backoo">Bavuga</h1>
//                                     <br /><br />
//                                     Imyezo
//                                     <br />
//                                     <button className="flip-button" onClick={() => handleFlip(21)}>
//                                         Ntibavuga
//                                     </button>
//                                 </div>
//                             </ReactCardFlip>
//                             <ReactCardFlip
//                                 className="p-4 lg:w-1/4"
//                                 isFlipped={flips[22]}
//                                 flipDirection="vertical">

//                                 <div className="card front-card">
//                                     <h1 className="front">Ntibavuga</h1>
//                                     <br /><br />
//                                     Agati bavurugisha amata
//                                     <br />
//                                     <button className="flip-button" onClick={() => handleFlip(22)}>
//                                         Bavuga
//                                     </button>
//                                 </div>
//                                 <div className="card back-card">
//                                     <h1 className="backoo">Bavuga</h1>
//                                     <br /><br />
//                                     Umutozo
//                                     <br />
//                                     <button className="flip-button" onClick={() => handleFlip(22)}>
//                                         Ntibavuga
//                                     </button>
//                                 </div>
//                             </ReactCardFlip>
//                             <ReactCardFlip
//                                 className="p-4 lg:w-1/4"
//                                 isFlipped={flips[23]}
//                                 flipDirection="vertical">

//                                 <div className="card front-card">
//                                     <h1 className="front">Ntibavuga</h1>
//                                     <br /><br />
//                                     Gutunganya amata y’ikivuguto
//                                     <br />
//                                     <button className="flip-button" onClick={() => handleFlip(23)}>
//                                         Bavuga
//                                     </button>
//                                 </div>
//                                 <div className="card back-card">
//                                     <h1 className="backoo">Bavuga</h1>
//                                     <br /><br />
//                                     Kuyavuruga
//                                     <br />
//                                     <button className="flip-button" onClick={() => handleFlip(23)}>
//                                         Ntibavuga
//                                     </button>
//                                 </div>
//                             </ReactCardFlip>
//                             <ReactCardFlip
//                                 className="p-4 lg:w-1/4"
//                                 isFlipped={flips[24]}
//                                 flipDirection="vertical">

//                                 <div className="card front-card">
//                                     <h1 className="front">Ntibavuga</h1>
//                                     <br /><br />
//                                     Umuheha banywesha amata
//                                     <br />
//                                     <button className="flip-button" onClick={() => handleFlip(24)}>
//                                         Bavuga
//                                     </button>
//                                 </div>
//                                 <div className="card back-card">
//                                     <h1 className="backoo">Bavuga</h1>
//                                     <br /><br />
//                                     Umuceri
//                                     <br />
//                                     <button className="flip-button" onClick={() => handleFlip(24)}>
//                                         Ntibavuga
//                                     </button>
//                                 </div>
//                             </ReactCardFlip>
//                             <ReactCardFlip
//                                 className="p-4 lg:w-1/4"
//                                 isFlipped={flips[25]}
//                                 flipDirection="vertical">

//                                 <div className="card front-card">
//                                     <h1 className="front">Ntibavuga</h1>
//                                     <br /><br />
//                                     Ibyo banywesha amata
//                                     <br />
//                                     <button className="flip-button" onClick={() => handleFlip(25)}>
//                                         Bavuga
//                                     </button>
//                                 </div>
//                                 <div className="card back-card">
//                                     <h1 className="backoo">Bavuga</h1>
//                                     <br /><br />
//                                     Imikerenke,injome,imimuna
//                                     <br />
//                                     <button className="flip-button" onClick={() => handleFlip(25)}>
//                                         Ntibavuga
//                                     </button>
//                                 </div>
//                             </ReactCardFlip>

//                         </div>
//                     )}
//                 </div>
//                 <Ikenshkumwami />
//                 <br/><br/>
//                 <Ikenshavugokungoma />
//                 <br/><br/>
//                 <Ikenshavugokunka />
//                 <br/><br/>
//                 <Ikenshicyansi />
//                 <br/><br/>
//                 <Ikenshabwinshi />
//                 <br/><br/>
//                 <Ikeshantunibintu />
//                 <br/><br/>
//             </div>
//         </div>
//     );
// }

// export default Ikenshavugo;
