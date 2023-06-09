import React from 'react'
import styles from './dashboardstyle/Midpage.module.scss'
import { CategoryScale, LinearScale, PointElement } from 'chart.js';
import {BsFillQuestionCircleFill} from 'react-icons/bs'
import { useState } from 'react';
import { Chart } from 'chart.js';
import ChartComponent from './ChartComponent';
import data from '../../data/chartdata';
import Dashboardtile from './Dashboardtile';
const Midpage = () => {
  const [selectedfilter,setselectedfilter] = useState('30');
  function select(value){
      setselectedfilter(value);
  }
  return (
    <div>
    <div className={styles.midpage}>
    <div className={styles.project}>
    <div className={styles.name}>Project Statistic</div>
    <div className={styles.question}><BsFillQuestionCircleFill/></div>
    </div>
    <div className={styles.filters}>
     <div onClick={()=>select('30')}className={selectedfilter==='30'?styles.filtersel:styles.filter}>30 days</div>
     <div onClick={()=>select('60')}className={selectedfilter==='60'?styles.filtersel:styles.filter}>60 days</div>
     <div onClick={()=>select('90')}className={selectedfilter==='90'?styles.filtersel:styles.filter}>90 days</div>
     <div onClick={()=>select('120')}className={selectedfilter==='120'?styles.filtersel:styles.filter}>120 days</div>
    </div>
    </div>
    <div className={styles.datadisplay}>
    <div className={styles.chart}>
     <ChartComponent data={data}/>
     </div>
     <div className={styles.dashboardtiles}>
     <div className={styles.leftsidetiles}>
        <Dashboardtile icon={'chart'} help={'help'}/>
        <Dashboardtile icon={'calendar'} help={'help'}/>
     </div>
     <div className={styles.rightsidetiles}>
     <Dashboardtile icon={'user'} />
        <Dashboardtile icon={'time'}/>
     </div>
    </div>
    </div>
    </div>
  )
}

export default Midpage