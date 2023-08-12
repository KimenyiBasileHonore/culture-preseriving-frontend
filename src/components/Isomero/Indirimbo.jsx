import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './Isomero.css';



export default function Imiganimiremire() {
  const [selectedBox, setSelectedBox] = useState(null);
  const [boxesIbyivugo, setBoxesIbyivugo] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API using Axios
    axios.get('http://localhost:4050/api/indirimbo/indirimbo')
      .then(response => setBoxesIbyivugo(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleBoxClick = (boxId) => {
    console.log("Selected box:", boxId);
    setSelectedBox(boxId);
  };

  const handleGoBack = () => {
    setSelectedBox(null);
  };

  const ExpandedBox = ({ boxData }) => {
    const { title, details } = boxData;

    return (
      <div className="expanded-box">
        <button className="back-button" onClick={handleGoBack}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <h3>{title}</h3>
        <div className="box-details">
          <p>{details}</p>
        </div>
        <div className="overlay" onClick={handleGoBack} />
      </div>
    );
  };

  return (
    <div>
      {/* Your other JSX code here */}
      <div className="mt-16">
      {/* <h1 className="section-heading">ISOMERO</h1>
        <hr />
        <br />
        <p>
          Nkuko amateka y’ubuvanganzo nyarwanda abigaragaza, umugani n’ipfundo ry’amagambo...
        </p>
        <br /> */}
      </div>
      <div>
        <section className="text-gray-600 body-font">
          <div className="container">
          <h1 className="flex section-heading">Indirimbo</h1>
            <p>
              Ibyivugo ni nk' ibisingizo bisingiza intwari ku rugamba, bigasingiza intwaro, zikarata n'ubutwari bwabo...
            </p>
            <br />
            <div>
              <div className="mt-16">
                {selectedBox !== null ? (
                  <ExpandedBox boxData={boxesIbyivugo[selectedBox]} />
                ) : (
                  <div className="boxes-container">
                    {boxesIbyivugo.map((box, index) => (
                      <div
                        key={box._id}
                        className="box rounded-lg"
                        onClick={() => handleBoxClick(index)}
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
        </section>
      </div>
    </div>
  );
}




// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// import '../Services/Isomero.css';

// export default function Imiganiabana() {
//   const [selectedBox, setSelectedBox] = useState(null);

//   const handleBoxClick = (boxId) => {
//     setSelectedBox(selectedBox === boxId ? null : boxId);
//   };

//   const handleBackClick = () => {
//     setSelectedBox(null);
//   };

//   const boxesImiganiabana = [
//     {
//       id: 1,
//       title: "Isega n'imbwa",
//       summary: "Isega inanutse yabonye imbwa ibyib...",
//       details: "Isega inanutse yabonye imbwa ibyibushye irayibaza, iti , \"ko nduzi ubyibushye wabyibuhijwe niki, ko jyewe nabuze ikintunga?\" Imbwa irayisubiza iti, \"aho mba haba ibyo kurya byinshi, umurimo wanjye ni ukurinda ibisambo, kandi databuja arankunda cyane; nunkurikira ndajya kugusabira ibiryo.\"\nBigenda biganira. Isega iza kubona ikintu mu ijosi ry'imbwa, irayibaza iti , \"icyo ni iki wambaye mu ijosi?\" Imbwa irayisubiza iti , \"ahari ni umunyururu wanjye ubonye.\" Isega iti , \"simbizi. Ese wo umara iki?\" Imbwa irayisubiza iti , \"iyo bashaka ko ntirukana abantu, banshumika ukwanjye, bakanzanira inyama n'ibindi biryo byiza.\"\nIsega irayisubiza iti , \"mugenzi wanjye, nkunda ibiryo cyane, ariko kubirira ku nkomo nsanze ntabishobora. Urabeho.\"\n\n\"Kwishyira ukizana biruta kure ubukungu buboshye nyirabwo.\"",
//     },
//     {
//       id: 2,
//       title: "Isha n'inzovu",
//       summary: "Umunsi umwe isha yaganiraga n'izindi...",
//       details: "Umunsi umwe isha yaganiraga n'izindi nyamaswa, nuko iza kuzibwira, iti, \"aho mwari muzi ko naguze ya nzovu nini muzi, none ikaba inkorera?\" Impongo yumvise ayo magambo iratangara cyane, iti, \"ni uko uvuze? Sigaho kutubeshya! Ndetse ejo kare tuzayibariza!\"\nNtibyatinze mu museso wa kare, impongo irazinduka no kwa Nzovu iti, \"ejo isha yatubwiye ko yakuguze, ngo none urayikorera, biradutangaza cyane. Twari tuzi ko inyamaswa twese tugomba kukubaha no kugutinya, none ni ibyo?\nIkibabaje kandi yabivuze hari amasatura, ingurube, ibinyogote n'izindi nyamaswa ziciye bugufi.\" Inzovu yumvise ayo magambo birayitangaza, irarakara, bituma yiyemeza kubaza isha icyayiteye kuvuga ayo magambo ateye isoni. Irahurura na yo.\nIsha ikirabukwa inzovu itangira kwirwaza. Iraniha cyane, ivuga nk'iyarembye. Iti, \"ikirenge we! Imbavu we! Umutwe we! Ayi data we!\" Ubwo niko yigaragura hasi. Inzovu ibonye isha imerewe nabi igira impuhwe, ariko ntibyayibuza kuyibaza icyatumye itinyuka kuyisebya mu ruhame rw'izindi nyamaswa.\nIti, \"niko sha ngo waranguze ungira umugaragu wawe? Ngaho se nikavuge!\" Isha irasubiza iti, \"Nyagasani ni nde wanteranyije atya?\" Inzovu irayisubiza iti, \"inyamaswa mwari kumwe ejo ni zo zabimbwiye kandi urazibuka.\"\nNuko isha irayibwira iti, \"dore uko meze ubu nararembye, kandi maze iminsi ntaho njya. Ibyo se si ibikwereka ko ari abanzi bashaka kunteranya na we? Nkurahire, sinigeze nabirota mu nzozi!\" Inzovu yumva igize impuhwe, ariko ntiyashirwa. Iti, \"ngwino nguheke tujyane kubaza impongo, na yo mwari hamwe ejo, menye uvuga ukuri.\"\nInzovu irayiheka.\n\nMu nzira byahura n'izindi nyamaswa, isha ikagamika, kugira ngo izereke ko ihatse inzovu. Inyamaswa zibibonye ziti, \"ni koko isha yahatse inzovu, dore irayihetse!\" Inyamaswa yahura n'indi ikabiyitekerereza, maze iyo nkuru ikwira hose.\nInyamaswa zirashika na zo ngo zihere amaso, zishire amatsiko. Inzovu ikomeza urugendo ihetse ya sha, bitaragera aho impongo ituye isha yibaza uko iri buhindure ibyo yavugiye ku mugaragaro. Isanze bitaza gushoboka yigira inama yo gucika.\nUko yakicaye ku mugongo w'inzovu iritunatuna irazimiza igwa mu ishyamba irihisha. Inzovu ntiyamenya ibyabaye, ikomeza kugenda. Igeze aho impongo iri, ngo yururutse umurwayi, isanga yagiye nk'ejo.\nIrumirwa kandi ikorwa n'isoni, kuko nta nyamaswa n'imwe yali isigaye itaramenya iyo nkuru.\nIsha yari yayirushije ubwenge.\n\n\"Ubugabo si ubutumbi.\"",
//     },
//     {
//       id: 3,
//       title: "Umuyaga n'izuba",
//       summary: "Umuyaga n'izuba byajyaga bitongana im...",
//       details: "Umuyaga n'izuba byajyaga bitongana iminsi yose, kimwe kikabwira ikindi ko kikirusha amaboko. Bukeye bibona umuntu wihitira. Umuyaga uti, \"ngiye kumwambura iriya kanzu ye, nandusha imbaraga wowe ugashobora kuyimwambura, ndemera ko na we uzindusha.\" Izuba riremera.\n\nUmuyaga urahuha cyane, ugerageza kuyimwambura. Wa muntu aherako arayikomeza n'amaboko yombi, yanga kuyirekura. Hanyuma izuba riracana cyane; ubushyuhe buramwica, aherako yikuramo ikanzu, ashaka aho igicucu kiri agira ngo yikingemo. Izuba riti, \"nturuzi rero ko koroshya biruta gukoresha kiboko?\" \n\nAkagabo gahimba akandi kataraza.",
//     },
//     {
//       id: 4,
//       title: "",
//       summary: "",
//       details: "",
//     },
//     {
//       id: 5,
//       title: "",
//       summary: "",
//       details: "",
//     },
//     {
//       id: 6,
//       title: "",
//       summary: "",
//       details: "",
//     },
//     {
//       id: 7,
//       title: "",
//       summary: "",
//       details: "",
//     },
//     {
//       id: 8,
//       title: "",
//       summary: "",
//       details: "",
//     },
//     {
//       id: 9,
//       title: "",
//       summary: "",
//       details: "",
//     },
//     {
//       id: 10,
//       title: "",
//       summary: "",
//       details: "",
//     },
//   ]


    
//   const handleGoBack = () => {
//     setSelectedBox(null);
//   };


//   const breakDownDetails = (details) => {
//     const paragraphs = details.split('\n');

//     return paragraphs.map((paragraph, index) => (
//       <p key={index}>
//         {paragraph.split('\n\n').map((line, lineIndex) => (
//           <React.Fragment key={lineIndex}>
//             {line}
//             <br />
//           </React.Fragment>
//         ))}
//       </p>
//     ));
//   };


//   return (
//     <div>
//         <div className="container mt-16">
//             <h1 className="flex section-heading">Imigani y' abana</h1>
//             <p>
//               Ibyivugo ni nk' ibisingizo bisingiza intwari ku rugamba, bigasingiza intwaro, zikarata n'ubutwari bwabo. Ibyivugo by' imyato, byabaga ari ibyivugo birebire kandi bikagira ibice bitaga "IMYATO".
//             </p>
//             <br />
//             <div >
//               <div className="mt-16">
//                 {selectedBox ? (
//                   <div >
//                     <div className="expanded-box">

//                       <h3>{boxesImiganiabana[selectedBox - 1].title}</h3>

//                       <div className="box-details">

//                         <button className="back-button" onClick={handleGoBack}>
//                           <FontAwesomeIcon icon={faArrowLeft} />
//                         </button>
//                         {breakDownDetails(boxesImiganiabana[selectedBox - 1].details)}
//                       </div>
//                       <div className="overlay" onClick={handleBackClick} />
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="boxes-container  ">
//                     {boxesImiganiabana.map((box) => (
//                       <div
//                         key={box.id}
//                         className="box rounded-lg  "
//                         onClick={() => handleBoxClick(box.id)}
//                       >

//                         <h3 className='title-font sm:text-1xl text-xl font-medium text-gray-900 mb-3'>{box.title}</h3>
//                         <p>{box.summary}</p>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>

//           </div>

//     </div>
//   );
// }

// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// import '../Services/Isomero.css';

// export default function Indirimbo() {
//   const [selectedBox, setSelectedBox] = useState(null);

//   const handleBoxClick = (boxId) => {
//     setSelectedBox(selectedBox === boxId ? null : boxId);
//   };

//   const handleBackClick = () => {
//     setSelectedBox(null);
//   };

//   const boxesIndirimbo = [
//     {
//       id: 1,
//       title: "Umwana ni umutware",
//       summary: "Umwana, mwana we !\nNaramubonye nda...",
//       details: "Umwana, mwana we !\nNaramubonye ndamutangalira\nYarendebye, ndamwunamira\nAnsekeye, ndamuterura ndamudabagiza\n\nUmwana, mwana we !\nYaransabye, sinamwima\nNsanga ali umuntu wo gukorera\nAli umuntu wo kubahwa\n\nUmwana, mwana we !\nNasanze koko ali umutware\nBoza ibirenge, bagasiga amavuta\nBagasokoza umusatsi.\n\nNasanze umwana ali umwami\nUfite umutima wera\nUmwami uhakwa agahaka\nUmwami ufite ubuntu, uhora akeye.\n\nAliko yashavuzwa...\nInkuba zigakubita,\nImirabyo igahum(b)ya amaso,\nIbiyaga bikibirindura\n\nUmwana ni umutware\n\nMumutege amatwi\nAmasomo n'umutima\nAbafitiye ubutumwa buhanitse\nNtimukamusuzugure\nNgo mumushavurire,\n\nMumusekere, ahore asusurutse.\n\nIyeeeehh...\nUmwana ni umutware.",
//     },
//     {
//       id: 2,
//       title: "",
//       summary: "",
//       details: "",
//     },
//   ]

    
//   const handleGoBack = () => {
//     setSelectedBox(null);
//   };


//   const breakDownDetails = (details) => {
//     const paragraphs = details.split('\n');

//     return paragraphs.map((paragraph, index) => (
//       <p key={index}>
//         {paragraph.split('\n\n').map((line, lineIndex) => (
//           <React.Fragment key={lineIndex}>
//             {line}
//             <br />
//           </React.Fragment>
//         ))}
//       </p>
//     ));
//   };


//   return (
//     <div>
        
//         <div className="container mt-16">
//             <h1 className="flex section-heading">Indirimbo</h1>
//             <p>
//               Ibyivugo ni nk' ibisingizo bisingiza intwari ku rugamba, bigasingiza intwaro, zikarata n'ubutwari bwabo. Ibyivugo by' imyato, byabaga ari ibyivugo birebire kandi bikagira ibice bitaga "IMYATO".
//             </p>
//             <br />
//             <div >
//               <div className="mt-16">
//                 {selectedBox ? (
//                   <div >
//                     <div className="expanded-box">

//                       <h3>{boxesIndirimbo[selectedBox - 1].title}</h3>

//                       <div className="box-details">

//                         <button className="back-button" onClick={handleGoBack}>
//                           <FontAwesomeIcon icon={faArrowLeft} />
//                         </button>
//                         {breakDownDetails(boxesIndirimbo[selectedBox - 1].details)}
//                       </div>
//                       <div className="overlay" onClick={handleBackClick} />
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="boxes-container  ">
//                     {boxesIndirimbo.map((box) => (
//                       <div
//                         key={box.id}
//                         className="box rounded-lg  "
//                         onClick={() => handleBoxClick(box.id)}
//                       >

//                         <h3 className='title-font sm:text-1xl text-xl font-medium text-gray-900 mb-3'>{box.title}</h3>
//                         <p>{box.summary}</p>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>

//           </div>

//     </div>
//   );
// }