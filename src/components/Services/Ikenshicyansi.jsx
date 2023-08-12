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
      const response = await fetch("http://localhost:4050/api/icyansi/icyansi"); // Use the correct backend API URL here
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
            <h1 class="title-font sm:text-2xl   text-xl font-medium text-gray-900 mb-3">Ku bijyanye n’icyansi, Isekuru, Ingobyi, Igisabo, Umuheto n’injishon’ibindi</h1>
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

// function Ikenshicyansi() {

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
//                 <div className="header-content">
//                     <h1 class="title-font sm:text-2xl  text-xl font-medium text-gray-900 mb-3">Ku bijyanye n’icyansi, Isekuru, Ingobyi, Igisabo, Umuheto n’injishon’ibindi</h1>
//                     <span className={`arrow ${isOpen ? 'up' : 'down'}`}></span>
//                 </div>
//                 </div>
//                 <hr /><br /> 
//                 {isOpen && (
//                     <div className=" marg flex flex-wrap collapsible-content -m-4">
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[177]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Ntibimanikwa
//                                 <br />
//                                 <button className="  flip-button" onClick={() => handleFlip(177)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Birajishwa
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(177)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[178]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Ntibiturwa
//                                 <br />
//                                 <button className="  flip-button" onClick={() => handleFlip(178)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Birururutswa
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(178)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[179]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Ntibimeswa
//                                 <br />
//                                 <button className="  flip-button" onClick={() => handleFlip(179)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Birahanagurwa
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(179)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[180]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Ntibisaza
//                                 <br />
//                                 <button className="  flip-button" onClick={() => handleFlip(180)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Birakura
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(180)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[181]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Ntibyikorerwa
//                                 <br />
//                                 <button className="  flip-button" onClick={() => handleFlip(181)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Biraremererwa
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(181)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[182]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Ntibigurwa
//                                 <br />
//                                 <button className="  flip-button" onClick={() => handleFlip(182)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Birakoshwa
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(182)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[183]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Ntibishyushywa
//                                 <br />
//                                 <button className="  flip-button" onClick={() => handleFlip(171837)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Biroswa
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(183)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[184]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Ntibimeneka
//                                 <br />
//                                 <button className="  flip-button" onClick={() => handleFlip(184)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Biraribora
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(184)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[185]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Ntibibazwa
//                                 <br />
//                                 <button className="  flip-button" onClick={() => handleFlip(185)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Biraramvurwa
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(185)}>
//                                     Ntibavuga
//                                 </button>
//                             </div>
//                         </ReactCardFlip>
//                         <ReactCardFlip
//                             className="p-4 lg:w-1/4"
//                             isFlipped={flips[186]}
//                             flipDirection="vertical">

//                             <div className="card front-card">
//                                 <h1 className="front">Ntibavuga</h1>
//                                 <br /><br />
//                                 Igiti bajishaho igisabo
//                                 <br />
//                                 <button className="  flip-button" onClick={() => handleFlip(186)}>
//                                     Bavuga
//                                 </button>
//                             </div>
//                             <div className="card back-card">
//                                 <h1 className="backoo">Bavuga</h1>
//                                 <br /><br />
//                                 Umugamba
//                                 <br />
//                                 <button className="flip-button" onClick={() => handleFlip(186)}>
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
// export default Ikenshicyansi;
