import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({data}:{data:any}) => {
  const chartData = {
    labels: ['Happy', 'Angry', 'Satisfied', 'Disappointed','Excited'], // Labels in Arabic
    datasets: [
      {
        label: '',
        data: [data?.Happy, data?.Angry, data?.Satisfied, data?.Disappointed,data?.Excited], // Values for each label
        backgroundColor: [
          'rgba(75, 192, 75, 0.9)',  // Green
          'rgba(255, 99, 132, 0.9)', // Red
          'rgba(255, 159, 64, 0.9)', // Orange
          'rgba(54, 162, 235, 0.9)', // Blue
          'rgba(54, 162, 235, 0.5)', // Blue
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide default legend
      },
      tooltip: {
        enabled: true, // Enable tooltips for hover effects
      },
    },
  };

  return (
    <div className="w-full max-w-[140px] m-auto">
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieChart;
