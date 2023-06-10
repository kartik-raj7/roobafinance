import React from 'react'
import { Chart as ChartJS,ArcElement,Tooltip,Legend} from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)
const DoughnutChart = ({data}) => {
    const options = {
        plugins: {
          legend: {
            display: false, 
          },
        },
      };
      const textCentre={
        id:'textCenter',
        beforeDatasetsDraw(chart,args,pluginOptions){
            const {ctx,data} = chart;
            ctx.save();
            ctx.font = "bolder 0.8rem sans-serif";
            ctx.fillStyle = 'black';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(`${data.datasets[0].data[0]}% Direct `,chart.getDatasetMeta(0).data[0].x,chart.getDatasetMeta(0).data[0].y)
        }
    }
  return (
    <Doughnut data={data} options={options} plugins={[textCentre]}/>
  )
}

export default DoughnutChart