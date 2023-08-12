import React, { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import axios from "axios";
import "./Ikenshavugooo.css";
import Ikenshkumwamiii from "./Ikenshkumwamiii";
import Ikenshabwinshiii from "./Ikenshabwinshiii";
import Ikenshavugokungomaaa from "./Ikenshavugokungomaaa";
import Ikenshavugokunkaaa from "./Ikenshavugokunkaaa";
import Ikenshicyansiii from "./Ikenshicyansiii";
import Ikeshantunibintuuu from "./Ikeshantunibintuuu";

function Ikenshavugo() {
    const [isOpen, setIsOpen] = useState(false);
    const [flips, setFlips] = useState([false, false, false, false]);
    const [currentFlipIndex, setCurrentFlipIndex] = useState(-1);
    const [ikenshavugoList, setIkenshavugoList] = useState([]);

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
                const response = await axios.get("http://localhost:4050/api/ikenshavugo/ikenshavugo"); // Use axios to fetch data
                setIkenshavugoList(response.data); // Use response.data
            } catch (error) {
                console.error("Error fetching Ikenshavugo data:", error);
            }
        };

        fetchIkenshavugoData();
    }, []);

    return (
        <div>
            <div className="mt-16">
                {/* ... rest of your content ... */}
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

                <Ikenshkumwamiii />
                <br /><br />
                <Ikenshavugokungomaaa />
                <br /><br />
                <Ikenshavugokunkaaa />
                <br /><br />
                <Ikenshicyansiii />
                <br /><br />
                <Ikenshabwinshiii />
                <br /><br />
                <Ikeshantunibintuuu />
                <br /><br />
            </div>
        </div>
    );
}

export default Ikenshavugo;
