import React from 'react';
import { Line } from 'react-chartjs-2';
import { ResponsiveLine } from '@nivo/line';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import LineChart from './LineChart';
Chart.register(CategoryScale);
const ChartComponent = ({data}) => {
    
  return (

    <LineChart chartData={data} />
  )
};

export default ChartComponent;
