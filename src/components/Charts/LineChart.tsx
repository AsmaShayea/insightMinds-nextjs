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

  // Extract month names, positive counts, and negative counts from API data
  const labels = data?.map((item: any) => item.month);
  const positiveCounts = data?.map((item: any) => item.positive_count);
  const negativeCounts = data?.map((item: any) => item.negative_count);

  const chartData = {
    labels, // Use dynamic labels from API data
    datasets: [
      {
        label: "ايجابية",
        data: positiveCounts,
        borderColor: "#3DDA67",
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 5,
        fill: true,
        backgroundColor: chartRef.current
          ? createGradient(
              chartRef.current.ctx,
              chartRef.current.chartArea,
              "#3DDA67",
              "rgba(255, 99, 132, 0)"
            )
          : "#3DDA67",
      },
      {
        label: "سلبية",
        data: negativeCounts,
        borderColor: "#FA2057",
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 5,
        fill: true,
        backgroundColor: chartRef.current
          ? createGradient(
              chartRef.current.ctx,
              chartRef.current.chartArea,
              "#FA2057",
              "rgba(75, 192, 192, 0)"
            )
          : "#FA2057",
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
          display: false,
        },
        ticks: {
          font: {
            size: 14,
          },
          color: "#000",
        },
      },
      y: {
        display: true,
        position: "right",
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 14,
          },
          color: "#000",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    elements: {
      line: {
        tension: 0.4,
      },
    },
  };

  useEffect(() => {
    const chart = chartRef.current;

    if (chart) {
      const ctx = chart.ctx;
      const chartArea = chart.chartArea;

      if (chartArea) {
        const gradient1 = createGradient(
          ctx,
          chartArea,
          "rgba(255, 99, 132, 0.4)",
          "rgba(255, 99, 132, 0.1)"
        );
        chart.data.datasets[0].backgroundColor = gradient1;

        const gradient2 = createGradient(
          ctx,
          chartArea,
          "rgba(75, 192, 192, 0.4)",
          "rgba(75, 192, 192, 0.1)"
        );
        chart.data.datasets[1].backgroundColor = gradient2;

        chart.update();
      }
    }
  }, [data]);

  return (
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

