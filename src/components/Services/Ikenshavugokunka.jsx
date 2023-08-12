import React, { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import "./Ikenshavugo.css"; // Import the CSS file

function Ikenshkumwami() {
  const [isOpen, setIsOpen] = useState(false);
  const [flips, setFlips] = useState([]);
  const [currentFlipIndex, setCurrentFlipIndex] = useState(-1);
  const [umwamiList, setUmwamiList] = useState([]);

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

  const fetchUmwamiList = async () => {
    try {
      const response = await fetch("http://localhost:4050/api/kunka/kunka"); // Use the correct backend API URL here
      const data = await response.json();
      setUmwamiList(data);
      setFlips(Array(data.length).fill(false));
    } catch (error) {
      console.error("Error fetching umwami list:", error);
    }
  };

  useEffect(() => {
    fetchUmwamiList();
  }, []);

  return (
    <div className="">
      <div className={`collapsible ${isOpen ? 'open' : ''}`}>
        <div className="collapsible-header" onClick={toggleCollapsible}>
          <div className="header-content">
            <h1 class="title-font sm:text-2xl   text-xl font-medium text-gray-900 mb-3">Ku bijyanye n’inka</h1>
            <span className={`arrow ${isOpen ? 'up' : 'down'}`}></span>
          </div>
        </div>
        <hr /><br /> 
        {isOpen && (
          <div className="marg flex flex-wrap collapsible-content -m-4">
            {umwamiList.map((item, index) => (
              <ReactCardFlip
                key={index}
                className="p-4 lg:w-1/4"
                isFlipped={flips[index]}
                flipDirection="vertical"
              >
                <div className="card front-card">
                  <h1 className="front">{item.title}</h1>
                  <br /><br />
                  {item.summary}
                  <br />
                  <button className="flip-button" onClick={() => handleFlip(index)}>
                    Bavuga
                  </button>
                </div>
                <div className="card back-card">
                  <h1 className="backoo">Bavuga</h1>
                  <br /><br />
                  {item.details}
                  <br />
                  <button className="flip-button" onClick={() => handleFlip(index)}>
                    Ntibavuga
                  </button>
                </div>
              </ReactCardFlip>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Ikenshkumwami;






// import React, { useState } from "react";
// import ReactCardFlip from "react-card-flip";
// import "./Ikenshavugo.css"; // Import the CSS file

// function Ikenshavugokunka() {

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
           
//             <div className={`collapsible ${isOpen ? 'open' : ''}`}>
//                 <div className="collapsible-header" onClick={toggleCollapsible}>
//                 <div className="header-content">
//                     <h1 class="title-font sm:text-2xl  text-xl font-medium text-gray-900 mb-3">Ku bijyanye n’inka</h1>
//                     <span className={`arrow ${isOpen ? 'up' : 'down'}`}></span>
//                 </div>
//                 </div>

//                 <hr /><br /> 
//                 {isOpen && (
//                     <div className=" marg flex flex-wrap -m-4 collapsible-content">
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[26]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Gusubiza inyuma
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(26)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Gukumira
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(26)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[27]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Kurangiza gukama
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(27)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Guhumuza
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(27)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[28]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Kurangiza gushitura
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(28)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Guhaza
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(28)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[29]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Kurorera gukama
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(29)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Guteka
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(29)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[30]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Gukamana ingoga
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(30)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Gukama kera
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(30)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[31]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Gukomereka
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(31)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Gusarika
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(31)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[32]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Kuzijyana kuziragira
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(32)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Kuzahura
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(32)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[33]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Gutoroka kw’inka
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(33)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Kumena
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(33)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[34]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Kurya kw’inka
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(34)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Kurisha
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(34)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[35]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Aho inka zirishiriza
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(35)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Urwuri
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(35)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[36]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Kwahura kure
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(36)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Guturuka kure
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(36)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[37]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Kuzigarura mu rugo
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(37)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Kuzicyura
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(37)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[38]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Guca umurizo
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(38)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Gukemura umurizo
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(38)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[39]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Gukurura babyaza
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(39)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Kuvutira
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(39)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[40]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Kuramburura kwazo
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(40)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Kumurika
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(40)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[41]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Kuzirasa amatezano
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(41)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Kuzikama
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(41)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[42]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Gukamisha yombi
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(42)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Kuvuruganya
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(42)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[43]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Gushyiraho inka iyayo
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(43)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Kwinikiza
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(43)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[44]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Gutwita kw’inka
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(44)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Guhaka
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(44)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[45]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Kujya ku nda kwazo                            <br />
//                                 <button className="flip-button" onClick={() => handleFlip(45)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Kwerera
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(45)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[46]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Kuziyobora,kuzishorera
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(46)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Kuzirongora
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(46)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[47]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Kuzijyana ku kibumbiro
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(47)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Gushora
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(47)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[48]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Kujyana inka ahari ubwatsi
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(48)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Kugisha
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(48)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[49]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Guca ubwatsi bw’inka
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(49)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Kwahira
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(49)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[50]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Inkoni baragiza inka
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(50)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Inshyimbo
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(50)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[51]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Ibyatsi bahanaguza inka
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(51)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Inkuyo
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(51)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[52]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Kwiruka zigusiga
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(52)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Gutara
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(52)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[53]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Guhanagura inka
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(53)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Kuzihonora
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(53)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[54]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Guta umuziha kwazo
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(54)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Gufuma
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(54)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[55]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Kwenda kwima zitararinda
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(55)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Kuba mu bitwarizi
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(55)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[56]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Kuzivomera
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(56)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Kuzidahira
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(56)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[57]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Kuzishyira imfizi
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(57)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Kuzivuna umurizo/ kubangurira
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(57)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[58]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Kubura amazi kwazo
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(58)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Kurumanga
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(58)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[59]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Guca inka ibere
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(59)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Kuryogosha
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(59)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[60]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Kurwara ibisebe ku mabere
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(60)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Gusarika
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(60)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[61]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Ibihamagazo byazo
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(61)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Amazina yazo
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(61)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[62]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Inzu y’inyana
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(62)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Uruhongore
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(62)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[63]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Inzu y’inka
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(63)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Ikiraro
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(63)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[64]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Aho inka zibyagira
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(64)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Mu ngombe
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(64)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[65]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Ibiti bikinga inzu y’inka
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(65)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Ibihindizo
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(65)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[66]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Gukura amase mu kiraro
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(66)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Gukuka
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(66)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[67]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Aho bamena amase y’inka
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(67)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Icukiro
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(67)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[68]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Kubora kw’amase
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(68)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Gushanguka
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(68)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[69]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Inka y’umuriro
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(69)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Inka itangirirwaho korora
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(69)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[70]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Ibyatsi basasira inka
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(70)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Icyarire
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(70)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[71]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Utubere tudakamwa
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(71)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Indorerezi
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(71)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[72]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Umunani ukinze
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(72)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Inka umunani n’inyana zazo
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(72)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[73]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Umunani wumanye
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(73)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Inka umunani zitarabyara
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(73)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>

//                     </div>
//                 )}
//             </div>
//         </div>
//     );

// }

// export default Ikenshavugokunka;

