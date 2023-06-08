import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {FaHome,FaFire} from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import {IoDocumentText} from 'react-icons/io5';
import {BsFillBookmarkFill} from 'react-icons/bs';
import {RiLogoutBoxRFill} from 'react-icons/ri'
import {IoSettingsSharp} from 'react-icons/io5'
import HelpIcon from '@mui/icons-material/Help';
import {BsSearch} from 'react-icons/bs'
import styles from './dashboardstyle/Sidebarcomp.module.scss'
const Sidebarcomp = ({children}) => {
  const sidebarstyle={
    height:'100vh',
   
  }
  const menuitemstyles={
    display:'flex',
    justifyContent:'center',
    alignItems:'center'

  }
  return (
    <div>
    <div className={styles.sidebar}>
    <Sidebar backgroundColor='#f6f6fb' rootStyles={sidebarstyle}>
      <div className={styles.searchbar}>
        <div className={styles.searchdiv}><BsSearch/></div>
        <h4>Concurred</h4>
      </div>
      
       {/* <SubMenu>
         <MenuItem>Pie Chart</MenuItem>
         <MenuItem>Pie Chart</MenuItem>
       </SubMenu> */}
       <Menu>
       <div className={styles.menu}>
        
       <div className={styles.menuitems}>
       
       <MenuItem ><FaHome className={styles.iconstyle}/>Overview</MenuItem>
       <MenuItem><FaFire className={styles.iconstyle}/>Opportunities</MenuItem>
       <MenuItem><FaUserAlt className={styles.iconstyle}/>My Competitors</MenuItem>
       <MenuItem><IoDocumentText className={styles.iconstyle}/>Briefs</MenuItem>
       <MenuItem><BsFillBookmarkFill className={styles.iconstyle}/>Saved</MenuItem>
       
       </div>
       <div className={styles.menuitems}>
       <MenuItem><IoSettingsSharp className={styles.iconstyle}/>Settings</MenuItem>
       <MenuItem><HelpIcon className={styles.iconstyle}/>Help</MenuItem>
       <MenuItem><RiLogoutBoxRFill className={styles.iconstyle}/>Logout</MenuItem>
       
       </div>
       </div>
       </Menu>
    </Sidebar>
     {children}
    </div>
    </div>
  )
}

export default Sidebarcomp