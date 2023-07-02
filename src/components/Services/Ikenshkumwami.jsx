import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./Ikenshavugo.css"; // Import the CSS file

function Ikenshkumwami() {

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
            <div className="mt-16">
                <div className={` collapsible ${isOpen ? 'open' : ''}`}>
                    <div className="collapsible-header" onClick={toggleCollapsible}>
                    <div className="header-content">
                        <h1 class="title-font sm:text-2xl   text-xl font-medium text-gray-900 mb-3">Ku bijyanye n’umwami</h1>
                        <span className={`arrow ${isOpen ? 'up' : 'down'}`}></span>
                    </div>
                    </div>
                    <hr /><br /> 
                    {isOpen && (
                        <div className=" marg flex flex-wrap -m-4 collapsible-content">
                            <ReactCardFlip
                                className="p-4 lg:w-1/4"
                                isFlipped={flips[127]}
                                flipDirection="vertical">

                                <div className="card front-card">
                                    <h1 className="front">Ntibavuga</h1>
                                    <br /><br />
                                    Umwami
                                    <br />
                                    <button className="flip-button" onClick={() => handleFlip(127)}>
                                        Bavuga
                                    </button>
                                </div>
                                <div className="card back-card">
                                    <h1 className="backoo">Bavuga</h1>
                                    <br /><br />
                                    Umugabe
                                    <br />
                                    <button className="flip-button" onClick={() => handleFlip(127)}>
                                        Ntibavuga
                                    </button>
                                </div>
                            </ReactCardFlip>
                            <ReactCardFlip
                                className="p-4 lg:w-1/4"
                                isFlipped={flips[128]}
                                flipDirection="vertical">

                                <div className="card front-card">
                                    <h1 className="front">Ntibavuga</h1>
                                    <br /><br />
                                    Nyina w’umwami
                                    <br />
                                    <button className="flip-button" onClick={() => handleFlip(128)}>
                                        Bavuga
                                    </button>
                                </div>
                                <div className="card back-card">
                                    <h1 className="backoo">Bavuga</h1>
                                    <br /><br />
                                    Umugabekazi
                                    <br />
                                    <button className="flip-button" onClick={() => handleFlip(128)}>
                                        Ntibavuga
                                    </button>
                                </div>
                            </ReactCardFlip>
                            <ReactCardFlip
                                className="p-4 lg:w-1/4"
                                isFlipped={flips[129]}
                                flipDirection="vertical">

                                <div className="card front-card">
                                    <h1 className="front">Ntibavuga</h1>
                                    <br /><br />
                                    Umugore w’umwami
                                    <br />
                                    <button className="flip-button" onClick={() => handleFlip(129)}>
                                        Bavuga
                                    </button>
                                </div>
                                <div className="card back-card">
                                    <h1 className="backoo">Bavuga</h1>
                                    <br /><br />
                                    Umwamikazi
                                    <br />
                                    <button className="flip-button" onClick={() => handleFlip(129)}>
                                        Ntibavuga
                                    </button>
                                </div>
                            </ReactCardFlip>
                            <ReactCardFlip
                                className="p-4 lg:w-1/4"
                                isFlipped={flips[130]}
                                flipDirection="vertical">

                                <div className="card front-card">
                                    <h1 className="front">Ntibavuga</h1>
                                    <br /><br />
                                    Abana b’umwami
                                    <br />
                                    <button className="flip-button" onClick={() => handleFlip(130)}>
                                        Bavuga
                                    </button>
                                </div>
                                <div className="card back-card">
                                    <h1 className="backoo">Bavuga</h1>
                                    <br /><br />
                                    Ibikomangoma
                                    <br />
                                    <button className="flip-button" onClick={() => handleFlip(130)}>
                                        Ntibavuga
                                    </button>
                                </div>
                            </ReactCardFlip>
                            <ReactCardFlip
                                className="p-4 lg:w-1/4"
                                isFlipped={flips[131]}
                                flipDirection="vertical">

                                <div className="card front-card">
                                    <h1 className="front">Ntibavuga</h1>
                                    <br /><br />
                                    Umurambo w’umwami
                                    <br />
                                    <button className="flip-button" onClick={() => handleFlip(131)}>
                                        Bavuga
                                    </button>
                                </div>
                                <div className="card back-card">
                                    <h1 className="backoo">Bavuga</h1>
                                    <br /><br />
                                    Umugogo
                                    <br />
                                    <button className="flip-button" onClick={() => handleFlip(131)}>
                                        Ntibavuga
                                    </button>
                                </div>
                            </ReactCardFlip>
                            <ReactCardFlip
                                className="p-4 lg:w-1/4"
                                isFlipped={flips[132]}
                                flipDirection="vertical">

                                <div className="card front-card">
                                    <h1 className="front">Ntibavuga</h1>
                                    <br /><br />
                                    Kumubyutsa
                                    <br />
                                    <button className="flip-button" onClick={() => handleFlip(132)}>
                                        Bavuga
                                    </button>
                                </div>
                                <div className="card back-card">
                                    <h1 className="backoo">Bavuga</h1>
                                    <br /><br />
                                    Kumubambura
                                    <br />
                                    <button className="flip-button" onClick={() => handleFlip(132)}>
                                        Ntibavuga
                                    </button>
                                </div>
                            </ReactCardFlip>
                            <ReactCardFlip
                                className="p-4 lg:w-1/4"
                                isFlipped={flips[133]}
                                flipDirection="vertical">

                                <div className="card front-card">
                                    <h1 className="front">Ntibavuga</h1>
                                    <br /><br />
                                    Kumusinziriza
                                    <br />
                                    <button className="flip-button" onClick={() => handleFlip(133)}>
                                        Bavuga
                                    </button>
                                </div>
                                <div className="card back-card">
                                    <h1 className="backoo">Bavuga</h1>
                                    <br /><br />
                                    Kumubikira
                                    <br />
                                    <button className="flip-button" onClick={() => handleFlip(133)}>
                                        Ntibavuga
                                    </button>
                                </div>
                            </ReactCardFlip>
                            <ReactCardFlip
                                className="p-4 lg:w-1/4"
                                isFlipped={flips[134]}
                                flipDirection="vertical">

                                <div className="card front-card">
                                    <h1 className="front">Ntibavuga</h1>
                                    <br /><br />
                                    Kugenda
                                    <br />
                                    <button className="flip-button" onClick={() => handleFlip(134)}>
                                        Bavuga
                                    </button>
                                </div>
                                <div className="card back-card">
                                    <h1 className="backoo">Bavuga</h1>
                                    <br /><br />
                                    Kurambagira
                                    <br />
                                    <button className="flip-button" onClick={() => handleFlip(134)}>
                                        Ntibavuga
                                    </button>
                                </div>
                            </ReactCardFlip>
                            <ReactCardFlip
                                className="p-4 lg:w-1/4"
                                isFlipped={flips[135]}
                                flipDirection="vertical">

                                <div className="card front-card">
                                    <h1 className="front">Ntibavuga</h1>
                                    <br /><br />
                                    Kurya
                                    <br />
                                    <button className="flip-button" onClick={() => handleFlip(135)}>
                                        Bavuga
                                    </button>
                                </div>
                                <div className="card back-card">
                                    <h1 className="backoo">Bavuga</h1>
                                    <br /><br />
                                    Gufungura
                                    <br />
                                    <button className="flip-button" onClick={() => handleFlip(135)}>
                                        Ntibavuga
                                    </button>
                                </div>
                            </ReactCardFlip>
                            <ReactCardFlip
                                className="p-4 lg:w-1/4"
                                isFlipped={flips[136]}
                                flipDirection="vertical">

                                <div className="card front-card">
                                    <h1 className="front">Ntibavuga</h1>
                                    <br /><br />
                                    Kurangiza kurya
                                    <br />
                                    <button className="flip-button" onClick={() => handleFlip(136)}>
                                        Bavuga
                                    </button>
                                </div>
                                <div className="card back-card">
                                    <h1 className="backoo">Bavuga</h1>
                                    <br /><br />
                                    Kwijuta
                                    <br />
                                    <button className="flip-button" onClick={() => handleFlip(136)}>
                                        Ntibavuga
                                    </button>
                                </div>
                            </ReactCardFlip>
                            <ReactCardFlip
                                className="p-4 lg:w-1/4"
                                isFlipped={flips[137]}
                                flipDirection="vertical">

                                <div className="card front-card">
                                    <h1 className="front">Ntibavuga</h1>
                                    <br /><br />
                                    Gupfa
                                    <br />
                                    <button className="flip-button" onClick={() => handleFlip(137)}>
                                        Bavuga
                                    </button>
                                </div>
                                <div className="card back-card">
                                    <h1 className="backoo">Bavuga</h1>
                                    <br /><br />
                                    Gutanga
                                    <br />
                                    <button className="flip-button" onClick={() => handleFlip(137)}>
                                        Ntibavuga
                                    </button>
                                </div>
                            </ReactCardFlip>
                            <ReactCardFlip
                                className="p-4 lg:w-1/4"
                                isFlipped={flips[138]}
                                flipDirection="vertical">

                                <div className="card front-card">
                                    <h1 className="front">Ntibavuga</h1>
                                    <br /><br />
                                    Uburiri bw’umwami
                                    <br />
                                    <button className="flip-button" onClick={() => handleFlip(138)}>
                                        Bavuga
                                    </button>
                                </div>
                                <div className="card back-card">
                                    <h1 className="backoo">Bavuga</h1>
                                    <br /><br />
                                    Igisasiro
                                    <br />
                                    <button className="flip-button" onClick={() => handleFlip(138)}>
                                        Ntibavuga
                                    </button>
                                </div>
                            </ReactCardFlip>
                            <ReactCardFlip
                                className="p-4 lg:w-1/4"
                                isFlipped={flips[139]}
                                flipDirection="vertical">

                                <div className="card front-card">
                                    <h1 className="front">Ntibavuga</h1>
                                    <br /><br />
                                    Inzu y’umwami
                                    <br />
                                    <button className="flip-button" onClick={() => handleFlip(139)}>
                                        Bavuga
                                    </button>
                                </div>
                                <div className="card back-card">
                                    <h1 className="backoo">Bavuga</h1>
                                    <br /><br />
                                    Ingoro
                                    <br />
                                    <button className="flip-button" onClick={() => handleFlip(139)}>
                                        Ntibavuga
                                    </button>
                                </div>
                            </ReactCardFlip>
                            <ReactCardFlip
                                className="p-4 lg:w-1/4"
                                isFlipped={flips[140]}
                                flipDirection="vertical">

                                <div className="card front-card">
                                    <h1 className="front">Ntibavuga</h1>
                                    <br /><br />
                                    Kujya ku ngoma
                                    <br />
                                    <button className="flip-button" onClick={() => handleFlip(140)}>
                                        Bavuga
                                    </button>
                                </div>
                                <div className="card back-card">
                                    <h1 className="backoo">Bavuga</h1>
                                    <br /><br />
                                    Kwima ingoma
                                    <br />
                                    <button className="flip-button" onClick={() => handleFlip(140)}>
                                        Ntibavuga
                                    </button>
                                </div>
                            </ReactCardFlip>
                            <ReactCardFlip
                                className="p-4 lg:w-1/4"
                                isFlipped={flips[141]}
                                flipDirection="vertical">

                                <div className="card front-card">
                                    <h1 className="front">Ntibavuga</h1>
                                    <br /><br />
                                    Kubyuka
                                    <br />
                                    <button className="flip-button" onClick={() => handleFlip(141)}>
                                        Bavuga
                                    </button>
                                </div>
                                <div className="card back-card">
                                    <h1 className="backoo">Bavuga</h1>
                                    <br /><br />
                                    Kwibambura
                                    <br />
                                    <button className="flip-button" onClick={() => handleFlip(141)}>
                                        Ntibavuga
                                    </button>
                                </div>
                            </ReactCardFlip>
                            <ReactCardFlip
                                className="p-4 lg:w-1/4"
                                isFlipped={flips[142]}
                                flipDirection="vertical">

                                <div className="card front-card">
                                    <h1 className="front">Ntibavuga</h1>
                                    <br /><br />
                                    Kuryama
                                    <br />
                                    <button className="flip-button" onClick={() => handleFlip(142)}>
                                        Bavuga
                                    </button>
                                </div>
                                <div className="card back-card">
                                    <h1 className="backoo">Bavuga</h1>
                                    <br /><br />
                                    Kwibikira
                                    <br />
                                    <button className="flip-button" onClick={() => handleFlip(142)}>
                                        Ntibavuga
                                    </button>
                                </div>
                            </ReactCardFlip>
                            <ReactCardFlip
                                className="p-4 lg:w-1/4"
                                isFlipped={flips[143]}
                                flipDirection="vertical">

                                <div className="card front-card">
                                    <h1 className="front">Ntibavuga</h1>
                                    <br /><br />
                                    Kurwara
                                    <br />
                                    <button className="flip-button" onClick={() => handleFlip(143)}>
                                        Bavuga
                                    </button>
                                </div>
                                <div className="card back-card">
                                    <h1 className="backoo">Bavuga</h1>
                                    <br /><br />
                                    Kuberama
                                    <br />
                                    <button className="flip-button" onClick={() => handleFlip(143)}>
                                        Ntibavuga
                                    </button>
                                </div>
                            </ReactCardFlip>
                            <ReactCardFlip
                                className="p-4 lg:w-1/4"
                                isFlipped={flips[144]}
                                flipDirection="vertical">

                                <div className="card front-card">
                                    <h1 className="front">Ntibavuga</h1>
                                    <br /><br />
                                    Kwicara
                                    <br />
                                    <button className="flip-button" onClick={() => handleFlip(144)}>
                                        Bavuga
                                    </button>
                                </div>
                                <div className="card back-card">
                                    <h1 className="backoo">Bavuga</h1>
                                    <br /><br />
                                    Guteka
                                    <br />
                                    <button className="flip-button" onClick={() => handleFlip(144)}>
                                        Ntibavuga
                                    </button>
                                </div>
                            </ReactCardFlip>
                            <ReactCardFlip
                                className="p-4 lg:w-1/4"
                                isFlipped={flips[145]}
                                flipDirection="vertical">

                                <div className="card front-card">
                                    <h1 className="front">Ntibavuga</h1>
                                    <br /><br />
                                    Intebe ye
                                    <br />
                                    <button className="flip-button" onClick={() => handleFlip(145)}>
                                        Bavuga
                                    </button>
                                </div>
                                <div className="card back-card">
                                    <h1 className="backoo">Bavuga</h1>
                                    <br /><br />
                                    Inteko
                                    <br />
                                    <button className="flip-button" onClick={() => handleFlip(145)}>
                                        Ntibavuga
                                    </button>
                                </div>
                            </ReactCardFlip>
                            <ReactCardFlip
                                className="p-4 lg:w-1/4"
                                isFlipped={flips[146]}
                                flipDirection="vertical">

                                <div className="card front-card">
                                    <h1 className="front">Ntibavuga</h1>
                                    <br /><br />
                                    Ingobyi ye
                                    <br />
                                    <button className="flip-button" onClick={() => handleFlip(146)}>
                                        Bavuga
                                    </button>
                                </div>
                                <div className="card back-card">
                                    <h1 className="backoo">Bavuga</h1>
                                    <br /><br />
                                    Ikitabashwa
                                    <br />
                                    <button className="flip-button" onClick={() => handleFlip(146)}>
                                        Ntibavuga
                                    </button>
                                </div>
                            </ReactCardFlip>
                            <ReactCardFlip
                                className="p-4 lg:w-1/4"
                                isFlipped={flips[147]}
                                flipDirection="vertical">

                                <div className="card front-card">
                                    <h1 className="front">Ntibavuga</h1>
                                    <br /><br />
                                    Aho aramirizwa
                                    <br />
                                    <button className="flip-button" onClick={() => handleFlip(147)}>
                                        Bavuga
                                    </button>
                                </div>
                                <div className="card back-card">
                                    <h1 className="backoo">Bavuga</h1>
                                    <br /><br />
                                    Ijabiro
                                    <br />
                                    <button className="flip-button" onClick={() => handleFlip(147)}>
                                        Ntibavuga
                                    </button>
                                </div>
                            </ReactCardFlip>
                            <ReactCardFlip
                                className="p-4 lg:w-1/4"
                                isFlipped={flips[148]}
                                flipDirection="vertical">

                                <div className="card front-card">
                                    <h1 className="front">Ntibavuga</h1>
                                    <br /><br />
                                    Kumuha ikuzo
                                    <br />
                                    <button className="flip-button" onClick={() => handleFlip(148)}>
                                        Bavuga
                                    </button>
                                </div>
                                <div className="card back-card">
                                    <h1 className="backoo">Bavuga</h1>
                                    <br /><br />
                                    Kumuramya
                                    <br />
                                    <button className="flip-button" onClick={() => handleFlip(148)}>
                                        Ntibavuga
                                    </button>
                                </div>
                            </ReactCardFlip>
                            <ReactCardFlip
                                className="p-4 lg:w-1/4"
                                isFlipped={flips[149]}
                                flipDirection="vertical">

                                <div className="card front-card">
                                    <h1 className="front">Ntibavuga</h1>
                                    <br /><br />
                                    Kujya ku musarane
                                    <br />
                                    <button className="flip-button" onClick={() => handleFlip(149)}>
                                        Bavuga
                                    </button>
                                </div>
                                <div className="card back-card">
                                    <h1 className="backoo">Bavuga</h1>
                                    <br /><br />
                                    Gutwikira ibirenge
                                    <br />
                                    <button className="flip-button" onClick={() => handleFlip(149)}>
                                        Ntibavuga
                                    </button>
                                </div>
                            </ReactCardFlip>
                            <ReactCardFlip
                                className="p-4 lg:w-1/4"
                                isFlipped={flips[150]}
                                flipDirection="vertical">

                                <div className="card front-card">
                                    <h1 className="front">Ntibavuga</h1>
                                    <br /><br />
                                    Kujya kwaka akazi
                                    <br />
                                    <button className="flip-button" onClick={() => handleFlip(150)}>
                                        Bavuga
                                    </button>
                                </div>
                                <div className="card back-card">
                                    <h1 className="backoo">Bavuga</h1>
                                    <br /><br />
                                    Gushaka ubuhake
                                    <br />
                                    <button className="flip-button" onClick={() => handleFlip(150)}>
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

export default Ikenshkumwami;
