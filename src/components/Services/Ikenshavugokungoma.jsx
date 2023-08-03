import React, { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import "./Ikenshavugo.css";

function Ikenshavugokungoma() {
  const [isOpen, setIsOpen] = useState(false);
  const [flips, setFlips] = useState([false, false, false, false]);
  const [currentFlipIndex, setCurrentFlipIndex] = useState(-1);
  const [kungomaList, setKungomaList] = useState([]);

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

  const fetchKungomaList = async () => {
    try {
      const response = await fetch("/api/kungoma"); // Use the correct backend API URL here
      const data = await response.json();
      setKungomaList(data);
    } catch (error) {
      console.error("Error fetching kungoma list:", error);
    }
  };

  useEffect(() => {
    fetchKungomaList();
  }, []);

  return (
    <div>
      <div className={`collapsible ${isOpen ? 'open' : ''}`}>
        <div className="collapsible-header" onClick={toggleCollapsible}>
          <div className="header-content">
            <h1 class="title-font sm:text-2xl  text-xl font-medium text-gray-900 mb-3">Ku bijyanye n’ingoma</h1>
            <span className={`arrow ${isOpen ? 'up' : 'down'}`}></span>
          </div>
        </div>
        <hr /><br /> 
        {isOpen && (
          <div className="marg flex flex-wrap -m-4 collapsible-content">
            {kungomaList.map((item, index) => (
              <ReactCardFlip
                key={index}
                className="p-4 lg:w-1/4"
                isFlipped={flips[index]}
                flipDirection="vertical"
              >
                <div className="card front-card">
                  <h1 className="front">{item.title}</h1>
                  <br /><br />
                  {item.content}
                  <br />
                  <button className="flip-button" onClick={() => handleFlip(index)}>
                    Bavuga
                  </button>
                </div>
                <div className="card back-card">
                  <h1 className="backoo">Bavuga</h1>
                  <br /><br />
                  Ntibavuga
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

export default Ikenshavugokungoma;












// import React, { useState } from "react";
// import ReactCardFlip from "react-card-flip";
// import "./Ikenshavugo.css"; // Import the CSS file

// function Ikenshavugokungoma() {

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

//     return (<div>

        
//         <div className={`collapsible ${isOpen ? 'open' : ''}`}>
//             <div className="collapsible-header" onClick={toggleCollapsible}>
//             <div className="header-content">
//                 <h1 class="title-font sm:text-2xl  text-xl font-medium text-gray-900 mb-3">Ku bijyanye n’ingoma</h1>
//                 <span className={`arrow ${isOpen ? 'up' : 'down'}`}></span>
//             </div>
//             </div>
//             <hr /><br /> 
//             {isOpen && (
//                 <div className=" marg flex flex-wrap -m-4 collapsible-content">
//                     <ReactCardFlip
//                         className="p-4 lg:w-1/4"
//                         isFlipped={flips[74]}
//                         flipDirection="vertical">

//                         <div className="card front-card">
//                             <h1 className="front">Ntibavuga</h1>
//                             <br /><br />
//                             Ingoma zigize umukino
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(74)}>
//                                 Bavuga
//                             </button>
//                         </div>
//                         <div className="card back-card">
//                             <h1 className="backoo">Bavuga</h1>
//                             <br /><br />
//                             Umuzagara
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(74)}>
//                                 Ntibavuga
//                             </button>
//                         </div>
//                     </ReactCardFlip>
//                     <ReactCardFlip
//                         className="p-4 lg:w-1/4"
//                         isFlipped={flips[75]}
//                         flipDirection="vertical">

//                         <div className="card front-card">
//                             <h1 className="front">Ntibavuga</h1>
//                             <br /><br />
//                             Kuzitera amaraso y’inka ngo zitamungwa
//                             <br />
//                             <button className=" btn flip-button" onClick={() => handleFlip(75)}>
//                                 Bavuga
//                             </button>
//                         </div>
//                         <div className="card back-card">
//                             <h1 className="backoo">Bavuga</h1>
//                             <br /><br />
//                             Gusiga ingoma
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(75)}>
//                                 Ntibavuga
//                             </button>
//                         </div>
//                     </ReactCardFlip>
//                     <ReactCardFlip
//                         className="p-4 lg:w-1/4"
//                         isFlipped={flips[76]}
//                         flipDirection="vertical">

//                         <div className="card front-card">
//                             <h1 className="front">Ntibavuga</h1>
//                             <br /><br />
//                             Kuzigura
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(76)}>
//                                 Bavuga
//                             </button>
//                         </div>
//                         <div className="card back-card">
//                             <h1 className="backoo">Bavuga</h1>
//                             <br /><br />
//                             Gukosha ingoma
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(76)}>
//                                 Ntibavuga
//                             </button>
//                         </div>
//                     </ReactCardFlip>
//                     <ReactCardFlip
//                         className="p-4 lg:w-1/4"
//                         isFlipped={flips[77]}
//                         flipDirection="vertical">

//                         <div className="card front-card">
//                             <h1 className="front">Ntibavuga</h1>
//                             <br /><br />
//                             Kuzibaza
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(77)}>
//                                 Bavuga
//                             </button>
//                         </div>
//                         <div className="card back-card">
//                             <h1 className="backoo">Bavuga</h1>
//                             <br /><br />
//                             Kuramvura ingoma
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(77)}>
//                                 Ntibavuga
//                             </button>
//                         </div>
//                     </ReactCardFlip>
//                     <ReactCardFlip
//                         className="p-4 lg:w-1/4"
//                         isFlipped={flips[78]}
//                         flipDirection="vertical">

//                         <div className="card front-card">
//                             <h1 className="front">Ntibavuga</h1>
//                             <br /><br />
//                             Kuzibambaho uruhu
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(78)}>
//                                 Bavuga
//                             </button>
//                         </div>
//                         <div className="card back-card">
//                             <h1 className="backoo">Bavuga</h1>
//                             <br /><br />
//                             Kurema ingoma
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(78)}>
//                                 Ntibavuga
//                             </button>
//                         </div>
//                     </ReactCardFlip>
//                     <ReactCardFlip
//                         className="p-4 lg:w-1/4"
//                         isFlipped={flips[79]}
//                         flipDirection="vertical">

//                         <div className="card front-card">
//                             <h1 className="front">Ntibavuga</h1>
//                             <br /><br />
//                             Kuzikorera
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(79)}>
//                                 Bavuga
//                             </button>
//                         </div>
//                         <div className="card back-card">
//                             <h1 className="backoo">Bavuga</h1>
//                             <br /><br />
//                             Kuremera ingoma
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(79)}>
//                                 Ntibavuga
//                             </button>
//                         </div>
//                     </ReactCardFlip>
//                     <ReactCardFlip
//                         className="p-4 lg:w-1/4"
//                         isFlipped={flips[80]}
//                         flipDirection="vertical">

//                         <div className="card front-card">
//                             <h1 className="front">Ntibavuga</h1>
//                             <br /><br />
//                             Kuzitura
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(80)}>
//                                 Bavuga
//                             </button>
//                         </div>
//                         <div className="card back-card">
//                             <h1 className="backoo">Bavuga</h1>
//                             <br /><br />
//                             Kururutsa ingoma
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(80)}>
//                                 Ntibavuga
//                             </button>
//                         </div>
//                     </ReactCardFlip>
//                     <ReactCardFlip
//                         className="p-4 lg:w-1/4"
//                         isFlipped={flips[81]}
//                         flipDirection="vertical">

//                         <div className="card front-card">
//                             <h1 className="front">Ntibavuga</h1>
//                             <br /><br />
//                             Gutaha
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(81)}>
//                                 Bavuga
//                             </button>
//                         </div>
//                         <div className="card back-card">
//                             <h1 className="backoo">Bavuga</h1>
//                             <br /><br />
//                             Kuza kw’ ingoma
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(81)}>
//                                 Ntibavuga
//                             </button>
//                         </div>
//                     </ReactCardFlip>
//                     <ReactCardFlip
//                         className="p-4 lg:w-1/4"
//                         isFlipped={flips[82]}
//                         flipDirection="vertical">

//                         <div className="card front-card">
//                             <h1 className="front">Ntibavuga</h1>
//                             <br /><br />
//                             Kuzibika
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(82)}>
//                                 Bavuga
//                             </button>
//                         </div>
//                         <div className="card back-card">
//                             <h1 className="backoo">Bavuga</h1>
//                             <br /><br />
//                             Kuzijisha
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(82)}>
//                                 Ntibavuga
//                             </button>
//                         </div>
//                     </ReactCardFlip>
//                     <ReactCardFlip
//                         className="p-4 lg:w-1/4"
//                         isFlipped={flips[83]}
//                         flipDirection="vertical">

//                         <div className="card front-card">
//                             <h1 className="front">Ntibavuga</h1>
//                             <br /><br />
//                             Kuzitaba mu gitaka
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(83)}>
//                                 Bavuga
//                             </button>
//                         </div>
//                         <div className="card back-card">
//                             <h1 className="backoo">Bavuga</h1>
//                             <br /><br />
//                             Kuzibyarira
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(83)}>
//                                 Ntibavuga
//                             </button>
//                         </div>
//                     </ReactCardFlip>
//                     <ReactCardFlip
//                         className="p-4 lg:w-1/4"
//                         isFlipped={flips[84]}
//                         flipDirection="vertical">

//                         <div className="card front-card">
//                             <h1 className="front">Ntibavuga</h1>
//                             <br /><br />
//                             Kuzibika
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(84)}>
//                                 Bavuga
//                             </button>
//                         </div>
//                         <div className="card back-card">
//                             <h1 className="backoo">Bavuga</h1>
//                             <br /><br />
//                             Kuzibikira
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(84)}>
//                                 Ntibavuga
//                             </button>
//                         </div>
//                     </ReactCardFlip>
//                     <ReactCardFlip
//                         className="p-4 lg:w-1/4"
//                         isFlipped={flips[85]}
//                         flipDirection="vertical">

//                         <div className="card front-card">
//                             <h1 className="front">Ntibavuga</h1>
//                             <br /><br />
//                             Gusaza kwazo
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(85)}>
//                                 Bavuga
//                             </button>
//                         </div>
//                         <div className="card back-card">
//                             <h1 className="backoo">Bavuga</h1>
//                             <br /><br />
//                             Gukura
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(85)}>
//                                 Ntibavuga
//                             </button>
//                         </div>
//                     </ReactCardFlip>
//                     <ReactCardFlip
//                         className="p-4 lg:w-1/4"
//                         isFlipped={flips[86]}
//                         flipDirection="vertical">

//                         <div className="card front-card">
//                             <h1 className="front">Ntibavuga</h1>
//                             <br /><br />
//                             Gusaduka iyo zikiri nshya
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(86)}>
//                                 Bavuga
//                             </button>
//                         </div>
//                         <div className="card back-card">
//                             <h1 className="backoo">Bavuga</h1>
//                             <br /><br />
//                             Kurara
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(86)}>
//                                 Ntibavuga
//                             </button>
//                         </div>
//                     </ReactCardFlip>
//                     <ReactCardFlip
//                         className="p-4 lg:w-1/4"
//                         isFlipped={flips[87]}
//                         flipDirection="vertical">

//                         <div className="card front-card">
//                             <h1 className="front">Ntibavuga</h1>
//                             <br /><br />
//                             Gusaduka iyo zishaje
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(87)}>
//                                 Bavuga
//                             </button>
//                         </div>
//                         <div className="card back-card">
//                             <h1 className="backoo">Bavuga</h1>
//                             <br /><br />
//                             Kuribora
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(87)}>
//                                 Ntibavuga
//                             </button>
//                         </div>
//                     </ReactCardFlip>
//                     <ReactCardFlip
//                         className="p-4 lg:w-1/4"
//                         isFlipped={flips[88]}
//                         flipDirection="vertical">

//                         <div className="card front-card">
//                             <h1 className="front">Ntibavuga</h1>
//                             <br /><br />
//                             Gutoboka
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(88)}>
//                                 Bavuga
//                             </button>
//                         </div>
//                         <div className="card back-card">
//                             <h1 className="backoo">Bavuga</h1>
//                             <br /><br />
//                             Kubyara
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(88)}>
//                                 Ntibavuga
//                             </button>
//                         </div>
//                     </ReactCardFlip>
//                     <ReactCardFlip
//                         className="p-4 lg:w-1/4"
//                         isFlipped={flips[89]}
//                         flipDirection="vertical">

//                         <div className="card front-card">
//                             <h1 className="front">Ntibavuga</h1>
//                             <br /><br />
//                             Kuzishyira ku gicaniro
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(89)}>
//                                 Bavuga
//                             </button>
//                         </div>
//                         <div className="card back-card">
//                             <h1 className="backoo">Bavuga</h1>
//                             <br /><br />
//                             Kuzosa
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(89)}>
//                                 Ntibavuga
//                             </button>
//                         </div>
//                     </ReactCardFlip>
//                     <ReactCardFlip
//                         className="p-4 lg:w-1/4"
//                         isFlipped={flips[90]}
//                         flipDirection="vertical">

//                         <div className="card front-card">
//                             <h1 className="front">Ntibavuga</h1>
//                             <br /><br />
//                             Kuvuga zikaraza zashyushye cyane
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(90)}>
//                                 Bavuga
//                             </button>
//                         </div>
//                         <div className="card back-card">
//                             <h1 className="backoo">Bavuga</h1>
//                             <br /><br />
//                             Kurenga
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(90)}>
//                                 Ntibavuga
//                             </button>
//                         </div>
//                     </ReactCardFlip>
//                     <ReactCardFlip
//                         className="p-4 lg:w-1/4"
//                         isFlipped={flips[91]}
//                         flipDirection="vertical">

//                         <div className="card front-card">
//                             <h1 className="front">Ntibavuga</h1>
//                             <br /><br />
//                             Gutangira kuvuga
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(91)}>
//                                 Bavuga
//                             </button>
//                         </div>
//                         <div className="card back-card">
//                             <h1 className="backoo">Bavuga</h1>
//                             <br /><br />
//                             Gusuka
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(91)}>
//                                 Ntibavuga
//                             </button>
//                         </div>
//                     </ReactCardFlip>
//                     <ReactCardFlip
//                         className="p-4 lg:w-1/4"
//                         isFlipped={flips[92]}
//                         flipDirection="vertical">

//                         <div className="card front-card">
//                             <h1 className="front">Ntibavuga</h1>
//                             <br /><br />
//                             Guceceka
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(92)}>
//                                 Bavuga
//                             </button>
//                         </div>
//                         <div className="card back-card">
//                             <h1 className="backoo">Bavuga</h1>
//                             <br /><br />
//                             Gutuza
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(92)}>
//                                 Ntibavuga
//                             </button>
//                         </div>
//                     </ReactCardFlip>
//                     <ReactCardFlip
//                         className="p-4 lg:w-1/4"
//                         isFlipped={flips[93]}
//                         flipDirection="vertical">

//                         <div className="card front-card">
//                             <h1 className="front">Ntibavuga</h1>
//                             <br /><br />
//                             Kurangiza kuvuga
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(93)}>
//                                 Bavuga
//                             </button>
//                         </div>
//                         <div className="card back-card">
//                             <h1 className="backoo">Bavuga</h1>
//                             <br /><br />
//                             Gutunga
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(93)}>
//                                 Ntibavuga
//                             </button>
//                         </div>
//                     </ReactCardFlip>
//                     <ReactCardFlip
//                         className="p-4 lg:w-1/4"
//                         isFlipped={flips[94]}
//                         flipDirection="vertical">

//                         <div className="card front-card">
//                             <h1 className="front">Ntibavuga</h1>
//                             <br /><br />
//                             Kuvuza umurishyo wo kurangiza
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(94)}>
//                                 Bavuga
//                             </button>
//                         </div>
//                         <div className="card back-card">
//                             <h1 className="backoo">Bavuga</h1>
//                             <br /><br />
//                             Gutungisha
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(94)}>
//                                 Ntibavuga
//                             </button>
//                         </div>
//                     </ReactCardFlip>
//                     <ReactCardFlip
//                         className="p-4 lg:w-1/4"
//                         isFlipped={flips[95]}
//                         flipDirection="vertical">

//                         <div className="card front-card">
//                             <h1 className="front">Ntibavuga</h1>
//                             <br /><br />
//                             Utuma barangiza kuvuza
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(95)}>
//                                 Bavuga
//                             </button>
//                         </div>
//                         <div className="card back-card">
//                             <h1 className="backoo">Bavuga</h1>
//                             <br /><br />
//                             Umurishyo utungisha
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(95)}>
//                                 Ntibavuga
//                             </button>
//                         </div>
//                     </ReactCardFlip>
//                     <ReactCardFlip
//                         className="p-4 lg:w-1/4"
//                         isFlipped={flips[96]}
//                         flipDirection="vertical">

//                         <div className="card front-card">
//                             <h1 className="front">Ntibavuga</h1>
//                             <br /><br />
//                             Wa nimugoroba ,usinziriza
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(96)}>
//                                 Bavuga
//                             </button>
//                         </div>
//                         <div className="card back-card">
//                             <h1 className="backoo">Bavuga</h1>
//                             <br /><br />
//                             Umurishyo ubukira
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(96)}>
//                                 Ntibavuga
//                             </button>
//                         </div>
//                     </ReactCardFlip>
//                     <ReactCardFlip
//                         className="p-4 lg:w-1/4"
//                         isFlipped={flips[97]}
//                         flipDirection="vertical">

//                         <div className="card front-card">
//                             <h1 className="front">Ntibavuga</h1>
//                             <br /><br />
//                             Wa mu gitondo ,ukangura
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(97)}>
//                                 Bavuga
//                             </button>
//                         </div>
//                         <div className="card back-card">
//                             <h1 className="backoo">Bavuga</h1>
//                             <br /><br />
//                             Umurishyo ubambura
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(97)}>
//                                 Ntibavuga
//                             </button>
//                         </div>
//                     </ReactCardFlip>
//                     <ReactCardFlip
//                         className="p-4 lg:w-1/4"
//                         isFlipped={flips[98]}
//                         flipDirection="vertical">

//                         <div className="card front-card">
//                             <h1 className="front">Ntibavuga</h1>
//                             <br /><br />
//                             Ingoma itanga bwakeye
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(98)}>
//                                 Bavuga
//                             </button>
//                         </div>
//                         <div className="card back-card">
//                             <h1 className="backoo">Bavuga</h1>
//                             <br /><br />
//                             Indamutsa
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(98)}>
//                                 Ntibavuga
//                             </button>
//                         </div>
//                     </ReactCardFlip>
//                     <ReactCardFlip
//                         className="p-4 lg:w-1/4"
//                         isFlipped={flips[99]}
//                         flipDirection="vertical">

//                         <div className="card front-card">
//                             <h1 className="front">Ntibavuga</h1>
//                             <br /><br />
//                             Kuvugira icyarimwe kw’ingoma
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(99)}>
//                                 Bavuga
//                             </button>
//                         </div>
//                         <div className="card back-card">
//                             <h1 className="backoo">Bavuga</h1>
//                             <br /><br />
//                             Kuvuga urwunge
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(99)}>
//                                 Ntibavuga
//                             </button>
//                         </div>
//                     </ReactCardFlip>
//                     <ReactCardFlip
//                         className="p-4 lg:w-1/4"
//                         isFlipped={flips[100]}
//                         flipDirection="vertical">

//                         <div className="card front-card">
//                             <h1 className="front">Ntibavuga</h1>
//                             <br /><br />
//                             Kuvuga bugicya
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(100)}>
//                                 Bavuga
//                             </button>
//                         </div>
//                         <div className="card back-card">
//                             <h1 className="backoo">Bavuga</h1>
//                             <br /><br />
//                             Kubyukira
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(100)}>
//                                 Ntibavuga
//                             </button>
//                         </div>
//                     </ReactCardFlip>
//                     <ReactCardFlip
//                         className="p-4 lg:w-1/4"
//                         isFlipped={flips[101]}
//                         flipDirection="vertical">

//                         <div className="card front-card">
//                             <h1 className="front">Ntibavuga</h1>
//                             <br /><br />
//                             Guhindukira kw’ingoma
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(101)}>
//                                 Bavuga
//                             </button>
//                         </div>
//                         <div className="card back-card">
//                             <h1 className="backoo">Bavuga</h1>
//                             <br /><br />
//                             Kuvunura
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(101)}>
//                                 Ntibavuga
//                             </button>
//                         </div>
//                     </ReactCardFlip>
//                     <ReactCardFlip
//                         className="p-4 lg:w-1/4"
//                         isFlipped={flips[102]}
//                         flipDirection="vertical">

//                         <div className="card front-card">
//                             <h1 className="front">Ntibavuga</h1>
//                             <br /><br />
//                             Gushyigikira ingoma
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(102)}>
//                                 Bavuga
//                             </button>
//                         </div>
//                         <div className="card back-card">
//                             <h1 className="backoo">Bavuga</h1>
//                             <br /><br />
//                             Gusegura
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(102)}>
//                                 Ntibavuga
//                             </button>
//                         </div>
//                     </ReactCardFlip>
//                     <ReactCardFlip
//                         className="p-4 lg:w-1/4"
//                         isFlipped={flips[103]}
//                         flipDirection="vertical">

//                         <div className="card front-card">
//                             <h1 className="front">Ntibavuga</h1>
//                             <br /><br />
//                             Kuzishayayira,kuzibyinira umamata
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(103)}>
//                                 Bavuga
//                             </button>
//                         </div>
//                         <div className="card back-card">
//                             <h1 className="backoo">Bavuga</h1>
//                             <br /><br />
//                             Gutambira ingoma
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(103)}>
//                                 Ntibavuga
//                             </button>
//                         </div>
//                     </ReactCardFlip>
//                     <ReactCardFlip
//                         className="p-4 lg:w-1/4"
//                         isFlipped={flips[104]}
//                         flipDirection="vertical">

//                         <div className="card front-card">
//                             <h1 className="front">Ntibavuga</h1>
//                             <br /><br />
//                             Gutambagira by’ingoma
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(104)}>
//                                 Bavuga
//                             </button>
//                         </div>
//                         <div className="card back-card">
//                             <h1 className="backoo">Bavuga</h1>
//                             <br /><br />
//                             Kurambagira
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(104)}>
//                                 Ntibavuga
//                             </button>
//                         </div>
//                     </ReactCardFlip>
//                     <ReactCardFlip
//                         className="p-4 lg:w-1/4"
//                         isFlipped={flips[105]}
//                         flipDirection="vertical">

//                         <div className="card front-card">
//                             <h1 className="front">Ntibavuga</h1>
//                             <br /><br />
//                             Kuva mu ibarizo
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(105)}>
//                                 Bavuga
//                             </button>
//                         </div>
//                         <div className="card back-card">
//                             <h1 className="backoo">Bavuga</h1>
//                             <br /><br />
//                             Gukuka
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(105)}>
//                                 Ntibavuga
//                             </button>
//                         </div>
//                     </ReactCardFlip>
//                     <ReactCardFlip
//                         className="p-4 lg:w-1/4"
//                         isFlipped={flips[106]}
//                         flipDirection="vertical">

//                         <div className="card front-card">
//                             <h1 className="front">Ntibavuga</h1>
//                             <br /><br />
//                             Kuvana ingoma mu ibarizo
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(106)}>
//                                 Bavuga
//                             </button>
//                         </div>
//                         <div className="card back-card">
//                             <h1 className="backoo">Bavuga</h1>
//                             <br /><br />
//                             Gukura
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(106)}>
//                                 Ntibavuga
//                             </button>
//                         </div>
//                     </ReactCardFlip>
//                     <ReactCardFlip
//                         className="p-4 lg:w-1/4"
//                         isFlipped={flips[107]}
//                         flipDirection="vertical">

//                         <div className="card front-card">
//                             <h1 className="front">Ntibavuga</h1>
//                             <br /><br />
//                             Ingoma zitarambara
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(107)}>
//                                 Bavuga
//                             </button>
//                         </div>
//                         <div className="card back-card">
//                             <h1 className="backoo">Bavuga</h1>
//                             <br /><br />
//                             Imyari
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(107)}>
//                                 Ntibavuga
//                             </button>
//                         </div>
//                     </ReactCardFlip>
//                     <ReactCardFlip
//                         className="p-4 lg:w-1/4"
//                         isFlipped={flips[108]}
//                         flipDirection="vertical">

//                         <div className="card front-card">
//                             <h1 className="front">Ntibavuga</h1>
//                             <br /><br />
//                             Kuzishyiraho uruhu
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(108)}>
//                                 Bavuga
//                             </button>
//                         </div>
//                         <div className="card back-card">
//                             <h1 className="backoo">Bavuga</h1>
//                             <br /><br />
//                             Kuzambika
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(108)}>
//                                 Ntibavuga
//                             </button>
//                         </div>
//                     </ReactCardFlip>
//                     <ReactCardFlip
//                         className="p-4 lg:w-1/4"
//                         isFlipped={flips[109]}
//                         flipDirection="vertical">

//                         <div className="card front-card">
//                             <h1 className="front">Ntibavuga</h1>
//                             <br /><br />
//                             Kujyaho uruhu
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(109)}>
//                                 Bavuga
//                             </button>
//                         </div>
//                         <div className="card back-card">
//                             <h1 className="backoo">Bavuga</h1>
//                             <br /><br />
//                             Kwambara
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(109)}>
//                                 Ntibavuga
//                             </button>
//                         </div>
//                     </ReactCardFlip>
//                     <ReactCardFlip
//                         className="p-4 lg:w-1/4"
//                         isFlipped={flips[110]}
//                         flipDirection="vertical">

//                         <div className="card front-card">
//                             <h1 className="front">Ntibavuga</h1>
//                             <br /><br />
//                             Kuyivuza ngo iveho ubwoya
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(110)}>
//                                 Bavuga
//                             </button>
//                         </div>
//                         <div className="card back-card">
//                             <h1 className="backoo">Bavuga</h1>
//                             <br /><br />
//                             Kwogosha (ingoma)
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(110)}>
//                                 Ntibavuga
//                             </button>
//                         </div>
//                     </ReactCardFlip>
//                     <ReactCardFlip
//                         className="p-4 lg:w-1/4"
//                         isFlipped={flips[111]}
//                         flipDirection="vertical">

//                         <div className="card front-card">
//                             <h1 className="front">Ntibavuga</h1>
//                             <br /><br />
//                             Ingoma igenga igihugu
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(111)}>
//                                 Bavuga
//                             </button>
//                         </div>
//                         <div className="card back-card">
//                             <h1 className="backoo">Bavuga</h1>
//                             <br /><br />
//                             Ingabe
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(111)}>
//                                 Ntibavuga
//                             </button>
//                         </div>
//                     </ReactCardFlip>
//                     <ReactCardFlip
//                         className="p-4 lg:w-1/4"
//                         isFlipped={flips[112]}
//                         flipDirection="vertical">

//                         <div className="card front-card">
//                             <h1 className="front">Ntibavuga</h1>
//                             <br /><br />
//                             Ingoma z’ibyegera by’ingab
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(112)}>
//                                 Bavuga
//                             </button>
//                         </div>
//                         <div className="card back-card">
//                             <h1 className="backoo">Bavuga</h1>
//                             <br /><br />
//                             Ibigamba
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(112)}>
//                                 Ntibavuga
//                             </button>
//                         </div>
//                     </ReactCardFlip>
//                     <ReactCardFlip
//                         className="p-4 lg:w-1/4"
//                         isFlipped={flips[114]}
//                         flipDirection="vertical">

//                         <div className="card front-card">
//                             <h1 className="front">Ntibavuga</h1>
//                             <br /><br />
//                             Umutware w’Abiru bavuza ingoma
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(114)}>
//                                 Bavuga
//                             </button>
//                         </div>
//                         <div className="card back-card">
//                             <h1 className="backoo">Bavuga</h1>
//                             <br /><br />
//                             Umuziritsi
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(114)}>
//                                 Ntibavuga
//                             </button>
//                         </div>
//                     </ReactCardFlip>
//                     <ReactCardFlip
//                         className="p-4 lg:w-1/4"
//                         isFlipped={flips[116]}
//                         flipDirection="vertical">

//                         <div className="card front-card">
//                             <h1 className="front">Ntibavuga</h1>
//                             <br /><br />
//                             Ingoma ntizishobora kuvuga
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(116)}>
//                                 Bavuga
//                             </button>
//                         </div>
//                         <div className="card back-card">
//                             <h1 className="backoo">Bavuga</h1>
//                             <br /><br />
//                             Ingoma ziraziritse
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(116)}>
//                                 Ntibavuga
//                             </button>
//                         </div>
//                     </ReactCardFlip>
//                     <ReactCardFlip
//                         className="p-4 lg:w-1/4"
//                         isFlipped={flips[118]}
//                         flipDirection="vertical">

//                         <div className="card front-card">
//                             <h1 className="front">Ntibavuga</h1>
//                             <br /><br />
//                             Kongera kuwuvuza
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(118)}>
//                                 Bavuga
//                             </button>
//                         </div>
//                         <div className="card back-card">
//                             <h1 className="backoo">Bavuga</h1>
//                             <br /><br />
//                             Gusibira umurishyo
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(118)}>
//                                 Ntibavuga
//                             </button>
//                         </div>
//                     </ReactCardFlip>
//                     <ReactCardFlip
//                         className="p-4 lg:w-1/4"
//                         isFlipped={flips[119]}
//                         flipDirection="vertical">

//                         <div className="card front-card">
//                             <h1 className="front">Ntibavuga</h1>
//                             <br /><br />
//                             Imikondo yazo bafata iyo baziterura
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(119)}>
//                                 Bavuga
//                             </button>
//                         </div>
//                         <div className="card back-card">
//                             <h1 className="backoo">Bavuga</h1>
//                             <br /><br />
//                             Amaboko y’ingoma
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(119)}>
//                                 Ntibavuga
//                             </button>
//                         </div>
//                     </ReactCardFlip>
//                     <ReactCardFlip
//                         className="p-4 lg:w-1/4"
//                         isFlipped={flips[120]}
//                         flipDirection="vertical">

//                         <div className="card front-card">
//                             <h1 className="front">Ntibavuga</h1>
//                             <br /><br />
//                             Aho ingoma zivugira,aho zibikwa
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(120)}>
//                                 Bavuga
//                             </button>
//                         </div>
//                         <div className="card back-card">
//                             <h1 className="backoo">Bavuga</h1>
//                             <br /><br />
//                             Urukamishirizo
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(120)}>
//                                 Ntibavuga
//                             </button>
//                         </div>
//                     </ReactCardFlip>
//                     <ReactCardFlip
//                         className="p-4 lg:w-1/4"
//                         isFlipped={flips[121]}
//                         flipDirection="vertical">

//                         <div className="card front-card">
//                             <h1 className="front">Ntibavuga</h1>
//                             <br /><br />
//                             Aho zi ba
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(121)}>
//                                 Bavuga
//                             </button>
//                         </div>
//                         <div className="card back-card">
//                             <h1 className="backoo">Bavuga</h1>
//                             <br /><br />
//                             Ikiraro cy’ingoma
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(121)}>
//                                 Ntibavuga
//                             </button>
//                         </div>
//                     </ReactCardFlip>
//                     <ReactCardFlip
//                         className="p-4 lg:w-1/4"
//                         isFlipped={flips[122]}
//                         flipDirection="vertical">

//                         <div className="card front-card">
//                             <h1 className="front">Ntibavuga</h1>
//                             <br /><br />
//                             Umurishyo ushoreza urugamba
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(122)}>
//                                 Bavuga
//                             </button>
//                         </div>
//                         <div className="card back-card">
//                             <h1 className="backoo">Bavuga</h1>
//                             <br /><br />
//                             Impuruza/Intabaza
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(122)}>
//                                 Ntibavuga
//                             </button>
//                         </div>
//                     </ReactCardFlip>
//                     <ReactCardFlip
//                         className="p-4 lg:w-1/4"
//                         isFlipped={flips[123]}
//                         flipDirection="vertical">

//                         <div className="card front-card">
//                             <h1 className="front">Ntibavuga</h1>
//                             <br /><br />
//                             Umurishyo ubambura ukanabikira
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(123)}>
//                                 Bavuga
//                             </button>
//                         </div>
//                         <div className="card back-card">
//                             <h1 className="backoo">Bavuga</h1>
//                             <br /><br />
//                             Umutimbo/agatimbo
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(123)}>
//                                 Ntibavuga
//                             </button>
//                         </div>
//                     </ReactCardFlip>
//                     <ReactCardFlip
//                         className="p-4 lg:w-1/4"
//                         isFlipped={flips[124]}
//                         flipDirection="vertical">

//                         <div className="card front-card">
//                             <h1 className="front">Ntibavuga</h1>
//                             <br /><br />
//                             Kwerera ukwezi gushya kwa Kamena
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(124)}>
//                                 Bavuga
//                             </button>
//                         </div>
//                         <div className="card back-card">
//                             <h1 className="backoo">Bavuga</h1>
//                             <br /><br />
//                             Gukura gicurasi
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(124)}>
//                                 Ntibavuga
//                             </button>
//                         </div>
//                     </ReactCardFlip>
//                     <ReactCardFlip
//                         className="p-4 lg:w-1/4"
//                         isFlipped={flips[125]}
//                         flipDirection="vertical">

//                         <div className="card front-card">
//                             <h1 className="front">Ntibavuga</h1>
//                             <br /><br />
//                             Kuyihisha mu gihe cy’intambara
//                             <br />
//                             <button className="flip-button " onClick={() => handleFlip(125)}>
//                                 Bavuga
//                             </button>
//                         </div>
//                         <div className="card back-card">
//                             <h1 className="backoo">Bavuga</h1>
//                             <br /><br />
//                             Kubundisha ingoma
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(125)}>
//                                 Ntibavuga
//                             </button>
//                         </div>
//                     </ReactCardFlip>
//                     <ReactCardFlip
//                         className="p-4 lg:w-1/4"
//                         isFlipped={flips[126]}
//                         flipDirection="vertical">

//                         <div className="card front-card">
//                             <h1 className="front">Ntibavuga</h1>
//                             <br /><br />
//                             Kuvuza umamata ,gahoro
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(126)}>
//                                 Bavuga
//                             </button>
//                         </div>
//                         <div className="card back-card">
//                             <h1 className="backoo">Bavuga</h1>
//                             <br /><br />
//                             Kunoshereza
//                             <br />
//                             <button className="flip-button" onClick={() => handleFlip(126)}>
//                                 Ntibavuga
//                             </button>
//                         </div>
//                     </ReactCardFlip>

//                 </div>
//             )}
//         </div>
//     </div>


//     );

// }

// export default Ikenshavugokungoma;

