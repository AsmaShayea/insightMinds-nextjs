import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart: React.FC = () => {
  const data = {
    labels: ['سعيد', 'غاضب', 'خيبة أمل', 'ممتن'], // Labels in Arabic
    datasets: [
      {
        label: 'المشاعر',
        data: [300, 50, 100, 150], // Values for each label
        backgroundColor: [
          'rgba(75, 192, 75, 0.9)',  // Green
          'rgba(255, 99, 132, 0.9)', // Red
          'rgba(255, 159, 64, 0.9)', // Orange
          'rgba(54, 162, 235, 0.9)', // Blue
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
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
