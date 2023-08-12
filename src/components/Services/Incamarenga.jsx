import React, { useState, useEffect } from "react";
import "../pages/Service.css";

export default function Incamarenga() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API
    fetch("http://localhost:4050/api/incamarenga/incamarenga")
      .then((response) => response.json())
      .then((data) => setSections(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const toggleCollapsible = (index) => {
    const updatedSections = [...sections];
    updatedSections[index].isOpen = !updatedSections[index].isOpen;
    setSections(updatedSections);
  };

  return (
    <div>
      <div className="mt-16">
        <h1 className="section-heading">INCAMARENGA ZISOBANUYE</h1>
        <hr /><br />
        <p>
          Umuntu aca amarenga ashaka kubwira uwo baziranye, icyo adashaka kubwira
          abamwumva bose. Ashobora kwita umuntu "giti mu jisho" 'kariharya'nayandi
          mazina.Iyo begeranye ashobora kumucinya icyara cyangwa se akamukandagira.
        </p>
      </div>
      <div>
        {sections.map((section, index) => (
          <div key={index} className={`mt-8 collapsible ${section.isOpen ? 'open' : ''}`}>
            <div className="collapsible-header content-item" onClick={() => toggleCollapsible(index)}>
              {section.title}
              <span className={`arrow ${section.isOpen ? 'up' : 'down'}`}></span>
            </div>
            {section.isOpen && (
              <div className="collapsible-content">
                <p>{section.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


// import React, { useState } from "react";
// import "../pages/Service.css";

// export default function Incamarenga() {

//     const [sections, setSections] = useState([
//         { isOpen: false, title: "Aha na he? ", content: "Iri jambo umuntu aribwira undi ari nk'aho yamubajije urugendo arimo aho ruzamugeza" },
//         { isOpen: false, title: "Agacuma k'amagambo ", content: "Umuntu bita agacuma k'amagambo baba bamunegura uburondogozi n'ubuzimuzi." },
//         { isOpen: false, title: "Amabere arikora ", content: "Ababyeyi bonsa bavuga ko iyo bari kure y'abana babo, iyo barize babyumviraku mabere. N'umubyeyi utonsa iyo umwana we agize icyo aba niyo yaba ari mukuru aravuga ati ``amabere arikoze, sinzi ikibaye kumwana wanjye`` " },
//         { isOpen: false, title: "Amazi atemba ageze he? ", content: "Iyo umuntu ashaka kumvisha abandi ko umunsi ukuze,arababwira ati `` ko mugirango si kera ubu amazi atemba ageze he?``" },
//         { isOpen: false, title: "Areshya na shyari", content: "Shyari ni umusozi muremure. Umuntu muremure cyane niwe bavugiraho ko areshya na shyari." },
//         { isOpen: false, title: "Areshya n'aho bwakereye", content: "Nanone umuntu ukabije uburebure, abagufi n'abaciriritse bamunegura bavuga ko areshya n'aho bwakereye" },
//         { isOpen: false, title: "Areshya n'impyiko y'ihene", content: "Aya magambo bayavugira ku muntu bamunegura ko akabije kuba mugufi." },
//         { isOpen: false, title: "Arirenga ararahira", content: "Hari ubwo bakeka umuntu bakavuga bati ``naka niwe wakoze ibi n'ibi`` iyo abihakanye avuga ko bamubeshyera ashobora kugerekaho indahiro. Ubwo rero iyo abari bamuketse babisubiyemo baganira umwe ashobora kubwira undi ati ``yarirenze ararahira ati barambeshyera." },
//         { isOpen: false, title: "Bazirunge zibe isogo", content: "Isogo ni imboga zimera hafi y'urugo ahantu haheruka isuka. Kurunga ni ugushyira amavuta y'inka mu biryo.Ibirunge by'isogi bavuga ko biryoha cyane nyamara ibirunge by'isogo ntaburyohe bigira. Bazirunge zibe isogo rero babivugira ku muntu bagaya, n'ubwo yashoboraga gukora ibyiza yananiwe kubikora kubera ingeso n'imico mibi asanganywe." },
//         { isOpen: false, title: "Byahe byo kajya", content: "Aya magambo bayavuga bahakana ko ibyo babakekaho ntabyo bafite. Uravuga ngo mfite ibyashara byinshi, byahe byo kajya." },
//         { isOpen: false, title: "Cukira aho", content: "Aya magambo bayabwira umuntu bamwiyama. Iyo umwana acutse ntiyongera konka umuntu ucukiye aho nawe ntiyongera gukora ibyo bamubujije." },
//         { isOpen: false, title: "Findi findi", content: "Findi findi ni uguhishahisha ibyo umuntu agambiriye ukaba utamenya aho abogamiye." },
//         { isOpen: false, title: "Guca bugufi", content: "Bavuga ko abantu baciye bugufi ari rubanda rusanzwe bityo guca bugufi ni ukwiyoroshya naho kwirata ni ukwishyira hejuru." },
//         { isOpen: false, title: "Guca imbyaro", content: "Umukecuru bavuga ko yaciye imbyaro bashaka kuvuga ko yacuze. Guca imbyaro ni ukuba utagishoboye kubyara." },
//         { isOpen: false, title: "Guca iteka", content: "Iteka mu bwinshi ni amateka. Iyo tuvuga amateka muri iki gihe humvikana inkuru za kera nyamara mu kinyarwanda cyo hambere amateka byasobanuraga amategeko. Guca iteka rero ni ugushyiraho itegeko; umwami yaciye iteka rica urugomo urwo ni urugero." },
//         { isOpen: false, title: "Guca mu maso", content: "Ushobora kubona umuntu ugasanga atari ubwa mbere umubona ariko ukayoberwa aho umuzi. Iyo akurushije kwibuka ashobora kukubaza ati uranyibuka nawe uti ndabona unciye mu maso. Iyo uyobewe uwo wigeze kumenya aba aguciye mu maso." },
//         { isOpen: false, title: "Guca mu ijambo", content: "Iyo umuntu avuga undi akamuvugiramo atarasoza ijambo rye aba amuciye mu ijambo." },
//         { isOpen: false, title: "Guca umutaru cyangwa kurenga umutaru", content: "Ahantu hareshya naho umuntu yataruka rimwe haba ari hagufi cyane. guca umutaru ni ugukora akagendo gato cyane. iyi uvuze uti nari ntaraca umutaru cyangwa nari ntararenga umutaru uba uvuze ko wari ukiri hafi cyane" },
//         { isOpen: false, title: "Guca urwa mbehe", content: "Imbehe niyo yahoze ari isahani y'umunyarwanda Guca urubanza ugamije kubona ibyo ushyira kwisahani ni uguca urwa mbeehe, muri iki gihe bavuga ko umucamanza yariye ruswa." },
//         { isOpen: false, title: "Gucana igishyito", content: "Nta kindi umunyarwanda yagiraga yashoboraga gukoresha kugirango abashe kubona nijoro munzu keretse umuriro wo muziko. Bityo rero iyo habaga impamvu ituma abantu barara bicaye byari ngombwa ko umuriro urara waka; bene uwo muriro niwo bita igishyito. Gucana igishyito ni ugucana umuriro w'inkwi zikomeye maze ukagumaho igihe kirekire." },
//         { isOpen: false, title: "Gucika amakendero", content: "Gukendera ni ukubura uko ubigenza, kubura uwo utabaza cyangwa kubura uwo wirwanishaho. iyo bavuze ngo yumvise uko byagenze acika amakendero baba bavuze ko yihebye agacika intege akamera nk'ugushije ishyano." },
//         { isOpen: false, title: "Gucika kw'icumu", content: "Iyo abantu bari hamwe bagapfa uvuyemo agakira ku bwa mahirwe aba acitse kw'icumu." },
//         { isOpen: false, title: "Gucika ururondogoro", content: "Kurondogora ni ukuvuga amagambo menshi kuburyo bihinduka ikinegu. Iyo umuntu yahuye n'amakuba amaganya aba menshi iyo uwo muntu aganyira umuhisi n'umugenzi baravuga ngo yacitse ururondogoro." },
//         { isOpen: false, title: "Gucura inkumbi", content: "Iyo ingabo ziri ku rugamba zirwana uwishe undi bavuga ko yamucuze inkumbi. Gucura inkumbi ni ukwica umuntu "},
//         { isOpen: false, title: "Gucyura ubuhoro", content: "Ni umushumba baba bavuga ucyuye amatungo ye ubuhoro. Uwo bita mucyurabuhoro ni umunyamugisha; ucyura ubuhoro aba azanye umugisha mu rugo." },
//         { isOpen: false, title: "Gufatanwa igihanga", content: "Icyemeza ko umuntu yibye itungo akaribaga akarirya nuko bamusangana igihanga cyaryo, kukocyo udashobora kukirya. Bityo rero iyo bafatanye umuntu ikimenyetso ko yibye bavuga ko bamufatanye igihanga." },
//         { isOpen: false, title: "Gufatirwa mu cyuho", content: "Iyo umujura apfumuye urugo cyangwa inzu ashaka aho anyura ngo ajye kwiba aho hantu bahita icyuho. kumufatira aho hantu rero bimeze nko kumufatana igihanga ntashobora guhakana ubujura. Gufatirwa mu cyuho ni ugufatwa urimo kwiba." },
//         { isOpen: false, title: "Guhabwa urwaho", content: "Umuntu ashobora gushaka kukugirira nabi akabura aho ahera, kumuha urwaho ni ukumuha urwitwazo akabona icyo yuririraho" },
//         { isOpen: false, title: "Guhabwa rugari", content: "Ni urubuga baba bavuga. Guhabwa urubuga rugari ni ukwemererwa kwisanzura" },
//         { isOpen: false, title: "Guhambanwa ikara", content: "Kera abanyarwanda batinyaga abazimu cyane. Iyo umuntu yapfaga nta mwana w'umuhungu asize batinyaga kumuhamba nk'abandi bantu. Baribwiraga bati umuzimu we ninde uzawuterekera? Bagakeka ko azamerera nabi abantu bo mu muryango bityo bakamuhambana ikara ry'umuriro ngo babe bamuterekereye mbere y'igihe." },
//         { isOpen: false, title: "Guheka amaboko", content: "Kubere ko umugongo ugenewe guheka umwana guheka amaboko bishushanya kubura umwana uheka. Ni bibi rero guheka amaboko; uwabituka undi ngo aragaheka amaboko aba amututse gupfusha umwan" },
//         { isOpen: false, title: "Guheta icumu", content: "Kera iyo ingabo zatabarukaga zivuye ku rugamba, zikaza kwiyereka umwami zagendaga kuri gahunda zibanguye amacumu buri wese azamuye icumu rye. Ubwo rero uwabaga yarishe umubisha ku rugamba byagaragazwaga n'uko yahese ikigembe cyi cumu rye. Guheta icumu ni ukwerekana ubutwari ku rugamba." },
//         { isOpen: false, title: "Guhinga ubudehe", content: "Abahinzi benshi mu murima baba bahinga ubudehe, iyo bahingira inzoga. Guhinga ubudehe mu mvugo ijimije ni ukuvuyanga ibintu n'abantu. Iyo bavuze ngo kanaka abakozi be yabahinzemo ubudehe baba bavuze ko yabavurunganyije akabamerera nabi." },
//         { isOpen: false, title: "Gukamurira undi umuravumba mu zuru", content: "Umuravumba iyo bawushyize mu mazuru uraryana cyane.Iyo umuntu abeshye undi bikomeye cyane akemera akayoba bavuga ko uwamushutse yamukamuriye umuravumba mu zuru" },
//         { isOpen: false, title: "Gukoma akamo", content: "Gukoma akamo ni ugutera ijwi hejuru. Aho bitandukaniye no kuvuza induru nuko uvuza induru akubita urushyi ku munwa kandi akavuga cyane ataka.Akamo kagira injyana yako. akamo k'abahigi, akamo k'abashumba, akamo k'ingabo byose biratandukanye" },
//         { isOpen: false, title: "Gukoma yombi", content: "Kera amashyi yari ayumwami wenyine, gukoma yombi byari ukuramya umwami, wamugeraga imbere ugakoma yombi ukabona kuvuga ikikugenza." },
//         { isOpen: false, title: "Gukubita amaguru y'ubusa", content: "Gukubita amaguru y'ubusa ni ugukora urugendo ntugere ku cyakujyanye. Iyo ugiye ahantu ugasanga umuntu washakaga adahari uba ukubise amaguru y'ubusa" },
//         { isOpen: false, title: "Gukubitwa n'inkuba", content: "Ukubiswe n'inkuba naho itamwica imukura umutima. Hari ibintu ubona cyangwa wumva bikagukura umutima iyo ubisubiriramo abandi ubibatekerereza ushobora kubabwira ko wabyumvise cyangwa wabibonye ugakubitwa n'inkuba. Uba ushaka kubabwira ko byari biteye ubwoba." },
//         { isOpen: false, title: "Gupfa agasoni", content: "Gupfa umuntu agasoni ni ukumwubaha cyangwa kumwihanganira. Iyo uvuze uti 'ntawe ukimpfa agasoni`` uba uvuze ko basigaye bagusuzugura. Umupfasoni ni umuntu wo kubahwa. Gupfa umuntu agasoni ni ukwanga kumutesha agaciro." },
//         { isOpen: false, title: "Gupfa urw'ikirago", content: "Iyo umuntu yapfuye bakunze kubaza icyamwishe, uwishwe nindwara bavuga ko yapfuye urw'ikirago. abanyarwanda baryamaga mu birago nicyo cyatumye bavuga ngo yapfuye ari mu kirago." },
//         { isOpen: false, title: "Gupfa urwo baseka", content: "Haseka uwishimye, usetse uwapfuye aba ari umushinyaguzi. uwapfuye urwo baseka ntaba yarapfuye ngo bamushyingure aba yarapfuye ahagaze yarahindutse igishungero yarabaye iciro ry'imigani." },
//         { isOpen: false, title: "Gusaba nk'uwahetswe mu ngobyi y'insabano", content: "Bivugirwa ku muntu usaba hato na hato kuburyo abandi bamwinuba." },
//         { isOpen: false, title: "Gusasa inzobe", content: "Inzobe ni inyamaswa igira uruhu rwiza. kera uwo bitaga uwambaye inzobe babaga bamuhaye igisingizo. Uruhu rw'inzobe rwisasirwaga n'umuntu ukomeye. Gusasa inzobe cyakora ntibyerekeranye no kuryama ahubwo byerekeranye no kwicara abantu bakaganira. Gusasa inzobe bivugwa iyo abantu biteguye kwicara bakaganira bakabwizanya ukuri ntawe uryarya abandi." },
//         { isOpen: false, title: "Gushinga ijosi", content: "Ijosi nubusanzwe ntirirambitse rirahagaritse. kurishinga ni uguhagarara wemye ukarirega ureba imbere bikagaragaza guhangana nuwo murebana. Ni ikimenyetso cyo gusuzugura uwo ushingiye ijosi. uwo wubashye umuhagarara imbere ugonze ijosi usa n'uwenda kureba hasi. Gushinga ijosi ni imvugo yerekeye ku gasuzuguro." },
//         { isOpen: false, title: "Gushira amanga", content: "Amanga akomoka ku nshinga kwanga. Iyo wanze gukora ikintu uba ufite impamvu zibigutera. Gushira amanga bivugirwa ku gikorwa umuntu atinyutse gukora kandi ubundi yakagombye gutinya kugikora atinya kukizira." },
//         { isOpen: false, title: "Gushira isoni", content: "Isoni zishobora kuba mbi iyo ziguteye gukora nabi. Ugize isoni zo gutinya kuvuga kandi wagombaga kuvuga wabigayirwa. naho gushira isoni bivugirwa ku muntu usuzugura wanze gukora icyo umukuriye yamushinze." },
//         { isOpen: false, title: "Gushira ubwena", content: "Icyena ni ahantu hatebeye uhagereranije n'ahandi byegeranye. Inka iyo ishonje bavuga ko ifite icyena." },
//         { isOpen: false, title: "Gushoka isibo", content: "Isibo rirangwa no kwihuta n'ikivunge. Kugenda mw'isibo ni ukugendamu kivunge cy'abantu benshi kandi wihuta. Intore zigiye guhamiriza zishoka isibo, ushobora kumva hari uwo basingiza bamwita sibo y'intore." },
//         { isOpen: false, title: "Gusuzugura nk'ingunzu", content: "Ingunzu ni inyamaswa iba mu ishyamba iteye nk'imbwa. Igira ibara ry'ikijuju igakunda kuba ahantu hari ibitare by'amabuye kuburyo usanga hari ahantu hitwa ku butare bw'ingunzu.Iyo umuntu ayisanze ku nzira imurebera ku rutugu nicyo gituma bavuga ko isuzugura. Gusuzugura nk'ingunzu bivugirwa ku muntu ukabya gusuzugura n'umuvugishije akamusubiza ubona atabishaka." },
//         { isOpen: false, title: "Guta igiti", content: "Ahantu habaye ibyago bagiraga umuhango wo gucana umuriro, uwo muriro ugakomeza gucanwa mu kiriyo. Umunsi wo gusoza ikiriyo bakawuzimya; igiti gisigaye kitaraka ntago bakirekeraga aho ngo bazagicane ubundi ahubwo bajyaga kugita kure. Guta igiti rero ni ugusoza ikiriyo." },
//         { isOpen: false, title: "Guta umuzizi", content: "Iyo inzoga iri mukabindi aho igarukira niho bita umuzizi wayo. Iyo basomyeho iramanukamaho umuzizi wahoze ukahava. ubwo iba itaye umuzizi." },
//         { isOpen: false, title: "Guteka ijabiro", content: "Umwami iyo yicaye bavuga ko atetse. Aho ateka hitwa ijabiro. Guteka ijabiro  byavugirwa ku mukuru w'igihugu uri munteko." },
//         { isOpen: false, title: "Guteta ubumena ifu", content: "Umwana muto akinisha ibintu byose ndetse niyo yangije birihanganirwa bikabarirwa ku wabyandaritse. Umwana ukina ibyo akora babyita guteta, guteta ubumena ifu ni ugukabya haba harimo nubugoryi. Iyo babwiye umuntu ngo arateta ubumena ifu baba bamubwiye akabije kwangiza." },
//         { isOpen: false, title: "Gutsinda akabero", content: "Imyicarire y'abakobwa bo hambere kwari ugutsinda akabero. Gutsinda akabero byavugirwaga ku muntu uguwe neza bati yatsinze akabero bashaka kuvuga ko ntacyo yishisha." },
//         { isOpen: false, title: "Guturuka iyo gihera", content: "Iyo umuntu arebye kure abona ijuru rifatanye n'ubutaka, abakera bibwiraga ko ahongaho ariho igihugu kigarukira, aho giherera.Guturuka iyo gihera ni uguturuka kure cyane." },
//         { isOpen: false, title: "Haba niyo munda ngo ijorore", content: "Kujorora ni ukuvuga kw'inzoka yo munda. Iyo uvuze ko nta ninzoka yo munda yajoroye nukuvuga ko nta no guhigima kwabayeho usibye no kuvuga. Baramutse bakubwiye ko wateye amahane ku muntu ushobora gusubiza uti haba niyo munda ngo izajorore ushaka kuvuga ko bakubeshyera ntacyo wigeze uvuga." },
//         { isOpen: false, title: "Ibyo ntibyancira ishati", content: "Kugirango umwambaro ucike umuntu aba yakoze umurimo w'imbaraga, iyo uvuze uti ibyo ntibyancira ishati uba uvuze ko ibyo bintu nta kamaro bigufitiye utabivunikira." },
//         { isOpen: false, title: "Ijoro riraguye", content: "Iyo izuba rimaze kurenga umugoroba ukubye baba babona ko bugiye kwira ijoro rigiye kugwa maze bagahagarika imirimo yose. iyo ijoro riguye nukuvuga ko buba butangiye kwira" },
//         { isOpen: false, title: "Ijoro rirajigije", content: "Inka y'ijigija ni inka ikuze ariko itarasaza, n'umugabo w'ijigija ni uri mu kigero kiri hagati y'ubusore n'ubusaza.Iyo ijoro rijigije riba rikuze ni nyuma y'igicuku. kuvuga ko ijoro rijigije ni kimwe no kuvuga ko ijoro rikuze." },
//         { isOpen: false, title: "Ikibyimbye kimeneke", content: "Iyo abantu bafite icyo bapfa umwe aba arakariye undi yifuza icyo yamubonaho ngo akimurege. Umwe rero ashobora gukora ikintu aziko kiri burakaze undi ariko akavuga ngo ikibyimbye kimeneke ninkaho yakavuze ati nashaka avuge nashaka arorere nashaka andege nashaka arorere. nukuvuga ngo uburakari amfitiye nibushaka buturike." },
//         { isOpen: false, title: "Ikizaba nzanywa umuti", content: "Abanyarwanda bemeraga ko hari igikorwa kizira wakora ukaremba cyangwa ugapfa. Ubwo rero iyo wagikoraga baguhaga umuti kugirango utagira icyo uba. iyo umuntu bamubuza gukora ikintu akanga akagikora ashobora kuvuga ati ikizaba nzanywa umuti ni nkaho yavuze ko yemeye ingaruka zose zizamubaho." },
//         { isOpen: false, title: "Imbara na mbariro", content: "Iyi mvugo ikoreshwa batangarira igihe kirekire gishize bakagira bati imbara byabereye ntibirangira! cyangwa bati imbara na mbariro byabereye !aya magambo ashobora kuba akomoka kw'ijambo kubara byo kubara inkuru. Ni nko kuvuga ngo iyo nkuru aho yabereye bayibara bakongera bakayibara imbara na mbariro." },
       
//     ]);

//     const toggleCollapsible = (index) => {
//         const updatedSections = [...sections];
//         updatedSections[index].isOpen = !updatedSections[index].isOpen;
//         setSections(updatedSections);
//     };

//     return (
//         <div>
//             <div className="mt-16">
//                 <h1 className="section-heading">INCAMARENGA ZISOBANUYE

//                 </h1>
//                 <hr /><br />
//                 <p>
//                     Umuntu aca amarenga ashaka kubwira uwo baziranye, icyo adashaka kubwira
//                     abamwumva bose. Ashobora kwita umuntu "giti mu jisho" 'kariharya'nayandi
//                     mazina.Iyo begeranye ashobora kumucinya icyara cyangwa se akamukandagira.
//                 </p>
//             </div>
//             <div>
//       {sections.map((section, index) => (
//         <div key={index} className={`mt-8 collapsible ${section.isOpen ? 'open' : ''}`}>
//           <div className="collapsible-header content-item" onClick={() => toggleCollapsible(index)}>
//             {section.title}
//             <span className={`arrow ${section.isOpen ? 'up' : 'down'}`}></span>
//           </div>
//           {section.isOpen && (
//             <div className="collapsible-content">
//               <p>{section.content}</p>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//         </div >
//     );
// }