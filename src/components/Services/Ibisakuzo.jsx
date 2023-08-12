import React, { useState, useEffect } from 'react';

const QuestionPage = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);
  const [submittedAnswers, setSubmittedAnswers] = useState({});

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await fetch('http://localhost:4050/api/ibisakuzo/ibisakuzo');
      if (!response.ok) {
        throw new Error('Failed to fetch questions');
      }
      const data = await response.json();
      setQuestions(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAnswerClick = (questionId, answerId) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answerId,
    }));
  };

  const handleSubmitAnswer = (questionId) => {
    setSubmittedAnswers((prevSubmittedAnswers) => ({
      ...prevSubmittedAnswers,
      [questionId]: true,
    }));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => prevSlide + 1);
    setSelectedAnswers({});
    setSubmittedAnswers({});
    window.scrollTo(0, 0);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => prevSlide - 1);
    setSelectedAnswers({});
    setSubmittedAnswers({});
    window.scrollTo(0, 0);
  };

  const currentQuestion = questions[currentSlide];
  const totalSlides = questions.length;

  return (
    <div className='mt-16'>
      <h1 className="section-heading">IBISAKUZO</h1>
      <hr /><br />
      <p>Ibisakuzo ni umukino wo mu magambo, ibibazo n’ibisubizo bihimbaza abakuru n’abato kandi birimo ubuhanga. Nkuko amateka y’ubuvanganzo nyarwanda abigaragaza, ibisakuzo nabyo byagiraga abahimbyi b’inzobere muri byo, bahoraga bacukumbura ijoro n’umunsi, kugirango barusheho kunoza no gukungahaza uwo mukino. Dore zimwe mu ngero z’ibisakuzo.</p>
      <br />

      <div className="max-w-md mx-auto mt-16 bg-white rounded shadow">
        <div className="px-6 py-4">
          {currentQuestion && (
            <div key={currentQuestion.id} className="mb-4 p-4 border rounded">
              <h3 className="text-lg font-semibold mb-2">
                {currentSlide + 1}. {currentQuestion.question}
              </h3>
              <ul>
                {currentQuestion.answers.map((answer) => {
                  const isSelected = selectedAnswers[currentQuestion.id] === answer.id;
                  const isCorrect = answer.isCorrect;
                  const isSubmitted = submittedAnswers[currentQuestion.id];

                  return (
                    <li
                    key={answer.id}
                    className={`flex items-center py-1 cursor-pointer ${
                      isSubmitted
                        ? isCorrect
                          ? 'bg-blue-100 text-blue-700'
                          : isSelected
                          ? 'bg-red-100 text-red-700'
                          : ''
                        : 'hover:bg-gray-100'
                    }`}
                    onClick={() => {
                      if (!isSubmitted) {
                        handleAnswerClick(currentQuestion.id, answer.id);
                        handleSubmitAnswer(currentQuestion.id);
                      }
                    }}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center border border-gray-400 mr-4 ${isSelected && !isSubmitted ? 'bg-white' : ''}`}>
                      {isSelected && !isSubmitted && (
                        <svg
                          className={`w-4 h-4 text-blue-700`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path fillRule="" d="" />
                        </svg>
                      )}
                    </div>
                    <span>{answer.text}</span>
                  </li>
                
                  );
                })}
              </ul>
              {submittedAnswers[currentQuestion.id] && (
                <div className="mt-2">
                  <div
                    className={`mb-2 ${
                      currentQuestion.answers.find(answer => answer.isCorrect && selectedAnswers[currentQuestion.id] !== answer._id) 
                      ? 'text-red-700'
                      : 'text-blue-700'
                    }`}
                  >
                    Correct Answer: {currentQuestion.answers.find(answer => answer.isCorrect).text}
                  </div>
                  <div>
                    Your Answer: {currentQuestion.answers.find(answer => answer.id === selectedAnswers[currentQuestion.id]).text}
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="flex justify-between mt-4">
            <button
              onClick={handlePrevSlide}
              disabled={currentSlide === 0}
              className="px-4 py-2 bg-gray-200 rounded text-gray-700"
            >
              Back
            </button>
            <div>
              <span className="text-gray-500 mr-2">{currentSlide + 1}</span>
              <span className="text-gray-500">/</span>
              <span className="text-gray-500 ml-2">{totalSlides}</span>
            </div>
            {currentQuestion && (
              <button
                onClick={handleNextSlide}
                disabled={currentSlide === totalSlides - 1}
                className="px-4 py-2 bg-blue-500 rounded text-white"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
















// import React, { useState } from 'react';

// const QuestionPage = () => {
//   const [selectedAnswers, setSelectedAnswers] = useState({});
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const handleAnswerClick = (questionId, answerId) => {
//     setSelectedAnswers((prevAnswers) => ({
//       ...prevAnswers,
//       [questionId]: answerId,
//     }));
//   };

//   const handleNextSlide = () => {
//     setCurrentSlide((prevSlide) => prevSlide + 1);
//     window.scrollTo(0, 0);
//   };

//   const handlePrevSlide = () => {
//     setCurrentSlide((prevSlide) => prevSlide - 1);
//     window.scrollTo(0, 0);
//   };


//   const questions = [
//     {
//       id: 1,
//       question: 'Abana banjye bavuyemo umwe ntiwabimenya?',
//       answers: [
//         { id: 1, text: 'Akatsi ko ku nzu', isCorrect: true },
//         { id: 2, text: 'Firigo', isCorrect: false },
//         { id: 3, text: 'Umukondo w inyana ', isCorrect: false },
//         { id: 4, text: 'Kaburimbo', isCorrect: false },
//       ],
//     },
//     {
//       id: 2,
//       question: 'Rukara aratema umuvumba?',
//       answers: [
//         { id: 1, text: 'Inopfu', isCorrect: false },
//         { id: 2, text: 'Urwembe mu musatsi', isCorrect: true },
//         { id: 3, text: 'Igare rigeze ahazamuka', isCorrect: false },
//         { id: 4, text: 'Urwuzi', isCorrect: false },
//       ],
//     },
//     {
//       id: 3,
//       question: 'Ndumwe nkatunga benshi?',
//       answers: [
//         { id: 1, text: 'Gusitara', isCorrect: false },
//         { id: 2, text: 'Imana', isCorrect: true },
//         { id: 3, text: 'Kubuza umuri kurya', isCorrect: false },
//         { id: 4, text: "Inzogera yo kw 'irembo", isCorrect: false },
//       ],
//     },
//     {
//       id: 4,
//       question: 'Abakobwa banjye bose bikwije impindu?',
//       answers: [
//         { id: 1, text: 'Intare', isCorrect: false },
//         { id: 2, text: 'Inzu isakaye', isCorrect: false },
//         { id: 3, text: 'Igikoro', isCorrect: false },
//         { id: 4, text: "Imirizo y'imbeba", isCorrect: true },
//       ],
//     },
//     {
//       id: 5,
//       question: "Gitare n'iyayo birakina?" ,
//       answers: [
//         { id: 1, text: 'Inyama', isCorrect: false },
//         { id: 2, text: 'Ibitotsi', isCorrect: false },
//         { id: 3, text: "Ijuru n' ukwezi ", isCorrect: true },
//         { id: 4, text: 'Invura', isCorrect: false },
//       ],
//     },
//     {
//       id: 6,
//       question: 'Ibiti byanjye byaka bidacika?',
//       answers: [
//         { id: 1, text: 'Buji', isCorrect: true },
//         { id: 2, text: 'Ifu ', isCorrect: false },
//         { id: 3, text: 'Corogati', isCorrect: false },
//         { id: 4, text: 'Igisenge', isCorrect: false },
//       ],
//     },
//     {
//       id: 7,
//       question: "Akabindi ka Mbindigiti gatetse amara y'inkuba?",
//       answers: [
//         { id: 1, text: 'Ifaranga', isCorrect: false },
//         { id: 2, text: 'Umutego', isCorrect: false },
//         { id: 3, text: "Umwobo w 'impiri", isCorrect: true },
//         { id: 4, text: 'Icyondo', isCorrect: false },
//       ],
//     },
//     {
//       id: 8,
//       question: 'Ngiye mu rutoki nsimbuka abapfumu bapfuye?',
//       answers: [
//         { id: 1, text: "Isi n' ijuru ", isCorrect: false },
//         { id: 2, text: 'Imitumba', isCorrect: true },
//         { id: 3, text: 'Umwarimu', isCorrect: false },
//         { id: 4, text: "Umwobo w' inzoka", isCorrect: false },
//       ],
//     },
//     {
//       id: 9,
//       question: 'Hagarara hakuno,mpagarare hakurya turate abeza ?',
//       answers: [
//         { id: 1, text: 'Amenyo', isCorrect: true },
//         { id: 2, text: 'Icyiga', isCorrect: false },
//         { id: 3, text: 'Umucuruzi', isCorrect: false },
//         { id: 4, text: 'Igishanga', isCorrect: false },
//       ],
//     },
//     {
//       id: 10,
//       question: 'Ni iki cyatanze umuzungu kwicara mu ifuteyi?',
//       answers: [
//         { id: 1, text: 'Ibitoki', isCorrect: false },
//         { id: 2, text: 'Imbaragasa', isCorrect: true },
//         { id: 3, text: 'Inkono', isCorrect: false },
//         { id: 4, text: 'Ukwezi', isCorrect: false },
//       ],
//     },
//     {
//       id: 11,
//       question: 'Mpagaze mu ishyamba rimpa umwezi?',
//       answers: [
//         { id: 1, text: 'Imvura', isCorrect: false },
//         { id: 2, text: 'Umuyaga', isCorrect: false },
//         { id: 3, text: 'Umurama', isCorrect: false },
//         { id: 4, text: 'Ibarizo', isCorrect: true },
//       ],
//     },
//     {
//       id: 12,
//       question: 'Ngeze mu ishyamba rirahungabana ?',
//       answers: [
//         { id: 1, text: 'Imbwa mu masinde', isCorrect: false },
//         { id: 2, text: "Inzara y' umusore", isCorrect: true },
//         { id: 3, text: 'Ingasire', isCorrect: false },
//         { id: 4, text: 'Ibishokoro', isCorrect: false },
//       ],
//     },
//     {
//       id: 13,
//       question: 'Nshinze umwe ndasakara?',
//       answers: [
//         { id: 1, text: "Ibara ry ' inka ", isCorrect: false },
//         { id: 2, text: "Umwumba w' insina ", isCorrect: false },
//         { id: 3, text: 'Icyobo', isCorrect: true },
//         { id: 4, text: 'Ishyiga', isCorrect: false },
//       ],
//     },
//     {
//       id: 14,
//       question: 'Nyirabakangaza ngo mutahe?',
//       answers: [
//         { id: 1, text: "Akayaga ko mw 'ishyamba", isCorrect: false },
//         { id: 2, text: "Imbeho ku rugi ", isCorrect: true },
//         { id: 3, text: 'Ijwi', isCorrect: false },
//         { id: 4, text: 'Inkuba', isCorrect: false },
//       ],
//     },
//     {
//       id: 15,
//       question: ' Inka yanjye nyikama igaramye?',
//       answers: [
//         { id: 1, text: 'Umuvure', isCorrect: true },
//         { id: 2, text: 'Ishyiga', isCorrect: false },
//         { id: 3, text: 'Umubagazi', isCorrect: false },
//         { id: 4, text: 'Ururabo', isCorrect: false },
//       ],
//     },
//     {
//       id: 16,
//       question: 'Twavamo umwe ntitwarya?',
//       answers: [
//         { id: 1, text: 'Igisenge', isCorrect: false },
//         { id: 2, text: 'Ishyiga', isCorrect: true },
//         { id: 3, text: 'Inka', isCorrect: false },
//         { id: 4, text: 'Urugi', isCorrect: false },
//       ],
//     },
//     {
//       id: 17,
//       question: 'Mpagaze mu mpinga mpenera ab’epfo ?',
//       answers: [
//         { id: 1, text: 'Umuturanyi mubi', isCorrect: false },
//         { id: 2, text: 'Umubagazi', isCorrect: true },
//         { id: 3, text: 'Inka iri kurisha', isCorrect: false },
//         { id: 4, text: 'Inzu', isCorrect: false },
//       ],
//     },
//     {
//       id: 18,
//       question: 'Mutamu irabyina mu gatabire ?',
//       answers: [
//         { id: 1, text: "Ifi m 'uruzi", isCorrect: false },
//         { id: 2, text: 'Urutoki', isCorrect: false },
//         { id: 3, text: 'Icyoba', isCorrect: false },
//         { id: 4, text: "Imbwa mu masinde", isCorrect: true },
//       ],
//     },
//     {
//       id: 19,
//       question: 'Uwagaca yaba ari umugabo?',
//       answers: [
//         { id: 1, text: 'Umugore ujya iwabo ', isCorrect: false },
//         { id: 2, text: 'Inyudo', isCorrect: false },
//         { id: 3, text: 'Kubuza umuryi kurya', isCorrect: true },
//         { id: 4, text: 'Umurima', isCorrect: false },
//       ],
//     },
//     {
//       id: 20,
//       question: 'Ngeze mu rutoki abasirikare baramfata ?',
//       answers: [
//         { id: 1, text: "Inzara n 'inyota", isCorrect: false },
//         { id: 2, text: 'Ibishokoro', isCorrect: true },
//         { id: 3, text: 'Isayo', isCorrect: false },
//         { id: 4, text: 'Icyanzu', isCorrect: false },
//       ],
//     },
//     {
//       id: 21,
//       question: ' Nkubise urushyi rurumira ?',
//       answers: [
//         { id: 1, text: 'Inkuba', isCorrect: false },
//         { id: 2, text: "Ibara ry' inka", isCorrect: true },
//         { id: 3, text: 'Umurabyo', isCorrect: false },
//         { id: 4, text: 'Izuba', isCorrect: false },
//       ],
//     },
//     {
//       id: 22,
//       question: 'Hakurya urwererane ,hakuno urwererane ?',
//       answers: [
//         { id: 1, text: "Ururabyo rw 'amashaza", isCorrect: true },
//         { id: 2, text: 'Uruhinja ', isCorrect: false },
//         { id: 3, text: 'Igishanga', isCorrect: false },
//         { id: 4, text: 'Umwobo', isCorrect: false },
//       ],
//     },
//     {
//       id: 23,
//       question: 'Abakobwa banjye barara bahagaze bwacya bakaryama ?',
//       answers: [
//         { id: 1, text: 'Imyugariro', isCorrect: true },
//         { id: 2, text: 'Ishyamba', isCorrect: true },
//         { id: 3, text: 'Amarembo', isCorrect: false },
//         { id: 4, text: 'Insina', isCorrect: false },
//       ],
//     },
//     {
//       id: 24,
//       question: 'Hakurya mu bihuku ?',
//       answers: [
//         { id: 1, text: 'Imisozi', isCorrect: false },
//         { id: 2, text: 'Amateke', isCorrect: false },
//         { id: 3, text: 'Urwuri', isCorrect: false },
//         { id: 4, text: 'Ibizu bitagira abantu', isCorrect: true },
//       ],
//     },
//     {
//       id: 25,
//       question: 'Mutumbajuru wa rujugira?',
//       answers: [
//         { id: 1, text: 'Igitagangurirwa', isCorrect: false },
//         { id: 2, text: "Umwumba w' insina", isCorrect: true },
//         { id: 3, text: 'Ikijumba', isCorrect: false },
//         { id: 4, text: 'Amapera', isCorrect: false },
//       ],
//     },
//     {
//       id: 26,
//       question: 'Sogokuru aryoha aboze ?',
//       answers: [
//         { id: 1, text: 'Umuneke', isCorrect: true },
//         { id: 2, text: 'Urwagwa', isCorrect: false },
//         { id: 3, text: 'Umutobe', isCorrect: false },
//         { id: 4, text: 'Umurima', isCorrect: false },
//       ],
//     },
//     {
//       id: 27,
//       question: 'Ruganzu araguye n’ingabo ze ?',
//       answers: [
//         { id: 1, text: 'Imvura', isCorrect: false },
//         { id: 2, text: 'Urutoki', isCorrect: true },
//         { id: 3, text: 'Umucecuru', isCorrect: false },
//         { id: 4, text: 'Inzu', isCorrect: false },
//       ],
//     },
//     {
//       id: 28,
//       question: 'Karavugira ibuhanika?',
//       answers: [
//         { id: 1, text: 'Ifaranga', isCorrect: false },
//         { id: 2, text: 'Akayungurzo', isCorrect: false },
//         { id: 3, text: 'Ingasire', isCorrect: true },
//         { id: 4, text: 'Indangururamajwi', isCorrect: false },
//       ],
//     },
//     {
//       id: 29,
//       question: 'Ayi napfa nakira ,simbizi?',
//       answers: [
//         { id: 1, text: 'Ubwato mu nyanja', isCorrect: false },
//         { id: 2, text: 'Indege', isCorrect: false },
//         { id: 3, text: 'Akanyoni karitse kunzira', isCorrect: true },
//         { id: 4, text: 'Umwambi', isCorrect: false },
//       ],
//     },
//     {
//       id: 30,
//       question: 'Inka yanjye nyizirika ku nzira uyinyuzeho wese akayishitura ?',
//       answers: [
//         { id: 1, text: 'Ururabo', isCorrect: false },
//         { id: 2, text: 'Urutoryi', isCorrect: true },
//         { id: 3, text: 'Amapera', isCorrect: false },
//         { id: 4, text: 'Umwembe', isCorrect: false },
//       ],
//     },
//     {
//       id: 31,
//       question: 'Rukara rw’umwami yicarira abagabo batatu?',
//       answers: [
//         { id: 1, text: 'Urupfu', isCorrect: false },
//         { id: 2, text: "Kwatsa m 'iziko", isCorrect: false },
//         { id: 3, text: 'Icyoba', isCorrect: false },
//         { id: 4, text: 'Inkono', isCorrect: true },
//       ],
//     },
//     {
//       id: 32,
//       question: ' Faraziya aceza yicaye ?',
//       answers: [
//         { id: 1, text: 'Uruhinja', isCorrect: false },
//         { id: 2, text: 'Akayunguruzo', isCorrect: true },
//         { id: 3, text: 'Urwembe', isCorrect: false },
//         { id: 4, text: 'Inyenyeri', isCorrect: false },
//       ],
//     },
//     {
//       id: 33,
//       question: 'Mpiritse indobo ikwira hose?',
//       answers: [
//         { id: 1, text: 'Amagambo yo kururembo', isCorrect: true },
//         { id: 2, text: "Ibibabi by' ibibonobono", isCorrect: false },
//         { id: 3, text: "Imirizo y' Imbeba", isCorrect: false },
//         { id: 4, text: 'Terefone', isCorrect: false },
//       ],
//     },
//     {
//       id: 34,
//       question: 'Mpagaze mu gahinga nyarira ab ‘epfo?',
//       answers: [
//         { id: 1, text: 'Imvura', isCorrect: true },
//         { id: 2, text: 'Umwuka', isCorrect: false },
//         { id: 3, text: 'Itoroshi', isCorrect: false },
//         { id: 4, text: 'Iriba', isCorrect: false },
//       ],
//     },
//     {
//       id: 35,
//       question: 'Icyo nsasira ntikirame?',
//       answers: [
//         { id: 1, text: 'Umweyo', isCorrect: false },
//         { id: 2, text: 'Ikawa', isCorrect: true },
//         { id: 3, text: 'Uruhongore', isCorrect: false },
//         { id: 4, text: 'Umwami', isCorrect: false },
//       ],
//     },
//     {
//       id: 36,
//       question: 'Nagutera ruganwa iganira n’abantu?',
//       answers: [
//         { id: 1, text: 'Telephone', isCorrect: true },
//         { id: 2, text: 'Indirimbo', isCorrect: false },
//         { id: 3, text: 'Inzogera', isCorrect: false },
//         { id: 4, text: 'Umushumba', isCorrect: false },
//       ],
//     },
//     {
//       id: 37,
//       question: 'Abana b’Umwami bicaye ku ntebe imwe?',
//       answers: [
//         { id: 1, text: 'Umusatsi', isCorrect: false },
//         { id: 2, text: 'Intoki ku biganza', isCorrect: true },
//         { id: 3, text: 'Amababi', isCorrect: false },
//         { id: 4, text: 'Umunzani', isCorrect: false },
//       ],
//     },
//     {
//       id: 38,
//       question: ' Ko undora ndaguha?',
//       answers: [
//         { id: 1, text: 'Inkono', isCorrect: false },
//         { id: 2, text: 'Isahane', isCorrect: false },
//         { id: 3, text: 'Ubuto bwa so na nyoko', isCorrect: false },
//         { id: 4, text: "Imyenjye y' inzu", isCorrect: true },
//       ],
//     },
//     {
//       id: 39,
//       question: 'Sakuza n’uwo muri kumwe?',
//       answers: [
//         { id: 1, text: 'Umukandara', isCorrect: false },
//         { id: 2, text: 'Ururimi rwawe', isCorrect: true },
//         { id: 3, text: 'Indorerwamo', isCorrect: false },
//         { id: 4, text: 'Ishyiga', isCorrect: false },
//       ],
//     },
//     {
//       id: 40,
//       question: 'Ndi kagufi nahina so?',
//       answers: [
//         { id: 1, text: 'Icyanzu', isCorrect: true },
//         { id: 2, text: 'Igare', isCorrect: false },
//         { id: 3, text: 'Inkoni', isCorrect: false },
//         { id: 4, text: 'Akanyarira jisho', isCorrect: false },
//       ],
//     },
//     {
//       id: 41,
//       question: 'Aka kariza so?',
//       answers: [
//         { id: 1, text: 'Akayaga', isCorrect: false },
//         { id: 2, text: 'Akanyarira jisho', isCorrect: true },
//         { id: 3, text: 'Ubukonje', isCorrect: false },
//         { id: 4, text: 'Agasenda', isCorrect: false },
//       ],
//     },
//     {
//       id: 42,
//       question: ' Karatembashyashya ?',
//       answers: [
//         { id: 1, text: 'Umugezi', isCorrect: false },
//         { id: 2, text: 'Urwuri', isCorrect: false },
//         { id: 3, text: 'Amazi ashyushye', isCorrect: false },
//         { id: 4, text: 'Amazi ku iteke', isCorrect: true },
//       ],
//     },

//     {
//       id: 43,
//       question: 'Abakobwa banjye banagana amajosi ?',
//       answers: [
//         { id: 1, text: 'Amatara', isCorrect: false },
//         { id: 2, text: 'Igitoki', isCorrect: false },
//         { id: 3, text: 'Urugoyi rw ibishyimbo', isCorrect: true },
//         { id: 4, text: 'Umushingiriro', isCorrect: false },
//       ],
//     },
//     {
//       id: 44,
//       question: 'Hari agati utakurira ?',
//       answers: [
//         { id: 1, text: 'Umusozi uhanamye', isCorrect: false },
//         { id: 2, text: 'Ubunyereri', isCorrect: true },
//         { id: 3, text: 'Amakoma', isCorrect: false },
//         { id: 4, text: 'Ikaramu', isCorrect: false },
//       ],
//     },
//     {
//       id: 45,
//       question: 'Kamanutse kibarangura no hasi kati nkaba nzasubirayo ndakambura data?',
//       answers: [
//         { id: 1, text: "Akababi k' umuvumu", isCorrect: true },
//         { id: 2, text: 'Ipera', isCorrect: false },
//         { id: 3, text: 'Ifaranga', isCorrect: false },
//         { id: 4, text: 'Akamarimari', isCorrect: false },
//       ],
//     },
//     {
//       id: 46,
//       question: 'Zenguruka duhure?',
//       answers: [
//         { id: 1, text: 'Ikirere', isCorrect: false },
//         { id: 2, text: 'Umukandara', isCorrect: true },
//         { id: 3, text: 'Umugozi', isCorrect: false },
//         { id: 4, text: 'Umuhanda', isCorrect: false },
//       ],
//     },
//     {
//       id: 47,
//       question: 'Nicaye iwacu murika isi ?',
//       answers: [
//         { id: 1, text: 'Inyoni', isCorrect: false },
//         { id: 2, text: 'Imodoka', isCorrect: false },
//         { id: 3, text: 'Itoroshi', isCorrect: false },
//         { id: 4, text: 'Izuba', isCorrect: true },
//       ],
//     },
//     {
//       id: 48,
//       question: 'So na nyoko bapfaga iki?',
//       answers: [
//         { id: 1, text: 'Icyanzu', isCorrect: false },
//         { id: 2, text: 'Akayuzi ko murubibi', isCorrect: true },
//         { id: 3, text: 'Akanyarira jisho', isCorrect: false },
//         { id: 4, text: 'Umwumbati', isCorrect: false },
//       ],
//     },
//     {
//       id: 49,
//       question: ' Iyo umugabo ageze mu rutoki abanza iki ?',
//       answers: [
//         { id: 1, text: 'Kuruzenguruka', isCorrect: false },
//         { id: 2, text: 'Ikivugirizo', isCorrect: true },
//         { id: 3, text: 'Guca amakoma', isCorrect: false },
//         { id: 4, text: 'Kubara ibitoki', isCorrect: false },
//       ],
//     },
//     {
//       id: 50,
//       question: '?',
//       answers: [
//         { id: 1, text: 'Ikivugirizo', isCorrect: false },
//         { id: 2, text: 'Inyamunyo', isCorrect: true },
//         { id: 3, text: 'Guca amakoma', isCorrect: false },
//         { id: 4, text: 'Guharura', isCorrect: false },
//       ],
//     },
//     {
//       id: 51,
//       question: 'Ariya mabuye ya rubarabara wayabara ukayarangiza ?',
//       answers: [
//         { id: 1, text: 'Inyenyeri', isCorrect: true },
//         { id: 2, text: 'Umusenyi', isCorrect: false },
//         { id: 3, text: 'Umuceri', isCorrect: false },
//         { id: 4, text: 'Isukari', isCorrect: false },
//       ],
//     },
//     {
//       id: 52,
//       question: 'Nta kujya mu bajiji utari umujiji ?',
//       answers: [
//         { id: 1, text: 'Abahigi', isCorrect: false },
//         { id: 2, text: 'Umugina mu rufunzo', isCorrect: true },
//         { id: 3, text: 'Umuyenyi mu rutoki', isCorrect: false },
//         { id: 4, text: 'Umwezi', isCorrect: false },
//       ],
//     },
//     {
//       id: 53,
//       question: 'Mpagaze inaha ndasa kwa myasiro I Burundi ?',
//       answers: [
//         { id: 1, text: 'Imirabyo', isCorrect: true },
//         { id: 2, text: 'Imbunda', isCorrect: false },
//         { id: 3, text: 'Izuba', isCorrect: false },
//         { id: 4, text: 'Umuyaga', isCorrect: false },
//       ],
//     },
//     {
//       id: 54,
//       question: 'Dore aho so arenga n’ibikote bibi ?',
//       answers: [
//         { id: 1, text: 'Indege', isCorrect: false },
//         { id: 2, text: 'Imodoka', isCorrect: false },
//         { id: 3, text: 'Ikivumvuri', isCorrect: true },
//         { id: 4, text: 'Inyoni', isCorrect: false },
//       ],
//     },
//     {
//       id: 55,
//       question: 'Inka yanjye yimira mu kinono ,ikabyarira mu ihembe?',
//       answers: [
//         { id: 1, text: "Imbeho k ' urugi", isCorrect: false },
//         { id: 2, text: 'Igitoki', isCorrect: true },
//         { id: 3, text: 'Ingamiya', isCorrect: false },
//         { id: 4, text: 'Urukwavu', isCorrect: false },
//       ],
//     },
//     {
//       id: 56,
//       question: 'Gakore bakwice?',
//       answers: [
//         { id: 1, text: 'Uburozi', isCorrect: false },
//         { id: 2, text: 'Ihwa', isCorrect: false },
//         { id: 3, text: 'Umuyenzi', isCorrect: false },
//         { id: 4, text: "Agakono k' inzara", isCorrect: true },
//       ],
//     },
//     {
//       id: 57,
//       question: 'Nagutera nakwiteguye ?',
//       answers: [
//         { id: 1, text: 'Ikirura', isCorrect: false },
//         { id: 2, text: 'Ikirungurira', isCorrect: false },
//         { id: 3, text: 'Gusitara', isCorrect: true },
//         { id: 4, text: 'Umuheto', isCorrect: false },
//       ],
//     },
//     {
//       id: 58,
//       question: 'Ni iki cyatanze umuzungu kwambara karuvati?',
//       answers: [
//         { id: 1, text: 'Televiziyo', isCorrect: false },
//         { id: 2, text: 'Icyiyoni', isCorrect: true },
//         { id: 3, text: 'Intebe', isCorrect: false },
//         { id: 4, text: 'Inka', isCorrect: false },
//       ],
//     },
//     {
//       id: 59,
//       question: 'Nagiye I Kigali ndi umusenzi ngaruka ndi umuzungu?',
//       answers: [
//         { id: 1, text: 'Umwanana', isCorrect: false },
//         { id: 2, text: 'Igitoki cya kamara', isCorrect: true },
//         { id: 3, text: 'Imodoka', isCorrect: false },
//         { id: 4, text: 'Ifu', isCorrect: false },
//       ],
//     },
//     {
//       id: 60,
//       question: 'Dombidori?',
//       answers: [
//         { id: 1, text: 'Intore mu rwabya', isCorrect: true },
//         { id: 2, text: 'Ifaranga', isCorrect: false },
//         { id: 3, text: 'Ingunguru', isCorrect: false },
//         { id: 4, text: 'Akotsi', isCorrect: false },
//       ],
//     },
//     {
//       id: 61,
//       question: 'Dore abakobwa berekana amabere?',
//       answers: [
//         { id: 1, text: "Amatar y' imodoka", isCorrect: false },
//         { id: 2, text: 'Amapapayi', isCorrect: true },
//         { id: 3, text: 'Amaso', isCorrect: false },
//         { id: 4, text: 'Amadirishya', isCorrect: false },
//       ],
//     },
//     {
//       id: 62,
//       question: 'Mira isupu nkasiga inyama ?',
//       answers: [
//         { id: 1, text: 'Uugati', isCorrect: false },
//         { id: 2, text: "Ibikongorwa by' ibisheke", isCorrect: true },
//         { id: 3, text: 'Inyoni', isCorrect: false },
//         { id: 4, text: 'Ibirayi', isCorrect: false },
//       ],
//     },
//     {
//       id: 63,
//       question: 'Ngiye guhamba so agaruka ankurikiye?',
//       answers: [
//         { id: 1, text: 'Ivu', isCorrect: true },
//         { id: 2, text: 'Umuyaga', isCorrect: false },
//         { id: 3, text: 'Umwotsi', isCorrect: false },
//         { id: 4, text: 'Umwuka', isCorrect: false },
//       ],
//     },
//     {
//       id: 64,
//       question: 'Ko twagendanye wambwiye iki?',
//       answers: [
//         { id: 1, text: 'Sida', isCorrect: false },
//         { id: 2, text: 'Amata', isCorrect: false },
//         { id: 3, text: 'Urutara', isCorrect: false },
//         { id: 4, text: 'Igicucucucu', isCorrect: true },
//       ],
//     },
//     {
//       id: 65,
//       question: 'Ndya nkurye ?',
//       answers: [
//         { id: 1, text: 'Umunyu', isCorrect: false },
//         { id: 2, text: 'Ideni', isCorrect: false },
//         { id: 3, text: 'Urusenda', isCorrect: true },
//         { id: 4, text: 'Umuneke', isCorrect: false },
//       ],
//     },
//     {
//       id: 66,
//       question: 'Ishime nyoko aratwite?',
//       answers: [
//         { id: 1, text: 'Inka', isCorrect: false },
//         { id: 2, text: 'Urwina', isCorrect: true },
//         { id: 3, text: 'Urukwavu', isCorrect: false },
//         { id: 4, text: 'Ingurube', isCorrect: false },
//       ],
//     },
//     {
//       id: 67,
//       question: 'Dore mukara yateye ku irembo?',
//       answers: [
//         { id: 1, text: 'Amase', isCorrect: true },
//         { id: 2, text: 'Umujuru', isCorrect: false },
//         { id: 3, text: 'Imbwa', isCorrect: false },
//         { id: 4, text: 'Umuswa', isCorrect: false },
//       ],
//     },
//     {
//       id: 68,
//       question: 'Akari inyuma ya Ndiza urakazi?',
//       answers: [
//         { id: 1, text: 'Umgongo', isCorrect: false },
//         { id: 2, text: 'Akanyana munda ya nyina', isCorrect: true },
//         { id: 3, text: 'Amafaranga', isCorrect: false },
//         { id: 4, text: 'Ubukene', isCorrect: false },
//       ],
//     },
//     {
//       id: 69,
//       question: 'Mama arusha nyoko kwambarira ubukwe?',
//       answers: [
//         { id: 1, text: 'Umuceri', isCorrect: false },
//         { id: 2, text: 'Ikigori', isCorrect: true },
//         { id: 3, text: 'Igisheke', isCorrect: false },
//         { id: 4, text: 'Umusirikare', isCorrect: false },
//       ],
//     },
//     {
//       id: 70,
//       question: 'Njya mu nzu kagasigara hanze ?',
//       answers: [
//         { id: 1, text: "Akazu k 'umuzamu", isCorrect: false },
//         { id: 2, text: 'Imbwa', isCorrect: false },
//         { id: 3, text: 'Agatsitsino', isCorrect: true },
//         { id: 4, text: "Akazu k' imbwa ", isCorrect: false },
//       ],
//     },
//     {
//       id: 71,
//       question: 'Mvuye aha nta iminopfu ndinda ngera aho nshaka?',
//       answers: [
//         { id: 1, text: "Umufka w' isukari", isCorrect: false },
//         { id: 2, text: "Isakamburira ry 'inzu", isCorrect: true },
//         { id: 3, text: 'Umuswa', isCorrect: false },
//         { id: 4, text: "Umufuka w 'umuceri", isCorrect: false },
//       ],
//     },
//     {
//       id: 72,
//       question: 'Umwana wanjye yirirwa agenda akarara agenda ?',
//       answers: [
//         { id: 1, text: 'Umugezi', isCorrect: true },
//         { id: 2, text: 'Inyanja', isCorrect: false },
//         { id: 3, text: 'Ikiyaga', isCorrect: false },
//         { id: 4, text: 'Ikiziba', isCorrect: false },
//       ],
//     },
//     {
//       id: 73,
//       question: ' Biteganya bitazahura ?',
//       answers: [
//         { id: 1, text: 'Umugozi', isCorrect: false },
//         { id: 2, text: "Inkomanyirizo z' umuryango", isCorrect: true },
//         { id: 3, text: "Isi' n ikirere", isCorrect: true },
//         { id: 4, text: "Inkombe z' uruzi", isCorrect: true },
//       ],
//     },
//     {
//       id: 74,
//       question: 'Nagutera akazibaziba ka ntibazirikana rubanda bashishwa nabi?',
//       answers: [
//         { id: 1, text: 'Umugeri', isCorrect: false },
//         { id: 2, text: 'Gusaba uwo wimye', isCorrect: true },
//         { id: 3, text: 'Igipfunsi', isCorrect: false },
//         { id: 4, text: 'Urushyi', isCorrect: false },
//       ],
//     },
//     {
//       id: 75,
//       question: 'Inka yanjye nyikama igenda?',
//       answers: [
//         { id: 1, text: 'Uruyuzi', isCorrect: true },
//         { id: 2, text: 'Umuvure', isCorrect: false },
//         { id: 3, text: 'Igihumyo', isCorrect: false },
//         { id: 4, text: 'Icyoba', isCorrect: false },
//       ],
//     },
//     {
//       id: 76,
//       question: ' Fata utwangushye tujye kuvoma iriba ridakama?',
//       answers: [
//         { id: 1, text: 'Ibihaza', isCorrect: false },
//         { id: 2, text: 'Ishuri', isCorrect: true },
//         { id: 3, text: 'Umugezi', isCorrect: false },
//         { id: 4, text: 'Amarembo', isCorrect: false },
//       ],
//     },
//     {
//       id: 77,
//       question: 'Abambari b’I Rurinda bambarira inzogera ikuzimu?',
//       answers: [
//         { id: 1, text: 'Amateke', isCorrect: false },
//         { id: 2, text: 'Ibirayi', isCorrect: false },
//         { id: 3, text: 'Ubunyobwa', isCorrect: true },
//         { id: 4, text: 'Ibijumba', isCorrect: false },
//       ],
//     },
//     {
//       id: 78,
//       question: 'Mpinga mu gahinga nkasarura mu gapfunsi ?',
//       answers: [
//         { id: 1, text: 'Agatsitsino', isCorrect: false },
//         { id: 2, text: 'Umusatsi', isCorrect: true },
//         { id: 3, text: 'Ikigori ', isCorrect: false },
//         { id: 4, text: 'Umuceri', isCorrect: false },
//       ],
//     },
//     {
//       id: 79,
//       question: ' Inyana y’ishyanga iratema ishyamba?',
//       answers: [
//         { id: 1, text: "Akayaga mw' ishyamba", isCorrect: false },
//         { id: 2, text: 'Akotsi', isCorrect: false },
//         { id: 3, text: 'Umusatsi', isCorrect: false },
//         { id: 4, text: "Agahinda k' umutima", isCorrect: true },
//       ],
//     },
//     {
//       id: 80,
//       question: 'Icwende ryange iyo riba bugufi mba ngukoreyemo?',
//       answers: [
//         { id: 1, text: 'Ukwezi', isCorrect: true },
//         { id: 2, text: 'Inkono', isCorrect: false },
//         { id: 3, text: 'Ikofi', isCorrect: false },
//         { id: 4, text: 'Uruyuzi', isCorrect: false },
//       ],
//     },
//     {
//       id: 81,
//       question: 'Mfite inka yanjye nyiragira ku manga ntitembe?',
//       answers: [
//         { id: 1, text: 'Amazuru', isCorrect: false },
//         { id: 2, text: 'amatwi', isCorrect: true },
//         { id: 3, text: 'Amashaza', isCorrect: false },
//         { id: 4, text: 'Imineke', isCorrect: false },
//       ],
//     },
//     {
//       id: 82,
//       question: 'Nyirandarindari?',
//       answers: [
//         { id: 1, text: 'Inda mu ruhara', isCorrect: true },
//         { id: 2, text: 'Uruyuzi', isCorrect: false },
//         { id: 3, text: 'Ikuvumvuri', isCorrect: false },
//         { id: 4, text: 'Umwirongi', isCorrect: false },
//       ],
//     },
//     {
//       id: 83,
//       question: 'Abasore b’i Gisaka barasa n’abakiri bato?',
//       answers: [
//         { id: 1, text: 'Imbeba', isCorrect: false },
//         { id: 2, text: 'Inyoni', isCorrect: false },
//         { id: 3, text: 'Igisenge', isCorrect: false },
//         { id: 4, text: 'Isusa', isCorrect: true },
//       ],
//     },
//     {
//       id: 84,
//       question: 'Akababaje umugabo kamurenza impinga ?',
//       answers: [
//         { id: 1, text: 'Akagwa', isCorrect: false },
//         { id: 2, text: 'Agahinda', isCorrect: false },
//         { id: 3, text: 'Ifaranga', isCorrect: true },
//         { id: 4, text: 'Agasenda', isCorrect: false },
//       ],
//     },
//     {
//       id: 85,
//       question: 'Zisa zitagira isano ?',
//       answers: [
//         { id: 1, text: 'Imodoka', isCorrect: false },
//         { id: 2, text: "Inkoko n' inkware ", isCorrect: true },
//         { id: 3, text: 'Imishanana', isCorrect: false },
//         { id: 4, text: 'Ityazo', isCorrect: false },
//       ],
//     },
//     {
//       id: 86,
//       question: 'Umuzungu atwara imodoka umusatsi uri hanze?',
//       answers: [
//         { id: 1, text: 'Imashami', isCorrect: false },
//         { id: 2, text: 'Amambati', isCorrect: false },
//         { id: 3, text: 'Ikigori', isCorrect: true },
//         { id: 4, text: 'Antene', isCorrect: false },
//       ],
//     },
//     {
//       id: 87,
//       question: 'Nteye agapira kagera I Roma?',
//       answers: [
//         { id: 1, text: 'Isasu', isCorrect: false },
//         { id: 2, text: 'Ibaruwa', isCorrect: true },
//         { id: 3, text: 'Akanyoni', isCorrect: false },
//         { id: 4, text: 'Ikiyoni', isCorrect: false },
//       ],
//     },
//     {
//       id: 88,
//       question: 'Magurijana arajajaba I Janjagiro ?',
//       answers: [
//         { id: 1, text: "Umukondo w' inyana", isCorrect: true },
//         { id: 2, text: 'Ikinyamunjonjorerwa', isCorrect: false },
//         { id: 3, text: 'Igitagangurirwa', isCorrect: false },
//         { id: 4, text: 'Indogobe', isCorrect: false },
//       ],
//     },
//     {
//       id: 89,
//       question: ' Imana y’I Burundi irashoka ntitahe?',
//       answers: [
//         { id: 1, text: 'Imvura', isCorrect: false },
//         { id: 2, text: "Agahinda k' inkumi", isCorrect: true },
//         { id: 3, text: 'Imbeho', isCorrect: false },
//         { id: 4, text: 'Umwotsi', isCorrect: false },
//       ],
//     },
//     {
//       id: 90,
//       question: ' Inka yanjye irishiriza mu mishito igataha mu mishito?',
//       answers: [
//         { id: 1, text: 'Urutare', isCorrect: false },
//         { id: 2, text: 'Ikaramu', isCorrect: false },
//         { id: 3, text: 'Umukondo', isCorrect: false },
//         { id: 4, text: 'Ururimi', isCorrect: true },
//       ],
//     },
//     {
//       id: 91,
//       question: ' Inkuba ikubita ikwerekejeho umugongo?',
//       answers: [
//         { id: 1, text: 'Umwambi', isCorrect: false },
//         { id: 2, text: 'Umuheto', isCorrect: true },
//         { id: 3, text: 'Icumu', isCorrect: false },
//         { id: 4, text: 'Umuhumetso', isCorrect: false },
//       ],
//     },
//     {
//       id: 92,
//       question: 'Inzu yanjye nayisakariye ku nkingi imwe ?',
//       answers: [
//         { id: 1, text: 'Umwembe', isCorrect: false },
//         { id: 2, text: 'Insina', isCorrect: false },
//         { id: 3, text: 'Icyoba', isCorrect: true },
//         { id: 4, text: 'Inturusu', isCorrect: false },
//       ],
//     },
//     {
//       id: 93,
//       question: 'Karisimbi irahongotse?',
//       answers: [
//         { id: 1, text: "Igisate cy' umutsima", isCorrect: true },
//         { id: 2, text: 'Ikirunga', isCorrect: false },
//         { id: 3, text: 'Ikigori', isCorrect: false },
//         { id: 4, text: 'Umusatsi', isCorrect: false },
//       ],
//     },
//     {
//       id: 94,
//       question: 'Ndaguteruye ndakwesa,urahindukira urandeba ?',
//       answers: [
//         { id: 1, text: 'Amakaro', isCorrect: false },
//         { id: 2, text: 'Ubunyereri', isCorrect: true },
//         { id: 3, text: 'Isima ', isCorrect: false },
//         { id: 4, text: 'Isayo', isCorrect: false },
//       ],
//     },
//     {
//       id: 95,
//       question: 'Ngira inka nyisasira amahina nkayorosa andi?',
//       answers: [
//         { id: 1, text: 'Urwabya', isCorrect: false },
//         { id: 2, text: 'Ururimi', isCorrect: true },
//         { id: 3, text: 'Ikiraro', isCorrect: false },
//         { id: 4, text: 'Uruhongore', isCorrect: false },
//       ],
//     },
//     {
//       id: 96,
//       question: 'Ujya kurasa inkuba arabandarara?',
//       answers: [
//         { id: 1, text: 'Guhinga', isCorrect: false },
//         { id: 2, text: 'Guhakura', isCorrect: false },
//         { id: 3, text: 'Umucukuzi', isCorrect: false },
//         { id: 4, text: "kwatsa mu ziko", isCorrect: true },
//       ],
//     },
//     {
//       id: 97,
//       question: 'Nicaye iwanjye nzengururka isi yose ?',
//       answers: [
//         { id: 1, text: 'Ibaruwa', isCorrect: false },
//         { id: 2, text: 'Televiziyo', isCorrect: true },
//         { id: 3, text: 'Urusaku', isCorrect: false },
//         { id: 4, text: 'Izuba', isCorrect: false },
//       ],
//     },
//     {
//       id: 98,
//       question: 'Imyuko yo kwa Mahanga iruka umuriro?',
//       answers: [
//         { id: 1, text: 'Imbunda', isCorrect: true },
//         { id: 2, text: 'Itoroshi', isCorrect: true },
//         { id: 3, text: 'Buji', isCorrect: false },
//         { id: 4, text: "Amatara y' imodoka", isCorrect: false },
//       ],
//     },
//     {
//       id: 99,
//       question: 'Twaraye ihinga isuka iramungwa?',
//       answers: [
//         { id: 1, text: 'Imisumari', isCorrect: false },
//         { id: 2, text: 'Isuka', isCorrect: false },
//         { id: 3, text: 'Isahane yaguye ingese', isCorrect: true },
//         { id: 4, text: 'Imbabura', isCorrect: false },
//       ],
//     },
//     {
//       id: 100,
//       question: 'Gatitiba hejuru ya kabutindi?',
//       answers: [
//         { id: 1, text: 'Indege mu kirere', isCorrect: false },
//         { id: 2, text: 'Akanyoni ku giti', isCorrect: false },
//         { id: 3, text: 'Ubwato mu ruzi', isCorrect: true },
//         { id: 4, text: "Ingofero k' umutwe", isCorrect: false },
//       ],
//     },
//   ];
  