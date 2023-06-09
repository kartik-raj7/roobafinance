import React from 'react'
import {FaChartBar} from 'react-icons/fa'
import {BiCalendar} from 'react-icons/bi'
import {CgSandClock} from 'react-icons/cg'
import {FaUserAlt} from 'react-icons/fa'
import {IoMdHelpCircle } from 'react-icons/io'
// import {BiSolidHelpCircle} from 'react-icons/bi'
import styles from './dashboardstyle/Dashboardtile.module.scss'
const Dashboardtile = ({icon,help}) => {
  function Icon(){
    if(icon=='chart'){
        return (
            <FaChartBar/>
        )
    }
    else if(icon=='calendar'){
        return(
            <BiCalendar/>
        )
    }
    else if(icon=='clock'){
        return(
            <CgSandClock/>
        )
    }
    else if(icon=='user'){
        return(
            <FaUserAlt/>
        )
    }
  }
  return (
    <div className={styles.dashboardtile}>
        <div className={styles.left}>
        <div className={styles.icon}><Icon/></div>
        <div>icon with percentage</div>
        </div>
        <div className={styles.right}>
            <div className={styles.data}>
            <div className={styles.title}>42,34%</div>
            <div>bounce rate</div>
            </div>
            <div>{help==='help'?<IoMdHelpCircle/>:''}</div>
        </div>
    </div>
  )
}

export default Dashboardtile