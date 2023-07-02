import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./Ikenshavugo.css"; // Import the CSS file


function Ikenshabwinshi() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapsible = () => {
        setIsOpen(!isOpen);
    };

    const [flips, setFlips] = useState([false, false, false, false]);
    const [currentFlipIndex, setCurrentFlipIndex] = useState(-1);

    const handleFlip = (index) => {
        const newFlips = [...flips];
        newFlips[index] = !newFlips[index];

        if (currentFlipIndex !== -1 && currentFlipIndex !== index) {
            newFlips[currentFlipIndex] = false;
        }

        setFlips(newFlips);
        setCurrentFlipIndex(index);
    };

    return (
        <div>

            
            <div className={` collapsible ${isOpen ? 'open' : ''}`}>
                <div className="collapsible-header" onClick={toggleCollapsible}>
                <div className="header-content">
                    <h1 class="title-font sm:text-2xl  text-xl font-medium text-gray-900 mb-3">Ubwinshi bw’abantu n’ibintu</h1>
                    <span className={`arrow ${isOpen ? 'up' : 'down'}`}></span>
                </div>
                </div>
                <hr /><br /> 
                {isOpen && (
                    <div className=" marg flex flex-wrap collapsible-content -m-4">
                        <ReactCardFlip
                            className="p-4 lg:w-1/4"
                            isFlipped={flips[165]}
                            flipDirection="vertical">

                            <div className="card front-card">
                                <h1 className="front">Ntibavuga</h1>
                                <br /><br />
                                Inka nyinshi
                                <br />
                                <button className="  flip-button" onClick={() => handleFlip(165)}>
                                    Bavuga
                                </button>
                            </div>
                            <div className="card back-card">
                                <h1 className="backoo">Bavuga</h1>
                                <br /><br />
                                Ishyo
                                <br />
                                <button className="flip-button" onClick={() => handleFlip(165)}>
                                    Ntibavuga
                                </button>
                            </div>
                        </ReactCardFlip>
                        <ReactCardFlip
                            className="p-4 lg:w-1/4"
                            isFlipped={flips[166]}
                            flipDirection="vertical">

                            <div className="card front-card">
                                <h1 className="front">Ntibavuga</h1>
                                <br /><br />
                                Ishyo ryinshi
                                <br />
                                <button className="  flip-button" onClick={() => handleFlip(166)}>
                                    Bavuga
                                </button>
                            </div>
                            <div className="card back-card">
                                <h1 className="backoo">Bavuga</h1>
                                <br /><br />
                                Amashyo
                                <br />
                                <button className="flip-button" onClick={() => handleFlip(166)}>
                                    Ntibavuga
                                </button>
                            </div>
                        </ReactCardFlip>
                        <ReactCardFlip
                            className="p-4 lg:w-1/4"
                            isFlipped={flips[167]}
                            flipDirection="vertical">

                            <div className="card front-card">
                                <h1 className="front">Ntibavuga</h1>
                                <br /><br />
                                Intama,ihene nyinshi
                                <br />
                                <button className="  flip-button" onClick={() => handleFlip(167)}>
                                    Bavuga
                                </button>
                            </div>
                            <div className="card back-card">
                                <h1 className="backoo">Bavuga</h1>
                                <br /><br />
                                Umukumbi
                                <br />
                                <button className="flip-button" onClick={() => handleFlip(167)}>
                                    Ntibavuga
                                </button>
                            </div>
                        </ReactCardFlip>
                        <ReactCardFlip
                            className="p-4 lg:w-1/4"
                            isFlipped={flips[168]}
                            flipDirection="vertical">

                            <div className="card front-card">
                                <h1 className="front">Ntibavuga</h1>
                                <br /><br />
                                Umukumbi mwinshi
                                <br />
                                <button className="  flip-button" onClick={() => handleFlip(168)}>
                                    Bavuga
                                </button>
                            </div>
                            <div className="card back-card">
                                <h1 className="backoo">Bavuga</h1>
                                <br /><br />
                                Imikumbi
                                <br />
                                <button className="flip-button" onClick={() => handleFlip(168)}>
                                    Ntibavuga
                                </button>
                            </div>
                        </ReactCardFlip>
                        <ReactCardFlip
                            className="p-4 lg:w-1/4"
                            isFlipped={flips[169]}
                            flipDirection="vertical">

                            <div className="card front-card">
                                <h1 className="front">Ntibavuga</h1>
                                <br /><br />
                                Ingurube nyinshi
                                <br />
                                <button className="  flip-button" onClick={() => handleFlip(168)}>
                                    Bavuga
                                </button>
                            </div>
                            <div className="card back-card">
                                <h1 className="backoo">Bavuga</h1>
                                <br /><br />
                                Umugana
                                <br />
                                <button className="flip-button" onClick={() => handleFlip(169)}>
                                    Ntibavuga
                                </button>
                            </div>
                        </ReactCardFlip>
                        <ReactCardFlip
                            className="p-4 lg:w-1/4"
                            isFlipped={flips[170]}
                            flipDirection="vertical">

                            <div className="card front-card">
                                <h1 className="front">Ntibavuga</h1>
                                <br /><br />
                                Umugana mwinshi
                                <br />
                                <button className=" flip-button" onClick={() => handleFlip(170)}>
                                    Bavuga
                                </button>
                            </div>
                            <div className="card back-card">
                                <h1 className="backoo">Bavuga</h1>
                                <br /><br />
                                Imigana
                                <br />
                                <button className="flip-button" onClick={() => handleFlip(170)}>
                                    Ntibavuga
                                </button>
                            </div>
                        </ReactCardFlip>
                        <ReactCardFlip
                            className="p-4 lg:w-1/4"
                            isFlipped={flips[171]}
                            flipDirection="vertical">

                            <div className="card front-card">
                                <h1 className="front">Ntibavuga</h1>
                                <br /><br />
                                Imbwa nyinshi
                                <br />
                                <button className="  flip-button" onClick={() => handleFlip(171)}>
                                    Bavuga
                                </button>
                            </div>
                            <div className="card back-card">
                                <h1 className="backoo">Bavuga</h1>
                                <br /><br />
                                Umukeno
                                <br />
                                <button className="flip-button" onClick={() => handleFlip(171)}>
                                    Ntibavuga
                                </button>
                            </div>
                        </ReactCardFlip>
                        <ReactCardFlip
                            className="p-4 lg:w-1/4"
                            isFlipped={flips[172]}
                            flipDirection="vertical">

                            <div className="card front-card">
                                <h1 className="front">Ntibavuga</h1>
                                <br /><br />
                                Umukeno mwinshi
                                <br />
                                <button className="  flip-button" onClick={() => handleFlip(172)}>
                                    Bavuga
                                </button>
                            </div>
                            <div className="card back-card">
                                <h1 className="backoo">Bavuga</h1>
                                <br /><br />
                                Imikeno
                                <br />
                                <button className="flip-button" onClick={() => handleFlip(172)}>
                                    Ntibavuga
                                </button>
                            </div>
                        </ReactCardFlip>
                        <ReactCardFlip
                            className="p-4 lg:w-1/4"
                            isFlipped={flips[173]}
                            flipDirection="vertical">

                            <div className="card front-card">
                                <h1 className="front">Ntibavuga</h1>
                                <br /><br />
                                Amashyi menshi
                                <br />
                                <button className="  flip-button" onClick={() => handleFlip(173)}>
                                    Bavuga
                                </button>
                            </div>
                            <div className="card back-card">
                                <h1 className="backoo">Bavuga</h1>
                                <br /><br />
                                Urufaya
                                <br />
                                <button className="flip-button" onClick={() => handleFlip(173)}>
                                    Ntibavuga
                                </button>
                            </div>
                        </ReactCardFlip>
                        <ReactCardFlip
                            className="p-4 lg:w-1/4"
                            isFlipped={flips[174]}
                            flipDirection="vertical">

                            <div className="card front-card">
                                <h1 className="front">Ntibavuga</h1>
                                <br /><br />
                                Indirimbo nyinshi
                                <br />
                                <button className="  flip-button" onClick={() => handleFlip(174)}>
                                    Bavuga
                                </button>
                            </div>
                            <div className="card back-card">
                                <h1 className="backoo">Bavuga</h1>
                                <br /><br />
                                Urwunge
                                <br />
                                <button className="flip-button" onClick={() => handleFlip(174)}>
                                    Ntibavuga
                                </button>
                            </div>
                        </ReactCardFlip>
                        <ReactCardFlip
                            className="p-4 lg:w-1/4"
                            isFlipped={flips[175]}
                            flipDirection="vertical">

                            <div className="card front-card">
                                <h1 className="front">Ntibavuga</h1>
                                <br /><br />
                                Amajwi menshi
                                <br />
                                <button className="  flip-button" onClick={() => handleFlip(175)}>
                                    Bavuga
                                </button>
                            </div>
                            <div className="card back-card">
                                <h1 className="backoo">Bavuga</h1>
                                <br /><br />
                                Urwunge
                                <br />
                                <button className="flip-button" onClick={() => handleFlip(175)}>
                                    Ntibavuga
                                </button>
                            </div>
                        </ReactCardFlip>
                        <ReactCardFlip
                            className="p-4 lg:w-1/4"
                            isFlipped={flips[176]}
                            flipDirection="vertical">

                            <div className="card front-card">
                                <h1 className="front">Ntibavuga</h1>
                                <br /><br />
                                Impundu nyinshi
                                <br />
                                <button className="  flip-button" onClick={() => handleFlip(176)}>
                                    Bavuga
                                </button>
                            </div>
                            <div className="card back-card">
                                <h1 className="backoo">Bavuga</h1>
                                <br /><br />
                                Urwanaga
                                <br />
                                <button className="flip-button" onClick={() => handleFlip(176)}>
                                    Ntibavuga
                                </button>
                            </div>
                        </ReactCardFlip>
                    </div>
                )}
            </div>
        </div>

    );
}
export default Ikenshabwinshi;