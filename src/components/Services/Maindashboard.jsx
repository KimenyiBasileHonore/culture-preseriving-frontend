import React, { useRef, useEffect, useState } from "react";
import ApexCharts from "apexcharts";
import axios from "axios";
import "../pages/Service.css";

export default function Maindashboard() {
  const chartRefs = useRef([]);
  const [registeredUsersCount, setRegisteredUsersCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data for the "Registration" chart
        const response = await axios.get("http://localhost:4050/api/user/all");
        const count = response.data.count;
        setRegisteredUsersCount(count);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const charts = [
      {
        series: [registeredUsersCount],
        chart: {
          height: 350,
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: "70%",
            },
          },
        },
        labels: ["Registration"],
      },
      // Add more charts here with different data as needed
      // ...
    ];

    const chartsInstances = charts.map((options, index) => {
      const chart = new ApexCharts(chartRefs.current[index], options);
      chart.render();
      return chart;
    });

    return () => {
      // Cleanup the charts when the component unmounts
      chartsInstances.forEach((chart) => chart.destroy());
    };
  }, [registeredUsersCount]);

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-4">Statistics</h2>
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="options" ref={(el) => (chartRefs.current[index] = el)}></div>
        ))}
      </div>
    </div>
  );
}

// import React, { useRef, useEffect } from "react";
// import ApexCharts from "apexcharts";
// import "../pages/Service.css";

// export default function Maindashboard() {
//   const chartRefs = useRef([]);

//   useEffect(() => {
//     const charts = [
//       {
//         series: [70],
//         chart: {
//           height: 350,
//           type: "radialBar",
//         },
//         plotOptions: {
//           radialBar: {
//             hollow: {
//               size: "70%",
//             },
//           },
//         },
//         labels: ["Registration"],
//       },
//       // Add more charts here with different data as needed
//       {
//         series: [50],
//         chart: {
//           height: 350,
//           type: "radialBar",
//         },
//         plotOptions: {
//           radialBar: {
//             hollow: {
//               size: "70%",
//             },
//           },
//         },
//         labels: ["Most view"],
//       },
//       {
//         series: [30],
//         chart: {
//           height: 350,
//           type: "radialBar",
//         },
//         plotOptions: {
//           radialBar: {
//             hollow: {
//               size: "70%",
//             },
//           },
//         },
//         labels: ["Most search"],
//       },
//     ];

//     const chartsInstances = charts.map((options, index) => {
//       const chart = new ApexCharts(chartRefs.current[index], options);
//       chart.render();
//       return chart;
//     });

//     return () => {
//       // Cleanup the charts when the component unmounts
//       chartsInstances.forEach((chart) => chart.destroy());
//     };
//   }, []);

//   return (
//     <div className="mt-16">
//       <h2 className="text-2xl font-bold mb-4">Statistics</h2>
//       <div className="grid grid-cols-3 gap-4">
//         {Array.from({ length: 3 }).map((_, index) => (
//           <div key={index} className="options" ref={(el) => (chartRefs.current[index] = el)}></div>
//         ))}
//       </div>
//     </div>
//   );
// }
