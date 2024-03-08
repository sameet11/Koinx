"use client";

import { useRef, useEffect } from "react";
import Chart, { ChartConfiguration } from "chart.js/auto";

const TokenChart = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart<"doughnut", number[], string> | null>(
    null
  );

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const myChartRef = chartRef.current?.getContext("2d");

    if (myChartRef) {
      const chartConfig: ChartConfiguration<"doughnut", number[], string> = {
        type: "doughnut",
        data: {
          datasets: [
            {
              label: "My First Dataset",
              data: [400, 200],
              backgroundColor: ["rgb(54, 162, 235)", "rgb(255, 159, 64)"],
              hoverOffset: 3,
            },
          ],
        },
      };

      chartInstance.current = new Chart(myChartRef, chartConfig);
    }
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="w-1/2 mt-10">
      <div className="font-semibold text-xl">Initial Distribution</div>
      <canvas ref={chartRef} width={90} height={90}></canvas>
    </div>
  );
};

export default TokenChart;
