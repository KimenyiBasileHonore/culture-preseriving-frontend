import React, { useState, useEffect } from 'react';
import './Report.css';
import CircleBar from '../Admin/CircleBar';

export default function Report() {
    const [ikenshavugoViewCount, setIkenshavugoViewCount] = useState(0);
    const [incamarengaViewCount, setIncamarengaViewCount] = useState(0);
    const [ibisakuzoViewCount, setIbisakuzoViewCount] = useState(0);
    const [isomeroViewCount, setIsomeroViewCount] = useState(0);
    const [imiganiViewCount, setImiganiViewCount] = useState(0); 

    useEffect(() => {
        const storedIkenshavugoViewCount = localStorage.getItem('ikenshavugoViewCount');
        const storedIncamarengaViewCount = localStorage.getItem('incamarengaViewCount');
        const storedIbisakuzoViewCount = localStorage.getItem('ibisakuzoViewCount');
        const storedIsomeroViewCount = localStorage.getItem('isomeroViewCount');
        const storedImiganiViewCount = localStorage.getItem('imiganiViewCount'); 

        setIkenshavugoViewCount(storedIkenshavugoViewCount ? parseInt(storedIkenshavugoViewCount) : 0);
        setIncamarengaViewCount(storedIncamarengaViewCount ? parseInt(storedIncamarengaViewCount) : 0);
        setIbisakuzoViewCount(storedIbisakuzoViewCount ? parseInt(storedIbisakuzoViewCount) : 0);
        setIsomeroViewCount(storedIsomeroViewCount ? parseInt(storedIsomeroViewCount) : 0);
        setImiganiViewCount(storedImiganiViewCount ? parseInt(storedImiganiViewCount) : 0); 
    }, []);

    return (
        <div className="report-container">
            <div className="card-row">

                <div className="card">
                    <CircleBar percentage={(imiganiViewCount / 100) * 100} />
                    <p className="view-count">Imigani migufi has been viewed {imiganiViewCount} times.</p>
                </div>
                <div className="card">
                    <CircleBar percentage={(ikenshavugoViewCount / 100) * 100} />
                    <p className="view-count">Ikenshamvugo has been viewed {ikenshavugoViewCount} times.</p>
                </div>
                <div className="card">
                    <CircleBar percentage={(incamarengaViewCount / 100) * 100} />
                    <p className="view-count">Incamarenga has been viewed {incamarengaViewCount} times.</p>
                </div>
            </div>

            <div className="card-row">
                <div className="card">
                    <CircleBar percentage={(ibisakuzoViewCount / 100) * 100} />
                    <p className="view-count">Ibisakuzo has been viewed {ibisakuzoViewCount} times.</p>
                </div>
                <div className="card">
                    <CircleBar percentage={(isomeroViewCount / 100) * 100} />
                    <p className="view-count">Isomero has been viewed {isomeroViewCount} times.</p>
                </div>
            </div>

        </div>
    );
}
