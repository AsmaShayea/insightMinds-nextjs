import React, { useRef, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const LineChart: React.FC = () => {
  const chartRef = useRef<any>(null);

  const createGradient = (ctx: CanvasRenderingContext2D, chartArea: any, color1: string, color2: string) => {
    const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
    gradient.addColorStop(0, color1); // Top color
    gradient.addColorStop(1, color2); // Bottom color
    return gradient;
  };

  const data = {
    labels: ['يناير', 'فبراير', 'مارس', 'ابريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'اكتوبر', 'نوفمبر', 'ديسمبر'], // Arabic months
    datasets: [
      {
        label: 'ايجابية',
        data: [800, 900, 1000, 850, 700, 600, 550, 440, 300, 200, 120, 30],
        borderColor: '#3DDA67', // Line color
        borderWidth: 2,
        pointRadius: 0, // Hide the points
        pointHoverRadius: 5, // Show points on hover
        fill: true, // Enable gradient fill
        backgroundColor: chartRef.current
          ? createGradient(chartRef.current.ctx, chartRef.current.chartArea, '#3DDA67', 'rgba(255, 99, 132, 0)')
          : '#3DDA67', // Fallback color
      },
      {
        label: 'سلبية',
        data: [900, 1000, 800, 600, 700, 500, 420, 300, 240, 120, 50, 10],
        borderColor: '#FA2057', // Line color
        borderWidth: 2,
        pointRadius: 0, // Hide the points
        pointHoverRadius: 5, // Show points on hover
        fill: true, // Enable gradient fill
        backgroundColor: chartRef.current
          ? createGradient(chartRef.current.ctx, chartRef.current.chartArea, '#FA2057', 'rgba(75, 192, 192, 0)')
          : '#FA2057', // Fallback color
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: true,
        grid: {
          display: false, // Hide x-axis grid lines
        },
        ticks: {
          font: {
            size: 14, // Set x-axis label font size
          },
          color: '#000', // Set label color if needed
        },
      },
      y: {
        display: true,
        position: 'right', // Move y-axis to the right side for Arabic style
        grid: {
          display: false, // Hide y-axis grid lines
        },
        ticks: {
          font: {
            size: 14, // Set y-axis label font size
          },
          color: '#000', // Set label color if needed
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide legend if not needed
      },
      tooltip: {
        enabled: true,
      },
    },
    elements: {
      line: {
        tension: 0.4, // Smooth the lines
      },
    },
  };

  // Only apply gradient after the chart is rendered
  useEffect(() => {
    const chart = chartRef.current;

    if (chart) {
      const ctx = chart.ctx;
      const chartArea = chart.chartArea;

      if (chartArea) {
        // Set gradient for Dataset 1
        const gradient1 = createGradient(ctx, chartArea, 'rgba(255, 99, 132, 0.4)', 'rgba(255, 99, 132, 0.1)');
        chart.data.datasets[0].backgroundColor = gradient1;

        // Set gradient for Dataset 2
        const gradient2 = createGradient(ctx, chartArea, 'rgba(75, 192, 192, 0.4)', 'rgba(75, 192, 192, 0.1)');
        chart.data.datasets[1].backgroundColor = gradient2;

        chart.update(); // Update the chart with new gradients
      }
    }
  }, []);

  return (
    <div className="w-full h-full" > {/* Light green background */}
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default LineChart;
