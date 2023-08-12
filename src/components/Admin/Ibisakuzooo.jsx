import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuestionPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [newQuestion, setNewQuestion] = useState({
    question: '',
    answers: [
      { text: '', isCorrect: true },
      { text: '', isCorrect: false },
      { text: '', isCorrect: false },
      { text: '', isCorrect: false },
    ],
  });
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get('http://localhost:4050/api/ibisakuzo/ibisakuzo');
      setQuestions(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddQuestion = async () => {
    try {
      const response = await axios.post('http://localhost:4050/api/ibisakuzo/ibisakuzo', newQuestion);
      setQuestions([...questions, response.data]);
      setNewQuestion({
        question: '',
        answers: [
          { text: '', isCorrect: true },
          { text: '', isCorrect: false },
          { text: '', isCorrect: false },
          { text: '', isCorrect: false },
        ],
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateQuestion = async (updatedQuestion) => {
    try {
      const response = await axios.put(`http://localhost:4050/api/ibisakuzo/ibisakuzo/${updatedQuestion._id}`, updatedQuestion);
      const updatedQuestions = questions.map((question) =>
        question._id === updatedQuestion._id ? response.data : question
      );
      setQuestions(updatedQuestions);
      setSelectedQuestion(null);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteQuestion = async (questionId) => {
    try {
      await axios.delete(`http://localhost:4050/api/ibisakuzo/ibisakuzo/${questionId}`);
      const updatedQuestions = questions.filter((question) => question._id !== questionId);
      setQuestions(updatedQuestions);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditQuestion = (question) => {
    setSelectedQuestion(question);
  };
  

  return (
    <div className="mt-16">
      <h1 className="text-3xl font-bold mb-4">IBISAKUZO</h1>
      <hr className="my-4" />

      <div className="max-w-md mx-auto bg-white rounded shadow p-6 mb-4">
        <label htmlFor="question" className="block font-semibold mb-1">
          Question Text
        </label>
        <input
          type="text"
          id="question"
          className="w-full px-3 py-2 border rounded"
          value={newQuestion.question}
          onChange={(e) =>
            setNewQuestion({ ...newQuestion, question: e.target.value })
          }
        />
        {newQuestion.answers.map((answer, index) => (
          <div key={index} className="mb-2">
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              placeholder={`Answer ${index + 1}`}
              value={answer.text}
              onChange={(e) =>
                setNewQuestion((prevQuestion) => ({
                  ...prevQuestion,
                  answers: prevQuestion.answers.map((ans, i) =>
                    i === index ? { ...ans, text: e.target.value } : ans
                  ),
                }))
              }
            />
            <label className="ml-2">
              <input
                type="radio"
                name={`correctAnswer`}
                checked={answer.isCorrect}
                onChange={() =>
                  setNewQuestion((prevQuestion) => ({
                    ...prevQuestion,
                    answers: prevQuestion.answers.map((ans, i) =>
                      i === index ? { ...ans, isCorrect: true } : { ...ans, isCorrect: false }
                    ),
                  }))
                }
              />{' '}
              Correct
            </label>
          </div>
        ))}
        <button
          onClick={handleAddQuestion}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add Question
        </button>
      </div>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="p-2 border border-gray-300">Question</th>
            <th className="p-2 border border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question) => (
            <tr key={question._id}>
              <td className="p-2 border border-gray-300">{question.question}</td>
              <td className="p-2 border border-gray-300">
                <button
                  onClick={() => handleEditQuestion(question)}
                  className="px-2 py-1 bg-green-500 text-white rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteQuestion(question._id)}
                  className="px-2 py-1 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedQuestion && (
  <div className="max-w-md mx-auto bg-white rounded shadow p-6 mb-4">
    <h2 className="text-lg font-semibold mb-4">Edit Question</h2>
    <label htmlFor="edit-question" className="block font-semibold mb-1">
      Edit Question Text
    </label>
    <input
      type="text"
      id="edit-question"
      className="w-full px-3 py-2 border rounded"
      value={selectedQuestion.question}
      onChange={(e) =>
        setSelectedQuestion({ ...selectedQuestion, question: e.target.value })
      }
    />
    {selectedQuestion.answers.map((answer, index) => (
      <div key={index} className="mb-2">
        <input
          type="text"
          className="w-full px-3 py-2 border rounded"
          placeholder={`Edit Answer ${index + 1}`}
          value={answer.text}
          onChange={(e) =>
            setSelectedQuestion((prevQuestion) => ({
              ...prevQuestion,
              answers: prevQuestion.answers.map((ans, i) =>
                i === index ? { ...ans, text: e.target.value } : ans
              ),
            }))
          }
        />
        <label className="ml-2">
          <input
            type="radio"
            name={`correctAnswer`}
            checked={answer.isCorrect}
            onChange={() =>
              setSelectedQuestion((prevQuestion) => ({
                ...prevQuestion,
                answers: prevQuestion.answers.map((ans, i) =>
                  i === index
                    ? { ...ans, isCorrect: true }
                    : { ...ans, isCorrect: false }
                ),
              }))
            }
          />{' '}
          Correct
        </label>
      </div>
    ))}
    <button
      onClick={() => handleUpdateQuestion(selectedQuestion)}
      className="px-4 py-2 bg-green-500 text-white rounded"
    >
      Update
    </button>
  </div>
)}

    </div>
  );
};

export default QuestionPage;
