import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {FaHome,FaFire} from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import {IoDocumentText} from 'react-icons/io5';
import {BsFillBookmarkFill} from 'react-icons/bs';
import {RiLogoutBoxRFill} from 'react-icons/ri'
import {IoSettingsSharp} from 'react-icons/io5'
import HelpIcon from '@mui/icons-material/Help';
import {IoMdHelpCircle} from 'react-icons/io'
import {BsSearch} from 'react-icons/bs'
import styles from './dashboardstyle/Sidebarcomp.module.scss'
import { useState } from 'react';
const Sidebarcomp = ({children}) => {
  const sidebarstyle={
  top: 0,
  left: 0,
  bottom: 0,
  height:'100vh',
  width: '100px', // Adjust the width as needed
  background: '#f2f2f2',
   
  }
  const menuitemstyles={
    display:'flex',
    // justifyContent:'center',
    alignItems:'center'

  }
  const menuItem={
    
  }
  const activeMenuItem = {
    backgroundColor: '#f3f2fb',
    color: '#7166f9',
    fontWeight: 'bold',
    borderRight:'6px solid #7166f9'
  };
  function setActive(value){
    setselectmenuitem(value);
  }
  const [selectmenuitem,setselectmenuitem] = useState('overview')
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
       
       <MenuItem onClick={()=>setActive('overview')}rootStyles={selectmenuitem==='overview' ? activeMenuItem : menuItem} icon={<FaHome className={styles.iconstyle}/>}>Overview</MenuItem>
       <MenuItem onClick={()=>setActive('opportunities')}rootStyles={selectmenuitem==='opportunities' ? activeMenuItem : menuItem}icon={<FaFire className={styles.iconstyle}/>}>Opportunities</MenuItem>
       <MenuItem onClick={()=>setActive('competitors')}rootStyles={selectmenuitem==='competitors' ? activeMenuItem : menuItem}icon={<FaUserAlt className={styles.iconstyle}/>}>My Competitors</MenuItem>
       <MenuItem onClick={()=>setActive('briefs')}rootStyles={selectmenuitem==='briefs' ? activeMenuItem : menuItem}icon={<IoDocumentText className={styles.iconstyle}/>}>Briefs</MenuItem>
       <MenuItem onClick={()=>setActive('saved')}rootStyles={selectmenuitem==='saved' ? activeMenuItem : menuItem}icon={<BsFillBookmarkFill className={styles.iconstyle}/>}>Saved</MenuItem>
       
       </div>
       <div className={styles.menuitems}>
       <MenuItem icon={<IoSettingsSharp className={styles.iconstyle}/>}>Settings</MenuItem>
       <MenuItem icon={<IoMdHelpCircle className={styles.iconstyle}/>}>Help</MenuItem>
       <MenuItem icon={<RiLogoutBoxRFill className={styles.iconstyle}/>}>Logout</MenuItem>
       
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