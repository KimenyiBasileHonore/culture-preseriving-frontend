import React, { useState, useEffect } from "react";
import axios from "axios";
import "../pages/Service.css";

export default function Imigani() {
  const [contentList, setContentList] = useState([]);

  useEffect(() => {
    // Make an API call to fetch the data from the backend
    axios.get("http://localhost:4050/api/imigani/imigani")
      .then((response) => {
        setContentList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="mt-16">
      <h1 className="section-heading">IMIGANI MIGUFI</h1>
      <hr />
      <br />
      <p>
        Nkuko amateka y’ubuvanganzo nyarwanda abigaragaza, umugani n’ipfundo
        ry’amagambo atonze neza,Gacamigani yakagiriyemo ihame ridutoza gukora iki
        cyangwa se kudakora kiriya.Mbese muri make umugani ni umwanzuro
        w’amarenga y’intekerezo. Umugani uvuga ukuri, ariko muri kamere yawo
        ntabwo wo uba ari ukuri. Zimwe mu ngero z imigani migufi:
      </p>{" "}
      <br />
      <ul className="content-list">
        {contentList.map((contentObject, index) => (
          <li key={index} className="content-item">
            {contentObject.content} {/* Render the 'content' property */}
          </li>
        ))}
      </ul>

      {/* <ul className="content-list">
        {contentList.map((content, index) => (
          <li key={index} className="content-item">
            {content}
          </li>
        ))}
      </ul> */}
    </div>
  );
}


// import React from "react";
// import "../pages/Service.css";

// export default function imigani() {
//     const contentList = [" Aho ujishe igisabo ntuhatera ibuye", "Nyakamwe ntavumba mu Bakara",
//         "Ntawe ukandagira ibijanju by’amacupa ,ngo ananirwe ibijanju by’ibicuma", "Uwoze ntazika",
//         "Ntawe utinda adahambira", "Uruyuzi rujya kwera ibihaza rubanza ubututu",
//         "Akaboko kazaguha ukabonera mu iramukanya", "Ahabaye imanga ntihaba indagiro",
//         "Inyama utazarya ntuzirinda ibisiga", "Uwo utazaruta ntumwima umubyizi",
//         "Nta ngoma itavuga", "Imfura ntipfunyika indi", "Nta nyanya zera imitobotobo",
//         "Igiti ntikimenyekana ku bw’izina kitwa ,kimenyekana ku bw’imbuto cyera",
//         " Umugabo yananiwe kwenda,abeshyera akarago ngo karanyerera", " Nta musozi utagira agasharu",
//         "Nyakibi ntarara bushyitsi", " Aho ingenzi zitari ,ingegera zirigurumbya", "Aho ingenzi ziri ingegera ntizigurumbya",
//         "Agaharawe gahabwa agahari ,agahararutswe kagahabwa agahini", "Induru ntitsinda ingoma",
//         "Ingoma zose ni uruhu", "Ingoma ebyiri si irobe", "Ingoma idahora aba ari ikimuga",
//         "Ingoma irahaka ntihora", " Ingoma iruta irobe", " Ingoma itabara bene yo", " Ingoma ituje ntibura ituro",
//         " Ingoma ni kimwe na nyirayo", " Ingoma ntigira umunyina,ikamisha umuyoboke", " Ingoma nto yica nk’inini",
//         "Ingoma nziza ni igukijije", "Ingoma si ubuteto", "Ingoma utonnyeho niyo ugiraho ubutwari",
//         "Ingoma uyirira inkuna ,igakiza nkunzi", "Ingoma wagizeho ubuhake niyo ugiraho ubugabo", "Ingoma yaguha amata ntiyaguha amazi",
//         "Ingoma y’ikuzimu iyo ihamagaye ,nyigomba abadashye", "Ingoma yimana ibyayo", ".Ingoma zihora zihindura imirishyo",
//         "Haguma umwami ingoma irabazwa", "Akari mu nda y’ingoma kamenywa n’umwiru na nyirayo",
//         "Uko zimye nyamahembe", "Uko zivuze niko zitambirwa", "Iyapfuye ntawe utayiryaho",
//         "Harabaye ntihakabe,hapfuye imbwa n’imbeba hasigara inka n’ingoma", "Iyaguye ntawe utayigera intorezo",
//         "Inka ya nkoronko igira inkomoko", "Ntawe usaba amata aho akombwa", "N’uwendeye nyina mu nyenga yaramenywe",
//         "Icumu rizagucungura ntumenya iyo ryacuriwe", "Umugabo akama inka imwe ,yakama iya kabiri agakama ingeso",
//         ".Ingeso ntiryamirwa", "Nta nzovu ebyiri mu isenga", "Ibihanga bibiri ntibitekwa mu nkono imwe",
//         "Utagira Nyirasenge arisenga", "Nyokorome akuruma akurora", ".Ibunyokorome uhajyanwa na Nyoko",
//         "Nta mwiza wisoma", "Umukobwa mubi yarikirigise araseka ,ati « Burya bwose nanjye ndi mwiza  »",
//         "Nta mwiza wabuze inenge", " Umukobwa aba umwe agatukisha bose", " Ubugabo si ubutumbi",
//         "Umugabo umwe agerwa kuri nyina", "Ihene mbi ntuyizirikaho iyawe", " Mwene samusure avukana isunzu",
//         "Umwambari w’umwana agenda nka se", "Inyana ni iya mweru", "Inkanda mbi ibyara imisuzi",
//         "Imfizi ibyara uko ibyagiye", "Umwana uko umureze niko akunera", "Kutarera umwana ni ukwitera akazana utazi akazaza ejo",
//         "Abo umwami yahaye amata ,nibo bamwimye amatwi yabo", "Uburezi bw’umwana butangirira ku kiriri bukarangirira ku kiriyo.",
//         "Ntawe uhuruza ahunga abana", "Utazi umukungu yima umwana", "Utazi ikizakura yica unutavu",
//         "Izabira none zari imitavu", " Izibika none zari amagi", "Ubwira uwumva ntavunika",
//         " Iyaba buri mukobwa yakuburaga ku irembo ry’iwabo, isi yose yagira isuku", " Abo umwami yasereye amasaka bose nibo bamusereye amabuye",
//         " Nyamwanga kumva ntiyanze no kubona", "Nyiramaso yerekwa bike ibindi akirebera", "Ucira amarenga injiji ,amara ibinonko",
//         "Umukuru arareba ntabaririza", " Ijisho rya mukuru ntirizinduka riba ryagiye kureba", "Akebo kajya iwa mugarura",
//         "Bavuga ibigoramye umuhoro ukarakara", " Ugutanze mu kibo aguhaza intore", "Ntihaba gukanura haba Imana ikurebera",
//         "Uwahawe n’Imana ahambira abambuzi bamureba", "Kora ndebe iruta vuga numve", "Uguha akubonye arutwa n’ukuzirikana",
//         " Kure y’amaso siko kuba kure y’umutima", "Haguma amagara umurizo wo uramerwa", " Ubyina naryo ntakura ibirenge",
//         "Guhitwa amagambo ni ubutayu bw’ibitekerezo", " Uburanga butagira umutima ,ni nk’impeta y’izahabu ikwikiye mu izuru ry’ingurube",
//         "Nyakagore iriuta nyagakobwa", "Uwanze nyakabwa ,amwangana n’ibibwana bye", "Umuryango utaziririza urazima",
//         " Nta ngoma itagira ab’ubu", "Agasimba ushaka kwica ntubura izina ukita", "Agasimbva ushaka kurya ntubura izina ukita",
//         "Inkoni ikubise Mukeba uyirenza urugo", "Ifuni ibagara ubucjuti ni akarenge", "Ukutiha guhabwa guhina",
//         "Umwana w’undi abishya inkonda", " Ijisho ry’umukuru rigabanya rihitamo", " Ukuri uguhisha inyuma y’ishyiga kukabirira mu ziko",
//         "Ukuri guca mu ziko ntigushye", " Ukuri kurasharira", " Ujya guhiga n’impeshyi aba azi ibigega aciye", "Akabigira kabizi karya imboga karitse",
//         "Ukora ibyo azi annya ahetse", " Kabutindi itembesha ihene", "Ijisho ry’undi ntirikurebera umugeni", "Utazi ubwenge ashima ubwe",
//         " Imfizi itazi ubwenge irigata mu bugi bw’intorezo", "Ubwenge bw’umwe buragora", "Ubwenge burarahurwa",
//         "Ingeri igera imitima igenera uwayihawe", " Umutima muhanano ntiwuzura igituza", "Amagara araseseka ntayorwe",
//         "Amagara ntaguranwa amagana", "Inyama utazarya ntuzirinda ibisiga", "Ahabaye imanga ntihaba indagiro", " Iyahigaga yahiye ijanja",
//         "Akabaye icwenda ntikoga", "Abasangira ubusa bitana ibisambo", "Ubusa buruta buriburi", "Nta mufene w’ifaranga",
//         "Igiti bakokoyeho amashami nta gutoha kiba kigifite", " Inkoko iyo ivuye mu majyi aba amahuri", "Uwishima aho yishyikira ntiyikwatagura",
//         " Uhinga yihima atera urwiri mu murima we", "Nta rutugu rukura ngo rusumbe ijosi", " Utarahuguka ntahorera Se",
//         "Udahingiye abana b’inyoni ntahingira n’abe", "Udahinze ahakomeye,ntasarura amakoma ngo akome mu Benzi",
//         " Izaba intozo uyibona nyina ikiyibwegetse", " Izaba umusega uyibona n yina I,kiyibwegetse", "Umwana uko umureze niko akunera",
//         " Inkoni ivuna igufwa ngtivura ingeso", "Umuryango utazimura urazima", "Utazi umwanzi asiga umubiri", "Utazi irengero ry’amagambo agirango umuyaga ni igaju",
//         "Ugorwa n’ubusa arara ahaze", " Inzira ntibwira umugenzi", " Amaherezo y’inzira ni mu nzu", "Ubanza ineza imbere ukayisanga ku iherezo igutegereje",
//         " Inyana ni iya Mweru", " Isuku igira isoko,Umwanda ukagira akazu", " Inkanda mbi ibyara imisuzi",
//         "Umwambari w’umwana agenda nka se", "Umwera uturutse I Bukuru ,bucya wakwiriye hose", " Iyo umutwe urwaye igihimba kirahebuza",
//         " Inkingi imwe ntigera inzu", "Umugabo umwe agerwa kuri nyina", "Umugore gito ,agirwa n’ingufuri", " Ingona iva mu ruzi ikarigata urume",
//         "Ntawe uhuruza ahunga abana", " Intozo isaza ku menyo ntisaza ku merwe", "Umwami ntiyica hica rubanda", " Intero nyirurugo ateye niyo wikiriza", " Nta Mutware uba Kabeba",
//         " Nta mukungu wikunga akungwa n’Abandi", "Nyiramaguru yirukiye Nyirumugisha", "Abishyize hamwe nta ,kibananira",
//         "Ubumwe buranuka", "Akanwa karya ntiwumve kavuza induru ntiwumve", "Abatutira batongana batura ukubiri", "Ntawe utinya ishyamba ,atinya icyo barihuriyemo",
//         "Ukangiwe mu cyanzu annyana ingabo", "Utaranigwa agaramye,agirango ijuru riri hafi", " Ikizere kiraza amasinde",
//         "Wiringira ijosi rikakubyarira umwingo", "Aho ufite imbibe uhora uhashinga imbibe", "Aho wahahiye uhora uhahanze ijisho",
//         " Aho utazaririmbira ntuhanambira", "Ubonye isha itamba ata n’urwo yari yambaye", "Umugore yishimiye umugabo aryama aheneye iwabo",
//         "Ikinyoni kigurutse kitavuze bakita icyana", "Aho kuniganwa ijambo ryaniga uwo uribwiye", " Findifindi irutwa na So araroga",
//         "Akebo kajya I wa Mugarura", "Akundi kaza imvura ihise", " Imvura igwa ni isubira", " Ukwezi ni ugutaha", " Imvura igwa idasubira ,bayita cyumya",
//         "Kuzinduka ni ukuzindukuruka", "Guherekeza si ukujyana", " Ntawe uherekeza uwicaye", " Uhisha mu nda ntiyibwa n’imbwa",
//         " Abatagera I Bwami ,babeshya byinshi", " Igiti kigororwa kikiri gito", " Iyakaremye niyo ikamenea", " Utazi ingumba akwa inkumi",
//         " Igihanga kimwe kifasha gusara ntikifasha kubara", " Nyir’umutwe munini ntarengwa n’umujugujugu", " Kwa Bwoba havuze impundu ,kwa Bugabo havuga induru",
//         " Ahari amahoro rwisasira batanu", " Ahari amahoro umuhoro urogosha", " Uwihanganye yahinze igiteme cy’inkuba", " Uwitonze yamize ibinoze",
//         " Uwitonze yakamye ishashi", " Uwitonze yakamye iyateraga umugeri", " Ubamba isi ntakurura", " Isi ntigira inyiturano",
//         " Ingizi yabwo ntiyabugaruriwe", " Nyamwanga kumva ntiyanze no kubona", " Imirimo 2 yananiye impyisi", " Umwana usuzugura bwira aneye rimwe",
//         " Umugabo utabwirwa yikebeye inyama itaribwa",

























// " Ujya mu ishyamba utazi ukahaca inkoni izira", " Ikiganza gito kimisha umwana impengeri",
//         " Inyamaswa idakema yishwe n’umututizi", " Iyihuse yabyaye igihumye", " Utinda mu nturo ukahamburirwa", " Nyirikirimi kibi yatanze umurozi gupfa",
//         " Nyakibi ntara bushyitsi", " Ujya mu rw’undi asiga ingeso ku muryango", " Udahinze ahakomeye ntasarura amakoma ngo akome mu benzi",
//         " Umukobwa aba umwe agatukisha bose", " Izina ryiza ntiryabujije umukobwa kuruha", " Inkingi imwe ntigera inzu", " Inzu irirwamo ntivugirwamo",
//         " Inzu ni icyo uyiriyemo", " Iyo amazi akubwiye ngo winyiyuhagira ,urayabwira ngo nta mbyiro mfite", " Ibize nabi uyima ifu",
//         " Ntawe uvuga itarashya", " Ntawe uvuma iritararenga", " Imfura aho zisezeraniye niho zihurira ihatanze indi ikahaborera", " Imfura ya naka ni iyariye",
//         " Uhinga yihima atera urwiri mu murima we", " Uhima abandi aturetse agirango turwane", " Uhima abandi atiretse asurira mu ruriro", " Udahingiye abana b’inyoni ntahingira n’abe",
//         " Igiti uzatema ushaje ;ugitera ukiri muto", " Ikiraro uzambuka ushaje ,ugitinda ukirki umusore", " Agakoni k’iminsi gacibwa kare ,kakabikwa kure y’imungu",
//         " Urukwavu rukuze rwonka abana barwo", " Ikimasa cy’imico myiza abana bagikurura amabya", " Imfizi itazi ubwenge irigata mu bugi bw’intorezo",
//         " Utazi ikimuhatse ,areba igitsina cya se igitsure", " Utazi akaraye ifumbwe araza ifu", " Utazi amarengero y’inzira ,agirango umuyaga ni igaju",
//         " Ubiba ibitotsi ugasarura ingonera", " Inyange ntiharanira kwera", " Umusore ntapfunyika amavuta", " Ubutiha buranduranya",
//         " Ubutarya burinanura", " Akababaje umugabo kamurenza impinge", " Agakurikirwe n’abagabo ntikabasiga", " Icyo umutima ukunze ,amata aguranwa itabi",
//         " Kami ka Muntu ni umutima we", " Hitamo imara ipfa", " Ntayo iyoberwa iyayo mu mwijima", " N’uhigimye aba avuze",
//         " Iyimijwe n’ikaramu ntiramburura", " Ubwenge burarahurwa", " Ibijya gucika bica amarenga", ". Izijya gucika zihera muruhongore",
//         " Igihe cyahise ntikigaruka ", " Akaburiye mu isiza ntikabonekera mu isakara", " N’itabiye iba ishaka iyayo", " Umubaji w’imitima ntiyayiringanije",
//         " Umugabo yanyagiranywe n’abandi ,ati ntabwo njye naboze", " Ibirenga bijya imbu kujya imbere", " Impamvu ingana ururo",
//         " Aho wambariye inkindi ,ntuhambarira ubucocero", " Aho wambariye ubucocero ,ntuhambarira inkindi", " Ukize ubusore arabubagira",
//         " Nta nkumi yigaya", " Igi ryahannye inyoni", " Indakuzi ntimutahana ubukwe", " Nta muhanuzi mu babo", " Nta zibana zidashingana amahembe",
//         " Utinda mu nturo ukahamburirwa", " Umwana uri iwabo avuna umuheha akongeza undi", " Inkoko iyo ivuye mu magi aba amahuri",
//         " Abarinzi bajya umugambi,inyoni zijya undi", " Gukunda utagukunda ni nk’imvura igwa mu ishyamba", " Gukunda utagukunda ni nk’amazi atemba ku rutare",
//         " Kunda ugukunda kuko uwo ukunda yikundira abandi", " Nta rutoha rutuhiwe", " Umukobwa utagira urukundo.ni nk’ururabo rutagira im pumuro",
//         " Umusore utagira urukundo ,ni nk’igiti kitagira imizi", " Uhongera umwanzi amara inka", " Inama itagiriwe mu kirambi ,ica ikirago",
//         " Abishyize hamwe ntakibananira", " Akabi karimenya mu gutaha inkoko irububa", " Uwiterereza Sakabaka ,aba azi inyama yujuje urutete",
//         " Nta giti kigurukira inyoni", " Uwagumiwe n’ururimi ahagamwa n’amazi", " Igihugu kitagira Abahanzi ,ntikigira n’Abahanuzi"];

//     return (
//         <div className="mt-16">
//             <h1 className="section-heading">IMIGANI MIGUFI</h1>
//             <hr /><br />
//             <p>Nkuko amateka y’ubuvanganzo nyarwanda abigaragaza ,umugani n’ipfundo
//                 ry’amagambo atonze neza,Gacamigani yakagiriyemo ihame ridutoza gukora iki
//                 cyangwa se kudakora kiriya.Mbese muri make umugani ni umwanzuro w’amarenga y’intekerezo.
//                 Umugani uvuga ukuri ,ariko muri
//                 kamere yawo ntabwo wo uba ari ukuri. Zimwe mu ngero z imigani migufi: </p> <br />
//             <ul className="content-list">
//                 {contentList.map((content, index) => (
//                     <li key={index} className="content-item">
//                         {content}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }