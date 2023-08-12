import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './Isomero.css';
import Imiganimiremire from '../Isomero/Imiganimiremire';
import Imivugo from '../Isomero/Imivugo';
import Imiganiabana from '../Isomero/Imiganiabana';
import Indirimbo from '../Isomero/Indirimbo';
import Inka from '../Isomero/Inka';


export default function Isomero() {
  const [selectedBox, setSelectedBox] = useState(null);
  const [boxesIbyivugo, setBoxesIbyivugo] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API using Axios
    axios.get('http://localhost:4050/api/ibyivugo/ibyivugo')
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
      <h1 className="section-heading">ISOMERO</h1>
        <hr />
        <br />
        <p>
        Nkuko amateka y’ubuvanganzo nyarwanda abigaragaza, umugani n’ipfundo ry’amagambo atonze neza, Gacamigani yakagiriyemo ihame ridutoza gukora iki cyangwa se kudakora kiriya. Mbese muri make umugani ni umwanzuro w’amarenga y’intekerezo. Umugani uvuga ukuri, ariko muri kamere yawo ntabwo wo uba ari ukuri. Zimwe mu ngero z imigani migufi:
        </p>
        <br />
      </div>
      <div>
        <section className="text-gray-600 body-font">
          <div className="container">
          <h1 className="flex section-heading">Ibyivugo</h1>
            <p>
            Ibyivugo ni nk' ibisingizo bisingiza intwari ku rugamba, bigasingiza intwaro, zikarata n'ubutwari bwabo. Ibyivugo by' imyato, byabaga ari ibyivugo birebire kandi bikagira ibice bitaga "IMYATO".
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
          <Imiganimiremire />
          <Imivugo />
          <Imiganiabana />
          <Indirimbo />
          <Inka />
        </section>
      </div>
    </div>
  );
}



// import React, { useState ,useEffect} from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// import './Isomero.css';
// import Imiganimiremire from '../Isomero/Imiganimiremire';
// import Imivugo from '../Isomero/Imivugo';
// import Imiganiabana from '../Isomero/Imiganiabana';
// import Indirimbo from '../Isomero/Indirimbo';
// import Inka from '../Isomero/Inka';

// export default function Isomero() {
//   const [selectedBox, setSelectedBox] = useState(null);

//   const handleBoxClick = (boxId) => {
//     setSelectedBox(selectedBox === boxId ? null : boxId);
//   };

//   const handleBackClick = () => {
//     setSelectedBox(null);
//   };
//   const [boxesIbyivugo, setBoxesIbyivugo] = useState([]);

//   useEffect(() => {
//     // Fetch data here and update the state
//     fetchBoxesData();
//   }, []);

//   // const boxesIbyivugo = [

//   //   {
//   //     id: 1,
//   //     title: "Imyato y'impotore",
//   //     summary: "Ingangare sinzi gutinya Ahubwo ndi inkaka mpotora induru. Umug...",
//   //     details: "Ingangare sinzi gutinya\nAhubwo ndi inkaka mpotora induru.\nUmugome yaje yigaragambya\nAgambiriye gutsinda\nAnsanga ku isonga nsanganiyeurugamba.\n\nUbwo mpita mwirahira,\nNti Rutembagazamakombe rwa Mudasongerwa\nSinkangwa n'ababisha intwari twatabaye.\nMpatana amakuza aho rukomeye\nAbabisha bagashiguka banshinyikiye\n\nNaho ntibaziko ari jye Rutembagazamakombe.\nRwoganangoga i Nkuba twitoza gucura inkumbi\nNatsembye ababisha ku rugamba rw'umuheto.\nAbanshiye ibico nabaciyemo\nNsohoka nsanga Rwadukanakurinda\n\nBanyita Ingombamihigo y'ishema ryinshi.\nDore ko nabyirukanye inyange\nInyambo idasubizwa inyuma,\nNitwaza amakuza akuza abahungu\nNgarika mu nkubiri mbasarika Rusokanayibisongo!\n\nNdi imanzi namaze ababisha,\nNdi intwari mpora ku rugamba menera intore.\nNdi indirima ya Semwaga Sengabo isarika abanyigimba.",
//   //   },
//   //   {
//   //     id: 2,
//   //     title: "Ibyivugo by' Abana",
//   //     summary: "Ndi Nkubito idatinya, Ndi Nyambo sinkenga, Mucyo wa Ruti...",
//   //     details: "Igice cya 1 \n\nNdi Nkubito idatinya,\nNdi Nyambo sinkenga,\nMucyo wa Rutinywa,\nNdi umuhungu ntibyijanwa.\n\nNkubitiye umuntu mu gikombe,\nNdamuzamura mukubitira mu gahinga,\nNgo ejo batagira ngo ni inkangu yamumfashije.\n\nNdi Nyamugendamubimbere,\nSingenda mu b'inyuma,\nNi jye Nyambo yogeye.\n\nNdi agaca mu ziko ntigashye,\nNdi inkuba y'amaganga.\n\nNdi Gatobotobo ka Ndabateze,\nNatega neza ndagatabaruka.\n\nNagiye ku rusenge\nIbitugu ndabitigisa\nImyambi ndayisukiranya,\nAbo twari kumwe ndabacyaha\nNitwa Cyaradamaraye.\n\nNahagaze mu mpinga ndasa umwambi\nUmukobwa arambona, ati:\nUno muhungu yarasa neza arakandongora.\n\nNdi akana k'amanyama ka Runyanyaga\nNanyanyagije imyambi mu rugo rwa Muvunyi\nNdi umuvunankokora wa Nkomati\nNice ngeze ku rugamba, nkarutera\nJye nyamibwa y'umutwe.\n\nNdi akavuzavuza, kavuza amacumu kakayavundereza,\nNdi umuhungu w'ishema.\n\nNdi inkubito idatinya\nNdi Nyambo sinkenga\nMucyo wa Rutinywa\nNdi umuhungu ntibyijanwa.\n\nNdi inkubito isanganwa igitero\nRwagitinywa ndi Imanzi,\nNdi umuhungu wemeye imihigo.\n\nNdi nyamugenda mu b'imbere\nSingenda mu b'inyuma\nNi jye Nyambo yogeye.\n\nNdi Nyamuturukira intambara ku mutwe\nNgira ngo nyitere amacumu\nRwa Ntabashwa ndi umusore w'imbungiramihigo.\n\nNdi umuhungu ndi umuziraguhunga,\nNdi inyamibwa idacibwa umutsi\nSi ndi agatinya kuvuga ibigwi byanjye.\n\nNdi uwo baririmba ijabiro rigacya\nRukerantambara ndi Rusengo basanga kwa Kagenza.\n\nNkandagiye mu gikararanka\nAgakambwe karikanga,\nNti: \"Humura nyagakambwe\nNdi Mirindi y'abasore\nNyamuca mu gitaramo igitondo gitangaje\nI Nyanza kwa Rudahigwa\".\n\nRukamatamuheto rwa Mwiyahuzi\nNta rugamba adatwaraho ubugabo\nRukukumbashingwe rwa Mushimwa\nYakoze mu cyibo akuba icyinyo\nYari yarahiye Cyirima ko nta cyo yariye.\n\nUmuheto wanjye ni igitare\nWumva igitero ukavuga ibigwi\nIngabo yanjye ni isuri\nIsengatabaro ikingira iz'inkenzi\nBananiye Rukanikamugabo\nNdi uwaraye mu mihigo\nNdi Cyaradamaraye.\n\n\nIgice cya 2\n\nNdi agasiga kisize umutuku,\nNkitwa ikirashi cy'abahungu,\nNkitwa icya Rusengo.\n\nNdi bitugu ndi bigaragara ku iteme, ndi nyamurasa aho ngamije.\n\nNdi Bisogota ndi Bisogotanyi,\nNivugiye ku rusenge umwana yivugira mu nda ya nyina\nNta handi lyabonetse.\n\nNdi ingangare y'isata yasa abakinzi,\nMilindi y'abasore, rubanzilizangabo.\n\nNdi inkubito isanganira igitero,\nMu gitaramo cy'abandi bahungu, ndi icyago.\n\nNdi inkubito isanganwa igitero,\nRwagitinywa ndi imanzi,\nNdi umuhungu wemeye imihigo.\n\nNdi inkubito y'abato\nNkubita ingamba zikerekerana.\n\nNdi rwanga kubanzilizwa\nMfite amacumu mu milindi y'abato,\nNkubita ingamba zikerekerana.\n\nNdi umulinda abikwiye,\nNishe abantu babili imyambi itaratura impumu.\n\nNdi uwo balirimba ijabiro rigacya,\nRukerantambara ndi Rusengo basanga kwa Kagenza.\n\nNi jye Gisuma cya Rusekabahunga,\nNyabarongo ba Rugina, ati: Urumva Nyirangabo ngo ndagira?\nAti: Ndumva jye Gisuma cya Rusekabahunga,\nNyabarongo ba Rugina.\n\nNishe ibihembe nica n'ibikungu,\nnanirwa n'intwali zifite amacumu abili.\n\nNkandagiye agasaza agakambwe kaliranga,\nKati: kano kana ni agakenya\nNti: aha data si ndi agakenya, ndi agakinduzi ka Kigeli,\nUjye utarama ijabiro.\n\n\nIgice cya 3\n\nNkubise umunyagisaka amasaka arasimbuka,\nYiruka ajya kuyatora,\nNanjye niruka njya kumushahura.\n\nNkubitiye umugabo mu kazibaziba,\nAkazizi karamurenga, biruka bajya ku mushaka,\nNanjye niruka njya kumushahura.\n\nRukamatamuheto rwa mwiyahuzi,\nNta rugamba adatwaraho ubugabo,\nRukukumbashingwe rwa Mushimwa,\nYakoze mu cyibo akuka icyinyo\nYali yarahiye Cyilima ko nta cyo yaliye.\n\nUmuheto wanjye ni igitare wumva igitero ukavuga ibigwi,\nIngabo yanjye ni isuli, isengatabaro ikingira iz'inkenzi,\nbananiye Rukanikamugabo;\nNdi uwaraye mu mihigo, ndi Cyaradamaraye.",
//   //   },
//   //   {
//   //     id: 3,
//   //     title: 'Rugambwa abagabo',
//   //     summary: "Rugambwa abagabo bagarukira mu mahina, Rwa mutagisha icumu...",
//   //     details: "Rugambwa abagabo bagarukira mu mahina,\nRwa mutagisha icumu ritagisha urigemye,\nNaliteye umuhunde ku Gatare ka Mubindi, ndarimwicisha.\nSindakamudondoza, nalimukuye ngomba kulimiza imbuga,\nNdiringaniza n'uruti, ubwo umutuku walitembaga ku muhunda.\nUwo muhunde agera hasi atagitera umugeli,\nMbonye urubindo rwe sinatinda kumukeba,\nNanga gutahira uwo gusa kandi nagambiranye n'inkotanyi cyane.\nNi jye watwitse ingerero z'imikimbi, umuriro waturutse kuli Nkuba,\nNkingo na Runyana byahiye, irya mihana ya Nyamunonoka\nI Murambi wa Nkwiro yahavuye kivugiza,\nKinegero yavuze ko uwabishe ari Rucankambi.\nAti: Arakunyagiza iminega,\nIgihe bakiri muli izo mpaka haturuka ingabo z'i Kigali,\nNatanya Rugemamubili uwo ndamuhingana maze kumwonesha,\nMukuraho ibigwi ngira n'ibirindiro imbaraga yanjye yananiye indi mitwe.",
//   //   },
//   //   {
//   //     id: 4,
//   //     title: 'Ni jye Muzimyi!',
//   //     summary: "Nazinduwe no kuzitana n'umuzimyi muzimirizamo rwanti...",
//   //     details: "Nazinduwe no kuzitana n'umuzimyi\nMuzimirizamo Rwantizimira\nAhinduka umuzimu\nYahoze ari muzima.\n\nNisasira Musenyi\nNkiyorosa Muvumba\nImfizi yo mu basare.",
//   //   },
//   //   {
//   //     id: 5,
//   //     title: 'Inkuba Ibanza Gukubita',
//   //     summary: 'Inkuba ibanza gukubita ya Rwiratiramihigo, Ndi umu...',
//   //     details: "Inkuba ibanza gukubita ya Rwiratiramihigo,\nNdi umutoni w'intambara,\nIntwali y'Imbabazamahanga bankunda mu mihigo.\nBazi ko nahiganye umukogoto kuri Rutangira,\nAbagitwaye imiheto batinya ku iteme,\nUmutasi wa Basebya abonye natabaye ku isibo,\nAsubiza bene Nyirantwali\nAti: Nimuhungire kuli Rutangira twatewe n'Imbungiramihigo,\nZatabaye ari igisagara.\nJye waziboneye muri Jenda,\nZatwitse ingerero z'iRuhunde na Rugundu;\nAbantu baguye mu Gitanga,\nUmubisha watembagaye inkwaya ni uw'Inkerakulinda\nUwiseguye imitimba ni uw'Inkerabatanazi,\nUwa nyamuturukwaho n'intambara yapfuye agisobanura intwaro!\nUw'intwali bakundira amarere yaguye mu rukuko;\nUwa Rukomerwa aheze mu rukara rw'inkuba;\nUw'inkaburamakuza yapfuye yakongotse.\nIngaraguramahina we yamuhinganye nk'iminega\nIntwali ibanza mu iteme ya Rutebezandekwe;\nUwe yamuteye rwubikanshuro\nUwa Rushobora kulinda yaguye mu nshuro iraye;\nImbimbura kurusha ya Rutebezandekwe\nUwe yamuteye mu ivumbara ry'akato.\nIntwali yicisha abali, uwe yamushahuje indekwe.\nIndakaliraguhiga uwe yamuhamije amakuza,\nAkimuratira ayo makuru abona inkuba zihindana imirera.\nRutivanga n'impunzi nizihiwe n'inkindi;\nMunyankiko abwira Basebya\nAti: Sigaho uyu murasano nabonye abasore baduteye.\nUmwe ni Ruti na Rutanga na Rutagerura imbaraga,\nNi indatungurwa ya Rutuma\nAti: Rutiyegura amahina ibyo guhunga ntabizi!\nJye yasanze mu mahina namurashe imisakura,\nAndahira Rukanikasibo, ngo ntiyasubira inyuma,\nYanze gusiganira iteme na Rutaganira, ntawamuturukiraho\nAtera intambara umukenya ntakire,\nYatera inshuro akagenda inshucu imwe;\nYishima akulikiye induru akaboneza indekwe.\nIndabukiramihigo ya Rubuga ndi umusore sinifuza ko itabaro risiba;\nNtwara insatirabafozi, nayigize iyo kurengera imfura.\nNtako isa ni imfuruta murabaze Rwiratiramihigo,\nAho bavuze imitimba njya kuyiteranya n'Abakogoto\nNo mu itabaro sinayisiga.\nRusenyangogo igira urusenge ruyirangije.",
//   //   },
//   //   {
//   //     id: 6,
//   //     title: "Inkubito ya Rutagumirwa n'ishyaka",
//   //     summary: 'Rukabu rugusha mu rukubo Rukaziminega nkunda imi...',
//   //     details: "ukabu rugusha mu rukubo\nRukaziminega nkunda imihigo ikereye igitaramo.\nNdi ingabo itanguranwa ibanze\nRudasubira numvise induru ivuze\nNdi imanzi itagumirwa n'inkindi\n\nAbahizi bakagira intimba\nNgo ntibagira Ngabo isakarana inkindi\nInkezi ziyomba mu itabaro.\nNdi imbabazabahizi\nMpozaho ishyaka\n\nNi jye Ndibagiza bahisemo.\nNdi Rutanga baratira isata\nRudahogoza abo twatabaranye.\nRukabu mu nkera mbimbura aho rukomeye\nNdi intwari y'ingemanabikombe\n\nRutagumirwa n'ishyaka\nIshyanga barandirimba\nJye Rusenamugabo\nNdi inkubito ya Rutagumirwa n'ishyaka\nIshyanga barandirimba.",
//   //   },
//   //   {
//   //     id: 7,
//   //     title: "Inturo y'umujinya",
//   //     summary: "Ndi inturo y'umujinya yarutigerera igicuku ye...",
//   //     details: "Ndi inturo y'umujinya yarutigerera igicuku\nyenze ibara ry'igishwi n'ikibiribiri\nihirika mu rubingo iheruka gukoma ejo\nnitwa CYARADAMARAYE",
//   //   },
//   //   {
//   //     id: 8,
//   //     title: "Ibyivugo by'Amaningwa",
//   //     summary: "Igice cya 1\n\nl. Byavu bya Mureganshuro af...",
//   //     details: "Igice cya 1\n\nl. Byavu bya Mureganshuro afatiwe ku mwaro wa Gisaya, ati: \"mfite umuheto wanjye Rwego rugana urwo mu bagabo ku Cyeshero cya Ntosho, ngo pfukama umurase mugabo udashashira amagate, ndapfukama ingoma inyumva neza i Nduga, nyikatazamo mbwira Karinga ibigwi.\n\n2. Inshyikanya ku mubiri ya Rugema ahica, icumu ryera ikigembe nariteye umuhima kuri Gakirage, akirangamiye ubwiza ndarimugabiza riramugusha nk'ubukombe bw' intare; mbonye ko rimubaga ndamushinyagurira, nti \"aho si wowe wenyine, n' uw' i Bunyabungo ni uko namugize.\"\n\n3. Intwari bazi Rukazamihigo, ndi ubukombe bw' inyamibwa, indege y'amarere maremare yangurukanye bidatinze inkura i Bujumbura sa moya, ingeza i Bruseli sa tanu, nsanga abasoda bahangaraye, sinakurwa umutima nk'abanyamusozi, imbunda nyirekurana umurego.\n\n4. Intwari yemeye kurinda ya Nyirimbirima, imbuga nayituye mu gituntu cy'umuhizi, abatinyi bata ingabe, abatware bati \"ni Mugabo urasana ubudatuza wa Rwitarika amasibe, ngombwa ya Runihangabo, iyo njya kwegura ingogo sinuzura n' inganizi.\"\n\n5. Inyuramahanga isonga Ruhanika, Ruhimbaza kurwana rw'umutwe wahamye, iyo nuhiye uruti rw'umuniho ndwana ishyaka ry'iwacu, Rubabaza iteme Rudakukwa n'imitima, ngira ngo nshake ikigomwa cy'intore, aranga aramunshikana; Rwabiza icondo rirahinda, ngakubita ndi intwari y'ibanze.\n\n6. Mashema y'intwari ya Nyantaba, iyo nishimanye intanage intambara ndayiharira, nta we undinda mfite umuheto, nategeye n'ufite ingabo ndamurasa, urutoki rwa marere rucana n'amaganya; intoki zifashe igifunga zirakongoka, nywitira ko Rurigurabagabo; nawubonye inkaka muri izo nkuba, sindakawubona icyangwe; ndi kumwe n' icyaga twahize ubugabo.\n\n7. Minega yibasira igitero nkivuzamo inkota, umuhungu wo mu ngeri nemeye guhiga, ndi ruheza aho induru ivuze, ntimugira isuku mwe munzaniye irivaruganda! Ndwana ibyo nahize, ibyo guhunga nabigize terera iyo, umwami\nw'i Gisaka azi icyo namumariye.\n\n8. Mwerekerarugamba wa Rugemanduru, uwo basenga isuri wa Rusengatabaro, ndi sesero ry' ibyima, ndi uwabarinda ibyuma, ngeze mu nduru ngaruka mu ntambara nta bwoba.\n\n9. Ngoga ikotana ishyanga ngo hatagira igisigara, ya Rusengatabaro nabaye imena mu z' imbere, nta wangurana umukinzi byamukura ku nkomere zinkunda ibikabije, nazikingiye umubiri Kinyanza cya Butaka, nategetse urugamba\nku manga ya Ruharaye ndwiciraho.\n\n10. Ngambwa nabaye ingangare mu ngabo ntihagira umpinyuza, Mpabuka nta rugamba ntabamo ingenzi, ndi Ngeyo itayoberana aho rwamye, inanga ndutikura mo indekwe.\n\nll. Niciye i Bushora na Kibumbu, nicira i Buvugangema na Musekera, nicira mu Butagendwa bwa Ngiga, Rwirahira Musahaha rwa Musatirizanzira, bagize ngo Busigi na Ruserera ntiyambukwa, nayambutse ndi kumwe na munywanyi wanjye Rusengo rwo mu Ndaheranwa.\n\n12. Niciye i Bushora na Kibumba, nicira i Buvugangema na Mutakara, nicira mu Butagendwa bwa Musekera, bagize ngo Rusizi ntiyambukwa, nayisimbukanye impirita ndi inyamaswa y'imico myiza, yaruzimizambuga, ndi intwari y'amarere; niciye ku Cyeshero cya Ntosho, umwami angabira kabiri, ndi Rwuhiramisakura rwa Mirindi izira gutuza.\n\n13. Nkubito itihoreza induru, Rutikurana amakuza, nsanganya igitero n'iyo gihingutse ngiterana imbaraga, Ngarambe itikura imbere y'ingabo ndi Rwema badahiga, ndi Nkubito idasubiza imihigo ya rugamba, ni jye Rutavutsamakuza.\n\n14. Nkubito y'abadahunga, ndi Ruhungira iminega, Rwego rw'ikirenga; igituma abahungu banyita umusore, igihanga sinakimereye ubusa, kera nari igihangange. Ubu ndi igihezabugingo, ndi ingoro y'Imana, Rugaraguramacumu rwa Ngarambe, sindambirwa ku rugamba, nk'abahungu b'inkorabusa, ndi umusore Gatendera, Nkota y'umugara, nyamukemba abo isanze.\n\n\n\nIgice cya 2\n\n1.Kayonga ka Bwihura na Bwihuramisakura mu Bwira na Nyampaka, nishe Bitahura uruguma, ngira ngo nshake ikigomwa cy'intore, aranga aramunshikana; Rwabiza icondo lirahinda, ngakubita ndi intwali y'ibanze.\n\n2.Rubibi rw'intwali rwa Ntalindwa, Rudakemwa sindikura mu ntoki naliteranye icyusa, nabaye icyogere mu nyambo, nimanye inka n'inkomere nagimbuliye abatabazi mu Bweru bwa Juru, nabaculije inkumbi nacyuye inka n'imfizi, mba icyegera cy'umwami.\n\n3.Rudacogozwa n'abafozi indi mitwe yigishwa kurwana, sintoterwa gutabara ku nkiko ishyanga, iyo nkiranye n'intambara urwo rugamba rukirwa na bake; inkuba ya Runyagiranduru nkubita inshuro nyitera amacumu.\n\n4.Rudindagiza guhama, ndi itumbi rya bukana, nalindagije Mudakikwa na Mukikababisha, iyo nshatse kubura indekwe nsa n'inkangu y'i Buhoma. Igituma abahungu bankunda nuko ndaza umutima ku ngimbi y'umuheto, mu gitondo nkazawuzindukana, ndi isata bakomera igatumburuka, akambi kanjye k'urutete nagakubise umunyagisaka, nirukira kumushahura\n\n5.Rugaragara aho Indinda zikotanira, Rwamucurankumbi ndi rwisasira abarakaje imihigo, ndi rusanganirantambara, nkayikubita inshuro abatangira bakanyifuza; ingabo yanjye ni isuli ya rusanganira abafite imyambi\n\n6.Rugema rudatinya intanage intambara nyiboneza amakuza, Rwema rwo kubarusha nkundirwa no kuboneza inti, nimanye Rwabizambuga; nimanye Sekabwa ka Musanganya, nagimbuliye abatabazi mu mutwe wacu banyita inkaka, nitwa Rutagerura ubugabo\n\n7.Rugina ruhora umutware ku mutima, ndi rukera intabaza intambara imaze kurema imyambi irangira, ndi nyamwicara ku murere abakobwa bakanzanira inkuruba yo ku Muvumba, ivugisha umugabo amagambure; ndi nyamuca mu gakangaga abakobwa bakagacira icyo, ngo mico myiza yanyuze aha!\n\n8.Runihura rwa Kiroha, ndi Ruhigira rwa Ntindo ngera iyo rwaga nkarwana, ndi Rucyahirwa abo ndusha, kukotutarugeranaho, ndi Njyarugamba mboneza amakuza mu rukubo abatirinda bikubura.\n\n9.Rushimutamuntu rwa Nyamashara, ndi imfizi y'icyaga kandi ndi ingare n'ingalika mu mahina, nkaba imfizi itsinda bihinanye, ndi ruburamanywa Rwagitinywa, rutabura ubugabo ngeze mu babisha, Rwagitinywa rugina ntibamburanya itabaro, ndihoramo jye nyamibwa y'umutwe.\n\n10.Rutajabukwa n'imitima ingamba zimisha imituku, rwa Nyilimbirima ndi intwali inkotanyi yamenye; yanshinze urugamba rukora amaraso, ati Rwampingane! Nti: Rukaragandekwe nangana n'ababisha iyo duhuye ndarakara.\n\n11.Rutegurambura Rwagitinywa ndi Imana y'abatabazi, igihe nishe Gifashi zifashe aka Bunagana, nari umwana w'umushumba, baherako bandirimba mu itorero, icyo gihe na n'ubu nitwa Inkomezamihigo nabyirukanye nkili umwana.\n\n12.Ruti rutikura intore intambara icy'ubwo Rwagitinywa, ngira igitinyiro mu bahungu, nkaba ruhananti mu gituza intwari zimaze gushyikirana; nkaba rushitamugabo, nkubita negura inshuro, umuheto wanjye ntukezwa n'abirabura.\n\n\nIgice cya 3\n\n1.Ruyenzi rw'ivumbi, nagiye gusoza urugamba nsanze ruremye ngumayo, ibitugu ndabitigisa, imyambi ndayisukiranya, abari mu mpinga ya Rukukumbo bati: Ubanza ariho ruremye, bati: ya Ndemarugamba iranesheje ujye utarama ijabiro\n\n2.Rwabugiri yari yansizeho intwali yo gutsinda amahanga, zirakubira nku bita iy'imbere, nica Senyamabango mu Butagendwa; uwo nyina asohorezaho umutima ndalimucinya rimucikiramo; nti: Wimvunira uruti nta handi nzakura umunzenzi; ndi Nyamutwarajoro mu ijanja, ryanga gucya nkalibangira ingata, ndi akamasa k'ubugabo ka Rwangaguhunga, wakagera mu ruhanga ukaba wihaze amagara\n\n3.Rwigerezaho intwali zisarika n'ababisha rwa Mutagisha ndi ubukombe banshimira imyato, ntwara umuheto ukaba impangare uhora utaruhuka intambara n'intanage zawo zirawizihiye. Nyimbuzi ubwo aduhereye inkindi i Kabare, ilya mpinga ya Kirabo iratwibonera, ilya mpinga ya Ngoma kwa bene Mbogo ntituragatuma bageza imbavu hasi; uwo muheto wararanzwe Shyali hirya y'ishyamba lya Ngabe, wararanzwe Nyarusange rwa Ngeruka hilya y'urugerero rwa Magege; wararanzwe Manyeli ya Mashinga hirya mu ishakiro ly'inkuba n' amasirabo, zawishinjijeho ntizawukuraho n'ibango na limwe\n\n4.Rwizihirangabo rwa Mugenza, icumu ririnduza abatanagishije, naritoneshereje uku1i ubwo nditeye nyili umuheto ku Gatare ka Mubimba, naramwishe sindakamudandaza, yaborogaga ryamugejejemo ubugi rirasohoka risesa amaraso, aralisinda nk'uwari asanswe hasi, liramuhorahoza nk'uwo kuri Mashaki, nalibanye igisagara mu ntambara y'ibuvune, narivunyije bene wabo barapfa barashira, n'abasigaye barahaba, ryabahalishije igihugu cyabo\n\n5.Umuheto wanjye ni igitare wumva igitero ukavuga ibigwi, ingabo yanjye isengatabaro ikingira iz'inkenzi bananiye Rukanikamugabo, ndi uwaraye mu mihigo ndi Cyaradamaraye.\n\n6.Umuheto wanjye ni ikiramvuramvu nawuramvuye hakulya y'ishyamba lya Ngabe, inzovu n'intare zawikubanzeho ntacyo zawutwaye, zawusize uruheha mu ruhekane rwa ruguru, nywugejeje imuhira abakobwa basiganira kuwusiga, abahungu basiganira kuwisimbuka; nishe agasimba gasa n'umuntu mu mpinga ya Rukukumbo, maze gutontoma nk'intare, ujye utarama ijabiro.\n\n7.Umuheto wanjye n'umutana, nagiye impaka n'umukinzi ngo ntiyatoboka, ubwo ndapfukama nkoma imilindi hasi ibyuma byivugiza nk'ingoma hejuru y'ingabo, arashya wese wese bose batinya kumukora ngo badashya ngo yanyagiwe n'inkotanyi cyane; ni bwo negukanye izina ry'ubutwali nitwa Ruhalirwashema rwa Yuhi; ni jye ngabo itabwira ababisha neza, maze abatakili umutwe w'inkomezakulinda bagahungana iminega, ujye utarama ijabiro.\n\n8.Uwo indamutsa idakema na hato, rutiyuhiza umuheto nkunda gutakisha, warakaliye itabaro, sinawutiza mu ngango nagambiliye n'umutasi nti: Uze kuntabaza mu museke, sinacana mbaliye urukerera ngishyikirana n'intambara intoki nzongeramo umurego, ndafora ntambutsa urwano, ngejeje ku nkike y'urutugu, umukinzi mutera ubwoba ingabo ye nyishingira imitimba mu mabara, amabango amutakara imbere; izuba ry'amanywa rimuvuyeho ntiryamumara imbeho, nsigara nsingiza uwantanagiye.\n\n9.Uwo inyamibwa itarumvwaho gutinya, sindakawutinza mu ngango nagambiliye n'umutasi, nti: Buzajye gusesa nicana, nshyikiliye Rwamuza n'umuronko, intoki nzongezamo umurego ntambutse Urwanda umukinzi mutera ubwoba, iyo nkuba yo mu z'i Ruguru nanga izi ntambara nitwaza Rusenamugabo; Ngoga bavuga inkubito impinga ibyaye iz'umutwe, nitwaza Rwuhambavu.\n\n10.Uwirahira bicika uwananiye aho rukomeye wa Rukikanshuro, ntwara ijana ry' imisakura ndi Indoha barata y'umurasanyi wa Rutisukirwa, Kalinga nayimulikiye imyambi yasohotse, na Rushimirwabigwi ati: Mbe ntwali yo mu masonga, ati: uraze n'amashinga yanshinguraga ingobe mu ngondo ingundizi mu bitugu.",
//   //   },
//   //   {
//   //     id: 9,
//   //     title: "Nyamubuza ababisha kwishima",
//   //     summary: "Rudatsimbukirababisha intambara nyish...",
//   //     details: "Rudatsimbukirababisha intambara nyishyize imbere\nRutagengerwa n'ababisha rwa Mugumya\nUmugabo wiciye muri Gikare cya Ngabe\nYayipfuye na Muhozi\nInyamuno yayikuye Ruraha na Mivumba.\n\nNdi umuheto utembereza igitero\nKu gitero cya Ruhunga mpamya Mutijima.\nNdi Nyamubuzababishakwishima wa Rwabizandekwe\nUko ntabaye ni ko nyaga\nSinzana amagasa masa.\n\nNdi Nyamubuzababishakwishima wa Rwabizandekwe\nNdi Nyamurangamirwanishe wa Rudacogora\nNdi Impunga ya Macikirwa yacuze inkumbi rukirema\nNdi umunya batinya wa Rutindamirambo\nInkongi zituye imirindi mu rwanga\n\nUmuhunde yambanje uruguma i Buguzi na Mwito\nNkabarusha inkongi zituye imirindi mu rwa Ngabo.",

//   //   },
//   //   {
//   //     id: 10,
//   //     title: "Igituma bandirimba",
//   //     summary: "Igituma bandirimba mu bihugu byose Ngira ibi...",
//   //     details: "Igituma bandirimba mu bihugu byose\nNgira ibirindiro bishyika ku ijana\nAbazi kubara barahanshinga.\nHari uwo niciye mu Ishishi no mu Bushora na Cyimbu\nNo mu Ruvugangoma rwa Musekera\n\nN'icyuma navugirije kuri Cyinuma.\nNiciye i Rubona rwa Tunda\nNtamirije umuheha mu ruhanga rw'inyambo.\nNiciye ku Rutambabarenzi rwa Kidaturwa\nNtamirije uko ntamirije uku.\n\nNica Bisangwahabona mu Mushya wa Murori\nMporera Nubaha akibona.\nNica Rutuku ku Ihenda anyihamagariye.\nNiciye mu ritagendwa rya Ngiga\nNdyivugiyemo rihinduka ibirori gusa!",
//   //   },
//   //   {
//   //     id: 11,
//   //     title: "Munanguzi wa Runihurambogo",
//   //     summary: "Rutebukanimbunda imbere y'abasore Rwa Muda...",
//   //     details: "Rutebukanimbunda imbere y'abasore\nRwa Mudasumbwa ntasumbwa\nInkaka ntahindagara habyutse imbogo\nImbirizi yazimaze mu ruzi.\nIyo yagambiriye umuhigo\n\nAhiga mu museke\nAmasasu akayasobanura\nAri Munanguzi wa Runihurambogo.\nImpara ziramurahira\nIyo ahize i Mutara amatamu ararwibonera\n\nYiciye Kibingo cya Rukayire\nYicira Kigarama cy'Intaganzwa\nYicira Mwiri na Rumuri.\nMuri Nyakare kwa Rwisumbura\nYishe Musumba wa Ruguru\n\nNa Maburane ya Giseke\nRwishiki rwa Matunguru\nIgitondo gitangaje\nYatanze abandi kwirahira\nUwamuhigaga urugero ati:\n\n\"Nimuze duhige Rugege\nRugerero aberetse ibigeni\nArasa imigereka\nBagerura imihigo\"\nRugerero rwa Buruhukira\n\nYahiganye n'abarekezi\nYica urukeza rw'ingwe\nIngurube zihunga imigano\nYayiganduje abahutu\nKu Rutabo rwa Jenda\n\nIjoro ritahanye umwijima\nYambara amatabaza.\nIngwe iteye ubwoba\nAbatindi bo mu Mutende\nAtanga abandi guhurura\n\nNtiyahumbira nk'abanyabwoba\nAyirasa izuru izuba rijya kurenga\nAbazungu bamukora mu ntoki\nKo abakijije intambara y'ijoro!",
//   //   },
//   //   {
//   //     id: 12,
//   //     title: "Icyivugo cya Mahingura-Impunyu yo mu Rugezi",
//   //     summary: "Mirindi idakangwa intama Ariko intambara nkayi...",
//   //     details: "Mirindi idakangwa intama\nAriko intambara nkayikanga\nNdi ipfukamiro ry'amakombe\nAho mfukamye hacika itaba.",
//   //   },
//   //   {
//   //     id: 13,
//   //     title: "Imfura ni nde?",
//   //     summary: "Imfura ni uwo musangira ntagucure Mwag...",
//   //     details: "Imfura ni uwo musangira ntagucure\nMwaganira ntakuvemo\nWapfa akakurerera\nYakena ntiyibe\nYakira ntiyirengagize ukennye!",
//   //   },
//   //   {
//   //     id: 14,
//   //     title: "Inkerarugamba y'umuhungu",
//   //     summary: "Ibyivugo by'abagabo 1\n\nInkerarugamba y'u...",
//   //     details: "Ibyivugo by'abagabo 1\n\nInkerarugamba y'umuhungu\nAb'imihisi ntibamburanya imihigo\nBarareka nkayibanza jye ngabo y'umutwe.\n\nNdi imbonezamyambi ya Rugina\nNdi umugirwa w'intore\nIntambara iteye ubwoba nyibanza imbere\nNdi Ruterabwoba ndi Rutaramanaguhiga.\n\nNdi isata ishoka bagasamara\nNdi bishyika bishyika umutware ku mutima\nNdi Inshyikana ku mubiri\nNdi ingeri yasumbye inkiko.\n\nNdi Mihigo itarambira abahungu\nMinega icyaha induru\nRubabazigitero igitaramo gihimbaje\nNdi Rutikanga urukubo ndukotanamo.\n\nNdi Ngabo itagerura icyusa ya Runyagiranduru\nIntambara ngezemo ntishogosha\nNkaba imanzi y'abacu.\n\nNdi Ngoga bavuga inkubito\nNdi Rukerakubarusha\nInyamibwa narogeye mu yindi mitwe.\n\nNdi Rubimbura ahananiranye wa Simpunga\nUmuheto urengera imfura nywuhorana mu ntoki.\n\nNdi Rudakubana mpamya induru\nIndamutsa murwanira ishyaka\nNdi umuhungu udahehembya amakuza\nNgira impambara mu mihigo\nNkesha indatirwabahizi.\n\nNdi Runihura mbanje mu iteme\nIntwari bahariye ibanze\nRudasongerwa n'amasibe\nNdi inkuba ihindana iminega.\n\nNdi Rupfukamiramakombe rwa Nyamukeba\nNdi n'Imanzi ya Rukubamo\nSemwaga wa Rugango\nNdi ingabo inesha igitero.\n\nNdi Rutayoberana mu nduru rwa Semwaga\nRukabu ntwara Rubibi rugerna ikirari\nNyibana mu nduru\nRunihuza iminega\nNdi icyamamare cy'umutwe.\n\nNdi Rwema rw'intare Rubaririzakobe\nInshongore sinagarambye ndi Rubabazigitero\nNdi umugabo ushita ababisha ku ndekwe wa Rushimirwabigwi\nNdi umushumba w'urugamba\nNdi uragira amakuza.\n\nNkubito itihorera induru\nRutikuranamakuza nsanganya igitero\nN'iyo gihingutse ngiterana imbaraga\nNgarambe itikura imbere y'ingabo\nNdi Rwema badahiga\nNdi Nkubito idasubiza imihigo ku rugamba\nNi jye Rutavutsamakuza.\n\n\nIbyivugo by'abagabo b'intwali 2\n\nImpindanyamugabo ya Mpabuka,\nNtwara amacumu asohoka mu ngabo.\n\nIngabo yanjye ni isuli ibana n'iya Rusanganirantambara,\nIyo nyishandaje mu rugamba ntirugaruka,\nAbabisha banyita Rukenyantambara.\n\nIngare ya Ruhanga ndatsa rugashya.\n\nInkomeza kulinda ikubitana ishema n'isheja ry'abato,\nNdindana ingabo.\n\nInyamibwa ikwiye Musinga, ya rusakara mu mahina,\nNtwara umuheto w'urusobe.\n\nInyamibwa yo mu nziza, ya rutazilikana guhaba,\nUmuheto udashyirwa isuli imbere, nawugize mana y'abagabo\nNtawanjye ukomereka nywufite.\n\nIyanjye ngabo ni igitare ibana n'iya Rutambikamugabo.\n\nNdi igikwerere maze guhama, ndi ubukombe butava izuba,\nNdi nyamutera inka kureta.\n\nNdi igisagara cy'ubukombe kidakomwa imbere n'abashakamba.\n\nNdi impalirwasibo ya Rukemasibe, simpunga zicana.\n\nNdi impuruzwa y'impezamihigo, rudasubizwa n'induru,\nN'ubu mu mahanga baracyandilimba,\nNgo icumu lyanjye ni rudahararukwa n'intoki.\n\nNdi inshogozamugabo, niciye mu ntanzi,\nAbatari intore intambara irabagarukana.\n\nNdi ingorabahizi nisheshekajeho inkindi, ndi ruti batinyira ubutwali\n\nNdi inkubito idakubana mu ishiraniro, rushengererantambara,\nIntore itumirwa aho rwaremye, ndi rutsirika ababisha igihumbi turwana.\n\nNdi inkubito ya Rutikurana, Rwagitinywa icyaga cy'inkwaya,\nRutaganira n'icyangwe, ndi Rucyaha igitero.\n\nNdi intore ya Nyantabana, ntawe undinda iyo mfite umuheto.\n\nNdi Mihosho ya Rutare, ndi rutaramana guhiga,\nRutirengagiza induru, intwali nshaka kwuhira indekwe.\n\n\nIbyivugo by'abagabo b'intwali 3\n\nNdi Minega icyaha induru Rubabaza igitero,\nInyamibwa y'abankunda\nRwema rw'umutwe ndi ingenzi ibamenera.\n\nNdi Minega idasa n'impunzi, intambara isezeye abayisalika,\nRwamwaga nsezera ingabo.\n\nNdi Minega ya Rubimbulirangabo, sintiya gukotana ikobe livuze.\n\nNdi Minega ya Rugambwa, ndi rukanika abo ndusha kuba umutwe.\n\nNdi Mutarugera wa Rugina, ishyanga mpagomwa umusore.\n\nNdi Mvutaguranamitali ya Rutamu rw'isabutanga,\nUwo abatware bakundira icyusa,\nMu Mbuga na Nyamisagara nasatiye intambara.\n\nNdi Ngoga ihanikira abatinyi, abatali aho rukomeye bakubirwa inyuma.\n\nNdi Ngoga ya Rugango, urugangazi mpindana umwaga.\n\nNdi Nkubito ilirimbwa ku iteme ya Rutanguranwashyaka,\nNdi ruti rwemeye amahina,\nNdi Ngoga bavuga imbaraga ya Rubabazandongozi.\n\nNdi Nyamuhurura bahunga, wa Ruhozamihigo, ndi Ruboneza ayera ibirenge.\n\nNdi Nyamukabukira ilidahemba, lyajya guhemba ligahetura.\n\nNdi Nyamutikura inshuro ibigembe wa Rugemanduru,\nUmugirwa w'urugamba narukenesheje banyaga Inyagirabahizi.\n\nNdi Rudacogozwa n'abafozi, nikingiye ingabo itanyeganyega.\n\nNdi Rudakenga bavuga imihigo, rutaganira nsumba ibigarama,\nInkebamugabo ya Bigaga, narashwe mu biganza mvuna igaju lya Munana.\n\nNdi Rugaragara ku rugamba rwa Nyandekwe,\nImfizi irwana ishyaka, ishyanga, baranyifuza,\nNgo ndi Milindi imenera ingabo.\n\nNdi Rugaragara urugamba rukomeye,\nNdi rusesa igitero igitondo kigatangaza.\n\nNdi Rugaragara mu z'imbere, rushinguka mu z'inyuma,\nRuterabwoba, Sebuharara Nkombe ya Rugina\nNimanye inka mu nkoko, inkomere zinyita Rugina.\n\nNdi Rukanika amakuza, ndi Nyilimbaraga y'ishyaka,\nIshyanga ntibaranshira amakenga,\nNdi inshongore ikaraga ababisha, ndi ruti rutavaruka n'amahanga.\n\nNdi Rukelikibaye amasonga abaliriza iyo bicika.\n\nNdi Rusakara nkubita inshuro rwa Ngabo nziza,\nNiciye ku cy'ihubi, abahungu bahurura bantabaye,\nNkitwa inkerarugamba itagamburura mu mihigo.\n\nNdi Ruti rutavaruka n'amahanga, abo mu mutwe wacu baranyifuza,\nNgo yaje Rukabu bisunga isonga batijana.\n\nNdi Rutinywa rutima intambara igicuza, ndi icyaga kibageruza.\n\nNdi Rwamamara mu ntambara,\nRwa Mutagisha imitwe y'imenerarugamba,\nIyo nzilimo ntizikubana ngungiza amahina.\n\nNdi Rwema rw'abahizi, rwogezwa n'abagabo rwa mucurankumbi,\nAbanyamahanga bangize indahiro.\n\nNdi Rwigerezaho intwali zisalitse,\nNdi nyamuca aho batinya wa Rubuza imanzi gutabara,\nNdi ruti ruhorera abishwe n'imyambi.\n\n\nIbyivugo by'abagabo b'intwali 4\n\nNdi Rwogezwa n'ingabo rwa Ngango,\nSingarambira urugamba nka rubanda rw'inganizi,\nNtwara amacumu adahemba.\n\nNdi umunihuzaruti wa Rutamu urugamba dutonganye ntirutaha,\nNdi rubalirizakobe.\n\nNdi umuzibanduru wa ruzingandekwe, ntwali imena urugamba\nIyo nyibanguyemo amakuza abatali isibo barasigana, nkarwigiraho na Nkubito.\n\nNdi uwo amahina adakura umutima,\nUwo imbambanyi zikundira kwizera wa rwuhirandekwe,\nNdi umutegeka w'intambara intore zangize uwo kulinda.\n\nNgoga yasiliza mu masoko, Ntare yasanze ndi rusumbanyamugabo\n\nNibiliye mu iteme niburukira mu itabaro,\nIntukura nyikuye mu za Matama,\nUmubisha mutambika ku ruhembe rw'umuheto.\n\nNyahuzi y'amacumu ndi rutinyirwa amakuza,\nIyo ngeze mu gitaramo nta mutware umvugana impuhwe,\nNdi Mwaga w'Indinda.\n\nNyamuturuka intamabara ku mutwe,\nNyitera amacumu ngira ngo idakira uwa Rugemahabi,\nNdi Njyarugamba.\n\nNyili umuheto w'imfuruta nawukubise umuhima ku nda,\nUmuhimakazi arayidoda, nkaba rukindurambavu.\n\nRubabaza igitero rucyaha abaganizi, inyamibwa idatinya,\nNtera inshuro ntigaruka.\n\nRubabaza kubarusha, rugumaguza ingango,\nRushengurana inkindi, inkuba idasongerwa nishe Sumiramya.\n\nRucumitanamifuka rufungulira amaco,\nIcyo abandi bamukundira ntacikwa n'uwo yahamije.\n\nRudakenga bavuga imihigo, rukemampunzi batijana,\nNdi inkuba irakazwa n'induru.\n\nRudatsikira yumva induru rwa Nyandekwe,\nNdi indongozi y'urugamba, iyo ruvutse ngenda imbere.\n\nRugaragara ahananiye ingimbi rwa Ngabo nziza,\nNkubita urugamba rugishyikirana, nkaba ruhindananjunga intwali y'ibanze.\n\nRusakarana inkubito Rwagitinywa,\nInyamibwa yo muli izo nkuba, ndi rulirimbwa ahananiye indi mitwe.\n\nRushimutamuntu rwa Nyamashara,\nImfizi y'icyaga kandi ndi ingare y'ingalika mu mahina,\nNkaba imfizi itsinda bihinanye, ndi ruburamanywa Rwagitinywa.\n\nRutabura ubugabo ngeze mu babisha,\nRwagitinywa Rugina ntibamburanya,\nItabaro ndihoramo jye nyamibwa y'umutwe.\n\nRutaganira nenze ingabo, rusuzuguza abo twahigiye gusohoka,\nNdi imanzi mberewe n'umurera.\n\nRuti bataramana inyuma, ruboneka mu b'imbere,\nRusatira aho twateye, rutagarukanwa n'inshuro.\n\nRwigerezaho nkumbuye kuba intwali,\nRwa Nyilimbirima ntwara imbibi y'umukore, sinyigura umukinzi,\nNiciye mu rwamu rw'imbunda, imbungiramihigo zizi icyo nazimaliye.\n\nRwononamirera rwa Mugema, ndi ikibyiruke cy'inzovu,\nNarasaniye mu bikombe ibitare birakuka,\nAbo mu gicu birahira Rwahama rw'i Muganza.\n\nMihigo itikura isuli igasandaza n'uyikinze, si ndi isibo muli izi ngabo\nUwarobanura ingenzi yambanza jye nyamibwa.\n\nMugabo umenera intore mu ntambara iteye ubwoba,\nYishe nyir'ibiti, yiciye Nyamikingo umwami yamutumye,\nYishe na Rugina rwa nyir'icyahi.\n\nMuribuzi wa Rumanzi inyota y'amacumu;\nRunyagiramihana n'ubu ni ingwe, akumira urugamba,\nNi inkerarugamba itagamburura.\n\nMunyurangabo wa Rugango, rugandura amakuza,\nMbona amakombe y'ibyuma nkarwanira kuyasanga.\n\nMunyurangabo wa Ruhuta, umuhungu sinitalika intambara zambonyeho Rugina.\n\nWambajije Mudakikwa na Mukikwababisha,\nIyo nshatse kubura indekwe nsa n'inkangu y'i Buhoma.",
//   //   },
//   //   {
//   //     id: 15,
//   //     title: "Inkatazakurekera",
//   //     summary: "Inkatazakurekera ya Rugombangogo Ndi in...",
//   //     details: "Inkatazakurekera ya Rugombangogo\nNdi intwali yabyirukiye gutsinda, nsinganirwa nshaka kurwana\nUbwo duteye Abahunde, nywuhimbajemo intanage\nIntambara nyirema igihugu cy'umuhinza nakivogeye\nUmukinzi ampingutse imbere n'isuli,\nUmurego wera nywuforana ishema\nNywushyizemo ukuboko ntiwananira,\nNongeye kurega inkokora nkanga umulindi hasi, ndarekera.\nInkuba zesereza hejuru y'icondo, ikibatsi kiyicana mu rubega\nIntoki zifashe igifunga zirashya\nImisakura imucamo inkera, inkongi iravuga mu Gihengeri\nMu gihumbi cye inkurazo zihacana inkekwe\nInkuku yali afite ihinduka umuyonga agera hasi yakongotse\nUmubili we uhinduka amakara n'aho aguye arakobana\nNk'ukubiswe n'iyo hejuru, abaho batinya kumukora,\nBati: Ubwo yanyagiwe n'Inkotanyi cyane,\nNimumureke mwe kumukurura ibisiga bimukembere aho.\nNa byo bimurara inkera, bimaze gusinda inkaba,\nByilirwa bisingiza uwantanagiye.\nImbungiramihigo sinahagararwa hagati nk'abatagira ishyaka,\nIshyamba ry'umwimirizi ndiremamo inkora.",
//   //   },

//   // ];

//   const fetchBoxesData = async () => {
//     try {
//       const response = await fetch('http://localhost:4050/api/ibyivugo//ibyivugo');
//       const data = await response.json();
//       setBoxesIbyivugo(data); // Update state with fetched data
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };
  
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
//       <div className="mt-16">
//         <h1 className="section-heading">ISOMERO</h1>
//         <hr />
//         <br />
//         <p>
//           Nkuko amateka y’ubuvanganzo nyarwanda abigaragaza, umugani n’ipfundo ry’amagambo atonze neza, Gacamigani yakagiriyemo ihame ridutoza gukora iki cyangwa se kudakora kiriya. Mbese muri make umugani ni umwanzuro w’amarenga y’intekerezo. Umugani uvuga ukuri, ariko muri kamere yawo ntabwo wo uba ari ukuri. Zimwe mu ngero z imigani migufi:
//         </p>
//         <br />
//       </div>
//       <div>
//         <section className="text-gray-600 body-font">
//           <div className="container ">
//             <h1 className="flex section-heading">Ibyivugo</h1>
//             <p>
//               Ibyivugo ni nk' ibisingizo bisingiza intwari ku rugamba, bigasingiza intwaro, zikarata n'ubutwari bwabo. Ibyivugo by' imyato, byabaga ari ibyivugo birebire kandi bikagira ibice bitaga "IMYATO".
//             </p>
//             <br />
//             <div >
//               <div className="mt-16">
//                 {selectedBox ? (
//                   <div >
//                     <div className="expanded-box">

//                       <h3>{boxesIbyivugo[selectedBox - 1].title}</h3>

//                       <div className="box-details">

//                         <button className="back-button" onClick={handleGoBack}>
//                           <FontAwesomeIcon icon={faArrowLeft} />
//                         </button>
//                         {breakDownDetails(boxesIbyivugo[selectedBox - 1].details)}
//                       </div>
//                       <div className="overlay" onClick={handleBackClick} />
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="boxes-container  ">
//                     {boxesIbyivugo.map((box) => (
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
//           <Imiganimiremire/>
//           <Imivugo/>
//           <Imiganiabana/>
//           <Indirimbo/>
//           <Inka/>


          
//         </section>
//       </div>
//     </div>
//   );
// }
