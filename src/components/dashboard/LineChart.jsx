import React from "react";
import { Line } from "react-chartjs-2";
function LineChart({ chartData }) {
  return (
      <Line
        data={chartData}
        options={{
          plugins: {
            legend: {
              display: false
            }
          },
          elements: {
            line: {
              borderColor: "rgb(75, 192, 192)", 
              tension: 0.3,
              borderJoinStyle: "round",
            },
            point:{
                radius:0.4,
            }
          },
          scales: {
            x: {
              grid: {
                display: false 
              }
            },
            y: {
              grid: {
                display: false 
              }
            }
        }
        }}
      />
  );
}
export default LineChart;