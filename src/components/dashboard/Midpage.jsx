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
    <div className={styles.title}>
    <h3>Total Visits</h3>
    <h2 className={styles.titleviews}>42,43M</h2>
    </div>
     <ChartComponent data={data}/>
     </div>
     <div className={styles.dashboardtiles}>
        <div className={styles.dashboardtilediv}><Dashboardtile icon={'chart'} help={'help'} grow={'up'} percentage={'4%'} numbers={'4234%'} heading={'Bounce rate'}/></div>
        <div className={styles.dashboardtilediv}><Dashboardtile icon={'calendar'} help={'help'}  numbers={'4234%'} heading={'Pages per visit'}/></div>
        <div className={styles.dashboardtilediv}><Dashboardtile icon={'user'} grow={'down'} percentage={'2.1%'} numbers={'326.60K'} heading={'Total monthly visit'}/></div>
        <div className={styles.dashboardtilediv}><Dashboardtile icon={'time'} grow={'down'} percentage={'2.1%'} numbers={'time'} heading={'Average Visit Duration'}/></div>
     
    </div>
    </div>
    </div>
  )
}

export default Midpage