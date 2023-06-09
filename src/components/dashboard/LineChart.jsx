import React from "react";
import { Line } from "react-chartjs-2";
function LineChart({ chartData }) {
  return (
    <div style={{height:'40vh'}}>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Total Visits"
            },
            legend: {
              display: false
            }
          },
          elements: {
            line: {
              borderColor: "#7166f9", // Change the line color here
              tension: 0.3,
              borderJoinStyle: "round",
            },
          },
        }}
      />
    </div>
  );
}
export default LineChart;