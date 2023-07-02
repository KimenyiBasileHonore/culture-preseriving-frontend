import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../Services/Isomero.css';

export default function Indirimbo() {
  const [selectedBox, setSelectedBox] = useState(null);

  const handleBoxClick = (boxId) => {
    setSelectedBox(selectedBox === boxId ? null : boxId);
  };

  const handleBackClick = () => {
    setSelectedBox(null);
  };

  const boxesIndirimbo = [
    {
      id: 1,
      title: "Umwana ni umutware",
      summary: "Umwana, mwana we !\nNaramubonye nda...",
      details: "Umwana, mwana we !\nNaramubonye ndamutangalira\nYarendebye, ndamwunamira\nAnsekeye, ndamuterura ndamudabagiza\n\nUmwana, mwana we !\nYaransabye, sinamwima\nNsanga ali umuntu wo gukorera\nAli umuntu wo kubahwa\n\nUmwana, mwana we !\nNasanze koko ali umutware\nBoza ibirenge, bagasiga amavuta\nBagasokoza umusatsi.\n\nNasanze umwana ali umwami\nUfite umutima wera\nUmwami uhakwa agahaka\nUmwami ufite ubuntu, uhora akeye.\n\nAliko yashavuzwa...\nInkuba zigakubita,\nImirabyo igahum(b)ya amaso,\nIbiyaga bikibirindura\n\nUmwana ni umutware\n\nMumutege amatwi\nAmasomo n'umutima\nAbafitiye ubutumwa buhanitse\nNtimukamusuzugure\nNgo mumushavurire,\n\nMumusekere, ahore asusurutse.\n\nIyeeeehh...\nUmwana ni umutware.",
    },
    {
      id: 2,
      title: "",
      summary: "",
      details: "",
    },
  ]

    
  const handleGoBack = () => {
    setSelectedBox(null);
  };


  const breakDownDetails = (details) => {
    const paragraphs = details.split('\n');

    return paragraphs.map((paragraph, index) => (
      <p key={index}>
        {paragraph.split('\n\n').map((line, lineIndex) => (
          <React.Fragment key={lineIndex}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    ));
  };


  return (
    <div>
        
        <div className="container mt-16">
            <h1 className="flex section-heading">Indirimbo</h1>
            <p>
              Ibyivugo ni nk' ibisingizo bisingiza intwari ku rugamba, bigasingiza intwaro, zikarata n'ubutwari bwabo. Ibyivugo by' imyato, byabaga ari ibyivugo birebire kandi bikagira ibice bitaga "IMYATO".
            </p>
            <br />
            <div >
              <div className="mt-16">
                {selectedBox ? (
                  <div >
                    <div className="expanded-box">

                      <h3>{boxesIndirimbo[selectedBox - 1].title}</h3>

                      <div className="box-details">

                        <button className="back-button" onClick={handleGoBack}>
                          <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                        {breakDownDetails(boxesIndirimbo[selectedBox - 1].details)}
                      </div>
                      <div className="overlay" onClick={handleBackClick} />
                    </div>
                  </div>
                ) : (
                  <div className="boxes-container  ">
                    {boxesIndirimbo.map((box) => (
                      <div
                        key={box.id}
                        className="box rounded-lg  "
                        onClick={() => handleBoxClick(box.id)}
                      >

                        <h3 className='title-font sm:text-1xl text-xl font-medium text-gray-900 mb-3'>{box.title}</h3>
                        <p>{box.summary}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

          </div>

    </div>
  );
}