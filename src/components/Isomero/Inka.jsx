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
    axios.get('http://localhost:4050/api/inka/inka')
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
          <h1 className="flex section-heading">
      <span className="highlight">AMAZINA</span><span className="spacer"></span>Y <span className="accent">INKA</span>
    </h1>
            {/* <p>
              Ibyivugo ni nk' ibisingizo bisingiza intwari ku rugamba, bigasingiza intwaro, zikarata n'ubutwari bwabo...
            </p> */}
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

// export default function Inka() {
//   const [selectedBox, setSelectedBox] = useState(null);

//   const handleBoxClick = (boxId) => {
//     setSelectedBox(selectedBox === boxId ? null : boxId);
//   };

//   const handleBackClick = () => {
//     setSelectedBox(null);
//   };

  

//   const boxesInka = [
//     {
//       id: 1,
//       title: "Ingoro y'umwogabyano 1",
//       summary: "Rutagwabiziminega,\nInkuba zesa mu Bih...",
//       details: "Rutagwabiziminega,\nInkuba zesa mu Bihogo,\nRwa mugabo nyirigira,\nImbizi isanganizwa ingoma,\nN'umugabe w'i Ruyumba,\n\nIkisesura imbibi,\nIkaba mu mariza y'impeta,\nIgasa n'inyamibwa rwema\nIkitwa nyirazo rwose,\nAkaba ari yo itegeka Ingeri,\n\nImpinga zambariramo\nNta nyamusozi ihagera,\nZiba ziteretse inyamibwa\nBakubuye imanzi\nAbahoranye amarere\n\nYo kurata Izamuje,\nZa bene Rukaka,\nBasanze zigaramye,\nBaziguruka amahembe\nYabageza i Nyarubuye.\n\nNa bo barorera guhora,\nNaho batahije inkuku;\nInyambo baragiraga,\nNi bwo bazitanze,\nBagira ngo inkuba nyirazo\nIkunde ireke bature.\n\nSi ay'ibiganiro,\nZa nkuba z'i Murambi,\nNgaha zirahagurutse,\nNdumva umurishyo usuma.\n\nIzitwa Ingeri z'i Mwima,\nUmwami arazihamagaje,\nZirajya kwambara inkoba;\nNdebe amashyo y'i Rukara\nKo abona inzira akiriramo\nIngoro y'Umwogabyano.",
//     },
//     {
//       id: 2,
//       title: "Imyitirire y'amazina y'inka",
//       summary: "Iyo inyambo zabaga zimaze kubyara ubu...",
//       details: "Iyo inyambo zabaga zimaze kubyara uburiza, umutahira w'inyambo yatumiraga umwisi, akazitegereza neza, maze iz'ingenzi muri zo akazita, akaziha inshutso. Yamara kuziha inshutso agataha. Ubwo bamuhaga inka y'intizo ikamwa, yamara kuyitekesha akayisubizayo.\n\nIyo ubushyo bwa za nyambo bwamaraga kubyara ubuheta, bongeraga gutumira umwisi ngo agire icyo yongera ku nshutso. Ubwo yitaga iy'indatwa muri za mpete, akayisingiza. Inshutso yari yarayihaye mbere ikaba ari yo ibanza, ikitwa impamagazo, igisingizo cya kabiri ayihaye kikitwa impakanizi, ibindi bisingizo bikitwa imivugo. Igisingizo cya nyuma kikitwa umusibo (iyo cyabaga gisingiza ya ndatwa y'isonga yonyine) cyangwa imivunano (iyo cyabaga gisingiza za ndatwa zose yari yarahaye inshutso mu ikubitiro). Yamaraga gusoza uwo murimo wose wo kwita inyambo bakamuha inka y'ingororano akayicyura ikaba iye y'ishimwe.",
//     },
//     {
//       id: 3,
//       title: "Inka y'inyanja",
//       summary: "Ruti basingiza kudatinya\nIntwari zih...",
//       details: "Ruti basingiza kudatinya\nIntwari ziheta iminega y'indekwe\nRwa ndirima ya Rukemampunzi\nIngeri ibanza ku mpuruza\nIbanguye rukikampiri\n\nIcumu ryesa impingane;\nYarikuye mu y'i Mpushi\nBarikebye impundaza\nRigahorana impambara.\nReka mpabuka iritoneshe:\n\nIyo irikuye mu gitugu\nNtiritera hasi\nIhora iryuhira umutuku\nInka itemba ku rubango\nNi irya Rubuzakuniha\n\nRigakatirana imberera\nIkarikunda mu mbaraga\nRijya kwanika imirambo;\nRyabimbuye isahaha\nZigisobanura indekwe;\n\nYarimenyereje amaraso\nNtirimenya gusiba inzigo;\nIkaritwara izira ubwoba :\nYaritunguje abarasi\nBaririmbye inkuku isumba\n\nIcyo gisigara bagiheramo\nUrugo rwabo irarusakiza;\nUsohotse kumena urukubo\nAkaba Ndekezi barabonana:\nIcumu ry'indemarugamba\n\nIryuhira rihaze indekwe\nRimuheramo n'umuhunda:\nArariheka mu mugongo.\nAbura uwamuhumuriza,\nAbura uhamagara i Kabare;\n\nMwene Karuranga\nAbona ababo b'i Gacuba\nAti, \"muramenye gucabuka\nMudashirira ku macumu\nNgiye guca iy'Irango\n\nNjye kubaza Munyuzangabo\nAbaragiye inkuku iyo bajya!\nInkuba nsize mu z'i Murambi\nNtimenya gusongerwa\nNi iy'Imesarubango:\n\nUbwo izisumbya inkubiri\nNirengagije inkoni\nNgo ejo Nkubito itampotora;\nNone uw'Impayamaguru\nAmbwiye uwo ifashe mpiri\n\nMu mpinga ya Ntunga\nNtinya guca iy'i Ndera\nNgo Ingeri y'Indengamimaro\nItangarika mu nduru!\"\nNtizi kwica indagano\n\nIberwa no gucura inkumbi\nInkuba zose ikazitegeka;\nNtimenya gusiga inkomeri\nIbana ishya ku nkiko\nNa yo yitwa Inkebabugingo.",
//     },
//     {
//       id: 4,
//       title: "Inka ya Kanyamashokoro 2",
//       summary: "Ni yo rukataza ijya mu bavumbu,\nRutayabum...",
//       details: "Ni yo rukataza ijya mu bavumbu,\nRutayabumbira kuyagarura,\nRutaguranura mu ntoki,\nRuteturura kugira isumbe,\nRurema inkera y'ijoro ryose,\n\nRutara iminwe nyir'inka yaje,\nRubuza kwifata impungenge\nImfura ziteraniye ikambere;\nRubabaza rubanza iy'inturire,\nRubangura inti zo mu bitembo,\n\nRushyira ikintu mu kindi!\nRwamurenzi nzi ko agira ihinyu,\nAzabishima yashyingiye!\nIgituma byose bibyara inzoga,\nNi ibisabo bihorana isuku!\n\nN'uwakwaduka ari rucunzi\nNtiyarinda guturukira\nUmuntu utunze Incumarusika!",
//     },
//     {
//       id: 5,
//       title: "Inkuku y'ikirezi 1",
//       summary: "Isanze nshaka kurembera,\nSemuramba i...",
//       details: "Isanze nshaka kurembera,\nSemuramba iramburana,\nIti, \"humura ntabwo mugiye!\nNtugitemoye mu nzoberanyo!\nNtugakangwe n'irya mirabyo,\n\nNgaha kandi imirama iraje!\nUmwami aho yageze i Bweramvura,\nNta mivumbi iramuka y'ijuru!\"\nNanjye nkaba nashenguwe n'imirambo,\nNzirora hasi nabuze uziguza!\n\nNti, \"erega wa nka we urambeshya!\"\nIti, \"ko muteretse amapfizi abiri,\nAbapfuye ari impehe bo ntibahoze?\"\nNje kwishima numvise iryo,\nMbwira abandi twegamiranye,\n\nNti nimucurure imitima mwese,\nTuri n'Umwami wezeho amata!\nNahoze numva abaja bacunda,\nBari mu bicuba bacuranura,\nIsoro bayinura mu mijago:\n\nImidomo kandi ishubije nka burya!\nNta mushumba utaragiye Ingabe,\nAhanini Nkwaya inkoni arayifite!\"\nMbonye ya nka ko imbwiye ukuri,\nYagashe guherekeza izigenda,\n\nNanga kuyigomwa inganzo mfite\nNi ko kuyita Ruvutinka.",
//     },
//     {
//       id: 6,
//       title: "Imvano y'inganzo y'amazina y'inka",
//       summary: "Mu Rwanda rwa cyera inka yari ifit...",
//       details: "Mu Rwanda rwa cyera inka yari ifite agaciro gakomeye. Inka ni yo yarangaga ubukire. Niyo yari ifaranga ry'ubu. Inka ni yo yari ipfundo ry'ubuhake. Tuzi kandi neza ko ubuhake bwarambye mu Rwanda. Bwanahambiraga umugaragu kuri shebuja, akitwa umuntu we, akamwirahira. Bwagiye buvuna benshi bakabuvugiraho. Bati \"ubuhake burica; ubuhake bujya kukwica buguca iwanyu; ubuhake bwananiranye bukukisha umugabo ikijyaruguru\".\nHari n'abo bwatoneshaga bakarenguka. Bati \"ubuhake bwa cyane bukunyaza mu ngoro\". Bwateraga ubwibombarike. Bati: \"iyo ubuhake buteye hejuru uratendera\". Ariko rero kandi uwafataga nabi abagaragu yarabigayirwaga; umugaragu wahemukiraga shebuja yaragayikaga. Uwabaga ahatse abagaragu yagombaga kubagoboka bari mu byago. Umugaragu na shebuja babaga bafitanye ubumwe bukomeye bwafatiye ku nka.\nIyo ubwo bumwe bwazagamo agatotsi ku mugaragu, shebuja yaramunyagaga, naho byaba biturutse kuri shebuja, umugaragu akamwimura akajya gukeza ahandi.\n\nIntwari yo ku rugamba yagororerwaga inka. Inka yungaga inshuti. Uwahemukiye undi mu bintu bikomeye, akamuha icyiru cy'inka. Inka yahuzaga inshuti kuko abahanaga inka babaga babaye inshuti z'amagara. Inka bayikwaga umugeni. Umusore wabaga yaraye arongoye baramubyukutukirizaga, inka zikamukamirwa. Mu itwikurura ry'umugeni bazanaga amata. Umubyeyi yarabyaraga, bajya kumuhemba bakazana amata.\nUmwana iyo yahambaga se cyangwa sekuru yahabwaga inka y'inkuracyobo (inkuramwobo). Umwana wahambaga nyina cyangwa se nyirakuru byitwaga gukamira nyina cyangwa nyirakuru. Mu mihango yo kwera hazagamo ibyerekeye kujya ku kibumbiro, hakazamo ibyo guha amata abana b'uwatabarutse. Mu ndamukanyo z'abanyarwanda dusanga abantu bifurizanya gutunga. Bati \"gira inka\", \"amashyo\"\n\nNta wakwiyibagiza ko mu byo Abanyarwanda bafatiragaho bagena ibihe by'umunsi, inka yari iri mo.\nBaravugaga bati:\n\n- Inka zivuye mu rugo (aho ni nko mu masaa moya)\n- Inka zikamwa (aho ni nko mu masaa moya na 15 - ubwo ziba zikamirwa ku nama, ku irembo)\n- Inka zahutse (aho ni nka saa mbiri)\n- Inyana zahutse (aho ni nka saa moya irengaho duke)\n- Inyana zitaha (nko mu masaa yine)\n- Mu mashoka (nko mu masaa saba)\n- Inka zikuka cyangwa mu makuka (nko mu masaa munani)\n- Inyana zisubira iswa (nko mu masaa cyenda)\n- Inka zihinduye (nko mu masaa kumi)\n- Inyana zitaha (nka saa kumi n'imwe)\n- Inka zitaha (nka saa kumu n'ebyiri n'igice)\n- Inka zikamwa (nko mu masaa moya).\n\nUwagendera byonyine kuri ibi byose tumaze kubona ntiyatangazwa no kubona haravutse ubuvanganzo bufatiye ku nka. Ibyo bigaragarira\n\n- Mu mahamba: ni indirimbo zaririmbwaga n'abashumba bacyuye inka. Izo ndirimbo zirazwi mu Rwanda hose.\n- Mu mabanga cyangwa mu mahindura : indirimbo abashumba baririmbaga inka zirisha, zitaha, batarazikata inkoni ngo ziboneze zitahe.\n- Mu nzira: indirimbo zaririmbirwaga inka mu gihe zabaga zigana amabuga cyangwa ibibumbiro.\n- Mu ndama: indirimbo baririmbaga mu gihe inka zabaga zibyagiye ahantu, bazishoye amabuga cyangwa ibibugazi. Izo ndirimbo hari n'ubwo zaririmbwaga mu minsi mikuru, bamurika inka. Icyo gihe abagore n'abakobwa bahimbazaga izo ndirimbo baziha amashyi.\n- Mu byisigo: indirimbo zo mu gihe cyo kudahira. Basingizaga amazi ahiye hamwe n'inka zabaga zayashotse.\n- Mu myama (mu myoma): indirimbo zaririmbwaga mu gihe cy'impeshyi, zigisha (zigana ahari ubwatsi).\n\nAbandi batangiye kuyisingiza mu mazina.",
//     },
//     {
//       id: 7,
//       title: "Inka ya Ruzirabwoba 2",
//       summary: "Cyo turore iya Rutinywa,\nInyamibw...",
//       details: "Cyo turore iya Rutinywa,\nInyamibwa bidashamaje,\nYa Ruhungiramwengo:\nNi inzukuru ya mweru,\nN'igihe cy'i Ruhama,\n\nYazanye uruhanga rusa\nBati, \"twiboneye inka y'inkungu,\nIsa n'imvumvuri!\"\nIgumye kwivovota,\nYigira nyiri amasaka!\n\nIkagira umutima wayo,\nUkaba incuro y'umutemeri,\nRutibitsa abanyanyambo,\nZayarunduye ku masonga;\nNyamara data ibyo nta mwete,\n\nUko biri kose yitwa inkungu!\nNtiwaterera inyarubaze,\nNaho waba ushiritse amanga,\nIyo igeze mu ijuri ry'umukenke,\nN'inkomero y'umunyereri,\n\nBaraziguruka ngo yazimiye.\nImpinga igobora Ndamwibagiwe,\nIbwira izo irimo ziraberwa,\nIti, \"nimukuce impungire mu mpengeri,\nMuze kurasana mudasaraye!\"\n\nUmwungeri akoma akamo,\nItamika mu ruge rwayo irarasa!\nNuko imutobagura urwara;\nImaze kubona imucumbagije,\nIjya aho yaganditse imisigati,\n\nIkuramo umwe irakongora:\nIwushyira mu itama iritonga,\nIti, \"n'ejobundi nishe umuntu!\".",
//     },
//     {
//       id: 8,
//       title: "Inka ya Musoni 1",
//       summary: "Rwiyamirira yuhira imbuga\nInkuba zihindur...",
//       details: "Rwiyamirira yuhira imbuga\nInkuba zihindura abanyabihogo\nRwa Mirindi ya Simugomwa\nImana yaremye inyamibwa y'Impeta\nNtibeho urugingo uyihinyura\n\nYamara kuyigira intayoberana\nIkayambikira ku mugaragaro\nIkayiha umuheha w'imboneranye\nIkarangurura ubwiza barora\nNdagiye inkumburwa idashyikirwa\n\nBahora biganya abo mu z'Ijari\nYanogeye rubanda ku mubiri\nN' abatayigira baranyuzwe\nNtibakirwanira kuyihogoza\nMu kuyiharuza Imbonezamihigo\n\nUmwami yayizaniye imbabazi\nAkaba agishutse mu Irasaniro\nAmaze kugwiza imyato y'ingabe\nIngoma zisuma agituruka i Nduga\nIndamutsa ishoreye ikiriri cy'inka\n\nImpundu zivuga mu cy'Imana\nZivuga mu Rubumba rw'inyambo\nZivuga Masaka ya Mibirizi\nZiba igisagara ku Muremure\nZivuga mu Ruhango rw'ibwami\n\nZivuga Inyarurama rwa Nyanza\nZivuga Inyarubuye rwa Mwendo\nZiba urwoga ziza Urugarama\nBarazumva ab'i Nyarugenge\nZishyira kera ntizasigaho\n\nBarazumva mu Nyarufunzo\nIzo ari izisanga umugaba mwiza\nZiranamiza kwa Rwogera\nZisanganira Shema ry'abagabo\nAnyura mu Bwanacyambwe zivuga\n\nUmwami wacu ageze mu Bwiza\nImpundu zongera kuhavugira\nArambagira impinga ya Runyinya\nZivuga ku mutwe wa Janjagiro\nZivuga urwunge kuri Cyimbazi\n\nAtashye i Mwurire w'Izogeye\nImana zeze batumira Impeta\nRutarindwa atinduka imuhira\nUmwami ugaruje inkiko umuheto\nAtota abungeri b'Akaganda\n\nAri we mpuruza itaha i Kavumu\nNgo amashyo yose ateranire aho\nIsi yivugiza haje nyirazo\nZibyumvise ntizatuza\nMuzi inkubiri zitwara\n\nZitanguranwa iminega y'imbibi\nZibuza umwungeri kugurura\nZirusha izo mu gicu gutinduka\nIzogeye zipfa aho zirwatiye\nBasigaye begura inkike\n\nBaziranda ku y'imbuzi\nN'iy' imbibi zaseseyeho\nN'isata na shebuja w'Impeta\nRutamiriye mu ihaguruka\nBarawuranda umutwe w'inyamibwa\n\nZose ntukuraho ingohe.\nN'amakombe afatanye n'ijuru\nUrwamu ruvugira ku murindi\nInyambo baziraraza imiheha\nInteko y'abanyanka mbi irahaba\n\nImanzi zambika inka ya Mugani\nSemibungo izitaha imbere\nZikabamo ihindira mu gicu\nZombi n'imvura izira urubura\nUrubuga kandi irarwirahira\n\nKigeri yumva ibikuba byazo\nAmenye ko ari iy'Inyakibungo\nNdinduhagwe ya Ruburamanywa\nAbanza kwesa inkoni mu nzira\nAti, \"emwe Izogeye ubwo zitaha\n\nMujye kundebera iya Rugina\nUmwisi yagize intwari y'ingoga\nNi yo imenera urugamba rw'intore\nMurore ko ari yo nkuba zigenza\nZitungutse umucyo uratumura\n\nBagumya kwaka zica imibungo\nBararirimba zinyura imbere ye\nImpundu ziragumya zirasabira\nHataha Mutara inka ya Musoni\nIgitunguka n'iya Terera\n\nIraba ryazo ritangaje\nInyange itangaza ku musozi\nNdebye Rwabugiri aho atetse\nNsanga abami bateranye\nInyamibwa mbonye itagira intarizi\n\nSinayitindanira impakanizi\nIzina ry'inkumburwa ishengerana\nIzibamo ari Insezeraminyago\nYakebwe imanzi batijana\nInganzo y'umuhanga iyimeramo\n\nInkindi yera iyitonamo ingeyo\nIzina ry'inkumburwa iraribanza\nImana irayihanagura iranoga\nAmaribori arengura ibitugu\nInkesha iziminura mu ruhanga\n\nIngondo ziyinyura imbavu zombi\nIngingo izirusha inka zo ku butaka\nImfura ya Rwogera basa umubiri\nRwamanywa ntiyajorwa na hato\nIremera iba inyamibwa yonyine\n\nMu Bihogo ntibasigana\nNanjye ugenda mu yandi mashyo\nNgaha nabona inka isa n'umwami\nUbyirutse azi gukomoza inkiko\nAgaruka yishongora mu nka\n\nNarababwiye ko avungurana\nAtagira igihe yasibye na rimwe\nInjunga ahorana abanguranye ingoga\nYayizimbishije amahanga\nUmwana asigaye yegura inkoni\n\nAturuka i Nduga ya Rukambura\nAtagira n'icumu ayigeretseho\nAgaheza impinga ya Kiburungu\nAtarikanga icyamugarura\nN' ubu unyuze mu kirari cy'inkuba\n\nYasize yanitsemo imitumbi\nN' ubu haracyacurana inkaba\nInkona zaharemye ikiraro\nIshyamba abatasi batinyaga\nNi ryo abakaraza baramvuramo\n\nMuhanike urwamu rw'ingabo nziza\nHaje Manzi isa na Rwogera\nNimurorere Mugabo w'ingoga\nAsumba abandi mu muronko we\nNimuririmbe Impashyamahanga\n\nAgarutse nk' ubwo ku cy'i Bumpaka\nNimwongere inka z'ingororano\nAgarutse kwivugira Karinga\nNimushyire ibihubi ku nama\nIzindi ngabe zavuye Ngeri\n\nZiravutwa n'ingoma y'uruyumbu\nNimuragire inka za Nyirigira\nZijye zikura ishavu ku mutima\nUrwuri ruhise inyuma y'Akanyaru\nZirimo Rudasiganywa imbago\n\nIgiti yasanze yagiciyeho\nNimumusanganize imirishyo ye\nAshoreye ingunda itaraboneka\nNimugumye mutereze impundu\nYaje Rwibasirantambara\n\nMuranategeke abimura amashyo\nYaje arangamiye ize nyambo\nNimujye mu nzovu z'i Murambi\nMwambike amariza y'Umuhozi\nSi ugukabya nzisanganye urubu\n\nKabona bose n'abanyabihogo\nUragiye wese arasesuye\nInyambo zisimbuye Indamutsa\nAmaze kuzambika Rutarindwa\nNimutegure ingoro ye ijabiro\n\nNyirazo ateke yirebere\nUmutwe w' Izogeye ni yo ukiza\nNsize biranda ku y'imbuzi\nN'iy'imbibi zaseseyeho\nNi isata na shebuja w'Impeta\n\nN'inyamibwa ihora ihabwa impundu\nUzirora ntazikuraho ingohe\nYa makamba afatanye n'ijuru\nMuri mu kubona zitunguka\nAho zibaturaho inkubiri\n\nUmwisi yigire aha\nAturutse mu micukire yazo\nMutore urugori rw'iz'iruguru\nUmwami ukubita inkiko nk'inkuba\nYakumbuye Insezeraminyago.",
//     },
//     {
//       id: 9,
//       title: "Ingoro y'umwogabyano 2",
//       summary: "Ikina n'ingoma y'indamutsa\nN'umurishyo u...",
//       details: "Ikina n'ingoma y'indamutsa\nN'umurishyo uhumuriza,\nN'umutagara w'ib'ihubi\nN'amariza y'i Ntora,\nN'imbaga y'abarorerezi;\n\nN'abaririmba impanzi,\nN'abazereka intamati,\nN'imana zicyuye,\nN'igiterane cyazo,\nNa Rucyahabigarama,\n\nN'imfizi y'icyusa,\nN'icyubahiro igira,\nN'ingabo zidahomboka.\nZikavogera imbizi\nZikanyura ku mwimirizi;\n\nIcyamamare cy'inyambo,\nBakayumva mu cyoko,\nCyareretsemo inyamibwa,\nZigahimbaza isibo,\nZigituruka mu byambu;\n\nZigashingana Kigese,\nBagasanganira Ingeri,\nZikabyukurutsa Ingabe,\nI Nyamagana ya Mutakara,\nZigashingira Indamutsa,\nImyato zayigiriye.\n\nZiba zaje mu birori,\nI Nduga baziha impundu\nAho ni mu igisha ryazo;\nZigataha i Bwishaza,\nNta yo irasohorerwa inda,\n\nZikabigerana ku kirwa,\nZisa na Kigeli nyirazo;\nZigahindukirana ishya,\nZiruta andi mashyo yose.\n\nBagatumira nyirigira,\nNgo ajye guhangura Imbizi.\nYazigera mu ruhanga,\nUrw'intwari rukarema;\nBakazambika inkindi,\nNtihagira isaguka.\n\nZigataha ishakaka\nAyo makombe nta yashishwe;\nZigashengera zose,\nNta yo bashize amarora;\nZikamurikanwa n'ingoma,\n\nMu ngo z'i Rubengera;\nNi iz'iruguru zose,\nZikuze urugero rumwe;\nMbonye urugori rugoga,\nZibamo Rugombangogo,\n\nReka aratire Ibihogo,\nAtahije Izamamaje,\nIngoro y'umwogabyano!",
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
//             <h1 className="flex section-heading">Inka</h1>
//             <p>
//               Ibyivugo ni nk' ibisingizo bisingiza intwari ku rugamba, bigasingiza intwaro, zikarata n'ubutwari bwabo. Ibyivugo by' imyato, byabaga ari ibyivugo birebire kandi bikagira ibice bitaga "IMYATO".
//             </p>
//             <br />
//             <div >
//               <div className="mt-16">
//                 {selectedBox ? (
//                   <div >
//                     <div className="expanded-box">

//                       <h3>{boxesInka[selectedBox - 1].title}</h3>

//                       <div className="box-details">

//                         <button className="back-button" onClick={handleGoBack}>
//                           <FontAwesomeIcon icon={faArrowLeft} />
//                         </button>
//                         {breakDownDetails(boxesInka[selectedBox - 1].details)}
//                       </div>
//                       <div className="overlay" onClick={handleBackClick} />
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="boxes-container  ">
//                     {boxesInka.map((box) => (
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