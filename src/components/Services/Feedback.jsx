import React, { useState, useEffect } from "react";
import axios from "axios";
import "../pages/Service.css";

export default function Feedback() {
  const [feedbackList, setFeedbackList] = useState([]);
  
  
  useEffect(() => {
    // Fetch feedback data from the backend API
    axios.get("/feedback/all")
      .then((response) => {
        setFeedbackList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching feedback data:", error);
      });
  }, []);

  

  const markFeedbackAsSeen = (id) => {
    const updatedFeedbackList = feedbackList.map((feedback) => {
      if (feedback.id === id) {
        return { ...feedback, seen: true };
      }
      return feedback;
    });
    setFeedbackList(updatedFeedbackList);
  };

  const markFeedbackAsUnseen = (id) => {
    const updatedFeedbackList = feedbackList.map((feedback) => {
      if (feedback.id === id) {
        return { ...feedback, seen: false };
      }
      return feedback;
    });
    setFeedbackList(updatedFeedbackList);
  };

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold my-4">Feedback</h2>
      <table className="feed border-collapse border border-gray-900">
        <thead>
          <tr>
            <th className="p-2 font-semibold border border-gray-800">First Name</th>
            <th className="p-2 font-semibold border border-gray-800">Last Name</th>
            <th className="p-2 font-semibold border border-gray-800">Email</th>
            <th className="p-2 font-semibold border border-gray-800">Message</th>
            <th className="p-2 font-semibold border border-gray-800">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Table Data - Replace this with dynamic data from your backend */}
          {feedbackList.map((feedback) => (
            <tr key={feedback.id}>
              <td className="p-2 border border-gray-600">{feedback.firstName}</td>
              <td className="p-2 border border-gray-600">{feedback.lastName}</td>
              <td className="p-2 border border-gray-600">{feedback.email}</td>
              <td className="p-2 border border-gray-600">
                <textarea
                  className="w-full h-24 resize-none border border-gray-600 p-2"
                  value={feedback.message}
                  readOnly
                />
              </td>
              <td className="p-2 border border-gray-600">
                {!feedback.seen ? (
                  <button
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mr-2"
                    onClick={() => markFeedbackAsSeen(feedback.id)}
                  >
                    Mark Seen
                  </button>
                ) : (
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2"
                    onClick={() => markFeedbackAsUnseen(feedback.id)}
                  >
                    Mark Unseen
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
