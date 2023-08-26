import React, { useEffect, useState,useRef } from "react";
import axios from "axios";
// import html2pdf from "html2pdf.js";
import html2canvas from "html2canvas"; 
import jsPDF from "jspdf";
import Chart from "../Services/Chart";
import Graphchart from "../Services/Graphchart";
import "./Maindashboard.css"; 
import { useReactToPrint } from 'react-to-print';
import Report from "../Admin/Report";



export default function Maindashboard() {
  const [registeredUsersCount, setRegisteredUsersCount] = useState(0);
  const [feedbackCount, setFeedbackCount] = useState(0);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const userResponse = await axios.get("http://localhost:4050/api/user/all");
      const feedbackResponse = await axios.get("http://localhost:4050/api/feedback/feedback");

      if (userResponse.data.data) {
        const users = userResponse.data.data;
        setRegisteredUsersCount(users.filter(user => user.role === "user").length);
      }

      if (feedbackResponse.data) {
        const feedbackData = feedbackResponse.data;
        setFeedbackCount(feedbackData.length);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  
  // const pdfRef = useRef();
  // const downloadPDF = () => {
  //   const input = pdfRef.current;
  
  //   // Capture the entire content as an image
  //   html2canvas(input).then((canvas) => {
  //     const imgData = canvas.toDataURL('image/png');
  //     const pdf = new jsPDF('p', 'mm', 'a4', true);
  
  //     // Add the entire captured image to the PDF
  //     pdf.addImage(imgData, 'PNG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
  
  //     // Save the PDF
  //     pdf.save('Statistic Report.pdf');
  //   });
  // };
  
  
  
  return (
    <div className="mt-16">
      <div className="dashboard-container">
        <div className="pdf-button-container">
          <button className="pdf-button" onClick={handlePrint}>Generate PDF</button>
          
        </div>
        {/* Content you want to print */}
        <div className="printable-content" ref={componentRef}>
          <h2 className="dashboard-title mt-16 text-2xl font-bold text-gray-700 yeye">CULTURE PRESERVING STATISTICS</h2>
          <br/><br/>
          <div className="flex gap-48 mt-4">
            <div className="card bg-gradient-to-br from-yellow-300 to-red-500 p-4 rounded shadow-md flex-grow flex flex-col justify-center" style={{ height: '100px' }}>
              <h3 className="card-title text-lg font-bold mb-2 text-black text-center">Registered Users</h3>
              <p className="card-number text-xl font-bold text-black text-center">{registeredUsersCount}</p>
            </div>
            <div className="card bg-gradient-to-br from-yellow-300 to-red-500 p-4 rounded shadow-md flex-grow flex flex-col justify-center" style={{ height: '100px' }}>
              <h3 className="card-title text-lg font-bold mb-2 text-black text-center">Feedback Messages</h3>
              <p className="card-number text-xl font-bold text-black text-center">{feedbackCount}</p>
            </div>
          </div>
          <br/><br/>
          <Chart />
          <br/><br/>
          <Graphchart/>
          <br/>
          <Report/>
        </div>
      </div>
    </div>
  );
  }  