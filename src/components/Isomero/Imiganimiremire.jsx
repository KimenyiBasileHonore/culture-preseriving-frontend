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
    axios.get('http://localhost:4050/api/imiganimiremire/imiganimiremire')
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
    const formattedDetails = details.replace(/\\n/g, '\n'); // Convert stored \n to actual line breaks
  
    return (
      <div className="expanded-box">
        <button className="back-button" onClick={handleGoBack}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <h3>{title}</h3>
        <div className="box-details">
          {formattedDetails.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="overlay" onClick={handleGoBack} />
      </div>
    );
  };

  return (
    <div>
      {/* Your other JSX code here */}
      <div className="mt-16">
      </div>
      <div>
        <section className="text-gray-600 body-font">
          <div className="container">
          <h1 className="flex section-heading">
      <span className="highlight">IMIGANI</span><span className="spacer"></span> <span className="accent">MIREMIRE</span>
    </h1>
            <p>
            Imigani miremire ivuga ibintu bitabayeho kandi babonaga ko bitanashoboka,ariko bakabivuga nk’ibyabayeho. Nk’uko amateka y’ubuvanganzo nyarwanda abigaragaza,imigani miremire ibarirwa mu buvanganzo nyemvugo bwo muri rubanda.
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

// export default function Imiganimiremire() {
//   const [selectedBox, setSelectedBox] = useState(null);

//   const handleBoxClick = (boxId) => {
//     setSelectedBox(selectedBox === boxId ? null : boxId);
//   };

//   const handleBackClick = () => {
//     setSelectedBox(null);
//   };

  
//   const boxesImigani = [
//     {
//       id: 1,
//       title: "Inzoka n'Igikeri",
//       summary: "Umunsi umwe inzoka yagiye gushaka icy...",
//       details: "Umunsi umwe inzoka yagiye gushaka icyo irya, iraheba. Ihindukiye isanga igikeri mu iriba irakibwira iti, \"nzanira amazi yo kunywa.\" Igikeri kirayisubiza kiti, \"simfite ikibindi cyo kuvomesha.\" Inzoka iti, \"pfa kuzamukayo akuri munda aramara inyota.\" Igikeri kiratekereza... Hashize akanya gato kirayisubiza kiti, \"nabera sindabona inzoka inywa amazi yo munda y'igikeri, ahari urashaka inyama yanjye!\" \nInzoka yumvise ayo magambo, ibura icyo isubiza, irasimbuka no mu iriba, ngo dumburi! Iribira. Igikeri nacyo cyogera hejuru. Inzoka yuburutse, igikeri kiribira. Umukino ukomeje utyo, igikeri kiratagangara. Hanyuma giturumbuka mu mazi, gifata agasozi, cyiroha mu mwobo w'intozi, ziracyanjama, nawo kiwuturumbukamo, kijya kwicukurira uwacyo. Inzoka ije igikurikiye, yiroha muri wa mwobo w'intozi.\nIgikeri kibonye ko imaze guhenengeramo, kirahindukira, wa mwobo w'intozi kiwegekaho ibuye rinini, kirahomera. Intozi zidwinze ya nzoka, icika isohoka, ariko ibura aho inyura. Intozi zirayirumagura, zigera aho ziyica, zirayirya; igikeri gikira gityo.\nAbanyarwanda baca umugani ngo, \"Umwanzi agucira akobo, Imana igucira akanzu.\"",  
//     },
   
//      {
//       id: 2,
//       title: "Ishyari n'ubuhemu",
//       summary: "Umugabo Yuli yabanaga neza n'umu...",
//       details: "Umugabo Yuli yabanaga neza n'umugore we, nta ntonganya, nta mwiryane. Umunsi umwe Yuli arazinduka, asiga umugore we imuhira wenyine.\nBamwe mu baturanyi be ariko bakamugirira ishyari. Ntibukeye kabiri, baraza babwira muka Yuli bati, \"intambara yaciye ibintu, abantu baraterwa ntibasahure, keretse amafaranga bihambiriyeho.\nNone rero zana iyo farasi yanyu, tuyibagurishirize, mwibonere udufaranga.\" Undi ngo abyumve akuka umutima, ati, \"ngaho nimuyijyane, nta kundi byagenda; mubanguke.\"\nBarayijyana barayigurisha, amafaranga bayakubira mu mifuka, muka Yuli ntiyongera kubaca iryera.\n\nHaciye iminsi itanu, Yuli aza gutahuka. Umugore amutekerereza uko abo bahemu bamubeshye; arumirwa. Arahaguruka akurikirana bya bisambo.\nHashize icyumweru, arabifata, abishyikiriza ubucamanza. Baraburana Yuli nanone arabatsinda. Bamusubiza amafaranga aguze ifarasi nziza, bamwongereraho n'indishyi y'akababaro kandi bafungwa amezi atandatu.\n\nIbyo bisambo byahaniwe ukuri: byarabeshye, biriba, bikura na muka Yuli umutima, ndetse wenda hari n'abandi bantu byariganyije.\n\n\"Ikinyoma gihira bake!",
//     },
//     {
//       id: 3,
//       title: "Impyisi n'Imana",
//       summary: "Impyisi yari hamwe n'izindi nyamas...",
//       details: "Impyisi yari hamwe n'izindi nyamaswa, maze irebye umurizo wayo isanga utameze nk'uw'izindi. Ako kanya ifata umugambi wo kuzajya kubaza Imana icyatumye iyiha umurizo mubi kandi udasa n'uw'izindi nyamaswa. Iryo joro ntiyasinzira; bucya yageze ku Mana. Irayibwira, iti, Nyagasani, ntiwambwira impamvu yatumye umpa umurizo utameze nk'iyindi? Ese wabitewe n'iki?\" Imana irayisubiza iti, \"nyamara, ndasanga naraguhaye umurizo ugukwiriye.\nAriko rero ubwo utawishimiye, ukaba ushaka urutaho, ndabanza nguhe icyo ukora maze nugaruka wagishoboye nguhindurire umurizo nguhe uwo wifuza.\" Impyisi iremera. Maze Imana ishaka igisembe cy'intama, iragifata ikizirika ku gahanga k'jyo mpyisi. iti, \"ngaho genda, ntukore kuri iki gisembe uze kukinzanira nimugoroba.\" Impyisi iragenda. Impumuro y'icyo gisembe iyitera ipfa. Irenze umusozi wa mbere amerwe aba arayishe. Ariko irihangana irakomeza. Igeze ku musozi wa kabiri, iba itangiye kukirigata.\nKu musozi wa gatatu, amerwe aba arayirembeje itagishoboye kwihangana; iti, \"hoshi! Izina ry' ubupyisi rirakampama! Urubwa ruruta ububwa.\" Ako kanya cya gisembe ikimira bunguri. \n\nNimugoroba igaruka ku Mana isoni zayishe, yabuze uko yifata. Imana iyibonye iti, \"cya gisembe kiri he?\" Impyisi irasubiza iti, \"amerwe n'inzara byanyishe, ngiye gupfa ndakirya!\" Imana iti, \"nuko rero! Ubwo wakiriye, ntushobore kwihangana ngo ukigarure, wowe n'izindi mpyisi zose muzahorana iteka umurizo nk'uwo.\" Impyisi itaha ityo, ntiyongera kubaza Imana iby'umurizo wayo; igumana uwo yari isanganywe.\n\nMu kinyarwanda baca umugani ngo, \"Iraguha ntimugura.\"",
//     },
//     {
//       id: 4,
//       title: "Inkuba n'igikeri",
//       summary: "Nkuba yibereye aho agatura mu ijur...",
//       details: "Nkuba yibereye aho agatura mu ijuru, Gikeri akaba mu nsi. Gikeri yagenda akagenda asimbuka. Nkuba akibera hejuru agakubita hirya no hino.\nUmunsi umwe aza gukubita ajya hasi, asanga Gikeri yarubatse, arasakara, afite urugo rukomeye. Nkuba abaza Gikeri ati, \"ese Gikeri, ko wubatse utya, wowe usakaza iki, ubwatsi ubukura he? Ubutemesha iki?\"\nGikeri ati, \"mfite umuhoro wanjye ngomba gusakara inzu yanjye simvirwe.\" Nkuba ati, \"nanjye rero ndi umukene, untize uwo muhoro wawe nitemere ubwatsi njyane ku ijuru, njye kwisakarira inzu. Umugore n'abana ntibagira aho bicara.\"\nCyakora Gikeri abyumva vuba, abaza Nkuba ati, \"ese Nkuba ndaguha umuhoro wanjye nzawushyikirizwe n'iki, ko ureba ntagira amaguru?.\" Nkuba ati, \"nzawuzana vuba.\" Gikeri ahereza Nkuba umuhoro, aragenda atema ubwatsi.\n\nAriko ubwo Nkuba yatemaga ubwatsi, Gikeri yaribwiraga ati, \"ndabizi, Nkuba ni umuntu ugira amahane, kandi ntazongera kugera ino ubwo ashyikiriye umuhoro wanjye.\" Gikeri aranyaruka yigira mu kiba cy'ubwatsi. Nkuba akubita ubwatsi abugeza mu ijuru, abutura ku kibero cy'inzu iwe.\nUmugore ati, \"ese noneho ubu bwatsi ubukuye he?\" Undi ati, \"wa mugore we ceceka. Ibintu mbonye ntibigira uko bisa. Nahuye n'umugabo Gikeri ampereza uyu muhoro, ariko nzarebe aka Gikeri na Nkuba. Ntabwo rwose uyu muhoro nzawumusubiza.\nReka njye nitemera ubwatsi, nisakarize inzu, ntabwo Gikeri azagera ino\". Umugore ati, \"uzaba umuhemukiye cyane.\" Undi ati, \"reka da, Ntabwo namuhemukira.\" Nkuba akajya aca ubwatsi, arasakara, amererwa neza.\n\nGikeri aranyaruka yitura mu kibero cy'inzu, noneho Nkuba akibwira ngo ntabwo ibyo avuga Gikeri abyumva. Gikeri yibera ahongaho, iminsi munani basezeranye igeze, Gikeri aranyaruka ajya mu irembo kwa Nkuba. Arakorora. Yemwe abo kwa Nkuba?\nNkuba ati, \"yee! Nimwumve abo bantu!\" Ati, \"sinzi umpamagaye.\" Gikeri arakorora. \"Erega ni jye Gikeri. Umuhoro wanjye warawutindanye, none nari nje kuwureba.\"\n\nUndi ati, \"koko iminsi ibaye miremire. Ariko utahe usubire imuhira, nanone iminsi ni umunani, uwa cyenda, nkakuzanira umuhoro wawe.\" Gikeri yisubirira mu kibero cy'inzu. Nkuba yibera aho. Atarisha ibitoki birashya, barenga.\nInzoga imaze gushya, abwira umugaragu we ati, \"genda ujye guca ibihunda, uzane n'urutete utekere inzoga tugende, nshyire Gikeri umuhorowe ataziyahura.\" Ubwo Gikeri aramwumva. Umugaragu aragenda azana ibihunda n'urutete araza atekera inzoga. \nUko atekera Gikeri yiterera muri rwa rutete. Noneho umugaragu arikorera, Nkuba arakubita, umugaragu na shebuja bitura ku isi.\n\nUmugaragu aragenda atura inzoga mu nzu. Gikeri ava muri rwa rutete ajya ku buriri. Umugaragu asubira ku irembo asanga shebuja. Shebuja ati, \"ese wahamagaye?\" Umugaragu ati, \"nahamagaye databuja, ariko nta muntu wanyitabye.\"\nNgo agere ku irembo arongera arahamagara ati, \"yemwe kwa Gikeri?\" Gikeri ati, \"yee! Arakorora. Nta muntu umpamagave?\" Bati, \"arahamagaye. Ni Nkuba waje kugutarurira umuhoro.\" Gikeri abyuka vuba vuba, ati, \"ni uko, ni uko. Ibitotsi ni umwana w'undi ga! Nari nsinziriye\".\n\nAherako arabyuka, ajya mu kirambi. Arakorora. \"Mbega mwanzaniye inzoga?\" Bati, \"twakuzaniye inzoga y'ishimwe kandi twakuzaniye n'umuhoro wawe.\" Banywa inzoga. Barangije bamubwira imisango yayo. Birangiye Nkuba n'umugaragu we bisubirira mu ijuru, Gikeri asigara iwe n'umuhoro we.\n\nSi jye wahera hahera Nkuba na Gikeri.",
//     },
//     {
//       id: 5,
//       title: "Cacana",
//       summary: "Cacana yari mukuza, yari mukoza...",
//       details: "Cacana yari mukuza, yari mukoza. Yaje ntinyishi kwa Bacondo, arabahamagara, arababwira ati, \"yemwe bene urugo, ntimushaka kubaga, nkabatiza intorezo n'umuhoro, mukampa ikibaro?\"\nBaramukubita, aragenda n'i Gatovu kwa Rukangamiheto rwa Rwogera ati, \"yemwe bene urugo, ntimushaka kubaga, nkabatiza intorezo n'umuhoro, mukampa ikibaro?\"\nBaramukubita aragenda. Yambuka Akanyaru, ajya kwa Cakara ati, \"yemwe bene urugo, ntimushaka kubaga, nkabatiza intorezo n'umuhoro, mukampa ikibaro?\" Bati, \"inkoni ntuyizira.\"\nArashogoshera n'i Bugesera, ku rwobo rwa Bayanga, ahasanga urupfu ruragiye inka zarwo. Ati, \"yewe nyir'inka, ntushaka kubaga nkagutiza intorezo n'umuhoro, ukampa ikibaro?\" Urupfu ruti, \"ndabishaka.\"\nCacana ararubwira ati, \"nguriza inka yo kubaga.\" Urupfu ruti, \"ngiyo ndayikugurije.\" Cacana atwara inka y'urupfu. I Gitisi na Nyamagana. Igihe agiye kuyikubita Intorezo,ahusha mu cyico, aboneza mu kuguru. Ahamagara umwana we ati, \"ngwino hano umfashe.\" Umwana araza.\nCacana agiye gukubita intorezo ayirimiza umwana ku ijosi, aramuhirika; inka na yo irapfa. Inyama Cacana n'umugore we baziryaho. Urupfu rubwira Cacana ruti, \" nyishyura inka yanjye wa kagabo we!\" Icyo gihe inkono ikaba irahiye. Cacana ayikubita ku mutwe ati, \" henga nzagusigire urupfu!\"\n\nAramanuka no mu Misizi ya Musumba. Aratura, arakaraba ngo arye. Urupfu ruramubwira ruti, \"ujya kurya akanjye arabanza akanyishyura.\" Umuhungu muzima arahaguruka, arikorera, afumyamo. Ageze i Gitwiko na Rukambura, arakaraba ngo arye; urupfu ruti, \" Bu... \" Cacana ati, \" Pyo...\"\nAgutahira i Runda na Gihara, aracumbika. Ibyo kurya arabishyushya, arangije arakaraba ngo arye. Urupfu ruba rurahashinze ruti, \"nyishyura.\" Cacana arataraguriza, amanuka Gihara, yambuka uruzi. Aterera Bugaragara, ageze mu mpinga, aratura, arakaraba ngo arye; urupfu ruti, \"naharaye; banza unyishyure.\"\nCacana amanuka Bugaragara, aterera Shyorongi, yikubita mu iteme, mu Gitabage cya Mbogo na Nyabuko; aterera Kirungu, ageze mu mpinga ya Remera, aratura, arakaraba ngo arye. Urupfu ruti, \"ujya kurya akanjye arabanza akishyura.\"\nCacana abwira urupfu ati, \"reka ngusige ikirari cyume!\" Amanuka Nyundo, yikubita mu Muyanza, azamuka Zoko, ageze mu mpinga ya Zoko, aratura, arakaraba ngo arye. Urupfu ruti, \"ujya kurya akanjye arabanza akanyishyura. Komeza turuhanye!\"\nCacana ati, \"ndacogoye.\" Aterurana n'urupfu, akirana na rwo. Urupfu ruramuterura rumucinya hasi. Cacana na we araruterurano hasi ngo Piii! Maze rurakotana, rubura gica. Imana irahagoboka, izana inka ebyiri, iziha Cacana. Cacana azishyura urupfu. Barakiranuka. Urupfu rubwira Cacana ruti, \"enda noneho nkugabire izi nka!\" Cacana arazakira.\nUrupfu ruti, \"mpa inka zanjye.\" Cacana ahungana za nka, ariko yiruka ay'ubusa urupfu rumufata mpiri, rumugwa gitumo, ruramwica.\n\nSijye wahera hahera umugani.",
//     },
//     {
//       id: 6,
//       title: "Bwenge buke",
//       summary: "Kera habayeho umugabo ahagurukana n'umwa...",
//       details: "Kera habayeho umugabo ahagurukana n'umwana we barongoye indogobe yabo bajya kuyigurisha. Mu nzira bagenda, baca ku bakobwa bavomaga, babaha urw'amenyo, bati, \"mbega bano bagabo, indogobe ibari imbere iridegembya, banze kuyijyaho ngo ibaheke!\" Nyamugabo abyumvise, agira umuhungu arayimwuriza iramuheka. Bisunitse, baca ku bakambwe bicaye ku nzira. Umukambwe umwe aravuga ati, \"dore iryavuzwe riratashye, nta musore ucyubaha umukambwe! Reka nawe umusore yihekewe n'indogobe, naho ingirwa se arahata inzira ibirenge.\"\n\nNyamugabo aritaye mu gutwi umwana ayimuhubuzaho, ayicaraho, barabushogoshera. Nyuma bongera guhura n'abandi bantu, baramubwira bati, \"shyuuu...! Cyo mubyeyi gito! Usiga umwana wawe kandi uruzi ananiwe asigaye agenza inyuma y'ibirenge, atabasha gutera intambwe nk'indogobe yawe?\" Nyamugabo ntiyumvise atyo, yuriza umuhungu we, amwicaza inyuma ye ku ndogobe. Bagiye gusingira umusozi baganagaho, bahura n'umuntu arababaza ati, \"ese iyo ndogobe ni iyanyu?\" Bati, \"ni iyacu.\" Na we ati, \"jye nagira ngo ni inyibano! Irapfuye rero ntigishobora kubaheka mwembi. Hasigaye aho kuyiheka ari mwe!\"\n\nNyamugabo ati, \"reka tugerageze.\" Bayiboha amaboko n'amaguru, bayita ku maboko baraheka. Ngo bagere ku mugezi, abo bahasanze inkwenene bayivaho, barakokereza babaseka. Indogobe uko yakumvise urusaku, ishya ubwoba irashya imigeri, ihubuka mu maboko, no mu mugezi ngo, \"dumbuli!\" Imira nkeri, irahwera.\n\nNyamugabo n'umuhungu we basubira imuhira bimyiza imoso, bagenda babwirana bati, \"twishinze ibyo abantu bagumya kutubwira, none dore itungo ryacu rirabizize. Twabaye ba bwengebuke!\"",
//     },
//     {
//       id: 7,
//       title: "Umugore w'igishegabo",
//       summary: "Kera habayeho umutware akagira umugore...",
//       details: "Kera habayeho umutware akagira umugore w'igishegabo. Uwo mutware yaritondaga, agategeka neza, ingabo ze zikamukunda kandi zikamuyoboka. Umugore we akaba umushizi w'isoni, akiha kumutegekera ingabo, kandi agasuzugura rubanda. Uwo mugore akaburanirwa, agaca imanza, akagaba inka n'imisozi, agashengererwa, umugabo we akaba nk'umuhakwa mu rugo.\nBukeye haza akagabo kakanyeshyamba gashaka ubuhake. Kageze ku rugo rw'uwo mutware, karamuramutsa, karamutsa n'umugore we. Umutware aramubaza, ati, \"wa mugabo we witwa nde, ushaka ubuhake uturuka he, kandi umurimo uzi gukora ni uwuhe?\" Umugabo aramusubiza ati, \"nyakubahwa, data yanyise Kavamahanga. Iwacu ni i Bunyaruka naho umurimo natojwe ni ukugendana na databuja akajya antuma aho ashaka.\"\nUmutware aramubwira ati, \"guma aho nguhaye ubuhake ubwo uzambera umugaragu w'inkora mutima.\" Kavamahanga ajya no gucyeza umugore w'uwo mutware. Amugeze imbere atangarira imyambaro uwo mugore yambaye, aramubwira ati, \"uraberewe, mbese urasa nk'umwamikazi nyiri igihugu.\" Maze yungamwo ati, \"ubuze ikintu kimwe rudori.\" Umugore aramubaza ati, \"icyo kintu mbuze ni iki?\" Kavamahanga aramusubiza ati, \"icyo kintu kimwe ubuze cyitwa akarusho.\" Umugore yumvise akarusho, ararahira ati, \"ngombe kubona icyo kintu mbuze, ngombe kwambara ako karusho.\" Nuko icyo gishongore cy'umugore abaza ako kanyeshyamba ati, \"mbwira neza aho nzakura ako karusho.\"\nKavamahanga aramusubiza ati, \"ako karusho kaba kure, kandi ntiwagerayo. Ikibabaje kandi nuko ntawukazanira undi. Naho ubundi nari kunyaruka nkajya kuka kuzanira.\" Umugore aramusubiza ati, \"uko undora uku ubona nananirwa iki? Niyo haba ku ijuru sinagerayo?\" Kavamahanga aramubwira ati, \"koresha impamba nyinshi, ushake n'abahetsi benshi, maze uze njye kukwereka aho ukura akarusho.\" Umugore ati, \"ngiye kwitegura ejo bundi tuzahaguruke.\" Umugore ategeka ko babaga ingumba eshatu, bagatara imiranzi y'impamba, bagasya amafu, bagashaka n'ibindi byinshi by'impamba. Bamaze kurangiza kwitegura urugendo, umugore ashinga umugabo we urugo, ngo narurinde neza, azamumurikira akubutse iyo agiye. Nuko arahaguruka aragenda ajyana n'ibintu byinshi, akurikira ako kagabo. Bamara iminsi myinshi mu rugendo. Bagiye kugera iyo bajya, ka kagabo kabwira uwo mugore kati, \"ubutugiye kugera iyo tujya, hasigaye iminsi ibiri, bwira abantu batahe, ntiwashobora kwambara akarusho bahari.\" Umugore asezerera abamuherekeje asigarana n'umuja umwe. Ibintu babisiga mu ishyamba bari bagezemwo barataha.\nAkagabo kamujya imbere baragenda bagera ku kazu k'akaruri. Kavamahanga ahamagara umugore we ati, \"uritegure nkuzaniye abashyitsi. Binjira muri ka kazu, akagabo karakinga, kamaze kurudadira neza, karahindukira kareba wa mugore wigishongore, kajya hejuru kamukubita urushyi mu matama, kungamwo, kagira kabili, gatatu. karamubwira kati, \"ngiyo rero intangiriro y'akarusho nakubwiraga.\"\nKavamahanga amucuza imyambaro yose, ayambika umugore we, azana uducabari tw'umugore we, atwambika uwo mutwarekazi, maze amwicaza mu ivu. Ibintu uwo mutwarekazi yazanye, Kavamahanga arabitwara, icyo agiye kumuha akabimujugunyira nk'uko bajugunyira imbwa. Bwacya agakubita amubwira ngo niko karusho yaje ashaka. Hashize amezi atatu, umugore arananuka karahava. Imisatsi iba injwiri, inzara z'intoki ni iz'amano zirashokonkora.\nBukeye kavamahanga amusiga aho, ajya ku mutware asanga umugore baramwereye ngo yarapfuye. Kavamahanga abwira shebuja ati, \"umugore wawe nzi aho ari mukuzaniye wampa iki?\" Shebuja ati, \"nzakugororera inka nyinshi.\" Kavamahanga asubira iwe. Ageze imuhira akora impamba, bashyira nzira na wa mugore. Bageze iw' umugabo w'uwo mugore, kavamahanga abwira wa mutware ati, \"dore wa mugore wawe ndamuzanye, heza batamubona kuko yahindanye. Baraheza, umugore yinjira mu nzu ntaw'umurora, umugabo amubonye arumirwa, atangarira uburyo yahindanye akaba mubi. Nuko Kavamahanga baramugororera arataha.\nNuko umutware ategeka ko bamwogosha ya misatsi y'injwiri, bakamwambika imyambaro myiza hanyuma baramwondora arakira, asubirana ubwiza yahoranye. Umugabo aramubwira ati, \"akarusho se kandi ntiwakabonye.\" Kuva ubu rero usubire mu mwanya wawe w'umugore w'umutware, utuje, ucisha make, wubaha abantu. Naho iby'ubutegetsi ubimparire, nijye wabigabanye.\n\nNgaho aho umugani waturutse ko urugo ruvuze umugore ruvuzwa umuhoro, kandi ngo umugore w'ingare agirwa n'umugongo w' umuhoro.",
//     },
//     {
//       id: 8,
//       title: "Bakame n'impyisi",
//       summary: "Kera Bakame yacuditse n'impyisi, birany...",
//       details: "Kera Bakame yacuditse n'impyisi, biranywana, birabana bishyira kera. Ariko Bakame ikababazwa n'uko impyisi iyirusha ubukungu. Bukeye Bakame ibwira impyisi iti, \"reka ducuruze impu, ubukungu bwawe burusheho kwiyongera, ndetse ungurize ibintu byo gutangiza, nzajye nkungukira.\" Impyisi irabyemera.\n\nBitangira gucuruza impu, zimaze kugwira, bijya kuzicuruza mu mahanga, inyungu ikabikwa kwa Bakame. Bakame imaze gukungahara irirwaza. Bwa bucuruzi burahagarara ariko impyisi ntiyabyitaho. Hashize iminsi, Bakame irazinduka no kwa Mpyisi iti, \"yemwe abo kwa Mpyisi mwaramutseho!\"\n\nImpyisi iti, \"bwakeye Baka!\" Bakame irihangana irarikocora iti, \"nta miramukire yanjye, baraye baducucuye, badusahuye ntibadusigira na busa.\" Ubwo impyisi igwa mu kantu, mbese isa n'ikubiswe n'inkuba. Bakame ibonye ko impyisi ibuze aha irigitira irayishukashuka, iyibwira ko izabiyishyura. \n\nBakame iragenda ifukura icyuzi, yororeramo amafi, amaze gukura ikajya ijya kuroba ayo yirira. Hashize ukwezi impyisi ijya kwishyuza Bakame ibintu byayo. Bakame iyakira neza, yikoza munsi y'urugo iroba amafi cumi iraza irayateka iyavanamo umufa uryoshye cyane, maze yegereza impyisi.\n\nMu mwanya muto impyisi iba irakomba imbehe. Irangije iti, \"mbese shahu Bakame, ibi bintu biryoshye bitya, ubikura he?\" Bakame irahaguruka ijya kuyereka icyuzi cyayo iti, \"ugende ufukure nk'iki, amafi azimezamo.\" Bakame n'impyisi igeze imuhira sinakubwira ukuntu yarimbaguye umusozi mu mwanya muto. Imaze kuyoboramo amazi, itegereza ko amafi yazamo, iraheba.\n\nNi bwo igiye kwa Bakame iyirakariye cyane. Igeze yo, Bakame iyisomya ku nkangaza y' akataraboneka. Kwibuka icyari kiyizinduye biragatabwa! Imaze kuryoherwa cyane, iti, \"mama we! Ibi se byo wabikuye he?\" Bakame iti, \"ukagira rwa rutoki rwose, ukabura inzoga y'ubuki? Hoshi genda utemagure za nsina zose, amakakama azivuyemo uyashyire mu kabindi, amaremo ibyumweru bitatu, maze uzasomeho wiyumvire.\" \n\nImpyisi iragenda ibigenza uko Bakame yayibwiye. Ibyumweru bitatu bishize, igotomeraho, maze ururimi rurababuka, inkanka ziratenguka; Umujinya urayica, ifata umufuka no kwa Bakame ntiyasuhuza, ihita igafata igashyira muri wa mufuka, ngo ijye kukaroha mu manga. Igeze mu nzira yibuka ko yibagiriwe urujigo rwayo kwa Bakame, iratura, isubira inyuma yiruka.\n\nIngeragere iza kunyura hafi y'uwo mufuka, Bakame iti, \"Uraho Ngeragere!\" Iti, \"uracyabaho Baka! Ese urakora iki muri uwo mufuka shahu Baka?\" Bakame iti, \"ntiwamenya ibyanjye. Ubu banshyize muri iyi ngobyi ngo bajye kunyimika, njye ntegeka utunyamaswa turi hariya hakurya, ni cyo gituma bagiye bampetse! Nyamara simbishaka, ariko ntibabyumva!\" Ingeragere iti, \"shyuuuu!! Ukivutsa umugisha nk'uwo! Reka nigiremo niba utabishaka.\"\n\nBakame ibanza kwangira, nyuma iti, \"ngaho jyamo ariko nawe urampemba!\" Ingeragere ihambura wa mufuka, ivanamo Bakame, maze iwinagamo. Bakame si ukuwukanira iradanangira. Irangije iti, \"ngiye kuguteguriza.\" Muri ako kanya impyisi iba iraje, ibatura umufuka ngo girigiri...! Igeze hirya iti, \"ariko noneho ko biremereye cyane, iyi nkenya iriye iki? Ayubusa ariko ndakuroha, dore igihe wambeshyeye!\"\n\nIngeragere ngo ibyumve iti, \"reka Mpyisi sindi Bakame, nshyira hasi nigendere.\" Iraboroga cyane ariko impyisi ntibyumve, ahubwo ikayisubiza ngo dore aho wambeshyeye, ubwenge bwawe ndabuzi, umunsi ntarengwa ni uyu! Iragenda no mu manga ngo pooo! Ingeragere iniha rimwe gusa, igera mu kabande itakirashya.\n\nImpyisi itaha yizeye ko igiye kwirira ya mafi ya Bakame no kwinywera ya nzoga y'ubuki. Ku mugoroba ntitarabukiyeyo, isanga ka Bakame kidundaritse ku nkombe y'icyuzi cy'amafi yako kararoba. Bihehe igihinguka aho, Bakame iba yayibonye. Bakarne iti, \"Warupyisi ntunyegere, ntabwo abatarapfa nka we bagomba kwegera abavuye ikuzimu nka njye!\"\n\nImpyisi irumirwa igirango koko Bakarne yazutse, ishya ubwoba itekereje ko wenda ihamye aho yapfa, irirukanka irahunga izinukwa ityo kuzongera kwikorereza Bakarne no gucudika na yo.\n\nSi njye wahera hahera umugani",
//     },
//     {
//       id: 9,
//       title: "Imbwa n'intama",
//       summary: "Imbwa n'intama byarabanaga, bikaba...",
//       details: "Imbwa n'intama byarabanaga, bikaba inshuti cyane, kandi byari bihuje umuruho. Umunsi umwe byicara ahantu hiherereye, biganira iby'imibereho yabyo. Intama iterura ivuga iti, \"iyo ntekereje amaherezo yacu muri iyi si, nta gisimba na kimwe duhwanyije umubabaro, ibyo bikantera agahinda kanini, ndetse nkumva byazamviraho kwiyahura.\nTekereza mbese ibyiza ugirira abantu: ubumvira iteka, ukabararira, ntubahemukire. Ingororano ikaba iyihe? Nta yindi itari ugukubitwa, ndetse rimwe na rimwe bakakwica! Ngiyo ingororano yawe hano mu nsi, ntutegereze indi! Naho jye rero, nkabambika ngaheka n'urubyaro rwabo. Imirima yabo ni jyewe uyifumbira, ntibashirwe batanyishe ngo bandye!\nBakabaga inyama bakarya, impu bakagura amafaranga. Tuzira iki? Cya he? Mbese ni ukubakorera, amaherezo bakatwica uko bishakiye. Ngiyo inyiturano yacu hano mu nsi.\"\n\nImbwa na yo, ubwo yari iteze amatwi inshuti yayo, kuko yumvaga ibyo ibwirwa ari byo ihora ikorerwa na shebuja. Nuko ibwira intama iti, \"ibyo uvuga ni ukuri, ariko ntitwakwigerera abantu ngo tubiture ibyo batugirira. Tuzajye ducisha make yenda amaherezo bazabona ko na twe dufite umubiri.\"",
//     },
//     {
//       id: 10,
//       title: "Umukobwa Imana yahaye amenyo ariko ikamubuza guseka",
//       summary: "Kera habayeho umugabo, bukeye ashaka...",
//       details: "Kera habayeho umugabo, bukeye ashaka umugore, babyarana umwana w'umukobwa, bamwita Nyamahe. Nyina akamuhozaho ijisho igihe cyose, akamutoza n'imico y'abantu. Umwana aba aho, amaze kuba umwangavu, nyina arapfa. Nyamahe asigarana na se. Akomeza kugira imico nyina yamutoje. Se yitwaga Muhozi. Yiyumanganya urupfu rw'umugore we iminsi mike; bukeye ashaka undi mugore. Uwo mugore aza ari gica, aza yanga Nyamahe. Uwo mwana ariko aramushobokera; bitewe n'uburere bwiza nyina yamuraze. Nyamahe amaze kuba inkumi ashaka kujya kwa Nyamuhanzi nk'abandi bakobwa, kwihangisha amenyo. Niko abakobwa b'icyo gihe babigenzaga, ngo bazakunde basabwe. Abikojeje mukase, amutera ibyatsi. Umwana aremera aguma aho. Bagenzi be baramubwira bati, \"ngwino tujye kwihangisha amenyo, nawe uzasabwe ushyingirwe.\" Abibwiye mukase, na none aranga. Ababwira ko atarahirira inyana ubwatsi. Kandi ko ataraha abana amata. Ati, \"nimwigendere.\" Abana buwo mukase bamaze gukura, bajya kwihangisha. Nawe aricecekera. Ariko nawe agahora yifuza kujya kwihangisha amenyo nk'abandi.\n\nBitinze Nyamahe amaze kubona ko atazabona uburyo bwo kujyayo ku manywa, yigira inama yo kuzajyayo nijoro. Bumaze kwira, imirimo yose irangiye, yambara uruhu rwe rwiza, araboneza ajya kwa Nyamuhanzi. Agitirimuka aho, ahura n'abakobwa bavayo, asanga ari beza; araturika ararira, avuga ati, \"Mukadata yanyanga, arakangwa n'Imana.\" Nuko arakomeza agera ku giti cy'umurinzi cyari munsi y'u urugo rwo kwa Nyamuhanzi. Akihagera, yumva Nyamuhanzi aramubwiye ati, \"aho wajyaga urahageze.\" Nyamahe araza, nuko Nyamuhanzi amutaka ubwiza aramunoza, amuha n'amenyo y'urwererane, Nyamahe arishima. Nyamuhanzi Ati, \"genda ntuzamara kabiri utarasabwe. Maze ureke kwanduranya na mukaso.\" Yungamo ati, \"ntuzerekane amenyo yawe.\" Nuko umukobwa arakimirana, arataha. Ngo bajye kubona, babona Nyamahe arasa n'inyenyeri, barumirwa. Barumuna be ishyari rirabarya. Mukase nawe atangira kumugusha neza, ariko undi akanga guseka.\nAbwira abakobwa be ati, \"nimukureyo amaso; yahanzwe ubwiza n'ubundi yari abusanganywe.\" Ariko akomeza kumuvunisha imirimo. Se Muhozi ntacyo yari azi. Kuko Nyamahe yahoraga yicecekeye. Buracya baza gusaba Nyamahe. Bamusaba ku manywa. Nimugoroba se aramushyingira. Umukobwa arashyingirwa, atandukana na mukase. Mukase bimwanga mu nda. Atangira kumuteranya n'iyo yashatse, ati, \"muramenye dore mujyanye umukobwa w'igitsire. Ntagira uwo asekera.\" Nyirabukwe arita mu gutwi; bimutera amatsiko. Aramugenzura.\n\nAsanga koko umukazana we adaseka. Nuko aza kumuteranya n'umugabo we. Umugabo ariko ntiyabyitaho. Nuko umugabo akajya amwihererana, akamubwira ati, \"Nyamahe wasetswa n'iki?\" Undi akamwihorera. Akamubwira ko Imana yabimubuje. Ahubwo akaririmba ati, \"naho waza ubwawe, sinasekera abana. Naho wazana umwami, sinasekera abishywa. Naho wazana imfura, sinasekera abiru. N'aho wazana Imana sinseka. Ese Nyangoma ya Muguya nsekera iki?\" Umugabo akamwihorera. Bukeye Nyamahe amaze kugira imbyaro eshanu, abantu bose baramuzira, bamuziza ko adaseka. Asigara akunzwe n'umugabo we gusa.\nBibanga mu nda. Nuko baza kwoshya umwana we w'imfura bati, \"ubwire nyoko agusekere. Urire ahubwo ugeze n'aho gupfa. Umwana ati, \"koko aho nabereye, sindabona mama aseka.\" Umwana araza yicara iruhande rwa nyina aramubwira ati, \"nsekera.\" Nyina aranga. Umwana ararira, arapfa. Nyamahe arabihisha, yifasha umwana amuhamba wenyine. Abeshya umugabo ngo yagiye kwa sekuru. Bukeye boshya umwana wa kabiri. Nawe bigenda kwa kundi, nyina yanga guseka. Umwana ararira arapfa. Boshya uwa gatatu n'uwa kane. Bose arabangira, barapfa. Nyamahe yemera ko abana bapfa aho kumena ibanga ry'Imana. Akomeza no kutagira ijambo abwira umugabo we. Umwana wa gatanu ari nawe w'umuhererezi nawe abwira nyina ngo ni amusekere. Noneho Nyamahe biramuyobera.\n\nAsanga agiye gutera agahinda umugabo we atazashira. Umwana atangiye kwinginga nyina ngo amusekere, amukubita mu mugongo, aramuheka. Yenda amata, yicara ku ntebe. Nuko araturika ararira avuga ati, \"Nyamuhanzi, wankuye aha ngaha. Utunma ntandukana na mukadata. Umbwira kutazamena ibanga sinarimena. None ungize ute?\" \"Ihorere Mutesi. Niwanga guhora ngushyire uwakumpaye. Umvira nkuguyaguye, mwana wanjye\". Ngo ajye kumva yumva umwana mu mugongo arapfuye.\nNyamahe nawe abona ararigise, arigitana n'intumbi y'umwana yari ahetse. Nuko yumva Nyamuhanzi iramuhamagaye ati, \"Humura mwana wanjye sinaguhermukira kandi waranyumviye. Amaherezo, nuko aramuzura, azura n'abana be bose, arabamwereka bose uko ari batanu. Amuha inka ngo aba yarahawe naba sebukwe, iyo batamuziza ko atabasekera nk' abandi. Amuha n'abagaragu n'abaja. Nyamuhanzi ati, \"genda maze ujye usekera abantu bose\". Nuko Nyamahe aragenda. Ahinguka mu irembo ry'umugabo we, ashagawe n'abana be n'abaja be, n'inka n'ibisabo.\nAza asekera umugabo we. Umugabo amubonye ati, \"ngwino Gitare kintwaje ubugingo.\" Barahoberana. Nuko umugabo we arabyukurutsa. Inshuti ze ziraza, barishima. Umwami aza kumenya ibyabaye. Umugabo wa Nyamahe amugira umutware. Amuha inka n'imisozi. Nyamahe abana n'umugabo we. Babaho neza. Baratunga, baratunganirwa.",
//     },
//     {
//         id: 11,
//         title: "Nyarubwana",
//         summary: "Kera umuntu yarahagurukaga akajya guhaki...",
//         details: "Kera umuntu yarahagurukaga akajya guhakirwa inka, akagabana vuba cyangwa se bitinze, inka akayicyura. Hakabaho n'urambirwa cyangwa se aho yacyeye baragaye imirimo ye, ubwo agataha amara masa. Uwagabanaga inka akayicyura ntibyaciraga aho, yaratahaga ariko akagira iminsi yo gufata igihe kwa Shebuja, habaga iyo umugaragu atinda cyangwa agataha vuba, ibyo byaterwaga n'umuhatse.\n\nUmugabo yagiye gufata igihe kwa Shebuja asiga umugore n'abana bakiri batoya, ajyana n'imbwa ye, Nyarubwana, atindayo ndetse haza no gutera akanda. Imbwa irasonza na Shebuja. Umugabo atekereza gutaha adasezeye biramunanira kuko yatinyaga kuzanyagwa inka ze.\n\nBukeye Nyarubwana ihamagara Shebuja iramubwira ati, \"ko ureba tugiye gupfa tuzize inzara ntakuntu twakwirwanaho?\" Umugabo ati, \"bite?\" Nyarubwana iti, \"nzajya guhiga inkware, inkwavu, isha, maze njye ahiherereye notse, nizishya nze nguhamagare turye!\" Umugabo aremera asangira na Nyarubwana.\n\nIgihe cyo gutaha kiragera. Umugabo n'imbwa ye bageze mu nzira umugabo ati, \"umva rero, Nyarubwana, ubu turatashye, Kandi narahemutse twarasangiye! Uzamenye ntuzagire icyo uhingukiza umugore wanjye, ntuzagire n'undi muntu ubwira! Uzaramuka ubivuze nkazakwica!\" Nyarubwana ati, \"sinshobora kumena ibanga.\" Baragenda bagera imuhira. Umugabo arakirwa arazimanirwa, Nyarubwana na yo bayiha ubikwiye.\n\nBukeye umugore abaza umugabo we ati, \"ariko wowe n'imbwa yawe ko mwabyibushye n'iki?\" Umugabo ati, \"kwa databuja badufashe neza cyane, baturinda icyitwa inzara cyose.\" Umugore ntiyashirwa, bibaho. Bukeye ahamagara Nyarubwana ati, \"mbwira icyababyibuhisije wowe na Shobuja; nutambwira Kandi nzakwicisha inzara nta kindi gihano nzaguha!\" Imbwa iti, \"batwitayeho cyane tubona ibyo turya n'ibyo tunywa byinshi.\" Umugore yanga kwemera yanga kugaburira Nyarubwana, igiye guhodoka iragenda yegera nyirabuja iti, \"najyaga guhiga inkware, inkwavu, isha, nkabaga, nkotsa, ngahamagara databuja tugasangira!\" Umugore ati, \" nuko urakoze, dore igaburo ryawe nk'uko bisanzwe.\"\n\nUmugore ati, \"ishyano ryaraguye! ubonye  ngo umugabo wanjye asangire n'imbwa, ahumane, none nanjye akaba ashatse kumpumanya, n'ako byararangiye ntagisigaye, nta bwo tukibanye ngiye iwacu.\" Nyarubwana ikaba yari ifite ibibwana. Ibonye nyirabuja arakaye, yitegura kugenda, ifata ikibwana cyayo igishyira mu gicuba cy'amata y'amacunda nyirabuja yanyweshaga umuceri. Umugore mbere yo kugenda, akajya aza agasomaho ariko atazi ikirimo.\n\nNuko mu gitondo cya kare umugore abwira umugabo ati, \"urabeho sinshoboye gusangira n'imbwa!\" Agenda ubwo! Umugore amaze kugenda, umugabo ati, \"Nyarubwana rero wararikoze, wamennye ibanga none dore ibibaye?\" Nyarubwana iti, \"ceceka nzamugarura bidatinze.\" Mu gitondo kare, Nyarubwana irabyuka, ibanga ingata ifata igicuba kirimo amacunda, umuheha n'ikibwana irikorera n'iwabo w'umugore.\n\nUmugore ayikubise amaso, agenda yiruka ayisanganira ku irembo ati, \"ni ibiki Nyarubwa?\" Nyarubwana iratura, irapfundura igicuba yereka nyirabuja, akubise amaso cya kibwana arumirwa. Nyarubwana ati, \"nta soni ufite zo kundira abana ukabasomeza amacunda warangiza ugafata inzira; ikigira iwanyu?\nNzanywe no kugira ngo mbyereke ababyeyi bawe ndetse n'abaturanyi, hanyuma bavuge uko nkwiye kumera!\"\n\nUmugore ati, \"ceceka hoshi dutahe, ndetse ntugere no mu rugo, iwacu bataza kukubaza ikikugenza.\" Umugore yihina mu nzu afata utuntu twe yazanye, abwira iwabo ati, \"umugabo wanjye antumyeho ko arwaye yarembye, none nta kundi nagira, ngiye kumurwaza!\" Umugore na Nyarubwana bafata inzira barataha, umugabo abwira umugore ati, \"ari ugusangira n'imbwa, ari no kurya ibibwana byayo ikigayitse cyane ni ikihe?\" Umugore abura icyo asubiza. Nibwo avumye imbwa ati, \"kuva ubu ntihazagire imbwa yongera kuvuga ukundi!\" kutavuga kw'imbwa ngo ni aho byaba byarakomotse.",
//       },
//       {
//         id: 12,
//         title: "Abasangiye ububabare barisungana",
//         summary: "Inkoko yibereye aho ari inshike, kandi ita...",
//         details: "Inkoko yibereye aho ari inshike, kandi itabuze kubyara. Rubanda rwarayimariye abana babaraguza, ikajya ihora ibiganya, yicwa n'agahinda. Bukeye inkoko yenga inzoga, irayikorera iragenda, ngo igiye gushaka uwo yatura umuruho wayo. Inkoko ihura n'imbwa, Imbwa irayibwira iti, \"ntiwansomya kuri iyo nzoga, yewe Nyirankoko?\" Inkoko iti, \"ntawe nasomya ku nzoga yanjye, kereka nsanze duhwanyije umuruho narushye.\" Imbwa iti, \"ntawandusha ubaho.\" Inkoko iti, \"ngaho mbwira ibyawe.\" Imbwa irayisubiza iti, \"mbwagura abana, bose bakabatanga ngasigara ndi inshike.\" Inkoko iti, \"uwo si umuruho, uwaruha yaruha nka we, kuko abana bawe batabakubagira mu maso, ngo wumve barira. Byongeye, ntibituma utongera kubyara ndetse n'aho babajyanye wajya ujya kubasura, ubwo uraganya iki?\" Nyirankoko ati, \"Inzoga yanjye ntuyinyoye, nta muruho warushye, icecekere. Urora se uhwanye na njye ubyarira umushyo. Rubanda rwose ntirusibe kuza kureba ko nabyaye.\" Inkoko irakomeza n'inzoga yayo ku mutwe, ihura nihene. Ihene iti, \"nsomya Nyirankoko.\" Nyirankoko ati, \"nasomya uwo duhwanyije kugira umuruho.\" Ihene iti, \"uwandusha umuruho yava he?\" Inkoko iti, \"ngaho ntekerereza umbwire umuruho warushye, numve.\" Ihene iti, \"mbyara abana bakabajyana bakabagura umunyu, ubundi bakabagura ibishyimbo. Ibishyimbo bakabirya, ibindi bakabitera. Byamara kuzana umushogoro nakoraho bakantera i mijugujugu, kandi byaraguzwe abana banjye.\" Inkoko iti, \"sigaho guteta uzajye ujya kubasura, boshye babakubita umushyo urora.\" Byageze aho inkoko iti, \"njye kubaza inka kuko ariyo iruta izindi nyamaswa.\" Iraboneza n'inzoga yayo ku mutwe, ihura n'inka. Inka irayibwira iti, \"wansomya akayoga Nyirankoko?\" Nyirankoko ati, \"oya, nzayisomya uwo duhwanyije umuruho.\"\nInka iti, \"yewe ntawabona uwo tuwunganya ubaho mu gihugu. Uzi ko mbyara ikimasa, bakakibaga bakakirya, cyagwa se bakakigura icyo bashatse cyose. Ubwo ni ko bakama amata bakinywera, yewe ntibananyugamishe imvura ikanyicira ku musozi. Naba mbyaye inyana igapfa, nkaho barwaje, ahubwo bakayikuraho uruhu, bakarunukiriza igihe bankama ngo bakunde babone amata. Kwibonera amata nibyo biba bibababaje. Naho ibyo kumpoza amarira birakajya. Erega nkigura, ngakamwa cyane ngo batampurizaho imihini, abana babo babuze amata banywa.\" Inkoko iranyurwa iti, \"aho nagendeye, ngaha nabona uwo duhuje umuruho. Icara dusangire iyi nzoga twarawurushye koko. Kugira ngo bakubagire umwana mu maso bagire no kumukunukiriza ngo bakunde babone amata abatunga. Ni umuruho mubi. Nuko inka n'inkoko ziricara zisangira iyo nzoga yo kwihoza agahinda zisangiye.\n\nZirangije zirataha. Zigiye gutandukana zisezerana kuzaba inshuti, kugirango zijye zisungana mu buzima bwazo bwose butoroshye hano ku isi.",
//       },
//       {
//         id: 13,
//         title: "Ibyivugo by'iningwa",
//         summary: "Rutajabukwa n'imitima\ningamba zimisha...",
//         details: "Rutajabukwa n'imitima\ningamba zimisha imituku\nrwa Nyilimbirima\nndi intwari inkotanyi yamenye.\n\nYanshinze urugamba rukora amaraso,\nati, \"Rwampingane!\"\nnti, \"Mukaragandekwe bangana n'ababisha iyo duhuye ndarakara!\"\n(KAMPAYANA ka Nyantaba)\n\nMugabo utera ababisha ubwoba wa Rutajoma\nndi umushakamba rwose:\nabatwara inyamusozi narabagumiye\n\nRugarama rwa Gikore\nnabaye igisibya cy'umutsindo;\nruhamanya akomeretse ndamwomora mwima Abarihira n'Abinika;\nn'ihururu uturutse kwa Nyakamwe.\n\nbari baje ari abaziro\nndabahakanira ko ntamuharishwa n'ibyuma\nkandi turabyirukanye\nndamusezerera arisindagiza\nabaje kutuvuna\n\nbasanze umuheto w'inkaka\nwigenza mu nzira\nnk'ubukombe bw'intare\naho abashakamba twaremye intambara neza",
//       },
//       {
//         id: 14,
//         title: "Ururimi rwoshywa n'urundi",
//         summary: "Rimwe umunsi w'ubunani wari wegereje, ha...",
//         details: "Rimwe umunsi w'ubunani wari wegereje, hakaba umugabo n'umugore bari bamaranye imyaka myinshi. Ku mugoroba wa joro baricara baganira ibya mva he na njya he! Reka si umunezero bari bafite bombi, dore ko uwo mwaka wari unashize bawufitemo amahoro n'amahirwe menshi.\nAriko se ugira ngo urwo rugwiro rwarawushoje? Byabara karihariya. Ikije guhungabanya icyo kiganiro cyari cyuje ituze kije kuba iki? Reka wiyumvire.\n\nHenga imbeba bubeba igire itya iti, \"tururururuuuu!\" ibace hagati, yanduruke. Batangira kuyiha urw'amenyo bariyamirira cyane karahava, baraseka, barakwenkwenura, sinakubwira! Aho bazanzamukiye umugore ati, \"iriya mbeba nahoze nyibona muri iriya mfuruka y'epfo.\"\nUmugabo ati, \"oya, imbeba iturumbutse mu mfuruka ya ruguru, ni ho nahoze nyirora isereganya.\"\nUmugore ati, \"rwose iturutse hariya hepfo!\"\nUmugabo ati, \"rwose waroye nabi iturutse haruguru.\"\nUmugore ati, \"ibundi ndakuzi nta cyo ujya wemera, wakwemeye ko nayibonye neza!\"\nUmugabo ati, \"n'ubundi ni uko abagore mwabaye mujya impaka za ngo turwane!\"\nUndi ati, \"aha wenda ni ibyawe wava aho uhakana ko mvuga ukuri ngo, ni ay'abagore!\"\nUmugabo ati, \"ndakuzi.\"\nUmugore ati, \"ndakuzi ari njye.\"\n\nSi bwo umwe azirimukiwe! Si bwo undi afashe ubushungu, Si bwo bashunguranye ubwo! ye ngaho, ye nguko, ruri hasi hejuru!\nUmwe ati, \"urushyi nturuzira.\"\nUndi ati, \"ngiyo inkoni,\numva umugeri,\numva igipfunsi!..\"\nNuko barakomeza baragundagurana, amaherezo baza gukizwa na mbuga! Kuva uwo mugoroba barasirika ntihagira uwongera kuvugisha undi. Burira buracya, bakirakaranyije, burongera burira!\n\nBukeye umunsi w'ubunani uragera. Noneho umugabo iby'abagabo, agerageza kurura umugore we. Aratangira aramubwira ati, \"niko nyirana! ko urora umwaka mushya watangiye, tukaba tutari dukwiye kuwutangirana uburakari, twakwirengagije ibyo twagiranye ejo tukabyihanganira, maze umwaka tukawutangira neza!\"\nUmugore ati, \"rwose nanjye ni ko mbyifuza!\" Nuko baraseka, bifurizanya umwaka mushya muhire, mbese biba nk'aho nta cyo bigeze bakorerana kibi. Baranywa, bararya bishimira umunsi w'ubunani. \n\nHashize umwanya, umugore arahimbarwa abwira umugabo we ati, \"erega n'ubundi twari twapfuye ubusa, wowe se ko nakubwiraga ko imbeba iturutse hariya ukanga kubyemera!\"\nUmugabo ati, \"ibyo byo kabishywe ntabyemeye, si ho yaturutse, yari iturutse mu mfuruka ya ruguru!!\"\nUmugore ati, \"waroye nabi.\"\nUmugabo ati, \"waroye nabi wowe!\"\nUmugore ati, \"nta cyo ujya wemera ndakuzi!\"\nUmugabo ati, \"wowe wavutse nta cyo wemera!\"\nUmugore ati, \"urasubiye kandi!\" Ubwo ga nanone intambara iba irarose!\nBaremveka barwana inkundura!\n\nIcyo gihe uwabakijije ngo ni Ntiburakibara!\n\nJye sinari mpari, nari nigiriye i Bugibwa nidagadura na Bunani.",
//       },
//       {
//         id: 15,
//         title: "Gikeri na ntashya",
//         summary: "Umunsi umwe Gikeri yasohotse mu mwobo...",
//         details: "Umunsi umwe Gikeri yasohotse mu mwobo yicara imbere yawo, yota akazuba ari nako atumagura agatabi. Ntashya na we akomeza imihamirizo ye mu kirere, ariko bombi bakajya barebana. Kera kabaye Ntashya aramanuka asanga Gikeri.\n\nBararamukanya, baraganira, bigeze aho Ntashya ati, \"ariko ibikeri mumaze iki? Mugize umwanda, mugize kutiterura aho muri, ari ibiba mu myobo ari ibiba mu mazi mwese muri kimwe! Aho uzi ukuntu mupfa umusubizo, rero uko babica wagira ngo ni ukuborora! Ngaho intumbi mu mayira, ngaho intumbi mu mihanda! Ese iyo mudapfa mutyo ubundi mwari kuzakwirwa he ku isi? \nRero ngo iyo mugaramye mu mihanda muba mushaka abacamanza! Bahe bokajya! Urubanza muba mwarwiciriye kuko mwirangaraho. Harya icyo mugenderaho ngo ntawe ubajugunya ngo mugwe mureba igicuri? Naho twebwe intashya turi intore, imihamirizo yacu inogeye amaso kandi urupfu rwacu ni urw'ikirago.\"\n\nGikeri ati, \"tashya uyu si umwanda, umubiri wacu koko wuzuye imvuvu kuko kamere yacu ari ko ibishaka. Naho iby'urupfu rwacu si ukwirangaraho, impanuka ntaho zitaba. Kutiterura kwacu ngira ngo nta wadusiga!\" Ntashya araseka cyaneee! Ati, \"ntawabasiga? Ubwo se urashaka kuvuga iki ?\" Gikeri ati, \"tuzasiganwe, ari mu igenda ari no mu igaruka, nzakwereka igihandure!\"\nNtashya aremera. Gikeri ati, \"ngusabye icyumweru cyo kwitegura, umunsi wagera tukavuduka, kandi ugomba kumenya ko twebwe ibikeri iyo dusiganwa tugendera mu bishanga.\"\n\nIcyumweru gishira Gikeri abwira bene wabo ko yateze na Ntashya mu byerekeye gusiganwa. Gikeri ati, \"nabwiye Ntashya ko twebwe ibikeri iyo dusiganwa tugendera mu bishanga. Bikeri rero murabe maso kandi si ngombwa kuva aho muri. Dore uko bizagenda: ibikeri mwese muzatumanaho maze Ntashya nahamagara ngo, \"Gikeri\", muti \"ndi hano!\" Ibikeri byose byo mu bishanga bitumanaho, inama iruzura.\n\nUmunsi ntarengwa uragera, Gikeri ahagarara ku nkengero y'igishanga, Ntashya araza amwicara iruhande. Gikeri ati, \"Ntashya tugiye gusiganwa, ariko nkwibutse ko ibikeri tugendera mu bishanga; aho uzajya ugera uzajye uhamagara uti, \"Gikeri ugeze he?\" Nzasubiza nti, \"ndi hano!\" Ntashya ati, \"tugende wintera igihe, niba kandi wanga gukorwa n'isoni ubivuge noye kwiruhiriza ubusa!\"\nGikeri ati, \"tugende.\" Ntashya ati, \"wantindiye.\" Gikeri yibira mu gishanga, Ntashya araguruka. Gikeri abonye Ntashya yandurutse, aragaruka yiyicarira imbere y'umwobo we, yinywera agatabi ati, \"Ntashya genda ndaguhaye!\" Ntashya arazimiza, si ukuguruka. Ageze imbere arahamagara ati, \"Gikeri ugeze he?\" Gikeri ati, \"ndi hano!\" Ntashya afumyamo, hashize umwanya arongera arahamagara yumva Gikeri aritabira kureee!\n\nNtashya ati, \"binshikiyeho, ngiye gusigwa na Gikeri!\" Arongera arahamagara. Gikeri yitabira inyuma y'imisozi itanu. Ntashya ati, \"nguye agacuho, ahasigaye dusubireyo, maze ndebe ubwo butwari bwawe!\" Gikeri ati, \"nakubwira iki!\" Ntashya arakimirana asanga Gikeri yicaye umudendezo n'ibitwenge byinshi. Gikeri ati, \"ubu se aho Ntashya ntiwiboneye! Ubwirasi bwawe buzakugeza kuki?\"\n\nMu kinyarwanda baca umugani ngo, \"Uguhiga ubutwali muratabarana.\"",
//       },
//       {
//         id: 16,
//         title: "Inzoka n'uruyongoyongo",
//         summary: "Kera habayeho inzoka n'uruyongoyongo maze...",
//         details: "Kera habayeho inzoka n'uruyongoyongo maze biracudika, ndetse bigeza n'aho kunywana. Uruyongoyongo rubwira inzoka, ruti, \"mbere yo kunywana, ndabanza nasame undebe mu nda, nurangiza nanjye ndore mu yawe.\"\nInzoka iti, \"ese ibyo urabishakira iki nshuti twabanye?\" Ruti, \"ndagira ngo ndebe ko hatarimo akangononwa.\" Inzoka iti, \"ibyo na byo, ngaho nasame uroremo uko ushaka.\" Uruyongoyongo ruroramo, rurashishoza rugeza mu murizo.\nInzoka iraruhindukirana irarubaza iti, \"ese hari ako ubonye?\" Ruti, \"rwose ubanza karimo, mbonye hacuze umwijima!\" Inzoka ni ko kurusubiza iti, \"nushaka ushire agahinda nta bwo ari akangononwa ubonye, ahubwo ni ukugira inda ndende!\"\nUruyongoyongo ruriyumvira, hashize akanya ruti, \"ngaho dupfe kunywana, ariko sindagushira amakenga!\" Nuko biherako biranywana, bibana mudendezo, bigatumirana bigasangira amayoga.Uruyongoyongo rwituriraga mu misozi miremire, naho inzoka ikibera mu kibaya cy'ishyamba ry'ingati.\nNgo hace imyaka, ishyamba ryo kwa Nzoka bararitwika, ryose rishya ururimbi. Inzoka ihutaho ituma ku ruyongoyongo ikitaraganya iti, \"gira bwangu, hurura ay'Uruniga, usume ay'Ururumanza uhute ay'imbogo, ugende ay'inyaga, uze unteturure ndacikirijwe!\"\n\nUruyongoyongo rukibyumva ntirwatindiganya, rusya rutanzitse, rwiruka amakubaruhu rutabara umunywanyi warwo. Ngo rugere ku kibaya rusanga ibyo rwabwiwe ari impamo, rubwira inzoka yizinguriza ku ijosi ryarwo bwangu ruherako rurayigurukana, rurenura mu bicu.\nKera kabaye, rurananirwa, ruratentebukwa, rubwira inzoka, ruti, \"ngiye kugushyira hasi nduhuke nibura akanya gato,\" Inzoka iti, \"ibyo wirota ubikinisha, dore inyuma yacu inkongi ni yose yabaye inkorashyano, ni akanya gato ngashya wese ngakongoka, ahubwo ongera umurego dukundure.\"\nNuko uruyongoyongo ruriyandayanda; nyamara ay'ubusa, rugeza aho kugusha ubuconsho. Ngo rujye kwarara kugwa hasi, inzoka iti, \"nugwa hasi nanone nta cyo uri bube ukimariye, ihangane dore ibintu byakomeye.\" Uruyongoyongo ngo rukora iyo bwabaga ariko intege ziranga zirabura, rwihonda hasi ntirwasamba.\nInzoka irarureba iti, \"genda shahu n'ubwo upfuye bwose ariko upfuye unyumvishije ikinyenga cyo mu kirere!\" Nguko uko ka kangononwa uruyongoyongo rwavugaga mbere yo kunywana. kagaragaye.\n\nNyuma y'ibyo, bene Ruyongoyongo basera i Gahanga bahiga ya nzoka n'urubyaro rwayo.\n\nIyo ni yo soko y'inzika yabyaye inzigo y'uruyongoyongo n'urubyaro rw'inzoka.\n\n\"Guca ku nda n'indyarya ni ugusigira abana impyisi ugasinzira\"",
//       },
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
//             <h1 className="flex section-heading">Imigani miremire</h1>
//             <p>
//               Ibyivugo ni nk' ibisingizo bisingiza intwari ku rugamba, bigasingiza intwaro, zikarata n'ubutwari bwabo. Ibyivugo by' imyato, byabaga ari ibyivugo birebire kandi bikagira ibice bitaga "IMYATO".
//             </p>
//             <br />
//             <div >
//               <div className="mt-16">
//                 {selectedBox ? (
//                   <div >
//                     <div className="expanded-box">

//                       <h3>{boxesImigani[selectedBox - 1].title}</h3>

//                       <div className="box-details">

//                         <button className="back-button" onClick={handleGoBack}>
//                           <FontAwesomeIcon icon={faArrowLeft} />
//                         </button>
//                         {breakDownDetails(boxesImigani[selectedBox - 1].details)}
//                       </div>
//                       <div className="overlay" onClick={handleBackClick} />
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="boxes-container  ">
//                     {boxesImigani.map((box) => (
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