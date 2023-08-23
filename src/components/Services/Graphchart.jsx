import React, { useRef, useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';

const BarChart = () => {
  const chartRef = useRef();
  const [chartInstance, setChartInstance] = useState(null);
  const [chartData, setChartData] = useState({
    labels: ['Kumwami', 'Kungoma', 'kunka', 'ku cyansi nibindi', 'Ubwinshi' , 'Ahantu', 'Ibyivugo', 'Imigani miremire', 'Imivugo', 'Imigani y abana', 'Indirimbo', 'Amazina y inka'],
    datasets: [{
      label: 'Content Added',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: ['lightblue', 'lightcoral', 'lightskyblue'],
      borderColor: ['blue', 'red', 'deepskyblue'],
      borderWidth: 1,
    }]
  });

  

  useEffect(() => {
    if (chartInstance) {
      chartInstance.destroy();
    }

    if (chartRef.current) {
      const myChartRef = chartRef.current.getContext('2d');
      const newChartInstance = new Chart(myChartRef, {
        type: 'bar',
        data: chartData,
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

      setChartInstance(newChartInstance);
    }
  }, [chartData]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all([
          axios.get('http://localhost:4050/api/umwami/countTitles'),
          axios.get('http://localhost:4050/api/kungoma/countTitles'),
          axios.get('http://localhost:4050/api/kunka/countTitles'),
          axios.get('http://localhost:4050/api/icyansi/countTitles'),
          axios.get('http://localhost:4050/api/ubwinshi/countTitles'),
          axios.get('http://localhost:4050/api/ahantu/countTitles'),
          axios.get('http://localhost:4050/api/ibyivugo/countTitles'),
          axios.get('http://localhost:4050/api/imiganimiremire/countTitles'),
          axios.get('http://localhost:4050/api/imivugo/countTitles'),
          axios.get('http://localhost:4050/api/imiganiabana/countTitles'),
          axios.get('http://localhost:4050/api/indirimbo/countTitles'),
          axios.get('http://localhost:4050/api/inka/countTitles'),
        ]);

        const newData = responses.map(response => response.data.count);

        setChartData(prevChartData => ({
          ...prevChartData,
          datasets: [{
            ...prevChartData.datasets[0],
            data: newData,
          }]
        }));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <canvas ref={chartRef} />
    </div>
  );
};

export default BarChart;
