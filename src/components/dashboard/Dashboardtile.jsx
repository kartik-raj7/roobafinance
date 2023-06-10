import React from 'react'
import {FaChartBar} from 'react-icons/fa'
import {BiCalendar} from 'react-icons/bi'
import {CgSandClock} from 'react-icons/cg'
import {FaUserAlt} from 'react-icons/fa'
import {IoMdHelpCircle } from 'react-icons/io'
import { FaCaretUp,FaCaretDown } from 'react-icons/fa'
import {GiSandsOfTime} from 'react-icons/gi'
import styles from './dashboardstyle/Dashboardtile.module.scss'
import { useEffect } from 'react'
import { useState } from 'react'
const Dashboardtile = ({ icon, help, grow, numbers, percentage, heading }) => {
    const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  function formatTime(time) {
    const hours = Math.floor(time / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }
  
    function Icon() {
      if (icon === 'chart') {
        return <FaChartBar />;
      } else if (icon === 'calendar') {
        return <BiCalendar />;
      } else if (icon === 'time') {
        return <GiSandsOfTime />;
      } else if (icon === 'user') {
        return <FaUserAlt />;
      }
    }
  
    return (
      <div className={styles.dashboardtile}>
        <div className={styles.left}>
          <div className={styles.icon}>
            <Icon />
          </div>
          <div>
            {grow && grow === 'up' ? (
              <div>
                <FaCaretUp color={'#14ed44'} />
                {percentage}
              </div>
            ) : grow && grow === 'down' ? (
              <div>
                <FaCaretDown color={'#fd3407'} />
                {percentage}
              </div>
            ) : null}
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.data}>
            <div className={styles.title}>
              {numbers==='time'?formatTime(time):numbers}
            </div>
            <div>{heading}</div>
          </div>
          <div>{help === 'help' ? <IoMdHelpCircle /> : ''}</div>
        </div>
      </div>
    );
  };
  
  export default Dashboardtile;