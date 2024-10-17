import React, { useRef, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const LineChart = ({ data }: { data: any }) => {
  const chartRef = useRef<any>(null);

  const createGradient = (
    ctx: CanvasRenderingContext2D,
    chartArea: any,
    color1: string,
    color2: string
  ) => {
    const gradient = ctx.createLinearGradient(
      0,
      chartArea.top,
      0,
      chartArea.bottom
    );
    gradient.addColorStop(0, color1); // Top color
    gradient.addColorStop(1, color2); // Bottom color
    return gradient;
  };

  const positiveCounts = data?.map((item: any) => item.positive_count);
  const negativeCounts = data?.map((item: any) => item.negative_count);

  const chartData = {
    labels: [
      "يناير",
      "فبراير",
      "مارس",
      "ابريل",
      "مايو",
      "يونيو",
      "يوليو",
      "أغسطس",
      "سبتمبر",
      "اكتوبر",
      "نوفمبر",
      "ديسمبر",
    ], // Arabic months
    datasets: [
      {
        label: "ايجابية",
        data: positiveCounts,
        borderColor: "#3DDA67", // Line color
        borderWidth: 2,
        pointRadius: 0, // Hide the points
        pointHoverRadius: 5, // Show points on hover
        fill: true, // Enable gradient fill
        backgroundColor: chartRef.current
          ? createGradient(
              chartRef.current.ctx,
              chartRef.current.chartArea,
              "#3DDA67",
              "rgba(255, 99, 132, 0)"
            )
          : "#3DDA67", // Fallback color
      },
      {
        label: "سلبية",
        data: negativeCounts,
        borderColor: "#FA2057", // Line color
        borderWidth: 2,
        pointRadius: 0, // Hide the points
        pointHoverRadius: 5, // Show points on hover
        fill: true, // Enable gradient fill
        backgroundColor: chartRef.current
          ? createGradient(
              chartRef.current.ctx,
              chartRef.current.chartArea,
              "#FA2057",
              "rgba(75, 192, 192, 0)"
            )
          : "#FA2057", // Fallback color
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
          color: "#000", // Set label color if needed
        },
      },
      y: {
        display: true,
        position: "right", // Move y-axis to the right side for Arabic style
        grid: {
          display: false, // Hide y-axis grid lines
        },
        ticks: {
          font: {
            size: 14, // Set y-axis label font size
          },
          color: "#000", // Set label color if needed
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
        const gradient1 = createGradient(
          ctx,
          chartArea,
          "rgba(255, 99, 132, 0.4)",
          "rgba(255, 99, 132, 0.1)"
        );
        chart.data.datasets[0].backgroundColor = gradient1;

        // Set gradient for Dataset 2
        const gradient2 = createGradient(
          ctx,
          chartArea,
          "rgba(75, 192, 192, 0.4)",
          "rgba(75, 192, 192, 0.1)"
        );
        chart.data.datasets[1].backgroundColor = gradient2;

        chart.update(); // Update the chart with new gradients
      }
    }
  }, []);

  return (
    // <div className="w-full h-full">
    //   {" "}
    //   {/* Light green background */}
    //   <Line ref={chartRef} data={chartData} options={options} />
    // </div>
    <div className="bg-white shadow-sidebar h-[250px] w-full p-[16px] rounded-[16px] flex flex-col justify-between gap-[16px]">
      <div className="flex items-center justify-between gap-[10px]">
        <div className="text-[16px] leading-[21px] text-black font-[600]">
          الاراء
        </div>

        <div className="flex items-center gap-[24px] text-black">
          <div className="flex items-center gap-[5px]">
            <div className="w-[12px] h-[12px] rounded-full bg-green" />
            <span className="text-[12px] leading-[16px] font-[400] ">
              ايجابية
            </span>
          </div>
          <div className="flex items-center gap-[5px]">
            <div className="w-[12px] h-[12px] rounded-full bg-red" />
            <span className="text-[12px] leading-[16px] font-[400] ">
              سلبية
            </span>
          </div>
        </div>
      </div>
      <div className="w-full h-full">
        <Line ref={chartRef} data={chartData} options={options} />
      </div>
    </div>
  );
};

export default LineChart;
