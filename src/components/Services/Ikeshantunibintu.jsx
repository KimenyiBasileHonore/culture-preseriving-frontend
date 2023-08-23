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
      const response = await fetch("http://localhost:4050/api/ahantu/ahantu"); // Use the correct backend API URL here
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
    <div className="mt-16">
      <div className={`collapsible ${isOpen ? 'open' : ''}`}>
        <div className="collapsible-header" onClick={toggleCollapsible}>
          <div className="header-content">
            <h1 class="title-font sm:text-2xl   text-xl font-medium text-gray-900 mb-3">Imvugo y’ahantu n’ibintu</h1>
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
// import "./Ikenshavugo.css";

// function Ikeshantunibintu() {

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

            
//             <div className={` collapsible ${isOpen ? 'open' : ''}`}>
//                 <div className="collapsible-header" onClick={toggleCollapsible}>
//                     <div className="header-content">
//                         <h1 class="title-font sm:text-2xl  text-xl font-medium text-gray-900 mb-3">Imvugo y’ahantu n’ibintu</h1>
//                         <span className={`arrow ${isOpen ? 'up' : 'down'}`}></span>
//                     </div>
//                 </div>
//                 <hr /><br /> 
//                 {isOpen && (
//                     <div className=" marg flex flex-wrap collapsible-content -m-4">
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[151]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Aho umwami yabonaniraga n’abaturage
//                                 <br />
//                                 <button className=" btn flip-button" onClick={() => handleFlip(151)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Kukarubanda
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(151)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[152]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Aho umwami yaciraga imanza
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(152)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Ku gitabo cy’intarengwa
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(152)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[153]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Irembo ryo mu gikari
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(153)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Icyanzu
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(153)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[154]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Imbere mu nzu
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(154)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Mu mbere
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(154)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[155]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Aho abantu baganirira mu rugo
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(155)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Mu mbuga
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(155)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[156]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Aho basohokera bataha
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(156)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Ku irembo
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(156)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[157]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Ibiti 2 banyuramo hagati bajya ku irembo
//                                 <br />
//                                 <button className=" btn flip-button" onClick={() => handleFlip(157)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Ibikingi by’amarembo
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(157)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[158]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Ibiti bakingisha mu irembo
//                                 <br />
//                                 <button className="  flip-button" onClick={() => handleFlip(158)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Imyugariro
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(158)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[159]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Igitandukanya icyumba n’ikindi mu nzu ya kinyarwanda
//                                 <br />
//                                 <button className=" btn flip-button" onClick={() => handleFlip(159)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Inyegamo
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(159)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[160]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Igiti bakwikiramo isuka
//                                 <br />
//                                 <button className="  flip-button" onClick={() => handleFlip(160)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Umuhini
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(160)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[161]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Imbere h’umuheto
//                                 <br />
//                                 <button className="  flip-button" onClick={() => handleFlip(161)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Ku ruhembe
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(161)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[162]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Isonga ry’uruhindu (umunwa )
//                                 <br />
//                                 <button className="  flip-button" onClick={() => handleFlip(162)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Umuretso
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(162)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[163]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Aho babika inkota
//                                 <br />
//                                 <button className="  flip-button" onClick={() => handleFlip(163)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Urwubati
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(163)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[164]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Ibiti bitandukanya isambu n’indi
//                                 <br />
//                                 <button className="  flip-button" onClick={() => handleFlip(164)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Urubibi
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(164)}>
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
// export default Ikeshantunibintu;