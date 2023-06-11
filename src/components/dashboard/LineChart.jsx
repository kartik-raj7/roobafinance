import React from "react";
import { Line } from "react-chartjs-2";
function LineChart({ chartData }) {
  return (
    <Line
      data={chartData}
      options={{
        plugins: {
          legend: {
            display: false,
          },
        },
        elements: {
          line: {
            borderColor: "#af91fc !important",
            backgroundColor: "#af91fc",
            tension: 0.4,
            borderJoinStyle: "round",
          },
          point: {
            radius: 0.4,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            grid: {
              display: false,
            },
          },
        },
      }}
    />
  );
}
export default LineChart;
